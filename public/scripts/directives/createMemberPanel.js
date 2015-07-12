var app = angular.module('tracker');

app.directive('createMemberPanel', function() {
	return {
		restrict: 'EA',
		templateUrl: '../views/modals/modalPanels/createMemberPanel.html',
		scope: {
			addUser: '&',
			removeUser: '&',
			toggleNewUserPanel: '&',
			createUserPanelVisible: '=',
			teamMembers: '=',
			member: '=',
			newUser: '='
		},
		controller: function($scope){
			$scope.runRemove = function(member){
				console.log("bottom", member)
				//$scope.removeUser({member: {member: member}});
				$scope.removeUser({member: member});
			};
		}
	}
});