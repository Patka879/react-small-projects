import React from 'react'
import "../style.css"
import Group77 from "../images/Group77.png"

export default function Hero() {
    return (
        <div className="hero-container">
            <img src={Group77} className="hero-img" />
            <h1 className="hero-header">Online Experiences</h1>
            <p className="hero-paragraph">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </div>
    )
}