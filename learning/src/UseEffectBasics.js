import React, {useState, useEffect} from 'react'

const UseEffectBasics=()=>{
    const[value,setValue]=useState(0);
    useEffect(()=>{
        if(value>=3){
        document.title= `New Message(${value})`
    }
        }, [value]);

    return (
        <>
        <h2>Use effect Learning</h2>
        <h2>{value}</h2>
        <button className='btn' onClick={()=>{setValue(value+1)}}>Increase</button>
        </>
    )

}

export default UseEffectBasics;