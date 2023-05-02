import {useState, useEffect} from 'react';

const UseEffectCleanUp = ()=>{
    const[size, setSize]= useState(window.innerWidth)

    const reSize=()=>{
        setSize(window.innerWidth)
        return(
            window.removeEventListener('resize',reSize)
        )
    }
    useEffect(()=>{
        console.log('Event is triggered')
        window.addEventListener('resize', reSize)
})
    console.log('Rendering')
    return (<>
    <h2>Screen size</h2>
    <h3>{size} PX</h3>
    </>)
}

export default UseEffectCleanUp;