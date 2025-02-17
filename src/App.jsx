// import H1 from "./components/heading3";
// import Card from "./components/card";
// import Button from "./components/button";
// import "./all.css";
// import Counter from "./components/hooks/usestate";
// import CounterRed from "./components/hooks/useReducer";
import PostApiExample from "./components/hooks/Fetchapi";
import FetchingApi from "./components/hooks/FetchingApi";
import UseCallBackComp from "./components/hooks/useCallBack/callback";
import { useCallback, useState } from "react";
import UseMemocomp from "./components/hooks/usemamo/usemamo";
import UseId from "./components/hooks/useid/useid";



function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  // const [password, setPassword] = useState(false);

  const loginForm = useCallback((email , password , ageGroup) => {
    

    if (email === "shahzainalam@gmail.com" && password === "1234" && ageGroup === "18Plus" ) 

      {
        console.log(ageGroup);
        
      alert("you login succesfully!");
    } 
    else {
      alert("password or email is incorrect");
    }

  }, []);
  

  return (
    <>
      <div>
           <FetchingApi/>  
        <UseCallBackComp loggedIn={loginForm} password={loginForm} ageGroup={loginForm} /> 

        <UseMemocomp/> 
        <UseId/>
      </div>

    </>
  );
}
export default App;
