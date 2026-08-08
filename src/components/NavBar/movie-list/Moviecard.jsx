import React from "react";
import "./Moviecard.css";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <Link to={`/movies/${movie.id}`} className="movie_card">
      <img
        src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
        className="movie_poster"
      />
      <div className="movie_details">
        <h3 className="movie_details_heading">{movie.original_title}</h3>
      </div>
    </Link>
  );
};

export default MovieCard;
