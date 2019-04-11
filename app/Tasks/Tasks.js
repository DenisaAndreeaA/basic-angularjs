'use strict';

var Tasks = angular.module('Tasks', [
  'Employees',
  'Departments',
  'ngRoute'
])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/Tasks', {
    templateUrl: 'Tasks/Tasks.html',
    controller: 'TaskCtrl'
  });
}]);

Tasks.controller('TaskCtrl', ['$scope', 'taskService', function($scope, taskService) {

    $scope.name = "Tasks";

    taskService.getTasks()
    .then(function(response){
      $scope.items = response.data;
    }, function(error){
      $scope.error = error;
    });

      $scope.removeItem = function(item) {
        delete $scope.items[this.items.indexOf(item)];
        console.log($scope.items);
      };

     $scope.addItem = function(nItem) {
            $scope.items.push({no:$scope.items.length+1, code:nItem.Code, name: nItem.Name});
        };

}]);


Tasks.service('taskService', ['$http', function($http){
  this.getTasks = function(){
    return $http.get('http://i874156.iris.fhict.nl/WEB2/tasks');
  };
}]);

Tasks.factory('taskFactory', [function(){
  var obj = {};
  obj.name = "Tasks";
  obj.items = [
    {name: "analysis", description: "analysing the market", title: name, startsAt: new Date(2016,5,1,1), endsAt: new Date(2016,6,1,1), employees:"Vernita Green", department:"Marketing", color: {
      primary: '#e3bc08', // the primary event color (should be darker than secondary)
      secondary: '#fdf1ba' // the secondary event color (should be lighter than primary)
    }},
    {name: "cleaning", description: "sales can do that", title: name, startsAt: new Date(2016,6,1,1), endsAt:new Date(2016,6,1,1), employees:"Beatrix Kiddo", department:"Sales", color: {
      primary: '#e3bc08', // the primary event color (should be darker than secondary)
      secondary: '#fdf1ba' // the secondary event color (should be lighter than primary)
    }},
    {name: "programming", description: "creates software n stuff", title: name, startsAt: new Date(2016,6,1,1), endsAt: new Date(2016,6,1,1), employees:"Elle Driver", department:"IT", color: {
      primary: '#e3bc08', // the primary event color (should be darker than secondary)
      secondary: '#fdf1ba' // the secondary event color (should be lighter than primary)
    }},
    {name: "planning", description: "the process of making plans for something", title: name, startsAt: new Date(2016,6,1,1), endsAt: new Date(2016,6,1,1), employees:"O-Ren Ishii", department:"Planning", color: {
      primary: '#e3bc08', // the primary event color (should be darker than secondary)
      secondary: '#fdf1ba' // the secondary event color (should be lighter than primary)
    }},
    {name: "managing", description: "the process of dealing with or controlling things or people", title: name, startsAt: new Date(2016,6,1,1), endsAt: new Date(2016,6,1,1), employees:"Hattori Hanzo", department:"Management", color: {
      primary: '#e3bc08', // the primary event color (should be darker than secondary)
      secondary: '#fdf1ba' // the secondary event color (should be lighter than primary)
    }},
  ];
  return obj;
}]);
