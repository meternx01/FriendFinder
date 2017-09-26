var connection = require("../config/connection");

module.exports = function(app) {

    app.get("/api/friends", function(req, res) {
        connection.query("SELECT * FROM friends", function(err, results){
          res.json(results);
        });
    });

    app.post("/api/friends", function(req, res) {
        var query = connection.query("INSERT INTO friends SET ?", req.body, function(error, results, fields){
            if(error) throw error;
            console.log(res.affectedRows + " friend inserted!\n");
        });
        consle.log(query.sql);
    });
