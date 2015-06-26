var app = angular.module('tracker', ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider
	.when('/auth', {
		templateUrl: 'views/auth.html'
	})
	.when('/dashboard', {
		templateUrl: 'views/dashboard.html'
	})
	.when('/admin', {
		templateUrl: 'views/admin.html'
	})
	.otherwise({
		redirectTo: '/auth'
	})
});