import React from "react";
import { Outlet } from "react-router-dom";
import "./App.scss";

const App = () => {
  return (
    <div>
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
};

export default App;
