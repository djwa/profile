(function () {
    'use strict';
    var app = angular.module('app', [
        'ui.router',
        'listControllers',
        'homeControllers',
        'ngAnimate',
        'UserApp',
        'ui.bootstrap',
        'ngStorage'
    ]);
    app.controller('PathsCrtl', ['$scope', function ($scope) {
            $scope.LogoImgPath = "http://djwa.pl/angular-logo.png";
        }]);
    app.controller('SiteLocationCrtl', ['$scope', '$location', function ($scope, $location) {
            $scope.isActive = function (route) {
                return route === $location.path();
            };
        }]);
    app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/dashboard');
        $stateProvider
            .state('login', {
                url:'/login',
                templateUrl: 'views/auth/login.html',
                data: {
                    login: true
                }
            })
            .state('signup', {
                url:'/signup',
                templateUrl: 'views/auth/signup.html',
                data: {
                    public: true
                }
            })
            .state('reset-password', {
                url:'/reset-password',
                templateUrl: 'views/auth/resetpassword.html',
                data: {
                    public: true
                }
            })
            .state('set-password', {
                url:'/set-password',
                templateUrl: 'views/auth/setpassword.html',
                set_password: true
            })
            .state('verify-email', {
                url:'/verify-email',
                templateUrl: 'views/auth/verifyemail.html',
                verify_email: true
            })
            .state('list', {
                url:'/list',
                templateUrl: 'views/list.html',
                controller: 'List2Crtl'
            })
            .state('dashboard', {
                url: '/dashboard',
                templateUrl: 'views/home.html',
                controller: 'hCrtl'
            })
            .state('error', {
                url: '/error',
                templateUrl: 'views/error.html'
            });
    }]);
    app.run(function (user, $rootScope) {
        user.init({appId: '54b5067b4664e'});
        $rootScope.$on('user.login', function () {
            var token = user.token();
            localStorage.setItem('UserToken', token);
        });
        //todo:https://github.com/gsklee/ngStorage
        $rootScope.$on('user.logout', function () {
            localStorage.removeItem("UserToken");
        });
    });
    console.log(localStorage.getItem('UserToken'));
})();