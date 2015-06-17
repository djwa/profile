require.config({
//    baseUrl: './', // ??
    paths: {
        'domReady': '../../bower_components/requirejs-domready/domReady',
        'angular': '../../bower_components/angular/angular',
        'Cookies': '../../bower_components/cookies-js/dist/cookies',
        'angular-ui-router': '../../bower_components/angular-ui-router/release/angular-ui-router',
        'angular-animate': '../../bower_components/angular-animate/angular-animate',
        'angular-sanitize': '../../bower_components/angular-sanitize/angular-sanitize',
        'ui.bootstrap': '../../bower_components/angular-bootstrap/ui-bootstrap',
        'userapp': '../../bower_components/userapp/userapp.client',
        'userapp-angular': '../../bower_components/userapp-angular/angularjs.userapp',
    },
    shim: {
        'angular': {
            exports: 'angular'
        },
        'Cookies': {
            exports: 'Cookies'
        },
        'angular-ui-router': {
            deps: ['angular']
        },
        'angular-animate': {
            deps: ['angular']
        },
        'angular-sanitize': {
            deps: ['angular']
        },
        'ui.bootstrap': {
            deps: ['angular']
        },
        'userapp': {
            exports: 'userapp'
        },
        'userapp-angular': {
            deps: ['angular', 'userapp', 'Cookies']
        }
    }
});

require(['./bootstrap'], function () {
});