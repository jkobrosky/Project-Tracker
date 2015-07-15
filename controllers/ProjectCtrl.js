var ProjectModel = require('../models/ProjectModel');
var Task = require('../models/TaskModel')

module.exports = {

	createProject: function(req, res) {
		console.log('show me req.body ', req.body);
		newProject = new ProjectModel(req.body.project);
		console.log(newProject);
		newProject.save(function(err, result) {
			if(err) {
				return res.status(500).json(err);
			} else {
				return res.json(result);
			}
		})
	},

	readProject: function(req, res) {
		ProjectModel.find(req.query)
		.populate('teamMembers')
		.exec(function(err, result) {
			if(err) {
				return res.status(500).json(err);
			} else {
				return res.json(result);
			}
		})
	},

	// readProject: function(req, res) {
	// 	//console.log('req.query ', req.query);
	// 	ProjectModel.find(req.query)
	// 	.exec(function(err, result) {
	// 		if(err) {
	// 			return res.status(500).json(err);
	// 		} else {
	// 			var promise = Task.populate(result, {path:'tasks'});
	// 			promise.then(function(theRes){
	// 				return res.json(theRes);
	// 			}, function(errror){
	// 				return res.status(500).json(errror);
	// 			});
	// 		}
	// 	})
	// },

	updateProject: function(req, res) {
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