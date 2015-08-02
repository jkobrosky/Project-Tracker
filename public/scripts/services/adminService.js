var app = angular.module('tracker');

app.service('adminService', function($http) {

	this.addProject = function(newProject) {
		return $http({
			method: 'POST',
			url: 'http://localhost:8887/api/projects',
			data: { project: newProject	}
		})
	};

	this.getProjects = function() {
		//console.log('adminService requesting projects');
		return $http({
			method: 'GET',
			url: 'http://localhost:8887/api/projects'
		})
	};

	this.getAttachments = function() {
		return $http({
			method: 'GET',
			url: 'http://localhost:8887/api/amazon'
		})
	}

	this.updateProject = function(project, currentProject) {
		console.log('project passed to service ', project, currentProject);
		return $http({
			method: 'PUT',
			url: 'http://localhost:8887/api/projects/' + currentProject._id,
			data: project
		})
	}

	this.removeProject = function(project) {
		return $http({
			method: 'DELETE',
			url: 'http://localhost:8887/api/projects/' + project._id
		})
	};

	this.addUser = function(newUser) {
		return $http({
			method: 'POST',
			url: 'http://localhost:8887/api/users',
			data: { user: newUser }
		})
	};

	this.getUsers = function() {
		return $http({
			method: 'GET',
			url: 'http://localhost:8887/api/users'
		})
	};

	this.removeUser = function(user) {
		console.log('removing user ', user._id);
		return $http({
			method: 'DELETE',
			url: 'http://localhost:8887/api/users/' + user._id,
		})
	};

	this.addTask = function(newTask) {
		return $http({
			method: 'POST',
			url: 'http://localhost:8887/api/tasks',
			data: { task: newTask }
		})
	};


	this.getTasks = function() {
		return $http({
			method: 'GET',
			url: 'http://localhost:8887/api/tasks'
		})
	};

	this.addTeam = function(newTeam) {
		return $http({
			method: 'POST',
			url: 'http://localhost:8887/api/teams',
			data: { team: newTeam	}
		})
	};

	this.getTeams = function() {
		return $http({
			method: 'GET',
			url: 'http://localhost:8887/api/teams'
		})
	};

	this.removeTeam = function(team) {
		return $http({
			method: 'DELETE',
			url: 'http://localhost:8887/api/teams/' + team._id
		})
	};

	this.sendEmail = function(newProject) {
		console.warn(newProject);
		return $http({
			method: 'POST',
			url: 'http://localhost:8887/api/email',
			data: newProject
		})
	};

	this.logout = function() {
		return $http({
			method: 'GET',
			url: 'http://localhost:8887/logout'
		})
	}

});