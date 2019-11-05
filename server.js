//Get packages
var path = require("path");
var express = require("express");
var app = express();
app.use(express.static("app/public"));

//Create port
var PORT = process.env.PORT || 8080;

// Express app handles data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Router
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

//Connect to server
app.listen(PORT, function(){
    console.log("Server listening on http://localhost:" + PORT);
});