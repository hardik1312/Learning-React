import React, {useState} from 'react'

const UseStateObject = () => {
    const[person, setPerson] = useState({
        name: 'Hardik',
        age:27,
        message:'Blockchain is future.'
    })

    const changeMessage=()=>{
        return (setPerson({...person, message:"Blockchain is easy."}))
    }

    const changeName=()=> {
        return (setPerson({...person, name:'Mr Khatri'}))
    }

    const changeAge=()=>{
        return (setPerson({...person, age:25}))
    }

    return(
        <>
        <h3>{person.name}</h3>
        <h3>{person.age}</h3>
        <h3>{person.message}</h3>
        <button className='btn' onClick={changeName}>Change name</button>
        <button className='btn' onClick={changeAge}>Change age</button>
        <button className='btn' onClick={changeMessage}>Change message</button>
        </>
    )
}

export default UseStateObject;