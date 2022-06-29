let proxy = require('html2canvas-proxy')
let express = require('express')

let app = express()
app.use('/meme-images', proxy() )