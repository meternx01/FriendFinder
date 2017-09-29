var connection = require("../config/connection");

module.exports = function(app) {

    app.get("/api/friends", function(req, res) {
        connection.query("SELECT * FROM friends", function(err, results){
          res.json(results);
        });
    });

    app.get("/api/match", function(req, res) {
        console.log("Entered Match Route",req.query.score);
        // connection.query("SELECT * FROM friends WHERE totalScore>0 ORDER BY ABS(totalScore - ? ) ASC LIMIT 1",req.body, function(err, results){
        //   res.json(results);
        // });
		res.json({ name : "Hulky",
        photo : "http://cdn.sportsmemorabilia.com/sports-product-image/1-t5118366-500.jpg",
        scores : "12345",
        totalScore: 35});
    });

    app.post("/api/friends", function(req, res) {
        console.log("Entered POST", req.body);
//        var query = connection.query("INSERT INTO friends SET ?", req.body, function(error, results, fields){
//            if(error) throw error;
//            console.log(results.affectedRows + " friend inserted!\n");
			res.end();
//        });
//        console.log(query.sql);
    });
}
