import React, { useState } from "react";
import useInputState from "./hooks/useInputState";
import "../style/solutions.css"

function TodoForm ({addTodo}){
    const [value, handleChange, reset] = useInputState("");
    const [error, setError] = useState(false)

    const handleSubmit = (e) => {
      e.preventDefault();
      if (value.replace(/\s/g, "") === "") {
        setError(true);
      } else {
        addTodo(value.charAt(0).toUpperCase() + value.slice(1));
        setError(false);
        reset();
      }
    };
    return (
      <div className="input-container">
        <label className="required" hidden>
          Add a to do
        </label>
        <form onSubmit={handleSubmit}>
          {error ? (
            <label className="error-label">Need to add smth to the list</label>
          ) : (
            ""
          )}
          <input
            className="input-field"
            placeholder="Add an item"
            value={value}
            onChange={handleChange}
          />
        </form>
      </div>
    );
}

export default TodoForm