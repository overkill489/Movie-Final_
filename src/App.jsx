import React from "react";
import "./App.css";
import Navbar from "./components/NavBar/Navbar";
import MovieList from "./components/NavBar/movie-list/MovieList";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MovieDetails from "./components/NavBar/movie-list/MovieDetails";
import SearchBar from "./assets/SearchBar";
import Footer from "./components/footer";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <div className="wrapper">
                  <SearchBar />
                </div>
                <MovieList type="popular" title="Popular Movies" />
                <MovieList type="top_rated" title="Top Rated Movies" />
                <MovieList type="upcoming" title="Upcoming Movies" />
              </>
            }
          />

          <Route path="/movies/:id" element={<MovieDetails />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
