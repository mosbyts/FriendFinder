//Display all possible friends in the JSON object friends
app.get("/api/friends", function(req, res){
   return res.JSON(friends);
});

//Handle incoming survey results and compatibility logic
app.post("/api/friends", function(req, res){
   var newFriend = req.body;
   console.log(newFriend);
   friends.push(newFriend);
   res.JSON(newFriend);
});