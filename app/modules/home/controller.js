var home = angular.module('homeControllers', []);
home.controller('hCrtl', ['$scope', function ($scope) {
        $scope.message = "I am the home CONTROLLER!";
    }]);