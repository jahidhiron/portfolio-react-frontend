import { configureStore, Middleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { Persistor, persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';

import rootSaga from './sagas';
import { persistedReducer } from './slices';

import { isProd } from '@/config';

const sagaMiddleware = createSagaMiddleware();
const middlewares: Middleware[] = [sagaMiddleware];

if (!isProd) {
  middlewares.push(logger);
}

export const configureMainStore = () => {
  const store = configureStore({
    reducer: persistedReducer,
    middleware: (defaultMiddleware) =>
      defaultMiddleware({
        serializableCheck: false,
      }).concat(...middlewares),
    devTools: !isProd,
  });

  sagaMiddleware.run(rootSaga);

  const persistor: Persistor = persistStore(store);

  return { store, persistor };
};

const { store, persistor } = configureMainStore();
export { persistor, store };

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
