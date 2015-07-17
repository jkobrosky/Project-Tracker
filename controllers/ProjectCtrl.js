var ProjectModel = require('../models/ProjectModel');
var Task = require('../models/TaskModel');
var nodemailer = require('nodemailer');
var fs = require('fs');

module.exports = {

	createProject: function(req, res) {
		//console.log('show me req.body ', req.body);
		newProject = new ProjectModel(req.body.project);
		//console.log(newProject);
		newProject.save(function(err, result) {
			if(err) {
				return res.status(500).json(err);
			} else {
				//sendEmail(req.body.project.teamMembers, req.body.project.teamLead, req.body.project.title);
				return res.json(result);
			}
		})
	},

	readProject: function(req, res) {
		ProjectModel.find(req.query)
		.populate('teamMembers')
		.exec(function(err, result) {
			if(err) {
				return res.status(500).json(err);
			} else {
				return res.json(result);
			}
		})
	},

	updateProject: function(req, res) {
		ProjectModel.findByIdAndUpdate(req.params._id, req.body, function(err, result) {
			if(err) {
				return res.status(500).json(err);
			} else {
				return res.json(result);
			}
		})
	},

	removeProject: function(req, res) {
		console.log('req.params.id ', req.params._id);
		ProjectModel.findByIdAndRemove(req.params._id, function(err, result) {
			if(err) {
				res.status(500).json(err);
			} else {
				return res.json(result);
			}
		});
	},

	createComment: function(req, res) {
		ProjectModel.findById(
			req.body._id, 
			function(err, projectFromMongo) {
				if (err) return res.sendStatus(500);
				console.log(projectFromMongo);
				projectObj = projectFromMongo.toObject();
				delete projectObj._id
				projectObj.comments.push(req.body.comment);
				console.log(projectObj);
				ProjectModel.update(
					{ _id: req.body._id },
					projectObj,
					function(err, result) {
						if(err) return res.status(500).json(err);
						ProjectModel.findById(
							req.body._id,
							function(err, result) {
								if(err) return res.status(500).json(err);
								return res.send(result);
							}
						)
					}
				);
			}
		);
	},

	readComments: function(req, res) {
		ProjectModel.find(req.query)
		.select('comments')
		.exec(function(err, result) {
			if(err) {
				res.status(500).json(err);
			} else {
				res.json(result);
			}
		})
	
	}

};

// // create reusable transport method (opens pool of SMTP connections)
// var smtpTransport = nodemailer.createTransport("SMTP",{
//     service: "Gmail",
//     auth: {
//         user: configuration.user,
//         pass: configuration.pass
//     }
// });

// function sendEmail(membersArr, lead, title) {

// 	console.log('membersArr ', membersArr);
// 	console.log('lead ', lead);
// 	console.log('title ', title);


// 		// setup e-mail data with unicode symbols
// 		var mailOptions = {
// 		    from: "Administrator ✔ <admin@jadesphere.com>", // sender address
// 		    to: toEmail, // list of receivers
// 		    subject: "You've been assigned a new project", // Subject line
// 		    text: "You've been assigned to the following project " + title, // plaintext body
// 		    html: "<b>You've been assigned to the following project<span>title</span></b>" // html body
// 		}

// 		// send mail with defined transport object
// 		smtpTransport.sendMail(mailOptions, function(error, response){
// 		    if(error){
// 		        console.log(error);
// 		    }else{
// 		        console.log("Message sent: " + response.message);
// 		    }

// 		    // if you don't want to use this transport object anymore, uncomment following line
// 		    // smtpTransport.close(); // shut down the connection pool, no more messages
// 		});
// 	}
