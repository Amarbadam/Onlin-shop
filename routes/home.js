var express = require('express');
var router = express.Router();
var path = require('path');
var connection = require('../connection/connection');

router.get('/', function(request, response) {

		connection.query('SELECT * FROM blogPost', function (error, results, fields) {
		
		connection.query('SELECT DISTINCT category  FROM blogPost ' , function (error, category, fields)  {
			response.render("home", {users: results , category: category});
		});

	})	
});

module.exports = router;