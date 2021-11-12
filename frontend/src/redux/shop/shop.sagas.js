import { takeLatest, put, call } from 'redux-saga/effects';
import { fetchRobotFailure, fetchRobotSuccess } from './shop.actions';
import { fetchRobots } from '../../shared/api';
import ShopActionTypes from './shop.types';

export function* onFetchRobot() {
  try {
    const res = yield call(fetchRobots);
    yield put(fetchRobotSuccess(res.data.data));
  } catch (error) {
    yield put(fetchRobotFailure(error.message));
  }
}

export function* onFetchRobotStart() {
  yield takeLatest(ShopActionTypes.FETCH_ROBOT_START, onFetchRobot);
}
