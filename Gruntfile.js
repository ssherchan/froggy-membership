
module.exports = function(grunt) {

	grunt.initConfig({
		jshint: {
			files : ['Gruntfile.js', 'lib/**/*js', 'models/**/*.js']
		},
		watch : {
			files : ['Gruntfile.js', 'lib/**/*js', 'models/**/*.js']
		}
	});

	grunt.loadNpmTasks("grunt-contrib-jshint");
	grunt.loadNpmTasks("grunt-contrib-watch");

	grunt.registerTask('default', ['jshint', 'watch']);
};