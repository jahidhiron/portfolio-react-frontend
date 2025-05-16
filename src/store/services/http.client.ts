import { AxiosError, AxiosResponse } from 'axios';
import { call, delay, put, select } from 'redux-saga/effects';

import { appslice } from '../slices/app.slice';
import { authSlice } from '../slices/auth.slice';

import { HttpClientParams, SagaGenerator, UserState } from './interfaces';

import { errorMessage } from '@/components/helpers/notification';
import { errorLog } from '@/config';
import logsData from '@/config/log';
import { logout } from '@/store/actions/auth.actions.types';
import { axiosInstance } from '@/utils';

function* generateRefreshToken(): SagaGenerator {
  try {
    const token: UserState['token'] = yield select(({ user }: { user: UserState }) => user.token);
    if (!token?.refreshToken) return null;

    const { data }: AxiosResponse<{ accessToken: string; refreshToken: string }> = yield call(
      axiosInstance.request,
      {
        method: 'POST',
        url: '/auth/refresh-token',
        data: { refreshToken: token?.refreshToken },
      }
    );

    const accessToken = data?.accessToken;
    const refreshToken = data?.refreshToken;

    if (accessToken && refreshToken) {
      yield put(authSlice.actions.setAuthenticationToken({ accessToken, refreshToken }));
      return accessToken;
    }

    return null;
  } catch (err: any) {
    const refreshTokenError = logsData?.api?.refresh_token || {};
    const errorPayload = {
      ...refreshTokenError,
      message: err?.message || refreshTokenError.message,
      stack: err?.stack,
    };

    errorLog(errorPayload);
    return null;
  }
}

function* handleHttpError(error: AxiosError, authorization: boolean): SagaGenerator {
  const status = error?.status;
  const message = error?.message;

  switch (status) {
    case 401: {
      if (!authorization) {
        errorMessage('Unauthorized request.');
        break;
      }

      const accessToken = yield* generateRefreshToken();

      if (accessToken) {
        return { retry: true };
      }

      yield delay(500);
      yield put(logout());
      break;
    }

    case 402: {
      /**
       * @todo
       * we may do redirect /auth/402 page later
       */
      errorMessage('Payment required. Please check your subscription.');
      break;
    }

    case 403: {
      /**
       * @todo
       * we may do redirect /auth/403 page later
       */
      errorMessage('Access denied. You do not have permission.');
      break;
    }

    case 500: {
      /**
       * @todo
       * we may do redirect /auth/500 page later
       */
      errorMessage('Internal server error. Please try again later.');
      break;
    }

    default: {
      errorMessage(message);
    }
  }

  return { retry: false };
}

function* httpClient({
  payload,
  isLoader = true,
  authorization = true,
  headers = {},
}: HttpClientParams): SagaGenerator {
  if (isLoader) {
    yield put(appslice.actions.setLoadingAction(true));
    yield delay(250);
  }

  const data = { ...payload };

  if (authorization) {
    const token: UserState['token'] = yield select(({ user }: { user: UserState }) => user.token);
    if (token?.accessToken) {
      data.headers = { Authorization: `Bearer ${token.accessToken}`, ...headers };
    } else {
      yield put(appslice.actions.setLoadingAction(false));
      return { error: true, result: null };
    }
  }

  try {
    const { data: result }: AxiosResponse<any> = yield call(axiosInstance.request, data);

    yield put(appslice.actions.setLoadingAction(false));
    return { error: null, result };
  } catch (error) {
    const { retry } = yield* handleHttpError(error as AxiosError, authorization);

    if (retry && authorization) {
      const token: UserState['token'] = yield select(({ user }: { user: UserState }) => user.token);
      if (token?.accessToken) {
        data.headers = { Authorization: `Bearer ${token.accessToken}`, ...headers };
      }

      try {
        const { data: retriedResult }: AxiosResponse<any> = yield call(axiosInstance.request, data);
        yield put(appslice.actions.setLoadingAction(false));

        return { error: null, result: retriedResult };
      } catch (err) {
        yield put(appslice.actions.setLoadingAction(false));
        return { error: err, result: null };
      }
    }

    yield put(appslice.actions.setLoadingAction(false));
    return { error, result: null };
  }
}

export default httpClient;
