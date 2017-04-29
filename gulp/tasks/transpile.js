import { watch, src, dest, series, lastRun, } from 'gulp';
import { DEBUG, } from './../env';
import babel from 'gulp-babel';
import autoprefixer from 'autoprefixer';
import customMedia from 'postcss-custom-media';
import polymerPostcss from 'gulp-polymer-postcss';
import config from './../config';
import { PolymerProject, } from 'polymer-build';
import gulpif from 'gulp-if';
import notify from 'gulp-notify';

const polymerProject = new PolymerProject({});

/**
 * Transpile
 * https://github.com/postcss/autoprefixer
 * https://github.com/postcss/postcss-custom-media
 * https://github.com/Polymer/polymer-build
 * https://github.com/babel/gulp-babel
 * https://github.com/hparra/gulp-rename
 */
export function transpile() {
  return src(config.transpile.src, { since: lastRun(`transpile`), })
      .pipe(polymerPostcss([
        autoprefixer(config.browsers),
        customMedia(config.transpile.customMedia),
      ]))
      .pipe(polymerProject.splitHtml())
      .pipe(gulpif(/\.js$/, babel({
        presets: {
          'minified': !DEBUG,
          'comments': DEBUG,
          'presets': [
            [`env`, {
              'targets': {
                'browsers': config.browsers,
              },
            },
            ],
          ],
        },
      })))
      // gulpif(/\.html$/, htmlMinifier()),
      .pipe(polymerProject.rejoinHtml())
      .pipe(dest(config.transpile.dest));
}

/**
 * Transpile watch
 */
export function transpileWatch(next) {
  let watcher = watch(config.transpile.src, series(transpile));
  watcher.on(`add`, path => console.log(`${path} added.`));
  watcher.on(`change`, path => console.log(`${path} changed.`));
  watcher.on(`unlink`, path => console.log(`${path} removed.`));
  watcher.on(`error`, notify.onError({
    title: `Transpile: <%= error.name %>`,
    message: `<%= error.message %>`,
  }));
  next();
}