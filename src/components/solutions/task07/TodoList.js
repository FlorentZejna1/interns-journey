import React from "react";
import Todo from "./Todo";
function TodoList({todos, removeTodo, toggleTodo}){
    return(
        <div className="listed-container">
            {todos.map(todo => (
                <Todo 
                id={todo.id}
                task={todo.task} 
                key={todo.id} 
                completed={todo.completed}
                removeTodo={removeTodo}
                toggleTodo={toggleTodo}
                />
            ))}
        </div>
    )
}

export default TodoList