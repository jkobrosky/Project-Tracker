var app = angular.module('tracker');

app.controller('optionsCtrl', function($scope) {

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