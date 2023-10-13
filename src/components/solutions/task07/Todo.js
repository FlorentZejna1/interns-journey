import React from "react";
function Todo({ id, task, completed, removeTodo, toggleTodo}){
    return(
        <li className="list-items">
            <input type="checkbox" checked={completed} onChange={() => toggleTodo(id)}/>
            <span className="input-text">{task}</span>
            <button className="delete-button" onClick={() => removeTodo(id)}>X</button>
        </li>
    )
}
export default Todo;