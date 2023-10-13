import React from "react";
import useInputState from "./hooks/useInputState";
import "../style/solutions.css"

function TodoForm ({addTodo}){
    const [value, handleChange, reset] = useInputState("");
    return(
        <div className="input-container">
            <form onSubmit={(e)=>{
                e.preventDefault();
                if (value.replace(/\s/g, '') === ""){
                    alert("add a to do");
                }else{
                addTodo(value);
                reset()
            }
            }}>
            <input className="input-field" value={value} onChange={handleChange}/>
            </form>
        </div>
    )
}

export default TodoForm