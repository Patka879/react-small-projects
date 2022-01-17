import React from "react"
import "../style.css"
import swimmer from "../images/swimmer.png"
import wedding from "../images/wedding.png"
import bike from "../images/bike.png"
import star from "../images/Star.png"

export default function Card() {
    return (
        <div className="card-container">

            <div className="card-section-container">
                <img src={swimmer} className="card-container-img" />
            

                <div className="card-rating">
                    <img src={star} className="card-rating-img" /> 
                    <p>5.0</p>
                    <p>(6)</p>
                    <p>.</p>
                    <p>USA</p>
                </div>

                <p className="card-paragraph">
                 Life lessons with Katie Zaferes</p>

                <p className="card-paragraph-price"><b>From $136</b> / person</p>
            </div>
            

            <div className="card-section-container">
                <img src={wedding} className="card-container-img" />
                <div className="card-rating">
                        <img src={star} className="card-rating-img" /> 
                        <p>5.0</p>
                        <p>(30)</p>
                        <p>.</p>
                        <p>USA</p>
                    </div>
                    <p className="card-paragraph">
                    Learn wedding photography</p>

                <p className="card-paragraph-price"><b>From $125</b> / person</p>
            </div>


            <div className="card-section-container">
            <img src={bike} className="card-container-img" />
                <div className="card-rating">
                        <img src={star} className="card-rating-img" /> 
                        <p>4.8</p>
                        <p>(2)</p>
                        <p>.</p>
                        <p>USA</p>
                    </div>
                    <p className="card-paragraph">
                    Group Mountain Biking</p>

                <p className="card-paragraph-price"><b>From $50</b> / person</p> 
            </div>
        </div>
    )
}