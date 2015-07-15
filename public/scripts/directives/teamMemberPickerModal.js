var app = angular.module('tracker');

app.directive('teamMemberPickerModal', function() {
	return {
		restrict: 'EA',
		templateUrl: '../views/modals/teamMemberPickerModal.html',
		scope: {
			toggleTeamMemberPicker: '&',
			setTeamMembers: '&',
			teamMemberPickerModalVisible: '=',
			teamMembers: '=',
			selectedTeamMembers: '='
		},
		controller: function($scope) {
			//console.log('teamMembers in teamMemberPickerModal ctrl ', $scope.teamMembers);
			// $scope.dropdownButtonText = { buttonDefaultText: 'Select Members' };
			// $scope.dropdownSettings = { enableSearch: true };

			$scope.selectedTeamMembers = [];

			$scope.teamMembersData = [];

			for (var i = 0; i < $scope.teamMembers.length; i++) {
				$scope.teamMembersData.push({
					_id: $scope.teamMembers[i]._id,
					name: $scope.teamMembers[i].name,
					email: $scope.teamMembers[i].email,
					phone: $scope.teamMembers[i].phone,
					ticked: false
				});
			};

			$scope.createTeam = function(selectedTeamMembers) {
				//console.log('createTeam ', selectedTeamMembers);
				$scope.setTeamMembers(selectedTeamMembers);
			}
		}
	}
})