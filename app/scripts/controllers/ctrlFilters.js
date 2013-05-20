'use strict';

angular.module('angularApp')
  .controller('CtrlFilters', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
        $scope.people= [{
            first:"Mike",
            last:"Cano",
            born:"Mexic City"
        },{
            first:"Kim",
            last:"Cano",
            born:"Honolulu"
        },{
            first:"Gabriel",
            last:"Cano",
            born:"Honolulu"
        },{
            first:"Jose",
            last:"Cano",
            born:"San Luis"
        }]
  });
