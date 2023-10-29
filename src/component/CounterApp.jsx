import { useState } from "react";
import "../css/style.css"
const CounterApp = () => {
    const [count,setCount] = useState(0)
    const incrementValue = () =>{
        setCount(count+1)
    }
    const decrementValue = () =>{
        setCount(count-1)
    }
    const resetValue = () =>{
        setCount(0)
    }
    return (
        <div className="counterApp" >
            <h1 className="counterValue" > Count : {count} </h1>
            <div className="countValue" >
                <button className="increment btn" onClick={incrementValue}>
                     + 
                </button>
                <button className="decrement btn" onClick={decrementValue} 
                disabled = {count===0 ? true : false } >
                     - 
                </button>
                <button className="reset btn " onClick={resetValue} >
                     Reset 
                </button>
            </div>
        </div>
    );
};

export default CounterApp;