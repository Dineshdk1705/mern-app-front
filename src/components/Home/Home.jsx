import React, { useEffect } from "react";
import MovieListing from "../MovieListing/MovieListing";
import { useDispatch } from "react-redux";
import {
  fetchAsyncMovies,
  fetchAsyncShows,
} from "../../features/movies/movieSlice";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Home = () => {
  const dispatch = useDispatch();
  const movieDefaultText = "Harry";
  const showDefaultText = "Friends";

  useEffect(() => {
    dispatch(fetchAsyncMovies(movieDefaultText));
    dispatch(fetchAsyncShows(showDefaultText));
  }, [dispatch]);

  return (
    <div>
      <Header />
      <div className="banner-image"></div>
      <MovieListing />
      <Footer />
    </div>
  );
};

export default Home;
