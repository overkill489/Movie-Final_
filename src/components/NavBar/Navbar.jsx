import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();



  return (
    <nav className="navbar">
      <h1 className="navbar__title">Movie</h1>

      <div className="navbar__links">
        <a href="#popular">Popular</a>
        <a href="#top_rated">Top rated</a>
        <a href="#upcoming">Upcoming</a>
      </div>
    </nav>
  );
};

export default Navbar;
