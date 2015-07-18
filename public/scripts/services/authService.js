var app = angular.module('tracker');

app.service('authService', function($http) {

	this.login = function(email, password) {
		console.log('in authService', email, password);
		return $http({
				method: 'POST',
				url: 'http://localhost:8887/api/login',
				data: {
					email: email,
					password: password
				}
			})
		};

})