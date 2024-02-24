import React from "react";
import { Outlet } from "react-router-dom";
import "./App.scss";
// components
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div>
      <div className="container">
        <Header />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default App;
