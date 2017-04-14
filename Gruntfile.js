module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		uglify: {
			min: {
				src: 'js/build/<%= pkg.name %>.bundle.js',
				dest: 'dist/js/<%= pkg.name %>.min.js'
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.registerTask('default', ['uglify']);
}