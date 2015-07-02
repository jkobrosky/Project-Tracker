var TaskModel = require('../models/TaskModel');

module.exports = {

	createTask: function(req, res) {
		console.log('createTask ', req.body.task);
		newTask = new TaskModel(req.body.task);
		newTask.save(function(err, result) {
			if(err) {
				return res.status(500).json(err);
			} else {
				return res.json(result);
			}
		})
	},

	readTask: function(req, res) {
		console.log('readUser: req.query ', req.query);
		TaskModel.find(req.query)
		.exec(function(err, result) {
			if(err) {
				res.status(500).json(err);
			} else {
				res.json(result);
			}
		})
	}
};