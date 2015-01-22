(function () {
    var list = angular.module('listControllers', ['listDirectives']);
//            list.factory('FellaService',['$http']);
    list.controller('ListCrtl', ['$http', '$scope', function ($http, $scope) {
            $scope.pageClass = "listPage";
            $scope.gridColumn = 12;
            $scope.oldList = true;
            $scope.newList = false;
            $scope.currentList = 'old-list';
            $http.get('data/fellas.json').success(function (data) {
                $scope.fellas = data;
            });
        }]);
    list.controller('List2Crtl', ['$http', '$scope', function ($http, $scope) {
            //scope of visibility aspects
            $scope.pageClass = "listPage";
            $scope.gridColumn = 6;
            $scope.oldList = false;
            $scope.newList = true;
            $scope.currentList = 'new-list';
            //scope of data
            $http.get('data/data-test.json').success(function (data) {
                $scope.fellas = data;
            });

            $scope.addNew = function () {
                console.log('Adding the form scope!');

                var userUpdate = {
                    name: $scope.fella.name,
                    surname: $scope.fella.surname,
                    company: $scope.fella.company,
                    email: $scope.fella.email,
                    phone: $scope.fella.phone
                };

                $.scope.all.push(userUpdate);
                $http.post('all', userUpdate);

            };

        }]);
})();