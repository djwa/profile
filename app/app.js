(function () {
    'use strict';
    var app = angular.module('app', []);
    app.factory('Data', function () {
        return {message: 'I made it works!'};
    });

    app.filter('reverse', function (Data) {
        return function (text) {
            return text.split("").reverse().join("") + " " + Data.message;
        };
    });

    app.controller('ProfilePage1', ['$scope', 'Data', function ($scope, Data) {
            $scope.data = Data;
        }]);
    app.controller('ProfilePage2', ['$scope', 'Data', function ($scope, Data) {
            $scope.data = Data;
        }]);
})();