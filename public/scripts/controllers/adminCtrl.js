var app = angular.module('tracker');

app.controller('adminCtrl', function($scope) {

	$scope.newProjects = [];

	$scope.modalVisible = false;

	$scope.modalView = function() {
		console.log('modal toggle');
		$scope.modalVisible = !$scope.modalVisible;
	}

});