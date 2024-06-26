var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var PORT = process.env.PORT|| 8080;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.listen(PORT, function(){
  console.log(`Roll-of-recipes app is running of port ${PORT}!`);
})