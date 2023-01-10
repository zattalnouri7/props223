import React from 'react'
import Profil from './components/Profil';

function App() {
  const name = "zattal noureddine"
  const profession = "coach"
  const bio = "i like football and slipping"
  const handlname = (a) => alert(a);
  return (
    <div>
      <Profil name={name} profession={profession} bio={bio} handlname={handlname}>
        <img src="https://sb.kaleidousercontent.com/67418/992x558/7632960ff9/people.png" />
      </Profil>
    </div>
  )
}

export default App