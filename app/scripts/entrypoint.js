require.config({
//    baseUrl: './', // ??
    paths: {
        'domReady': '../../bower_components/requirejs-domready/domReady',
        'angular': '../../bower_components/angular/angular',
        'angular-cookies': '../../bower_components/angular-cookies/angular-cookies',
        'angular-ui-router': '../../bower_components/angular-ui-router/release/angular-ui-router',
        'angular-animate': '../../bower_components/angular-animate/angular-animate',
        'ui.bootstrap': '../../bower_components/angular-bootstrap/ui-bootstrap',
        'userapp': '../../bower_components/userapp/userapp.client',
        'userapp-angular': '../../bower_components/userapp-angular/angularjs.userapp'
    },
    shim: {
        'angular': {
            exports: 'angular'
        },
        'angular-cookies': {
            deps: ['angular']
        },
        'angular-ui-router': {
            deps: ['angular']
        },
        'angular-animate': {
            deps: ['angular']
        },
        'ui.bootstrap': {
            deps: ['angular']
        },
        'userapp': {
            exports: 'userapp'
        },
        'userapp-angular': {
            deps: ['angular', 'userapp']
        }
    }
//    deps: ['./bootstrap'] // ??
});

require(['./bootstrap'], function () {
});