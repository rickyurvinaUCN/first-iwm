import React, {useState} from 'react'

// maneras de recibir this.props.
// function Header(props)
// function Header({prop1, prop2, propn})
export default function Header(props) {
    const {name:nameProp, email} = props;

    // const {name:nameProp, email} = props;
    console.log({email})

    const [name, setName] = useState(nameProp);

    const changeName=()=>{
        setName('Nicolas Henriquez');
    }

  return (
    <div>
        <h2>{name}</h2>
        <br></br>
        <span>Correo: {email}</span>
        <br></br>
        <button onClick={()=>changeName()}>Change Name</button>
    </div>
  )
}
//rfc