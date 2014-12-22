(function () {
    'use strict';
    var app = angular.module('app', []);
    app.factory('Data', function () {
        return {message: 'I made it works!'};
    });
    app.controller('ProfilePage1', ['$scope', 'Data', function ($scope, Data) {
            $scope.data = Data;
        }]);
    app.controller('ProfilePage2', ['$scope', 'Data', function ($scope, Data) {
            $scope.data = Data;

            $scope.reversedMessage = function (message) {
                return message.split("").reverse().join("");
            };
        }]);
})();