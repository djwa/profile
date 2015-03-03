'use strict';

module.exports = function (grunt) {

    require('load-grunt-tasks')(grunt);
    require('time-grunt')(grunt);

    var config = {
        appConfig: {
            app: require('./bower.json').appPath || 'app',
            dist: 'build',
            server: '.tmp'
        }
    };
    //https://www.youtube.com/watch?v=gs7HB9gjfCs for spites etc. blah blah blah
    config = require('load-grunt-configs')(grunt, config);
    grunt.initConfig(config);


    grunt.registerTask('build', [
        'copy:dist',
        'requirejs',
        'less:development',
        'useminPrepare',
        'usemin',
        'processhtml',
    ]);

    grunt.registerTask('serve', [
        'connect:dist'
    ]);

};