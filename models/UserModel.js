var mongoose = require('mongoose');

var User = new mongoose.Schema({
	name: { type: String, required: true },
	email: { type: String, required: true },
	phone: { type: Number }
});

module.exports = mongoose.model('User', User);