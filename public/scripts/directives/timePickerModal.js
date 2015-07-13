var app = angular.module('tracker');

app.directive('timePickerModal', function() {
	return {
		restrict: 'EA',
		templateUrl: '../views/modals/timePickerModal.html',
		scope: {
			toggleTimePicker: '&',
			timePickerModalVisible: '='
		},
		controller: function($scope) {
			$scope.projectDate = new Date();
			console.log('projectDate outside of setDate ', $scope.projectDate);

			$scope.setDate = function(date) {
				$scope.projectDate = date;
				console.log('projectDate ', $scope.projectDate);
			}
		}
	}
})