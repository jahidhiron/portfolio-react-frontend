import { createAction } from 'redux-actions';

export const LOGIN = 'LOGIN';
export const login = createAction(LOGIN);

export const SIGNUP = 'SIGNUP';
export const signup = createAction(SIGNUP);

export const RE_SEND_VERIFY_EMAIL_TOKEN = 'RE_SEND_VERIFY_EMAIL_TOKEN';
export const resendVerifyEmailToken = createAction(RE_SEND_VERIFY_EMAIL_TOKEN);

export const VERIFY_EMAIL = 'VERIFY_EMAIL';
export const verifyEmail = createAction(VERIFY_EMAIL);

export const FORGOT_PASSWORD = 'FORGOT_PASSWORD';
export const forgotPassword = createAction(FORGOT_PASSWORD);

export const RESET_PASSWORD = 'RESET_PASSWORD';
export const resetPassword = createAction(RESET_PASSWORD);

export const CHANGE_PASSWORD = 'CHANGE_PASSWORD';
export const changePassword = createAction(CHANGE_PASSWORD);

export const LOGOUT = 'LOGOUT';
export const logout = createAction(LOGOUT);
