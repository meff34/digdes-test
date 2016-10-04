"use strict";

let GLP = require('gulp-load-plugins')();
let gulp = require('gulp');
let combiner = require('stream-combiner2').obj;
let chalk = require('chalk');

module.exports = function(opts) {
    return function() {
        return combiner(
            gulp.src(opts.src),
            GLP.if(!opts.isProduction,
                combiner(
                    GLP.changed(opts.dst, {extension: '.js'}),
                    GLP.sourcemaps.init()
                )),
            GLP.debug({title: 'ts files: '}),
            GLP.typescript({
                target: "es6",
                module: "commonjs",
                moduleResolution: "node",
                sourceMap: true,
                emitDecoratorMetadata: true,
                experimentalDecorators: true,
                removeComments: false,
                noImplicitAny: false
            }),
            GLP.if(opts.isProduction,
              combiner(
                GLP.babel({ presets: ['es2015'] }),
                GLP.uglify()
              )
            ),
            GLP.if(!opts.isProduction, GLP.sourcemaps.write('./maps') ),
            gulp.dest(opts.dst)
        ).on('error', GLP.notify.onError(function (err) {
          return {
            title: opts.taskname,
            message: err.message
          };
        }));
    };
};
