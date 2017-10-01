// FriendFinder Homework Assignment
// by Jason Mckinney
// 9/30/2017
//
// HTML Routes
//
// This establishes the routes needed for the HTML calls
// only get routes at this time, just for serving the pages and css/js
// ****************************************************************************

// Dependency to parse the path
var path = require("path");

// Argument is the express app and make this mess available to server.js
module.exports = function (app) {

	// GET route - returns the survey.html
	app.get("/survey", function (req, res) {
		res.sendFile(path.join(__dirname, "../public/survey.html"));
	});

	// GET route - root returns the home.html
	app.get("/", function (req, res) {
		res.sendFile(path.join(__dirname, "../public/home.html"));
	});

	// GET route - returns the css
	app.get("/css/style.css", function (req, res) {
		res.sendFile(path.join(__dirname, "../public/css/style.css"));
	});

	// GET route - returns the javascript
	app.get("/js/survey.js", function (req, res) {
		res.sendFile(path.join(__dirname, "../public/js/survey.js"));
	});

	// GET route - default if no other match returns the root
	app.get("*", function (req, res) {
		res.sendFile(path.join(__dirname, "../public/home.html"));
	});
}
