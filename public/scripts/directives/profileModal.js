app.directive('profileModal', function() {
	return {
		restrict: 'EA',
		templateUrl: '../views/modals/profileModal.html',
		scope: {
			allowPassage: '&',
			logout: '&',
			addMenuView: '&',
			addProfileView: '&',
			toggleProjectPanel: '&',
			toggleNewUserPanel: '&',
			toggleNewTeamPanel: '&',
			toggleCalendarPanel: '&',
			toggleTimePicker: '&',
			toggleTeamLeadPicker: '&',
			toggleTeamMemberPicker: '&',
			toggleAttachmentPicker: '&',
			getEvents: '&',
			teamMembers: '=',
			Projects: '='
		},
		controller: 'profileCtrl',
		
		link: function (scope, elem, attrs) {
			//console.log('teamMembers in parent directive:', scope.teamMembers);

			///////////////////////////////////////////////////////
			//																									 //
			// 				This section triggers the visiblity 			 //
			//							 of the menu panels 								 //
			//																									 //
			///////////////////////////////////////////////////////

			// added .project to nav-icons in optionsModal.html
			$('.fa').on('click', function(){
				// Use the return of this to call a function to change vis on panel
				var clicked = $(this).attr('class');
				//console.log(clicked, typeof clicked);
				if(clicked === 'fa fa-plus-circle') {
					scope.showMenu = !scope.showMenu;
					//console.log('showMenu: ', scope.showMenu);
				} else if(clicked === 'fa fa-user-plus') {
					scope.createUserVisible = !scope.createUserVisible;
					//console.log('userVisible: ', scope.createUserVisible);
				} else if(clicked === 'fa fa-users') {
					scope.createTeamVisible = !scope.createTeamVisible;
					//console.log('teamVisible ', scope.createTeamVisible);
				} else if (clicked === 'fa fa-calendar') {
					scope.createCalendarVisible = !scope.createCalendarVisible;
				}
				scope.$apply();
			});
		}
	}
});