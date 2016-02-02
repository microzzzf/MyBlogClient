'use strict';

var gulp = require('gulp');

gulp.task('watch', function () {
  gulp.watch('app/views/templates/*.jade', ['render']);
  gulp.watch('app/styles/less/*.less', ['less']);
});