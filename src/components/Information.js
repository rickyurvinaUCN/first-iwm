import React,{useState} from 'react'

export default function Information(props) {

    const {name:nameProp, changeName} = props;
   

  return (
    <div>
        <h2>Information of {nameProp}</h2>
        <button onClick={changeName}>Change Name</button>
    </div>
  )
}
