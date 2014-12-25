(function () {
<<<<<<< HEAD
    var app = angular.module('app', ['']);
    app.factory('Data', function () {
        return {message: 'my name is dupa, lord dupa'};
=======
    'use strict';
    var app = angular.module('app', []);
    app.factory('Data', function () {
        return {message: 'I made it works!'};
>>>>>>> a1cc27d364344281efd04b1d81f1ccfad7f114c9
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