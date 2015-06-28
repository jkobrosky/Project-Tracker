var ProjectModel = require('../models/ProjectModel');

module.exports = {

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