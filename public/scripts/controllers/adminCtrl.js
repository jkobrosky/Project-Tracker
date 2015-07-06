var app = angular.module('tracker');

app.controller('adminCtrl', function($scope, adminService, projectsList, membersList, taskList) {

	$scope.Projects = projectsList;
	$scope.teamMembers = membersList;
	$scope.tasks = taskList;
	// console.log('teamMembers in ctrl ', $scope.teamMembers);
	// console.log('Projects in ctrl ', $scope.Projects);

	$scope.detailsVisible = false;
	$scope.test = 'Test';

	// Sets the modal views to false
	$scope.addProjectVisible = false;
	//$scope.addUserVisible = false;
	$scope.addTaskVisible = false;
	$scope.backdropVisible = false;
	$scope.menuVisible = false;

	// Setting the views within directives to visible
	$scope.createProjectVisible = false;
	$scope.createUserVisible = false;
	$scope.createTeamVisible = false;

	// This section triggers the visiblity of the modals
	$scope.addProjectView = function() {
		$scope.addProjectVisible = !$scope.addProjectVisible;
		$scope.backdropVisible = !$scope.backdropVisible;
	};

	// $scope.addUserView = function() {
	// 	console.log('userView clicked ', $scope.addUserVisible);
	// 	$scope.addUserVisible = !$scope.addUserVisible;
	// 	$scope.backdropVisible = !$scope.backdropVisible;
	// };

	$scope.addTaskView = function() {
		//console.log('clicked task view ', $scope.addTaskVisible);
		$scope.addTaskVisible = !$scope.addTaskVisible;
		$scope.backdropVisible = !$scope.backdropVisible;
	}

	$scope.addMenuView = function() {
		//console.log('clicked menuView ', $scope.menuVisible);
		$scope.menuVisible = !$scope.menuVisible;
	}

	$scope.createProjectView = function() {
		//console.log('createProjectView clicked', $scope.createProjectVisible);
		$scope.createProjectVisible = !$scope.createProjectVisible;
	}

	$scope.createUserView = function() {
		$scope.createUserVisible = !$scope.createUserVisible;
	}

	$scope.createTeamView = function() {
		$scope.createTeamVisible = !$scope.createTeamVisible;
		//console.log('teamView clicked ', $scope.createTeamVisible);
	}
	// END OF MODAL TOGGLES

	// Gets projects once user 'saves' from ADMIND MODAL
	$scope.getProjects = function() {
		adminService.getProjects().then(function(response) {
			//console.log('response ', response);
			$scope.Projects = response.data;
		}, function(err) {
			console.log('error ', err);
		})
	};

	// Adds a project from the ADMIN MODAL
	$scope.addProject = function(newProject) {
		//console.log('newProject ', newProject);
		return adminService.addProject(newProject).then(function(response) {
			$scope.newProject = '';
			$scope.getProjects();
			//console.log('response ', response);
		}, function(err) {
			console.log('error adding project ', err);
		});
	};

	$scope.updateProject = function(project, currentProject) {
		console.log('updating project ', project, currentProject);
		return adminService.updateProject(project, currentProject).then(function(response) {
			$scope.getProjects();
		}, function(error) {
			console.log('error ', error);
		})
	};

	$scope.removeProject = function(project) {
		//console.log('removing project ', project);
		adminService.removeProject(project).then(function(response) {
			//console.log('response after remove ', response);
			$scope.getProjects();
		}, function(err) {
			console.log('error removing ', err);
		})
	};

	$scope.setProject = function(project) {
		console.log('setting current project from adminCtrl ', project);
		$scope.currentProject = project;
	}

	// Adds a user from the USER MODAL
	$scope.addUser = function() {
		//console.log('newUser ', $scope.newUser);
		return adminService.addUser($scope.newUser).then(function(response) {
			//console.log('user response ', response);
			$scope.newUser = '';
			$scope.getUsers();
		}, function(err) {
			console.log('Houston... ', err);
		})
	};

	$scope.getUsers = function() {
		adminService.getUsers().then(function(response) {
			//console.log('response ', response);
			$scope.teamMembers = response.data;
		}, function(err) {
			console.log('we have a problem ', err);
		})
	};

	$scope.removeUser = function() {
		//console.log('member to be removed: ', $scope.member);
		adminService.removeUser($scope.member);
	};

	$scope.addTask = function() {
		console.log('addTask adminCtrl ', $scope.newTask);
		return adminService.addTask($scope.newTask).then(function(response) {
			$scope.newTask = '';
			$scope.getTasks();
			//console.log('response ', response);
		}, function(err) {
			console.log('error ', err);
		})
	};

	$scope.getTasks = function() {
		adminService.getTasks().then(function(response) {
			//console.log(response);
			$scope.tasks = response.data;
		}, function(err) {
			console.log(err);
		})
	};
});