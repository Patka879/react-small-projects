require('dotenv').config()
const express = require('express')
const path = require('path')
const request = require('request')

let app = express()
app.use('/meme-images',function(req, res) {
    request.get(req.query.url).pipe(res);
})
  
if (process.env.NODE_ENV === "development") {
    app.get('/', function (req, res) {
        res.redirect('http://localhost:3000/generator')
    })
} else { 
    app.use(express.static(path.join(__dirname, 'clientBuild'))) 
} 
let port = process.env.PORT || 80
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })