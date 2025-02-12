import React, { useReducer } from 'react'

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