module.exports = function (grunt, config) {
    return {
        options: {
            port: 7000,
            hostname: '0.0.0.0',
            livereload: 35721
        },
        livereload: {
            options: {
                open: false,
                middleware: function (connect) {
                    return [
                        connect.static('.tmp'),
                        connect().use(
                            '/bower_components',
                            connect.static('./bower_components')
                        ),
                        connect().use(
                            '/vendor',
                            connect.static(config.appConfig.dist + '/vendor')
                        ),
                        connect.static(config.appConfig.app)
                    ];
                }
            }
        },
        dist: {
            options: {
                open: false,
                port: 7000,
                livereload: true,
                base: '<%= appConfig.dist %>/'
            }
        }
    }
};