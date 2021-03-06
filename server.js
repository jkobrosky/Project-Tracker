('use strict');

// Modules
var express = require('express');
var mongoose = require('mongoose');
var moment = require('moment');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var cors = require('cors');
var moment = require('moment');
var fs = require('fs');
var passport = require('passport');
var session = require('express-session');

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

require('./config/passport')(passport);

// Express
var app = express();

	// app.use(bodyParser.json());
	app.use(cookieParser());
	app.use(bodyParser({ limit: 1000 * 1024 * 1024 }));
	app.use(cors());

	app.use(express.static(__dirname + '/public'));

	app.use(session({
		secret: 'this is an awesome secret'
	}));

	app.use(passport.initialize());

	app.use(passport.session());

	// Routes for Project Controller
	app.get('/api/projects/', ProjectCtrl.readProject);
	app.post('/api/projects', ProjectCtrl.createProject);
	app.post('/api/projects/comments/:_id', ProjectCtrl.addComments);
	app.put('/api/projects/:_id', ProjectCtrl.updateProject);
	app.delete('/api/projects/:_id', ProjectCtrl.removeProject);

	// Routes for pulling user and associated projects
	app.get('/api/projects/user/:id', ProjectCtrl.userProjects);
	app.get('/api/projects/teamLead/:id', ProjectCtrl.userTeamLead);

	// Routes for Comments Controller
	app.get('/api/comments/:id', ProjectCtrl.readComments);
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

	// Routes for Amazon S3
	// app.get('/api/amazon', AmazonCtrl.readAttachments);
	app.post('/api/amazon', AmazonCtrl.uploadToS3);

	// Routes for Login
	app.post('/api/login', isAdmin, passport.authenticate('local'), function(req, res) {
		console.log('server.js req.body ', req.user);
		res.send(req.user);
	});

	app.get('/logout', function(req, res) {
		req.logout();
		res.redirect('/#/auth');
	})

	mongoose.connect(mongoUri);
	mongoose.connection.once('open', function() {
		console.log('Connected to Mongo at ', mongoUri);
	});

	app.listen(port, function() {
		console.log('listening on port ' + port);
	});


function isAdmin(req, res, done) {
	console.log('req.body in isAdmin fn ', req.body);
	console.log('req.user ', req.user);
	done();
};












