// FriendFinder Homework Assignment
// by Jason Mckinney
// 9/30/2017
//
// Connection information
//
// Designed for heroku, so detection of either dev or production environment
// happens in this connection.
// ****************************************************************************

// Dependency - "Need MySQL, DUH..."
var mysql = require("mysql");

// Detect environment
var env = process.env.NODE_ENV || 'development';
// Select config from config.json
var config = require(__dirname + "/config.json")[env];

// IF in production
if (config.use_env_variable) {
	// create connection to JAWSDB on Heroku
	var connection = mysql.createConnection(process.env[config.use_env_variable]);
} else {
	// otherwise create a localhost connection
	var connection = mysql.createConnection(config);
}

// Do the connection
connection.connect(function (err) {
	if (err) { // error detection on connection
		console.error("error connecting: " + err.stack);
		return;
	}
	// if you see this.. you are in business
	console.log("connected as id " + connection.threadId);
});

// EXPORT THIS TO OTHER STUFF
module.exports = connection;
