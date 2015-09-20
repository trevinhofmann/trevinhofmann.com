'use strict';

module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-contrib-copy');

    return {
        target: {
            files: [
                {
                    expand: true,
                    cwd: 'src/',
                    src: [
                        '**/*.png',
                        '**/*.html',
                        '**/*.ico',
                        '**/*.pdf'
                    ],
                    dest: '.dist/'
                }
            ]
        }
    };

};
