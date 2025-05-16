import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AuthState, Token, UserDetails } from './interfaces';

const initialState: AuthState = {
  userDetails: null,
  token: null,
};

export const authSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthenticationToken: (state: AuthState, { payload }: PayloadAction<Token | null>) => {
      state.token = payload;
    },
    loginAction: (state: AuthState, { payload }: PayloadAction<UserDetails>) => {
      state.userDetails = payload;
    },
    logOutAction: (state: AuthState) => {
      state.userDetails = null;
      state.token = null;
    },
  },
});

export const { setAuthenticationToken, loginAction, logOutAction } = authSlice.actions;
export default authSlice.reducer;
