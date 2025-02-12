import React, { useReducer } from 'react'

// const initialstate = 0
// const reducer = (marks, action)=>{
// switch(action){
//     case "increase" :
//         return marks +1
//         case "decrease" :
//             return marks -1
//             default :
//               return marks
// }
// }
// function CounterRed() {
//     const [count, dispatch] = useReducer(reducer, initialstate)
//     return(
//         <div>
//             <div>count={count}</div>
//          <button onClick={()=>dispatch("increase")}>increse</button>
//          <button onClick={()=>dispatch("decrease")}>decrease</button>
//         </div>
//     )
// }

// export default CounterRed




const GetGrade = (score) =>{
    const [state, dispatch] = useReducer(reducer, {grades: [], score: ""})
    return <>
    <div>
        <h2>Enter score</h2>
        <input
         type="number"
         value={State.score}
         onChange={(e)=>dispatch({type: "SET_SCORE", value: e.target.value})}
         />
    </div>
    </>
} 