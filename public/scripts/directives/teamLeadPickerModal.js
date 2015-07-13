var app = angular.module('tracker');

app.directive('teamLeadPickerModal', function() {
	return {
		restrict: 'EA',
		templateUrl: '../views/modals/teamLeadPickerModal.html',
		scope: {
			toggleTeamLeadPicker: '&',
			teamLeadPickerModalVisible: '='
		}
	}
});