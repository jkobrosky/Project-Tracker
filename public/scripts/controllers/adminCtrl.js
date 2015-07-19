var app = angular.module('tracker');

app.controller('adminCtrl', function($scope, adminService, projectsList, membersList, taskList) {

	//console.log('projects', projectsList)

	///////////////////////////////////////////////////////
	//																									 //
	// This section imports the resolves from app.config //
	// Also sets the menu options and backdrop to false  //
	//																									 //
	///////////////////////////////////////////////////////

	// Resolves from app.config. Loads the projects, members and tasks before the page loads.
	$scope.Projects = projectsList;
	$scope.teamMembers = membersList;
	$scope.tasks = taskList;
	$scope.tasksArr = [];

	// Sets the modal views of the backdrop, menu and profile menu to false
	$scope.backdropVisible = false;
	$scope.menuVisible = false;
	$scope.profileVisible = false;
	$scope.createProjectPanelVisible = false;
	$scope.createUserPanelVisible = false;
	$scope.createTeamPanelVisible = false;
	$scope.createCalendarPanelVisible = false;

	// Sets the modal views within the 'Create Project' panel
	$scope.timePickerModalVisible = false;
	$scope.teamLeadPickerModalVisible = false;
	$scope.teamMemberPickerModalVisible = false;
	$scope.attachmentPickerModalVisible = false;

	$scope.pastDue = false;

	// $scope.$watch('Projects', function() {
	// 	adminService.getProjects().then(function(response) {
	// 		$scope.Projects = response.data;
	// 	});
	// });

	///////////////////////////////////////////////////////
	//																									 //
	// This section triggers the visiblity of the modals //
	//																									 //
	///////////////////////////////////////////////////////

	// // Toggles the admin options menu from admin.html
	$scope.addMenuView = function() {
		$scope.menuVisible = !$scope.menuVisible;
	};

	// Toggles the edit project view from admin.html
	$scope.addProjectView = function() {
		$scope.addProjectVisible = !$scope.addProjectVisible;
		$scope.backdropVisible = !$scope.backdropVisible;
	};

	// Toggles the create project view from admin.html
	$scope.toggleProjectPanel = function() {
		//console.log('clicked toggleProjectPanel() ', $scope.createProjectPanelVisible);
		$scope.createProjectPanelVisible = !$scope.createProjectPanelVisible;
		$scope.backdropVisible = !$scope.backdropVisible;
	};

	$scope.toggleNewUserPanel = function() {
		//console.log('clicked toggleNewUserPanel() ', $scope.createUserPanelVisible);
		$scope.createUserPanelVisible = !$scope.createUserPanelVisible;
		$scope.backdropVisible = !$scope.backdropVisible;
	};

	$scope.toggleNewTeamPanel = function() {
		//console.log('clicked toggleNewTeamPanel ', $scope.createTeamPanelVisible);
		$scope.createTeamPanelVisible = !$scope.createTeamPanelVisible;
		$scope.backdropVisible = !$scope.backdropVisible;
	};

	///////////////////////////////////////////////////////
	//																									 //
	// This section triggers the visiblity of the modals //
	// within the 'Create Project' panel                 //
	//																									 //
	///////////////////////////////////////////////////////

	$scope.toggleCalendarPanel = function() {
		//console.log('clicked toggleCalendarPanel ', $scope.createCalendarPanelVisible);
		$scope.createCalendarPanelVisible = !$scope.createCalendarPanelVisible;
		$scope.backdropVisible = !$scope.backdropVisible;
	};

	$scope.toggleTimePicker = function() {
		//console.log('toggleTimePicker clicked');
		$scope.timePickerModalVisible = !$scope.timePickerModalVisible;
	};

	$scope.toggleTeamLeadPicker = function() {
		//console.log('toggleTeamLeadPicker clicked')
		$scope.teamLeadPickerModalVisible = !$scope.teamLeadPickerModalVisible;
	};

	$scope.toggleTeamMemberPicker = function() {
		//console.log('toggleTeamMemberPicker clicked');
		$scope.teamMemberPickerModalVisible = !$scope.teamMemberPickerModalVisible;
	}

	$scope.toggleAttachmentPicker = function() {
		console.log('toggleAttachmentPicker clicked');
		$scope.attachmentPickerModalVisible = !$scope.attachmentPickerModalVisible;
	}

	///////////////////////////////////////////////////////
	//																									 //
	// This section triggers the visiblity of the modals //
	// within the 'Add Member' panel                     //
	//																									 //
	///////////////////////////////////////////////////////

	///////////////////////////////////////////////////////
	//																									 //
	// This section triggers the visiblity of the modals //
	// within the 'Create Team' panel                    //
	//																									 //
	///////////////////////////////////////////////////////

	// NOT WORKING
	// $scope.addTaskView = function() {
	// 	//console.log('clicked task view ', $scope.addTaskVisible);
	// 	$scope.addTaskVisible = !$scope.addTaskVisible;
	// 	$scope.backdropVisible = !$scope.backdropVisible;
	// };


	// // Toggles the user profile menu from admin.html
	// $scope.addProfileView = function() {
	// 	$scope.profileVisible = !$scope.profileVisible;
	// };

	/////////////// NOT WORKING ///////////////
	// $scope.closePanels = function() {
	// 	$scope.createTeamVisible = false;
	// 	$scope.createProjectVisible = false;
	// 	$scope.createUserVisible = false;
	// 	$scope.showMenu = false;
	// }


	///////////////////////////////////////////////////////
	//																									 //
	//     This section contains the CRUD functions      //
	//																									 //
	///////////////////////////////////////////////////////



	///////////////////////////////////////////////////////
	//																									 //
	//								PROJECTS SECTION									 //
	//																									 //
	///////////////////////////////////////////////////////

	// Gets projects once user 'saves' from ADMIND MODAL
	$scope.getProjects = function() {
		console.log('getProjects from adminCtrl');
		adminService.getProjects().then(function(response) {
			//console.log('response ', response);
			$scope.Projects = response.data;
		}, function(err) {
			console.log('error ', err);
		})
	};

	// $scope.setProjectDate = function(newDate) {
	// 	//console.log('setProjectDate in adminCtrl', newDate);
	// 	$scope.newProjectDate = newDate;
	// };

	// $scope.setTeamLead = function(selectedMember) {
	// 	//console.log('setTeamLead in adminCtrl ', selectedMember);
	// 	$scope.newTeamLead = selectedMember.text;
	// 	console.log('setTeamLead ', $scope.newTeamLead, typeof $scope.newTeamLead);
	// }

	// $scope.setTeamMembers = function(selectedTeamMembers) {
	// 	//console.log('setTeamMembers in adminCtrl ', selectedTeamMembers);
	// 	$scope.newTeamMembers = selectedTeamMembers;
	// 	console.log('newTeamMembers adminCtrl ', $scope.newTeamMembers);
	// }

	// Adds a project from the ADMIN OPTIONS MODAL
	// $scope.addProject = function(newProject, tasksArr) {
	// 	console.log('newProject within addProject ', newProject);

		// $scope.teamMembersArr = [];

		// newProject.dueDate = $scope.newProjectDate;
		// newProject.teamLead = $scope.newTeamLead;

		// for (var i = 0; i < $scope.newTeamMembers.length; i++) {
		// 	teamMembersArr.push({
		// 		_id: newTeamMembers[i]._id
		// 	})
		// };
		// console.log('teamMembersArr ', teamMembersArr);
		// newProject.teamMembers = $scope.teamMembersArr;
		//newProject.startDate = $scope.newProjectDate;

		//console.log('arr in ctrl ', tasksArr);

		// for(var i = 0; i < arr.length; i++) {
		// 	newProject.tasks = [{
		// 		name: arr.tasks[i].name
		// 	}]
		// }

		// newProject.tasks = [{ 
		// 	name: $scope.task
		// }]
		//console.log('newProject.tasks[0].name ', newProject.tasks[0].name);
	// 	console.log('completed 	newProject ', newProject);
	// 	return adminService.addProject(newProject).then(function(response) {
	// 		$scope.newProject = '';
	// 		$scope.task = '';
	// 		$scope.getProjects();
	// 		//console.log('response ', response);
	// 	}, function(err) {
	// 		console.log('error adding project ', err);
	// 	});
	// };

	// Updates a project from admin.html
	$scope.updateProject = function(project, currentProject) {
		//console.log('updating project ', project, currentProject);
		return adminService.updateProject(project, currentProject).then(function(response) {
			$scope.getProjects();
		}, function(error) {
			console.log('error ', error);
		})
	};

	// Removes a project from admin.html
	$scope.removeProject = function(project) {
		//console.log('removing project ', project);
		adminService.removeProject(project).then(function(response) {
			//console.log('response after remove ', response);
			$scope.getProjects();
		}, function(err) {
			console.log('error removing ', err);
		})
	};

	// Sets the current project variable in the admin.html
	$scope.setProject = function(project) {
		//console.log('setting current project from adminCtrl ', project);
		$scope.currentProject = project;
		console.log('currentProject from adminCtrl ', $scope.currentProject);
	}

	///////////////////////////////////////////////////////
	//																									 //
	//								    USER SECTION									 //
	//																									 //
	///////////////////////////////////////////////////////

	// Adds a user from the ADMIN OPTIONS MODAL
	$scope.addUser = function() {
		//console.log('newUser ', $scope.newUser);
		return adminService.addUser($scope.newUser).then(function(response) {
			$scope.newUser = '';
			$scope.getUsers();
		}, function(err) {
			console.log('Houston... ', err);
		})
	};

	// Gets users list
	$scope.getUsers = function(text) {
		adminService.getUsers(text).then(function(response) {
			//console.log('response ', response);
			$scope.teamMembers = response.data;
		}, function(err) {
			console.log('we have a problem ', err);
		})
	};

	// Removes users from ADMIN OPTIONS - CREATE TEAM section
	$scope.removeUser = function(member) {
		//console.log('member to be removed: ', member);
		adminService.removeUser(member).then(function(response) {
			console.log(response);
			$scope.getUsers();
		}, function(error) {
			console.log(error);
		})
	};

	///////////////////////////////////////////////////////
	//																									 //
	//								   TASKS SECTION	    					   //
	//																									 //
	///////////////////////////////////////////////////////

	// Adds a task from ADMIN OPTIONS - CREATE PROJECT section
	$scope.addTask = function() {
		//console.log('addTask adminCtrl ', $scope.newTask);
		return adminService.addTask($scope.newTask).then(function(response) {
			$scope.newTask = '';
			$scope.getTasks();
			//console.log('response ', response);
		}, function(err) {
			console.log('error ', err);
		})
	};

	// Gets tasks list
	$scope.getTasks = function() {
		adminService.getTasks().then(function(response) {
			console.log('getTasks in adminCtrl ', response);
			$scope.tasks = response.data;
		}, function(err) {
			console.log(err);
		})
	};
});