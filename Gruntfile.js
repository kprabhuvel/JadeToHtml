module.exports = function(grunt) {
    grunt.initConfig({
        jade: {
            compile: {
              options: {
                pretty: true,
                data: {
                  jobs: grunt.file.readJSON('data.json')
                }
              },
              files: {
                "build/index.html": "app/views/jobs.jade"
              }
            }
        },
        copy: {
            build: {
                cwd: 'app',
                src: [ 'js/*','style/*', '!**/*.jade' ],
                dest: 'build',
                expand: true
            }
        },
        watch: {
            grunt: { files: ['Gruntfile.js'] },
            jade: {
              files: ['app/views/**/*.jade'],
              tasks: ['jade']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jade');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks("grunt-contrib-copy");
     grunt.registerTask('default', 'Convert Jade templates into HTML templates', ['jade', 'copy', 'watch']);
};

