import fs from 'fs';
import fetch from 'node-fetch';
import config from './../config';


/**
 * Phraseapp
 * https://github.com/bitinn/node-fetch
 */
export function phraseapp() {
  return new Promise(async (resolve) => {
    const tag = (config.phraseapp.tag) ? `&tag=${config.phraseapp.tag}` : ``;
    let object = {};
    const fetchLocales = await fetch(`https://api.phraseapp.com/api/v2/projects/${config.phraseapp.project}/locales?access_token=${config.phraseapp.token}&per_page=100`);
    const localesResponse = await fetchLocales.json();
    const localeCodes = localesResponse.map(locale => locale.code);
    const localeIdentifiers = localesResponse.map(locale => locale.id);
    for (let i = 0; i < localeIdentifiers.length; i++) {
      const response = await fetch(`https://api.phraseapp.com/api/v2/projects/${config.phraseapp.project}/locales/${localeIdentifiers[i]}/download?access_token=${config.phraseapp.token}&file_format=${config.phraseapp.format}${tag}&per_page=100`);
      const translations = await response.json();
      const code = localeCodes[i];
      object[code] = translations;
    }

    const options = JSON.stringify(object, null, 2);
    fs.writeFileSync(`${process.cwd()}${config.phraseapp.dest}`, options);
    resolve();
  });
}