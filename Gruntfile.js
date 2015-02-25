'use strict';

module.exports = function (grunt) {

    require('load-grunt-tasks')(grunt);
    require('time-grunt')(grunt);

    var config = {
        appConfig: {
            app: require('./bower.json').appPath || 'app',
            dist: 'dist'
        }
    };
    config = require('load-grunt-configs')(grunt, config);
    grunt.initConfig(config);

    grunt.registerTask('build', [
        'copy:dist'
    ]);

};