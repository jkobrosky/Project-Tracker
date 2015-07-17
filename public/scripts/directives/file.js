var app = angular.module('tracker');


app.directive('file', function() {
	return {
		restrict: 'EA',
		templateUrl: '../views/modals/modalPanels/file.html',
		scope: {
			file: '@'
		},
		link: function(scope, elem, attrs) {
			elem.bind('change', function(event) {
				var files = event.target.files;
				var file = files[0];
				scope.file = file;
				scope.$parent.file = file;
				scope.$apply();
			});
		},
		controller: function($scope) {
			$scope.showFile = function() {
				console.log('$scope.file ', $scope.file);
			}
		}
	};
});

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