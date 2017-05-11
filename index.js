var express = require('express')
var app = express()

app.use(express.static('public'))
app.use(express.static('files'))

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(3001, function () {
  console.log('Example app listening on port 3000!')
})

var open = require("open");
open("http://localhost:3001/index.html");