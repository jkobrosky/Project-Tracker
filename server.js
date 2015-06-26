('use strict');

// Modules
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');

//Controllers

// Constants 
var port = 8887;
var mongoUri = 'mongodb://localhost:27017/management-tracker';

// Express
var app = express();

	app.use(bodyParser.json());
	app.use(cors());

	app.use(express.static(__dirname + '/public'));

	mongoose.connect(mongoUri);
	mongoose.connection.once('open', function() {
		console.log('Connected to Mongo at ', mongoUri);
	})

	app.listen(port, function() {
		console.log('listening on port ' + port);
	})