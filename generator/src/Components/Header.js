import React from "react"
    import "../style.css"
import TrollFace from "../Images/Troll Face.svg"

export default function Header () {
    return(
        <div className="header">
            <span className="left-header">
            <img className="left-header-img" src={TrollFace} alt="troll face" />
            Meme Generator</span>
            <span className="right-header">React Course - Project 3</span>
        </div>
    )
}