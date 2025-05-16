import { combineReducers, Reducer } from '@reduxjs/toolkit';
import { PersistConfig, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import createCompressor from 'redux-persist-transform-compress';

import app from './app.slice';
import navigation from './navigation.slice';
import { auth } from './persistors';
import { ResetAction, RootState } from './types';

import { isProd } from '@/config';

const reducers = combineReducers({
  app,
  auth,
  navigation,
});

const resetRootReducer: Reducer<RootState, ResetAction> = (state, action) => {
  const resetActions = ['user/logOutAction', 'app/resetApp'];
  if (resetActions.includes(action.type)) {
    return reducers({ app: {} as ReturnType<typeof app> }, action);
  }
  return reducers(state, action);
};

const getBlacklist = (): string[] => {
  if (isProd) {
    return [];
  }
  return ['app', 'network', 'toast'];
};

const compressor = createCompressor();
const config: PersistConfig<RootState> = {
  key: 'primary-1',
  version: 1,
  storage,
  blacklist: getBlacklist(),
  transforms: [compressor],
};

export const persistedReducer = persistReducer(config, resetRootReducer);
