'use strict';

var gulp = require('gulp');
var jade = require('gulp-jade');

gulp.task('render', function () {
  gulp.src('public/javascripts/app/modules/**/*.jade')
    .pipe(jade())
    .pipe(gulp.dest('public/javascripts/app/modules'));
});