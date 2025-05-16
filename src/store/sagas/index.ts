import { all } from 'redux-saga/effects';

import app from './app.saga';

export default function* sagas(): Generator {
  yield all([app()]);
}
