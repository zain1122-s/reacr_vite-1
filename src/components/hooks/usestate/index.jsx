import { useState , useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const[data, setdata]=useState

  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleDecrement = () => {
    setCount(count - 1);
  };
  const handelreset = () => {
    setCount(count - count);
  };
   useEffect(()=>{
    console.log("component mount");
    
   }, [])
  return (
    <>
      <div className="first">
        <h3 className="heading">counter : {count}</h3>
        <div className="btn">
          <button className="btn1" onClick={handleIncrement}>
            increment
          </button>
          <button className="btn1" onClick={handleDecrement}>
            decrement
          </button>
          <button className="btn1   " onClick={handelreset}>
            reset
          </button>
          <button o nClick>update data</button>
        </div>
      </div>
    </>
  );
}
export default Counter;
