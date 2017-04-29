import { src, dest, lastRun, } from 'gulp';
import favicons from 'gulp-favicons';
import config from './../config';

/**
 * Favicon
 * https://github.com/haydenbleasel/favicons
 * https://developer.mozilla.org/en-US/docs/Web/Manifest
 */
export function favicon() {
  return src(config.favicon.src, { since: lastRun(`transpile`), })
    .pipe(favicons({
      appName: config.favicon.name,
      appDescription: config.favicon.description,
      background: config.favicon.background,
      display: config.favicon.display,
      orientation: config.favicon.orientation,
      start_url: config.favicon.startUrl,
      lang: config.favicon.lang,
      theme_color: config.favicon.themeColor,
      path: ``,
      url: `http://apegroup.com/`,
      developerName: `apegroup`,
      developerURL: `http://apegroup.com/`,
      logging: false,
      online: false,
      html: ``,
      pipeHTML: null,
      replace: true,
      icons: {
        android: true,
        appleIcon: false,
        appleStartup: false,
        coast: false,
        favicons: true,
        firefox: false,
        windows: false,
        yandex: false,
      },
    }))
    .pipe(dest(config.favicon.dest));
}