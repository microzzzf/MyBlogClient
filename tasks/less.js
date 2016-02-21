'use strict';

var gulp = require('gulp');
var less = require('gulp-less');

gulp.task('less', function () {
  gulp.src('public/stylesheets/less/*.less')
    .pipe(less())
    .pipe(gulp.dest('public/stylesheets/css'));
});