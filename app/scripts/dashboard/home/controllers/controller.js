define(['./../module'], function(home){
    'use strict';

//    var home = angular.module('homeControllers', []);
    home.controller('hCrtl', ['$scope', function ($scope) {
        $scope.tasks = false;
        $scope.enhancements = false;
        $scope.pageClass = "homePage";
    }]);
});