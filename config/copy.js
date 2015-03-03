module.exports = {
//    task1: {
//        src: 'app/index.html',
//        dest: 'build/index.html'
//    }
    dist: {
        files: [
            {
                expand: true,
                cwd: '<%= appConfig.app %>',
                dest: '<%= appConfig.dist %>',
                src: [
                    'index.html',
                    'images/*',
                    'views/**/*.html'
                ]
            },
            {
                expand: true,
                cwd: 'bower_components',
                src: 'requirejs/*.js',
                dest: '<%= appConfig.dist %>/vendor/'
            }
        ]}
};