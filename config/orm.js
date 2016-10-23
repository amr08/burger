

var connection = require('./connection.js')


var orm = {

		selectAll: function (whatToSelect, table, cb) {
		var queryString = 'SELECT ' + whatToSelect + ' FROM ' + table;
		console.log(queryString);
		connection.query(queryString, function (err, result) {
			cb(result);
		});
	}
	// selectAll: function(tableInput, colToSearch, valOfCol) {
	// 	var queryString = 'SELECT * FROM' + tableInput + 'WHERE' + colToSearch + ' =?';
	// 	// app.get('/', function(req,res) {
	// 	connection.query(queryString, [valOfCol], function(err, data) {
	// 		console.log(data)
	// 		console.log(queryString)
	// 			// if (err) throw err;
	// 			// 	console.log( data );
	// 		    // console.log(res);
	// 		    // console.log( "working" );
	// 		      // res.render('index', {plans: data});
	// 	});

	
	// }

};

module.exports = orm;
