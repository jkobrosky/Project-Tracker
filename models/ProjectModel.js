var mongoose = require('mongoose');
var moment = require('moment');
var TeamMembers = require('./TeamMembersSchema');

var Project = new mongoose.Schema({
	title: { type: String, required: true, unique: true },
	description: { type: String, required: true, },
	teamLead: String,
	teamMembers: [TeamMembers],
	startDate: Date,
	dueDate: Date
});

module.exports = mongoose.model('Project', Project);