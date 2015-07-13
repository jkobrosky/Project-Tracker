var app = angular.module('tracker');

app.directive('createCalendarPanel', function() {
	return {
		restrict: 'EA',
		templateUrl: '../views/modals/modalPanels/createCalendarPanel.html',
		scope: {
			toggleCalendarPanel: '&',
			createCalendarPanelVisible: '='
		},
		controller: 'calendarCtrl'
	}
});