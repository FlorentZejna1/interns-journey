import React from "react";
import Quotes from "./Quotes";
import { quotes } from "./QuotesList";

function Solution14(props) {
  return (
    <div>
      <h1>Solution for assignment #{props.assignmentId}</h1>
      <Quotes quotes={quotes} />
    </div>
  );
}

export default Solution14;
