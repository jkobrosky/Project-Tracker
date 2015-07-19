var app = angular.module('tracker');

app.controller('memberCtrl', function($scope, memberService, authService) {

	var now = new Date();
	$scope.curTime = now;
	//console.log('current time: ', $scope.curTime);

	$scope.projects = [];

	$scope.getProjects = function() {
		memberService.getProjects().then(function(response) {
			//console.log('ctrl response ', response);
		}, function(err) {
			console.log('error in Ctrl ', err);
		})
	}

	$scope.isAuthed = function() {
		authService.isAuthed().then(function(response) {
			console.log('response in memberCtrl ', response);
		})
	}

});