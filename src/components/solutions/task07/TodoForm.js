import React from "react";
import useInputState from "./hooks/useInputState";

function TodoForm ({addTodo}){
    const [value, handleChange, reset] = useInputState("");
    return(
        <div>
            <form onSubmit={(e)=>{
                e.preventDefault();
                addTodo(value);
                reset()
            }}>
            <input value={value} onChange={handleChange}/>
            </form>
        </div>
    )
}

export default TodoForm