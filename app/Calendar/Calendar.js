'use strict';

var Calendar = angular.module('Calendar', [
  'ngRoute',
  'Tasks',
  'Employees',
  'Departments',
  'ui.bootstrap',
  'mwl.calendar'
])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/Calendar', {
    templateUrl: 'Calendar/Calendar.html',
    controller: 'CalCtrl'
  });
}]);

Calendar.controller('CalCtrl', ['$scope', 'taskService', function($scope, taskService) {

  $scope.name = "Task Calendar";
  $scope.calendarView = 'month';
  $scope.viewDate =  new Date(2016,5,1,1);

  taskService.getTasks()
  .then(function(response){
    $scope.events = response.data;

    for (var i = 0; i < $scope.events.length; i++)
    {
      $scope.events[i].startsAt = new Date($scope.events[i].creatioDate);
      $scope.events[i].endsAt = new Date(2016,7,1,1);
    }


  }, function(error){
    $scope.error = error;
  });




}]);
