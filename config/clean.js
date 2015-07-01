module.exports = {
    dist: {
        files: [{
            dot: true,
            src: [
                '.tmp',
                '<%= appConfig.dist %>/{,*/}*',
                '!<%= appConfig.dist %>/.git{,*/}*'
            ]
        }]
    },
    server: '.tmp'
};
