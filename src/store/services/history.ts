import { NavigateFunction, NavigateOptions, To } from 'react-router-dom';

import { errorLog } from '@/config';
import logsData from '@/config/log';

let navigate: NavigateFunction | null = null;

const setNavigate = (navFn: NavigateFunction): void => {
  navigate = navFn;
};

type NavigateArgs = [to: To, options?: NavigateOptions];

const push = (...args: NavigateArgs): void => {
  if (!navigate) {
    errorLog(logsData?.navigation?.not_initialized);
    return;
  }
  navigate(...args);
};

export const History = {
  setNavigate,
  push,
};
