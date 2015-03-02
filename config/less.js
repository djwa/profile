module.exports = function(grunt, appConfig) {
    return {
        development: {
            options: {
                compress: true,
                paths: 'app/styles/' //less
            },
            files: {
                'build/styles/styles.min.css': 'app/styles/main.less'
            }
        }
    }
};