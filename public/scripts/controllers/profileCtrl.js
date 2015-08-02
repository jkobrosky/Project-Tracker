var app = angular.module('tracker');

app.controller('profileCtrl', function($scope, $location, adminService) {

	///////////////////////////////////////////////////////
	//																									 //
	// 		Removes user from the createTeamPanel.html     //
	//																									 //
	///////////////////////////////////////////////////////

	$scope.runRemove = function(member){
		$scope.removeUser({member: member})
	};

	$scope.logout = function() {
		// console.log('logout clicked');
		return adminService.logout().then(function(response) {
			console.log('logged out');
			$location.path('/auth');
		})
	}

});