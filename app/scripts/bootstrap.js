define([
    'require',
    'angular',
    'app',
    'states'
], function (require, ng) {

    'use strict';

    require(['domReady!'], function (document) {
        ng.bootstrap(document, ['app']);
    });

});









