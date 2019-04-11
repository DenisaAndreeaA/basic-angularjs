'use strict';

var Departments = angular.module('Departments', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/Departments', {
    templateUrl: 'Departments/Departments.html',
    controller: 'DeptCtrl'

  });
}]);

Departments.controller('DeptCtrl', ['$scope', 'deptService', function($scope, deptService) {

  $scope.name = "Departments";
 

       $scope.removeItem = function(item) {
         var index = this.items.indexOf(item);
         this.items.splice(index,1);
       };

       $scope.updateItem = function(item, newname, newdesc) {
             item.name = newname;
             item.description = newdesc;
        };

        $scope.addItem = function(nItem) {
            $scope.items.push({no:nItem.No, title: nItem.Title,  description:nItem.Desc, status:nItem.Status, finishedDate:nItem.Fin, modificationDate:nItem.Mod, creatioDate: nItem.Crea});
        };

    deptService.getDepartments()
       .then(function(response){
        $scope.items = response.data;
    }, function(error){
      $scope.error = error;  
    });
}]);




Departments.service('deptService', ['$http', function($http){
    this.getDepartments = function(){
        return $http.get('http://i874156.iris.fhict.nl/WEB2/departments')
    };
}]);


