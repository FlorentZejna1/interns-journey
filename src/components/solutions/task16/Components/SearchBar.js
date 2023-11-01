import React, { useState } from "react";
import MovieList from "./MovieList";

function SearchBar() {
  const [search, setSearch] = useState("");
  const [movie, setMovie] = useState("hulk");

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = () => {
    setMovie(search);
    setSearch("");
  };

  return (
    <>
      <input
        className="movie-input"
        value={search}
        onChange={handleChange}
        placeholder="Enter Movie or Series name"
      />
      <button className="movie-button" onClick={handleSubmit}>
        Search
      </button>
      <MovieList movie={movie} />
    </>
  );
}

export default SearchBar;
