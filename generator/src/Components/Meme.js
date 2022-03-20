import memesData from "../memesData"
import {useState} from "react"


export default function Meme() {


    const [memeImage, setMemeImage] = useState("")

    function getMemeImage() {
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        setMemeImage(memesArray[randomNumber].url) 
    }

    return (
        <main>
            <div className="form">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form--input" />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form--input" />
                <button 
                onClick={getMemeImage}
                className="form--button">Get a new meme image 🖼
                </button>
            </div>
            <img src={memeImage} className="meme-image" />
        </main>
    )
}