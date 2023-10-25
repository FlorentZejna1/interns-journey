import React, { useState } from "react";
import "../style/solutions.css";
function Calculator() {
  const [state, setState] = useState({
    numOne: "",
    numTwo: "",
  });
  const [results, setResults] = useState("");

  const handleChange = (e) => {
    if (e.target.value === "00" ) return null;
    setState({ ...state, [e.target.name]: e.target.value});
  };

  const handleSum = () => {
    if (state.numOne === "" || state.numTwo === "") {
      setResults("Please enter a number");
    } else {
      const num = parseFloat(state.numOne) + parseFloat(state.numTwo);
      setResults(num);
      setState({ numOne: "", numTwo: "" });
    }
  };

  const handleSub = () => {
    if (state.numOne === "" || state.numTwo === "") {
      setResults("Please enter a number");
    } else {
      const num = parseFloat(state.numOne) - parseFloat(state.numTwo);
      setResults(num);
      setState({ numOne: "", numTwo: "" });
    }
  };

  const handleMul = () => {
    if (state.numOne === "" || state.numTwo === "") {
      setResults("Please enter a number");
    } else {
      const num = parseFloat(state.numOne) * parseFloat(state.numTwo);
      setResults(num);
      setState({ numOne: "", numTwo: "" });
    }
  };

  const handleDiv = () => {
    if (state.numOne === "" || state.numTwo === "") {
      setResults("Please enter a number");
    } else if (state.numOne === "0" && state.numTwo === "0") {
      setResults("It is undefined");
    } else if (state.numTwo === "0") {
      setResults("Cannot divide by zero");
    } else {
      const num = parseFloat(state.numOne) / parseFloat(state.numTwo);
      setResults(num);
      setState({ numOne: "", numTwo: "" });
    }
  };

  return (
    <div className="calculatorApp">
      <div className="calculator-conatiner">
        <div className="calculator-input">
          <input
            className="calculatorInput-field"
            type="number"
            name="numOne"
            value={state.numOne}
            onChange={handleChange}
            placeholder="Please input a number"
            autoComplete="off"
          />
          <input
            type="number"
            className="calculatorInput-field"
            name="numTwo"
            value={state.numTwo}
            onChange={handleChange}
            placeholder="Please input a number"
            autoComplete="off"
          />
        </div>
        <div className="calculator-operations">
          <button className="calculatorSum" onClick={handleSum}>
            +
          </button>
          <button className="calculatorSub" onClick={handleSub}>
            -
          </button>
          <button className="calculatorMul" onClick={handleMul}>
            *
          </button>
          <button className="calculatorDiv" onClick={handleDiv}>
            /
          </button>
        </div>
        {/* <h3>Your result is :</h3> */}
        <h1 className="calculator-results">{results}</h1>
      </div>
    </div>
  );
}

export default Calculator;
