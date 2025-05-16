import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AppState {
  loading: boolean;
  pageTitle?: string;
}

const initialState: AppState = {
  loading: false,
};

export const appslice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setLoadingAction: (state: AppState, { payload }: PayloadAction<boolean>) => {
      return {
        ...state,
        loading: payload,
      };
    },
    setPageTitle: (state: AppState, { payload }: PayloadAction<string>) => {
      return {
        ...state,
        pageTitle: payload,
      };
    },
  },
});

export const { setLoadingAction, setPageTitle } = appslice.actions;
export default appslice.reducer;
