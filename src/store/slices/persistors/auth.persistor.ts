import { PersistConfig, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { encryptTransform } from 'redux-persist-transform-encrypt';

import userSlice from '../auth.slice';

const authEncryptor = encryptTransform({
  secretKey: 'jahid-ac-auth',
});

const authPersistorConfig: PersistConfig<any> = {
  key: 'auth',
  storage,
  transforms: [authEncryptor],
};

export const auth = persistReducer(authPersistorConfig, userSlice);
