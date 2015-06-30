var app = angular.module('tracker');

app.controller('adminCtrl', function($scope, adminService, projectsList) {
	console.log('projectsList in ctrl ', projectsList);
	$scope.Projects = projectsList;

	$scope.tasks = [{
		title: 'Color Scheme',
		description: 'Create a color scheme for tracker app'
	},{
		title: 'Tracker App Name',
		description: 'Come up with a better name'
	}];

	$scope.detailsVisible = false;
	
	// Sets the modal views to false
	$scope.addProjectVisible = false;
	$scope.addUserVisible = false;
	$scope.backdropVisible = false;

	$scope.addProjectView = function() {
		$scope.addProjectVisible = !$scope.addProjectVisible;
		$scope.backdropVisible = !$scope.backdropVisible;
	};

	$scope.addUserView = function() {
		$scope.addUserVisible = !$scope.addUserVisible;
		$scope.backdropVisible = !$scope.backdropVisible;
	};

	// Shows/Hides the details in Projects Overview on admin.html
	$scope.detailsToggle = function() {
		$scope.detailsVisible = !$scope.detailsVisible;
	};

	// Gets projects once user 'saves' from ADMIND MODAL
	$scope.getProjects = function() {
		adminService.getProjects().then(function(response) {
			console.log('response ', response);
			$scope.Projects = response.data;
		}, function(err) {
			console.log('error ', err);
		})
	};

	// Adds a project from the ADMIN MODAL
	$scope.addProject = function(newProject) {
		console.log('newProject ', newProject);
		return adminService.addProject(newProject).then(function(response) {
			$scope.newProject = '';
			console.log('response ', response);
		}, function(err) {
			console.log('error adding project ', err);
		});
	};

	$scope.removeProject = function(project) {
		adminService.removeProject(project).then(function(response) {
			console.log('response after remove ', response);
		}, function(err) {
			console.log('error removing ', err);
		})
	}

	// Adds a user from the USER MODAL
	$scope.addUser = function(newUser) {
		console.log('newUser ', newUser);
		adminService.addUser(newUser).then(function(response) {
			console.log('user response ', response);
		}, function(err) {
			console.log('Houston... ', err);
		})
	}

	$scope.getTasks = function() {
		adminService.getTasks().then(function(response) {
			console.log(response);
		}, function(err) {
			console.log(err);
		})
	}







});