var keys = require('../config/keys');

var Project = require('../models/ProjectModel');
var User = require('../models/UserModel');

var mandrill = require('mandrill-api/mandrill');
var mandrill_client = new mandrill.Mandrill(keys.mandrill);

var exports = module.exports = {};

exports.prepEmail = function(req, res) {
console.log(req.body);

	var message = {
    "html": "<p>This will be replaced</p>",
    "text": "This will be replaced",
    "subject": "example subject",
    "from_email": "admin@jadesphere.com",
    "from_name": "Administrator",
    "to": [{
        "email": "yargnits67@hotmail.com",
        "name": "Joe K",
        "type": "to"
    }],
    "headers": {
      "Reply-To": "admin@jadesphere.com"
    }
  };



	var title = req.body.title;
	var dueDate = req.body.dueDate;

	message.html = "<p>You have been assigned to the following project: " + title + "</p>";
	message.text = "You have been assigned to the following project: " + title;
	message.subject = "JadeSphere.com" + title;


	// Defining user emails
	var userEmails = [];


	// Pushing the team lead
	// userEmails.push({
	// 	email: req.body.teamLead,
	// 	mame: ....,
	// 	type: 'to'
	// });

	var usersList = req.body.teamMembers;
	usersList.forEach(function (teamMember) {
		userEmails.push({
			email: teamMember.email,
			name: teamMember.name,
			type: 'to'
		})
	})


		message.to = userEmails;
		//console.log('final message ', message);
		console.log('userEmails ', userEmails);

		// send emails
		sendEmail(message);

		res.end();

};



		// console.log('from email controller');
		// console.log('title ', req.body.title);
		// console.log('teamLead ', req.body.teamLead);
		// console.log('teamMembers ', req.body.teamMembers);
		// console.log('dueDate ', req.body.dueDate);

	

var sendEmail = function(message) {
	var async = true;
	var ip_pool = "Main Pool";
	mandrill_client.messages.send({ "message": message, "async": async, "ip_pool": ip_pool }, function(result) {
	    console.log(result);
    /*
    [{
        "email": "recipient.email@example.com",
        "status": "sent",
        "reject_reason": "hard-bounce",
        "_id": "abc123abc123abc123abc123abc123"
      }]
    */
	}, function(e) {
	    // Mandrill returns the error as an object with name and message keys
	    console.log('A mandrill error occurred: ' + e.name + ' - ' + e.message);
	    // A mandrill error occurred: Unknown_Subaccount - No subaccount exists with the id 'customer-123'
	});
};