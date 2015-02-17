define(['./module'], function(controllers){
    'use strict';

    controllers.controller('PathsCrtl', ['$scope', function ($scope) {
        $scope.LogoImgPath = "http://djwa.pl/angular-logo.png";
    }]);
    controllers.controller('SiteLocationCrtl', ['$scope', '$location', function ($scope, $location) {
        $scope.isActive = function (route) {
            return route === $location.path();
        };
    }]);
});