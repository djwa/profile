define(['./../module'], function (module) {
    'use strict';
    Controller.$inject = [
        '$scope',
        '$location'
    ];
    function Controller($scope, $location) {
        $scope.pageClass = "dashboard-master";
        $scope.isActive = function (route) {
            return route === $location.path();
        };
    }
    module.controller('dashboardMaster', Controller);
});