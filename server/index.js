import path from 'path';
import { createReadStream, } from 'fs';
import Koa from 'koa';
import compress from 'koa-compress';
import conditional from 'koa-conditional-get';
import etag from 'koa-etag';
import serve from 'koa-static';
import logger from 'koa-logger';
import helmet from 'koa-helmet';

const port = process.env.PORT || 3000;
const app = new Koa();
const buildFolder = path.resolve(`${__dirname}/../build`);
// const indexFile = path.resolve(`${__dirname}/../build/index.html`);
// const dataFolder = path.resolve(`${__dirname}/../build/assets/data`);

app.use(logger());
app.use(helmet.frameguard({ action: 'deny', }));
app.use(helmet.noSniff());
app.use(helmet.xssFilter());
app.use(compress());
app.use(conditional());
app.use(etag());
app.use(serve(buildFolder));
// app.use(serve(dataFolder, { index: false, }));

app.use(async (ctx) => {
  ctx.set(`Content-Type`, `text/html; charset=utf-8`);
  ctx.set(`Cache-Control`, `max-age=0`);
  const readStream = createReadStream(buildFolder);
  ctx.body = readStream;
  ctx.status = 200;
});

app.on(`error`, (err) => {
  console.log(`ERROR! %s`, new Error(err));
});

app.listen(port);
console.log(`Koa server started at port: ${port}`);