import React from "react";
import AgeTabs from "../components/AgeTabs";
import FilterBar from "../components/FilterBar";
import UnitTable from "../components/UnitTable";

const Units = () => {

  return (
    <div className="units container">
      <h1>Units Page</h1>
      <div className="container">
        <div className="ages">
          <h3>Ages</h3>
          <AgeTabs />
        </div>
        <div className="rangeBar">
          <FilterBar label="wood" />
          <FilterBar label="food" />
          <FilterBar label="gold" />
        </div>
        <UnitTable />
      </div>
    </div>
  );
};

export default Units;
