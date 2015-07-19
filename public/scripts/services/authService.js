var app = angular.module('tracker');

app.service('authService', function($q, $http) {

	this.currentUser;

	this.login = function(email, password) {
		console.log('in authService', email, password);
		var deferred = $q.defer();
		$http({
				method: 'POST',
				url: 'http://localhost:8887/api/login',
				data: {
					email: email,
					password: password
				}
		})
		.then(function(response) {
			console.log('response in authService ', response);
			currentUser = response.data;
			console.log('currentUser ', currentUser);
			deferred.resolve(currentUser);
		}, function(err) {
			console.log('error ', err);
		})
		return deferred.promise;
	};

	this.isAuthed = function() {
		if(!currentUser) {
			return 'Login failed'
		} else {
			return currentUser;
		}
	};

})