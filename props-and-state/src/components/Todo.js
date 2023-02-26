import React from 'react'

function Todo({value}){
    return(
        <div>
            <li>
            <h2>
            {value}
            </h2>
            </li>
        </div>
    )
}

export default Todo;