('use strict');

// Modules
var express = require('express');
var mongoose = require('mongoose');
var moment = require('moment');
var bodyParser = require('body-parser');
var cors = require('cors');
var moment = require('moment');
var nodemailer = require('nodemailer');
var AWS = require('aws-sdk');
var multer = require('multer');
var fs = require('fs');

//Controllers
var ProjectCtrl = require('./controllers/ProjectCtrl');
var UserCtrl = require('./controllers/UserCtrl');
var TaskCtrl = require('./controllers/TaskCtrl');
var TeamCtrl = require('./controllers/TeamCtrl');
var EmailCtrl = require('./controllers/EmailCtrl');

// Constants 
var port = 8887;
var mongoUri = 'mongodb://localhost:27017/management-tracker';

// Express
var app = express();

	app.use(bodyParser.json());
	app.use(cors());

	app.use(express.static(__dirname + '/public'));

	AWS.config.loadFromPath('./config/aws-config.json');
	var photoBucket = new AWS.S3({ params: { Bucket: 'jadesphere' }});

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

	// Routes for AWS
	app.post('/api/upload', multer({ limits: { filesize: 10*1024*1024 }}), function(req, res) {
		if(!req.files || !req.files.file1) {
			return res.status(403).send('pick a file');
		} 
		var file1 = req.files.file1;
		console.log('111111111111', file1);

		uploadToS3(file1, function(err, data) {
			console.log('22222222222', data);
			if(err) return res.status(500).json(err);
			//else return res.json(data);
			console.log('url cutoff ', data.Location);
			res.redirect('/#/admin');
		});

	});

	function uploadToS3(file, callback) {
		photoBucket
			.upload({ ACL: 'public-read',
								Body: fs.createReadStream(file.path),
								Key: file.originalname,
								ContentType: 'file.mimetype'
		})

			.send(callback);
	};


	mongoose.connect(mongoUri);
	mongoose.connection.once('open', function() {
		console.log('Connected to Mongo at ', mongoUri);
	})

	app.listen(port, function() {
		console.log('listening on port ' + port);
	})