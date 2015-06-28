var app = angular.module('tracker');

app.service('memberService', function(lh, $http) {

	this.getProducts = function() {
		return $http({
			method: 'GET',
			url: lh/projects
		})
	}

});