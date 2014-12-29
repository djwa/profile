(function () {
    'use strict';
    var app = angular.module('app', []);

    app.controller('jListCrtl', ['$http', '$scope', function ($http, $scope) {
            $http.get('data/fellas.json').success(function(data){
                $scope.fellas = data;
            });
        }]);

})();