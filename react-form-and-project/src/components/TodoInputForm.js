import React from "react";
import { useState } from "react";
import { v4 as uuid} from "uuid";
import "./TodoInputForm.css"

function TodoInputForm(addTodo) {

    const [newTodo, setTodo] = useState("");

    function handleInput(e){
        e.preventDefault();

        const newTodoObj = {id: uuid(), todoName: newTodo, completed: false};
        addTodo(newTodoObj);
        
    }

    // last did till here

    return (
        <form>
            <input
                type="text"
                id="todoForm"
                value={newTodo}
                onChange={(e) => {
                    setTodo(e.target.value);
                }}

            />
            <input type="submit" value="Add Todo" onClick={handleInput}/>
        </form>
    );
}

export default TodoInputForm;