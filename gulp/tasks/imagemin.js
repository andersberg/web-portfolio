import { src, dest, lastRun, } from 'gulp';
import config from './../config';
import imageminifier from 'gulp-imagemin';

/**
 * Imagemin
 * https://github.com/sindresorhus/gulp-imagemin
 */
export function imagemin() {
  return src(config.imagemin.src, { since: lastRun(`imagemin`), })
    .pipe(imageminifier())
    .pipe(dest(config.imagemin.dest));
}