'use strict';

var gulp = require('gulp');
var jade = require('gulp-jade');

gulp.task('render', function () {
  return gulp.src('app/views/templates/*.jade')
    .pipe(jade())
    .pipe(gulp.dest('app/views/rendered_templates'));
});