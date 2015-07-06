var app = angular.module('tracker');

app.directive('createTeamPanel', function() {
	return {
		restrict: 'EA',
		templateUrl: '../views/modals/modalPanels/createTeamPanel.html',
		scope: {
			addTeam: '&',
			removeUser: '&',
			createTeamVisible: '=',
			teamMembers: '=',
			newTeam: '='
		},
		// link: function (scope, elem, attrs) {
		// 	console.log('teamMembers in child directive:', scope.teamMembers);
		// }
	}
});