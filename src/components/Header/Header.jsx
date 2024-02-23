import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import user from "../../images/user.png";
import "./Header.scss";
import { useDispatch } from "react-redux";
import {
  fetchAsyncMovies,
  fetchAsyncShows,
} from "../../features/movies/movieSlice";

const Header = () => {
  const [searchText, setSearchText] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchText?.trim().length > 0) {
      dispatch(fetchAsyncMovies(searchText));
      dispatch(fetchAsyncShows(searchText));
    } else {
      alert("Please search any movie or show !");
    }
    setSearchText("");
  };

  return (
    <div className="header">
      <div className="logo">
        <NavLink to="/">Movie App</NavLink>
      </div>
      <div className="search-bar">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={searchText}
            placeholder="Search movie or show here"
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button type="submit">
            <i className="fa fa-search"></i>
          </button>
        </form>
      </div>
      <div className="user-image">
        <img src={user} alt="user" />
      </div>
    </div>
  );
};

export default Header;
