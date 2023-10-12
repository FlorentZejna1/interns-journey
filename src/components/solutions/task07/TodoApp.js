import React, { useState } from "react";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";

function TodoApp(){
    const initialTodos = [
        {id:1, task:" Walk Dog", completed:true},
        {id:2, task:" Pet Dog", completed:false},
        {id:3, task:" Feed Dog", completed:false}
    ]
    const [todos, setTodos] = useState(initialTodos);
    const addTodo = newTodoText =>{
        setTodos([...todos, {id:4, task:newTodoText, completed: false}])
    }
    const removeTodo = todoId =>{
        const updatedTodos= todos.filter(todo => todo.id !==todoId);
        setTodos(updatedTodos);
    }
    return(
        <div>
        <h1>TODOS</h1>
        <TodoForm addTodo={addTodo}/>
        <TodoList todos={todos} removeTodo={removeTodo} />
        </div>
    ) 
}

export default TodoApp