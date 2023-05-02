import React, {useState} from 'react'

const PropDrilling= ()=>{
  const[courseName, setCourseName] = useState("React.js");
  return (
    <div>
      <h1>iNeuron.ai</h1>
      <GrandChild course={courseName} />
    </div>
  )
}

const GrandChild=(props)=>{
  return (
    <div>
      <h2>Grand Child: </h2>
      <Child course={props.course} />
    </div>
  )
}

const Child=(props)=>{
  return (
    <div>
      <h2>Child: {props.course}</h2>
    </div>
  )
}
export default PropDrilling;
