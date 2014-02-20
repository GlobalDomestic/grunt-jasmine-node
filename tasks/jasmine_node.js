/*
 * grunt-jasmine-node
 * https://github.com/GlobalDomestic/grunt-jasmine-node
 *
 * Copyright (c) 2014 GlobalDomestic
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('jasmine_node', 'Grunt task for running jasmine-node', function() {
    var jasmine = require('jasmine-node'),
    path = require( 'path' );

    // Tell grunt this task is asynchronous.
    var done = this.async();

    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      specFolders: this.filesSrc.map( function( filePath ) {
        return path.resolve( filePath );
      }),
      isVerbose: false,
      showColors: true,
      teamcity: process.env.TEAMCITY_PROJECT_NAME || false,
      useRequireJs: false,
      regExpSpec: undefined,
      junitreport: {
        report: false,
        savePath : './reports/',
        useDotNotation: true,
        consolidate: true
      },
      includeStackTrace: true,
      growl: false,
      onComplete: function(runner) {
        done( runner.results().failedCount === 0 ? 0 : 1 );
      }
    });

    // Run jasmine-node task
    jasmine.executeSpecsInFolder( options );
  });

};
