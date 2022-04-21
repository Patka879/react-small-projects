import Main from './Components/Main'
import React from 'react'

export default function App() {

  function allNewDice() {
    const newNumbers = []

    for(let i = 0; i < 10; i++)
    newNumbers.push(Math.floor(Math.random() * 6) + 1)
    
    return newNumbers
  }

  console.log(allNewDice())

  return (
    <div>
      <Main />
    </div>
  );
}


