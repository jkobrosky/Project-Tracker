var app = angular.module('tracker');

app.directive('optionsModal', function() {
	return {
		restrict: 'EA',
		templateUrl: '../views/modals/optionsModal.html',
		scope: {
			addMenuView: '&',
			createProjectView: '&',
			createUserView: '&',
			createTeamView: '&',
			addProject: '&',
			addTask: '&',
			createProjectVisible: '=',
			createUserVisible: '=',
			createTeamVisible: '=',
			menuVisible: '=',
			newProject: '=',
			newTask: '=',
			ngModel: '='
		}
	}
});