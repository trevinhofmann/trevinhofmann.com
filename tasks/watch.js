'use strict';

module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-contrib-watch');

    return {
        browserify: {
            files: ['src/**/*.jsx'],
            tasks: ['browserify']
        },
        babel: {
            files: ['src/**/*.js'],
            tasks: ['babel']
        },
        stylus: {
            files: [
                'src/**/*.styl',
                'src/**/*.css'
            ],
            tasks: ['stylus']
        },
        copy: {
            files: [
                'src/**/*.css',
                'src/**/*.png',
                'src/**/*.html'
            ],
            tasks: ['copy']
        }
    };

};
