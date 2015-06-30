var app = angular.module('tracker');

app.directive('projectsModal', function() {
	return {
		restrict: 'EA',
		templateUrl: '../views/projectModal.html',
		scope: {
			addProject: '&',
			getProjects: '&',
			addProjectVisible: '=',
			clearText: '=',
		},
		controller: function($scope) {
			$scope.theClick = function(){
				$scope.addProject({ newProject: $scope.newProject })
				.then(function(response) {
					console.log('response from directive ', response);
				})
			};
			$scope.addProjectView = function() {
				$scope.addProjectVisible = !$scope.addProjectVisible;
			}
		}
	}
});