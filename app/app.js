(function () {
    'use strict';
    var app = angular.module('app', [
        'ngRoute',
        'listControllers',
        'homeControllers'
    ]);

    app.config(['$routeProvider', function ($routeProvider) {
            $routeProvider
                    .when('/list', {
                        templateUrl: 'partials/list.html',
                        controller: 'jListCrtl'
<<<<<<< HEAD
                    }).
                    otherwise({
                        redirectTo: '/list'
=======
                    })
                    .when('/home', {
                        templateUrl: 'partials/home.html',
                        controller: 'hCrtl'
                    })
                    .when('/error', {
                        templateUrl: 'partials/error.html'
                    })
                    .otherwise({
                        redirectTo: '/error'
>>>>>>> 78041d132df413161872a59238e186b66b81742f
                    });
        }]);

})();