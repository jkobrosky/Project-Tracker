('use strict');

// Modules
var express = require('express');
var mongoose = require('mongoose');
var moment = require('moment');
var bodyParser = require('body-parser');
var cors = require('cors');
var moment = require('moment');
var nodemailer = require('nodemailer');
var multer = require('multer');
var fs = require('fs');

//Controllers
var ProjectCtrl = require('./controllers/ProjectCtrl');
var UserCtrl = require('./controllers/UserCtrl');
var TaskCtrl = require('./controllers/TaskCtrl');
var TeamCtrl = require('./controllers/TeamCtrl');
var EmailCtrl = require('./controllers/EmailCtrl');
var AmazonCtrl = require('./controllers/AmazonCtrl');

// Constants 
var port = 8887;
var mongoUri = 'mongodb://localhost:27017/management-tracker';

// Express
var app = express();

	// app.use(bodyParser.json());
	app.use(bodyParser({ limit: 1000 * 1024 * 1024 }));
	app.use(cors());

	app.use(express.static(__dirname + '/public'));

	// Routes for Project Controller
	app.get('/api/projects', ProjectCtrl.readProject);
	app.post('/api/projects', ProjectCtrl.createProject);
	app.put('/api/projects/:_id', ProjectCtrl.updateProject);
	app.delete('/api/projects/:_id', ProjectCtrl.removeProject);

	// Routes for Comments Controller
	app.get('/api/comments', ProjectCtrl.readComments);
	app.post('/api/comments', ProjectCtrl.createComment);
	// app.delete('/api/comments', ProjectCtrl.removeComment);

	// Routes for User Controller
	app.get('/api/users', UserCtrl.readUser);
	app.post('/api/users', UserCtrl.createUser);
	app.delete('/api/users/:_id', UserCtrl.deleteUser);

	// Routes for Team Controller
	app.get('/api/teams', TeamCtrl.readTeams);
	app.post('/api/teams', TeamCtrl.createTeam);
	app.delete('/api/teams/:_id', TeamCtrl.removeTeam);

	// Routes for Task Controller
	app.get('/api/tasks', TaskCtrl.readTask);
	app.post('/api/tasks', TaskCtrl.createTask);

	// Routes for Email Controller
	app.post('/api/email', EmailCtrl.prepEmail);

	app.post('/api/amazon', AmazonCtrl.uploadToS3);


	mongoose.connect(mongoUri);
	mongoose.connection.once('open', function() {
		console.log('Connected to Mongo at ', mongoUri);
	})

	app.listen(port, function() {
		console.log('listening on port ' + port);
	})