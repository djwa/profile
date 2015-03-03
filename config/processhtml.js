module.exports = {
    compile: {
        files: {
            '<%= appConfig.dist %>/index.html': ['<%= appConfig.app %>/index.html']
        },
        data: {
            something: true
        }
    }
};
