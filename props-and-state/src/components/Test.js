import React from 'react'
import { useState } from 'react';
import { v4 as uuid } from 'uuid';
// import Lists from './components/Lists';
// import Todo from './components/Todo';

// const todos = ["Eat", "Sleep", "Code", "Repeat"];

// ****** FUNCTION STATEMENT STARTS ******
function Counter() {
    // let num = 1;
    // const handleIncrease = () => {
    //   console.log(num);
    //   num = num + 1;

    // };
    // let returnedArray = useState(1);
    // let num = returnedArray[0];
    // let setNum = returnedArray[1];
    let [num, setNum] = useState(0);

    function handleIncrease() {
        setNum((numEval) => numEval++);
    }
    function handleReset() {
        setNum(0);
    }
    function handleDecrease() {
        setNum((numEval) => numEval--);
    }

    let [todos, setTodo] = useState([
        "EAT",
        "SLEEP",
        "CODE",
        "REPEAT"
    ]
    )

    let [obj, setObject] = useState({
        key1: "value 1",
        key2: "value 2",
        key3: "value 3",
    })
    function handleObject() {
        // setObject((prevObj)=>{
        //   return {...prevObj, keyNew: "value new"};
        // }) 
        const newObj = { ...obj, key4: "value 4" };
        setObject(newObj);
    }





    function handleAdd() {
        // const newArr = [...todos];
        // newArr.push("new Todo");
        // setTodo(newArr);
        setTodo((prevTodo) => {
            return [...prevTodo, "new Todo"]
        })

    }
    function handleRemove() {
        const newArr = [...todos];
        newArr.pop()
        setTodo(newArr);
    }

    // ****** RETURN STATEMENT STARTS ****** 

    return (
        <div>
            {/* <h1>
        React State
      </h1> */}
            {/* <h2>
        {num}
      </h2> */}
            {/* <button onClick={handleIncrease}>Increase Value</button> */}
            <br />
            <h1>RENDER LIST</h1>
            {/* <ul>
        {todos.map((todo) => {
          return <Todo value={todo} />
        })}
      </ul> */}
            <h1>
                Counter Application
                <hr />
                <hr />
                Count : {num}
                <br />
                <button onClick={handleIncrease}>Increase</button>
                <button onClick={handleReset}>Reset</button>
                <button onClick={handleDecrease}>Decrease</button>
            </h1>
            <hr />
            <hr />
            <hr />
            <div class="Todo">
                <h1>ToDo-App</h1>
                <ul>
                    {todos.map((todo) => {
                        return <li key={uuid()}>{todo}</li>
                    })}
                </ul>
                <button onClick={handleAdd}>New Todo</button>
                <button onClick={handleRemove}>Remove Todo</button>
            </div>
            <hr />
            <h1>
                Handle Object States
                <br />
                <button onClick={handleObject}>Handle Add Object </button>
            </h1>
        </div>
    );
}

export default Counter