import React from 'react'
import "./Todo.css"

function Todo({ todoName, id, completed, deleteTodo, toggleCompleted }) {

    return (
        <div className="todo">
            {/* <h3 className={`todoName ${completed ? "completed" : ""}`}>{todoName}</h3> */}
            <h3 className={`todoName ${completed ? "completed" : ""}`}>{todoName}</h3>
            
            <div className="button-wrapper">
                <button onClick={() => {
                    toggleCompleted(id)
                }}>
                    {completed ? "❌" : "✔️"}
                </button>
                <button onClick={() => {
                    deleteTodo(id)
                }}>
                    Delete
                </button>
            </div>
        </div>
    );
}

export default Todo;