var app = angular.module('tracker');

app.directive('projectsModal', function() {
	return {
		restrict: 'EA',
		templateUrl: '../views/modals/projectModal.html',
		scope: {
			addProject: '&',
			getProjects: '&',
			addProjectView: '&',
			addProjectVisible: '=',
			newProject: '@',
			newUser: '@'
		},
		controller: function($scope) {
			$scope.theClick = function(){
				$scope.addProject({ newProject: $scope.newProject })
				.then(function(response) {
					console.log('response from directive ', response);
				}, function(err) {
					console.log('error from project directive ', err);
				})
			};
			$scope.clearText = function() {
				$scope.newProject = '';
				//$scope.newUser = '';
			}
		}
	}
});