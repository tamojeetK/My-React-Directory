import { useState } from 'react';
import './App.css';
// import HandleInputs from './components/HandleInputs';
import Todo from './components/Todo';
import TodoInputForm from './components/TodoInputForm';

// import {uuid} from 'uuid';


function App() {

  const [todos, setTodo] = useState([
    { id: 1, todoName: "Take notes", completed: false },
    { id: 2, todoName: "Cook food", completed: true },
    { id: 3, todoName: "Learn React", completed: false },
    { id: 4, todoName: "Go to Sleep", completed: false }

  ])

  function addTodo(newTodo){
    setTodo((prevTodo)=>[...prevTodo, newTodo]);
  }

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Todo List App</h1>
      <div className="todolist-wrapper">
        {/* <HandleInputs></HandleInputs> */}
        <TodoInputForm addTodo={addTodo}/>
        {todos.map((todoObj) => {
          return <Todo todo={todoObj.todoName} />
        })}


      </div>
    </>
  );
}

export default App;
