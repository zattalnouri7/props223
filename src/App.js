import React, { useState } from 'react'
import Profil from './components/Profil';

function App() {
  const [person, setperson] = useState({
    name: "zattalnoureddine",
    profession: 'coach',
    bio: 'we are go my code'
  })
  const [show, setshow] = useState(false)
  return (
    <div>
      <button onClick={() => setshow(!show)}>show me </button>
      {show ? <div>
        <h1 style={{ background: 'black', color: 'pink' }}>{person.name}</h1>
        <h2 style={{ backgroundcolor: 'pink', color: 'black' }}>{person.profession}</h2>
        <p style={{ color: 'black' }}>{person.bio}</p>
      </div> : null}
    </div>
  )
}

export default App