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

    grunt.registerTask('update', 'install the backend and frontend dependencies', function () {
        var exec = require('child_process').exec;
        var cb = this.async();
        exec('bower update', null, function (err, stdout, stderr) {
            console.log(stdout);
            cb();
        });
    });

    grunt.registerTask('build', [
        'clean:dist',
        'imagemin',
        'copy:dist',
        'requirejs',
        'less:development',
        'useminPrepare',
        'usemin',
        'processhtml'
    ]);

    grunt.registerTask('serve', [
        //'update',
        'connect:dist',
        'watch'
    ]);

};