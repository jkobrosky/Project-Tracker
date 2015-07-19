var app = angular.module('tracker');

app.controller('authCtrl', function($scope, $location, authService) {

	$scope.loginVisible = false;

	$scope.loginToggle = function() {
		$scope.loginVisible = !$scope.loginVisible;
	};

	$scope.login = function(email, password) {
		$scope.email = email;
		$scope.password = password
		console.log('clicked login', email, password);
		authService.login($scope.email, $scope.password).then(function(response) {
			console.log('success', response);
			$location.path('/member');
		}, function(err) {
			console.log('err');
		})
	}

});