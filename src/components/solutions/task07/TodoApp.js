import React, { useEffect, useState } from "react";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import { v4 as uuidv4 } from 'uuid'

function TodoApp(){
    const initialTodos = JSON.parse(window.localStorage.getItem('todos') || "[]")

    const [todos, setTodos] = useState(initialTodos);

    useEffect (() => {
        window.localStorage.setItem("todos",JSON.stringify(todos))
    },[todos])

    const addTodo = newTodoText =>{
        setTodos([...todos, {id:uuidv4(), task:newTodoText, completed: false}])
    }
    const removeTodo = todoId =>{
        const updatedTodos= todos.filter(todo => todo.id !==todoId);
        setTodos(updatedTodos);
    }
    const toggleTodo = todoId => {
        const updatedTodos= todos.map(todo =>
            todo.id === todoId ? {...todo, completed: !todo.completed}: todo
            )
            setTodos(updatedTodos);
    }
    return(
        <div className="todo-container">
        <h1>To Do List</h1>
        <TodoForm addTodo={addTodo}/>
        <TodoList todos={todos} removeTodo={removeTodo} toggleTodo={toggleTodo}/>
        </div>
    ) 
}

export default TodoApp