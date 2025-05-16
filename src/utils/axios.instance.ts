import axios, { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios';

import { getValueSafely } from './get-value-safely';

import { apiBaseURL } from '@/config';
import i18n from '@/i18n';

export const axiosInstance = axios.create({
  baseURL: apiBaseURL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'x-accept-language': i18n.language,
  },
  timeout: 2 * 60 * 1000,
});

axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    return config;
  },
  (error: AxiosError) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError) => {
    const status = getValueSafely(error, 'response.status');
    const message =
      getValueSafely(error, 'response.data.message') ||
      error.message ||
      'An unknown error occurred';

    const errorPayload = {
      status: status ?? 500,
      message,
      original: error,
    };

    return Promise.reject(errorPayload);
  }
);
