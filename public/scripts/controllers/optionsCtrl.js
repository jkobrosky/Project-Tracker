var app = angular.module('tracker');

app.controller('optionsCtrl', function($scope) {

	///////////////////////////////////////////////////////
	//																									 //
	// This section triggers the visiblity of the panels //
	//																									 //
	///////////////////////////////////////////////////////

	$scope.showMenu = false;
	$scope.createTeamVisible = false;
	$scope.createUserVisible = false;

	///////////////////////////////////////////////////////
	//																									 //
	// 		Removes user from the createTeamPanel.html     //
	//																									 //
	///////////////////////////////////////////////////////

	$scope.runRemove = function(member){
		console.log("middle", member);
		$scope.removeUser({member: member})
	};

});