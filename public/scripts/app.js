var app = angular.module('tracker', ['ngRoute', 'angularMoment']);

app.constant('lh', {
	url: 'http://localhost:8887'
});

app.config(function($routeProvider) {
	$routeProvider
	.when('/auth', {
		templateUrl: 'views/auth.html'
	})
	.when('/member', {
		templateUrl: 'views/member.html',
		controller: 'memberCtrl'
	})
	.when('/dashboard', {
		templateUrl: 'views/dashboard.html',
	})
	.when('/admin', {
		templateUrl: 'views/admin.html',
		controller: 'adminCtrl'
	})
	.otherwise({
		redirectTo: '/auth'
	})
});