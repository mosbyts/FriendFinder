var path = require("path");

module.exports = function(app){
//Display survey page
   app.get("/survey", function(req, res){
      res.sendFile(path.join(__dirname, "../public/survey.html"));
   });

//Default "catch-all" route leading to homepage
   app.get("/", function(req, res){
      res.sendFile(path.join(__dirname, "../public/home.html"));
   });

   app.get("*", function(req, res){
      res.redirect("/");
   });
};