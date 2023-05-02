import './index.css'
import React, {useState} from 'react';

// useState is a function
// use is used to call hooks
// returns array([value,function])
// mandate to use hooks inside a function/component
// component must be in UpperCase/PascalCase

const UseStateBasic = () =>{
    const [message, setMessage] = useState('React is best.')
    const changedRes=() => {
        setMessage('React is easy. Just play around with code.')
    }
    return (
    <>
    <h2>{message}</h2>
    <button className='btn' onClick={changedRes}>Change</button>
    </>);
}

export default UseStateBasic;