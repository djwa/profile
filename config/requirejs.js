module.exports = function (grunt, appConfig) {
    return {
        compile: {
            options: {
                uglify: {},
                baseUrl: '<%= appConfig.app %>/scripts',
                mainConfigFile: '<%= appConfig.app %>/scripts/entrypoint.js',
                name: 'entrypoint',
                out: '<%= appConfig.dist %>/scripts/main.min.js'
            }
        }
    }
};