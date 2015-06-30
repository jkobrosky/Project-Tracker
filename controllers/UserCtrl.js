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
	}
};