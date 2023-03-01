import React from "react";
import { useState } from "react";

function TodoInputForm() {

    return (
        <form>
            <label htmlFor="todoForm">New Todo</label>
            <input type="text" id="todoForm" />
        </form>
    );
}

export default TodoInputForm;