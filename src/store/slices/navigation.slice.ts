import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { NavigationState } from './interfaces/navigation.slice.interface';

const initialState: NavigationState = {
  navigateReady: false,
};

const navigationSlice = createSlice({
  name: 'navigation',
  initialState,
  reducers: {
    setNavigateReady: (state, action: PayloadAction<boolean>) => {
      state.navigateReady = action.payload;
    },
  },
});

export const { setNavigateReady } = navigationSlice.actions;
export default navigationSlice.reducer;
