var app = angular.module('tracker');


app.directive('fileread', function(amazonService) {
	return {
		restrict: 'EA',
		// templateUrl: '../views/modals/modalPanels/fileread.html',
		scope: true,
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
							scope.attachmentLocation = response.data.Location;
							console.log('location ', scope.attachmentLocation);
						}, function(err) {
							console.log(err);
						})

						console.log('fileName ', fileName);
					});
				}

				reader.readAsDataURL(changeEvent.target.files[0]);
			});
		},

	};
});

		
		// controller: function($scope, amazonService) {
		// 	$scope.showFile = function() {
		// 		console.log('$scope.file ', $scope.file);
		// 		amazonService.uploadToS3($scope.file).then(function(response) {
		// 			console.log(response);
		// 		}, function(err) {
		// 			console.log(err);
		// 		});
		// 	}
		// }

	//PREVIOUS ATTEMPT

	// return {
	// 	scope: {
	// 		fileread: '='
	// 	},
	// 	link: function(scope, elem, attrs) {
	// 		elem.bind('change', function(changeEvent) {
	// 			var reader = new FileReader();
	// 			reader.onload = function(loadEvent) {
	// 				scope.$apply(function() {
	// 					scope.fileread = loadEvent.target.result;
	// 					console.log('scope.fileread ', scope.fileread);
	// 					console.log('reader ', reader);
	// 				});
	// 			}
	// 			//reader.readAsDataUrl(changeEvent.target.files[0]);
	// 		});
	// 	}
	// }

	// elem.bind('change', function(event) {
	// 	var files = event.target.files;
	// 	var file = files[0];
	// 	scope.file = file;
	// 	scope.$parent.file = file;
	// 	scope.$apply();
	// });