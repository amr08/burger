var mysql      = require('mysql');

var Sql = require("./connection.js")

Sql(mysql);

module.exports = {


	selectAll: function(connection) {


			// app.get('/', function(req,res) {
			   connection.query('SELECT * FROM burgers;', function(err, data) {
			      if (err) throw err;

			      console.log(data);
			      // console.log(res);
			      console.log("working");

			      // res.render('index', {plans: data});

			    });

			// });

 	}

// 	// insertOne: function () {
		
// 	// },

// 	// updateOne: function () {
		
// 	// }

};


