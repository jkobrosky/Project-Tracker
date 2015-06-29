var app = angular.module('tracker');

app.controller('adminCtrl', function($scope, adminService) {

	$scope.newProjects = [];

	$scope.addProjectVisible = false;

	$scope.addProjectView = function() {
		console.log('modal toggle');
		$scope.addProjectVisible = !$scope.addProjectVisible;
	};

	$scope.clearText = function() {
		$scope.newProject = '';
	}

	$scope.addProject = function(newProject) {
		console.log('newProject ', newProject);
		adminService.addProject(newProject).then(function(response) {
			$scope.newProject = '';
			console.log('response ', response);
		}, function(err) {
			console.log('error adding project ', err);
		});
	};

});