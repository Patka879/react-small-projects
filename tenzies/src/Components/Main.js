import React from 'react'
import Dice from './Dice'

export default function Main() {
    return(
        <div className="main">
            <h1 className="title">Tenzies</h1>
            <h3 className="description">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</h3>
            <div className="dices">
                <Dice value="1" />
                <Dice value="3" />
                <Dice value="4" />
                <Dice value="1" />
                <Dice value="1" />
                <Dice value="1" />
                <Dice value="1" />
                <Dice value="3" />
                <Dice value="3" />
                <Dice value="4"/>
            </div>
        </div>
    )
}