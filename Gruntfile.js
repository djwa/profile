'use strict';

module.exports = function (grunt) {

    require('load-grunt-tasks')(grunt);
    require('time-grunt')(grunt);

//    var config = {
//        appConfig: {
//            app: require('./bower.json').appPath || 'app',
//            dist: 'dist'
//        }
//    };
//    config = require('load-grunt-configs')(grunt, config);
//    grunt.initConfig(config);


//https://www.youtube.com/watch?v=gIbfDxF69c8
//https://www.youtube.com/watch?v=Jgm4dV8-Xv0

    grunt.initConfig({

    });


    grunt.registerTask('build', [
        'copy:dist'
    ]);

};