import React from "react";
import { useState } from 'react';

function HandleInputs() {
    let [username, setUsername] = useState("");

    function handleForm(e) {
        // console.log(e.target.value);
        setUsername(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        // console.log("handle submit");
        alert(username);

    }
    return (
        <div className="App">
            <h1>React Forms</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username"> User Name : </label>
                <input type="text" id="username" value={username} onChange={handleForm} />
                {/* <button>Submit</button> */}
                <input type="submit" value="Submit" />
            </form>
            {/* <h3>{username}</h3> */}
        </div>
    );
}

export default HandleInputs;