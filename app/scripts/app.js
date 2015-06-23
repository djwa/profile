define([
    'angular',
    'Cookies',
    'angular-ui-router',
    'angular-animate',
    'angular-sanitize',
    'ui.bootstrap',
    'userapp',
    'userapp-angular',
    //my modules
    './common/index',
    './dashboard/home/index',
    './dashboard/list/index'
], function(ng, cookies){
    'use strict';

    window.Cookies = cookies;

    var dependencies = [
        'app.common',
        'app.home',
        'app.list',
        'ui.router',
        'ngAnimate',
        'ngSanitize',
        'UserApp',
        'ui.bootstrap'
    ];

    return ng.module('app', dependencies)

        .run([
            'user',
            '$rootScope',
            function (user, $rootScope) {
                user.init({appId: '54b5067b4664e'});
                $rootScope.$on('user.login', function () {
                    var token = user.token();
                    localStorage.setItem('UserToken', token);
                });
                //todo: CRUCIAL - finish token verification with userApp
                $rootScope.$on('user.logout', function () {
                    localStorage.removeItem("UserToken");
                });
            }]);

});