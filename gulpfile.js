'use strict';

const gulp = require('gulp');
const del = require('del');
const path = require('path');

const helper = require('./gulp-modules/_helper');

gulp.task('build', [
  'assets',
  'typescript',
  'sass'
]);

gulp.task('build:deep', [
  'clean',
  'assets',
  'typescript',
  'sass'
]);

gulp.task('develop', [
  'watch',
  'server'
]);

gulp.task('watch', () => {
  gulp.watch(
    'source/**/*.{html,json,js}',
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
  helper.deleteListener(
    'source/**/*.{html,json}',
    'app/**/*.{html,json}'
  );
  helper.deleteListener(
    'source/**/*.sass',
    'app/**/*.sass'
  );
});

helper.lazyTask('clean', './clean', ['app/']);

helper.lazyTask('server', './server');

helper.lazyTask('assets', './copy', {
  src: 'source/**/*.{html,json,js}',
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
