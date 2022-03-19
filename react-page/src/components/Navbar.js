import React from "react"
import logo192 from "../images/logo192.png"
import "../style.css"

export default function Navbar() {
    return (
        <nav className="navbar">
            <img src={logo192} width="60px" />
            <h3>React Facts</h3>
            <h4>React Course - Project 1</h4>
        </nav>
    )
}