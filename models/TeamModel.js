var mongoose = require('mongoose');

var Team = new mongoose.Schema({
	teamname: { type: String, required: true },
	teamlead: { type: String, required: true },
	teamMembers: [{ type: String }],
	teamleadEmail: { type: String, required: true }
});

module.exports = mongoose.model('Team', Team);