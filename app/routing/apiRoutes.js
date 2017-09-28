var connection = require("../config/connection");

module.exports = function(app) {

    app.get("/api/friends", function(req, res) {
        connection.query("SELECT * FROM friends", function(err, results){
          res.json(results);
        });
    });

    app.post("/api/match", function(req, res) {
        console.log("Entered Match Route",req.body.score);
        // connection.query("SELECT * FROM friends WHERE totalScore>0 ORDER BY ABS(totalScore - ? ) ASC LIMIT 1",req.body, function(err, results){
        //   res.json(results);
        // });
    });

    app.post("/api/friends", function(req, res) {
        console.log("Entered POST");
        var query = connection.query("INSERT INTO friends SET ?", req.body, function(error, results, fields){
            if(error) throw error;
            console.log(results.affectedRows + " friend inserted!\n");
        });
        console.log(query.sql);
    });
}
