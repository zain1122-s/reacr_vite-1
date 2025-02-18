import { useId } from "react";
import
function UseId() {

    const id=useId()
    
  return (
    <>
  
      <form style={{marginTop:"200px", marginLeft:"300px" , display:"flex", flexDirection:"column", gap:"20px"}}>
      <h1 >useID</h1>
        <div>
          <label htmlFor={id + "usernameid"}>username:</label>
          <input type="text" id={id +"username"} name="name" />
        </div>
        <div>
          <label htmlFor={id + "emailid"}>email:</label>
          <input type="email" id={id + "eamil"} name="email" />
        </div>
        <div>
          <label htmlFor={id + "passwordid"}>password:</label>
          <input type="password" id={id +"password"}  name="password" />
        </div>
        <button type="submit" style={{width:"200px"}}>submit</button>
      </form>
    </>
  );
}

export default UseId