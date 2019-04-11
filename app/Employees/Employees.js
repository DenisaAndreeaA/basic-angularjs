'use strict';

var Employees = angular.module('Employees', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/Employees', {
    templateUrl: 'Employees/Employees.html',
    controller: 'EmpCtrl'
  });
}]);

Employees.controller('EmpCtrl', ['$scope', 'empService', function($scope, empService) {
    
  $scope.name = "Employees";
  

   $scope.removeItem = function(item) {
     var index = this.items.indexOf(item);
     this.items.splice(index,1);
   };

   $scope.updateItem = function(item, newname, newdesc) {
         item.name = newname;
         item.description = newdesc;
    };

    $scope.addItem = function(nItem) {
            $scope.items.push({no:nItem.No, birthDate: nItem.BirthDate,  firstName:nItem.FirstName, lastName:nItem.LastName, gender:nItem.Gender, hireDate:nItem.hireDate});
        };
    
     empService.getEmployees()
       .then(function(response){
        $scope.items = response.data;
    }, function(error){
      $scope.error = error;  
    });

}]);



Employees.service('empService', ['$http', function($http){
    this.getEmployees = function(){
        return $http.get('http://i874156.iris.fhict.nl/WEB2/employees')
    };
}]);