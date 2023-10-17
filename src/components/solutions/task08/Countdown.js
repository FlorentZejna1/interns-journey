import { useEffect, useState } from "react"
import "../style/solutions.css"


function Countdown() {
  const [timer, setTimer] = useState(0);
  const [start, setStart] = useState(false);
  useEffect(() => {
    if (start)
      if (timer > 0) {
        const interval = setInterval(() => {
          setTimer((prevtimer) => timer - 1);
        }, 1000);

        return () => clearInterval(interval);
      }
  });

  const handleChange = (e) => {
    setTimer(e.target.value.replace(/\D/, ""));
  };

  return (
    <div className="countdown-container">
      <h1 className="countdown-title">Countdown</h1>
      {!start ? (
        <input
          className="countdown-input"
          value={timer}
          onChange={handleChange}
          placeholder="Add a number"
        />
      ) : timer === 0 ? (
        <h1 className="countdown-warning">Time is out!</h1>
      ) : (
        <p className="countdown-timer">{timer}</p>
      )}
      <button
        className="countdown-button"
        onClick={() => {
          setStart(!start);
        }}
      >
        start/stop{" "}
      </button>
    </div>
  );
}

export default Countdown