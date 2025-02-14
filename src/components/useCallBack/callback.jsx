import { useState } from "react";



function UseCallBackComp({loggedIn}) {
  const [email, setEmail] = useState("");
  const [password, setPasssword] = useState("");


const handleSubmit = (e) =>{
    console.log("submitted");
    e.preventDefault();
    loggedIn(email , password)
    setEmail("")
    setPasssword("")
}

  return (
    <>
      <h2 className="head" style={{color:"red", marginLeft:"40%"}  }>useCallBack hook </h2>
      <form onSubmit={handleSubmit} style={{marginLeft:"35%", display:"flex", flexDirection:"column", width:"400px",gap:"15px", marginTop:"100px"}}>
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