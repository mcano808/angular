'use strict';

angular.module('angularApp')
  .controller('CtrlShowHide', function ($scope) {
        $scope.menuState = {};
      $scope.menuState.show = false;
    
    $scope.toggleMenu = function (){
    console.log("toggling menu");
        $scope.menuState.show = !$scope.menuState.show;
    }
    $scope.stun = function($event){
        info.log("Stunned", arguments);
    }
    
    $scope.disintigrate = function($event){
        info.warn("Disinigrated", arguments);
    }
    $scope.erase = function (){
        info.warn("erased", arguments);
    }
  });
