import React, { useMemo, useState } from 'react';

function UseMemocomp() {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);

    const firstBtn = () => {
        console.log("running");
        setCount1(count1 + 1);
        
    }
    const secBtn = () => {
        console.log("running");
        setCount2(count2 + 1);
    }
    // function hardLoad() {
    //     for (let index = 0; index<=1000000000000; index++) {

    //         return count1 * 2;	
            
    //     }

    const hardLoad = useMemo (()=>{
        console.log("useMemo running");
        
        for (let index = 0; index<=1000000000000; index++) {
            return count1 * 2;	
        }
    }) 
    return(
        <>
        <p>{count1} - {hardLoad}</p>
        <button onClick={firstBtn}>increment1 {count1}</button>
        <button onClick={secBtn}>increment2 {count2}</button>
        </>
    )
}
export default UseMemocomp;