import { useState, useEffect, useRef } from "react";

function UseRef() {
  const [count, setCount] = useState(0);
  const prevCounter = useRef();
  useEffect(() => {
    prevCounter.current = count;
  }, [count]);
  return (
    <>
      <div>
        <p>current Counter: {count}</p>
        <p>previous count : {prevCounter.current}</p>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          increment
        </button>
      </div>
    </>
  );
}
export default UseRef;
