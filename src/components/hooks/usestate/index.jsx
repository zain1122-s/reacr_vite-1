 import { useState } from "react"

function Counter() {

    const [count , setCount] = useState(0)

    const handleIncrement = ()=>{
        setCount(count + 1)
    };
    const handleDecrement = ()=>{
        setCount(count - 1)
    };
    const handelreset = ()=>{
        setCount(count-count)
    }
    return(

        <>
        
        <h3>counter : {count}</h3>
        <button onClick={handleIncrement}>increment</button>
        <button onClick={handleDecrement}>decrement</button>
        <button onClick={handelreset}>reset</button>
        </>
    )
}
export default Counter