import React from "react";
import { Link } from "react-router-dom";

const MovieDetails = () => {
  return (
    <div>
      <main id="movies_main">
        <div className="movies_container">
          <div className="row">
            <div className="movie_selected-top">
              <Link to="/" className="movie_link">
                <h2 className="movie_selected-title-top">Movies</h2>
              </Link>
            </div>
            <div className="movie_selected">
              <figure className="movie_figure-img">
                <img
                  src={movie.post_path}
                  alt=""
                />
              </figure>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MovieDetails;
