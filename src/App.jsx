// import H1 from "./components/heading3";
// import Card from "./components/card";
// import Button from "./components/button";
// import "./all.css";
// import Counter from "./components/hooks/usestate";
// import CounterRed from "./components/hooks/useReducer";
import PostApiExample from "./components/hooks/Fetchapi";
import FetchingApi from "./components/hooks/FetchingApi";
import UseCallBackComp from "./components/useCallBack/callback";
import { useCallback, useState } from "react";
function App() {
  const [loggedIn, setLoggedIn] = useState(false);
 
  const loginForm = useCallback((email , password) => {
    if (email === "example@gmail.com" && password === "1234") {
      alert("login successfully!");
    } else {
      alert("invalid email!!");
    }
  }, []);
  

  return (
    <>
      <div>
        {/* <FetchingApi/> */}
        <UseCallBackComp loggedIn={loginForm}  />
      </div>
    </>
  );
}
export default App;
