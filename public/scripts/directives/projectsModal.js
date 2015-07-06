var app = angular.module('tracker');

app.directive('projectsModal', function() {
	return {
		restrict: 'EA',
		templateUrl: '../views/modals/projectModal.html',
		scope: {
			addProject: '&',
			getProjects: '&',
			addProjectView: '&',
			setProject: '&',
			updateProject: '&',
			addProjectVisible: '=',
			currentProject: '=',
			project: '=',
			test: '=',
			newProject: '=',
			project: '=',
			newUser: '@'
		},
		// controller: function($scope) {
		// 	$scope.theClick = function(){
		// 		$scope.addProject({ newProject: $scope.newProject })
		// 		.then(function(response) {
		// 			console.log('response from directive ', response);
		// 		}, function(err) {
		// 			console.log('error from project directive ', err);
		// 		})
		// 	};
		// 	$scope.clearText = function() {
		// 		$scope.newProject = '';
		// 		//$scope.newUser = '';
		// 	}
		// },
		link: function(scope, element, attrs) {
			element.on('click', function() {
				scope.setProject({ project: scope.project });
				scope.$apply();
				//console.log('this is the current project in link ', scope.project);
			})
		}
	}
});