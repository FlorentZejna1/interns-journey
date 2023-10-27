import React, { useState } from "react";
import "../style/solutions.css"

function Counter(){
    const [num, setNum] = useState(0)

    const handleIncrement = () =>{
        setNum(prev => prev + 1)
    }

    const handleDecrement = () =>{
        setNum(prev => prev - 1)
    }

    return (
      <div className="counter-container">
        <div className="counter-number">
          <h1>{num}</h1>
        </div>
        <div className="button-continer">
          <button className="counterButton" onClick={handleIncrement}>Increment</button>
          <button className="counterButton" onClick={handleDecrement}>Decrement</button>
        </div>
      </div>
    );
}

export default Counter