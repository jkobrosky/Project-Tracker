var app = angular.module('tracker');

app.controller('adminCtrl', function($scope, adminService, projectsList) {
	console.log('projectsList in ctrl ', projectsList);
	$scope.Projects = projectsList;
		
	$scope.addProjectVisible = false;

	$scope.detailsVisible = false;

	$scope.addProjectView = function() {
		$scope.addProjectVisible = !$scope.addProjectVisible;
	};

	$scope.clearText = function() {
		$scope.newProject = '';
	}

	$scope.detailsToggle = function() {
		console.log('anything');
		$scope.detailsVisible = !$scope.detailsVisible;
	}

	$scope.getProjects = function() {
		adminService.getProjects().then(function(response) {
			console.log('response ', response);
			$scope.Projects = response.data;
		}, function(err) {
			console.log('error ', err);
		})
	};

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