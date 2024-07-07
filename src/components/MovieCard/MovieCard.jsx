import React from "react";
import { Link } from "react-router-dom";
import "./MovieCard.scss";
import no_poster from "../../images/poster.jpg";

const MovieCard = (props) => {
  const { data } = props;

  return (
    <div className="card-item">
      <Link to={`movie/${data.imdbID}`}>
        <div className="card-inner">
          <div className="card-top">
            <img
              src={data.Poster !== "N/A" ? data.Poster : no_poster}
              alt={data.Title}
            />
          </div>
          <div className="card-bottom">
            <div className="card-info">
              <h4>{data.Title}</h4>
              <p>{data.Year}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;
