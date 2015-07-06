var app = angular.module('tracker');

app.service('adminService', function($http) {

	this.addProject = function(newProject) {
		return $http({
			method: 'POST',
			url: 'http://localhost:8887/api/projects',
			data: { project: newProject }
		})
	};

	this.getProjects = function() {
		return $http({
			method: 'GET',
			url: 'http://localhost:8887/api/projects'
		})
	};

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
		console.log('removing user ', user);
		// return $http({
		// 	method: 'DELETE',
		// 	url: 'http://localhost:8887/api/users',
		// 	data: { name: user }
		// })
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
	}

});