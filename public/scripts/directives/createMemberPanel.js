var app = angular.module('tracker');

app.directive('createMemberPanel', function() {
	return {
		restrict: 'EA',
		templateUrl: '../views/modals/modalPanels/createMemberPanel.html',
		scope: {
			addUser: '&',
			createUserVisible: '=',
			newUser: '='
		}
	}
});