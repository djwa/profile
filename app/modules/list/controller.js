(function () {
    var list = angular.module('listControllers', ['listDirectives']);
    //service
//    list.factory('fellaservice', ['$http', function ($http) {
//            //method1
//            var url = 'http://localhost:3000/fellas';
//            return {
//                getData: function () {
//                    return $http({
//                        url: url,
//                        method: 'GET'
//                    });
//                },
//                postData: function () {
//                    return $http({
//                        url: url,
//                        method: 'POST',
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
//            $scope.addNew = function (fella) {
//                fellaservice.postData(fella).success(function (data) {
//                    console.log('Adding the form scope!', data);
//                });
////                var userUpdate = {
////                    name: $scope.fella.name,
////                    surname: $scope.fella.surname,
////                    company: $scope.fella.company,
////                    email: $scope.fella.email,
////                    phone: $scope.fella.phone
////                };
////                data.push(userUpdate);
////                $scope.msg = 'Data sent: ' + JSON.stringify(data);
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

