import actionFilter from "../redux/reducers";
import data from "../data/age-of-empires-units.json";

const initialState = {
  units: data.units,
  filterOutput: null,
  age: "All",
  wood: { checked: false, value: [0, 200] },
  food: { checked: false, value: [0, 200] },
  gold: { checked: false, value: [0, 200] },
};

describe("COST FILTER", () => {
  it("should test Cost action", () => {
    const actionReturnValue = actionFilter(initialState, {
      type: "COST_FILTER",
      payload: "wood: { checked: false, value: [0, 200] }",
    });
    expect(actionReturnValue.wood).toEqual({ checked: false, value: [0, 200] });
  });

});
