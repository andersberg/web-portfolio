const config = {
  browsers: [
    `last 2 Chrome versions`,
    `last 2 Firefox versions`,
    `last 2 Edge versions`,
    `last 2 Safari versions`,
    `last 2 Opera versions`,
    `last 2 iOS versions`,
    `last 2 ChromeAndroid versions`,
    `last 2 FirefoxAndroid versions`,
  ],
  clean: {
    src: [
      `./build`,
    ],
  },
  copy: {
    src: [
      `./src/+(assets)/+(fonts|media|libs|data)/**/*`,
      // `./src/+(assets)/+(libs)/webcomponentsjs/webcomponents-lite.min.js`
    ],
    dest: `./build`,
  },
  environment: {
    src: {
      dev: `./src/+(environments)/environment.html`,
      stg: `./src/+(environments)/environment.stg.html`,
      prd: `./src/+(environments)/environment.prd.html`,
    },
    rename: `/environments/environment.html`,
    dest: `./build`,
  },
  favicon: {
    src: `./src/assets/favicons/favicon.png`,
    name: `Web Portfolio`,
    description: `Hand coded in Stockholm`,
    background: `#020307`,
    display: `standalone`,
    orientation: `portrait`,
    startUrl: `/`,
    lang: `en-US`,
    themeColor: `#fff`,
    dest: `./build`,
  },
  imagemin: {
    src: `./src/assets/images/**/*{.jpg,png}`,
    dest: `./build/assets/images`,
  },
  phraseapp: {
    project: `023834e5c49750f0a26fb428d4fbb9c3`,
    token: `45992f9e7877c0995a044d730ca23466d7dce893f876b70b252daa2af6ce6ff2`,
    format: `simple_json`,
    tag: ``,
    dest: `/src/assets/locales/locales.json`,
  },
  sync: {
    files: [
      `./build/index.html`,
      `./build/+(app)/**/*.html`,
      `./build/+(app)/**/*.js`,
    ],
    ghostMode: {
      clicks: false,
      scroll: false,
      forms: false,
    },
  },
  serviceWorker: {
    rootDirectory: `./build`,
    staticFileGlobs: [
      `**/*.{js,html,css,jpg}`,
    ],
    fileName: `sw.js`,
  },
  transpile: {
    customMedia: {
      extensions: {
        'tablet': `(min-width: 720px)`,
        'desktop': `(min-width: 1024px)`,
        'lg-desktop': `(min-width: 1440px)`,
      },
    },
    src: [
      `./src/+(app)/**/*.html`,
      `!./src/+(app)/**/*.spec.html`,
      `./src/index.html`,
    ],
    dest: `./build`,
  },
};

export default config;
