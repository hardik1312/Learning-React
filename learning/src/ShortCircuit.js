import {useState, useEffect} from 'react';

const ShortCircuit = () => {
    const[text, setText]=useState('iNeuron Bengaluru');
    const[isError, setIsError]=useState(false);
return(<>

    <h1>{text || 'iNeuron.ai'}</h1>;
    {text && <h2>'iNeuron.ai'</h2>}
    <button className='btn' onClick={()=>setIsError(!isError)}>Error Toggle</button>
    {isError && <h2>Error...</h2>}
    {isError? (<p>Error.. Blockchain is future!</p>):
    (<div>
        <p>No error... Blockchain is future!</p>
    </div>)}
</>)}

export default ShortCircuit;