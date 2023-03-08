import './App.css';
import { useEffect } from "react";
import { useState } from "react";

function App() {
  const [counter1, setCount1] = useState(0);
  const [counter2, setCount2] = useState(0);

  useEffect(()=>{
    console.log("After Initial render");
  }, []);
  
  useEffect(()=>{
    console.log("counter value changed", counter1);
  }, [counter1, counter2]);


  return (
    <div className="App">
    <h3>Counter App 1</h3>
    {counter1}
    <br />
    <button onClick={()=> {setCount1(prevCount => prevCount+1)}}> + </button>
    <hr />
    <h3>Counter App 2</h3>
    {counter2}
    <br />
    <button onClick={()=> {setCount2(prevCount => prevCount+1)}}> + </button>
    </div>
  );
}

export default App;
