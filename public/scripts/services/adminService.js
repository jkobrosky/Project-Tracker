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

	this.removeProjects = function() {
		return $http({
			method: 'POST',
			url: 'http://localhost:8887/api/projects',
			data: { project: project }
		})
	}

	this.addUser = function(newUser) {
		return $http({
			method: 'POST',
			url: 'http://localhost:8887/api/users',
			data: { user: newUser }
		})
	};

	this.addTask = function(newTask) {
		return $http({
			method: 'POST',
			url: 'http://localhost:8887/api/tasks',
			data: { task: newTask }
		})
	};

	this.getUsers = function() {
		return $http({
			method: 'GET',
			url: 'http://localhost:8887/api/users'
		})
	}

	this.getTasks = function() {
		return $http({
			method: 'GET',
			url: 'http://localhost:8887/api/tasks'
		})
	}

});