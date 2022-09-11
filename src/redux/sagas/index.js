import { all } from "redux-saga/effects";
import { watchAgeSaga } from "./ageSaga";
import { watchCostSaga } from "./costSaga";
import { watchFilterSaga } from "./filterSaga";


export default function* rootSaga() {
  yield all([
    watchAgeSaga(),
    watchCostSaga(),
    watchFilterSaga(),
  ]);
}
