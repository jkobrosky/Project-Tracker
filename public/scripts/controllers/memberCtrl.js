var app = angular.module('tracker');

app.controller('memberCtrl', function($scope, userProjects, teamLeadProjects) {

	$scope.associatedProjects = userProjects;
	$scope.leadProjects = teamLeadProjects;
	// console.log('associatedProjects memberCtrl ', $scope.associatedProjects);

	// Sets the currentUser from the resolve
	$scope.userObject = $scope.associatedProjects.currentUser;
	$scope.currentUser = $scope.associatedProjects.currentUser.name;

	$scope.memberProjectVisible = false;

	$scope.memberProfileVisible = false;


	$scope.viewProjectModal = function() {
		$scope.memberProjectVisible = !$scope.memberProjectVisible;
		$scope.backdropVisible = !$scope.backdropVisible;
	};

	$scope.viewProfileModal = function() {
		$scope.memberProfileVisible = !$scope.memberProfileVisible;
	}

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
			$scope.teamLeadBox = true;
		}

		if($scope.associatedProjects.length) {
			$scope.associatedBox = true;
		}
	};

	// Sets the current project variable in the admin.html
	$scope.setProject = function(project) {
		$scope.currentProject = project;
	};

});