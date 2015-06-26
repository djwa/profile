module.exports = {
    bower: {
        files: ['bower.json'],
        tasks: ['bowerInstall']
    },
    app: {
        options: {
            livereload: '<%= connect.options.livereload %>'
        },
        files: [
            '<%= appConfig.app %>/styles/**/*.less',
            '<%= appConfig.app %>/scripts/*.js',
            '<%= appConfig.app %>/views/**/*.html',
            '<%= appConfig.app %>/index.html'
        ],
        tasks: ['build']
    }
};
