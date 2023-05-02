import React, {useState, useRef, useEffect} from 'react';

// similar to useState as it will preserve values between re-renderings
// however useRef doesn't trigger a re-rendering
// it is mostly used to target dom elements

const UseRefBasics=()=>{

    const refContainer = useRef(null)
    const divContainer = useRef(null)
    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(refContainer.current.value);
        console.log(divContainer.current);
    }

    useEffect(()=>{
        console.log(refContainer.current.value);
        refContainer.current.focus();
    },[])
    return(
        <>
            <form className='form' onSubmit={handleSubmit}>
            <div>
                <input type="text" ref={refContainer}/>
                <button type='submit'>Submit</button>
            </div>
            </form>

            <div ref={divContainer}> Hello Hardik</div>
        </>
    )
}

export default UseRefBasics;