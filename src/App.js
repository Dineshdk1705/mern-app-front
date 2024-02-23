import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";

// components
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import MovieDetails from "./components/MovieDetails/MovieDetails";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div className="container">
          <Header></Header>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movie/:imbdID" element={<MovieDetails />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
