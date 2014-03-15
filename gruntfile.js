module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less:{
            production: {
                options: {
                  cleancss: false
                },
                files: {
                  "css/style.css": "less/style.less"
                },
            }

        },

        watch: {
            css: {
                files: ['less/*.less'],
                tasks: ['less'],
                options: {
                    spawn: false,
                },
            }
        },

    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');

    grunt.registerTask('default', ['less','watch']);

};