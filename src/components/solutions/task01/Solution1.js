import React from "react";
import Hello from "./HelloWorld";

function Solution1(props) {
  return (
    <div>
      <h1>Solution for assignment #{props.assignmentId}</h1>
      <Hello />
    </div>
  );
}

export default Solution1;
