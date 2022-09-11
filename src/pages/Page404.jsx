import React from "react";
import { Link } from "react-router-dom";

function Page404() {
  return (
    <div className="home">
      <h1>PAGE NOT FOUND</h1>
      <Link to="/">Back to home page</Link>
    </div>
  );
}

export default Page404;
