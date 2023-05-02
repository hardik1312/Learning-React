import React, { useState, useContext } from 'react'
import {data} from './data'

// more components
// prop drilling -> Context api -> redux

    const PersonContext = React.createContext();
    // createContext gives two things: provider, and consumer


    const ContextAPI =()=>{
    const[people , setPeople] =useState(data);
    const removePerson=(id)=>{
        setPeople(()=>{
            return people.filter((person) => person.id!==id)
        })
    }
    return (
        <PersonContext.Provider value={{removePerson}}>
        <section>
   <h3>Context API</h3>
    <List people={people} />

    </section>
    </PersonContext.Provider>)
}
const List=({people})=>{
 return <>
 {
    people.map((person)=>{
        return (
            <SinglePerson key={person.id}
            {...person}
            />
        )
    })
 }
 </>
}
const SinglePerson =({id, name})=>{
    const {removePerson} = useContext(PersonContext);
    return (<div className='item'>
        <h4>
            {name}
        </h4>
        <button onClick={()=>removePerson(id)}>Remove Person</button>

    </div>)

}

export default ContextAPI;