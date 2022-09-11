import React from "react";
import "./App.css";
import "./App.scss";
import PageRoutes from "./routes/Routes";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <PageRoutes />
    </div>
  );
}

export default App;
