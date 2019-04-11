'use strict';

var Dashboard = angular.module('Dashboard', [
  'ngRoute',
  'Tasks',
  'Employees',
  'Departments',
  'ui.bootstrap'
])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/Dashboard', {
    templateUrl: 'Dashboard/Dashboard.html',
    controller: 'DashCtrl'
  });
}]);


Dashboard.controller('DashCtrl', ['$scope', 'taskService', 'empService', 'deptService', function($scope, taskService, empService, deptService) {

  $scope.name = "Dashboard";

  empService.getEmployees()
  .then(function(response){
    $scope.employees = response.data;
  }, function(error){
    $scope.error = error;
  });

  deptService.getDepartments()
  .then(function(response){
    $scope.departments = response.data;
  }, function(error){
    $scope.error = error;
  });

  taskService.getTasks()
  .then(function(response){
    $scope.tasks = response.data;
  }, function(error){
    $scope.error = error;
  });



}]);
