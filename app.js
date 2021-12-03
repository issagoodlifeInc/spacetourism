// jshint esversion:6

//  Needed Packages -- Not sure about body-parser though
const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');

// ---naah
const app = express();

// ejs syntax
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static('public'));


app.get("/", function(req, res) {
  res.render("home");
});









// Start server + added the env part for deployment with heroku

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}

app.listen(port, function() {
  console.log("Server started om port 3000");
});