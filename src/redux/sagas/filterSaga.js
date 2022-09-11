import { put, select, takeLatest } from "redux-saga/effects";
import { types } from "../types";

function* filter() {
  const state = yield select();
  let filtered = state.units;

  const filterCost = (costType) => {
    const resource = costType.toLowerCase();
    return filtered.filter((unit) => {
      if (
        !(
          state[resource].value[0] === 0 &&
          (unit.cost === null || unit.cost[resource] === undefined)
        )
      ) {
        return (
          unit.cost &&
          unit.cost[costType] >= state[resource].value[0] &&
          unit.cost[costType] <= state[resource].value[1]
        );
      }
      return true;
    });
  };

  state.age !== "All" &&
    (filtered = filtered.filter((unit) => unit.age === state.age));
  state.wood.checked && (filtered = filterCost("Wood"));
  state.food.checked && (filtered = filterCost("Food"));
  state.gold.checked && (filtered = filterCost("Gold"));

  yield put({ type: types.SET_FILTERED, payload: filtered });
}

export function* watchFilterSaga() {
  yield takeLatest(types.FILTER, filter);
}
