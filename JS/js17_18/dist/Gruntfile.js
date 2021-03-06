'use strict';

module.exports = function (grunt) {

   // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  // Automatically load required Grunt tasks

   require('jit-grunt')(grunt, {
    useminPrepare: 'grunt-usemin'
  });

  // Define the configuration for all the tasks
  grunt.initConfig({
          pkg: grunt.file.readJSON('package.json'),

    // Make sure code styles are up to par and there are no obvious mistakes
    jshint: {
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      },
      all: {
        src: [
          'Gruntfile.js',
          'js/{,*/}*.js'
        ]
      }
    },
    copy: {
      dist: {
        src: [ '**','!**/css/**','!**/js/**','!**/node_modules/**','!**/dist/**' ],
        dest: 'dist',
        expand: true
      }
    },
    clean: {
        build:{
            src: [ 'dist/']
        }
    },
    useminPrepare: {
        html: 'index.html',
        options: {
            dest: 'dist'
        }
    },
      // Concat
    concat: {
        options: {
            separator: ';'
        },
        // dist configuration is provided by useminPrepare
        dist: {}
    },
      // Uglify
    uglify: {
        // dist configuration is provided by useminPrepare
        dist: {}
    },
    cssmin: {
        dist: {
          
        }
    },
      // Filerev
    filerev: {
        options: {
            encoding: 'utf8',
            algorithm: 'md5',
            length: 20
        },
        release: {
            // filerev:release hashes(md5) all assets (images, js and css )
            // in dist directory
            files: [{
                src: [
                    'dist/scripts/*.js',
                    'dist/styles/*.css',
                ]
            }]
        }
    },
      // Usemin
      // Replaces all assets with their revved version in html and css files.
      // options.assetDirs contains the directories for finding the assets
      // according to their relative paths
    usemin: {
        html: ['dist/*.html'],
         css: ['dist/styles/*.css'],
        options: {
            assetsDirs: ['dist', 'dist/styles']
        }
    }
  });

   grunt.registerTask('build', [
    'clean',
    'jshint',
    'useminPrepare',
    'concat',
    'cssmin:generated',
    'uglify:generated',
    'copy',
    'filerev',
    'usemin'
  ]);

  grunt.registerTask('default',['build']);

};