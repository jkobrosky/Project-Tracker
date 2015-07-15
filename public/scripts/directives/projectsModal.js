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
			Projects: '=',
			project: '=',
			tasks: '=',
			tasksArr: '=',
			newProject: '=',
			project: '=',
			newUser: '@'
		},
		link: function(scope, element, attrs) {

			// console.log('Projects in projectsModal.js ', scope.Projects);
			// console.log('tasks in projectsModal.js ', scope.tasks);
			// console.log('tasksArr in projectsModal.js ', scope.tasksArr);

			$('.tasks-panel', function() {
				var clicked = $(this).attr('class');
				//console.log('clicked in directive ', clicked);
			});

			element.on('click', function() {
				scope.setProject({ project: scope.project });
				scope.$apply();
				//console.log('this is the current project in link ', scope.project);
			})
		}
	}
});