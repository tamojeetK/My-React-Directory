import { useState } from 'react';
import './App.css';
// import HandleInputs from './components/HandleInputs';
import Todo from './components/Todo';
import TodoInputForm from './components/TodoInputForm';

// import {uuid} from 'uuid';


function App() {

  const [todos, setTodo] = useState([
    { id: 1, todoName: "Take notes", completed: true },
    { id: 2, todoName: "Cook food", completed: true },
    { id: 3, todoName: "Learn React", completed: true },
    { id: 4, todoName: "Go to Sleep", completed: true }

  ])

  function addTodo(newTodo) {
    setTodo((prevTodo) => [...prevTodo, newTodo]);
  }


  function deleteTodo(id) {

    // // imperative way
    // const newState = [];
    // for(let todo of todos){
    //   if(todo.id !== id){
    //     newState.push(todo); 
    //   }
    // }
    // setTodo(newState);

    // //using filtered array
    // const newState  = todos.filter((todo)=>{
    //   return todo.id !== id;
    // });
    // setTodo(newState);

    // // implicit return
    // const newState = todos.filter(todo => todo.id !== id);
    // setTodo(newState);

    //using setState callback and filter
    setTodo((prevTodo) => prevTodo.filter((prevTodo) => prevTodo.id !== id));

  }

  function toggleCompleted(id) {  // << here "id" ka naam kuchh bhi de sakte hain zaroori nahi ki sirf id hi ho, but Todo.js mein afterall we are assigning the id prop to this toggleCompleted
    // console.log(id)

    setTodo((prevTodo) =>
      prevTodo.map((todoObj) => {

        if (todoObj.id == id) {
          return { ...todoObj, completed: !todoObj.completed };
        } else {
          return todoObj;
        }
      })
    )
  }


  return (
    <>
      <h1 style={{ textAlign: "center" }}>Todo List App</h1>
      <div className="todolist-wrapper">
        {/* <HandleInputs></HandleInputs> */}
        <TodoInputForm addTodo={addTodo} />
        {todos.map((todoObj) => {
          return (
            <Todo
              todoName={todoObj.todoName}
              id={todoObj.id}
              completed={todoObj.completed}
              deleteTodo={deleteTodo}
              toggleCompleted={toggleCompleted}
              key={todoObj.id} />
          )
        })}


      </div>
    </>
  );
}

export default App;
