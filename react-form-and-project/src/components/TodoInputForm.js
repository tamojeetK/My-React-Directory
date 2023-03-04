import React from "react";
import { useState } from "react";
import "./TodoInputForm.css"

function TodoInputForm() {
    const [todo, setTodo] = useState("");
    function handleInput(e){
        e.preventDefault();
        alert(todo);
    }

    // last did till here

    return (
        <form>
            <input
                type="text"
                id="todoForm"
                value={todo}
                onChange={(e) => {
                    setTodo(e.target.value);
                }}

            />
            <input type="submit" value="Add Todo" />
        </form>
    );
}

export default TodoInputForm;