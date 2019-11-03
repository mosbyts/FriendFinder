//Display survey page
app.get("/survey", function(req, res){
   res.sendFile(path.join(__dirname, "survey.html"));
});

//Default "catch-all" route leading to homepage
app.get("/", function(req, res){
   res.render("home.html");
});