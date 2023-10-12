import React from "react";
import Todo from "./Todo";
function TodoList({todos, removeTodo}){
    return(
        <div>
            {todos.map(todo => (
                <Todo 
                id={todo.id}
                task={todo.task} 
                key={todo.id} 
                completed={todo.completed}
                removeTodo={removeTodo}
                />
            ))}
        </div>
    )
}

export default TodoList