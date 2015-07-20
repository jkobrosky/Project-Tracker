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

	this.postComments = function(comment, currentUserId, projectId) {
		var comments = {};
		comments.userLabel = currentUserId;
		comments.message = comment;
		console.log('comments in postComments ', comments);
		return $http({
			method: 'POST',
			url: 'http://localhost:8887/api/comments',
			data: { 
				comments: {
					userlabel: currentUserId,
					message: comment
				},
				_id: projectId
			}
		})
	};

	this.getComments = function(projectId) {
		return $http({
			method: 'GET',
			url: 'http://localhost:8887/api/comments/' + projectId
		})
	}

});