var app = angular.module('tracker');

app.controller('adminCtrl', function($scope, adminService, projectsList, teamleadsList, taskList) {
	// console.log('projectsList in ctrl ', projectsList);
	// console.log('taskList in ctrl ', taskList)
	$scope.Projects = projectsList;
	$scope.teamLeads = teamleadsList;
	$scope.tasks = taskList;

	$scope.detailsVisible = false;
	
	// Sets the modal views to false
	$scope.addProjectVisible = false;
	$scope.addUserVisible = false;
	$scope.addTaskVisible = false;
	$scope.backdropVisible = false;
	$scope.menuVisible = false;

	// Setting the views within directives to visible
	$scope.createProjectVisible = false;
	$scope.createUserVisible = false;

	// This section triggers the visiblity of the modals
	$scope.addProjectView = function() {
		$scope.addProjectVisible = !$scope.addProjectVisible;
		$scope.backdropVisible = !$scope.backdropVisible;
	};

	$scope.addUserView = function() {
		console.log('userView clicked ', $scope.addUserVisible);
		$scope.addUserVisible = !$scope.addUserVisible;
		$scope.backdropVisible = !$scope.backdropVisible;
	};

	$scope.addTaskView = function() {
		console.log('clicked task view ', $scope.addTaskVisible);
		$scope.addTaskVisible = !$scope.addTaskVisible;
		$scope.backdropVisible = !$scope.backdropVisible;
	}

	$scope.addMenuView = function() {
		console.log('clicked menuView ', $scope.menuVisible);
		$scope.menuVisible = !$scope.menuVisible;
	}

	$scope.createProjectView = function() {
		$scope.createProjectVisible = !$scope.createProjectVisible;
	}

	$scope.createUserView = function() {
		$scope.createUserVisible = !$scope.createUserVisible;
	}
	// END OF MODAL TOGGLES

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
	};

	// Adds a user from the USER MODAL
	$scope.addUser = function(newUser) {
		console.log('newUser ', newUser);
		return adminService.addUser(newUser).then(function(response) {
			console.log('user response ', response);
		}, function(err) {
			console.log('Houston... ', err);
		})
	};

	$scope.getUsers = function() {
		adminService.getUsers().then(function(response) {
			console.log('response ', response);
			$scope.teamleadsList = response.data;
		}, function(err) {
			console.log('we have a problem ', err);
		})
	}

	$scope.addTask = function(newTask) {
		return adminService.addTask(newTask).then(function(response) {
			console.log('response ', response);
		}, function(err) {
			console.log('error ', err);
		})
	}

	$scope.getTasks = function() {
		adminService.getTasks().then(function(response) {
			console.log(response);
			$scope.tasks = response.data;
		}, function(err) {
			console.log(err);
		})
	}







});