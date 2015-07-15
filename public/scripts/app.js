var app = angular.module('tracker', ['ngRoute', 'autocomplete', '720kb.datepicker', 'angularMoment', 'ngDropdowns', 'angularjs-dropdown-multiselect', 'isteven-multi-select']);

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
		controller: 'adminCtrl',
		resolve: {
			projectsList: function($q, $http, adminService) {
				var deferred = $q.defer();
				adminService.getProjects().then(function(response) {
					console.log('from the config ', response);
					var projects = response.data;
					deferred.resolve(projects);
				}, function(err) {
					console.log('Houston... ', err);
				})

				return deferred.promise;
			},

			membersList: function($q, $http, adminService) {
				var deferred = $q.defer();
				adminService.getUsers().then(function(response) {
					//console.log('memebrsList from config ', response);
					var users = response.data;
					deferred.resolve(users);
				}, function(err) {
					console.log('Houston... ', err);
				})
				return deferred.promise;
			},

			taskList: function($q, $http, adminService) {
				var deferred = $q.defer();
				adminService.getTasks().then(function(response) {
					//console.log('from config ', response);
					var tasks = response.data;
					deferred.resolve(tasks);
				}, function(err) {
					console.log('Houston... ', err);
				})
				return deferred.promise;
			}
		}
	})
	.otherwise({
		redirectTo: '/auth'
	})
});