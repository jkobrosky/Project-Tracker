var app = angular.module('tracker');

app.service('memberService', function(lh, $http) {

	this.getUserProjects = function(user) {
		return $http({
			method: 'GET',
			url: 'http://localhost:8887/api/projects/user/' + user
		})
	};

	this.getTeamLeadProjects = function(user) {
		return $http({
			method: 'GET',
			url: 'http://localhost:8887/api/projects/teamLead/' + user
		})
	};

});