'use strict';

var gulp = require('gulp');

gulp.task('watch', function () {
  gulp.watch('app/views/templates/*.jade', ['render']);
});