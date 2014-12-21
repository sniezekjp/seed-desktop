module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      build: {
        options: {
          livereload: 1337
        },
        files: ['src/**/*', 'index.html', 'app.js', 'Gruntfile.js']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', [
    'watch',
  ]);
};