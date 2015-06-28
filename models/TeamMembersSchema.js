var mongoose = require('mongoose');

var TeamMembers = new mongoose.Schema({
	team: [{
		members: { type: mongoose.Schema.Types.ObjectId, ref: 'Members', required: true },
	}],
	updatedAt: { type: Date, default: Date.now }
});

TeamMembers.pre('update', function(next) {
	this.updatedAt = moment().format('YYYY MMMM, Do');
	next();
});

module.exports = TeamMembers;