import React, { useState } from 'react';

import PackageContext from './context';

const Provider =(props)=>
{
    const[mission, setMission]=useState({
        mname:"learn react",
        agent: "072",
        accept:"nope not accepted"
    });
    return (
     <PackageContext.Provider 
     value ={{
        data: mission,
        isMissionAccepted: ()=>{
            setMission({ ...mission, accept:"Qabool Hae"});
        }
     }}
     >
            {props.children}
     </PackageContext.Provider>
    ) 
}

export default Provider;