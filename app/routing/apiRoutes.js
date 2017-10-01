// FriendFinder Homework Assignment
// by Jason Mckinney
// 9/30/2017
//
// API Routes
//
// This establishes the routes needed for the API calls
// access the MySQL Database and either return all people, a match, OR insert
// new person into database
// ****************************************************************************

// need to bring connection here, since using MySQL calls here
var connection = require("../config/connection");

// Argument is the express app and make this mess available to server.js
module.exports = function (app) {

	// GET route - Return all friends in database as array of objects as json
	app.get("/api/friends", function (req, res) {
		// SELECT * FROM friends;
		connection.query("SELECT * FROM friends", function (err, results) {
			// return the results as an array of objects
			res.json(results);
		});
	});

	// GET route - Send query as score (number) and execute SQL to return the
	// match's object as JSON
	app.get("/api/match", function (req, res) {
		console.log("Entered Match Route", req.query.score); // server logging
		// SELECT * FROM friends WHERE totalscore>0 ORDER BY ABS(difference of scores)
		// totalscore>0 returns ALL since WHERE is a requirement when using ORDER BY
		connection.query("SELECT * FROM friends WHERE totalScore>0 ORDER BY ABS(totalScore - ? ) ASC LIMIT 1", req.query.score, function (err, results) {
			console.log(results[0]); // server logging
			res.json(results[0]); // return just the object, not the array
		});
	});

	// POST route - Send object in body of person wanting to add
	app.post("/api/friends", function (req, res) {
		console.log("Entered POST", req.body); // server logging
		var query = connection.query("INSERT INTO friends SET ?", req.body, function (error, results, fields) {
			if (error) throw error;
			console.log(results.affectedRows + " friend inserted!\n"); // server logging
			res.end(); // end the POST
		});
		console.log(query.sql); // server logging the SQL
	});
}
