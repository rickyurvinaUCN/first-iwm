import React, {useState} from 'react'
import Information from './Information';

// maneras de recibir this.props.
// function Header(props)
// function Header({prop1, prop2, propn})
export default function Header(props) {
    const {name:nameProp, email} = props;
    const [name, setName] = useState(nameProp);

    const changeName=()=>{
        setName('Nicolas Henriquez');
    }

  return (
    <div>
        <h2>{name}</h2>
        <span>Correo: {email}</span>
        <br></br>
        <Information 
        name={name} 
        changeName={changeName}
        />
    </div>
  )
}
//rfc