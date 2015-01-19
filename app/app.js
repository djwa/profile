(function () {
    'use strict';
    var app = angular.module('app', [
        'ngRoute',
        'listControllers',
        'homeControllers',
        'ngAnimate',
        'UserApp',
        'ui.bootstrap'
    ]);
    app.controller('pathsCrtl', ['$scope', function ($scope) {
            $scope.LogoImgPath = "http://djwa.pl/angular-logo.png";
        }]);
    app.controller('siteLocationCrtl', ['$scope', '$location', function ($scope, $location) {
            $scope.isActive = function (route) {
                return route === $location.path();
            };
        }]);
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
                        controller: 'jList2Crtl'
                    })
                    .when('/dashboard', {
                        templateUrl: 'partials/home.html',
                        controller: 'hCrtl'
                    })
                    .when('/error', {
                        templateUrl: 'partials/error.html'
                    })
                    .otherwise({
                        redirectTo: '/dashboard'
                    });
        }]);
    app.run(function (user) {
        user.init({appId: '54b5067b4664e'});
    });

})();