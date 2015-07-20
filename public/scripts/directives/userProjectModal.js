var app = angular.module('tracker');

app.directive('userProjectModal', function() {
	return {
		restrict: 'EA',
		templateUrl: '../views/modals/modalPanels/userProjectModal.html',
		scope: {
			addProject: '&',
			getProjects: '&',
			setProject: '&',
			updateProject: '&',
			viewProjectModal: '&',
			memberProjectVisible: '=',
			addProjectVisible: '=',
			currentProject: '=',
			currentUser: '=',
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

			// $('.tasks-panel', function() {
			// 	var clicked = $(this).attr('class');
			// 	//console.log('clicked in directive ', clicked);
			// });

			// element.on('click', function() {
			// 	scope.setProject({ project: scope.project });
			// 	scope.$apply();
			// 	//console.log('this is the current project in link ', scope.project);
			// })

			scope.$watch('project', function() {

				$('.edit-icon').on('mouseenter', function() {
				  $(this).css({ 'color': 'black' })
				})

				$('.edit-icon').on('mouseleave', function() {
				  $(this).css({ 'color': 'rgba(0, 0, 0, 0.15)' })
				});

			});

			scope.$apply();

		},
		controller: function($scope, memberService) {

			$scope.sendComments = [];

			$scope.postedComments = [];

			$scope.sendComment = function(comment, currentUser, currentProject) {
				console.log('comment ', comment, currentUser, currentProject._id);
				console.log('currentProject ', $scope.currentProject);

				$scope.projectId = currentProject._id;
				$scope.sendComments.push(comment);
				$scope.comment = '';

				memberService.postComments(comment, currentUser, $scope.projectId).then(function(response) {
					console.log('response in userProjectModal sendComment ', response);
					memberService.getComments($scope.projectId).then(function(response) {
						console.log('response in userProjectModal getComment ', response);

							$scope.postedComments.push(response.data.comments);
							console.log('postedComments ', $scope.postedComments);

					})
				})
			}
		}
	}
});