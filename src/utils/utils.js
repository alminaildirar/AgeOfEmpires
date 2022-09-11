//This helper function get cost keys in order to get cost properties dynamically
export const getCostKeys = (data) => {
  let costKeys = [];
  data.units.map(
    (unit) =>
      unit.cost &&
      Object.keys(unit.cost).map((key) => costKeys.push(key.toLowerCase()))
  );
  return costKeys.filter((x, i, a) => a.indexOf(x) === i);
};


//This helper function get cost values in order to show in unit table
export const getCostValues = (cost) => {
  let costValues = [];
  if (!cost) {
    costValues.push("No cost");
    return costValues;
  } else {
    cost.Wood && costValues.push(`Wood: ${cost.Wood}`);
    cost.Food && costValues.push(`Food: ${cost.Food}`);
    cost.Gold && costValues.push(`Gold: ${cost.Gold}`);
  }
  return costValues.join(", ");
};
