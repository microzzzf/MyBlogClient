'use strict';

var gulp = require('gulp');

gulp.task('watch', function () {
  gulp.watch('public/javascripts/app/modules/**/*.jade', ['render']);
  gulp.watch('public/stylesheets/less/*.less', ['less']);
  //gulp.watch(['**/*.js', '!./public/javascripts/vendor/**/*.js', '!./node_modules/**/*.js'], ['lint']);
});