import React from 'react'
import Dice from './Components/Dice'
import { useState } from 'react'
import {nanoid} from 'nanoid'
import './style.css'

export default function App() {

  const [dice, setDice] = useState(allNewDice())

  function generateNewDie() {
    return {
      value: Math.ceil(Math.random() * 6), 
      isHeld: false,
      id: nanoid()
      }
  }

  function allNewDice() {
    const newNumbers = []

    for (let i = 0; i < 10; i++) {
    newNumbers.push(generateNewDie())
    }
    return newNumbers
  }

  function shuffleDice() {
    setDice(prevDice => prevDice.map(die => {
      return die.isHeld ?
        die :
        generateNewDie()
      }))
  }

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
        <h1 className="title">Tenzies</h1>
        <h3 className="description">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</h3>
        <div className="dices">
           {diceElements}
        </div>
        <button className="roll-button" onClick={shuffleDice}>Roll</button>
    </div>
)
}


