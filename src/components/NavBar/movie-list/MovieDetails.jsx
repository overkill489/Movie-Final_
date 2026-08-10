import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./MovieDetails.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import MovieCard from "./Moviecard";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [recommendedMovies, setRecommendedMovies] = useState([]);

  useEffect(() => {
    async function fetchMovie() {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=e50eb4b021e5d0fe1f6cc5e3ff2dc49f`,
      );
      const data = await response.json();
      setMovie(data);
      const recommendedResponse = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=e50eb4b021e5d0fe1f6cc5e3ff2dc49f`,
      );

      const recommendedData = await recommendedResponse.json();
      setRecommendedMovies(recommendedData.results);
    }

    fetchMovie();
  }, [id]);

  if (!movie) return <p>Loading...</p>;

  return (
    <main id="movies_main">
      <Link to="/" className="movie__link">
        <FontAwesomeIcon icon={faArrowLeft} /> 
       <h2 className="movie__selected--title--top">Movies</h2>
      </Link>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="movie__selected--img"
      />

      <h1>{movie.title}</h1>
      <p className="movie__selected--description">{movie.overview}</p>

      <div className="movies__container">
        <div className="row">
          <div className="movie__selected--top">
            <h2 className="movie__selected--title--top">Recommended Movies</h2>
          </div>
          <div className="movies">
            {recommendedMovies.slice(0, 4).map((recommendedMovie) => (
              <MovieCard movie={recommendedMovie} key={recommendedMovie.id} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default MovieDetails;
