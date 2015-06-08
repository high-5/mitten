var gulp = require('gulp');
var myth = require('gulp-myth');

gulp.task('styles', function () {
  return gulp.src('src/css/main.css')
    .pipe(myth({sourcemap: true, browsers: '> 5%'}))
    .pipe(gulp.dest('./html/css'));
});

gulp.task('build', function () {
  return gulp.src('src/css/main.css')
    .pipe(myth({browsers: '> 5%'}))
    .pipe(gulp.dest('./html/css'));
});

gulp.task('watch', function() {
  gulp.watch('src/css/*.css', ['styles'])
});

gulp.task('default', ['styles', 'watch']);