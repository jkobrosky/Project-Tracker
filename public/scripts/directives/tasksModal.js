var app = angular.module('tracker');

app.directive('tasksModal', function() {
	return {
		restrict: 'EA',
		templateUrl: '../views/modals/taskModal.html',
		scope: {
			addTask: '&',
			addTaskView: '&',
			getTasks: '&',
			addTaskVisible: '=',
			newTask: '@'
		},
		controller: function($scope) {
			$scope.theClick = function() {
				//console.log('theClick worked');
				$scope.addTask({ newTask: $scope.newTask })
				.then(function(response) {
					console.log('response in tasks directive ', response);
				}, function(error) {
					console.log('error', error);
				})
			};
			$scope.clearText = function() {
				$scope.newTask = '';
			}
		}
	}
});