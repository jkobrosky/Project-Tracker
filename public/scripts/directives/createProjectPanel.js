var app = angular.module('tracker');

app.directive('createProjectPanel', function() {
	return {
		restrict: 'EA',
		templateUrl: '../views/modals/modalPanels/createProjectPanel.html',
		scope: {
			addProject: '&',
			addTask: '&',
			createProjectVisible: '=',
			newProject: '=',
			newTask: '=',
			ngModel: '='
		}
	}
});