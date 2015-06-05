define(['./app'], function (app) {
    'use strict';

    return app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/dashboard');
        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'views/public/index.html',
                data: {
                    login: true
                }
            })
            .state('login', {
                url: '/login',
                templateUrl: 'views/auth/login.html',
                data: {
                    public: true
                }
            })
            .state('signup', {
                url: '/signup',
                templateUrl: 'views/auth/signup.html',
                data: {
                    public: true
                }
            })
            .state('reset-password', {
                url: '/reset-password',
                templateUrl: 'views/auth/resetpassword.html',
                data: {
                    public: true
                }
            })
            .state('set-password', {
                url: '/set-password',
                templateUrl: 'views/auth/setpassword.html',
                set_password: true
            })
            .state('verify-email', {
                url: '/verify-email',
                templateUrl: 'views/auth/verifyemail.html',
                verify_email: true
            })
            .state('list', {
                url: '/list',
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
    }])


});

