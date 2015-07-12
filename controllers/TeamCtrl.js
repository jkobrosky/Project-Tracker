var TeamModel = require('../models/TeamModel');

module.exports = {

	createTeam: function(req, res) {
		console.log('show me req.body', req.body);
		newTeam = new TeamModel(req.body.team);
		console.log(newTeam);
		newTeam.save(function(err, result) {
			if(err) {
				res.status(500).json(err);
			} else {
				res.json(result);
			}
		})
	},

	readTeams: function(req, res) {
		TeamModel.find(req.query)
		.exec(function(err, result) {
			if(err) {
				res.status(500).json(err);
			} else {
				res.json(result);
			}
		})
	},

	removeTeam: function(req, res) {
		TeamModel.findByIdAndRemove(req.params_id, function(err, result) {
			if(err) {
				res.status(500).json(err);
			} else {
				res.json(result);
			}
		})
	}
};