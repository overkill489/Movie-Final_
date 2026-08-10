import React, { useEffect, useState } from "react";
import "./SearchBar.css";

function Search() {
  const handleSearch = async (value) => {
    if (!value.trim()) {
      setData([]);
      return;
    }

    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=e50eb4b021e5d0fe1f6cc5e3ff2dc49f&query=${encodeURIComponent(value)}`,
    );
    const result = await response.json();
    setData(result.results || []);
  };

  const [data, setData] = useState([]);

  return (
    <div className="search-top">
      <div className="search">
        <input
          type="text"
          placeholder="Search Movies"
          onChange={(e) => handleSearch(e.target.value)}
        />
      </div>
      <div className="search-result">
        {data.map((d, i) => (
          <div key={i}>{d.name}</div>
        ))}
      </div>
    </div>
  );
}

export default Search;
