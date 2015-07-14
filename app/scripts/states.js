define(['./app'], function (app) {
    'use strict';

    return app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/dashboard/home');
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
            .state('dashboard', {
                name: 'dashboard',
                templateUrl: 'views/dashboard/master.html',
                controller: 'dashboardMaster'
            })
            .state('dashboard.home', {
                name: 'dashboard.home',
                parent: 'dashboard',
                url: '/dashboard/home',
                templateUrl: 'views/dashboard/home/home.html',
                controller: 'hCrtl'
            })
            .state('dashboard.list', {
                name: 'dashboard.list',
                parent: 'dashboard',
                url: '/dashboard/list',
                templateUrl: 'views/dashboard/list/list.html',
                controller: 'List2Crtl'
            })
            .state('error', {
                url: '/error',
                templateUrl: 'views/error.html'
            });
    }])

});
