'use strict';
//Define the module for the app
angular.module('angularApp', [])

  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
        .when('/directives',{
            templateUrl:'views/testDirectives.html',
            controller:'CtrlDirectives'
        })
        .when('/filters',{
            templateUrl:'views/testFilters.html',
            controller:'CtrlFilters'
        })
        .when("/showhide",{
              templateUrl: "views/showHide.html",
              controller:"CtrlShowHide"
        })
    .when("/form",{
              templateUrl: "views/form.html",
              controller:"FormCtrl"
        })
    .when("/display",{
              templateUrl: "views/display.html",
              controller:"DisplayCtrl"
        })
      .otherwise({
        redirectTo: '/'
      });
  });
