import { put, takeLatest } from "redux-saga/effects";
import { types } from '../types';

function* costFilter(action) {
    yield put({ type: types.COST, payload: action.payload });
    yield put({ type: types.FILTER });
  }

export function* watchCostSaga() {
    yield takeLatest(types.COST_FILTER, costFilter);
}