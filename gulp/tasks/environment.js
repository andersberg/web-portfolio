import { watch, src, dest, series, lastRun, } from 'gulp';
import { ENV, } from './../env';
import rename from 'gulp-rename';
import config from './../config';
import notify from 'gulp-notify';

/**
 * Environment
 * https://github.com/hparra/gulp-rename
 */
export function environment() {
  return src(config.environment.src[ENV.toLowerCase()], { since: lastRun(`environment`), })
    .pipe(rename(config.environment.rename))
    .pipe(dest(config.environment.dest));
}

/**
 * Environment watch
 */
export function environmentWatch(next) {
  let watcher = watch(config.environment.src[ENV.toLowerCase()], series(environment));
  watcher.on(`add`, path => console.log(`${path} added.`));
  watcher.on(`change`, path => console.log(`${path} changed.`));
  watcher.on(`unlink`, path => console.log(`${path} removed.`));
  watcher.on(`error`, notify.onError({
    title: `Environment: <%= error.name %>`,
    message: `<%= error.message %>`,
  }));
  next();
}