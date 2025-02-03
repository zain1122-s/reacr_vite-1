import { useState } from "react"

function UseStateComp() {

    const [state , setState] = useState({
        name: "shahzain",
        age: 20,
        course:  "basic_js"
    })

    const handleChangeName = ()=>{
        console.log("clicked");
        setState({...state, course: "advance js"})
        setState({...state, age:"30"})
        setState({...State, name:"ehsan ali" })
    }
    return(

        <>
        <h3>person info </h3>
        <button onClick={handleChangeName}>change name </button>
            <p> {state.name}</p>
            <p> {state.age}</p>
            <p> {state.course}</p>
        </>
    )
}
export default UseStateComp