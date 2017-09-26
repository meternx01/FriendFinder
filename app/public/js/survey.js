$("#btn-submit").on("click", function(event){


    var varInputName = $("#inputName").val().trim();
    var varInputLink = $("#inputPhoto").val().trim();
    var responses = $('select.questions').map(function(){
        return this.value
    }).get();
    console.log(responses);
    var responseString = responses.toString();
    var score = 0;
    score += (parseInt(responses[0])+(6-parseInt(responses[1]))+parseInt(responses[4])+(6-parseInt(responses[9])))/20*50;
    score += parseInt(responses[2])/5*10;
    score += parseInt(responses[3])/5*15;
    score += (parseInt(responses[7])+(6-parseInt(responses[5]))+parseInt(responses[8])+(6-parseInt(responses[6])))/20*25;
    console.log(score);

    var friend = {
        name : varInputName,
        photo : varInputLink,
        scores : responseString,
        totalScore: score
    };

    //insertIntoDB(friend);



    $.post("/api/friends", friend,
    function(data) {
        console.log("HI");
        //
        // // If a table is available... tell user they are booked.
        // if (data) {
        //     alert("Yay! You are officially booked!");
        // }
        //
        // // If a table is available... tell user they on the waiting list.
        // else {
        //     alert("Sorry you are on the wait list");
        // }
        //
        // // Clear the form when submitting
        // $("#reserve-name").val("");
        // $("#reserve-phone").val("");
        // $("#reserve-email").val("");
        // $("#reserve-unique-id").val("");

    });

});
