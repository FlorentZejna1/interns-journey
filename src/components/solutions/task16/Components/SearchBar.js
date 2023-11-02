import React, { useState } from "react";

function SearchBar({ search, handleChange, handleSubmit }) {
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
    </>
  );
}

export default SearchBar;
