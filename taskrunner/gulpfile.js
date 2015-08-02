var gulp = require('gulp');

gulp.task('reload', function () {
	console.log('reloading...')
});

gulp.task('watch', function () {
	var watcher = gulp.watch('test.js', ['reload']);
	watcher.on('change', function (event) {
		console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
	});
});

gulp.task('default', ['watch']);
