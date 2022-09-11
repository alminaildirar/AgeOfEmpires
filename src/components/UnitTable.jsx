import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCostValues } from "../utils/utils";

const UnitTable = () => {
  const units = useSelector((state) =>
    state.filterOutput ? state.filterOutput : state.units
  );
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Age</th>
            <th>Cost</th>
          </tr>
        </thead>
        <tbody>
          {units &&
            units.map((unit) => {
              return (
                <tr key={unit.id}>
                  <td>{unit.id}</td>
                  <td>
                    <Link to={`/unit-details/${unit.id}`}>{unit.name}</Link>
                  </td>
                  <td>{unit.age}</td>
                  <td>{getCostValues(unit.cost)}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default UnitTable;
