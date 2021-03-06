"use strict";

var gulp = require('gulp');
var GLP = require('gulp-load-plugins')();

module.exports = function (options) {
  return function () {
    return gulp.src(options.src)
      .pipe(GLP.changed(options.dst))
      .pipe(GLP.plumber({
        errorHandler: function (err) {
          console.log(err);
          this.emit('end');
        }
      }))
      .pipe(gulp.dest(options.dst));
  };
};