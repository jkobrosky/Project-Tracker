var app = angular.module('tracker');

app.controller('memberProfileCtrl', function($scope, $location, adminService) {

	///////////////////////////////////////////////////////
	//																									 //
	// 		Removes user from the createTeamPanel.html     //
	//																									 //
	///////////////////////////////////////////////////////

	$scope.runRemove = function(member){
		console.log("middle", member);
		$scope.removeUser({member: member})
	};

	$scope.logout = function() {
		console.log('logout clicked');
		return adminService.logout().then(function(response) {
			console.log('logged out');
			$location.path('/auth');
		})
	}

});