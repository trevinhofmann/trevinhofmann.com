'use strict';

module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-contrib-stylus');

    return {
        compile: {
            options: {
                'include css': true,
                compress: true
            },
            files: {
                '.dist/public/app.css': 'src/public/css/app.styl'
            }
        }
    };

};
