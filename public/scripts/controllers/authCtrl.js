var app = angular.module('tracker');

app.controller('authCtrl', function($scope) {

	$scope.loginVisible = false;

	$scope.loginToggle = function() {
		$scope.loginVisible = !$scope.loginVisible;
	};

});