import React from 'react'
import "./Todo.css"


function Todo({ todoName, id, completed, deleteTodo }) {

    return (
        <div className="todo">
            <h3>{todoName}</h3>
            <div className="button-wrapper">
                <button>Complete</button>
                <button onClick={() => {
                    deleteTodo(id)
                }}>Delete</button>
            </div>
        </div>
    );
}

export default Todo;