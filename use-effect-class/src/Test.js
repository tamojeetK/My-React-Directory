import React, { useEffect } from 'react'
import { useState } from 'react'


function Test() {

    const [count, setCount] = useState(0);

    useEffect(()=>{
        console.log("counter Invoked")
    })


    return (
        <>
            <hr />
            <h3>Test.js</h3>
            <hr />
            <hr />
            Counter button below...
            <h1>{count}</h1>
            <button onClick={() => {
                setCount((prevCount) => prevCount + 1);
            }}>
                +
            </button>
            <button onClick={()=>{setCount((count)=>count-1)}}>-</button>
            <button onClick={()=>{setCount(0)}}>Reset</button>


        </>

    );
}

export default Test;