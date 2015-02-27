'use strict';

module.exports = function (grunt) {

    require('load-grunt-tasks')(grunt);
    require('time-grunt')(grunt);

    var config = {
        less: {
            development: {
                options: {
                    paths: 'app/styles/' //less
                },
                files: {
                    'build/styles/styles.css' : 'app/styles/main.less'
                }
            }
        },
        useminPrepare: {
            html: 'app/index.html',
            options: {
                dest: 'build'
            }
        },
        usemin: {
            html: ['build/index.html']
        },
        copy: {
            task1: {
                src: 'app/index.html',
                dest: 'build/index.html'
            }
        }
    };
    //https://www.youtube.com/watch?v=gs7HB9gjfCs
//    config = require('load-grunt-configs')(grunt, config);
    grunt.initConfig(config);


    grunt.registerTask('build', [
        'copy:task1',
        'less:development',
        'useminPrepare',
        'concat',
        'cssmin',
        'usemin'
    ]);

};