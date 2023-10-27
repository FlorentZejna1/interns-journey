import React, { useEffect, useState } from "react";

function Stopwatch() {
  const [start, setStart] = useState(false);
  const [time, setTime] = useState(0);

  useEffect(() => {
    let interval;
    if(start){
        interval = setInterval(() =>{
            setTime((prevTime) => prevTime + 10);
        },10);
    }else if(!start){
        clearInterval(interval)
    }
        return () =>clearInterval(interval)
  }, [start]);

  const handleStart = () => {
    setStart(true);
  };

  const handleStop = () => {
    setStart(!start);
  };

  const handleReset = () => {
    setStart(false);
    setTime(0);
  };

  return (
    <div className="stopwatch-container">
      <div className="stopwatch-timer">
      <h1>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</h1>
        <h1>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</h1>
        <h1>{("0" + ((time / 10) % 100)).slice(-2)}</h1>
      </div>
      <div className="stopwatch-button">
        <button  className="stopwatchButton" onClick={handleStart}>Start</button>
        <button className="stopwatchButton" onClick={handleStop}>Stop</button>
        <button className="stopwatchButton" onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}

export default Stopwatch;
