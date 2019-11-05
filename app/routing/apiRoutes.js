//Load dependecies/data
var path = require("path");
var friends = require("../data/friends");

module.exports = function(app){
//Display all possible friends in the JSON object friends
   app.get("/api/friends", function(req, res){
      return res.json(friends);
   });

//Handle incoming survey results and compatibility logic
   app.post("/api/friends", function(req, res){
//Get data and add new friend to friends array
      var newFriend = req.body;
      friends.push(newFriend);

      var newFriendScore = newFriend.score;
//Loop through existing friend's score  
      for(var i = 0; i < friends.length; i++){
         var friendScore = friends[i].score;
//Loop through new friend's score     
      for(var x = 0; x < newFriendScore.length; x++){
         if(friendScore == newFriendScore){
            $("You're a perfect match with " + res.json(friends[i]) + "!");
         };
      };
      };
   });



   

};