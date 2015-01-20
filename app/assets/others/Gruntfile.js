'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);
  //require('jit-grunt')(grunt);

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  // Configurable paths for the application
  var config = {
    appConfig: {
      app: require('./bower.json').appPath || 'app',
      dist: 'dist',
      server: '.tmp'
    },
    buildMeta: {
      appVersion: grunt.file.readJSON("package.json").version,
      environment: grunt.option('env') || 'dev',
      releaseTag: grunt.option('release-tag') || grunt.option('release') || 'DEV',
      buildNumber: grunt.option('build') || 'DEV'
    }
  };
  // Define the configuration for all the tasks
  config = require('load-grunt-configs')(grunt, config);
  grunt.initConfig(config);

  grunt.registerTask('prepare-graphics', [
    'responsive_images:icons',
    'responsive_images:logos',
    'responsive_images:trackIcons',
    'sprite:icons22',
    'sprite:icons44',
    'sprite:trackIcons'
  ]);

  grunt.registerTask('serve', 'Compile then start a connect web server', function (target) {
    if (target === 'dist') {
      return grunt.task.run(['build', 'connect:dist:keepalive']);
    }

    grunt.task.run([
      //'clean:server',
      'concurrent:server',
      'autoprefixer',
      'connect:livereload',
      'requirejs',
      'prepare-graphics',
      'less:server',
      'copy:server',
      //'processhtml',
      'watch'
    ]);
  });

  grunt.registerTask('gettext-extract', ['nggettext_extract:pot']);

  grunt.registerTask('test', [
    'clean:server',
    'concurrent:test',
    'autoprefixer',
    'connect:test',
    'karma'
  ]);

  grunt.registerTask('build', [
    'clean:dist',
    'concurrent:dist',
    'autoprefixer',
    'prepare-graphics',
    //'concat',
    'requirejs',
    'copy:dist',
    'less:dist',
    'processhtml',

    //'filerev',
    'htmlmin'
  ]);

  grunt.registerTask('default', [
    'newer:jshint',
    'test',
    'build'
  ]);
};
