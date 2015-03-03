module.exports = function (grunt, config) {
    return {
        options: {
            port: 7000,
            hostname: '0.0.0.0',
            livereload: 35721
        },
        dist: {
            options: {
                open: false,
                base: '<%= appConfig.dist %>'
            }
        }
    }
};