const gulp = require('gulp');
const webpack = require('webpack-stream');

gulp.task('webpack', function () {
  return gulp.src('src/index.js')
    .pipe(webpack(require('./webpack.config.js')))
    .pipe(gulp.dest('dist/'));
});

gulp.task('copy-static', function() {
  return gulp.src('src/static/**/*')
    .pipe(gulp.dest('dist/static'));
});

gulp.task('watch', function() {
  gulp.watch('src/**/*', gulp.series('default'));
});

gulp.task('copy-styles', function () {
  return gulp.src('src/*.css').pipe(gulp.dest('dist'));
});

gulp.task('default', gulp.series('webpack', 'copy-static', 'copy-styles', 'watch'));
