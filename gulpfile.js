'use strict';

const gulp = require('gulp');
const del = require('del');
const path = require('path');

const helper = require('./gulp-modules/_helper');

gulp.task('build', [
  'assets',
  'typescript',
  'sass',
  'sass:static'
]);

gulp.task('build:deep', [
  'clean',
  'assets',
  'typescript',
  'sass',
  'sass:static'
]);

gulp.task('develop', [
  'watch',
  'dev:server'
]);

gulp.task('watch', () => {
  gulp.watch(
    'source/**/*.html',
    ['assets']
  );
  gulp.watch(
    'source/**/*.ts',
    ['typescript']
  );
  gulp.watch(
    'source/**/*.sass',
    ['sass']
  );
  gulp.watch(
    'static/*.sass',
    ['sass:static']
  );
  helper.deleteListener(
    'source/**/*.html',
    'app/**/*.html'
  );
  helper.deleteListener(
    'source/**/*.sass',
    'app/**/*.sass'
  );
});

helper.lazyTask('clean', './clean', {
  src: ['app/', 'static/maps', 'static/core.css']
});

helper.lazyTask('dev:server', './server');

helper.lazyTask('assets', './copy', {
  src: 'source/**/*.html',
  dst: 'app/'
});

helper.lazyTask('typescript', './typescript', {
  src: 'source/**/*.ts',
  dst: 'app/'
});

helper.lazyTask('sass', './sass', {
  src: 'source/**/*.sass',
  dst: 'app/'
});

helper.lazyTask('sass:static', './sass', {
  src: 'static/*.sass',
  dst: 'static/'
});
