(function () {
    var list = angular.module('listControllers', ['listDirectives']);
    //service
//    list.factory('fellaservice', ['$http', function ($http) {
//            //method1
//            var url = 'http://localhost:3000/fellas';
//            return {
//                getData: function () {
//                    return $http({
//                        method: 'GET',
//                        url: url
//                    });
//                },
//                postData: function () {
//                    return $http({
//                        method: 'POST',
//                        url: url,
//                        data: 'fella'
//                    });
//                },
//                removeData: function () {
//                    return $http({
//                        method: 'DELETE',
//                        url: url + id,
//                        data: 'fella'
//                    });
//                }
//            };
//        }]);
    //controllers
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
    list.controller('List2Crtl', ['$http', '$scope', function ($http, $scope) { //, fellaservice
            //scope of visibility aspects
            $scope.pageClass = "listPage";
            $scope.gridColumn = 6;
            $scope.oldList = false;
            $scope.newList = true;
            $scope.currentList = 'new-list';
            //scope of data

            //method 1
//            $scope.fellas = [];
//            fellaservice.getData().success(function (data) {
//                $scope.fellas = data;
//            });
//
//            $scope.addNew = function (fella) {
//                fellaservice.postData()
//                        .success(function (data) {
////                            console.log(data);
////                            $scope.msg = 'Data sent?: ' + JSON.stringify(data);
//                            $scope.fellas = data;
//                        })
//                        .error(function () {
//                            $scope.newList = false;
//                            $scope.msg = "Sorry but there was a connection problem. Data has not been injected. :(";
//                        });
//            };
//
//
//            $scope.removeFella = function (id) {
//                fellaservice.removeData()
//                        .success(function (data) {
////                            console.log(data);
//                            $scope.fellas = data;
//                        })
//                        .error(function () {
//                            $scope.msg = "If you want justice, you've come to the wrong place...";
//                        });
//            };



            $http.get('http://localhost:3000/fellas')
                    .success(function (data) {
                        $scope.fellas = data;
                    });


            $scope.addNew = function (fella) {
                $http.post('http://localhost:3000/fellas', fella)
                        .success(function (data) {
//                            console.log(data);
//                            $scope.msg = 'Data sent?: ' + JSON.stringify(data);
                            $scope.fellas = data;
                        })
                        .error(function () {
                            $scope.newList = false;
                            $scope.msg = "Sorry but there was a connection problem. Data has not been injected. :(";
                        });
            };

            $scope.removeFella = function (id) {
                $http.delete('http://localhost:3000/fellas/' + id)
                        .success(function (data) {
//                            console.log(data);
                            $scope.fellas = data;
                        })
                        .error(function () {
                            $scope.msg = "If you want justice, you've come to the wrong place...";
                        });
            };




//method 0
//            $http.get('data/data-test.json').success(function (data) {
//                $scope.fellas = data;
//                $scope.addNew = function () {
//                    console.log('Adding the form scope!');
//
//                    var userUpdate = {
//                        name: $scope.fella.name,
//                        surname: $scope.fella.surname,
//                        company: $scope.fella.company,
//                        email: $scope.fella.email,
//                        phone: $scope.fella.phone
//                    };
//
//                    data.push(userUpdate);
//                    $scope.msg = 'Data sent: ' + JSON.stringify(data);
//                };
//            }).error(function () {
//                $scope.newList = false;
//                $scope.msg = "Sorry but there was a connection problem. Data has not been injected. :(";
//            });
        }]);
})();

