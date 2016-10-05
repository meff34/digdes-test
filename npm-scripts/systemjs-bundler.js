"use strict";

const Builder = require('systemjs-builder');

new Builder('./', './systemjs.config.js')
  .buildStatic('app/main.js', 'app/app.js', {minify: true})
  .then(() => console.log('SystemJs build complete'))
  .catch((err) => {
    console.error('SystemJs build error');
    console.error(err);
  });