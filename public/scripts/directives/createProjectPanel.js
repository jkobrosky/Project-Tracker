var app = angular.module('tracker');

app.directive('createProjectPanel', function() {
	return {
		restrict: 'EA',
		templateUrl: '../views/modals/modalPanels/createProjectPanel.html',
		scope: {
			addProject: '&',
			addTask: '&',
			Projects: '=',
			showMenu: '=',
			newProject: '=',
			newTask: '=',
			tasksArr: '=',
			task: '=',
			ngModel: '='
		},
		controller: function($scope, adminService) {

		///////////////////////////////////////////////////////
		//																									 //
		// This section adds an input bar when the user      //
		// clicks on the '+' icon. Then when the 'x' is 		 //
		// clicked it removes the bottom input. 						 //
		//																									 //
		///////////////////////////////////////////////////////

			$scope.tasksArr = [];
			$scope.last = !($scope.tasksArr.length > 0);

			// This is for the default input bar.
			$scope.addFirst = function(){
				$scope.tasksArr[0] = {
					id: 0,
					name: $scope.taskName
				}
				$scope.last = !($scope.tasksArr.length > 0);
				console.log($scope.last)
			}

			// removes the last task entered.
			$scope.removeFirstTask = function(){
				$scope.tasksArr.splice(0,1);
				$scope.last = ($scope.tasksArr.length > 0);
			}

			// Allows user to add a new task. Adds it to the tasksArr to later be sent to mongoDB colleciton
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

			// Removes the last task or input bar
			$scope.removeNewTask = function(arr, i) {
				arr.splice(i + 1, 1)
				$scope.last = !($scope.tasksArr.length > 0);
			}

			// Allows user to add a new task. Adds it to the tasksArr to later be sent to mongoDB colleciton
			$scope.addProject = function(newProject, tasksArr) {
				// console.log('newProject in ctrl ', newProject);
				// console.log('arr in ctrl ', tasksArr, tasksArr.length);

				newProject.tasks = [];
				for (var i = 0; i < tasksArr.length; i++) {
					console.log('names in tasksArr ', tasksArr[i].name);
					newProject.tasks.push(tasksArr[i].name);
					// newProject.tasks = [{ 
					// 	name: tasksArr[i].name
					// }]
				}

				///////////////////////////////////////////////////////
				//																									 //
				//								API CALLS SECTION									 //
				//																									 //
				///////////////////////////////////////////////////////

				// sends the newProject object to the service to be 'POST'ed to the DB
				console.log('newProject ', newProject);
				return adminService.addProject(newProject).then(function(response) {
					$scope.newProject = '';
					$scope.taskName = '';
					$scope.task = '';
					$scope.tasksArr = [];

					$scope.getProjects();
					console.log('response ', response);
				}, function(err) {
					console.log('error adding project ', err);
				});
			}

			// after the newProject is 'POST'ed a 'GET' is sent to repopulate the projects
			$scope.getProjects = function() {
				adminService.getProjects().then(function(response) {
					console.log('getProjects request sent');
					//console.log('response ', response);
					$scope.Projects = response.data;
				}, function(err) {
					console.log('error ', err);
				})
			};
		}
	}
});