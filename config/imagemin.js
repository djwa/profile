module.exports = {
    dynamic: {
        options: {
            optimizationLevel: 7,
            cache: false
        },
        files: [
            {
                expand: true,
                cwd: '<%= appConfig.app %>/images/',
                src: ['**/*.{png,jpg,gif,ico}'],
                dest: '<%= appConfig.dist %>/images/'
            }
        ]
    }
};