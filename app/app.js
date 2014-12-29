(function () {
    'use strict';
    var app = angular.module('app', [
        'ngRoute',
        'listControllers',
        'listDirective'
    ]);

    app.config(['$routeProvider', function ($routeProvider) {
            $routeProvider.
                    when('/list', {
                        templateUrl: 'partials/list.html',
                        controller: 'jListCrtl'
                    }).otherwise({
                redirectTo: '/list'
            });
        }]);

})();