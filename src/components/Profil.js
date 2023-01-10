import React from 'react'

function Profil(props) {
    return (
        <div>
            <h1 style={{ background: 'black', color: 'pink' }}>{props.name}</h1>
            <h2 style={{ backgroundcolor: 'pink', color: 'black' }}>{props.profession}</h2>
            <p style={{ color: 'black' }}>{props.bio}</p>
            <button onClick={() => props.handlname(props.name)}> click here </button>
            {props.children}
        </div>
    )
}

export default Profil