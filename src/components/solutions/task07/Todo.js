import React from "react";
function Todo({task, completed, removeTodo, id}){
    return(
        <li>
            <input type="checkbox" checked={completed}/>
            {task}
            <button onClick={() => removeTodo(id)}>Delete</button>
            </li>
    )
}
export default Todo;