import React from "react";
import "./App.css";
import Navbar from "./components/NavBar/Navbar";
import MovieList from "./components/NavBar/movie-list/MovieList";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MovieDetails from "./components/NavBar/movie-list/MovieDetails";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <MovieList title="Popular Movies" />
        <MovieList title="Top Rated Movies" />
        <MovieList title="Upcoming Movies" />
        <Routes>
          <Route path="/movies/:id" element={<MovieDetails />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
