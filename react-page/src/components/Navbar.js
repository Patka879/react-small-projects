import React from "react"
import logo192 from "../images/logo192.png"
import "../style.css"

export default function Navbar(props) {
    return (
        <nav className={props.darkMode ? "dark" : ""}>
            <img src={logo192} width="60px" />
            <h3>React Facts</h3>
            <div className="toggler">
                <p className="toggler-light">Light</p>
                <div 
                    className="toggler-slider"
                    onClick={props.toggleDarkMode}>    
                    <div className="toggler-slider-circle">
                    </div>
                </div>    
                <p className="toggler-dark">Dark</p>
            </div>
        </nav>
    )
}