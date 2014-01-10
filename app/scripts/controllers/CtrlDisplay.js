'use strict';

angular.module('angularApp').controller('DisplayCtrl', function ($scope, peoples) {
    $scope.Fpeople = [{
        first: 'Mike',
        last: 'Cano',
        age:35
    },{
        first: 'Kim',
        last: 'Cano',
        age:42
    },{
        first: 'Gabriel',
        last: 'Cano',
        age:7
    }]
    $scope.people = peoples.getAllPeople();
    
  });
