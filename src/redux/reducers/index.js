import data from "../../data/age-of-empires-units.json";
import { getCostKeys } from "../../utils/utils";
import { types } from "../types";

const initialState = {
  units: data.units,
  filterOutput: null,
  age: "All",
};

//Used map function in order to get cost properties dynamically
getCostKeys(data).map(
  (key) => (initialState[`${key}`] = { checked: false, value: [0, 200] })
);

export default function actionFilter(state = initialState, action) {
  switch (action.type) {
    case types.AGE: {
      return {
        ...state,
        age: action.payload,
      };
    }

    case types.COST: {
      if (action.payload.value) {
        return {
          ...state,
          [action.payload.costName]: {
            checked: state[action.payload.costName].checked,
            value: action.payload.value,
          },
        };
      } else if (
        action.payload.checked === true ||
        action.payload.checked === false
      ) {
        return {
          ...state,
          [action.payload.costName]: {
            checked: action.payload.checked,
            value: state[action.payload.costName].value,
          },
        };
      }
      break;
    }

    case types.SET_FILTERED:
      return {
        ...state,
        filterOutput: action.payload,
      };

    default:
      return state;
  }
}
