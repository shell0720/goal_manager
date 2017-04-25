module.exports = function(grunt){
  grunt.initConfig({
    pkg:grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {

        expand: true,
        cwd: 'client/scripts/',
        src: '*.js',
        dest: 'server/public/assets/scripts/',
        ext: '.min.js'
      }
    },

    cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'client/styles',
                    src: '*.css',
                    dest: 'server/public/assets/styles/',
                    ext: '.min.css'
                }]
            }
    },


    jshint:{
      files:['client/scripts/*.js', 'server/app.js', 'server/modules/*.js', 'server/models/*.js']
    },
    watch: {
      client:{
        files: ['client/scripts/**/*.js',
                'client/views/**/*.html',
                'client/styles/*.css'
               ],

        tasks: ['jshint','cssmin', 'copy','uglify'],
        options:{
          spawn: false
        }
      },
      server:{
        files:['server/app.js', 'server/modules/*.js', 'server/models/*.js'],
        tasks: ['jshint'],
        options:{
          spawn: false
        }
      }
    },
    copy: {
      jQuery: {
        expand: true,
        cwd: "node_modules/jquery/dist/",
        src: [
          "jquery.min.js",
        ],
        dest: "server/public/vendors/"
      },
      html: {
                expand: true,
                cwd: 'client/views/',
                src: [
                    "index.html",
                    "routes/*.html",
                    "templates/*.html"
                ],
                "dest": "server/public/assets/views/"
            }
        },
      jQuery : {
        expand: true,
        cwd: 'node_modules',
        src: [
           "jquery/*/*/*/*"
         ],
         "dest": "server/public/vendors/"
      },
      bootstrap : {
        expand: true,
        cwd: 'node_modules',
        src: [
           "bootstrap/*/*/*"
         ],
         "dest": "server/public/vendors/"
      },

      angular: {
              expand: true,
              cwd: 'node_modules',
              src: [
                  "angular/*",
                  "angular-route/*"
              ],
              "dest": "server/public/vendors/"
          },


  });
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.registerTask('default', ['jshint','copy','cssmin','uglify']);

}
