import { series, parallel, } from 'gulp';
import { DEBUG, ENV, DEV, STG, PRD, } from './env';
import { clean, } from './tasks/clean';
import { transpile, transpileWatch, } from './tasks/transpile';
import { copy, copyWatch, } from './tasks/copy';
import { sync, } from './tasks/sync';
import { environment, environmentWatch, } from './tasks/environment';
import { favicon, } from './tasks/favicon';
import { phraseapp, } from './tasks/phraseapp';
import { imagemin, } from './tasks/imagemin';

/**
 * Export tasks
 */
export { clean, };
export { transpile, };
export { transpileWatch, };
export { copy, };
export { copyWatch, };
export { sync, };
export { environment, };
export { environmentWatch, };
export { favicon, };
export { phraseapp, };
export { imagemin, };
export const start = series(clean, parallel(transpile, transpileWatch, environment, environmentWatch, copy, copyWatch, favicon), sync);
export const build = series(clean, parallel(transpile, environment, copy, favicon));

/**
 * Log environment variables
 */
console.log(`DEBUG: ${DEBUG}`);
console.log(`ENV: ${ENV}`);
console.log(`DEV: ${DEV}`);
console.log(`STG: ${STG}`);
console.log(`PRD: ${PRD}`);