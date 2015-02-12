(function () {
    'use strict';
    var app = angular.module('app', [
        //todo: change for ui router
        'ngRoute',
        'listControllers',
        'homeControllers',
        'ngAnimate',
        'UserApp',
        'ui.bootstrap'
    ]);
    app.controller('PathsCrtl', ['$scope', function ($scope) {
            $scope.LogoImgPath = "http://djwa.pl/angular-logo.png";
        }]);
    app.controller('SiteLocationCrtl', ['$scope', '$location', function ($scope, $location) {
            $scope.isActive = function (route) {
                return route === $location.path();
            };
        }]);
    app.config(['$routeProvider', function ($routeProvider) {
            $routeProvider
                // todo: change for ui router
                    .when('/login', {
                        templateUrl: 'views/auth/login.html',
                        login: true
                    })
                    .when('/signup', {
                        templateUrl: 'views/auth/signup.html',
                        public: true
                    })
                    .when('/reset-password', {
                        templateUrl: 'views/auth/resetpassword.html',
                        public: true
                    })
                    .when('/set-password', {
                        templateUrl: 'views/auth/setpassword.html',
                        set_password: true
                    })
                    .when('/verify-email', {
                        templateUrl: 'views/auth/verifyemail.html',
                        verify_email: true
                    })
                    .when('/list', {
                        templateUrl: 'views/list.html',
                        controller: 'List2Crtl'
                    })
                    .when('/dashboard', {
                        templateUrl: 'views/home.html',
                        controller: 'hCrtl'
                    })
                    .when('/error', {
                        templateUrl: 'views/error.html'
                    })
                    .otherwise({
                        redirectTo: '/dashboard'
                    });
        }]);
    app.run(function (user) {
        user.init({appId: '54b5067b4664e'});
    });

})();