var app = angular.module('tracker');

app.controller('calendarCtrl', function($scope, $http, adminService) {

  //console.log('inside calendarCtrl');

  //console.log('getCalendarInfo clicked');

  var events = [];
  $scope.data;
  $scope.getEvents = function() {
    //console.log('getEvents was clicked')
    adminService.getProjects().then(function(response){
      console.log('response in calendarCtrl ', response, response.data.length);
      $scope.data = response.data;
      console.log('scope.data ', $scope.data)
      for(var i = 0; i < response.data.length; i++) {
        events.push({
            title: response.data[i].title,
            start: response.data[i].startDate,
            end: response.data[i].dueDate
        });
      }
      console.log('events ', events);
    }, function(err) {
      console.log('error loading calendar events ', err);
    })

    $('#calendar').fullCalendar({
      aspectRatio: 2.6,
      height: 625,
      header: {
        left: 'prev,next,today',
        center: 'title',
        right: 'month,agendaWeek,agendaDay'
      },
      events: events.data,
      googleCalendarApiKey: 'AIzaSyDGXxB6ByZFna_QneMsJ2wVj2h8V6X1RQM',
      defaultView: 'agendaWeek',
      selectable: true

    });
  };
});


    // events: {
    //   googleCalendarId: 'aimqmr7t8l9pg231a43v8g3mrc@group.calendar.google.com'
    // },

    // return $http({
    //   method: 'GET',
    //   url: 'http://localhost:8887/api/projects'
    // }).then(function(response) {
    //   for(var i = 0; i < response.data.length; i++) {
    //     events.push({
    //       data: {
    //         title: response.data[i].title,
    //         start: response.data[i].startDate,
    //         end: response.data[i].dueDate
    //       }
    //     });
    //   }
    // });