var app = angular.module('tracker');

app.service('amazonService', function(lh, $http) {

	this.uploadToS3 = function(fileread, fileName) {
		console.log('amazonService ', fileread, fileName);
		
		return $http({
			method: 'POST',
			url: 'http://localhost:8887/api/amazon',
			data: { 
				location: fileread,
				name: fileName
			}
		})
	};

});