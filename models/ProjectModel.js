var mongoose = require('mongoose');
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
	next();
});

module.exports = mongoose.model('Project', Project);


// {
// 	title: "noogies for narcs",
// 	description: "karma",
// 	teamLead: "sir Dallin Crane",
// 	tasks: [{
// 		name: "punch Andrew",
// 		status: "priority!!"
// 	}],
// }