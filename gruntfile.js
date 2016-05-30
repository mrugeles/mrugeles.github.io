module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
        options: {
          separator: ';',
        },
        dist: {
          src: [
            'bower_components/angular/angular.min.js',
            'bower_components/angular-route/angular-route.min.js',
            'bower_components/angular-sanitize/angular-sanitize.min.js',
            'bower_components/showdown/compressed/Showdown.min.js',
            'bower_components/angular-markdown-directive/markdown.js',
            'bower_components/jquery/dist/jquery.min.js',
            'bower_components/bootstrap/dist/js/bootstrap.min.js'],
          dest: 'js/build.js',
        },
      }
  });

  // Default task(s).
  grunt.registerTask('default', ['concat']);

};