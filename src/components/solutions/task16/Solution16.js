import React from "react";
import MovieApp from "./Components/MovieApp";

function Solution16(props) {
  return (
    <div>
      <h1>Solution for assignment #{props.assignmentId}</h1>
      <div className="movie-container">
        <MovieApp />
      </div>
    </div>
  );
}

export default Solution16;
