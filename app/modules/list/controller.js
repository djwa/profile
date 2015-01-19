(function () {
    var list = angular.module('listControllers', ['listDirectives']);
    list.controller('jListCrtl', ['$http', '$scope', function ($http, $scope) {
            $http.get('data/fellas.json').success(function (data) {
                $scope.fellas = data;
                $scope.pageClass = "listPage";
                $scope.gridColumn = 12;
                $scope.oldList = true;
                $scope.newList = false;
            });
        }]);
    list.controller('jList2Crtl', ['$scope', '$http', function ($scope, $http) {
            $http.get('data/data-test.json').success(function (data) {
                $scope.fellas = data;
                $scope.pageClass = "listPage";
                $scope.gridColumn = 6;
                $scope.oldList = false;
                $scope.newList = true;
            });
        }]);
})();