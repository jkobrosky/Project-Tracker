var mongoose = require('mongoose');
var moment = require('moment');
var TeamMembers = require('./TeamMembersSchema');


var Project = new mongoose.Schema({
	title: { type: String, required: true },
	description: { type: String, required: true },
	teamLead: String,
	// tasks: [{
	// 	name: { type: String, required: true },
	// 	status: { type: String, default: 'incomplete' }
	// }],
	tasks: [{type: String}],
	//teamMembers: [TeamMembers],
	teamMembers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
	startDate: { type: Date, default: Date.now },
	dueDate: Date
});

Project.pre('update', function(next) {
	this.startDate = new Date();
	this.startDate = moment(startDate, moment.ISO_8601);
	next();
});

module.exports = mongoose.model('Project', Project);