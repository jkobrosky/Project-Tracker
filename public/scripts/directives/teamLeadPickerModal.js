var app = angular.module('tracker');

app.directive('teamLeadPickerModal', function() {
	return {
		restrict: 'EA',
		templateUrl: '../views/modals/teamLeadPickerModal.html',
		scope: {
			toggleTeamLeadPicker: '&',
			setTeamLead: '&',
			teamLeadPickerModalVisible: '=',
			selectedMember: '=',
			memberSelection: '=',
			teamMembers: '='
		},
		link: function(scope, elem, attrs) {
			//console.log('from link in teamLeadPickerModal.js ', scope.teamMembers);
			// scope.ddSelectOptions = teamMembers;
		},
		controller: function($scope) {
			// console.log('teamMembers ctrl in teamLead directive', $scope.teamMembers);
			// $scope.selectedMember = {};
			$scope.memberSelection = [];

			for (var i = 0; i < $scope.teamMembers.length; i++) {
				$scope.memberSelection.push({
					_id: $scope.teamMembers[i]._id,
					name: $scope.teamMembers[i].name,
					email: $scope.teamMembers[i].email,
					phone: $scope.teamMembers[i].phone,
					ticked: false
				});
			};

			//console.log('memberSelection ', $scope.memberSelection);

			$scope.setLead = function(selectedMember) {
				// console.log('selectedMember ', selectedMember.name);
				$scope.setTeamLead(selectedMember);
			};
		}
	}
});