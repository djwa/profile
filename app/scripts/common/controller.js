define(['./module'], function (module) {
    'use strict';

    Controller1.$inject = [
        '$scope'
    ];
    Controller2.$inject = [
        '$scope',
        '$location'
    ];

    function Controller1($scope) {
        $scope.LogoImgPath = "http://djwa.pl/angular-logo.png";
    }

    function Controller2($scope, $location) {
        $scope.isActive = function (route) {
            return route === $location.path();
        };
    }

    module.controller('PathsCrtl', Controller1);
    module.controller('SiteLocationCrtl', Controller2);
});