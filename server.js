('use strict');

// Modules
var express = require('express');
var mongoose = require('mongoose');
var moment = require('moment');
var bodyParser = require('body-parser');
var cors = require('cors');

//Controllers
var ProjectCtrl = require('./controllers/ProjectCtrl');

// Constants 
var port = 8887;
var mongoUri = 'mongodb://localhost:27017/management-tracker';

// Express
var app = express();

	app.use(bodyParser.json());
	app.use(cors());

	app.use(express.static(__dirname + '/public'));

	app.get('/api/projects', ProjectCtrl.readProject);
	app.post('/api/projects', ProjectCtrl.createProject);

	mongoose.connect(mongoUri);
	mongoose.connection.once('open', function() {
		console.log('Connected to Mongo at ', mongoUri);
	})

	app.listen(port, function() {
		console.log('listening on port ' + port);
	})