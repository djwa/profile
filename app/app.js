(function () {
    var app = angular.module('app', ['']);
    app.factory('Data', function () {
        return {message: 'my name is dupa, lord dupa'};
    });
    app.controller('ProfilePage1', [function ($scope, Data) {
            $scope.data = Data;
        }]);
    app.controller('ProfilePage2', [function ($scope, Data) {
            $scope.data = Data;
        }]);
})();