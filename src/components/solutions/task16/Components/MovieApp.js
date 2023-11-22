import React, { useState } from "react";
import SearchBar from "./SearchBar";
import MovieList from "./MovieList";

function MovieApp() {
  const [search, setSearch] = useState("");
  const [movie, setMovie] = useState("thor");
  const [selected, setSelected] = useState({});

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = () => {
    setMovie(search);
    setSearch("");
  };

  const openDetail = async (id) => {
    await fetch(`https://www.omdbapi.com/?i=${id}&apikey=d16ce08a`)
      .then((res) => res.json())
      .then((data) => {
        setSelected(data);
      });
  };

  const handleClick = () => {
    setSelected({});
  };

  return (
    <div className="movie-search">
      {Object.keys(selected).length === 0 ? (
        <SearchBar
          search={search}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      ) : null}
      {movie === "" ? (
        <h1 className="movie-emptyField">Input a movie</h1>
      ) : (
        <MovieList
          movie={movie}
          selected={selected}
          openDetail={openDetail}
          handleClick={handleClick}
        />
      )}
    </div>
  );
}

export default MovieApp;
