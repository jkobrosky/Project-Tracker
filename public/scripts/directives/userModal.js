var app = angular.module('tracker');

app.directive('usersModal', function() {
	return {
		restrict: 'EA',
		templateUrl: '../views/modals/userModal.html',
		scope: {
			addUser: '&',
			addUserView: '&',
			addUserVisible: '=',
			newUser: '@'
		},
		controller: function($scope) {
			$scope.click = function(newUser) {
				$scope.addUser({ newUser: $scope.newUser })
				.then(function(response) {
					console.log('response from user directive ', response);
				}, function(err) {
					console.log('Houston, the user directive has a problem ', err);
				})
			};
			$scope.clearText = function() {
				$scope.newUser = '';
				$scope.newUser.email = '';
			}
		}
	}
})