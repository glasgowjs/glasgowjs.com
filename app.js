var express = require('express');
var app = module.exports = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

var port = process.env.PORT || 3000;
var server = app.listen(port)
