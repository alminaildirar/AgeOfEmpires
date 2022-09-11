import { put, takeLatest } from "redux-saga/effects";
import { types } from '../types';

//Worker Saga
function* ageFilter(action) {
  yield put({ type: types.AGE, payload: action.payload });
  yield put({ type: types.FILTER });
}

export function* watchAgeSaga() {
  yield takeLatest(types.AGE_FILTER, ageFilter);
}

