'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('myApp', [
  'ngRoute',
  'myApp.version',
  'Tasks',
  'Departments',
  'Employees',
  'Dashboard',
  'Calendar',
  'ui.bootstrap',
  'ngAnimate',
  'ngTouch',
  'mwl.calendar'

]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider
  .otherwise({redirectTo: '/index.html',
              controller: 'MainController'});
}]);


app.controller('MainController', function($scope){
  $scope.title = "Welcome to the Task Management Application!";
});
