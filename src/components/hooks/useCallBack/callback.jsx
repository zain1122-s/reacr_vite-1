import { useState } from "react";



function UseCallBackComp({loggedIn}) {
  const [email, setEmail] = useState("");
  const [password, setPasssword] = useState("");
  const [ageGroup, setAgeGroup] = useState("");


const handleSubmit = (e) =>{
    console.log("submitted");
    e.preventDefault();
    
    loggedIn(email , password, ageGroup)
    setEmail("")
    setPasssword("")
    setAgeGroup("")
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
         <label>Age Group:</label>
        
          <label>
            <input
              type="radio"
              value="18Plus"
              checked={ageGroup === "18Plus"}
              onChange={(e) => setAgeGroup(e.target.value)}

            />
            18+
          </label>
          <label>
            <input
              type="radio"
              value="lessThan18"
              checked={ageGroup === "lessThan18"}
              onChange={(e) => setAgeGroup(e.target.value)}
            />
            Less than 18
          </label>
        
        <button type="submit">Login Form</button>
      </form>
    </>
  );
}
export default UseCallBackComp;