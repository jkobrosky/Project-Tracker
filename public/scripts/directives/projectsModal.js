var app = angular.module('tracker');

app.directive('projectsModal', function() {
	return {
		restrict: 'EA',
		templateUrl: '../views/modals/projectModal.html',
		scope: {
			addProject: '&',
			getProjects: '&',
			addProjectView: '&',
			setProject: '&',
			updateProject: '&',
			addProjectVisible: '=',
			currentProject: '=',
			project: '=',
			test: '=',
			tasksArr: '=',
			newProject: '=',
			project: '=',
			newUser: '@'
		},
		link: function(scope, element, attrs) {
			element.on('click', function() {
				scope.setProject({ project: scope.project });
				scope.$apply();
				//console.log('this is the current project in link ', scope.project);
			})
		}
	}
});