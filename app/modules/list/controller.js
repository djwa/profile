(function () {
    var list = angular.module('listControllers', ['listDirectives']);
    list.controller('jListCrtl', ['$http', '$scope', function ($http, $scope) {
            $http.get('data/fellas.json').success(function (data) {
                $scope.fellas = data;
            });
        }]);
})();