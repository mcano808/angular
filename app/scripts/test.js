'use strict'
var app = angular.module('twitterApp', []);

app.controller('AppControl', function($scope){
    $scope.loadMoreTweets = function(){
        alert('Loading Tweets');
    };
    $scope.deleteTweets = function(){
        alert('Deleting tweets');
    }
});

app.directive('enter', function(){
    return function(scope,element, attrs){
        element.bind('mouseenter', function(){
            console.log("Entered");
            scope.$apply(attrs.enter)
        });
    }
})