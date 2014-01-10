'use strict';

angular.module('angularApp').controller('FormCtrl', function ($scope, peoples) {
    function resetNP (){
        $scope.nP={};
    }
    
    $scope.nP={};
    $scope.allPeople = peoples.getAllPeople();
    
    $scope.getPerson = peoples.getPerson;
      
    $scope.addPerson = function(){
        peoples.addPerson($scope.nP);
        resetNP();
    };
  });
