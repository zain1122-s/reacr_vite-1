import { useState } from "react";

function UseCallBackComp({loggedIn}) {
  const [email, setEmail] = useState("");
  const [password, setPasssword] = useState("");


const handleSubmit = (e) =>{
    console.log("submitted");
    e.preventDefault();
    loggedIn(email)
    setEmail("")
}

  return (
    <>
      <h2>useCallBack hook example</h2>
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input
          style={{ margin: "0 5px" }}
          type="email"
          value={email}
          placeholder="enter your email"
          onChange={(e)=> setEmail(e.target.value)}
        />
        <label >password:</label>
        <input type="password" 
        value={password}
        placeholder="enter your password"
        onChange={(e)=> setPasssword(e.target.value)}
        
        />
        <button type="submit">Login Form</button>
      </form>
    </>
  );
}
export default UseCallBackComp;