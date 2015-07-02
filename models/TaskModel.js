var mongoose = require('mongoose');

var Task = new mongoose.Schema({
	name: { type: String, required: true }
});

module.exports = mongoose.model('Task', Task);