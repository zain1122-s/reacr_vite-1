import { useState, useEffect, useRef } from "react";

function UseRef() {
    const [count, setCount] = useState(0);
    const prevCounter = useRef();
  console.log(prevCounter);
  
    useEffect(() => {
        prevCounter.current = count;
    }, [count]);

    return (
        <>
            <div>
                <p>Current Counter: {count}</p>
                <p>Previous Count: {prevCounter.current}</p>
                <button onClick={() => setCount(count + 1)}>Increment</button>
            </div>
        </>
    );
}

export default UseRef;

