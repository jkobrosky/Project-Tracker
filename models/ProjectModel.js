var mongoose = require('mongoose');
var moment = require('moment');
var TeamMembers = require('./TeamMembersSchema');


var Project = new mongoose.Schema({
	title: { type: String },
	description: { type: String },
	teamLead: { type: String },
	tasks: [{type: String}],
	attachments: [{ type: String }],
	teamMembers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
	startDate: { type: Date, default: Date.now },
	dueDate: { type: Date },
	comments: [{ 
		userlabel: { type: String },
		message: { type: String }
	}]
});

// Project.pre('update', function(next) {
// 	this.startDate = new Date();
// 	this.startDate = moment(startDate, moment.ISO_8601);
// 	next();
// });

module.exports = mongoose.model('Project', Project);