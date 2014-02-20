/*
 * grunt-jasmine-node
 * https://github.com/GlobalDomestic/grunt-jasmine-node
 *
 * Copyright (c) 2014 GlobalDomestic
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        'test/*.js'
      ],
      options: {
        jshintrc: '.jshintrc'
      },
    },

    // Configuration to be run (and then tested).
    jasmine_node: {
      spec: {
        files: {
          src: ['test/*spec.js']
        }
      },
      test: {
        files: {
          src: ['test/*test.js']
        }
      }
    },

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');

  // Whenever the "test" task is run, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test:spec', ['jasmine_node:spec']);
  grunt.registerTask('test:test', ['jasmine_node:test']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test:spec']);

};
