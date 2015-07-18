var app = angular.module('tracker');

app.directive('attachmentPickerModal', function() {
	return {
		restrict: 'EA',
		templateUrl: '../views/modals/attachmentPickerModal.html',
		scope: {
			toggleAttachmentPicker: '&',
			setFileType: '&',
			setAttachments: '&',
			attachmentPickerModalVisible: '=',
			selectedFileType: '=',
			attachmentsArr: '=',
			fileTypes: '=',
			attachmentLocation: '='
		},
		controller: function($scope) {
			$scope.fileTypes = [];
			$scope.extensions = [ '.jpg', '.svg', '.psd', '.doc',	'.ppt', '.xml', '.mp4', '.mov' ];

			for (var i = 0; i < $scope.extensions.length; i++) {
				$scope.fileTypes.push({
					name: $scope.extensions[i],
					ticked: false
				});
			};

			$scope.setFileType = function(selectedFileType) {
				console.log('selectedFileType ', selectedFileType);
			};

		}
	}
})