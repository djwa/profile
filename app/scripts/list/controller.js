(function () {
    var list = angular.module('listControllers', ['listDirectives','listService']);
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
    list.controller('List2Crtl', ['$http', '$scope', 'fellaservice', function ($http, $scope, fellaservice) {
            //scope of visibility aspects
            $scope.pageClass = "listPage";
            $scope.gridColumn = 6;
            $scope.oldList = false;
            $scope.newList = true;
            $scope.currentList = 'new-list';
            //scope of data

            //method 1
            $scope.fellas = [];
            fellaservice.getData().success(function (data) {
                $scope.fellas = data;
            });

            $scope.addNew = function (fella) {
                var defaultNull = {
                    name: "",
                    surname: "",
                    company: "",
                    email: "",
                    phone: ""
                }
                fellaservice.postData(fella)
                        .success(function (data) {
//                            $scope.msg = 'Data sent?: ' + JSON.stringify(data);
                            $scope.fellas = data;
                            $scope.AddNewFella.$setPristine();
                            $scope.fella = defaultNull;
                        })
                    .error(function () {
                        console.log(fella);
                        $scope.newList = false;
                        $scope.msg = "Sorry but there was a connection problem. Data has not been injected. :(";
                    });
            };


            $scope.removeFella = function (id) {
                fellaservice.removeData(id)
                        .success(function (data) {
//                            console.log(data);
                            $scope.fellas = data;
                        })
                        .error(function () {
                            $scope.msg = "If you want justice, you've come to the wrong place...";
                        });
            };

        }]);
})();

