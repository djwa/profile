define(['./../module'], function (module) {
    'use strict';

    Controller0.$inject = [
        '$scope'
    ];

    Controller1.$inject = [
        '$scope'
    ];
    Controller2.$inject = [
        '$scope',
        '$location'
    ];

    function Controller0($scope) {
        $scope.ScriptLoaded = true;
    }

    function Controller1($scope) {
        $scope.LogoImgPath = "images/angular-logo.png";
    }

    function Controller2($scope, $location) {
        $scope.isActive = function (route) {
            return route === $location.path();
        };
    }

    module.controller('ScriptLoadedCrtl', Controller0);
    module.controller('PathsCrtl', Controller1);
    module.controller('SiteLocationCrtl', Controller2);
});