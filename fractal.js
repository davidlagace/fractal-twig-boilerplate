'use strict';

/*
* Require the path module
*/
const path = require('path');
const consolidate = require('@frctl/consolidate');
const twigAdapter = consolidate('twig');
const mandelbrot = require('@frctl/mandelbrot');

/*
 * Require the Fractal module
 */
const fractal = module.exports = require('@frctl/fractal').create();

/*
 * Give your project a title.
 */
fractal.set('project.title', 'Fractal + Twig + sass');

/*
 * Tell Fractal where to look for components.
 */
fractal.components.engine(twigAdapter);
fractal.components.set('ext', '.twig');

fractal.components.set('path', path.join(__dirname, 'components'));

fractal.components.set('layout', path.join(__dirname, 'layout/layout.html'));


/*
 * Tell Fractal where to look for documentation pages.
 */
fractal.docs.set('path', path.join(__dirname, 'docs'));

const yellowJSON = mandelbrot({
    skin: 'yellow',
    format: 'json'
});

fractal.web.theme(yellowJSON);

fractal.components.set('default.preview', '@preview');


/*
 * Tell the Fractal web preview plugin where to look for static assets.
 */
fractal.web.set('static.path', path.join(__dirname, 'public'));

fractal.web.set('builder.dest', __dirname + '/build');

const builder = fractal.web.builder();

builder.build().then(function(){
      console.log(`Fractal static HTML build complete!`);
});
