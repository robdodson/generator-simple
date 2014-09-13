'use strict';

module.exports = function (grunt) {
  // Load all grunt tasks
  require('load-grunt-tasks')(grunt);
  // Show elapsed time at the end
  require('time-grunt')(grunt);

  // Project configuration.
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON('package.json'),

    connect: {
      server: {
        options: {
          hostname: 'localhost',
          port: 9000,
          livereload: true,
           open: true
        }
      }
    },
    jshint: {
      myFiles: ['scripts/**/*.js', 'scripts/**/*.js']
    },
    watch: {
      files: '<%= jshint.myFiles %>',
      tasks: ['jshint'],
      options: {
        livereload: true
      },
      target: {
        files: ['index.html', 'styles/**/*.css', 'scripts/**/*.js']
      }
    }
  });

  //load jshint
   grunt.loadNpmTasks('grunt-contrib-jshint');
  // Default task.
  grunt.registerTask('default', ['jshint', 'connect', 'watch']);
};
