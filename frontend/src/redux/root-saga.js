import { all, call } from 'redux-saga/effects';

import { onFetchRobotStart } from './shop/shop.sagas';

export default function* rootSaga() {
  yield all([call(onFetchRobotStart)]);
}
