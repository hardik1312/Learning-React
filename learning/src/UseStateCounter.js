import React from 'react'

function UseStateCounter(){
    const [value, setValue] = React.useState(0);


    
    return (
        <>
            <section style={{margin:'4rem 0'}}>

                <h2>React Counter</h2>

                <h4>{value}</h4>

                <button className='btn' onClick={()=>{
                    setValue(value-1)}}>Decrease</button>
                
                <button className='btn' onClick={()=>{
                    setValue(0)}}>Reset</button>
                
                <button className='btn' onClick={() => {
                    setValue(value+1)}}>Increase</button>
                
                
            </section>
        </>)
}

export default UseStateCounter;