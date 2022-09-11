import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from '../pages/Home';
import Units from '../pages/Units';
import Details from '../pages/Details';
import Page404 from '../pages/Page404';


function PageRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/units" element={<Units />} />
      <Route path="/unit-details">
        <Route path=":unitId" element={<Details />} />
      </Route>
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}

export default PageRoutes;
