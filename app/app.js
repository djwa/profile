(function () {
    'use strict';
    var app = angular.module('app', [
        'ngRoute',
        'listControllers'
    ]);

    app.config(['$routeProvider', function ($routeProvider) {
            $routeProvider
                    .when('/list', {
                        templateUrl: 'partials/list.html',
                        controller: 'jListCrtl'
                    })
                    .when('/home', {
                        templateURL: 'partials/home.html'
                    })
                    .when('/error', {
                        templateURL: 'partials/error.html'
                    })
                    .otherwise({
                        redirectTo: '/error'
                    });
        }]);

})();