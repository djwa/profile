module.exports = function (grunt, appConfig) {
    return {
        compile: {
            options: {
                uglify2: {
                    mangle: false
                },
                baseUrl: '<%= appConfig.app %>/scripts',
                mainConfigFile: '<%= appConfig.app %>/scripts/entrypoint.js',
                optimize: 'uglify2',
                generateSourceMaps: true,
                name: 'entrypoint',
                out: '<%= appConfig.dist %>/scripts/main.min.js',
                preserveLicenseComments: false,
                findNestedDependencies: true
            }
        }
    }
};