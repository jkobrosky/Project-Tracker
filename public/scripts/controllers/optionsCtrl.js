var app = angular.module('tracker');

app.controller('optionsCtrl', function($scope, adminService) {

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
		adminService.logout().then(function(response) {
			console.log('logged out');
		})
	}

});