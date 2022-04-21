import React from 'react'
import Dice from './Components/Dice'
import { useState, useEffect } from 'react'
import {nanoid} from 'nanoid'
import './style.css'
import Confetti from 'react-confetti'

export default function App() {

  const [dice, setDice] = useState(allNewDice())
  const [tenzies, setTenzies] = useState(false)

  // Winning conditions

  useEffect(() => {
    const allHeld = dice.every(die => die.isHeld)
    const firstValue = dice[0].value
    const allSameValue = dice.every(die => die.value === firstValue)
    if (allHeld && allSameValue) {
        setTenzies(true)
        console.log("You won")
    }
}, [dice])

  // Generating new die with value(1-6), isHeld and id

  function generateNewDie() {
    return {
      value: Math.ceil(Math.random() * 6), 
      isHeld: false,
      id: nanoid()
      }
  }

  // Generating new set of 10 dices 

  function allNewDice() {
    const newNumbers = []

    for (let i = 0; i < 10; i++) {
    newNumbers.push(generateNewDie())
    }
    return newNumbers
  }

  // Changing the die when die is not held. If die is held it will stay the same.
  // Starts New Game after wining

  function shuffleDice() {
    if(!tenzies) {
      setDice(oldDice => oldDice.map(die => {
          return die.isHeld ? 
              die :
              generateNewDie()
      }))
  } else {
      setTenzies(false)
      setDice(allNewDice())
  }
}

  // Changing isHeld to true when clicking on a die. It changes the color of a die.

  function holdDice(id) {
    setDice(oldDice => oldDice.map(die => {
        return die.id === id ? 
        {...die, isHeld: !die.isHeld} :
        die
    }))
  }

  const diceElements = dice.map(die => (
    <Dice key={die.id} value={die.value} isHeld={die.isHeld} holdDice={() => holdDice(die.id)} />
  ))

  return(
    <div className="main">
        {tenzies && <Confetti />}
        <h1 className="title">Tenzies</h1>
        <h3 className="description">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</h3>
        <div className="dices">
           {diceElements}
        </div>
        <button className="roll-button" onClick={shuffleDice}>{tenzies ? "New Game" : "Roll"}</button>
    </div>
)
}


