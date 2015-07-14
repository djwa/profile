define(['angular'], function(ng){
    'use strict';
    return ng.module('app.dashboard', [
        'app.home',
        'app.list'
    ]);
});