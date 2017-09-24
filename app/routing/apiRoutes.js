//link to data in friends array
var friends = require("../data/friends.js");

module.exports = function(app) {
	app.get("/api/friends", function(req, res) {
		res.json(friends);
	});

	//compare users data to list of friends on database
	app.post("/api/friends", function(req, res) {
		var friendResult = 
		{
			name: "",
			photo: "",
			friendDifference: 100
		};

		console.log(req.body);

		//pinpoint the user scores stored in the data file
		var userData = req.body;
		var userScores = userData.scores;

		//calculate the score differential between user and friends in database
		var scoreDiff = 0;

		//go through list of friends by name and score to match to user who entered data. we want their score so need to loop 2x
		for (var i = 0; i < friends.length; i++) {
			console.log(friends[i]);
			scoreDiff = 0;

			for (var j = 0; j < friends[i].scores[j]; j++) {
				//loop through the friends scores and return value of score between user and friends
				//math.abs returns the absolute value of a number...aka it keeps numbers positive
				scoreDiff += Math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[j]));

				if (scoreDiff <= friendResult.friendDifference) {
					friendResult.name = friends[i].name;
					friendResult.photo = friends[i].photo;
					friendResult.friendDifference = friends[i].friendDifference;
				}

			}


		}

		//push user data to ther friends array
		friends.push(userData);

		//send new friend results back to client side
		res.json(friendResult);
	});
}