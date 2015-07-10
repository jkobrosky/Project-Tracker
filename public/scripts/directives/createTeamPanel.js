var app = angular.module('tracker');

app.directive('createTeamPanel', function() {
	return {
		restrict: 'EA',
		templateUrl: '../views/modals/modalPanels/createTeamPanel.html',
		scope: {
			addTeam: '&',
			removeUser: '&',
			getUsers: '&',
			createTeamVisible: '=',
			teamMembers: '=',
			newTeam: '=',
			member: '='
		},
		controller: function($scope){
			$scope.runRemove = function(member){
				console.log("bottom", member)
				$scope.removeUser({member: {member: member}})
			};

			$scope.getUsers = function(val) {
				console.log(val);
			}
		}
		// link: function (scope, elem, attrs) {
		// 	console.log('teamMembers in child directive:', scope.teamMembers);
		// 	elem.on('click', function() {

		// 	})
		// }
	}
});