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
//Set up best match variable with properties
      var totalDifference = 0;
      var bestMatch = {
         name: "",
         photo: "",
         friendDifference: 1000
      };
//Get data and add new friend to friends array
      var user = req.body;
      var userName = user.name;
      var userScoreString = user.scores;
      var userScoreArray = userScoreString.map(function(userData){
         return parseInt(userData, 10);
      });

      user = {
         name: req.body.name,
         photo: req.body.photo,
         scores: userScoreArray
      };
      console.log(user);
      friends.push(user);
      var userScoreSum = userScoreArray.reduce(a, userScoreArray => a + userScoreArray, 0)
//Loop through existing friend's score and find match 
      for(var i = 0; i < friends.length; i++){
         var friendScore = friends[i].score.reduce(a, userScoreArray => a + userScoreArray, 0);
         totalDifference += Math.abs(userScoreSum - friendScore);

         if(totalDifference <= bestMatch.friendDifference){
            bestMatch.name = friends[i].name;
            bestMatch.photo = friends[i].photo;
            bestMatch.friendDifference = totalDifference;
         }
      };
      console.log("You're a perfect match with " + bestMatch + "!");
   });
};