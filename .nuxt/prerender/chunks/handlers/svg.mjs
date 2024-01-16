import { defineEventHandler, getQuery, setHeader, createError } from 'file:///Users/nikitamakovei/repos/tislogistic-frontend/node_modules/h3/dist/index.mjs';
import { withBase } from 'file:///Users/nikitamakovei/repos/tislogistic-frontend/node_modules/ufo/dist/index.mjs';
import { f as fetchOptions, u as useHostname } from '../utils.mjs';
import { u as useProvider } from '../rollup/provider.mjs';
import 'node:fs';
import 'file:///Users/nikitamakovei/repos/tislogistic-frontend/node_modules/pathe/dist/index.mjs';
import '../rollup/config.mjs';
import '../nitro/nitro-prerenderer.mjs';
import 'file:///Users/nikitamakovei/repos/tislogistic-frontend/node_modules/node-fetch-native/dist/polyfill.mjs';
import 'file:///Users/nikitamakovei/repos/tislogistic-frontend/node_modules/ofetch/dist/node.mjs';
import 'file:///Users/nikitamakovei/repos/tislogistic-frontend/node_modules/destr/dist/index.mjs';
import 'file:///Users/nikitamakovei/repos/tislogistic-frontend/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///Users/nikitamakovei/repos/tislogistic-frontend/node_modules/hookable/dist/index.mjs';
import 'file:///Users/nikitamakovei/repos/tislogistic-frontend/node_modules/scule/dist/index.mjs';
import 'file:///Users/nikitamakovei/repos/tislogistic-frontend/node_modules/defu/dist/defu.mjs';
import 'file:///Users/nikitamakovei/repos/tislogistic-frontend/node_modules/ohash/dist/index.mjs';
import 'file:///Users/nikitamakovei/repos/tislogistic-frontend/node_modules/unstorage/dist/index.mjs';
import 'file:///Users/nikitamakovei/repos/tislogistic-frontend/node_modules/unstorage/drivers/fs.mjs';
import 'file:///Users/nikitamakovei/repos/tislogistic-frontend/node_modules/radix3/dist/index.mjs';
import 'node:url';
import 'file:///Users/nikitamakovei/repos/tislogistic-frontend/node_modules/ipx/dist/index.mjs';
import 'file:///Users/nikitamakovei/repos/tislogistic-frontend/node_modules/satori-html/dist/index.js';
import 'file:///Users/nikitamakovei/repos/tislogistic-frontend/node_modules/twemoji/dist/twemoji.npm.js';
import 'file:///Users/nikitamakovei/repos/tislogistic-frontend/node_modules/svg2png-wasm/dist/index.mjs';
import 'file:///Users/nikitamakovei/repos/tislogistic-frontend/node_modules/satori/dist/index.js';

const svg = defineEventHandler(async (e) => {
  const path = getQuery(e).path || "/";
  const options = await fetchOptions(e, path);
  setHeader(e, "Content-Type", "image/svg+xml");
  const provider = await useProvider(options.provider);
  if (!provider) {
    throw createError({
      statusCode: 500,
      statusMessage: `Provider ${options.provider} is missing.`
    });
  }
  return provider.createSvg(withBase(path, useHostname(e)), options);
});

export { svg as default };
//# sourceMappingURL=svg.mjs.map
