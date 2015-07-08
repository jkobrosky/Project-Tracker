var UserModel = require('../models/UserModel');

module.exports = {

	createUser: function(req, res) {
		console.log('createUser ', req.body.user);
		newUser = new UserModel(req.body.user);
		newUser.save(function(err, result) {
			if(err) {
				return res.status(500).json(err);
			} else {
				return res.json(result);
			}
		})
	},

	readUser: function(req, res) {
		console.log('readUser: req.query ', req.query);
		UserModel.find(req.query)
		.exec(function(err, result) {
			if(err) {
				res.status(500).json(err);
			} else {
				res.json(result);
			}
		})
	},

	deleteUser: function(req, res) {
		console.log('deleteUser: req.query ', req.query);
		UserModel.findByIdAndRemove(req.params._id, function(err, result) {
			if(err) {
				res.status(500).json(err);
			} else {
				res.json(result);
			}
		})
	}
};