import {useEffect, useState, useRef} from "react"
import html2canvas from "html2canvas"

export default function Meme() {
    const printRef = useRef()

    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: `${process.env.REACT_APP_API_PATH}?url=http://i.imgflip.com/1bij.jpg`
    })


    const [allMemes, setAllMemes] = useState([])

        useEffect(() => {
            fetch("https://api.imgflip.com/get_memes")
                .then (res => res.json())
                .then (data => setAllMemes(data.data.memes))
        },[])


    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const url = `${process.env.REACT_APP_API_PATH}?url=${allMemes[randomNumber].url}`
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))   
    }

    function saveMeme() {
        (async () => {
            const canvas = await html2canvas(printRef.current)

            const data = canvas.toDataURL('image/jpg')
            const link  = document.createElement('a')

            if (typeof link.download === 'string') {
                link.href = data
                link.download = 'image.jpg'

                document.body.appendChild(link)
                link.click()           
                document.body.removeChild(link)
            } else {
                window.open(data)
            }
        })()
    
        setMeme(prevMeme => ({
            ...prevMeme,
            topText: "",
            bottomText: ""
        }))
    }

    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name] : value
        }))
    }

    return (
        <main>
            <div className="form">
                <input 
                    type="text"
                    placeholder="Top text..."
                    className="form--input" 
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange}
                    />
                    
                <input 
                    type="text"
                    placeholder="Bottom text..."
                    className="form--input" 
                    name="bottomText"
                    value={meme.bottomText}  
                    onChange={handleChange}  
                    />
            </div>
            <button 
                onClick={getMemeImage}
                className="form--button"
            >Get A New Image</button>
            <div ref={printRef} className="meme">
                <img alt="random" src={meme.randomImage} className="meme--image" />
                <h2 className="meme--text-top">{meme.topText}</h2>
                <h2 className="meme--text-bottom">{meme.bottomText}</h2>
            </div>
            <button
                    onClick={saveMeme}
                    className="save--button"
                >
                    Save Your Meme
            </button>
        </main>
    )
}