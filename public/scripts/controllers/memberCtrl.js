var app = angular.module('tracker');

app.controller('memberCtrl', function($scope, memberService) {

	$scope.Projects = [{
		title: 'Wireframe for Tracker Project',
		description: 'Create the wireframe for this project',
		teamLead: 'Brock Neilson',
		teamMembers: ['Joe Kobrosky', 'Mark McIver', 'Peter Griesmer', 'Andrew Crane'],
		startDate: moment().format(),
		dueDate: new Date(2015, 05, 27)
	},{
		title: 'Back-end services for Tracker Project',
		description: 'Start the services for MongoDB',
		teamLead: 'Brock Neilson',
		teamMembers: ['Joe Kobrosky', 'Andrew Crane', 'Mikkel Davis'],
		startDate: moment().format(),
		dueDate: new Date(2015, 05, 28)
	},{
		title: 'Color Scheme',
		description: 'Create a viable color scheme',
		teamLead: 'Andrew Crane',
		teamMembers: ['Joe Kobrosky', 'Garen Lucas', 'Brandt Bird'],
		startDate: moment().format(),
		dueDate: new Date(2015, 06, 01)
	}];

	var self = this;

	$scope.detailsVisible = false;


	$scope.detailsToggle = function() {
		$scope.detailsVisible = !$scope.detailsVisible;
	}

	var now = new Date();
	$scope.curTime = now;
	console.log('current time: ', $scope.curTime);


	$scope.getProjects = function() {
		memberService.getProjects().then(function(response) {
			console.log('ctrl response ', response);
		}, function(err) {
			console.log('error in Ctrl ', err);
		})
	}


});