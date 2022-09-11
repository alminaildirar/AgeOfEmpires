import React from "react";
import { Tabs, Tab } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

function AgeTabs() {
 const ages = ["All", "Dark", "Feudal", "Castle", "Imperial"];
  const dispatch = useDispatch();
  const age = useSelector((state) => state.age);

  return (
    <Tabs
      id="age-selector"
      activeKey={age}
      value={age}
      onSelect={(selectedAge) => {
        dispatch({ type: "AGE_FILTER", payload: selectedAge });
      }}
      className="mb-3"
    >
      {ages.map((age, index) => (
        <Tab key={index} eventKey={age} title={age} />
      ))}
    </Tabs>
  );
}

export default AgeTabs;
