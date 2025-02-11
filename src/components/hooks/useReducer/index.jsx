import React, { useReducer } from 'react';	
 
const student =[
    {name: "shahzain", marks:[45, 80,30,90]},
    {name: "zain", marks:[77, 50,80,40]},
    {name: "ehsan", marks:[33, 20,70,90]},
    {name: "sartaj", marks:[35, 33,20,100]}
    
]
const initialstate = 45
const reducer = (marks, action)=>{
switch(action){
    case "increase" :
        return 
        case "decrease" :
            return marks -1
            default :
              return state
}
}
function CounterRed() {
    const [count, dispatch] = useReducer(reducer, initialstate)
    return(
        <div>
            <div>count={count}</div>
         <button onClick={()=>dispatch("increase")}>increse</button>
         <button onClick={()=>dispatch("decrease")}>decrease</button>
        </div>
    )
}

export default CounterRed