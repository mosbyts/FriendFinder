//Load data
var friends = require("../data/friends");

module.exports = function(app){
//Display all possible friends in the JSON object friends
   app.get("/api/friends", function(req, res){
      res.json(friends);
   });

//Handle incoming survey results and compatibility logic
   app.post("/api/friends", function(req, res){
      var newFriend = req.body;
      console.log(newFriend);
      friends.push(newFriend);
      res.json(newFriend);
   });
};