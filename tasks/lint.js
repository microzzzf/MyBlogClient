'use strict';

var gulp = require('gulp');
var jshint = require('gulp-jshint');

gulp.task('lint', function () {
  return gulp.src(['**/*.js', '!./public/javascripts/vendor/**/*.js', '!./node_modules/**/*.js'])
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(jshint.reporter('fail'));
});