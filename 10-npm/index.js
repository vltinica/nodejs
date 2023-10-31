const express = require('express')
const app = express()

app.get('/', function (req, res) {
    res.send('Hello from Express to Vladimir!')
    console.log("run lh:3000");
})

app.listen(3000)