import { defineEventHandler, getQuery, setHeader, createError } from 'h3';
import { withBase } from 'ufo';
import { f as fetchOptions, u as useHostname } from './utils.mjs';
import { u as useProvider } from './rollup/provider.mjs';
import 'node:fs';
import 'pathe';
import './node-server.mjs';
import 'node-fetch-native/polyfill';
import 'node:http';
import 'node:https';
import 'destr';
import 'ofetch';
import 'unenv/runtime/fetch/index';
import 'hookable';
import 'scule';
import 'defu';
import 'ohash';
import 'unstorage';
import 'radix3';
import 'node:url';
import 'ipx';
import 'satori-html';
import 'twemoji';
import 'svg2png-wasm';
import 'satori';

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
