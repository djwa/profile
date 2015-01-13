(function () {
    'use strict';
    var app = angular.module('app', [
        'ngRoute',
        'listControllers',
        'homeControllers',
        'UserApp'
    ]);

    app.config(['$routeProvider', function ($routeProvider) {
            $routeProvider
                    .when('/login', {
                        templateUrl: 'partials/login.html',
                        login: true
                    })
                    .when('/signup', {
                        templateUrl: 'partials/signup.html',
                        public: true
                    })
                    .when('/reset-password', {
                        templateUrl: 'partials/resetpassword.html',
                        public: true
                    })
                    .when('/set-password', {
                        templateUrl: 'partials/setpassword.html',
                        set_password: true
                    })
                    .when('/verify-email', {
                        templateUrl: 'partials/verifyemail.html',
                        verify_email: true
                    })
                    .when('/list', {
                        templateUrl: 'partials/list.html',
                        controller: 'jListCrtl'
                    })
                    .when('/home', {
                        templateUrl: 'partials/home.html',
                        controller: 'hCrtl'
                    })
                    .when('/error', {
                        templateUrl: 'partials/error.html'
                    })
                    .otherwise({
                        redirectTo: '/home'
                    });
        }]);
    app.run(function (user) {
        user.init({appId: '54b5067b4664e'});
    });

})();