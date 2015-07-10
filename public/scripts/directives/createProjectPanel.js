var app = angular.module('tracker');

app.directive('createProjectPanel', function() {
	return {
		restrict: 'EA',
		templateUrl: '../views/modals/modalPanels/createProjectPanel.html',
		scope: {
			addProject: '&',
			addTask: '&',
			showMenu: '=',
			newProject: '=',
			newTask: '=',
			tasksArr: '=',
			task: '=',
			ngModel: '='
		},
		controller: function($scope, adminService) {
			$scope.tasksArr = [];
			$scope.last = !($scope.tasksArr.length > 0);

			$scope.addFirst = function(){
				$scope.tasksArr[0] = {
					id: 0,
					name: $scope.taskName
				}
				$scope.last = !($scope.tasksArr.length > 0);
				console.log($scope.last)
			}

			$scope.removeFirstTask = function(){
				$scope.tasksArr.splice(0,1);
				$scope.last = ($scope.tasksArr.length > 0);
			}

			$scope.addNewTask = function(task, num) {
				console.log('clicked addNewTask', task, $scope.newProject, $scope.tasksArr);
				$scope.tasksArr[num + 1] = {
					id: num + 1,
					name: task
				};
				$scope.last = !($scope.tasksArr.length > 0);
				console.log($scope.last);
				console.log('tasksArr ', $scope.tasksArr);
			};

			$scope.removeNewTask = function(arr, i) {
				arr.splice(i + 1, 1)
				$scope.last = !($scope.tasksArr.length > 0);
			}

			$scope.addProject = function(newProject, tasksArr) {
				console.log('newProject in ctrl ', newProject);
				console.log('arr in ctrl ', tasksArr, tasksArr.length);

				newProject.tasks = [];
				for (var i = 0; i < tasksArr.length; i++) {
					console.log('names in tasksArr ', tasksArr[i].name);
					newProject.tasks.push(tasksArr[i].name);
					// newProject.tasks = [{ 
					// 	name: tasksArr[i].name
					// }]
				}

				console.log('newProject ', newProject);
				return adminService.addProject(newProject).then(function(response) {
					$scope.newProject = '';
					$scope.task = '';
					$scope.getProjects();
					console.log('response ', response);
				}, function(err) {
					console.log('error adding project ', err);
				});
			}

			$scope.getProjects = function() {
				adminService.getProjects().then(function(response) {
					//console.log('response ', response);
					$scope.Projects = response.data;
				}, function(err) {
					console.log('error ', err);
				})
			};
		}
	}
});