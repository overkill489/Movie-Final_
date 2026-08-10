import React, { useEffect, useState } from "react";
import "./SearchBar.css";

function Search() {
  useEffect(() => {
    fetch("http://www.omdbapi.com/?i=tt3896198&apikey=8660b06b")
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setFilterData(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const handleSearch = (value) => {
    const res = filterData.filter((f) => f.title.toLowerCase().includes(value));
    setData(res);
  };

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
