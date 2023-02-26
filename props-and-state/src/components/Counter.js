import React from 'react';
import { useState } from 'react';
import {v4} from 'uuid';

function Counter(){

    let [count, setCount] = useState(0);

    function handleIncrease(){
        setCount(count ++);
    }
    function handleReset(){
        setCount(0);
    }
    function handleDecrease(){
        setCount(count --);
    }

    let [todos, setTodos] = useState([
        "Keep todo",
        "Play Guitar",
        "Learn Java"
    ]
    )
    
    function handleTodo(){
        console.log("new Todo");
        setTodos((todo)=>{
            return [...todos, "New Todo Added"];
        })
    }
    

    return (
        <div>
        <h1>Counter App</h1>
        <h2>{count}</h2>
        <button onClick={handleIncrease}>Handle Increase</button>
        <button onClick={handleReset}>Handle Reset</button>
        <button onClick={handleDecrease}>Handle Decrease</button>
        <hr />
        <h1>Todo List</h1>
        <ul>
            {todos.map((todo)=>{
                return <li>{todo}</li>;
            })}
            <button onClick={handleTodo}> Add </button>
        </ul>
        </div>
    )
}

export default Counter;