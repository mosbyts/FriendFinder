//Get packages
var path = require("path");
var express = require("express");
var app = express();

//Create port
var PORT = process.env.PORT || 8080;

//Connect to server
app.listen(PORT, function(){
    console.log("Server listening on http://localhost:" + PORT);
});