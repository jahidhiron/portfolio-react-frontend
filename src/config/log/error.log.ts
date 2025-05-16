import { apiBaseURL, isDev } from '../env';

import { ErrorPayload } from './interfaces';

import { customError } from '@/errors';

const endpoint = `${apiBaseURL}/log`;

const sendErrorLog = async (payload: ErrorPayload): Promise<void> => {
  try {
    await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });
  } catch (err) {
    console.error('Error to store error-log:', err);
  }
};

export const errorLog = (payload: ErrorPayload = {}): void => {
  if (!isDev) {
    if (Object.keys(payload).length > 0) {
      sendErrorLog(payload);

      if (payload.message) {
        customError(payload?.message, payload?.stack, payload?.name);
      }
    }
  }
};
