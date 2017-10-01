// FriendFinder Homework Assignment
// by Jason Mckinney
// 9/30/2017
//
// Implements a express.js server to create a simple matchmaking app
// where users answer questions and are matched to one another
// accesses a MySQL database that contains the user's information.
//------------------------------------------------------------------------------
// This code is the main server to listen and begin to route the requests to the
// correct sections of code
//
// FLOW *******
//	HTML ROUTES /*/*/*/*
// 	home.html --LINKS-TO--> survey.html --GET-MATCH-API--> modal with match
// 		--POST-TO-API--> enter friend to Database
//
//	API ROUTEs */*/*/*
//	GET -> /api/friends
//		returns all possible friends
//	GET -> /api/match
//		returns best match given score
//	POST -> /api/friends
//		reciever for survey information
//
//------------------------------------------------------------------------------

// Dependencies
var express = require("express");
var bodyParser = require("body-parser");

// create Express app and set the port
var app = express();
var PORT = process.env.PORT || 8080;

// Body parser setup
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({
	type: "application/vnd.api+json"
}));
// app.use(express.static(path.join(__dirname,'public')); - will use later

// Routes requires
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// Sooo... servers have to listen to function.. so "So Say We All!"
app.listen(PORT, function () {
	console.log("App running on PORT:", PORT);
})
