// FriendFinder Homework Assignment
// by Jason Mckinney
// 9/26/2017
//
// Implements a express.js server to create a simple matchmaking app
// where users answer questions and are matched to one another
// accesses a MySQL database that contains the user's information.
//------------------------------------------------------------------------------
// This code is the main server to listen and begin to route the requests to the correct
// sections of code
//
// FLOW *******
//	HTML ROUTES /*/*/*/*
// 	home.html --LINKS-TO--> survey.html --POST-TO-API--> modal with match
//
//	API ROUTEs */*/*/*
//	GET -> /api/friends
//		returns all possible friends
//	POST -> /api/friends
//		reciever for survey information
//
//------------------------------------------------------------------------------

var express =require("express");
var bodyParser = require("body-parser");

var app = express();
var PORT = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
// app.use(express.static('public'));

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

app.listen(PORT, function(){
	console.log("App running on PORT:", PORT);
})
