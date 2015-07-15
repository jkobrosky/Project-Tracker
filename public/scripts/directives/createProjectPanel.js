var app = angular.module('tracker');

app.directive('createProjectPanel', function() {
	return {
		restrict: 'EA',
		templateUrl: '../views/modals/modalPanels/createProjectPanel.html',
		scope: {
			addProject: '&',
			toggleProjectPanel: '&',
			toggleTimePicker: '&',
			toggleTeamLeadPicker: '&',
			toggleTeamMemberPicker: '&',
			setProjectDate: '&',
			setTeamLead: '&',
			setTeamMembers: '&',
			getProjects: '&',
			createProjectPanelVisible: '=',
			timePickerModalVisible: '=',
			teamLeadPickerModalVisible: '=',
			teamMemberPickerModalVisible: '=',
			teamMembers: '=',
			Projects: '=',
			date: '=',
			selectedMember: '=',
			selectedTeamMembers: '=',
			newProjectDate: '=',
			newProject: '=',
			tasks: '=',
			tasksArr: '='
		},
		link: function(scope, elem, attrs) {
			$('.tasks-panel', function() {
				var clicked = $(this).attr('class');
				//console.log('clicked in directive ', clicked);
			});
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
			$scope.num = 0;
			$scope.last = !($scope.tasksArr.length > 0);

			// Allows user to add a new task. Adds it to the tasksArr to later be sent to mongoDB colleciton
			$scope.addNewTask = function(task) {
				console.log($scope.tasksArr);
				// console.log('num ', $scope.num);
				// console.log('clicked addNewTask', task, $scope.newProject, $scope.tasksArr);
				$scope.tasksArr[$scope.num] = {
					id: $scope.num + 1,
					name: task
				};
				$scope.task = '';
				$scope.num++;
				$scope.last = !($scope.tasksArr.length > 0);
				// console.log($scope.last);
				// console.log('tasksArr ', $scope.tasksArr);
			};

			//Removes selected task
			$scope.removeTask = function(task) {
				//console.log('removeTask was clicked ', task);
				var search = '';
				for(var i = 0; i < $scope.tasksArr.length; i++) {
					if($scope.tasksArr[i].name === task) {
						$scope.tasksArr.splice(i, 1);
						break;
					}
				}
			}

			$scope.setProjectDate = function(newDate) {
				//console.log('createProjectPanel.js setProjectDate in adminCtrl', newDate);
				$scope.newProjectDate = newDate;
			};

			$scope.setTeamLead = function(selectedMember) {
				console.log('setTeamLead in createProjectPanel.js ', selectedMember);
				//$scope.newTeamLead = selectedMember[0].name;
				console.log('createProjectPanel.js setTeamLead ', $scope.newTeamLead, typeof $scope.newTeamLead);
			}

			$scope.setTeamMembers = function(selectedTeamMembers) {
				//console.log('setTeamMembers in adminCtrl ', selectedTeamMembers);
				$scope.newTeamMembers = selectedTeamMembers;
				console.log('createProjectPanel.js newTeamMembers adminCtrl ', $scope.newTeamMembers);
			}

			// Allows user to add a new task. Adds it to the tasksArr to later be sent to mongoDB colleciton
			$scope.addProject = function(newProject, tasksArr, newProjectDate) {
				newProject.dueDate = newProjectDate.date;
				newProject.tasks = [];
				for (var i = 0; i < tasksArr.length; i++) {
					newProject.tasks.push(tasksArr[i].name);
					// newProject.tasks = [{ 
					// 	name: tasksArr[i].name
					// }]
				};
				
				newProject.teamLead = $scope.newTeamLead;

				$scope.teamMembersArr = [];
				for (var i = 0; i < $scope.newTeamMembers.length; i++) {
					$scope.teamMembersArr.push({
						_id: $scope.newTeamMembers[i]._id
					})
				};

				newProject.teamMembers = $scope.teamMembersArr;

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
					$scope.num = 0;
					$scope.getProjects();
					//console.log('response ', response);
					// $scope.$apply();
				}, function(err) {
					console.log('error adding project ', err);
				});
			};

			// after the newProject is 'POST'ed a 'GET' is sent to repopulate the projects
			// $scope.getProjects = function() {
			// 	adminService.getProjects().then(function(response) {
			// 		console.log('getProjects request sent');
			// 		//console.log('response ', response);
			// 		$scope.Projects = response.data;
			// 	}, function(err) {
			// 		console.log('error ', err);
			// 	})
			// };

			// $scope.timePicker = function() {
			// 	console.log('timePicker clicked');
			// 	$('')
			// }















		}
	}
});