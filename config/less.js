module.exports = function(grunt, appConfig) {
    return {
        development: {
            options: {
                compress: true,
                paths: 'app/styles/' //less
            },
            files: {
                '<%= appConfig.dist %>/styles/styles.min.css': '<%= appConfig.app %>/styles/main.less'
            }
        }
    }
};