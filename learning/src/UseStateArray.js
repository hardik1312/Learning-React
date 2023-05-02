import {data} from './data'
import React, {useState} from 'react'

const UseStateArray = () => {
    const[people, setPeople] = useState(data);

    return (
        <>
            <h2>use state array demo</h2>
            {
                people.map((person)=>{
                    const{id,name}=person;
                    return (<div key={id} className='item'>
                        <h3>{name}</h3>
                        </div>
                    )
                })
            }
            <button className='btn' onClick={()=>setPeople([])}>Remove</button>
        </>
    )
}

export default UseStateArray