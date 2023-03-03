import React from "react";
import { useState } from "react";

function TodoInputForm() {
    const [todo, setTodo] = useState("");

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