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

describe("AGE FILTER", () => {
  it("should test Age action", () => {
    const actionReturnValue = actionFilter(initialState, {
      type: "AGE_FILTER",
      payload: "All",
    });
    expect(actionReturnValue.age).toEqual("All");
  });

  it("should test Age filter", () => {
    const actionReturnValue = actionFilter(initialState, {
      type: "AGE_FILTER",
      payload: "Dark",
    });

    expect(actionReturnValue.units).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          age: "Dark",
        }),
      ])
    );
  });
});
