var app = angular.module('tracker');

app.controller('memberCtrl', function($scope, userProjects, teamLeadProjects) {

	$scope.associatedProjects = userProjects;
	$scope.leadProjects = teamLeadProjects;


	console.log('associatedProjects ', $scope.associatedProjects);
	console.log('leadProjects ', $scope.leadProjects);

	// ng-show visibilty items
	$scope.backdrop = false;
	$scope.associatedBox = userProjects.visible;
	$scope.teamLeadBox = teamLeadProjects.visible;
	
	// Message for each projects container so the user knows which they are a
	// lead on and which they are assigned to as a team member
	$scope.associatedProjectMessage = 'Projects you are assigned to';
	$scope.leadProjectMessage = 'Projects you are the lead on';

	function projectMessage() {
		if($scope.leadProjects.length) {
			console.log('leadProjects.length ', $scope.leadProjects.length)
			$scope.teamLeadBox = true;
		}

		if($scope.associatedProjects.length) {
			$scope.associatedBox = true;
		}
	};

	// var now = new Date();
	// $scope.curTime = now;
	// //console.log('current time: ', $scope.curTime);

	// $scope.projects = [];

	// $scope.getProjects = function() {
	// 	memberService.getProjects().then(function(response) {
	// 		//console.log('ctrl response ', response);
	// 	}, function(err) {
	// 		console.log('error in Ctrl ', err);
	// 	})
	// }

	// $scope.isAuthed = function() {
	// 	authService.isAuthed().then(function(response) {
	// 		console.log('response in memberCtrl ', response);
	// 	})
	// }

});