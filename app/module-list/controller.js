var listControllers = angular.module('listControllers', []);
listControllers.controller('jListCrtl', ['$http', '$scope', function ($http, $scope) {
        $http.get('data/fellas.json').success(function (data) {
            $scope.fellas = data;
        });
    }]);