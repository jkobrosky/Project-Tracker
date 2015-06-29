var ProjectModel = require('../models/ProjectModel');

module.exports = {

	createProject: function(req, res) {
		console.log('show me req.body ', req.body);
		newProject = new ProjectModel(req.body.project);
		newProject.save(function(err, result) {
			if(err) {
				return res.status(500).json(err);
			} else {
				return res.json(result);
			}
		})
	},

	readProject: function(req, res) {
		console.log('req.query ', req.query);
		ProjectModel.find(req.query)
		.exec(function(err, result) {
			if(err) {
				res.status(500).json(err);
			} else {
				res.json(results);
			}
		})
	}

};