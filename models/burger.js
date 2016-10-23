var orm = require("../config/orm.js")



var burger = {
	selectAll: function (cb) {
		orm.selectAll('burger_name', 'burgers', function(res) {
		var data = res;
		console.log(data);
		});
	}
	// // cols and vals are arrays
	// create: function (cols, vals, cb) {
	// 	orm.create('cats', cols, vals, function (res) {
	// 		cb(res);
	// 	});
	// },
	// update: function (objColVals, condition, cb) {
	// 	orm.update('cats', objColVals, condition, function (res) {
	// 		cb(res);
	// 	});
	// },
	// delete: function (condition, cb) {
	// 	orm.delete('cats', condition, function (res) {
	// 		cb(res);
	// 	});
	// }
};




module.exports = burger;