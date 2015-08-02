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

			scope.$watch('project', function() {

				$('.edit-icon').on('mouseenter', function() {
				  $(this).css({ 'color': 'black' })
				})

				$('.edit-icon').on('mouseleave', function() {
				  $(this).css({ 'color': 'rgba(0, 0, 0, 0.15)' })
				});

			});

			// scope.$apply();

		},
		controller: function($scope, memberService) {

			$scope.sendComments = [];

			$scope.postedComments = [];

			$scope.sendComment = function(comment, currentUser, currentProject) {

				$scope.projectId = currentProject._id;
				$scope.sendComments.push(comment);
				$scope.comment = '';

				memberService.postComments(comment, currentUser, $scope.projectId).then(function(response) {
					// console.log('response in userProjectModal sendComment ', response);
					memberService.getComments($scope.projectId).then(function(response) {
						// console.log('response in userProjectModal getComment ', response);

							$scope.postedComments.push(response.data.comments);
							// console.log('postedComments ', $scope.postedComments);
					})
				})
			}
		}
	}
});