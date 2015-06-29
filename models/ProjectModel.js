var mongoose = require('mongoose');
var moment = require('moment');
var TeamMembers = require('./TeamMembersSchema');

var Project = new mongoose.Schema({
	title: { type: String, required: true },
	description: { type: String, required: true },
	teamLead: String,
	//teamMembers: [TeamMembers],
	teamMembers: { type: String },
	startDate: { type: Date, default: Date.now },
	dueDate: Date
});

Project.pre('update', function(next) {
	this.startDate = moment().format('YYYY MMMM, Do');
	//this.startDate = new Date();
	next();
});

module.exports = mongoose.model('Project', Project);