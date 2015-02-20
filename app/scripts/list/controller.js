define(['./module'], function(module){
    'use strict';

    Controller.$inject = [
        '$scope',
        'fellaservice'
    ];

    function Controller($scope, fellaservice)  {
        //scope of visibility aspects
        $scope.pageClass = "listPage";
        $scope.gridColumn = 6;
        $scope.currentList = 'new-list';

        //scope of data
        $scope.fellas = [];
        fellaservice.getData().success(function (data) {
            $scope.fellas = data;
        });

        $scope.addNew = function (fella) {
            var resetFormInputs = {
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
                    $scope.fella = resetFormInputs;
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
    }

   module.controller('List2Crtl', Controller);
});
