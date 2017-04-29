import { watch, src, dest, series, lastRun, } from 'gulp';
import config from './../config';
import notify from 'gulp-notify';

/**
 * Copy
 */
export function copy() {
  return src(config.copy.src, { since: lastRun(`copy`), })
    .pipe(dest(config.copy.dest))
    .on(`error`, console.error.bind(console));
}

/**
 * Copy watch
 */
export function copyWatch(next) {
  let watcher = watch(config.copy.src, series(copy));
  watcher.on(`add`, path => console.log(`${path} added.`));
  watcher.on(`change`, path => console.log(`${path} changed.`));
  watcher.on(`unlink`, path => console.log(`${path} removed.`));
  watcher.on(`error`, notify.onError({
    title: `Copy: <%= error.name %>`,
    message: `<%= error.message %>`,
  }));
  next();
}