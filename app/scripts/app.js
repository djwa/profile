define([
    'angular',
    'angular-cookies',
    'angular-ui-router',
    'angular-animate',
    'ui.bootstrap',
    'userapp',
    'userapp-angular',
    //my modules
    './common/index',
    './home/index',
    './list/index'
], function(ng){
    'use strict';

    var dependencies = [
        'app.common',
        'app.home',
        'app.list',
        'ngCookies',
        'ui.router',
        'ngAnimate',
        'UserApp',
        'ui.bootstrap'
    ];

    return ng.module('app', dependencies)

    .run(function (user, $rootScope) {
        user.init({appId: '54b5067b4664e'});
        $rootScope.$on('user.login', function () {
            var token = user.token();
            localStorage.setItem('UserToken', token);
        });
        //todo: CRUCIAL - finish token verification with userApp
        $rootScope.$on('user.logout', function () {
            localStorage.removeItem("UserToken");
        });
    });

});