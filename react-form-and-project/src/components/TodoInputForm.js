import React from "react";
import { useState } from "react";
import { v4 as uuid} from "uuid";
import "./TodoInputForm.css"

function TodoInputForm({addTodo}) {

    const [newTodo, setNewTodo] = useState("");

    function handleInput(e){
        e.preventDefault();
        if(newTodo.length === 0){
            alert("Enter some value");
            return;
        }

        const newTodoObj = {id: uuid(), todoName: newTodo, completed: false};
        addTodo(newTodoObj);
        setNewTodo("");

    }
    
    return (
        <form className="container" onSubmit={handleInput}>
            <input
                type="text"
                id="todoForm"
                value={newTodo}
                onChange={(e) => {
                    setNewTodo(e.target.value);
                }}

            />
            <input type="submit" value="Add Todo" />
        </form>
    );
}

export default TodoInputForm;