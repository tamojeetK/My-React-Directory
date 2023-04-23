import React from 'react';
import {useReducer} from 'react';

function Reducer(){
    function reducer(state, action){
        if(action === 'INCREASE'){
            return state + 1;
        }
        return state;
    }

    const [state, dispatch] = useReducer(reducer, 0);

    const  handleIncrease = () => {
        dispatch({type : "INCREASE"});
    }
    return(
        <>
        {state}
        <button onClick={handleIncrease}>+</button>
        </>
    );
}

export default Reducer;