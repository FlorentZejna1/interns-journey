import React from "react";
function Todo({ id, task, completed, removeTodo, toggleTodo}){
    return(
        <li className="list-items">
            <input className="list-items-checkbox" type="checkbox" checked={completed} onChange={() => toggleTodo(id)}/>
            <p className="todolist-text"  style={{textDecoration: completed ?"line-through" : "none"}}>{task}</p>
            <button className="delete-button" onClick={() => removeTodo(id)}>X</button>
        </li>
    )
}
export default Todo;