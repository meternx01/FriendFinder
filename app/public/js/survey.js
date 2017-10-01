// FriendFinder Homework Assignment
// by Jason Mckinney
// 9/30/2017
//
// Client Side Script
//
// This is the event handler to retrieve the form data, process it and do the
// requisite GET and POST calls to the Database to display the modal
// ****************************************************************************

// JQUERY event handler on the button
$("#btn-submit").on("click", function (event) {

	// prevent blanks / stop refresh for modal
	event.preventDefault();

	// Pull in the form data into js variables
	var varInputName = $("#inputName").val().trim();
	var varInputLink = $("#inputPhoto").val().trim();
	// this one loops through the questions, and pushes them into an array
	var responses = $('select.questions').map(function () {
		return this.value
	}).get();

	// stringify the responses (MySQL won't handle arrays)
	var responseString = responses.toString();

	// Score calulation (Very UNscientific)
	// I weight 50% of score to introvertness
	// 10% to political expression
	// 15% to being a stargazer [IMPORTANT TO ME!]
	// remaining 25% for other factors
	var score = 0;
	score += (parseInt(responses[0]) + (6 - parseInt(responses[1])) + parseInt(responses[4]) + (6 - parseInt(responses[9]))) / 20 * 50;
	score += parseInt(responses[2]) / 5 * 10;
	score += parseInt(responses[3]) / 5 * 15;
	score += (parseInt(responses[7]) + (6 - parseInt(responses[5])) + parseInt(responses[8]) + (6 - parseInt(responses[6]))) / 20 * 25;

	// I make the friend object for clarity here.. could do it in the API Call
	var friend = {
		name: varInputName,
		photo: varInputLink,
		scores: responseString,
		totalScore: score
	}; // LOOK THEY MATCH THE COLUMN NAMES IN THE DB!!

	// Make a GET request to find a match first
	$.get("/api/match", { score: friend.totalScore }, function (response) {
		// set the modal html elements with the name and the image link
		$("#matchName").html(response.name);
		$("#matchImage").attr("src", response.photo);
		// make a POST request to put the form's information into my database
		$.post("/api/friends", friend, function (data, status) {
			console.log(data); // log to console
		});

		// display the modal!
		$("#myModal").modal('show');
	})

});
