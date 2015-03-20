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
// todo: fix the paths problem
//module.exports = function(grunt, appConfig) {
//    return {
//        compile: {
//            options: {
//                uglify2: {
//                    mangle: false
//                },
//                baseUrl: '<%= appConfig.app %>/scripts',
//                mainConfigFile: '<%= appConfig.app %>/scripts/entrypoint.js',
//                optimize: appConfig.env.minimizeJs ? 'uglify2' : 'none',
//                generateSourceMaps: appConfig.env.generateSourceMaps,
//                name: 'entrypoint',
//                out: '<%= appConfig.dist %>/scripts/main.min.js',
//                preserveLicenseComments: false,
//                findNestedDependencies: true,
//                rawText: {
//                    'Env': '<%= env.amdModule %>'
//                }
//            }
//        }
//    }
//};
