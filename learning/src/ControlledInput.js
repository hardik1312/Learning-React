import React, {useState, useEffect} from 'react';

const ControlledInput = () => {

    const[firstName, setFirstName] = useState('');
    const[email, setEmail] = useState('');
    const[people, setPeople] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if(firstName && email){
            const person = {id: new Date().getTime().toString(),firstName, email}
            setPeople((people)=>{
                return[...people, person];
            })
            setFirstName('');
            setEmail('');
        }
        else{
            console.log("Empty values")
        }
    }
    return (
        <>
            <article>
                <h2>Form</h2>
                <form className='form' onSubmit={handleSubmit}>
                <div className='form-control'>
                    <label htmlFor="name">Name: </label>
                    <input 
                    type="text" 
                    id='name' 
                    name='firstName' 
                    value={firstName}
                    onChange= {(e)=>{setFirstName(e.target.value)}}
                    />
                </div>
                <div className='form-control'>
                    <label htmlFor="email">Email: </label>
                    <input 
                    type="text" 
                    id='email' 
                    name='email'
                    value={email}
                    onChange={(e)=>(setEmail(e.target.value))}
                    />
                </div>
                <button type='submit'>Add person</button>
                </form>

                {
                    people.map((person)=>{
                        const{id,firstName,email} = person;
                        return(
                            <div key={id}>
                                <h4>{firstName}</h4>
                                <h4>{email}</h4>
                            </div>
                        )
                    })
                }
            </article>
        </>
    )
}

export default ControlledInput;