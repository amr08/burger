
  var mysql      = require('mysql');

  exports.connection = [];
  
  	var Sql = function(mysql) {

	  connection = mysql.createConnection({
		host     : 'localhost',
		user     : 'root',
		password : '',
		database : 'burgers_db'
		});


		connection.connect(function(err) {
		  if (err) {
		    console.error('error connecting: ' + err.stack);
		    return;
		  };

		  console.log('connected as id ' + connection.threadId);
		  console.log("working")
		});


	};


	module.exports = Sql;