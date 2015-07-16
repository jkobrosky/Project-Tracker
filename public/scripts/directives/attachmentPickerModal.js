var app = angular.module('tracker');

app.directive('attachmentPickerModal', function() {
	return {
		restrict: 'EA',
		templateUrl: '../views/modals/attachmentPickerModal.html',
		scope: {
			toggleAttachmentPicker: '&',
			attachmentPickerModalVisible: '='
		}
	}
})