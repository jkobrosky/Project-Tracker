var app = angular.module('tracker');

app.directive('optionsModal', function() {
	return {
		restrict: 'EA',
		templateUrl: '../views/modals/optionsModal.html',
		scope: {
			addMenuView: '&',
			createProjectView: '&',
			createTeamView: '&',
			createUserView: '&',
			addProject: '&',
			addTask: '&',
			addTeam: '&',
			addUser: '&',
			closePanels: '&',
			removeUser: '&',
			createProjectVisible: '=',
			createTeamVisible: '=',
			createUserVisible: '=',
			teamMembers: '=',
			menuVisible: '=',
			newProject: '=',
			newTask: '=',
			newTeam: '=',
			newUser: '=',
		},
		// link: function (scope, elem, attrs) {
		// 	console.log('teamMembers in parent directive:', scope.teamMembers);
		// }
	}
});