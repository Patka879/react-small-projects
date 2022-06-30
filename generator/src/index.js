require('dotenv').config()
const express = require('express')
const path = require('path')
const request = require('request')
const fs = require('fs')

let app = express()
app.use('/meme-images',function(req, res) {
    request.get(req.query.url).pipe(res);
})
  
if (process.env.NODE_ENV === "development") {
    app.get('/', function (req, res) {
        res.redirect('http://localhost:3000/generator')
    })
} else { 
    app.use(express.static(path.join(__dirname, '../', 'clientBuild'))) 
}

app.get('/check-directories', function(req, res) {
    const files = {}
    try {
        files['root'] = fs.readdirSync('/')
    } catch {console.error("can't find root folder")}
    try {
        files['client'] = fs.readdirSync('/client')
    } catch {console.error("can't find client folder")}
    try {
        const clientBuildAbsolutePath = path.join(__dirname, 'clientBuild')
        files['clientBuildPath'] = clientBuildAbsolutePath
        files['clientBuild'] = fs.readdirSync(clientBuildAbsolutePath)
    } catch {console.error("can't find clientBuild folder")}

    res.json(files)
})

let port = process.env.PORT || 80
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })