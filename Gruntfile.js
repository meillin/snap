module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },

      build: {
        src: 'src/<%= pkg.name %>.js',
        dest: 'build/<%= pkg.name %>.min.js'
      }
    },

    jshint: {
      files: ['Gruntfile.js', 'js/*.js'],
      options: {
        globals: {
          jQuery: true
        }
      }
    },

    watch: {
      // sass: {
      //   files: ['assets/sass/**/*.scss'],
      //   tasks: ['compass:dev']
      // },
      /* watch and see if our javascript files change, or new packages are installed */
      js: {
        files: ['<%= jshint.files %>'],
        tasks: ['jshint']
      },
      /* watch our files for change, reload */
      livereload: {
        files: ['*.html', 'css/*.css', 'img/*', 'js/main.js, controller.js}'],
        options: {
          livereload: true
        }
      },
    }

  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['watch']);
};
