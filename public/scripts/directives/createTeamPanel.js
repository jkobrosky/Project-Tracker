var app = angular.module('tracker');

app.directive('createTeamPanel', function() {
	return {
		restrict: 'EA',
		templateUrl: '../views/modals/modalPanels/createTeamPanel.html',
		scope: {
			addTeam: '&',
			removeUser: '&',
			getUsers: '&',
			toggleNewTeamPanel: '&',
			createTeamPanelVisible: '=',
			teamMembers: '=',
			newTeam: '=',
			member: '='
		},
		controller: function($scope, adminService){

			///////////////////////////////////////////////////////
			//																									 //
			// This section adds an input bar when the user      //
			// clicks on the '+' icon. Then when the 'x' is 		 //
			// clicked it removes the bottom input. 						 //
			//																									 //
			///////////////////////////////////////////////////////

			$scope.usersArr = [];
			$scope.num = 0;
			// $scope.last = !($scope.usersArr.length > 0);

			// Allows user to add a new user. Adds it to the usersArr to later be sent to mongoDB colleciton
			$scope.addNewUser = function(user) {
				console.log('num ', $scope.num);
				console.log('clicked addNewuser', user, $scope.newTeam, $scope.usersArr);
				$scope.usersArr[$scope.num] = {
					id: $scope.num + 1,
					name: user
				};
				$scope.newTeam.teamMembers = '';
				$scope.num++;
				// $scope.last = !($scope.usersArr.length > 0);
				// console.log($scope.last);
				console.log('usersArr ', $scope.usersArr);
			};

			//Removes selected user
			$scope.removeUser = function(user) {
				console.log('removeUser was clicked ', user);
				var search = '';
				for(var i = 0; i < $scope.usersArr.length; i++) {
					if($scope.usersArr[i].name === user) {
						$scope.usersArr.splice(i, 1);
						break;
					}
				}
			}

			$scope.addTeam = function(newTeam, usersArr) {
				console.log('newTeam in ctrl ', newTeam);
				console.log('arr in ctrl ', usersArr, usersArr.length);

				newTeam.teamMembers = [];
				for (var i = 0; i < usersArr.length; i++) {
					console.log('users in usersArr ', usersArr[i].name);
					newTeam.teamMembers.push(usersArr[i].name);
				}

			///////////////////////////////////////////////////////
			//																									 //
			//								API CALLS SECTION									 //
			//																									 //
			///////////////////////////////////////////////////////

				// sends the newTeam object to the service to be 'POST'ed to the DB
				console.log('newTeam ', newTeam);
				return adminService.addTeam(newTeam).then(function(response) {
					$scope.newTeam = '';
					$scope.usersArr = [];

					console.log('response ', response);
				}, function(err) {
					console.log('error adding team ', err);
				});
			};


			// $scope.runRemove = function(member){
			// 	console.log("bottom", member)
			// 	//$scope.removeUser({member: {member: member}})
			// 	$scope.removeUser({ member: member });
			// };

			// $scope.getUsers = function(val) {
			// 	console.log(val);
			// }
		}
		// link: function (scope, elem, attrs) {
		// 	console.log('teamMembers in child directive:', scope.teamMembers);
		// 	elem.on('click', function() {

		// 	})
		// }
	}






});