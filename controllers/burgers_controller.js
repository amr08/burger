var express = require("express");
var burger = require("../models/burger.js")
var router = express.Router();


router.get("/", function(req, res) {
	res.redirect('/burgers')
})


router.get('/', function (req, res) {
	res.redirect('/burgers');
});

router.get('/burgers', function (req, res) {
	burger.selectAll(function (data) {
		var hbsObject = { burgers: data };
		console.log(hbsObject);
		res.render('index', hbsObject);
		console.log(data);
	});
});




// burger.selectAll();
// router.post('/cats/create', function (req, res) {
// 	burger.create(['name', 'sleepy'], [req.body.name, req.body.sleepy], function () {
// 		res.redirect('/cats');
// 	});
// });

// router.put('/cats/update/:id', function (req, res) {
// 	var condition = 'id = ' + req.params.id;

// 	console.log('condition', condition);

// 	cat.update({ sleepy: req.body.sleepy }, condition, function () {
// 		res.redirect('/cats');
// 	});
// });

// router.delete('/cats/delete/:id', function (req, res) {
// 	var condition = 'id = ' + req.params.id;

// 	cat.delete(condition, function () {
// 		res.redirect('/cats');
// 	});
// });

module.exports = router;