var app = angular.module('tracker');

app.directive('optionsModal', function() {
	return {
		restrict: 'EA',
		templateUrl: '../views/optionsModal.html',
		scope: {
			addMenuView: '&',
			createProjectView: '&',
			createUserView: '&',
			createProjectVisible: '=',
			createUserVisible: '=',
			menuVisible: '='
		}
	}
});