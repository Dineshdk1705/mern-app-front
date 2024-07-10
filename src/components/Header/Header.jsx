import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
// import user from "../../images/user.png";
import "./Header.scss";
import { useDispatch } from "react-redux";
import {
  fetchAsyncMovies,
  fetchAsyncShows,
} from "../../features/movies/movieSlice";
import { handleSuccess } from "../../util";
import { ToastContainer } from "react-toastify";

const Header = () => {
  const [searchText, setSearchText] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchText?.trim().length > 0) {
      dispatch(fetchAsyncMovies(searchText));
      dispatch(fetchAsyncShows(searchText));
    }
    setSearchText("");
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("loggedInUser");
    handleSuccess("Successfully Logged out");
    setTimeout(() => {
      navigate("/login");
    }, 1000);
  };

  return (
    <>
      <div className="header">
        <div className="logo">
          <NavLink to="/">Movie Palace</NavLink>
        </div>
        <div className="search-bar">
          <form onSubmit={handleSearchSubmit}>
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
        <div className="header__btn_outer">
          <button type="button" className="header__btn" onClick={handleLogout}>
            Logout
          </button>
        </div>
        {/* <div className="user-image">
        <img src={user} alt="user" />
      </div> */}
      </div>
      <ToastContainer />
    </>
  );
};

export default Header;
