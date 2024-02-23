import React, { useEffect } from "react";
import MovieListing from "../MovieListing/MovieListing";
import { useDispatch } from "react-redux";
import {
  fetchAsyncMovies,
  fetchAsyncShows,
} from "../../features/movies/movieSlice";

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
      <div className="banner-image"></div>
      <MovieListing />
    </div>
  );
};

export default Home;
