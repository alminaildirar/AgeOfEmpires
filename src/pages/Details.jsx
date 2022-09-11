import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";

function Details() {
  const { unitId } = useParams();
  const unit =
    useSelector((state) =>
      state.units.find((unit) => unit.id === parseInt(unitId))
    ) || {};
  const unitCost = unit.cost ? unit.cost : "No Cost";

  const getDetailProperties = () => {
    let properties = [];
    Object.keys(unit).map(
      (property) => property !== "cost" && properties.push(property)
    );
    return properties;
  };

  return (
    <div className="detail container">
      <h1>Unit Detail Page</h1>
      <table>
        <tbody>
          {getDetailProperties().map((property, i) => {
            return (
              <tr key={i}>
                <td>{property.split("_").join(" ")} :</td>
                <td>
                  {unit[`${property}`] ? unit[`${property}`] : `No ${property}`}
                </td>
              </tr>
            );
          })}
          <tr>
            <td>Wood Cost:</td>
            <td>{unitCost.Wood ? unit.cost.Wood : "No Wood"}</td>
          </tr>
          <tr>
            <td>Food Cost:</td>
            <td>{unitCost.Food ? unit.cost.Food : "No Food"}</td>
          </tr>
          <tr>
            <td>Gold Cost:</td>
            <td>{unitCost.Gold ? unit.cost.Gold : "No Gold"}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Details;
