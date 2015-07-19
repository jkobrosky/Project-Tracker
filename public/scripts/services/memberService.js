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


//////////////////////////////////////
/*
WORKING ON GETTING A RESOLVE WORKING FOR MEMBER.HTML
ADJUSTED APP.GET('/API/PROJECTS/:_ID?')
NEED TO MAKE THE DB RELATIONAL FOR USERS/PROJECTS
ADDED PROJECTS IN USERMODEL.JS
NEED TO FIGURE OUT HOW TO PASS USER._ID TO MEMBERSERVICE


55aac8258b12663428bd1d5d
*/