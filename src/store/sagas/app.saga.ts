import { SagaIterator } from 'redux-saga';
import { all, fork, take } from 'redux-saga/effects';

import { History } from '../services';
import { setNavigateReady } from '../slices/navigation.slice';

function* waitForNavigateReady(): SagaIterator {
  const action: ReturnType<typeof setNavigateReady> = yield take(setNavigateReady.type);

  if (action.payload) {
    History.push('/');
  } else {
    // @todo Handle uninitialized navigation
  }
}

export default function* App(): SagaIterator {
  yield all([fork(waitForNavigateReady)]);
}
