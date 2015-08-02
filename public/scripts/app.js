var app = angular.module('tracker', ['ngRoute', '720kb.datepicker', 'angularMoment', 'ngDropdowns', 'angularjs-dropdown-multiselect', 'isteven-multi-select']);

app.constant('lh', {
	url: 'http://localhost:8887'
});

app.config(function($routeProvider) {
	$routeProvider
	.when('/auth', {
		templateUrl: 'views/auth.html',
		controller: 'authCtrl'
	})
	.when('/member', {
		templateUrl: 'views/member.html',
		controller: 'memberCtrl',
		resolve: {

			user: function(authService) {
				var user = authService.isAuthed();
				return user;
			},

			userProjects: function($q, $http, $location, authService, memberService) {
				
				// authorizing user to check to see if they have admin priveledges
				// This should be moved to the backend for security purposes
				var user = authService.isAuthed();
				if(!user.admin) $location.path('/member');

				// if(user.admin) {
				// 	$location.path('/admin');
				// } else if (user.admin && pass) {
				// 	$location.path('/member')
				// }


				var deferred = $q.defer();
				memberService.getUserProjects(user._id).then(function(response) {
					// console.log('response in member resolve - teamMembers ', response);
					if(response.data.length) {
						response.data.visible = true;
					} else {
						response.data.visible = false;
					}

					response.data.currentUser = user;
					// console.log('currentUser in resolve ', response.data.currentUser);

					var teamProjectsArr = response.data;
					// console.log(' teamProjectsArr in resolve ', teamProjectsArr);

					var postedComments = teamProjectsArr[0].comments;
					// console.log('postedComments in app.js /member ', postedComments);

					deferred.resolve(teamProjectsArr);
				})
				return deferred.promise;
			},

			teamLeadProjects: function($q, $http, authService, memberService) {
				var user = authService.isAuthed();
				var deferred = $q.defer();
				memberService.getTeamLeadProjects(user._id).then(function(response) {
					// console.log('response in member resolve - teamLead ', response);
					if(response.data.length) {
						response.data.visible = true;
					} else {
						response.data.visible = false;
					}
					var leadProjectsArr = response.data;
					// console.log(' leadProjectsArr in resolve ', leadProjectsArr);
				
					deferred.resolve(leadProjectsArr);
				})
				return deferred.promise;
			},
		}
	})

	.when('/admin', {
		templateUrl: 'views/admin.html',
		controller: 'adminCtrl',
		resolve: {

			// authorizing user to check to see if they have admin priveledges
			// This should be moved to the backend for security purposes
			authedUser: function($http, $location, authService) {
				var user = authService.isAuthed();
				if(!user.admin) {
					$location.path('/member');
				}
			},

			projectsList: function($q, $http, adminService, authService) {
				var user = authService.isAuthed();

				var deferred = $q.defer();
				adminService.getProjects().then(function(response) {
					// console.log('from the config projectsList', response);
					var projects = response.data;
					response.data.currentUser = user;
					// console.log('projects in app.js /admin ', projects)
					

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