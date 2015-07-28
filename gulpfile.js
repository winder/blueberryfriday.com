var gulp = require('gulp');
var jade = require('gulp-jade');
var sass = require('gulp-sass');

gulp.task('templates', function () {

	var data = {};

	gulp.src('./src/templates/index.jade')
	.pipe(jade({ locals: data, pretty: true }))
	.pipe(gulp.dest('./build/'))

});

gulp.task('images', function () {
	gulp.src('./src/images/**/*').pipe(gulp.dest('./build/images/'));
});

gulp.task('sass', function () {
	gulp.src('./src/styles/**/*.sass')
	.pipe(sass().on('error', sass.logError))
	.pipe(gulp.dest('./build/css/'));
});

gulp.task('watch', function () {
  gulp.watch('./src/styles/**/*.sass', ['sass']);
  gulp.watch('./src/images/**/*', ['images']);
  gulp.watch('./src/templates/**/*.jade', ['templates']);
});

gulp.task('default', ['templates', 'images', 'sass']);