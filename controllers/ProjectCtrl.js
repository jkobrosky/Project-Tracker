var ProjectModel = require('../models/ProjectModel');

module.exports = {

	createProject: function(req, res) {
		//console.log('show me req.body ', req.body);
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
				return res.status(500).json(err);
			} else {
				return res.json(result);
			}
		})
	},

	updateProject: function(req, res) {
		console.log('update info ', req.params._id);
		console.log('req.body', req.body)
		ProjectModel.findByIdAndUpdate(req.params._id, req.body, function(err, result) {
			if(err) {
				return res.status(500).json(err);
			} else {
				return res.json(result);
			}
		})
	},

	removeProject: function(req, res) {
		console.log('req.params.id ', req.params._id);
		ProjectModel.findByIdAndRemove(req.params._id, function(err, result) {
			if(err) {
				res.status(500).json(err);
			} else {
				return res.json(result);
			}
		});
	}

};