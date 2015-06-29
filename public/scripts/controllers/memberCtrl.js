var app = angular.module('tracker');

app.controller('memberCtrl', function($scope, memberService) {

	var self = this;

	var now = new Date();
	$scope.curTime = now;
	console.log('current time: ', $scope.curTime);


	$scope.getProjects = function() {
		memberService.getProjects().then(function(response) {
			console.log('ctrl response ', response);
		}, function(err) {
			console.log('error in Ctrl ', err);
		})
	}


});