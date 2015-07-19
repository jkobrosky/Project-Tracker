var app = angular.module('tracker');


app.directive('fileread', function(amazonService) {
	return {
		restrict: 'EA',
		// templateUrl: '../views/modals/modalPanels/fileread.html',
		scope: {
			setAttachments: '&',
			attachmentLocation: '=',
			attachmentsArr: '='
		},
		link: function(scope, elem, attrs) {
			
			elem.bind('change', function(changeEvent) {
				var reader = new FileReader();

				reader.onload = function(loadEvent) {
					scope.$apply(function() {
						var fileread = loadEvent.target.result;

						console.log('fileread', fileread);
						console.log('elem[context] ', elem);

						var tempArr = elem['context'].value.split('\\');
						var fileName = tempArr[tempArr.length - 1];

						amazonService.uploadToS3(fileread, fileName).then(function(response) {
							console.log(response);
							scope.attachmentsArr.push({ location: response.data.Location, name: fileName });
							console.log('location array', scope.attachmentsArr);
						}, function(err) {
							console.log(err);
						})

						console.log('fileName ', fileName);
					});
				}

				reader.readAsDataURL(changeEvent.target.files[0]);
			});
		},
		controller: function($scope) {

			$scope.attachmentsArr = [];

			$scope.createAttachments = function() {
				console.log('attachmentLocations from controller in fileread directive ', $scope.attachmentsArr);
				$scope.setAttachments($scope.attachmentsArr);
			}
		}
	};
});