import {useEffect, useState} from 'react';

const ConditionalRender =()=>{
    const[value,setValue]= useState(false)
    
    if(value){
        return <h3>Returning1...</h3>
    }
    else{
        return <h3>Multiple returns</h3>
    }
    }


export default ConditionalRender;