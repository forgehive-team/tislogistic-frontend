globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import 'node-fetch-native/polyfill';
import { Server as Server$1 } from 'node:http';
import { Server } from 'node:https';
import destr from 'destr';
import { defineEventHandler, handleCacheHeaders, createEvent, eventHandler, setHeaders, sendRedirect, proxyRequest, getRequestHeader, setResponseStatus, setResponseHeader, getRequestHeaders, createError, lazyEventHandler, setHeader, createApp, createRouter as createRouter$1, toNodeListener, fetchWithEvent } from 'h3';
import { createFetch as createFetch$1, Headers } from 'ofetch';
import { createCall, createFetch } from 'unenv/runtime/fetch/index';
import { createHooks } from 'hookable';
import { snakeCase } from 'scule';
import defu, { defuFn } from 'defu';
import { hash } from 'ohash';
import { parseURL, withoutBase, joinURL, withQuery, withLeadingSlash, withoutTrailingSlash } from 'ufo';
import { createStorage, prefixStorage } from 'unstorage';
import { toRouteMatcher, createRouter } from 'radix3';
import { promises } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'pathe';
import { createIPX, createIPXMiddleware } from 'ipx';

const inlineAppConfig = {};



const appConfig = defuFn(inlineAppConfig);

const _runtimeConfig = {"app":{"baseURL":"/","buildAssetsDir":"/_nuxt/","cdnURL":""},"nitro":{"envPrefix":"NUXT_","routeRules":{"/__nuxt_error":{"cache":false},"/**":{"index":true},"/":{"sitemap":{"changefreq":"daily","priority":1}},"/services":{"sitemap":{"changefreq":"daily","priority":0.9}},"/services/project-logistics":{"sitemap":{"changefreq":"daily","priority":0.9}},"/services/morskie-gruzoperevozki":{"sitemap":{"changefreq":"daily","priority":0.9}},"/services/zheleznodorozhnye-perevozki":{"sitemap":{"changefreq":"daily","priority":0.9}},"/services/avtomobilnye-perevozki":{"sitemap":{"changefreq":"daily","priority":0.9}},"/services/aviaperevozki":{"sitemap":{"changefreq":"daily","priority":0.9}},"/services/arenda-konteynerov":{"sitemap":{"changefreq":"daily","priority":0.9}},"/services/tamozhennoe-oformlenie":{"sitemap":{"changefreq":"daily","priority":0.9}},"/services/multimodalnye-perevozki":{"sitemap":{"changefreq":"daily","priority":0.9}},"/services/vneshneekonomicheskaya-deyatelnost":{"sitemap":{"changefreq":"daily","priority":0.9}},"/about":{"sitemap":{"changefreq":"daily","priority":0.8}},"/contacts":{"sitemap":{"changefreq":"daily","priority":0.7}},"/news":{"sitemap":{"changefreq":"daily","priority":0.7}},"/projects":{"sitemap":{"changefreq":"daily","priority":0.7}},"/vacancies":{"sitemap":{"changefreq":"daily","priority":0.6}},"/containers":{"sitemap":{"changefreq":"daily","priority":0.6}},"/tarify-na-tamozhennoe-oformlenie-gruzov":{"sitemap":{"changefreq":"daily","priority":0.5}},"/traffic":{"sitemap":{"changefreq":"daily","priority":0.2}},"/sitemap":{"sitemap":{"changefreq":"daily","priority":0.2}},"/eula":{"sitemap":{"changefreq":"daily","priority":0.2}},"/politika-konfidencialnosti":{"sitemap":{"changefreq":"daily","priority":0.2}},"/_nuxt/**":{"headers":{"cache-control":"public, max-age=31536000, immutable"}}}},"public":{"trailingSlash":false,"titleSeparator":"|","siteName":"Тис Лоджистик","siteUrl":"https://tislogistic.ru/","siteDescription":"","language":"ru","webmasterKey":"7dee1d568d1d1192","mapsKey":"d4b2e171-fe8a-45ee-933e-7e8d9f1ee2d6","appUrl":"https://app.tislogistic.ru","apiBase":"https://app.tislogistic.ru","newsApiBase":"https://dashboard.tislogistic.ru/api/","yandexMetrika":{"id":"88896604","metrikaUrl":"https://mc.yandex.ru/metrika/tag.js","accurateTrackBounce":true,"childIframe":false,"clickmap":true,"defer":false,"useRuntimeConfig":true,"trackHash":false,"trackLinks":true,"type":0,"webvisor":true,"triggerEvent":false,"consoleLog":true,"partytown":false,"isDev":false},"nuxt-unhead":{"seoOptimise":true,"resolveAliases":false}},"indexable":true,"ipx":{"dir":"../public","domains":[],"sharp":{},"alias":{}}};
const ENV_PREFIX = "NITRO_";
const ENV_PREFIX_ALT = _runtimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_";
overrideConfig(_runtimeConfig);
const runtimeConfig = deepFreeze(_runtimeConfig);
const useRuntimeConfig = () => runtimeConfig;
deepFreeze(appConfig);
function getEnv(key) {
  const envKey = snakeCase(key).toUpperCase();
  return destr(
    process.env[ENV_PREFIX + envKey] ?? process.env[ENV_PREFIX_ALT + envKey]
  );
}
function isObject(input) {
  return typeof input === "object" && !Array.isArray(input);
}
function overrideConfig(obj, parentKey = "") {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key;
    const envValue = getEnv(subKey);
    if (isObject(obj[key])) {
      if (isObject(envValue)) {
        obj[key] = { ...obj[key], ...envValue };
      }
      overrideConfig(obj[key], subKey);
    } else {
      obj[key] = envValue ?? obj[key];
    }
  }
}
function deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      deepFreeze(value);
    }
  }
  return Object.freeze(object);
}

const _assets = {

};

function normalizeKey(key) {
  if (!key) {
    return "";
  }
  return key.split("?")[0].replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "");
}

const assets$1 = {
  getKeys() {
    return Promise.resolve(Object.keys(_assets))
  },
  hasItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(id in _assets)
  },
  getItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].import() : null)
  },
  getMeta (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].meta : {})
  }
};

const storage = createStorage({});

storage.mount('/assets', assets$1);

function useStorage(base = "") {
  return base ? prefixStorage(storage, base) : storage;
}

const defaultCacheOptions = {
  name: "_",
  base: "/cache",
  swr: true,
  maxAge: 1
};
function defineCachedFunction(fn, opts = {}) {
  opts = { ...defaultCacheOptions, ...opts };
  const pending = {};
  const group = opts.group || "nitro/functions";
  const name = opts.name || fn.name || "_";
  const integrity = hash([opts.integrity, fn, opts]);
  const validate = opts.validate || (() => true);
  async function get(key, resolver, shouldInvalidateCache) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    const entry = await useStorage().getItem(cacheKey) || {};
    const ttl = (opts.maxAge ?? opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = shouldInvalidateCache || entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl || !validate(entry);
    const _resolve = async () => {
      const isPending = pending[key];
      if (!isPending) {
        if (entry.value !== void 0 && (opts.staleMaxAge || 0) >= 0 && opts.swr === false) {
          entry.value = void 0;
          entry.integrity = void 0;
          entry.mtime = void 0;
          entry.expires = void 0;
        }
        pending[key] = Promise.resolve(resolver());
      }
      try {
        entry.value = await pending[key];
      } catch (error) {
        if (!isPending) {
          delete pending[key];
        }
        throw error;
      }
      if (!isPending) {
        entry.mtime = Date.now();
        entry.integrity = integrity;
        delete pending[key];
        if (validate(entry)) {
          useStorage().setItem(cacheKey, entry).catch((error) => console.error("[nitro] [cache]", error));
        }
      }
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (opts.swr && entry.value) {
      _resolvePromise.catch(console.error);
      return entry;
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const shouldBypassCache = opts.shouldBypassCache?.(...args);
    if (shouldBypassCache) {
      return fn(...args);
    }
    const key = await (opts.getKey || getKey)(...args);
    const shouldInvalidateCache = opts.shouldInvalidateCache?.(...args);
    const entry = await get(key, () => fn(...args), shouldInvalidateCache);
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
const cachedFunction = defineCachedFunction;
function getKey(...args) {
  return args.length > 0 ? hash(args, {}) : "";
}
function escapeKey(key) {
  return key.replace(/[^\dA-Za-z]/g, "");
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions) {
  const _opts = {
    ...opts,
    getKey: async (event) => {
      const key = await opts.getKey?.(event);
      if (key) {
        return escapeKey(key);
      }
      const url = event.node.req.originalUrl || event.node.req.url;
      const friendlyName = escapeKey(decodeURI(parseURL(url).pathname)).slice(
        0,
        16
      );
      const urlHash = hash(url);
      return `${friendlyName}.${urlHash}`;
    },
    validate: (entry) => {
      if (entry.value.code >= 400) {
        return false;
      }
      if (entry.value.body === void 0) {
        return false;
      }
      return true;
    },
    group: opts.group || "nitro/handlers",
    integrity: [opts.integrity, handler]
  };
  const _cachedHandler = cachedFunction(
    async (incomingEvent) => {
      const reqProxy = cloneWithProxy(incomingEvent.node.req, { headers: {} });
      const resHeaders = {};
      let _resSendBody;
      const resProxy = cloneWithProxy(incomingEvent.node.res, {
        statusCode: 200,
        getHeader(name) {
          return resHeaders[name];
        },
        setHeader(name, value) {
          resHeaders[name] = value;
          return this;
        },
        getHeaderNames() {
          return Object.keys(resHeaders);
        },
        hasHeader(name) {
          return name in resHeaders;
        },
        removeHeader(name) {
          delete resHeaders[name];
        },
        getHeaders() {
          return resHeaders;
        },
        end(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        write(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        writeHead(statusCode, headers2) {
          this.statusCode = statusCode;
          if (headers2) {
            for (const header in headers2) {
              this.setHeader(header, headers2[header]);
            }
          }
          return this;
        }
      });
      const event = createEvent(reqProxy, resProxy);
      event.context = incomingEvent.context;
      const body = await handler(event) || _resSendBody;
      const headers = event.node.res.getHeaders();
      headers.etag = headers.Etag || headers.etag || `W/"${hash(body)}"`;
      headers["last-modified"] = headers["Last-Modified"] || headers["last-modified"] || (/* @__PURE__ */ new Date()).toUTCString();
      const cacheControl = [];
      if (opts.swr) {
        if (opts.maxAge) {
          cacheControl.push(`s-maxage=${opts.maxAge}`);
        }
        if (opts.staleMaxAge) {
          cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
        } else {
          cacheControl.push("stale-while-revalidate");
        }
      } else if (opts.maxAge) {
        cacheControl.push(`max-age=${opts.maxAge}`);
      }
      if (cacheControl.length > 0) {
        headers["cache-control"] = cacheControl.join(", ");
      }
      const cacheEntry = {
        code: event.node.res.statusCode,
        headers,
        body
      };
      return cacheEntry;
    },
    _opts
  );
  return defineEventHandler(async (event) => {
    if (opts.headersOnly) {
      if (handleCacheHeaders(event, { maxAge: opts.maxAge })) {
        return;
      }
      return handler(event);
    }
    const response = await _cachedHandler(event);
    if (event.node.res.headersSent || event.node.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["last-modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.node.res.statusCode = response.code;
    for (const name in response.headers) {
      event.node.res.setHeader(name, response.headers[name]);
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

const config = useRuntimeConfig();
const _routeRulesMatcher = toRouteMatcher(
  createRouter({ routes: config.nitro.routeRules })
);
function createRouteRulesHandler() {
  return eventHandler((event) => {
    const routeRules = getRouteRules(event);
    if (routeRules.headers) {
      setHeaders(event, routeRules.headers);
    }
    if (routeRules.redirect) {
      return sendRedirect(
        event,
        routeRules.redirect.to,
        routeRules.redirect.statusCode
      );
    }
    if (routeRules.proxy) {
      let target = routeRules.proxy.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.proxy._proxyStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      }
      return proxyRequest(event, target, {
        fetch: $fetch.raw,
        ...routeRules.proxy
      });
    }
  });
}
function getRouteRules(event) {
  event.context._nitro = event.context._nitro || {};
  if (!event.context._nitro.routeRules) {
    const path = new URL(event.node.req.url, "http://localhost").pathname;
    event.context._nitro.routeRules = getRouteRulesForPath(
      withoutBase(path, useRuntimeConfig().app.baseURL)
    );
  }
  return event.context._nitro.routeRules;
}
function getRouteRulesForPath(path) {
  return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
}

const plugins = [
  
];

function hasReqHeader(event, name, includes) {
  const value = getRequestHeader(event, name);
  return value && typeof value === "string" && value.toLowerCase().includes(includes);
}
function isJsonRequest(event) {
  return hasReqHeader(event, "accept", "application/json") || hasReqHeader(event, "user-agent", "curl/") || hasReqHeader(event, "user-agent", "httpie/") || hasReqHeader(event, "sec-fetch-mode", "cors") || event.path.startsWith("/api/") || event.path.endsWith(".json");
}
function normalizeError(error) {
  const cwd = typeof process.cwd === "function" ? process.cwd() : "/";
  const stack = (error.stack || "").split("\n").splice(1).filter((line) => line.includes("at ")).map((line) => {
    const text = line.replace(cwd + "/", "./").replace("webpack:/", "").replace("file://", "").trim();
    return {
      text,
      internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
    };
  });
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage ?? (statusCode === 404 ? "Not Found" : "");
  const message = error.message || error.toString();
  return {
    stack,
    statusCode,
    statusMessage,
    message
  };
}

const errorHandler = (async function errorhandler(error, event) {
  const { stack, statusCode, statusMessage, message } = normalizeError(error);
  const errorObject = {
    url: event.node.req.url,
    statusCode,
    statusMessage,
    message,
    stack: "",
    data: error.data
  };
  setResponseStatus(event, errorObject.statusCode !== 200 && errorObject.statusCode || 500, errorObject.statusMessage);
  if (error.unhandled || error.fatal) {
    const tags = [
      "[nuxt]",
      "[request error]",
      error.unhandled && "[unhandled]",
      error.fatal && "[fatal]",
      Number(errorObject.statusCode) !== 200 && `[${errorObject.statusCode}]`
    ].filter(Boolean).join(" ");
    console.error(tags, errorObject.message + "\n" + stack.map((l) => "  " + l.text).join("  \n"));
  }
  if (isJsonRequest(event)) {
    setResponseHeader(event, "Content-Type", "application/json");
    event.node.res.end(JSON.stringify(errorObject));
    return;
  }
  const isErrorPage = event.node.req.url?.startsWith("/__nuxt_error");
  const res = !isErrorPage ? await useNitroApp().localFetch(withQuery(joinURL(useRuntimeConfig().app.baseURL, "/__nuxt_error"), errorObject), {
    headers: getRequestHeaders(event),
    redirect: "manual"
  }).catch(() => null) : null;
  if (!res) {
    const { template } = await import('./error-500.mjs');
    setResponseHeader(event, "Content-Type", "text/html;charset=UTF-8");
    event.node.res.end(template(errorObject));
    return;
  }
  for (const [header, value] of res.headers.entries()) {
    setResponseHeader(event, header, value);
  }
  setResponseStatus(event, res.status && res.status !== 200 ? res.status : void 0, res.statusText);
  event.node.res.end(await res.text());
});

const assets = {
  "/anketa.docx": {
    "type": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "etag": "\"7fe5b-GLWTZeDHIN2DLPGEsV2fgAbvRwI\"",
    "mtime": "2024-01-10T10:32:06.540Z",
    "size": 523867,
    "path": "../public/anketa.docx"
  },
  "/eula.pdf": {
    "type": "application/pdf",
    "etag": "\"a2123-GfHTe0tE5fEcUAoHszi+NovEAdE\"",
    "mtime": "2023-08-08T16:12:29.884Z",
    "size": 663843,
    "path": "../public/eula.pdf"
  },
  "/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": "\"3c2e-ozC7hEIZv9+Ck66tTd+oFhgZZ/M\"",
    "mtime": "2023-04-25T13:01:30.000Z",
    "size": 15406,
    "path": "../public/favicon.ico"
  },
  "/googleca0a585e6c7b918c.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"35-2dTuG1wEHenSjbagRE8/8tc97nU\"",
    "mtime": "2023-06-05T12:14:59.478Z",
    "size": 53,
    "path": "../public/googleca0a585e6c7b918c.html"
  },
  "/index.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"946fa-kSyz8nF7JO7R0TQyxPjYPWyVg1k\"",
    "mtime": "2024-01-16T16:57:46.430Z",
    "size": 607994,
    "path": "../public/index.html"
  },
  "/index.html.br": {
    "type": "text/html; charset=utf-8",
    "encoding": "br",
    "etag": "\"21e3e-sjyzwVfQXH3CoL7tcwsBIUPjA4k\"",
    "mtime": "2024-01-16T16:58:37.573Z",
    "size": 138814,
    "path": "../public/index.html.br"
  },
  "/index.html.gz": {
    "type": "text/html; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"2c779-dHA4kLinm+tDEfd0TwVLQCu/sOU\"",
    "mtime": "2024-01-16T16:58:36.440Z",
    "size": 182137,
    "path": "../public/index.html.gz"
  },
  "/inter-latin-ext-400-normal.woff": {
    "type": "font/woff",
    "etag": "\"abcc-ScgUlgU6NMSchk9cXQMUZeQG8fc\"",
    "mtime": "2023-04-14T08:44:00.903Z",
    "size": 43980,
    "path": "../public/inter-latin-ext-400-normal.woff"
  },
  "/inter-latin-ext-700-normal.woff": {
    "type": "font/woff",
    "etag": "\"bb34-btkmYi1MS9GkMFR4+gGPWRFxwKU\"",
    "mtime": "2023-04-14T08:44:00.903Z",
    "size": 47924,
    "path": "../public/inter-latin-ext-700-normal.woff"
  },
  "/politika-konfidencialnosti.pdf": {
    "type": "application/pdf",
    "etag": "\"2e8bef-1LXE6pENOA54gZ99qmCmcH2DlEA\"",
    "mtime": "2023-08-08T16:12:29.898Z",
    "size": 3050479,
    "path": "../public/politika-konfidencialnosti.pdf"
  },
  "/presentation.pdf": {
    "type": "application/pdf",
    "etag": "\"3de228-i0kscFct3hTAE7mDsf0NZEoATck\"",
    "mtime": "2023-05-13T09:28:34.710Z",
    "size": 4055592,
    "path": "../public/presentation.pdf"
  },
  "/robots.txt": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"53-Wl43Fx8rzdHHecY3Tw5vlADZO6w\"",
    "mtime": "2024-01-16T16:57:46.438Z",
    "size": 83,
    "path": "../public/robots.txt"
  },
  "/sitemap.xml": {
    "type": "application/xml",
    "etag": "\"cf2-I0MKUmUYVVk2zFiy2rDIii/ABeo\"",
    "mtime": "2024-01-16T16:58:43.462Z",
    "size": 3314,
    "path": "../public/sitemap.xml"
  },
  "/svg2png.wasm": {
    "type": "application/wasm",
    "etag": "\"1bf667-JsF09mJVeSqlxzPPOrdAtUEgwrc\"",
    "mtime": "2023-04-14T08:44:00.903Z",
    "size": 1832551,
    "path": "../public/svg2png.wasm"
  },
  "/yoga.wasm": {
    "type": "application/wasm",
    "etag": "\"15a52-70hm7K4ZL9h3JwZ88sDAz5+4sCA\"",
    "mtime": "2023-04-14T08:44:00.903Z",
    "size": 88658,
    "path": "../public/yoga.wasm"
  },
  "/about/index.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"db08c-4u67URAWXrJc5orttNnwpBxqpDM\"",
    "mtime": "2024-01-16T16:57:47.093Z",
    "size": 897164,
    "path": "../public/about/index.html"
  },
  "/about/index.html.br": {
    "type": "text/html; charset=utf-8",
    "encoding": "br",
    "etag": "\"29454-mrdRg1ugCI6a0QW6X3NgKDkvlKw\"",
    "mtime": "2024-01-16T16:58:39.294Z",
    "size": 169044,
    "path": "../public/about/index.html.br"
  },
  "/about/index.html.gz": {
    "type": "text/html; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"50e8c-UxHfMfIb3dGuDC9gpEcL9vd/Wxk\"",
    "mtime": "2024-01-16T16:58:37.679Z",
    "size": 331404,
    "path": "../public/about/index.html.gz"
  },
  "/containers/index.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"21bc9-fTvl+W0HYYknkR3il9TeN8NfT38\"",
    "mtime": "2024-01-16T16:57:55.240Z",
    "size": 138185,
    "path": "../public/containers/index.html"
  },
  "/containers/index.html.br": {
    "type": "text/html; charset=utf-8",
    "encoding": "br",
    "etag": "\"3b90-mdqqXa6S8U0WDEFxofW//fRsUsI\"",
    "mtime": "2024-01-16T16:58:39.568Z",
    "size": 15248,
    "path": "../public/containers/index.html.br"
  },
  "/containers/index.html.gz": {
    "type": "text/html; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"573c-1w720NNVfg292CeWTV7+c9MbTPs\"",
    "mtime": "2024-01-16T16:58:39.393Z",
    "size": 22332,
    "path": "../public/containers/index.html.gz"
  },
  "/contacts/index.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"166eb-Fl2vKuzz+toDSQr49eHwODk0nPk\"",
    "mtime": "2024-01-16T16:57:47.534Z",
    "size": 91883,
    "path": "../public/contacts/index.html"
  },
  "/contacts/index.html.br": {
    "type": "text/html; charset=utf-8",
    "encoding": "br",
    "etag": "\"35c7-wjmjegmXN4E9zAVRSupOFOi93Ug\"",
    "mtime": "2024-01-16T16:58:39.388Z",
    "size": 13767,
    "path": "../public/contacts/index.html.br"
  },
  "/contacts/index.html.gz": {
    "type": "text/html; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"434a-C7jRN7uApZ8DvWcvmO1OfWZnPRE\"",
    "mtime": "2024-01-16T16:58:39.298Z",
    "size": 17226,
    "path": "../public/contacts/index.html.gz"
  },
  "/eula/index.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"12410-PCpGovpiBLvYi8xQ2QUNxQDiijw\"",
    "mtime": "2024-01-16T16:57:56.335Z",
    "size": 74768,
    "path": "../public/eula/index.html"
  },
  "/eula/index.html.br": {
    "type": "text/html; charset=utf-8",
    "encoding": "br",
    "etag": "\"2e65-TCIPcgrd9ihUGOIoX8VpSUdBz1U\"",
    "mtime": "2024-01-16T16:58:39.652Z",
    "size": 11877,
    "path": "../public/eula/index.html.br"
  },
  "/eula/index.html.gz": {
    "type": "text/html; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"39d7-PZfb1buwYmzRN8KLtA7nsahLchE\"",
    "mtime": "2024-01-16T16:58:39.572Z",
    "size": 14807,
    "path": "../public/eula/index.html.gz"
  },
  "/images/about_background.png": {
    "type": "image/png",
    "etag": "\"1762da-M5hCbkLavJ8gajX54aRCr0hzefk\"",
    "mtime": "2023-09-01T15:42:16.665Z",
    "size": 1532634,
    "path": "../public/images/about_background.png"
  },
  "/images/air_freight_background.png": {
    "type": "image/png",
    "etag": "\"1638a6-WVhZDZgwauFMYP5DxuLkxvySCiA\"",
    "mtime": "2023-08-05T13:18:44.819Z",
    "size": 1456294,
    "path": "../public/images/air_freight_background.png"
  },
  "/images/car_freight_background.png": {
    "type": "image/png",
    "etag": "\"139201-zmzykiUFhe2QyB1tBw4WfXVBVk4\"",
    "mtime": "2023-08-05T13:18:44.834Z",
    "size": 1282561,
    "path": "../public/images/car_freight_background.png"
  },
  "/images/car_freight_background1.jpg": {
    "type": "image/jpeg",
    "etag": "\"2a3e9b-xvJ7YqR9akEK/x3sXq87xz4tmNs\"",
    "mtime": "2023-08-05T13:18:44.865Z",
    "size": 2768539,
    "path": "../public/images/car_freight_background1.jpg"
  },
  "/images/ceo.png": {
    "type": "image/png",
    "etag": "\"2e42c-mjpqInWqCxSDQaR1FFuj6UVHwwg\"",
    "mtime": "2023-10-04T16:27:44.751Z",
    "size": 189484,
    "path": "../public/images/ceo.png"
  },
  "/images/ceo2.png": {
    "type": "image/png",
    "etag": "\"3e620-O+rgYIZxIRaB3/EcOrP8kbGJPYA\"",
    "mtime": "2023-10-04T16:27:44.754Z",
    "size": 255520,
    "path": "../public/images/ceo2.png"
  },
  "/images/containers_background.png": {
    "type": "image/png",
    "etag": "\"155b74-05Q2F/Rm4QM7hlkldPBd5k0IX8Y\"",
    "mtime": "2023-08-05T13:18:44.881Z",
    "size": 1399668,
    "path": "../public/images/containers_background.png"
  },
  "/images/container_blue.png": {
    "type": "image/png",
    "etag": "\"1c0cf-IXO5BP7j2y0YXR0pII9wwiCqu+I\"",
    "mtime": "2023-04-08T13:53:02.524Z",
    "size": 114895,
    "path": "../public/images/container_blue.png"
  },
  "/images/deputy_ceo.png": {
    "type": "image/png",
    "etag": "\"b6da-jU0mLZOiUHZhRe0gujSBRLNsFfY\"",
    "mtime": "2023-10-04T16:27:44.754Z",
    "size": 46810,
    "path": "../public/images/deputy_ceo.png"
  },
  "/images/footer_card_background.jpg": {
    "type": "image/jpeg",
    "etag": "\"e1adc-oDlaUQXOJKLUBidt5CziKIDYiZc\"",
    "mtime": "2023-05-23T11:38:23.668Z",
    "size": 924380,
    "path": "../public/images/footer_card_background.jpg"
  },
  "/images/foreign_activity_background.png": {
    "type": "image/png",
    "etag": "\"1c3fe6-3OiLD//KehJ2vJpxgDRLP1FYgIw\"",
    "mtime": "2023-09-01T15:42:16.694Z",
    "size": 1851366,
    "path": "../public/images/foreign_activity_background.png"
  },
  "/images/incoterms.jpg": {
    "type": "image/jpeg",
    "etag": "\"1fe58-Lfrn2JIl5rYNpp9op+FVQ3c7Mjo\"",
    "mtime": "2023-09-01T15:42:16.696Z",
    "size": 130648,
    "path": "../public/images/incoterms.jpg"
  },
  "/images/left arrow.svg": {
    "type": "image/svg+xml",
    "etag": "\"472-zYeic5E0859N9DoQs2DmTipvtwU\"",
    "mtime": "2023-10-04T16:27:23.555Z",
    "size": 1138,
    "path": "../public/images/left arrow.svg"
  },
  "/images/left arrow.svg.br": {
    "type": "image/svg+xml",
    "encoding": "br",
    "etag": "\"1d9-3SEQxGbPxyyIyXgL/6CwFm8weHg\"",
    "mtime": "2024-01-16T16:57:24.280Z",
    "size": 473,
    "path": "../public/images/left arrow.svg.br"
  },
  "/images/left arrow.svg.gz": {
    "type": "image/svg+xml",
    "encoding": "gzip",
    "etag": "\"20b-IzH9KQEbI14S2ygtGOeEmv9QlL0\"",
    "mtime": "2024-01-16T16:57:24.275Z",
    "size": 523,
    "path": "../public/images/left arrow.svg.gz"
  },
  "/images/main_background.jpg": {
    "type": "image/jpeg",
    "etag": "\"16d484-/mKgwy2iMdAtgdC1E+nicteXWZc\"",
    "mtime": "2023-04-04T14:28:59.130Z",
    "size": 1496196,
    "path": "../public/images/main_background.jpg"
  },
  "/images/main_background.png": {
    "type": "image/png",
    "etag": "\"17b3b5-xZSQ+dPXETxBocAePGZwisJsEXQ\"",
    "mtime": "2023-08-05T13:18:44.881Z",
    "size": 1553333,
    "path": "../public/images/main_background.png"
  },
  "/images/multimodal_background.png": {
    "type": "image/png",
    "etag": "\"1d78d0-9y9XL9/oVLCN33AL4McVmr8strk\"",
    "mtime": "2023-10-04T16:27:23.555Z",
    "size": 1931472,
    "path": "../public/images/multimodal_background.png"
  },
  "/images/news_background.jpg": {
    "type": "image/jpeg",
    "etag": "\"2f940-+IHweSI0ouod3qxfH/1yx39UtGU\"",
    "mtime": "2023-07-06T15:11:07.924Z",
    "size": 194880,
    "path": "../public/images/news_background.jpg"
  },
  "/images/notepad.png": {
    "type": "image/png",
    "etag": "\"11a264-8L1gNcLH3Gl6ECv61u0l0N2H8kk\"",
    "mtime": "2023-04-11T08:48:31.838Z",
    "size": 1155684,
    "path": "../public/images/notepad.png"
  },
  "/images/process_desktop.png": {
    "type": "image/png",
    "etag": "\"245e5-Et7u9BPA7MUJwHgYvmmVMzsmYXg\"",
    "mtime": "2023-07-06T15:11:07.924Z",
    "size": 148965,
    "path": "../public/images/process_desktop.png"
  },
  "/images/process_mobile.png": {
    "type": "image/png",
    "etag": "\"1fc32-zvicviFvjdySDWI3TSbGX5XgGR8\"",
    "mtime": "2023-07-06T15:11:07.924Z",
    "size": 130098,
    "path": "../public/images/process_mobile.png"
  },
  "/images/project_logistics_background.png": {
    "type": "image/png",
    "etag": "\"119d75-HmVFqHRpCs2Zh3OGz/7JkDtzfW8\"",
    "mtime": "2023-08-05T13:18:44.897Z",
    "size": 1154421,
    "path": "../public/images/project_logistics_background.png"
  },
  "/images/scroll.gif": {
    "type": "image/gif",
    "etag": "\"f971-wWpYvA+MRkIWD3oEzviTAPEgWDU\"",
    "mtime": "2023-10-16T14:27:03.644Z",
    "size": 63857,
    "path": "../public/images/scroll.gif"
  },
  "/images/sea_freight_background.png": {
    "type": "image/png",
    "etag": "\"1d09a9-rg4aBy9ULl/iHSEsZQkzvjqCq3s\"",
    "mtime": "2023-10-04T16:27:23.572Z",
    "size": 1903017,
    "path": "../public/images/sea_freight_background.png"
  },
  "/images/telegram.png": {
    "type": "image/png",
    "etag": "\"1a1c5-I+CaTCydVcVywVe4mzcJWwsl7r4\"",
    "mtime": "2023-10-04T16:27:23.587Z",
    "size": 106949,
    "path": "../public/images/telegram.png"
  },
  "/images/vacancies_background.png": {
    "type": "image/png",
    "etag": "\"10c0b7-LO02ePmVKU4pX0f+w/GYFvvWk+U\"",
    "mtime": "2023-10-04T16:27:23.590Z",
    "size": 1097911,
    "path": "../public/images/vacancies_background.png"
  },
  "/news/index.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"fb08-csIZdelvCTUahes/1K0lG2n2yQM\"",
    "mtime": "2024-01-16T16:57:52.378Z",
    "size": 64264,
    "path": "../public/news/index.html"
  },
  "/news/index.html.br": {
    "type": "text/html; charset=utf-8",
    "encoding": "br",
    "etag": "\"257d-V0W3X6OoCd5w/QDVKA2iw2wRdD4\"",
    "mtime": "2024-01-16T16:58:39.973Z",
    "size": 9597,
    "path": "../public/news/index.html.br"
  },
  "/news/index.html.gz": {
    "type": "text/html; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"2f57-qGee60hKk3iEjnHZmYwwMPcnSUc\"",
    "mtime": "2024-01-16T16:58:39.880Z",
    "size": 12119,
    "path": "../public/news/index.html.gz"
  },
  "/politika-konfidencialnosti/index.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"1a5bb-ujBhuUpFdIMx34Fqxfs9B1ugQVQ\"",
    "mtime": "2024-01-16T16:57:56.145Z",
    "size": 107963,
    "path": "../public/politika-konfidencialnosti/index.html"
  },
  "/politika-konfidencialnosti/index.html.br": {
    "type": "text/html; charset=utf-8",
    "encoding": "br",
    "etag": "\"3fdf-t7r1ucNXMAouPiFvShUHnhvdTRM\"",
    "mtime": "2024-01-16T16:58:39.814Z",
    "size": 16351,
    "path": "../public/politika-konfidencialnosti/index.html.br"
  },
  "/politika-konfidencialnosti/index.html.gz": {
    "type": "text/html; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"5a93-pCXonWuiT75iGRp3M8qN/R/sQw0\"",
    "mtime": "2024-01-16T16:58:39.659Z",
    "size": 23187,
    "path": "../public/politika-konfidencialnosti/index.html.gz"
  },
  "/projects/index.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"fa32-1v+kkejghXY7LWKhTl0Hl1bSuo4\"",
    "mtime": "2024-01-16T16:58:03.049Z",
    "size": 64050,
    "path": "../public/projects/index.html"
  },
  "/projects/index.html.br": {
    "type": "text/html; charset=utf-8",
    "encoding": "br",
    "etag": "\"2579-2ogSz6ncm3NupLiFIHtBX8ccqpE\"",
    "mtime": "2024-01-16T16:58:40.039Z",
    "size": 9593,
    "path": "../public/projects/index.html.br"
  },
  "/projects/index.html.gz": {
    "type": "text/html; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"2f3c-TGmJPexzbXtY5VdZtuGIrF90jtg\"",
    "mtime": "2024-01-16T16:58:39.976Z",
    "size": 12092,
    "path": "../public/projects/index.html.gz"
  },
  "/services/index.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"1580e-JaSlw3ogw8L1G/+7fIJ9kLm2izc\"",
    "mtime": "2024-01-16T16:57:55.932Z",
    "size": 88078,
    "path": "../public/services/index.html"
  },
  "/services/index.html.br": {
    "type": "text/html; charset=utf-8",
    "encoding": "br",
    "etag": "\"31cd-DNz0NIrC/UBMKSMJThKIQdms5Qs\"",
    "mtime": "2024-01-16T16:58:40.218Z",
    "size": 12749,
    "path": "../public/services/index.html.br"
  },
  "/services/index.html.gz": {
    "type": "text/html; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"3ef2-ZqKPYFoYaBbHrU9PWDOlSy1YpWo\"",
    "mtime": "2024-01-16T16:58:40.121Z",
    "size": 16114,
    "path": "../public/services/index.html.gz"
  },
  "/sitemap/index.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"11ce3-vd6xbo5lC9gyBYixgxmAp+bTYh4\"",
    "mtime": "2024-01-16T16:57:55.720Z",
    "size": 72931,
    "path": "../public/sitemap/index.html"
  },
  "/sitemap/index.html.br": {
    "type": "text/html; charset=utf-8",
    "encoding": "br",
    "etag": "\"2af9-AWus+2+H1Q3ZuU75a7yz5rmHroQ\"",
    "mtime": "2024-01-16T16:58:40.117Z",
    "size": 11001,
    "path": "../public/sitemap/index.html.br"
  },
  "/sitemap/index.html.gz": {
    "type": "text/html; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"35ce-fS8uRq67cY7nkVSC3Xp9eckPqiA\"",
    "mtime": "2024-01-16T16:58:40.043Z",
    "size": 13774,
    "path": "../public/sitemap/index.html.gz"
  },
  "/tarify-na-tamozhennoe-oformlenie-gruzov/index.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"12a5e-PWx6TDX/DcKVUB1ruLeyl8rbQDw\"",
    "mtime": "2024-01-16T16:57:55.486Z",
    "size": 76382,
    "path": "../public/tarify-na-tamozhennoe-oformlenie-gruzov/index.html"
  },
  "/tarify-na-tamozhennoe-oformlenie-gruzov/index.html.br": {
    "type": "text/html; charset=utf-8",
    "encoding": "br",
    "etag": "\"2d89-kcQEtNsEmKZS6MYcuEhpmnBa0K0\"",
    "mtime": "2024-01-16T16:58:40.325Z",
    "size": 11657,
    "path": "../public/tarify-na-tamozhennoe-oformlenie-gruzov/index.html.br"
  },
  "/tarify-na-tamozhennoe-oformlenie-gruzov/index.html.gz": {
    "type": "text/html; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"39de-9n1pWof+/l8aduXyHwubS7QegFg\"",
    "mtime": "2024-01-16T16:58:40.222Z",
    "size": 14814,
    "path": "../public/tarify-na-tamozhennoe-oformlenie-gruzov/index.html.gz"
  },
  "/traffic/index.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"12753-sSn+Nkt4c96p5BUVzfWFdbAwd0w\"",
    "mtime": "2024-01-16T16:57:54.769Z",
    "size": 75603,
    "path": "../public/traffic/index.html"
  },
  "/traffic/index.html.br": {
    "type": "text/html; charset=utf-8",
    "encoding": "br",
    "etag": "\"2c2f-D8iTlXdJi/KjVJR2yydFTFpaCp0\"",
    "mtime": "2024-01-16T16:58:40.406Z",
    "size": 11311,
    "path": "../public/traffic/index.html.br"
  },
  "/traffic/index.html.gz": {
    "type": "text/html; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"37f8-TXZDiT7M+BckcHQC0ComFbuSLyw\"",
    "mtime": "2024-01-16T16:58:40.328Z",
    "size": 14328,
    "path": "../public/traffic/index.html.gz"
  },
  "/vacancies/index.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"15516-r78BglQVxx7g1to64zTVqzjsA7Y\"",
    "mtime": "2024-01-16T16:57:47.333Z",
    "size": 87318,
    "path": "../public/vacancies/index.html"
  },
  "/vacancies/index.html.br": {
    "type": "text/html; charset=utf-8",
    "encoding": "br",
    "etag": "\"3565-LzMbhkvMyg5f9TMgNXFGjXKRKIE\"",
    "mtime": "2024-01-16T16:58:40.527Z",
    "size": 13669,
    "path": "../public/vacancies/index.html.br"
  },
  "/vacancies/index.html.gz": {
    "type": "text/html; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"428f-X7sxnMsR0j2ISkF2guUPWAIdO6E\"",
    "mtime": "2024-01-16T16:58:40.411Z",
    "size": 17039,
    "path": "../public/vacancies/index.html.gz"
  },
  "/images/advantages_icons/chain.svg": {
    "type": "image/svg+xml",
    "etag": "\"30c-bwa7TEbWknL3wI3bBaYkT8+9s/g\"",
    "mtime": "2023-08-05T13:18:44.772Z",
    "size": 780,
    "path": "../public/images/advantages_icons/chain.svg"
  },
  "/images/advantages_icons/checkbox.svg": {
    "type": "image/svg+xml",
    "etag": "\"8c1-oqM+a3zQZ49eOQVX6n8eBUtBBWE\"",
    "mtime": "2023-08-05T13:18:44.772Z",
    "size": 2241,
    "path": "../public/images/advantages_icons/checkbox.svg"
  },
  "/images/advantages_icons/checkbox.svg.br": {
    "type": "image/svg+xml",
    "encoding": "br",
    "etag": "\"337-Nk5gohnU5mm9qSEM1fxYRziY29w\"",
    "mtime": "2024-01-16T16:57:33.460Z",
    "size": 823,
    "path": "../public/images/advantages_icons/checkbox.svg.br"
  },
  "/images/advantages_icons/checkbox.svg.gz": {
    "type": "image/svg+xml",
    "encoding": "gzip",
    "etag": "\"3a8-et2wtH0ccIaWl2D3PqtfKDHBGO0\"",
    "mtime": "2024-01-16T16:57:33.454Z",
    "size": 936,
    "path": "../public/images/advantages_icons/checkbox.svg.gz"
  },
  "/images/advantages_icons/clock.svg": {
    "type": "image/svg+xml",
    "etag": "\"1ba-hXuQ7GlqqXXFku/wL3YrvzOWWDs\"",
    "mtime": "2023-08-05T13:18:44.772Z",
    "size": 442,
    "path": "../public/images/advantages_icons/clock.svg"
  },
  "/images/advantages_icons/distance.svg": {
    "type": "image/svg+xml",
    "etag": "\"275-XV14H95CuyI4Xl4Ls/Tl3+fQDTs\"",
    "mtime": "2023-08-05T13:18:44.772Z",
    "size": 629,
    "path": "../public/images/advantages_icons/distance.svg"
  },
  "/images/advantages_icons/price.svg": {
    "type": "image/svg+xml",
    "etag": "\"2bf-zso8S7NFUfDMis03yh/6sNoIl6U\"",
    "mtime": "2023-08-05T13:18:44.772Z",
    "size": 703,
    "path": "../public/images/advantages_icons/price.svg"
  },
  "/images/advantages_icons/security.svg": {
    "type": "image/svg+xml",
    "etag": "\"34b-C7BxjZvt/NEKm2N1kDIDadNQ4tU\"",
    "mtime": "2023-08-05T13:18:44.772Z",
    "size": 843,
    "path": "../public/images/advantages_icons/security.svg"
  },
  "/images/advantages_icons/ship.svg": {
    "type": "image/svg+xml",
    "etag": "\"4d8-XEwkB1tYXD3Sy70Nl7RaKm8sTdY\"",
    "mtime": "2023-08-05T13:18:44.772Z",
    "size": 1240,
    "path": "../public/images/advantages_icons/ship.svg"
  },
  "/images/advantages_icons/ship.svg.br": {
    "type": "image/svg+xml",
    "encoding": "br",
    "etag": "\"179-ZMdcocC+MtXSQSCgt8Ec6NnieMs\"",
    "mtime": "2024-01-16T16:57:33.469Z",
    "size": 377,
    "path": "../public/images/advantages_icons/ship.svg.br"
  },
  "/images/advantages_icons/ship.svg.gz": {
    "type": "image/svg+xml",
    "encoding": "gzip",
    "etag": "\"1ad-xW7767xAxglyJcAMf+ERubHME9g\"",
    "mtime": "2024-01-16T16:57:33.465Z",
    "size": 429,
    "path": "../public/images/advantages_icons/ship.svg.gz"
  },
  "/images/advantages_icons/speed.svg": {
    "type": "image/svg+xml",
    "etag": "\"2d1-Rjx8bBkqlRjhRR0f/fV5sB0ziUc\"",
    "mtime": "2023-08-05T13:18:44.772Z",
    "size": 721,
    "path": "../public/images/advantages_icons/speed.svg"
  },
  "/images/advantages_icons/standard.svg": {
    "type": "image/svg+xml",
    "etag": "\"23f-14PrZfFOVn4pZmO8k3Xg+P/chpo\"",
    "mtime": "2023-08-05T13:18:44.772Z",
    "size": 575,
    "path": "../public/images/advantages_icons/standard.svg"
  },
  "/images/advantages_slides/any_sea_line.png": {
    "type": "image/png",
    "etag": "\"c306a-CqmNYqKAs8zoXuLZiEtqjWRxlnw\"",
    "mtime": "2023-10-04T16:27:23.522Z",
    "size": 798826,
    "path": "../public/images/advantages_slides/any_sea_line.png"
  },
  "/images/advantages_slides/cargo_preparation.png": {
    "type": "image/png",
    "etag": "\"70d99-Ur5jiGTdB+TwFJivdS7Dl9kmYYM\"",
    "mtime": "2023-10-04T16:27:23.522Z",
    "size": 462233,
    "path": "../public/images/advantages_slides/cargo_preparation.png"
  },
  "/images/advantages_slides/general_cargo.png": {
    "type": "image/png",
    "etag": "\"995d3-MozGisIWF3U6FcrT/0STbufJUV0\"",
    "mtime": "2023-10-04T16:27:23.539Z",
    "size": 628179,
    "path": "../public/images/advantages_slides/general_cargo.png"
  },
  "/images/advantages_slides/partners.png": {
    "type": "image/png",
    "etag": "\"7f764-ZndtchwdBPCu92MAYT2LAGdJ1r0\"",
    "mtime": "2023-10-04T16:27:23.547Z",
    "size": 522084,
    "path": "../public/images/advantages_slides/partners.png"
  },
  "/images/advantages_slides/sanctions_delivery.png": {
    "type": "image/png",
    "etag": "\"e701d-neuDN2NfsOhWRk96FJvfz48IR94\"",
    "mtime": "2023-10-04T16:27:23.555Z",
    "size": 946205,
    "path": "../public/images/advantages_slides/sanctions_delivery.png"
  },
  "/_nuxt/about.538fcc39.js": {
    "type": "application/javascript",
    "etag": "\"c30fb-jS8Snh9Am02ZJu4+NPH/nmVKHas\"",
    "mtime": "2024-01-16T16:57:06.593Z",
    "size": 798971,
    "path": "../public/_nuxt/about.538fcc39.js"
  },
  "/_nuxt/about.538fcc39.js.br": {
    "type": "application/javascript",
    "encoding": "br",
    "etag": "\"260fc-DUbZQqVRa6mUiGZQjGO8KHLwaqo\"",
    "mtime": "2024-01-16T16:57:26.136Z",
    "size": 155900,
    "path": "../public/_nuxt/about.538fcc39.js.br"
  },
  "/_nuxt/about.538fcc39.js.gz": {
    "type": "application/javascript",
    "encoding": "gzip",
    "etag": "\"4c187-UupNNtdkmAPKsrP6XZP/WrpPOv0\"",
    "mtime": "2024-01-16T16:57:24.410Z",
    "size": 311687,
    "path": "../public/_nuxt/about.538fcc39.js.gz"
  },
  "/_nuxt/about.849e5cb8.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1d8b-m9DnBJHbxJzjEoUUUntbDz5fNZo\"",
    "mtime": "2024-01-16T16:57:06.568Z",
    "size": 7563,
    "path": "../public/_nuxt/about.849e5cb8.css"
  },
  "/_nuxt/about.849e5cb8.css.br": {
    "type": "text/css; charset=utf-8",
    "encoding": "br",
    "etag": "\"4e6-ifZcZrjCU15DZF3oB8m07yi/hrw\"",
    "mtime": "2024-01-16T16:57:26.152Z",
    "size": 1254,
    "path": "../public/_nuxt/about.849e5cb8.css.br"
  },
  "/_nuxt/about.849e5cb8.css.gz": {
    "type": "text/css; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"5df-wicy4D5IiNM/tJQvAH0VrIKkWxE\"",
    "mtime": "2024-01-16T16:57:26.138Z",
    "size": 1503,
    "path": "../public/_nuxt/about.849e5cb8.css.gz"
  },
  "/_nuxt/AdvantagesSliderSlide.306afbf3.js": {
    "type": "application/javascript",
    "etag": "\"1eb-zOup+i9ovkerlbmbc9MXf7eEdfY\"",
    "mtime": "2024-01-16T16:57:06.575Z",
    "size": 491,
    "path": "../public/_nuxt/AdvantagesSliderSlide.306afbf3.js"
  },
  "/_nuxt/AdvantagesSliderSlide.8faed871.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"629-nfbpW495LuL7hpgolAko+MJRclE\"",
    "mtime": "2024-01-16T16:57:06.548Z",
    "size": 1577,
    "path": "../public/_nuxt/AdvantagesSliderSlide.8faed871.css"
  },
  "/_nuxt/AdvantagesSliderSlide.8faed871.css.br": {
    "type": "text/css; charset=utf-8",
    "encoding": "br",
    "etag": "\"19b-YDaE0bGD8Oa8RffWrwu+RfIvdak\"",
    "mtime": "2024-01-16T16:57:26.159Z",
    "size": 411,
    "path": "../public/_nuxt/AdvantagesSliderSlide.8faed871.css.br"
  },
  "/_nuxt/AdvantagesSliderSlide.8faed871.css.gz": {
    "type": "text/css; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"220-jWXNhRfXjHFqhcXn98skgnVA9WM\"",
    "mtime": "2024-01-16T16:57:26.155Z",
    "size": 544,
    "path": "../public/_nuxt/AdvantagesSliderSlide.8faed871.css.gz"
  },
  "/_nuxt/arenda-konteynerov.cdfe011f.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"18a7-ITQ9i4kCC1UNA+RG+FH0BZzWpFA\"",
    "mtime": "2024-01-16T16:57:06.558Z",
    "size": 6311,
    "path": "../public/_nuxt/arenda-konteynerov.cdfe011f.css"
  },
  "/_nuxt/arenda-konteynerov.cdfe011f.css.br": {
    "type": "text/css; charset=utf-8",
    "encoding": "br",
    "etag": "\"548-wlpKSO15mdDFBle/JQCHYvmki6A\"",
    "mtime": "2024-01-16T16:57:26.172Z",
    "size": 1352,
    "path": "../public/_nuxt/arenda-konteynerov.cdfe011f.css.br"
  },
  "/_nuxt/arenda-konteynerov.cdfe011f.css.gz": {
    "type": "text/css; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"63f-R3DmZY9Mg3+LTEx0qrWyjDoAp1s\"",
    "mtime": "2024-01-16T16:57:26.162Z",
    "size": 1599,
    "path": "../public/_nuxt/arenda-konteynerov.cdfe011f.css.gz"
  },
  "/_nuxt/arenda-konteynerov.e2fffaa0.js": {
    "type": "application/javascript",
    "etag": "\"19b2-5TlCcWD54s7VzBZtK3m2NWtpU3M\"",
    "mtime": "2024-01-16T16:57:06.584Z",
    "size": 6578,
    "path": "../public/_nuxt/arenda-konteynerov.e2fffaa0.js"
  },
  "/_nuxt/arenda-konteynerov.e2fffaa0.js.br": {
    "type": "application/javascript",
    "encoding": "br",
    "etag": "\"8e4-QKP9Zm2jU9HmGTaf7/ysG6FiEWo\"",
    "mtime": "2024-01-16T16:57:26.190Z",
    "size": 2276,
    "path": "../public/_nuxt/arenda-konteynerov.e2fffaa0.js.br"
  },
  "/_nuxt/arenda-konteynerov.e2fffaa0.js.gz": {
    "type": "application/javascript",
    "encoding": "gzip",
    "etag": "\"a1f-LQ3cr+gXydg4f4mXDUPG6XkFCro\"",
    "mtime": "2024-01-16T16:57:26.175Z",
    "size": 2591,
    "path": "../public/_nuxt/arenda-konteynerov.e2fffaa0.js.gz"
  },
  "/_nuxt/arrow-diagonal.889b5b8a.svg": {
    "type": "image/svg+xml",
    "etag": "\"1226-bTMpKpnbMgIBd8D2OBWoqT1l9iY\"",
    "mtime": "2024-01-16T16:57:06.540Z",
    "size": 4646,
    "path": "../public/_nuxt/arrow-diagonal.889b5b8a.svg"
  },
  "/_nuxt/arrow-diagonal.889b5b8a.svg.br": {
    "type": "image/svg+xml",
    "encoding": "br",
    "etag": "\"5e6-BI1AItn3Tuot7uOKwQUfM8jREJc\"",
    "mtime": "2024-01-16T16:57:26.226Z",
    "size": 1510,
    "path": "../public/_nuxt/arrow-diagonal.889b5b8a.svg.br"
  },
  "/_nuxt/arrow-diagonal.889b5b8a.svg.gz": {
    "type": "image/svg+xml",
    "encoding": "gzip",
    "etag": "\"6ca-+bF7RXqhkQROPuVJSKFlVHquAi0\"",
    "mtime": "2024-01-16T16:57:26.219Z",
    "size": 1738,
    "path": "../public/_nuxt/arrow-diagonal.889b5b8a.svg.gz"
  },
  "/_nuxt/arrow-left.5eb093c1.svg": {
    "type": "image/svg+xml",
    "etag": "\"3dd-WYpsEqR7IEI2sxLeb4laoTdor7k\"",
    "mtime": "2024-01-16T16:57:06.539Z",
    "size": 989,
    "path": "../public/_nuxt/arrow-left.5eb093c1.svg"
  },
  "/_nuxt/arrow-long-right.3355f589.svg": {
    "type": "image/svg+xml",
    "etag": "\"485-dhsPNV9ylXlWC82WgM9l8Y2Tjsg\"",
    "mtime": "2024-01-16T16:57:06.539Z",
    "size": 1157,
    "path": "../public/_nuxt/arrow-long-right.3355f589.svg"
  },
  "/_nuxt/arrow-long-right.3355f589.svg.br": {
    "type": "image/svg+xml",
    "encoding": "br",
    "etag": "\"1f2-f/3ScKAAmmhNjdPT36DDmffGiZ8\"",
    "mtime": "2024-01-16T16:57:26.233Z",
    "size": 498,
    "path": "../public/_nuxt/arrow-long-right.3355f589.svg.br"
  },
  "/_nuxt/arrow-long-right.3355f589.svg.gz": {
    "type": "image/svg+xml",
    "encoding": "gzip",
    "etag": "\"22b-rQTITV+fEbtgJBCoicwr8BtQWTw\"",
    "mtime": "2024-01-16T16:57:26.229Z",
    "size": 555,
    "path": "../public/_nuxt/arrow-long-right.3355f589.svg.gz"
  },
  "/_nuxt/arrow-up-bold.8b0d721e.svg": {
    "type": "image/svg+xml",
    "etag": "\"47e-OXfPKONAxVynk97Bei0o3LYs8BE\"",
    "mtime": "2024-01-16T16:57:06.540Z",
    "size": 1150,
    "path": "../public/_nuxt/arrow-up-bold.8b0d721e.svg"
  },
  "/_nuxt/arrow-up-bold.8b0d721e.svg.br": {
    "type": "image/svg+xml",
    "encoding": "br",
    "etag": "\"1f0-pwLijHBFJu8qMPhz8LYq4mYXuT8\"",
    "mtime": "2024-01-16T16:57:26.239Z",
    "size": 496,
    "path": "../public/_nuxt/arrow-up-bold.8b0d721e.svg.br"
  },
  "/_nuxt/arrow-up-bold.8b0d721e.svg.gz": {
    "type": "image/svg+xml",
    "encoding": "gzip",
    "etag": "\"22e-R1oYAe2j7xyW7rdET4gtuTdgueM\"",
    "mtime": "2024-01-16T16:57:26.235Z",
    "size": 558,
    "path": "../public/_nuxt/arrow-up-bold.8b0d721e.svg.gz"
  },
  "/_nuxt/ArrowLeft.7bf653db.js": {
    "type": "application/javascript",
    "etag": "\"17c-dCr5QKDGBoTd+ddjsGbu2jY6xDs\"",
    "mtime": "2024-01-16T16:57:06.568Z",
    "size": 380,
    "path": "../public/_nuxt/ArrowLeft.7bf653db.js"
  },
  "/_nuxt/ArrowRight.5ec95005.js": {
    "type": "application/javascript",
    "etag": "\"17c-kEqGLcEmmGoGU7vPyBdEf8ges38\"",
    "mtime": "2024-01-16T16:57:06.568Z",
    "size": 380,
    "path": "../public/_nuxt/ArrowRight.5ec95005.js"
  },
  "/_nuxt/aviaperevozki.767fc480.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1618-CSyvQAak57SaZF1QaL35rccflhI\"",
    "mtime": "2024-01-16T16:57:06.558Z",
    "size": 5656,
    "path": "../public/_nuxt/aviaperevozki.767fc480.css"
  },
  "/_nuxt/aviaperevozki.767fc480.css.br": {
    "type": "text/css; charset=utf-8",
    "encoding": "br",
    "etag": "\"3a2-3Jm77Ayl9n1eeTeI3uGQ0RdszjU\"",
    "mtime": "2024-01-16T16:57:26.252Z",
    "size": 930,
    "path": "../public/_nuxt/aviaperevozki.767fc480.css.br"
  },
  "/_nuxt/aviaperevozki.767fc480.css.gz": {
    "type": "text/css; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"46d-xkJKK5XY0prfAcFe/CvtRHRPRBE\"",
    "mtime": "2024-01-16T16:57:26.243Z",
    "size": 1133,
    "path": "../public/_nuxt/aviaperevozki.767fc480.css.gz"
  },
  "/_nuxt/aviaperevozki.a6099c83.js": {
    "type": "application/javascript",
    "etag": "\"1658-uDOkwYgIgED+bBz0/jP6XgVSwWQ\"",
    "mtime": "2024-01-16T16:57:06.579Z",
    "size": 5720,
    "path": "../public/_nuxt/aviaperevozki.a6099c83.js"
  },
  "/_nuxt/aviaperevozki.a6099c83.js.br": {
    "type": "application/javascript",
    "encoding": "br",
    "etag": "\"863-1AJt+gmV1/4MyEJT/P2BAw19Neg\"",
    "mtime": "2024-01-16T16:57:26.267Z",
    "size": 2147,
    "path": "../public/_nuxt/aviaperevozki.a6099c83.js.br"
  },
  "/_nuxt/aviaperevozki.a6099c83.js.gz": {
    "type": "application/javascript",
    "encoding": "gzip",
    "etag": "\"a18-mgf/hDosYUQlE4xsu5z8l5joBmo\"",
    "mtime": "2024-01-16T16:57:26.255Z",
    "size": 2584,
    "path": "../public/_nuxt/aviaperevozki.a6099c83.js.gz"
  },
  "/_nuxt/avtomobilnye-perevozki.39c0828f.js": {
    "type": "application/javascript",
    "etag": "\"1743-HQWrC2vby+wnqcXB4A6S/6UrKhQ\"",
    "mtime": "2024-01-16T16:57:06.588Z",
    "size": 5955,
    "path": "../public/_nuxt/avtomobilnye-perevozki.39c0828f.js"
  },
  "/_nuxt/avtomobilnye-perevozki.39c0828f.js.br": {
    "type": "application/javascript",
    "encoding": "br",
    "etag": "\"876-xXQoT44D12Ky62ITNZUnhs/z0XI\"",
    "mtime": "2024-01-16T16:57:26.281Z",
    "size": 2166,
    "path": "../public/_nuxt/avtomobilnye-perevozki.39c0828f.js.br"
  },
  "/_nuxt/avtomobilnye-perevozki.39c0828f.js.gz": {
    "type": "application/javascript",
    "encoding": "gzip",
    "etag": "\"9e2-5VYcwLxKwnPAToyypG3TGtbFtnk\"",
    "mtime": "2024-01-16T16:57:26.269Z",
    "size": 2530,
    "path": "../public/_nuxt/avtomobilnye-perevozki.39c0828f.js.gz"
  },
  "/_nuxt/avtomobilnye-perevozki.cd2f5db1.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"150c-ic/9r1wOA3TN9i5bq6dNgow2C90\"",
    "mtime": "2024-01-16T16:57:06.558Z",
    "size": 5388,
    "path": "../public/_nuxt/avtomobilnye-perevozki.cd2f5db1.css"
  },
  "/_nuxt/avtomobilnye-perevozki.cd2f5db1.css.br": {
    "type": "text/css; charset=utf-8",
    "encoding": "br",
    "etag": "\"47c-ug/oXqjG+OPL0ieF60ed2UhbKsQ\"",
    "mtime": "2024-01-16T16:57:26.292Z",
    "size": 1148,
    "path": "../public/_nuxt/avtomobilnye-perevozki.cd2f5db1.css.br"
  },
  "/_nuxt/avtomobilnye-perevozki.cd2f5db1.css.gz": {
    "type": "text/css; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"542-dWVHshPT5iFA/VUjhf148tTnTqM\"",
    "mtime": "2024-01-16T16:57:26.284Z",
    "size": 1346,
    "path": "../public/_nuxt/avtomobilnye-perevozki.cd2f5db1.css.gz"
  },
  "/_nuxt/bars.fdd7c7de.svg": {
    "type": "image/svg+xml",
    "etag": "\"180-sr+Zja6E2iu99Fm3WomwJsKjjow\"",
    "mtime": "2024-01-16T16:57:06.540Z",
    "size": 384,
    "path": "../public/_nuxt/bars.fdd7c7de.svg"
  },
  "/_nuxt/BreadCrumbs.058581cb.js": {
    "type": "application/javascript",
    "etag": "\"735-2s8uNoi4ZBgl19luE7FroaCF2Cg\"",
    "mtime": "2024-01-16T16:57:06.582Z",
    "size": 1845,
    "path": "../public/_nuxt/BreadCrumbs.058581cb.js"
  },
  "/_nuxt/BreadCrumbs.058581cb.js.br": {
    "type": "application/javascript",
    "encoding": "br",
    "etag": "\"36d-P6MT92V524sMZ9Pb41H+J35TNJc\"",
    "mtime": "2024-01-16T16:57:26.300Z",
    "size": 877,
    "path": "../public/_nuxt/BreadCrumbs.058581cb.js.br"
  },
  "/_nuxt/BreadCrumbs.058581cb.js.gz": {
    "type": "application/javascript",
    "encoding": "gzip",
    "etag": "\"3d2-3coyioxUE80LgorcnpKhlOX2taU\"",
    "mtime": "2024-01-16T16:57:26.295Z",
    "size": 978,
    "path": "../public/_nuxt/BreadCrumbs.058581cb.js.gz"
  },
  "/_nuxt/BreadCrumbs.f8f3e895.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"239-ctoh4SmpXmxEzQ6Y8joq9YiUmrs\"",
    "mtime": "2024-01-16T16:57:06.558Z",
    "size": 569,
    "path": "../public/_nuxt/BreadCrumbs.f8f3e895.css"
  },
  "/_nuxt/CardsItem.130fe187.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1033-AbzoIhvGg2haCu3DDSU1M6xQ4N4\"",
    "mtime": "2024-01-16T16:57:06.568Z",
    "size": 4147,
    "path": "../public/_nuxt/CardsItem.130fe187.css"
  },
  "/_nuxt/CardsItem.130fe187.css.br": {
    "type": "text/css; charset=utf-8",
    "encoding": "br",
    "etag": "\"30c-w1XMs8UJ+dtrfnhU7DfAj626Eus\"",
    "mtime": "2024-01-16T16:57:26.310Z",
    "size": 780,
    "path": "../public/_nuxt/CardsItem.130fe187.css.br"
  },
  "/_nuxt/CardsItem.130fe187.css.gz": {
    "type": "text/css; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"3ae-ujIoKWUJ7rGKXjkFDB0L8fszTbQ\"",
    "mtime": "2024-01-16T16:57:26.303Z",
    "size": 942,
    "path": "../public/_nuxt/CardsItem.130fe187.css.gz"
  },
  "/_nuxt/CardsItem.21ba73d6.js": {
    "type": "application/javascript",
    "etag": "\"5ee-2iyz9yu2w8orYNYm3BTVQhnre4c\"",
    "mtime": "2024-01-16T16:57:06.582Z",
    "size": 1518,
    "path": "../public/_nuxt/CardsItem.21ba73d6.js"
  },
  "/_nuxt/CardsItem.21ba73d6.js.br": {
    "type": "application/javascript",
    "encoding": "br",
    "etag": "\"30c-J5qmXL9E+xKOlfB7IL87pFH57Fc\"",
    "mtime": "2024-01-16T16:57:26.317Z",
    "size": 780,
    "path": "../public/_nuxt/CardsItem.21ba73d6.js.br"
  },
  "/_nuxt/CardsItem.21ba73d6.js.gz": {
    "type": "application/javascript",
    "encoding": "gzip",
    "etag": "\"369-4XJgw5YaY6RXRE5htAoW3HWoqNk\"",
    "mtime": "2024-01-16T16:57:26.313Z",
    "size": 873,
    "path": "../public/_nuxt/CardsItem.21ba73d6.js.gz"
  },
  "/_nuxt/CitySlider.0ebb73b9.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"30a-fU9gTOUj5MYyIKf746HirNMU5YY\"",
    "mtime": "2024-01-16T16:57:06.558Z",
    "size": 778,
    "path": "../public/_nuxt/CitySlider.0ebb73b9.css"
  },
  "/_nuxt/CitySlider.cbaccc78.js": {
    "type": "application/javascript",
    "etag": "\"33b-LD4lw3jMhSngld34lDewVO6LQ40\"",
    "mtime": "2024-01-16T16:57:06.579Z",
    "size": 827,
    "path": "../public/_nuxt/CitySlider.cbaccc78.js"
  },
  "/_nuxt/close.e501a77d.svg": {
    "type": "image/svg+xml",
    "etag": "\"210-E0RMl2imlovTnVdMxtCkPatvFl4\"",
    "mtime": "2024-01-16T16:57:06.540Z",
    "size": 528,
    "path": "../public/_nuxt/close.e501a77d.svg"
  },
  "/_nuxt/CompanyLogo.02e3b768.js": {
    "type": "application/javascript",
    "etag": "\"17ab-LZpeM+9Sw7fPMpOQf93LFTephjs\"",
    "mtime": "2024-01-16T16:57:06.575Z",
    "size": 6059,
    "path": "../public/_nuxt/CompanyLogo.02e3b768.js"
  },
  "/_nuxt/CompanyLogo.02e3b768.js.br": {
    "type": "application/javascript",
    "encoding": "br",
    "etag": "\"95b-srauXKenyY6a7t90THgomIxzeQ0\"",
    "mtime": "2024-01-16T16:57:26.334Z",
    "size": 2395,
    "path": "../public/_nuxt/CompanyLogo.02e3b768.js.br"
  },
  "/_nuxt/CompanyLogo.02e3b768.js.gz": {
    "type": "application/javascript",
    "encoding": "gzip",
    "etag": "\"ae1-OQN2hMB6RUB3E8ozLnvvZs+fRzQ\"",
    "mtime": "2024-01-16T16:57:26.322Z",
    "size": 2785,
    "path": "../public/_nuxt/CompanyLogo.02e3b768.js.gz"
  },
  "/_nuxt/CompanyPresentation.9cab75c2.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"ad8-5Igi257vpTteZ90YxJZG6ZIpSYk\"",
    "mtime": "2024-01-16T16:57:06.548Z",
    "size": 2776,
    "path": "../public/_nuxt/CompanyPresentation.9cab75c2.css"
  },
  "/_nuxt/CompanyPresentation.9cab75c2.css.br": {
    "type": "text/css; charset=utf-8",
    "encoding": "br",
    "etag": "\"261-MhM82u4nDOIJG+CK+AfKNHO8buU\"",
    "mtime": "2024-01-16T16:57:26.342Z",
    "size": 609,
    "path": "../public/_nuxt/CompanyPresentation.9cab75c2.css.br"
  },
  "/_nuxt/CompanyPresentation.9cab75c2.css.gz": {
    "type": "text/css; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"311-sYJwgqh90x/OnRFBzEdEGgj15Fc\"",
    "mtime": "2024-01-16T16:57:26.336Z",
    "size": 785,
    "path": "../public/_nuxt/CompanyPresentation.9cab75c2.css.gz"
  },
  "/_nuxt/CompanyPresentation.f7351dfd.js": {
    "type": "application/javascript",
    "etag": "\"9de-xOW40t5SZUB2MyhhTljrVFQOjus\"",
    "mtime": "2024-01-16T16:57:06.575Z",
    "size": 2526,
    "path": "../public/_nuxt/CompanyPresentation.f7351dfd.js"
  },
  "/_nuxt/CompanyPresentation.f7351dfd.js.br": {
    "type": "application/javascript",
    "encoding": "br",
    "etag": "\"4b9-K7zbnz2fWoMk/jO3WhVyXArWos4\"",
    "mtime": "2024-01-16T16:57:26.351Z",
    "size": 1209,
    "path": "../public/_nuxt/CompanyPresentation.f7351dfd.js.br"
  },
  "/_nuxt/CompanyPresentation.f7351dfd.js.gz": {
    "type": "application/javascript",
    "encoding": "gzip",
    "etag": "\"58a-jXb8IW/cAVQu7U2iKK9FN0buThg\"",
    "mtime": "2024-01-16T16:57:26.344Z",
    "size": 1418,
    "path": "../public/_nuxt/CompanyPresentation.f7351dfd.js.gz"
  },
  "/_nuxt/CompanyProjects.4babdc82.js": {
    "type": "application/javascript",
    "etag": "\"442-rF7KatYQ5Gf2ryWR+Z6B38uTP88\"",
    "mtime": "2024-01-16T16:57:06.583Z",
    "size": 1090,
    "path": "../public/_nuxt/CompanyProjects.4babdc82.js"
  },
  "/_nuxt/CompanyProjects.4babdc82.js.br": {
    "type": "application/javascript",
    "encoding": "br",
    "etag": "\"246-Bv5Zjk1yqE4yva9lfN1SkWUcYXk\"",
    "mtime": "2024-01-16T16:57:26.358Z",
    "size": 582,
    "path": "../public/_nuxt/CompanyProjects.4babdc82.js.br"
  },
  "/_nuxt/CompanyProjects.4babdc82.js.gz": {
    "type": "application/javascript",
    "encoding": "gzip",
    "etag": "\"299-j2DOmvdGsGchw/JPznOZ83T9u3k\"",
    "mtime": "2024-01-16T16:57:26.354Z",
    "size": 665,
    "path": "../public/_nuxt/CompanyProjects.4babdc82.js.gz"
  },
  "/_nuxt/CompanyProjects.b9121989.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"40f-OYctKIPgRwPTB/Re6YkbzaqoF9k\"",
    "mtime": "2024-01-16T16:57:06.558Z",
    "size": 1039,
    "path": "../public/_nuxt/CompanyProjects.b9121989.css"
  },
  "/_nuxt/CompanyProjects.b9121989.css.br": {
    "type": "text/css; charset=utf-8",
    "encoding": "br",
    "etag": "\"fc-VfoB5ZrnxcC9ndw+nvUvrychQRs\"",
    "mtime": "2024-01-16T16:57:26.365Z",
    "size": 252,
    "path": "../public/_nuxt/CompanyProjects.b9121989.css.br"
  },
  "/_nuxt/CompanyProjects.b9121989.css.gz": {
    "type": "text/css; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"171-8ZcV3I8UqqG6aFDn23OxJRjotvA\"",
    "mtime": "2024-01-16T16:57:26.360Z",
    "size": 369,
    "path": "../public/_nuxt/CompanyProjects.b9121989.css.gz"
  },
  "/_nuxt/composables.cdd16945.js": {
    "type": "application/javascript",
    "etag": "\"4d-+hfxCGVQLEIv19/KXxeo3OVmb0g\"",
    "mtime": "2024-01-16T16:57:06.575Z",
    "size": 77,
    "path": "../public/_nuxt/composables.cdd16945.js"
  },
  "/_nuxt/ConclusionCard.3ee010c5.js": {
    "type": "application/javascript",
    "etag": "\"5bb-z/7NHLWb2LcHP2AEvS4Uvbd65NM\"",
    "mtime": "2024-01-16T16:57:06.588Z",
    "size": 1467,
    "path": "../public/_nuxt/ConclusionCard.3ee010c5.js"
  },
  "/_nuxt/ConclusionCard.3ee010c5.js.br": {
    "type": "application/javascript",
    "encoding": "br",
    "etag": "\"2d8-rwCdRSPbHJx9kSZDJGr5fKTBN+o\"",
    "mtime": "2024-01-16T16:57:26.372Z",
    "size": 728,
    "path": "../public/_nuxt/ConclusionCard.3ee010c5.js.br"
  },
  "/_nuxt/ConclusionCard.3ee010c5.js.gz": {
    "type": "application/javascript",
    "encoding": "gzip",
    "etag": "\"339-Cm6XRMh45h5pzheU9O2ySggyG4E\"",
    "mtime": "2024-01-16T16:57:26.368Z",
    "size": 825,
    "path": "../public/_nuxt/ConclusionCard.3ee010c5.js.gz"
  },
  "/_nuxt/ConclusionCard.99cd7cc9.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"a84-bxcNXmhTdMaHNup8+v4I9fdy8yA\"",
    "mtime": "2024-01-16T16:57:06.558Z",
    "size": 2692,
    "path": "../public/_nuxt/ConclusionCard.99cd7cc9.css"
  },
  "/_nuxt/ConclusionCard.99cd7cc9.css.br": {
    "type": "text/css; charset=utf-8",
    "encoding": "br",
    "etag": "\"26c-tD6kNTvm9A1baPWzF/WZnF/qLbo\"",
    "mtime": "2024-01-16T16:57:26.381Z",
    "size": 620,
    "path": "../public/_nuxt/ConclusionCard.99cd7cc9.css.br"
  },
  "/_nuxt/ConclusionCard.99cd7cc9.css.gz": {
    "type": "text/css; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"301-kO80JO9lhF3g/406BB10dJXfwWM\"",
    "mtime": "2024-01-16T16:57:26.375Z",
    "size": 769,
    "path": "../public/_nuxt/ConclusionCard.99cd7cc9.css.gz"
  },
  "/_nuxt/contacts.4a40ccdd.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1cbc-6m6N95NHWd5HcRyENUsDM3ipbXA\"",
    "mtime": "2024-01-16T16:57:06.559Z",
    "size": 7356,
    "path": "../public/_nuxt/contacts.4a40ccdd.css"
  },
  "/_nuxt/contacts.4a40ccdd.css.br": {
    "type": "text/css; charset=utf-8",
    "encoding": "br",
    "etag": "\"54d-IdnCnv1U/hV6XsckLXEAoCa5j44\"",
    "mtime": "2024-01-16T16:57:26.394Z",
    "size": 1357,
    "path": "../public/_nuxt/contacts.4a40ccdd.css.br"
  },
  "/_nuxt/contacts.4a40ccdd.css.gz": {
    "type": "text/css; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"651-M0XkhO9IajHArymYndA2FRxu9/0\"",
    "mtime": "2024-01-16T16:57:26.383Z",
    "size": 1617,
    "path": "../public/_nuxt/contacts.4a40ccdd.css.gz"
  },
  "/_nuxt/contacts.c409f403.js": {
    "type": "application/javascript",
    "etag": "\"1654-lFwkZ53OEtSkT3mZiX/NLkILexc\"",
    "mtime": "2024-01-16T16:57:06.582Z",
    "size": 5716,
    "path": "../public/_nuxt/contacts.c409f403.js"
  },
  "/_nuxt/contacts.c409f403.js.br": {
    "type": "application/javascript",
    "encoding": "br",
    "etag": "\"814-A+BxisPhOeyRbtP87RAdeuKOFCo\"",
    "mtime": "2024-01-16T16:57:26.406Z",
    "size": 2068,
    "path": "../public/_nuxt/contacts.c409f403.js.br"
  },
  "/_nuxt/contacts.c409f403.js.gz": {
    "type": "application/javascript",
    "encoding": "gzip",
    "etag": "\"93b-iLiRVE2gD/O5ihWLq+ZcM9ZNPR8\"",
    "mtime": "2024-01-16T16:57:26.397Z",
    "size": 2363,
    "path": "../public/_nuxt/contacts.c409f403.js.gz"
  },
  "/_nuxt/containers.1125e41d.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"32f0-3fzLrtq4IWfBZ1XV2uXYK0bWUkk\"",
    "mtime": "2024-01-16T16:57:06.549Z",
    "size": 13040,
    "path": "../public/_nuxt/containers.1125e41d.css"
  },
  "/_nuxt/containers.1125e41d.css.br": {
    "type": "text/css; charset=utf-8",
    "encoding": "br",
    "etag": "\"5ba-KG+OVjjkUNpT+gpookPV6Vhf4HU\"",
    "mtime": "2024-01-16T16:57:26.431Z",
    "size": 1466,
    "path": "../public/_nuxt/containers.1125e41d.css.br"
  },
  "/_nuxt/containers.1125e41d.css.gz": {
    "type": "text/css; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"711-F/7aBiOoxSJgTIOFZ4WwWjiTkfs\"",
    "mtime": "2024-01-16T16:57:26.409Z",
    "size": 1809,
    "path": "../public/_nuxt/containers.1125e41d.css.gz"
  },
  "/_nuxt/containers.25fc01ad.js": {
    "type": "application/javascript",
    "etag": "\"39e2-Wuc6EzppzbC2m4QY7YzHKpfeCls\"",
    "mtime": "2024-01-16T16:57:06.592Z",
    "size": 14818,
    "path": "../public/_nuxt/containers.25fc01ad.js"
  },
  "/_nuxt/containers.25fc01ad.js.br": {
    "type": "application/javascript",
    "encoding": "br",
    "etag": "\"d05-0pakr29DivPXIpG16/0pNdWFkPw\"",
    "mtime": "2024-01-16T16:57:26.460Z",
    "size": 3333,
    "path": "../public/_nuxt/containers.25fc01ad.js.br"
  },
  "/_nuxt/containers.25fc01ad.js.gz": {
    "type": "application/javascript",
    "encoding": "gzip",
    "etag": "\"f6e-Jn+LoVwL9jpCz+hL3pdJwNfxXdM\"",
    "mtime": "2024-01-16T16:57:26.434Z",
    "size": 3950,
    "path": "../public/_nuxt/containers.25fc01ad.js.gz"
  },
  "/_nuxt/default.5a9cdd1d.js": {
    "type": "application/javascript",
    "etag": "\"4c37-zob1ph6LO655JUNxp0eW9B7H7D0\"",
    "mtime": "2024-01-16T16:57:06.589Z",
    "size": 19511,
    "path": "../public/_nuxt/default.5a9cdd1d.js"
  },
  "/_nuxt/default.5a9cdd1d.js.br": {
    "type": "application/javascript",
    "encoding": "br",
    "etag": "\"1638-UHFAHpt2/DUtOVOFouzREkWbijY\"",
    "mtime": "2024-01-16T16:57:26.491Z",
    "size": 5688,
    "path": "../public/_nuxt/default.5a9cdd1d.js.br"
  },
  "/_nuxt/default.5a9cdd1d.js.gz": {
    "type": "application/javascript",
    "encoding": "gzip",
    "etag": "\"196e-+cus9fj7H1jDA6T30/7Oh0OzNLc\"",
    "mtime": "2024-01-16T16:57:26.462Z",
    "size": 6510,
    "path": "../public/_nuxt/default.5a9cdd1d.js.gz"
  },
  "/_nuxt/default.5d961726.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"93ed-oqBcxe8HV2O529Pj7UJDI7Fwv64\"",
    "mtime": "2024-01-16T16:57:06.568Z",
    "size": 37869,
    "path": "../public/_nuxt/default.5d961726.css"
  },
  "/_nuxt/default.5d961726.css.br": {
    "type": "text/css; charset=utf-8",
    "encoding": "br",
    "etag": "\"14c9-Sc4nSfVPPTRQhOv15JhpB8GCTUc\"",
    "mtime": "2024-01-16T16:57:26.547Z",
    "size": 5321,
    "path": "../public/_nuxt/default.5d961726.css.br"
  },
  "/_nuxt/default.5d961726.css.gz": {
    "type": "text/css; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"1779-sSxGis2T6AbtQauyYH976FT6q8Q\"",
    "mtime": "2024-01-16T16:57:26.494Z",
    "size": 6009,
    "path": "../public/_nuxt/default.5d961726.css.gz"
  },
  "/_nuxt/DeliveryCalculator.099f90ed.js": {
    "type": "application/javascript",
    "etag": "\"1bfe-bi0y4kgdzRSxqpJVajo/c9SXFZ0\"",
    "mtime": "2024-01-16T16:57:06.589Z",
    "size": 7166,
    "path": "../public/_nuxt/DeliveryCalculator.099f90ed.js"
  },
  "/_nuxt/DeliveryCalculator.099f90ed.js.br": {
    "type": "application/javascript",
    "encoding": "br",
    "etag": "\"933-3M6kgG3iyWGSxjmv4YO0t6gbPNs\"",
    "mtime": "2024-01-16T16:57:26.564Z",
    "size": 2355,
    "path": "../public/_nuxt/DeliveryCalculator.099f90ed.js.br"
  },
  "/_nuxt/DeliveryCalculator.099f90ed.js.gz": {
    "type": "application/javascript",
    "encoding": "gzip",
    "etag": "\"ab4-PAawwQ5zVMC66j2s+IufV/ESM4E\"",
    "mtime": "2024-01-16T16:57:26.550Z",
    "size": 2740,
    "path": "../public/_nuxt/DeliveryCalculator.099f90ed.js.gz"
  },
  "/_nuxt/DeliveryCalculator.6f7b3cfe.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"bec1-9XIWtxYQ7owcwGcLkArilJOpdhU\"",
    "mtime": "2024-01-16T16:57:06.568Z",
    "size": 48833,
    "path": "../public/_nuxt/DeliveryCalculator.6f7b3cfe.css"
  },
  "/_nuxt/DeliveryCalculator.6f7b3cfe.css.br": {
    "type": "text/css; charset=utf-8",
    "encoding": "br",
    "etag": "\"bce-POaujsR8k99myPG74Xbrnm14jBE\"",
    "mtime": "2024-01-16T16:57:26.655Z",
    "size": 3022,
    "path": "../public/_nuxt/DeliveryCalculator.6f7b3cfe.css.br"
  },
  "/_nuxt/DeliveryCalculator.6f7b3cfe.css.gz": {
    "type": "text/css; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"110c-T/HF7fhQQufNU0oESvqdq8gwDL0\"",
    "mtime": "2024-01-16T16:57:26.568Z",
    "size": 4364,
    "path": "../public/_nuxt/DeliveryCalculator.6f7b3cfe.css.gz"
  },
  "/_nuxt/dot.a3e0f2bd.svg": {
    "type": "image/svg+xml",
    "etag": "\"8e-sbM8OD18jtL73slwcVGqSAqgUzg\"",
    "mtime": "2024-01-16T16:57:06.539Z",
    "size": 142,
    "path": "../public/_nuxt/dot.a3e0f2bd.svg"
  },
  "/_nuxt/entry.92e2d9ec.js": {
    "type": "application/javascript",
    "etag": "\"24281-Wd4reMJ1KfMvUJYtGbfjgkh0onU\"",
    "mtime": "2024-01-16T16:57:06.592Z",
    "size": 148097,
    "path": "../public/_nuxt/entry.92e2d9ec.js"
  },
  "/_nuxt/entry.92e2d9ec.js.br": {
    "type": "application/javascript",
    "encoding": "br",
    "etag": "\"9a38-PquSEQHBitOJGJ+maT1MLqcD1u8\"",
    "mtime": "2024-01-16T16:57:26.995Z",
    "size": 39480,
    "path": "../public/_nuxt/entry.92e2d9ec.js.br"
  },
  "/_nuxt/entry.92e2d9ec.js.gz": {
    "type": "application/javascript",
    "encoding": "gzip",
    "etag": "\"b52d-YwRnl+Gu1ODu1cjShq/OFaGPZt4\"",
    "mtime": "2024-01-16T16:57:26.665Z",
    "size": 46381,
    "path": "../public/_nuxt/entry.92e2d9ec.js.gz"
  },
  "/_nuxt/entry.bd33f49f.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"19b5-NHi67vbj+dyLKO+2D4ZqAdik9dQ\"",
    "mtime": "2024-01-16T16:57:06.549Z",
    "size": 6581,
    "path": "../public/_nuxt/entry.bd33f49f.css"
  },
  "/_nuxt/entry.bd33f49f.css.br": {
    "type": "text/css; charset=utf-8",
    "encoding": "br",
    "etag": "\"6fc-6+o6IZ6+4uctfsY5eakvBsZ4AMM\"",
    "mtime": "2024-01-16T16:57:27.010Z",
    "size": 1788,
    "path": "../public/_nuxt/entry.bd33f49f.css.br"
  },
  "/_nuxt/entry.bd33f49f.css.gz": {
    "type": "text/css; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"833-PMXbcvw0sXrS7ctaKvWE+KlD6s0\"",
    "mtime": "2024-01-16T16:57:26.997Z",
    "size": 2099,
    "path": "../public/_nuxt/entry.bd33f49f.css.gz"
  },
  "/_nuxt/error-404.23f2309d.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"e2e-ivsbEmi48+s9HDOqtrSdWFvddYQ\"",
    "mtime": "2024-01-16T16:57:06.549Z",
    "size": 3630,
    "path": "../public/_nuxt/error-404.23f2309d.css"
  },
  "/_nuxt/error-404.23f2309d.css.br": {
    "type": "text/css; charset=utf-8",
    "encoding": "br",
    "etag": "\"3bc-+PtU7kusFUbB35un94ic6DnOJmo\"",
    "mtime": "2024-01-16T16:57:27.020Z",
    "size": 956,
    "path": "../public/_nuxt/error-404.23f2309d.css.br"
  },
  "/_nuxt/error-404.23f2309d.css.gz": {
    "type": "text/css; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"45c-2c/oojFgmMD5mLZNeQtK5aJXXfc\"",
    "mtime": "2024-01-16T16:57:27.012Z",
    "size": 1116,
    "path": "../public/_nuxt/error-404.23f2309d.css.gz"
  },
  "/_nuxt/error-404.e6deff7a.js": {
    "type": "application/javascript",
    "etag": "\"8f8-iPYVYD0PAxWiCqqLMnAQM6Kmry8\"",
    "mtime": "2024-01-16T16:57:06.585Z",
    "size": 2296,
    "path": "../public/_nuxt/error-404.e6deff7a.js"
  },
  "/_nuxt/error-404.e6deff7a.js.br": {
    "type": "application/javascript",
    "encoding": "br",
    "etag": "\"3fa-BANS6fZ6Iv/52kkRBaQ4DviU4/c\"",
    "mtime": "2024-01-16T16:57:27.028Z",
    "size": 1018,
    "path": "../public/_nuxt/error-404.e6deff7a.js.br"
  },
  "/_nuxt/error-404.e6deff7a.js.gz": {
    "type": "application/javascript",
    "encoding": "gzip",
    "etag": "\"4a3-2ThWVnZao8KU/3bjyaWwu1sV/mg\"",
    "mtime": "2024-01-16T16:57:27.022Z",
    "size": 1187,
    "path": "../public/_nuxt/error-404.e6deff7a.js.gz"
  },
  "/_nuxt/error-500.432f3673.js": {
    "type": "application/javascript",
    "etag": "\"77c-Uew68CNOWh9S/eT5wB4Ni6mAHeE\"",
    "mtime": "2024-01-16T16:57:06.576Z",
    "size": 1916,
    "path": "../public/_nuxt/error-500.432f3673.js"
  },
  "/_nuxt/error-500.432f3673.js.br": {
    "type": "application/javascript",
    "encoding": "br",
    "etag": "\"362-f0IiueS5kQ6aA7FNuezF29RiDDA\"",
    "mtime": "2024-01-16T16:57:27.035Z",
    "size": 866,
    "path": "../public/_nuxt/error-500.432f3673.js.br"
  },
  "/_nuxt/error-500.432f3673.js.gz": {
    "type": "application/javascript",
    "encoding": "gzip",
    "etag": "\"3f3-/sGE9tPMeuLIgX+tWMDX9fNs1kQ\"",
    "mtime": "2024-01-16T16:57:27.030Z",
    "size": 1011,
    "path": "../public/_nuxt/error-500.432f3673.js.gz"
  },
  "/_nuxt/error-500.aa16ed4d.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"79e-7j4Tsx89siDo85YoIs0XqsPWmPI\"",
    "mtime": "2024-01-16T16:57:06.558Z",
    "size": 1950,
    "path": "../public/_nuxt/error-500.aa16ed4d.css"
  },
  "/_nuxt/error-500.aa16ed4d.css.br": {
    "type": "text/css; charset=utf-8",
    "encoding": "br",
    "etag": "\"274-yZsjQ6WX4i4AD/3U8BrVJdDowoE\"",
    "mtime": "2024-01-16T16:57:27.042Z",
    "size": 628,
    "path": "../public/_nuxt/error-500.aa16ed4d.css.br"
  },
  "/_nuxt/error-500.aa16ed4d.css.gz": {
    "type": "text/css; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"2df-1g7CAl0G7RZF74B7FhcEMrRa/hU\"",
    "mtime": "2024-01-16T16:57:27.037Z",
    "size": 735,
    "path": "../public/_nuxt/error-500.aa16ed4d.css.gz"
  },
  "/_nuxt/error-component.86f64a1b.js": {
    "type": "application/javascript",
    "etag": "\"50c-t+MfEJXLLIklK3kERAV6Z9wKJzo\"",
    "mtime": "2024-01-16T16:57:06.568Z",
    "size": 1292,
    "path": "../public/_nuxt/error-component.86f64a1b.js"
  },
  "/_nuxt/error-component.86f64a1b.js.br": {
    "type": "application/javascript",
    "encoding": "br",
    "etag": "\"240-R05Jeds7kxUXdwbWKKzD/NOrnVE\"",
    "mtime": "2024-01-16T16:57:27.049Z",
    "size": 576,
    "path": "../public/_nuxt/error-component.86f64a1b.js.br"
  },
  "/_nuxt/error-component.86f64a1b.js.gz": {
    "type": "application/javascript",
    "encoding": "gzip",
    "etag": "\"293-FxKYnJOgSaiomn4z8kJlaeeLBeI\"",
    "mtime": "2024-01-16T16:57:27.045Z",
    "size": 659,
    "path": "../public/_nuxt/error-component.86f64a1b.js.gz"
  },
  "/_nuxt/eula.1c85cd01.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"4a7-/zJF9+thLcm+09yQOOwJ7E7pzGw\"",
    "mtime": "2024-01-16T16:57:06.549Z",
    "size": 1191,
    "path": "../public/_nuxt/eula.1c85cd01.css"
  },
  "/_nuxt/eula.1c85cd01.css.br": {
    "type": "text/css; charset=utf-8",
    "encoding": "br",
    "etag": "\"157-cQkW9V75zjN6hWJ3zv7VZ/QuUQs\"",
    "mtime": "2024-01-16T16:57:27.056Z",
    "size": 343,
    "path": "../public/_nuxt/eula.1c85cd01.css.br"
  },
  "/_nuxt/eula.1c85cd01.css.gz": {
    "type": "text/css; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"1be-rfrE9w9ecDXAiv7U5pm72UGZLTI\"",
    "mtime": "2024-01-16T16:57:27.052Z",
    "size": 446,
    "path": "../public/_nuxt/eula.1c85cd01.css.gz"
  },
  "/_nuxt/eula.574902e4.js": {
    "type": "application/javascript",
    "etag": "\"202b-P9lncQTwnMFoimYBdU8Crt76Yj0\"",
    "mtime": "2024-01-16T16:57:06.592Z",
    "size": 8235,
    "path": "../public/_nuxt/eula.574902e4.js"
  },
  "/_nuxt/eula.574902e4.js.br": {
    "type": "application/javascript",
    "encoding": "br",
    "etag": "\"820-X3oIR4imUZbUbDt87iIYnSjMPts\"",
    "mtime": "2024-01-16T16:57:27.075Z",
    "size": 2080,
    "path": "../public/_nuxt/eula.574902e4.js.br"
  },
  "/_nuxt/eula.574902e4.js.gz": {
    "type": "application/javascript",
    "encoding": "gzip",
    "etag": "\"9fc-diZnGi+7pAnKCSTMD01zcBF6RYY\"",
    "mtime": "2024-01-16T16:57:27.058Z",
    "size": 2556,
    "path": "../public/_nuxt/eula.574902e4.js.gz"
  },
  "/_nuxt/expand.d5924fc7.js": {
    "type": "application/javascript",
    "etag": "\"6b-2Omfc1WEjqooCbvtta/VxqNudAU\"",
    "mtime": "2024-01-16T16:57:06.568Z",
    "size": 107,
    "path": "../public/_nuxt/expand.d5924fc7.js"
  },
  "/_nuxt/expand.de76a8a6.svg": {
    "type": "image/svg+xml",
    "etag": "\"3f6-nawAYHdFsa3yxhkRlq5ObVRdH+A\"",
    "mtime": "2024-01-16T16:57:06.539Z",
    "size": 1014,
    "path": "../public/_nuxt/expand.de76a8a6.svg"
  },
  "/_nuxt/ExpandArrow.f433b200.js": {
    "type": "application/javascript",
    "etag": "\"4b4-qGw+XEuRztUIEmMHe7ISTs5QZWY\"",
    "mtime": "2024-01-16T16:57:06.569Z",
    "size": 1204,
    "path": "../public/_nuxt/ExpandArrow.f433b200.js"
  },
  "/_nuxt/ExpandArrow.f433b200.js.br": {
    "type": "application/javascript",
    "encoding": "br",
    "etag": "\"258-1hKxwbwcUSCot+N7biJ9/eRt0N4\"",
    "mtime": "2024-01-16T16:57:27.083Z",
    "size": 600,
    "path": "../public/_nuxt/ExpandArrow.f433b200.js.br"
  },
  "/_nuxt/ExpandArrow.f433b200.js.gz": {
    "type": "application/javascript",
    "encoding": "gzip",
    "etag": "\"29e-bL2OoV1EwrWTKJwhAb6492Iog8s\"",
    "mtime": "2024-01-16T16:57:27.078Z",
    "size": 670,
    "path": "../public/_nuxt/ExpandArrow.f433b200.js.gz"
  },
  "/_nuxt/fetch.729afdc7.js": {
    "type": "application/javascript",
    "etag": "\"2c5c-p/1J11PaNOfXg6+8uGQxbkjoPME\"",
    "mtime": "2024-01-16T16:57:06.575Z",
    "size": 11356,
    "path": "../public/_nuxt/fetch.729afdc7.js"
  },
  "/_nuxt/fetch.729afdc7.js.br": {
    "type": "application/javascript",
    "encoding": "br",
    "etag": "\"100b-bzJHbBZpe1cHxllamhAKKnGnD4g\"",
    "mtime": "2024-01-16T16:57:27.105Z",
    "size": 4107,
    "path": "../public/_nuxt/fetch.729afdc7.js.br"
  },
  "/_nuxt/fetch.729afdc7.js.gz": {
    "type": "application/javascript",
    "encoding": "gzip",
    "etag": "\"1209-Sl7YDVwzOehytKRMaOr953BZ+y0\"",
    "mtime": "2024-01-16T16:57:27.085Z",
    "size": 4617,
    "path": "../public/_nuxt/fetch.729afdc7.js.gz"
  },
  "/_nuxt/FullScreenImg.2e9d2d89.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"142-+Ioj7Wbn1FHJ/ia/4D0Hn36ghqg\"",
    "mtime": "2024-01-16T16:57:06.549Z",
    "size": 322,
    "path": "../public/_nuxt/FullScreenImg.2e9d2d89.css"
  },
  "/_nuxt/FullScreenImg.7ac6520a.js": {
    "type": "application/javascript",
    "etag": "\"15d-cApLiel4BqILJ6/Jl+ltTOylhAA\"",
    "mtime": "2024-01-16T16:57:06.588Z",
    "size": 349,
    "path": "../public/_nuxt/FullScreenImg.7ac6520a.js"
  },
  "/_nuxt/GoUp.0189a16b.js": {
    "type": "application/javascript",
    "etag": "\"1f6-0M0IaB/Cx/5zvOOMJ4CYr1pZwho\"",
    "mtime": "2024-01-16T16:57:06.576Z",
    "size": 502,
    "path": "../public/_nuxt/GoUp.0189a16b.js"
  },
  "/_nuxt/GoUp.f4e49fcd.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"144-esuUbKQqNCHVmRGyanGALpbGtDs\"",
    "mtime": "2024-01-16T16:57:06.548Z",
    "size": 324,
    "path": "../public/_nuxt/GoUp.f4e49fcd.css"
  },
  "/_nuxt/IBMPlexSans-Bold.856c41d7.ttf": {
    "type": "font/ttf",
    "etag": "\"2ae60-bIKbngkE3zOZ56wD7hux9ywtXlI\"",
    "mtime": "2024-01-16T16:57:06.539Z",
    "size": 175712,
    "path": "../public/_nuxt/IBMPlexSans-Bold.856c41d7.ttf"
  },
  "/_nuxt/IBMPlexSans-Bold.856c41d7.ttf.br": {
    "type": "font/ttf",
    "encoding": "br",
    "etag": "\"f36b-AUku/t0TNx0lcV1lYnVfgvX8SoY\"",
    "mtime": "2024-01-16T16:57:27.797Z",
    "size": 62315,
    "path": "../public/_nuxt/IBMPlexSans-Bold.856c41d7.ttf.br"
  },
  "/_nuxt/IBMPlexSans-Bold.856c41d7.ttf.gz": {
    "type": "font/ttf",
    "encoding": "gzip",
    "etag": "\"12a88-z969I4AV0uOoPSgFIc6wAdiI4dM\"",
    "mtime": "2024-01-16T16:57:27.138Z",
    "size": 76424,
    "path": "../public/_nuxt/IBMPlexSans-Bold.856c41d7.ttf.gz"
  },
  "/_nuxt/IBMPlexSans-Medium.11ddde88.ttf": {
    "type": "font/ttf",
    "etag": "\"2b3d0-dU87NAZjjSuNoOcd1ESVV63Q7M8\"",
    "mtime": "2024-01-16T16:57:06.539Z",
    "size": 177104,
    "path": "../public/_nuxt/IBMPlexSans-Medium.11ddde88.ttf"
  },
  "/_nuxt/IBMPlexSans-Medium.11ddde88.ttf.br": {
    "type": "font/ttf",
    "encoding": "br",
    "etag": "\"10155-fn1Qhf023X3JSVoLVK9us571hzI\"",
    "mtime": "2024-01-16T16:57:28.419Z",
    "size": 65877,
    "path": "../public/_nuxt/IBMPlexSans-Medium.11ddde88.ttf.br"
  },
  "/_nuxt/IBMPlexSans-Medium.11ddde88.ttf.gz": {
    "type": "font/ttf",
    "encoding": "gzip",
    "etag": "\"13d3a-WWOkeeaSoCQtOkrAC0pvX7xBHJc\"",
    "mtime": "2024-01-16T16:57:27.827Z",
    "size": 81210,
    "path": "../public/_nuxt/IBMPlexSans-Medium.11ddde88.ttf.gz"
  },
  "/_nuxt/IBMPlexSans-Regular.852def7e.ttf": {
    "type": "font/ttf",
    "etag": "\"2ae84-jhjhnJY/1rCJViABDRpK28LSyvc\"",
    "mtime": "2024-01-16T16:57:06.539Z",
    "size": 175748,
    "path": "../public/_nuxt/IBMPlexSans-Regular.852def7e.ttf"
  },
  "/_nuxt/IBMPlexSans-Regular.852def7e.ttf.br": {
    "type": "font/ttf",
    "encoding": "br",
    "etag": "\"f498-ZbGavTJthSJkT9Hv9o7E4EveUlE\"",
    "mtime": "2024-01-16T16:57:28.940Z",
    "size": 62616,
    "path": "../public/_nuxt/IBMPlexSans-Regular.852def7e.ttf.br"
  },
  "/_nuxt/IBMPlexSans-Regular.852def7e.ttf.gz": {
    "type": "font/ttf",
    "encoding": "gzip",
    "etag": "\"12cb9-S/7Y/17iMtm1z5nPb8G64nZd8g8\"",
    "mtime": "2024-01-16T16:57:28.446Z",
    "size": 76985,
    "path": "../public/_nuxt/IBMPlexSans-Regular.852def7e.ttf.gz"
  },
  "/_nuxt/IBMPlexSans-SemiBold.c8ba79a3.ttf": {
    "type": "font/ttf",
    "etag": "\"2b478-Rb7Y7IKRJljKNJ1jMghKEiZvzHo\"",
    "mtime": "2024-01-16T16:57:06.533Z",
    "size": 177272,
    "path": "../public/_nuxt/IBMPlexSans-SemiBold.c8ba79a3.ttf"
  },
  "/_nuxt/IBMPlexSans-SemiBold.c8ba79a3.ttf.br": {
    "type": "font/ttf",
    "encoding": "br",
    "etag": "\"10210-2WVkPs0G1lTr26hftnqOsYsffQI\"",
    "mtime": "2024-01-16T16:57:29.553Z",
    "size": 66064,
    "path": "../public/_nuxt/IBMPlexSans-SemiBold.c8ba79a3.ttf.br"
  },
  "/_nuxt/IBMPlexSans-SemiBold.c8ba79a3.ttf.gz": {
    "type": "font/ttf",
    "encoding": "gzip",
    "etag": "\"13dee-l5OGXeSTB+crBdc5tv823qMg2GQ\"",
    "mtime": "2024-01-16T16:57:28.967Z",
    "size": 81390,
    "path": "../public/_nuxt/IBMPlexSans-SemiBold.c8ba79a3.ttf.gz"
  },
  "/_nuxt/index.174fedea.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"45e-VLeVHlidep0jENb9dGrnkxKEtr0\"",
    "mtime": "2024-01-16T16:57:06.551Z",
    "size": 1118,
    "path": "../public/_nuxt/index.174fedea.css"
  },
  "/_nuxt/index.174fedea.css.br": {
    "type": "text/css; charset=utf-8",
    "encoding": "br",
    "etag": "\"118-AlwlWL0ACsx38CvaPrM2gdasAMQ\"",
    "mtime": "2024-01-16T16:57:29.559Z",
    "size": 280,
    "path": "../public/_nuxt/index.174fedea.css.br"
  },
  "/_nuxt/index.174fedea.css.gz": {
    "type": "text/css; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"162-vB6tovPhIEazzHuG11rMpPQcpJw\"",
    "mtime": "2024-01-16T16:57:29.555Z",
    "size": 354,
    "path": "../public/_nuxt/index.174fedea.css.gz"
  },
  "/_nuxt/index.505bf805.js": {
    "type": "application/javascript",
    "etag": "\"7002e-RaFHMocxXoR4Mxeu5kRU/IZbNY8\"",
    "mtime": "2024-01-16T16:57:06.592Z",
    "size": 458798,
    "path": "../public/_nuxt/index.505bf805.js"
  },
  "/_nuxt/index.505bf805.js.br": {
    "type": "application/javascript",
    "encoding": "br",
    "etag": "\"1e81f-3UwlYSch1m+vYdGmlSBalHUmygk\"",
    "mtime": "2024-01-16T16:57:30.641Z",
    "size": 124959,
    "path": "../public/_nuxt/index.505bf805.js.br"
  },
  "/_nuxt/index.505bf805.js.gz": {
    "type": "application/javascript",
    "encoding": "gzip",
    "etag": "\"25dcb-gieJryliygg9e3nQbh0DrCQ+I9s\"",
    "mtime": "2024-01-16T16:57:29.608Z",
    "size": 155083,
    "path": "../public/_nuxt/index.505bf805.js.gz"
  },
  "/_nuxt/index.57cdc245.js": {
    "type": "application/javascript",
    "etag": "\"96b-1gYUmlCXjxuZh5cAkjGld1ewSJU\"",
    "mtime": "2024-01-16T16:57:06.568Z",
    "size": 2411,
    "path": "../public/_nuxt/index.57cdc245.js"
  },
  "/_nuxt/index.57cdc245.js.br": {
    "type": "application/javascript",
    "encoding": "br",
    "etag": "\"3e0-neIO30aCAsfpywn+DSqZUoL52Rs\"",
    "mtime": "2024-01-16T16:57:30.649Z",
    "size": 992,
    "path": "../public/_nuxt/index.57cdc245.js.br"
  },
  "/_nuxt/index.57cdc245.js.gz": {
    "type": "application/javascript",
    "encoding": "gzip",
    "etag": "\"45f-ssGqZQkqG/N5L5Q0+mkTwz/qVKs\"",
    "mtime": "2024-01-16T16:57:30.643Z",
    "size": 1119,
    "path": "../public/_nuxt/index.57cdc245.js.gz"
  },
  "/_nuxt/index.616860d2.js": {
    "type": "application/javascript",
    "etag": "\"798-v7RNsDczs+p8Gy2579MhgGf1Eww\"",
    "mtime": "2024-01-16T16:57:06.582Z",
    "size": 1944,
    "path": "../public/_nuxt/index.616860d2.js"
  },
  "/_nuxt/index.616860d2.js.br": {
    "type": "application/javascript",
    "encoding": "br",
    "etag": "\"301-EV9jfPF3MH3BjVlj1zuHB5yxdYQ\"",
    "mtime": "2024-01-16T16:57:30.656Z",
    "size": 769,
    "path": "../public/_nuxt/index.616860d2.js.br"
  },
  "/_nuxt/index.616860d2.js.gz": {
    "type": "application/javascript",
    "encoding": "gzip",
    "etag": "\"359-t31b2J6EmHVoivJyCBNos4Zmhtg\"",
    "mtime": "2024-01-16T16:57:30.651Z",
    "size": 857,
    "path": "../public/_nuxt/index.616860d2.js.gz"
  },
  "/_nuxt/index.ab2d9c62.js": {
    "type": "application/javascript",
    "etag": "\"347-U6KpZo0+nu0tl1GntvcFJokCfj4\"",
    "mtime": "2024-01-16T16:57:06.575Z",
    "size": 839,
    "path": "../public/_nuxt/index.ab2d9c62.js"
  },
  "/_nuxt/index.bf7e362f.js": {
    "type": "application/javascript",
    "etag": "\"340-YfWOuwMT7TbB1no31zzx+5l0G/Y\"",
    "mtime": "2024-01-16T16:57:06.571Z",
    "size": 832,
    "path": "../public/_nuxt/index.bf7e362f.js"
  },
  "/_nuxt/index.c0fe31de.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"d787-gS+Wh0P0VeT/N8tMoaGrtEJQSXY\"",
    "mtime": "2024-01-16T16:57:06.568Z",
    "size": 55175,
    "path": "../public/_nuxt/index.c0fe31de.css"
  },
  "/_nuxt/index.c0fe31de.css.br": {
    "type": "text/css; charset=utf-8",
    "encoding": "br",
    "etag": "\"12e7-LDGoTmmRIRok8ecuR7iNhGw0jCM\"",
    "mtime": "2024-01-16T16:57:30.753Z",
    "size": 4839,
    "path": "../public/_nuxt/index.c0fe31de.css.br"
  },
  "/_nuxt/index.c0fe31de.css.gz": {
    "type": "text/css; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"1985-hEcO7RooksBUSUYLU0en10dMcvA\"",
    "mtime": "2024-01-16T16:57:30.661Z",
    "size": 6533,
    "path": "../public/_nuxt/index.c0fe31de.css.gz"
  },
  "/_nuxt/index.e8ce400e.js": {
    "type": "application/javascript",
    "etag": "\"2be-D8TFBrKxzMmpbghjCTPP+F+yyr8\"",
    "mtime": "2024-01-16T16:57:06.568Z",
    "size": 702,
    "path": "../public/_nuxt/index.e8ce400e.js"
  },
  "/_nuxt/info.ab8754de.svg": {
    "type": "image/svg+xml",
    "etag": "\"8d0-LFxV10zKb49LuekhaYK6SftHWLQ\"",
    "mtime": "2024-01-16T16:57:06.540Z",
    "size": 2256,
    "path": "../public/_nuxt/info.ab8754de.svg"
  },
  "/_nuxt/info.ab8754de.svg.br": {
    "type": "image/svg+xml",
    "encoding": "br",
    "etag": "\"3b9-sLGRmS063a0PNCW+P6eCjkzAawg\"",
    "mtime": "2024-01-16T16:57:30.762Z",
    "size": 953,
    "path": "../public/_nuxt/info.ab8754de.svg.br"
  },
  "/_nuxt/info.ab8754de.svg.gz": {
    "type": "image/svg+xml",
    "encoding": "gzip",
    "etag": "\"418-XYXk2vEdGjPS8WdI2BYzAi6zgRc\"",
    "mtime": "2024-01-16T16:57:30.756Z",
    "size": 1048,
    "path": "../public/_nuxt/info.ab8754de.svg.gz"
  },
  "/_nuxt/inkoterms-2020.4fde3689.js": {
    "type": "application/javascript",
    "etag": "\"17e0-qtcH3FLQZ0R6V5LjKcEZ6Y+25B4\"",
    "mtime": "2024-01-16T16:57:06.585Z",
    "size": 6112,
    "path": "../public/_nuxt/inkoterms-2020.4fde3689.js"
  },
  "/_nuxt/inkoterms-2020.4fde3689.js.br": {
    "type": "application/javascript",
    "encoding": "br",
    "etag": "\"811-6GdRLlPbinx9e9j5P5FfCHZ6mbs\"",
    "mtime": "2024-01-16T16:57:30.777Z",
    "size": 2065,
    "path": "../public/_nuxt/inkoterms-2020.4fde3689.js.br"
  },
  "/_nuxt/inkoterms-2020.4fde3689.js.gz": {
    "type": "application/javascript",
    "encoding": "gzip",
    "etag": "\"9c5-L6Mx8MkDQDTFmfYlCz3I7o2Y2pk\"",
    "mtime": "2024-01-16T16:57:30.764Z",
    "size": 2501,
    "path": "../public/_nuxt/inkoterms-2020.4fde3689.js.gz"
  },
  "/_nuxt/inkoterms-2020.fcf9c5af.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"5e5-aNEhmuj6vc1drwTrIF0TmYDwx8M\"",
    "mtime": "2024-01-16T16:57:06.548Z",
    "size": 1509,
    "path": "../public/_nuxt/inkoterms-2020.fcf9c5af.css"
  },
  "/_nuxt/inkoterms-2020.fcf9c5af.css.br": {
    "type": "text/css; charset=utf-8",
    "encoding": "br",
    "etag": "\"1a6-iCjablLrStOXsvDRBWG5l9xact8\"",
    "mtime": "2024-01-16T16:57:30.783Z",
    "size": 422,
    "path": "../public/_nuxt/inkoterms-2020.fcf9c5af.css.br"
  },
  "/_nuxt/inkoterms-2020.fcf9c5af.css.gz": {
    "type": "text/css; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"21f-lGBksAQpwH54LRXdi+2XkP4E2HU\"",
    "mtime": "2024-01-16T16:57:30.779Z",
    "size": 543,
    "path": "../public/_nuxt/inkoterms-2020.fcf9c5af.css.gz"
  },
  "/_nuxt/KeyIndicators.37ad2432.js": {
    "type": "application/javascript",
    "etag": "\"222d-06h9SC06+iyJnmiCT2CeqTnB3BA\"",
    "mtime": "2024-01-16T16:57:06.588Z",
    "size": 8749,
    "path": "../public/_nuxt/KeyIndicators.37ad2432.js"
  },
  "/_nuxt/KeyIndicators.37ad2432.js.br": {
    "type": "application/javascript",
    "encoding": "br",
    "etag": "\"b6e-0gcXJZ2FCC5nw/2JBsSRT6I/1q8\"",
    "mtime": "2024-01-16T16:57:30.827Z",
    "size": 2926,
    "path": "../public/_nuxt/KeyIndicators.37ad2432.js.br"
  },
  "/_nuxt/KeyIndicators.37ad2432.js.gz": {
    "type": "application/javascript",
    "encoding": "gzip",
    "etag": "\"c9f-zZtzutBl1KVFGZz4O1WaT+x421g\"",
    "mtime": "2024-01-16T16:57:30.813Z",
    "size": 3231,
    "path": "../public/_nuxt/KeyIndicators.37ad2432.js.gz"
  },
  "/_nuxt/KeyIndicators.c558aa72.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"568-VaCOyAWf83hDfaxMje6aD88VoAs\"",
    "mtime": "2024-01-16T16:57:06.558Z",
    "size": 1384,
    "path": "../public/_nuxt/KeyIndicators.c558aa72.css"
  },
  "/_nuxt/KeyIndicators.c558aa72.css.br": {
    "type": "text/css; charset=utf-8",
    "encoding": "br",
    "etag": "\"14d-beQcx2W+mtr68sHVeS5Q3Jpy2RU\"",
    "mtime": "2024-01-16T16:57:30.833Z",
    "size": 333,
    "path": "../public/_nuxt/KeyIndicators.c558aa72.css.br"
  },
  "/_nuxt/KeyIndicators.c558aa72.css.gz": {
    "type": "text/css; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"1ad-9Z9sDqA6Um7uHaW2u71ifzC8agI\"",
    "mtime": "2024-01-16T16:57:30.829Z",
    "size": 429,
    "path": "../public/_nuxt/KeyIndicators.c558aa72.css.gz"
  },
  "/_nuxt/LinkUnderline.28137004.js": {
    "type": "application/javascript",
    "etag": "\"14b3-XoxUQZ2W+9RRcVTRi43yosVurlk\"",
    "mtime": "2024-01-16T16:57:06.577Z",
    "size": 5299,
    "path": "../public/_nuxt/LinkUnderline.28137004.js"
  },
  "/_nuxt/LinkUnderline.28137004.js.br": {
    "type": "application/javascript",
    "encoding": "br",
    "etag": "\"761-UitoIUUC9kO1SJOYtBihqyWwj8Y\"",
    "mtime": "2024-01-16T16:57:30.845Z",
    "size": 1889,
    "path": "../public/_nuxt/LinkUnderline.28137004.js.br"
  },
  "/_nuxt/LinkUnderline.28137004.js.gz": {
    "type": "application/javascript",
    "encoding": "gzip",
    "etag": "\"89c-Vts/GLNuIJeriCpZUxy6pembQaM\"",
    "mtime": "2024-01-16T16:57:30.836Z",
    "size": 2204,
    "path": "../public/_nuxt/LinkUnderline.28137004.js.gz"
  },
  "/_nuxt/LinkUnderline.ec606954.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"2ad-eEupzF+PID1PLG2ofGWO5jtErbg\"",
    "mtime": "2024-01-16T16:57:06.542Z",
    "size": 685,
    "path": "../public/_nuxt/LinkUnderline.ec606954.css"
  },
  "/_nuxt/logo-yellow-red.efbf8528.svg": {
    "type": "image/svg+xml",
    "etag": "\"16eb-g16kqJYlpppr8qFgFh9O0UvpsvE\"",
    "mtime": "2024-01-16T16:57:06.540Z",
    "size": 5867,
    "path": "../public/_nuxt/logo-yellow-red.efbf8528.svg"
  },
  "/_nuxt/logo-yellow-red.efbf8528.svg.br": {
    "type": "image/svg+xml",
    "encoding": "br",
    "etag": "\"83c-jjh9dcYkQBdwAg7P+mF3Mr055VY\"",
    "mtime": "2024-01-16T16:57:30.860Z",
    "size": 2108,
    "path": "../public/_nuxt/logo-yellow-red.efbf8528.svg.br"
  },
  "/_nuxt/logo-yellow-red.efbf8528.svg.gz": {
    "type": "image/svg+xml",
    "encoding": "gzip",
    "etag": "\"961-wzORJRD3wpOZ8T5YgYdW/hIuMYg\"",
    "mtime": "2024-01-16T16:57:30.848Z",
    "size": 2401,
    "path": "../public/_nuxt/logo-yellow-red.efbf8528.svg.gz"
  },
  "/_nuxt/logoBlack.445f085f.svg": {
    "type": "image/svg+xml",
    "etag": "\"1919-xjyFob2NcZSSgsUn2rIJwBRB7fg\"",
    "mtime": "2024-01-16T16:57:06.540Z",
    "size": 6425,
    "path": "../public/_nuxt/logoBlack.445f085f.svg"
  },
  "/_nuxt/logoBlack.445f085f.svg.br": {
    "type": "image/svg+xml",
    "encoding": "br",
    "etag": "\"917-vlTXnfzzQswvhUJLv6jpzqOvwME\"",
    "mtime": "2024-01-16T16:57:30.875Z",
    "size": 2327,
    "path": "../public/_nuxt/logoBlack.445f085f.svg.br"
  },
  "/_nuxt/logoBlack.445f085f.svg.gz": {
    "type": "image/svg+xml",
    "encoding": "gzip",
    "etag": "\"aa2-iZS2oNvEeARc8qA8mtgJgyOGrDg\"",
    "mtime": "2024-01-16T16:57:30.863Z",
    "size": 2722,
    "path": "../public/_nuxt/logoBlack.445f085f.svg.gz"
  },
  "/_nuxt/maska.b0acde3f.js": {
    "type": "application/javascript",
    "etag": "\"18c1-MoCodIYGANLSAeGyg8PTP2u5LhE\"",
    "mtime": "2024-01-16T16:57:06.568Z",
    "size": 6337,
    "path": "../public/_nuxt/maska.b0acde3f.js"
  },
  "/_nuxt/maska.b0acde3f.js.br": {
    "type": "application/javascript",
    "encoding": "br",
    "etag": "\"8b8-kYs0dAnc+ms3dOMISkIIOHPN6bM\"",
    "mtime": "2024-01-16T16:57:30.889Z",
    "size": 2232,
    "path": "../public/_nuxt/maska.b0acde3f.js.br"
  },
  "/_nuxt/maska.b0acde3f.js.gz": {
    "type": "application/javascript",
    "encoding": "gzip",
    "etag": "\"98e-Db6LXsRrdrXHflOM3oC4AsimzL0\"",
    "mtime": "2024-01-16T16:57:30.877Z",
    "size": 2446,
    "path": "../public/_nuxt/maska.b0acde3f.js.gz"
  },
  "/_nuxt/moon.4bc1f6d3.svg": {
    "type": "image/svg+xml",
    "etag": "\"61d-NpMPkDI767n7VwaAswWrDzNn98c\"",
    "mtime": "2024-01-16T16:57:06.540Z",
    "size": 1565,
    "path": "../public/_nuxt/moon.4bc1f6d3.svg"
  },
  "/_nuxt/moon.4bc1f6d3.svg.br": {
    "type": "image/svg+xml",
    "encoding": "br",
    "etag": "\"2ee-XqkAhE7agQ3TsI3JLMLk3E+fMgM\"",
    "mtime": "2024-01-16T16:57:30.896Z",
    "size": 750,
    "path": "../public/_nuxt/moon.4bc1f6d3.svg.br"
  },
  "/_nuxt/moon.4bc1f6d3.svg.gz": {
    "type": "image/svg+xml",
    "encoding": "gzip",
    "etag": "\"34b-Dyw2FfB0EWa0SKAa7kNO5ug+nps\"",
    "mtime": "2024-01-16T16:57:30.891Z",
    "size": 843,
    "path": "../public/_nuxt/moon.4bc1f6d3.svg.gz"
  },
  "/_nuxt/morskie-gruzoperevozki.01c35a65.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1f25-ZH0z39QJZjAqPUwmYsUSFL0uSzs\"",
    "mtime": "2024-01-16T16:57:06.558Z",
    "size": 7973,
    "path": "../public/_nuxt/morskie-gruzoperevozki.01c35a65.css"
  },
  "/_nuxt/morskie-gruzoperevozki.01c35a65.css.br": {
    "type": "text/css; charset=utf-8",
    "encoding": "br",
    "etag": "\"4be-DNsBwf7YO6OjFJ1L10vhVuwuzUo\"",
    "mtime": "2024-01-16T16:57:30.914Z",
    "size": 1214,
    "path": "../public/_nuxt/morskie-gruzoperevozki.01c35a65.css.br"
  },
  "/_nuxt/morskie-gruzoperevozki.01c35a65.css.gz": {
    "type": "text/css; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"5bc-GpX7i/aIS1XffGjFrKxVrbLeEcE\"",
    "mtime": "2024-01-16T16:57:30.898Z",
    "size": 1468,
    "path": "../public/_nuxt/morskie-gruzoperevozki.01c35a65.css.gz"
  },
  "/_nuxt/morskie-gruzoperevozki.2682cf5e.js": {
    "type": "application/javascript",
    "etag": "\"2efed-DlniGIENTagRbOeyhpvQYZdRAJc\"",
    "mtime": "2024-01-16T16:57:06.584Z",
    "size": 192493,
    "path": "../public/_nuxt/morskie-gruzoperevozki.2682cf5e.js"
  },
  "/_nuxt/morskie-gruzoperevozki.2682cf5e.js.br": {
    "type": "application/javascript",
    "encoding": "br",
    "etag": "\"df8a-lByy64B+9w3lW4+PCziBJXqp/P0\"",
    "mtime": "2024-01-16T16:57:31.398Z",
    "size": 57226,
    "path": "../public/_nuxt/morskie-gruzoperevozki.2682cf5e.js.br"
  },
  "/_nuxt/morskie-gruzoperevozki.2682cf5e.js.gz": {
    "type": "application/javascript",
    "encoding": "gzip",
    "etag": "\"10e5a-VVCaOH8hwFNzusyng9A0E5oCgA8\"",
    "mtime": "2024-01-16T16:57:30.933Z",
    "size": 69210,
    "path": "../public/_nuxt/morskie-gruzoperevozki.2682cf5e.js.gz"
  },
  "/_nuxt/multimodalnye-perevozki.8ce520cf.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"f64-mKVutE9EcNm8ZrHPJhZX/54O2qY\"",
    "mtime": "2024-01-16T16:57:06.548Z",
    "size": 3940,
    "path": "../public/_nuxt/multimodalnye-perevozki.8ce520cf.css"
  },
  "/_nuxt/multimodalnye-perevozki.8ce520cf.css.br": {
    "type": "text/css; charset=utf-8",
    "encoding": "br",
    "etag": "\"2fd-+27Cubj9bb9zn2fZqhQJlRmfinA\"",
    "mtime": "2024-01-16T16:57:31.408Z",
    "size": 765,
    "path": "../public/_nuxt/multimodalnye-perevozki.8ce520cf.css.br"
  },
  "/_nuxt/multimodalnye-perevozki.8ce520cf.css.gz": {
    "type": "text/css; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"3a7-QNNvXUcUaHSKCB1oq4ZD348MGz8\"",
    "mtime": "2024-01-16T16:57:31.401Z",
    "size": 935,
    "path": "../public/_nuxt/multimodalnye-perevozki.8ce520cf.css.gz"
  },
  "/_nuxt/multimodalnye-perevozki.e082169d.js": {
    "type": "application/javascript",
    "etag": "\"4664b-biukf8T4nUpOxTzQSek94qjzCfA\"",
    "mtime": "2024-01-16T16:57:06.592Z",
    "size": 288331,
    "path": "../public/_nuxt/multimodalnye-perevozki.e082169d.js"
  },
  "/_nuxt/multimodalnye-perevozki.e082169d.js.br": {
    "type": "application/javascript",
    "encoding": "br",
    "etag": "\"13379-aoQuPGgWI9Uwf4tnQFIikO7grZ0\"",
    "mtime": "2024-01-16T16:57:32.170Z",
    "size": 78713,
    "path": "../public/_nuxt/multimodalnye-perevozki.e082169d.js.br"
  },
  "/_nuxt/multimodalnye-perevozki.e082169d.js.gz": {
    "type": "application/javascript",
    "encoding": "gzip",
    "etag": "\"18bd3-3QwEf5iNh5KUwYM/rpIbQdZWoXw\"",
    "mtime": "2024-01-16T16:57:31.440Z",
    "size": 101331,
    "path": "../public/_nuxt/multimodalnye-perevozki.e082169d.js.gz"
  },
  "/_nuxt/NewsMain.24db2669.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"9d8-OHIhgiWYf6aaomJSn4HXvoLPVAc\"",
    "mtime": "2024-01-16T16:57:06.548Z",
    "size": 2520,
    "path": "../public/_nuxt/NewsMain.24db2669.css"
  },
  "/_nuxt/NewsMain.24db2669.css.br": {
    "type": "text/css; charset=utf-8",
    "encoding": "br",
    "etag": "\"275-Ypayo/V5/Bst4V8SDCu9BZj5HUU\"",
    "mtime": "2024-01-16T16:57:32.178Z",
    "size": 629,
    "path": "../public/_nuxt/NewsMain.24db2669.css.br"
  },
  "/_nuxt/NewsMain.24db2669.css.gz": {
    "type": "text/css; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"302-kPJC7UWWlazTmtUc5ieIxPq4ASs\"",
    "mtime": "2024-01-16T16:57:32.172Z",
    "size": 770,
    "path": "../public/_nuxt/NewsMain.24db2669.css.gz"
  },
  "/_nuxt/NewsMain.e4c9db12.js": {
    "type": "application/javascript",
    "etag": "\"9d0-so/Zu/4P0StJyrWaQxvXaYUAzSQ\"",
    "mtime": "2024-01-16T16:57:06.583Z",
    "size": 2512,
    "path": "../public/_nuxt/NewsMain.e4c9db12.js"
  },
  "/_nuxt/NewsMain.e4c9db12.js.br": {
    "type": "application/javascript",
    "encoding": "br",
    "etag": "\"444-0LDZHzwa7xH+VAuLAY43E8VpRhw\"",
    "mtime": "2024-01-16T16:57:32.187Z",
    "size": 1092,
    "path": "../public/_nuxt/NewsMain.e4c9db12.js.br"
  },
  "/_nuxt/NewsMain.e4c9db12.js.gz": {
    "type": "application/javascript",
    "encoding": "gzip",
    "etag": "\"4d9-l2czqW53MGfo5/8HUQaDsZ2/V/M\"",
    "mtime": "2024-01-16T16:57:32.180Z",
    "size": 1241,
    "path": "../public/_nuxt/NewsMain.e4c9db12.js.gz"
  },
  "/_nuxt/NewsPage.1efbcdbb.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"317a-VRhWGi5yaYy+s6kaUhCrSHQuLDE\"",
    "mtime": "2024-01-16T16:57:06.558Z",
    "size": 12666,
    "path": "../public/_nuxt/NewsPage.1efbcdbb.css"
  },
  "/_nuxt/NewsPage.1efbcdbb.css.br": {
    "type": "text/css; charset=utf-8",
    "encoding": "br",
    "etag": "\"6b5-qFdIo0nzU49djW85P4onbIWFEY8\"",
    "mtime": "2024-01-16T16:57:32.209Z",
    "size": 1717,
    "path": "../public/_nuxt/NewsPage.1efbcdbb.css.br"
  },
  "/_nuxt/NewsPage.1efbcdbb.css.gz": {
    "type": "text/css; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"7ce-HMwUmap+87LSYo/KWiDeG9i6sSA\"",
    "mtime": "2024-01-16T16:57:32.189Z",
    "size": 1998,
    "path": "../public/_nuxt/NewsPage.1efbcdbb.css.gz"
  },
  "/_nuxt/NewsPage.28a0c626.js": {
    "type": "application/javascript",
    "etag": "\"12e8-ZYiupvGw1JftZ0V5l3jrnpI2rAs\"",
    "mtime": "2024-01-16T16:57:06.583Z",
    "size": 4840,
    "path": "../public/_nuxt/NewsPage.28a0c626.js"
  },
  "/_nuxt/NewsPage.28a0c626.js.br": {
    "type": "application/javascript",
    "encoding": "br",
    "etag": "\"6c5-dx01PTJOUvxP/7YwhXSQU/ZAqhY\"",
    "mtime": "2024-01-16T16:57:32.220Z",
    "size": 1733,
    "path": "../public/_nuxt/NewsPage.28a0c626.js.br"
  },
  "/_nuxt/NewsPage.28a0c626.js.gz": {
    "type": "application/javascript",
    "encoding": "gzip",
    "etag": "\"795-q5bsKnnDoSEp26gpxH9yDTm3w3U\"",
    "mtime": "2024-01-16T16:57:32.211Z",
    "size": 1941,
    "path": "../public/_nuxt/NewsPage.28a0c626.js.gz"
  },
  "/_nuxt/nuxt-img.aa236df6.js": {
    "type": "application/javascript",
    "etag": "\"ad2-vYkd2gu6p6hHVH4pyNKO/aeJ0nk\"",
    "mtime": "2024-01-16T16:57:06.575Z",
    "size": 2770,
    "path": "../public/_nuxt/nuxt-img.aa236df6.js"
  },
  "/_nuxt/nuxt-img.aa236df6.js.br": {
    "type": "application/javascript",
    "encoding": "br",
    "etag": "\"3df-aBSoae5Q23xCcBTcgpitgdqznw4\"",
    "mtime": "2024-01-16T16:57:32.229Z",
    "size": 991,
    "path": "../public/_nuxt/nuxt-img.aa236df6.js.br"
  },
  "/_nuxt/nuxt-img.aa236df6.js.gz": {
    "type": "application/javascript",
    "encoding": "gzip",
    "etag": "\"43f-zFj+00wR8Eov+/dQU6t64LGbbzQ\"",
    "mtime": "2024-01-16T16:57:32.222Z",
    "size": 1087,
    "path": "../public/_nuxt/nuxt-img.aa236df6.js.gz"
  },
  "/_nuxt/nuxt-link.11b8d193.js": {
    "type": "application/javascript",
    "etag": "\"1108-p/H+59RJHckvubG6KwWb+h+PinY\"",
    "mtime": "2024-01-16T16:57:06.568Z",
    "size": 4360,
    "path": "../public/_nuxt/nuxt-link.11b8d193.js"
  },
  "/_nuxt/nuxt-link.11b8d193.js.br": {
    "type": "application/javascript",
    "encoding": "br",
    "etag": "\"691-ZQPyH177GhMgCW1LDKXtUkJoA0k\"",
    "mtime": "2024-01-16T16:57:32.240Z",
    "size": 1681,
    "path": "../public/_nuxt/nuxt-link.11b8d193.js.br"
  },
  "/_nuxt/nuxt-link.11b8d193.js.gz": {
    "type": "application/javascript",
    "encoding": "gzip",
    "etag": "\"73d-nn/wpbNrRzd51G9miAdk3XGyyO4\"",
    "mtime": "2024-01-16T16:57:32.231Z",
    "size": 1853,
    "path": "../public/_nuxt/nuxt-link.11b8d193.js.gz"
  },
  "/_nuxt/phone.e28f8ce4.svg": {
    "type": "image/svg+xml",
    "etag": "\"2cb-NG0LueVyH1jCW2518aZ9GLBdATU\"",
    "mtime": "2024-01-16T16:57:06.539Z",
    "size": 715,
    "path": "../public/_nuxt/phone.e28f8ce4.svg"
  },
  "/_nuxt/politika-konfidencialnosti.89e718a2.js": {
    "type": "application/javascript",
    "etag": "\"a000-2bOy69YIDg4kJrncJYK6c0vsGiE\"",
    "mtime": "2024-01-16T16:57:06.588Z",
    "size": 40960,
    "path": "../public/_nuxt/politika-konfidencialnosti.89e718a2.js"
  },
  "/_nuxt/politika-konfidencialnosti.89e718a2.js.br": {
    "type": "application/javascript",
    "encoding": "br",
    "etag": "\"1991-MCBcue/3WVo8+t/2Ynjv/+aMxwQ\"",
    "mtime": "2024-01-16T16:57:32.317Z",
    "size": 6545,
    "path": "../public/_nuxt/politika-konfidencialnosti.89e718a2.js.br"
  },
  "/_nuxt/politika-konfidencialnosti.89e718a2.js.gz": {
    "type": "application/javascript",
    "encoding": "gzip",
    "etag": "\"1e3c-N3qRDMKTGX1CSQalP8/B2KmPnho\"",
    "mtime": "2024-01-16T16:57:32.246Z",
    "size": 7740,
    "path": "../public/_nuxt/politika-konfidencialnosti.89e718a2.js.gz"
  },
  "/_nuxt/politika-konfidencialnosti.90e05964.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"4a7-LmqMj8sXtwDFMBGCFH0Hhyok2A8\"",
    "mtime": "2024-01-16T16:57:06.548Z",
    "size": 1191,
    "path": "../public/_nuxt/politika-konfidencialnosti.90e05964.css"
  },
  "/_nuxt/politika-konfidencialnosti.90e05964.css.br": {
    "type": "text/css; charset=utf-8",
    "encoding": "br",
    "etag": "\"158-H/jOTX1A541fOusgPMa2WiM47os\"",
    "mtime": "2024-01-16T16:57:32.323Z",
    "size": 344,
    "path": "../public/_nuxt/politika-konfidencialnosti.90e05964.css.br"
  },
  "/_nuxt/politika-konfidencialnosti.90e05964.css.gz": {
    "type": "text/css; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"1bd-QqOivMYqH/piy7Qxcjc7Eb7lnm8\"",
    "mtime": "2024-01-16T16:57:32.319Z",
    "size": 445,
    "path": "../public/_nuxt/politika-konfidencialnosti.90e05964.css.gz"
  },
  "/_nuxt/postscribe.7848faa7.js": {
    "type": "application/javascript",
    "etag": "\"4660-eQHodSizr7mqRi7NyjV7tOK6sL8\"",
    "mtime": "2024-01-16T16:57:06.583Z",
    "size": 18016,
    "path": "../public/_nuxt/postscribe.7848faa7.js"
  },
  "/_nuxt/postscribe.7848faa7.js.br": {
    "type": "application/javascript",
    "encoding": "br",
    "etag": "\"1623-3tJ1NLYHBoIfdNRNxRHcMgNoWqg\"",
    "mtime": "2024-01-16T16:57:32.354Z",
    "size": 5667,
    "path": "../public/_nuxt/postscribe.7848faa7.js.br"
  },
  "/_nuxt/postscribe.7848faa7.js.gz": {
    "type": "application/javascript",
    "encoding": "gzip",
    "etag": "\"18c9-LmJ032LsK5clzalw3NnwUoKVXpE\"",
    "mtime": "2024-01-16T16:57:32.326Z",
    "size": 6345,
    "path": "../public/_nuxt/postscribe.7848faa7.js.gz"
  },
  "/_nuxt/project-logistics.495aec67.js": {
    "type": "application/javascript",
    "etag": "\"1b63-o7P1ihpS5F2U5vrE6bK0v6DmXu8\"",
    "mtime": "2024-01-16T16:57:06.583Z",
    "size": 7011,
    "path": "../public/_nuxt/project-logistics.495aec67.js"
  },
  "/_nuxt/project-logistics.495aec67.js.br": {
    "type": "application/javascript",
    "encoding": "br",
    "etag": "\"9c6-kKtTPyltCPLaNkNwL4GFIMaNjbg\"",
    "mtime": "2024-01-16T16:57:32.370Z",
    "size": 2502,
    "path": "../public/_nuxt/project-logistics.495aec67.js.br"
  },
  "/_nuxt/project-logistics.495aec67.js.gz": {
    "type": "application/javascript",
    "encoding": "gzip",
    "etag": "\"b60-z35wafRMioZ5kI6xkGqLw4ebgmQ\"",
    "mtime": "2024-01-16T16:57:32.356Z",
    "size": 2912,
    "path": "../public/_nuxt/project-logistics.495aec67.js.gz"
  },
  "/_nuxt/project-logistics.5064d42b.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"205d-YBAbDLcaUv5twZqCKicsomaz6jQ\"",
    "mtime": "2024-01-16T16:57:06.548Z",
    "size": 8285,
    "path": "../public/_nuxt/project-logistics.5064d42b.css"
  },
  "/_nuxt/project-logistics.5064d42b.css.br": {
    "type": "text/css; charset=utf-8",
    "encoding": "br",
    "etag": "\"550-k60mKzuiZSQ6F/iqIjlKcHXgOwE\"",
    "mtime": "2024-01-16T16:57:32.386Z",
    "size": 1360,
    "path": "../public/_nuxt/project-logistics.5064d42b.css.br"
  },
  "/_nuxt/project-logistics.5064d42b.css.gz": {
    "type": "text/css; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"66b-D46CNANWUY1doNYQ2/++arDM2xI\"",
    "mtime": "2024-01-16T16:57:32.372Z",
    "size": 1643,
    "path": "../public/_nuxt/project-logistics.5064d42b.css.gz"
  },
  "/_nuxt/ProjectsItem.cad433f0.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"68d-ERkgJ8E7NKZwaFZ7gzx+rNS/WJ0\"",
    "mtime": "2024-01-16T16:57:06.558Z",
    "size": 1677,
    "path": "../public/_nuxt/ProjectsItem.cad433f0.css"
  },
  "/_nuxt/ProjectsItem.cad433f0.css.br": {
    "type": "text/css; charset=utf-8",
    "encoding": "br",
    "etag": "\"1e3-G9hBGOxGcKnv98XireFAMCj4KQM\"",
    "mtime": "2024-01-16T16:57:32.393Z",
    "size": 483,
    "path": "../public/_nuxt/ProjectsItem.cad433f0.css.br"
  },
  "/_nuxt/ProjectsItem.cad433f0.css.gz": {
    "type": "text/css; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"24e-3zcyyo29fOD3x/f7LiTqGst93es\"",
    "mtime": "2024-01-16T16:57:32.388Z",
    "size": 590,
    "path": "../public/_nuxt/ProjectsItem.cad433f0.css.gz"
  },
  "/_nuxt/ProjectsItem.ec5924ab.js": {
    "type": "application/javascript",
    "etag": "\"381-AVxtnddY+4EWwCfQl6IIt/6YH5Y\"",
    "mtime": "2024-01-16T16:57:06.586Z",
    "size": 897,
    "path": "../public/_nuxt/ProjectsItem.ec5924ab.js"
  },
  "/_nuxt/ReturnCallForm.116c88e3.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1035-Mt8hegI9gX2EuDlLg+eMebwv1lw\"",
    "mtime": "2024-01-16T16:57:06.558Z",
    "size": 4149,
    "path": "../public/_nuxt/ReturnCallForm.116c88e3.css"
  },
  "/_nuxt/ReturnCallForm.116c88e3.css.br": {
    "type": "text/css; charset=utf-8",
    "encoding": "br",
    "etag": "\"381-eh6U6K3augTiCSO0g/NSYnZrJQc\"",
    "mtime": "2024-01-16T16:57:32.403Z",
    "size": 897,
    "path": "../public/_nuxt/ReturnCallForm.116c88e3.css.br"
  },
  "/_nuxt/ReturnCallForm.116c88e3.css.gz": {
    "type": "text/css; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"462-FADeo9l6IDH3pr8IwbWgIB9XQ2c\"",
    "mtime": "2024-01-16T16:57:32.396Z",
    "size": 1122,
    "path": "../public/_nuxt/ReturnCallForm.116c88e3.css.gz"
  },
  "/_nuxt/ReturnCallForm.2abcb534.js": {
    "type": "application/javascript",
    "etag": "\"197e-BMzhE074PZg4pLCoIrDeFTqjHXM\"",
    "mtime": "2024-01-16T16:57:06.589Z",
    "size": 6526,
    "path": "../public/_nuxt/ReturnCallForm.2abcb534.js"
  },
  "/_nuxt/ReturnCallForm.2abcb534.js.br": {
    "type": "application/javascript",
    "encoding": "br",
    "etag": "\"90e-4nZc6E9Kl+dmc+BO9tj03ep4NTU\"",
    "mtime": "2024-01-16T16:57:32.417Z",
    "size": 2318,
    "path": "../public/_nuxt/ReturnCallForm.2abcb534.js.br"
  },
  "/_nuxt/ReturnCallForm.2abcb534.js.gz": {
    "type": "application/javascript",
    "encoding": "gzip",
    "etag": "\"aa2-jvgWW9lWQf+SfJbS8cLaYusWC6Y\"",
    "mtime": "2024-01-16T16:57:32.405Z",
    "size": 2722,
    "path": "../public/_nuxt/ReturnCallForm.2abcb534.js.gz"
  },
  "/_nuxt/rhino.858bfab7.svg": {
    "type": "image/svg+xml",
    "etag": "\"426e-s+J8n/36pJjRbhBgZ8GgMbgJ4Jw\"",
    "mtime": "2024-01-16T16:57:06.540Z",
    "size": 17006,
    "path": "../public/_nuxt/rhino.858bfab7.svg"
  },
  "/_nuxt/rhino.858bfab7.svg.br": {
    "type": "image/svg+xml",
    "encoding": "br",
    "etag": "\"1a4d-g7kp2KXkUv5lX3qLPKDLfIHaUWU\"",
    "mtime": "2024-01-16T16:57:32.449Z",
    "size": 6733,
    "path": "../public/_nuxt/rhino.858bfab7.svg.br"
  },
  "/_nuxt/rhino.858bfab7.svg.gz": {
    "type": "image/svg+xml",
    "encoding": "gzip",
    "etag": "\"1ed1-RVFytm/2PCtixZybWpuuooTaKvo\"",
    "mtime": "2024-01-16T16:57:32.420Z",
    "size": 7889,
    "path": "../public/_nuxt/rhino.858bfab7.svg.gz"
  },
  "/_nuxt/ServiceAdvantages.41e76ea5.js": {
    "type": "application/javascript",
    "etag": "\"2de-oboqRgrEL+V8qjrShy2hE1g/fc0\"",
    "mtime": "2024-01-16T16:57:06.584Z",
    "size": 734,
    "path": "../public/_nuxt/ServiceAdvantages.41e76ea5.js"
  },
  "/_nuxt/ServiceAdvantages.99a0650f.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"ddb-3kEy3QhrCyf7tL/9plF0Od8WUwg\"",
    "mtime": "2024-01-16T16:57:06.563Z",
    "size": 3547,
    "path": "../public/_nuxt/ServiceAdvantages.99a0650f.css"
  },
  "/_nuxt/ServiceAdvantages.99a0650f.css.br": {
    "type": "text/css; charset=utf-8",
    "encoding": "br",
    "etag": "\"288-5Cfp95cJjRtmFAQHTqPtX9q9NYQ\"",
    "mtime": "2024-01-16T16:57:32.459Z",
    "size": 648,
    "path": "../public/_nuxt/ServiceAdvantages.99a0650f.css.br"
  },
  "/_nuxt/ServiceAdvantages.99a0650f.css.gz": {
    "type": "text/css; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"30b-AGcXUPhtkW9cA0rOQOqs3e+ww8w\"",
    "mtime": "2024-01-16T16:57:32.452Z",
    "size": 779,
    "path": "../public/_nuxt/ServiceAdvantages.99a0650f.css.gz"
  },
  "/_nuxt/ServicesCards.28ca5ce0.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"152b-XKJM0/0q76xZMCQDvZeSZYvAS/o\"",
    "mtime": "2024-01-16T16:57:06.559Z",
    "size": 5419,
    "path": "../public/_nuxt/ServicesCards.28ca5ce0.css"
  },
  "/_nuxt/ServicesCards.28ca5ce0.css.br": {
    "type": "text/css; charset=utf-8",
    "encoding": "br",
    "etag": "\"2b8-haF7la7vZhgYVibebqN6LZoS3JI\"",
    "mtime": "2024-01-16T16:57:32.472Z",
    "size": 696,
    "path": "../public/_nuxt/ServicesCards.28ca5ce0.css.br"
  },
  "/_nuxt/ServicesCards.28ca5ce0.css.gz": {
    "type": "text/css; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"387-zGAoXtCuAXcFM09QjqDIGpjQGXQ\"",
    "mtime": "2024-01-16T16:57:32.461Z",
    "size": 903,
    "path": "../public/_nuxt/ServicesCards.28ca5ce0.css.gz"
  },
  "/_nuxt/ServicesCards.8f484922.js": {
    "type": "application/javascript",
    "etag": "\"52e-NviDnV7KykKDa4LsWv4r5R0QzDU\"",
    "mtime": "2024-01-16T16:57:06.576Z",
    "size": 1326,
    "path": "../public/_nuxt/ServicesCards.8f484922.js"
  },
  "/_nuxt/ServicesCards.8f484922.js.br": {
    "type": "application/javascript",
    "encoding": "br",
    "etag": "\"295-9lahYQzAr+9ziH0N41wnRo4Ih1M\"",
    "mtime": "2024-01-16T16:57:32.479Z",
    "size": 661,
    "path": "../public/_nuxt/ServicesCards.8f484922.js.br"
  },
  "/_nuxt/ServicesCards.8f484922.js.gz": {
    "type": "application/javascript",
    "encoding": "gzip",
    "etag": "\"2d5-tw6q56Xzdzrw6OypclzdV7I9aVo\"",
    "mtime": "2024-01-16T16:57:32.475Z",
    "size": 725,
    "path": "../public/_nuxt/ServicesCards.8f484922.js.gz"
  },
  "/_nuxt/ServicesFiller.4556576f.js": {
    "type": "application/javascript",
    "etag": "\"51f-LaFpZaJZEzcxqIEqNOBzXJ+AjGo\"",
    "mtime": "2024-01-16T16:57:06.575Z",
    "size": 1311,
    "path": "../public/_nuxt/ServicesFiller.4556576f.js"
  },
  "/_nuxt/ServicesFiller.4556576f.js.br": {
    "type": "application/javascript",
    "encoding": "br",
    "etag": "\"2b2-xvVeOMkyO0hZyMOJD8nY9HfP8xc\"",
    "mtime": "2024-01-16T16:57:32.487Z",
    "size": 690,
    "path": "../public/_nuxt/ServicesFiller.4556576f.js.br"
  },
  "/_nuxt/ServicesFiller.4556576f.js.gz": {
    "type": "application/javascript",
    "encoding": "gzip",
    "etag": "\"30c-dk0kNXWTcwfi6NLAFvQ88va3vkg\"",
    "mtime": "2024-01-16T16:57:32.482Z",
    "size": 780,
    "path": "../public/_nuxt/ServicesFiller.4556576f.js.gz"
  },
  "/_nuxt/ServicesFiller.8dcd68a0.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"240-4PlUPudC0JDwetdF+qbY6+J0cK4\"",
    "mtime": "2024-01-16T16:57:06.548Z",
    "size": 576,
    "path": "../public/_nuxt/ServicesFiller.8dcd68a0.css"
  },
  "/_nuxt/ServicesHeader.88233047.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"f12-//iOa4CRQiBIo5RzX66MPIfmDFY\"",
    "mtime": "2024-01-16T16:57:06.548Z",
    "size": 3858,
    "path": "../public/_nuxt/ServicesHeader.88233047.css"
  },
  "/_nuxt/ServicesHeader.88233047.css.br": {
    "type": "text/css; charset=utf-8",
    "encoding": "br",
    "etag": "\"27d-bY5X4pJjXdW8FWoAOnUgAlidjt8\"",
    "mtime": "2024-01-16T16:57:32.497Z",
    "size": 637,
    "path": "../public/_nuxt/ServicesHeader.88233047.css.br"
  },
  "/_nuxt/ServicesHeader.88233047.css.gz": {
    "type": "text/css; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"314-+GcMVU3//dI+NZt3fmcTaBN8S5k\"",
    "mtime": "2024-01-16T16:57:32.489Z",
    "size": 788,
    "path": "../public/_nuxt/ServicesHeader.88233047.css.gz"
  },
  "/_nuxt/ServicesHeader.eddf61e7.js": {
    "type": "application/javascript",
    "etag": "\"599-/rzdsKQal3oo1tBgDJUhTChlPiM\"",
    "mtime": "2024-01-16T16:57:06.582Z",
    "size": 1433,
    "path": "../public/_nuxt/ServicesHeader.eddf61e7.js"
  },
  "/_nuxt/ServicesHeader.eddf61e7.js.br": {
    "type": "application/javascript",
    "encoding": "br",
    "etag": "\"2a5-nnAnb8yP7gOmiZro0PkCFmn+2NA\"",
    "mtime": "2024-01-16T16:57:32.534Z",
    "size": 677,
    "path": "../public/_nuxt/ServicesHeader.eddf61e7.js.br"
  },
  "/_nuxt/ServicesHeader.eddf61e7.js.gz": {
    "type": "application/javascript",
    "encoding": "gzip",
    "etag": "\"30e-JaCkgLSK9vEbbal6xn1MYgOOTKE\"",
    "mtime": "2024-01-16T16:57:32.527Z",
    "size": 782,
    "path": "../public/_nuxt/ServicesHeader.eddf61e7.js.gz"
  },
  "/_nuxt/ServicesLinks.5c9f85e4.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"3ba-ceKGkTNsI0YbOeb+m5XxNZxNCAA\"",
    "mtime": "2024-01-16T16:57:06.548Z",
    "size": 954,
    "path": "../public/_nuxt/ServicesLinks.5c9f85e4.css"
  },
  "/_nuxt/ServicesLinks.e97f27c8.js": {
    "type": "application/javascript",
    "etag": "\"304-rTmNXBkPT5MEyyHk0yjsWVI+bH0\"",
    "mtime": "2024-01-16T16:57:06.575Z",
    "size": 772,
    "path": "../public/_nuxt/ServicesLinks.e97f27c8.js"
  },
  "/_nuxt/servicesList.8dd8ccd7.js": {
    "type": "application/javascript",
    "etag": "\"478-EwLj/C4tVuSbqyDbfqkuPisXXMU\"",
    "mtime": "2024-01-16T16:57:06.575Z",
    "size": 1144,
    "path": "../public/_nuxt/servicesList.8dd8ccd7.js"
  },
  "/_nuxt/servicesList.8dd8ccd7.js.br": {
    "type": "application/javascript",
    "encoding": "br",
    "etag": "\"18a-vtXz0K8VH71So+d/eWhJuyFEJhE\"",
    "mtime": "2024-01-16T16:57:32.542Z",
    "size": 394,
    "path": "../public/_nuxt/servicesList.8dd8ccd7.js.br"
  },
  "/_nuxt/servicesList.8dd8ccd7.js.gz": {
    "type": "application/javascript",
    "encoding": "gzip",
    "etag": "\"1bf-QsZWZvwM3PLB3DjYjM7Omz2Vg24\"",
    "mtime": "2024-01-16T16:57:32.538Z",
    "size": 447,
    "path": "../public/_nuxt/servicesList.8dd8ccd7.js.gz"
  },
  "/_nuxt/sitemap.29a51c14.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"37f-jpRWBnDJrKU6KzR9+ociq1tyLIQ\"",
    "mtime": "2024-01-16T16:57:06.548Z",
    "size": 895,
    "path": "../public/_nuxt/sitemap.29a51c14.css"
  },
  "/_nuxt/sitemap.e5bcb8cc.js": {
    "type": "application/javascript",
    "etag": "\"ec3-4ceTKJT+2kw98nkSxQMTAkgAJ9g\"",
    "mtime": "2024-01-16T16:57:06.576Z",
    "size": 3779,
    "path": "../public/_nuxt/sitemap.e5bcb8cc.js"
  },
  "/_nuxt/sitemap.e5bcb8cc.js.br": {
    "type": "application/javascript",
    "encoding": "br",
    "etag": "\"5c5-rN2CcpDfr9pZFszU2sWPAd0lZzo\"",
    "mtime": "2024-01-16T16:57:32.553Z",
    "size": 1477,
    "path": "../public/_nuxt/sitemap.e5bcb8cc.js.br"
  },
  "/_nuxt/sitemap.e5bcb8cc.js.gz": {
    "type": "application/javascript",
    "encoding": "gzip",
    "etag": "\"6bd-feLNEpZvsDBFZt8uCsxKgTRe2+Q\"",
    "mtime": "2024-01-16T16:57:32.545Z",
    "size": 1725,
    "path": "../public/_nuxt/sitemap.e5bcb8cc.js.gz"
  },
  "/_nuxt/state.f1f43e6f.js": {
    "type": "application/javascript",
    "etag": "\"cb-P0LiNi2R02dUYkALI0C/k7ZEvqc\"",
    "mtime": "2024-01-16T16:57:06.569Z",
    "size": 203,
    "path": "../public/_nuxt/state.f1f43e6f.js"
  },
  "/_nuxt/sun.6778997c.svg": {
    "type": "image/svg+xml",
    "etag": "\"13db-fG2PlsZmPcNQHc5+HfDEDPjqS8A\"",
    "mtime": "2024-01-16T16:57:06.540Z",
    "size": 5083,
    "path": "../public/_nuxt/sun.6778997c.svg"
  },
  "/_nuxt/sun.6778997c.svg.br": {
    "type": "image/svg+xml",
    "encoding": "br",
    "etag": "\"694-rqHVgD34GkhFn6RMEJTn5Al2ze4\"",
    "mtime": "2024-01-16T16:57:32.566Z",
    "size": 1684,
    "path": "../public/_nuxt/sun.6778997c.svg.br"
  },
  "/_nuxt/sun.6778997c.svg.gz": {
    "type": "image/svg+xml",
    "encoding": "gzip",
    "etag": "\"7bb-cGn8DtV+z+1Hzj5QKmiQgxd9AxI\"",
    "mtime": "2024-01-16T16:57:32.556Z",
    "size": 1979,
    "path": "../public/_nuxt/sun.6778997c.svg.gz"
  },
  "/_nuxt/swiper-vue.27e78005.js": {
    "type": "application/javascript",
    "etag": "\"28cbf-GDXPNzzTUgVzUZ6Y7J1wMUl6JMw\"",
    "mtime": "2024-01-16T16:57:06.593Z",
    "size": 167103,
    "path": "../public/_nuxt/swiper-vue.27e78005.js"
  },
  "/_nuxt/swiper-vue.27e78005.js.br": {
    "type": "application/javascript",
    "encoding": "br",
    "etag": "\"c9fb-uOZ32gk4veR1qwplUmWfXycXXgQ\"",
    "mtime": "2024-01-16T16:57:32.989Z",
    "size": 51707,
    "path": "../public/_nuxt/swiper-vue.27e78005.js.br"
  },
  "/_nuxt/swiper-vue.27e78005.js.gz": {
    "type": "application/javascript",
    "encoding": "gzip",
    "etag": "\"e116-cHM+PnCPiKlJakW0rnEMdkE6omA\"",
    "mtime": "2024-01-16T16:57:32.577Z",
    "size": 57622,
    "path": "../public/_nuxt/swiper-vue.27e78005.js.gz"
  },
  "/_nuxt/swiper-vue.cd59b345.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"2086-7y6vh8zfiJ0Nl7X5Ph68Kq0c+no\"",
    "mtime": "2024-01-16T16:57:06.540Z",
    "size": 8326,
    "path": "../public/_nuxt/swiper-vue.cd59b345.css"
  },
  "/_nuxt/swiper-vue.cd59b345.css.br": {
    "type": "text/css; charset=utf-8",
    "encoding": "br",
    "etag": "\"b13-4FsRqYDTB97cLsEerTJJQRBrJ2k\"",
    "mtime": "2024-01-16T16:57:33.006Z",
    "size": 2835,
    "path": "../public/_nuxt/swiper-vue.cd59b345.css.br"
  },
  "/_nuxt/swiper-vue.cd59b345.css.gz": {
    "type": "text/css; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"cab-siOfT5i+2zsRgemdIC7FtHZU4IQ\"",
    "mtime": "2024-01-16T16:57:32.992Z",
    "size": 3243,
    "path": "../public/_nuxt/swiper-vue.cd59b345.css.gz"
  },
  "/_nuxt/SwiperControls.0053218d.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"2bc-S2UoHWGHbsQFghj2u8EgFxSkKBM\"",
    "mtime": "2024-01-16T16:57:06.558Z",
    "size": 700,
    "path": "../public/_nuxt/SwiperControls.0053218d.css"
  },
  "/_nuxt/SwiperControls.1da645c5.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"643-8ZGZMhUuvhyHLZebH5I/DqYK4V8\"",
    "mtime": "2024-01-16T16:57:06.549Z",
    "size": 1603,
    "path": "../public/_nuxt/SwiperControls.1da645c5.css"
  },
  "/_nuxt/SwiperControls.1da645c5.css.br": {
    "type": "text/css; charset=utf-8",
    "encoding": "br",
    "etag": "\"1c4-rssxQB6mIeHsrxRd3p+U+ymCV1U\"",
    "mtime": "2024-01-16T16:57:33.014Z",
    "size": 452,
    "path": "../public/_nuxt/SwiperControls.1da645c5.css.br"
  },
  "/_nuxt/SwiperControls.1da645c5.css.gz": {
    "type": "text/css; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"231-XufMxHbFjj8FeAazefb136+O6Mc\"",
    "mtime": "2024-01-16T16:57:33.009Z",
    "size": 561,
    "path": "../public/_nuxt/SwiperControls.1da645c5.css.gz"
  },
  "/_nuxt/SwiperControls.2fae864c.js": {
    "type": "application/javascript",
    "etag": "\"21f-jAL3dqvgxAw2is8FCg+8w/olu6A\"",
    "mtime": "2024-01-16T16:57:06.583Z",
    "size": 543,
    "path": "../public/_nuxt/SwiperControls.2fae864c.js"
  },
  "/_nuxt/SwiperControls.d6ae6113.js": {
    "type": "application/javascript",
    "etag": "\"21c-HRbydjsQuxMSfHoo/V7xx/hGwto\"",
    "mtime": "2024-01-16T16:57:06.583Z",
    "size": 540,
    "path": "../public/_nuxt/SwiperControls.d6ae6113.js"
  },
  "/_nuxt/tamozhennoe-oformlenie.c65ee656.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"527-4Jc9a5nzpQHzYPhEadAw7tG+uvE\"",
    "mtime": "2024-01-16T16:57:06.568Z",
    "size": 1319,
    "path": "../public/_nuxt/tamozhennoe-oformlenie.c65ee656.css"
  },
  "/_nuxt/tamozhennoe-oformlenie.c65ee656.css.br": {
    "type": "text/css; charset=utf-8",
    "encoding": "br",
    "etag": "\"150-JgAEHJmysxTMCdDH/m7LBBFJzw0\"",
    "mtime": "2024-01-16T16:57:33.021Z",
    "size": 336,
    "path": "../public/_nuxt/tamozhennoe-oformlenie.c65ee656.css.br"
  },
  "/_nuxt/tamozhennoe-oformlenie.c65ee656.css.gz": {
    "type": "text/css; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"1a1-Pm3zgNVlnfQDpo96zFE36sVPYmc\"",
    "mtime": "2024-01-16T16:57:33.017Z",
    "size": 417,
    "path": "../public/_nuxt/tamozhennoe-oformlenie.c65ee656.css.gz"
  },
  "/_nuxt/tamozhennoe-oformlenie.fa95dcbb.js": {
    "type": "application/javascript",
    "etag": "\"141d-ZKlKvw68W8OubmLgGfpnWV0iiW4\"",
    "mtime": "2024-01-16T16:57:06.576Z",
    "size": 5149,
    "path": "../public/_nuxt/tamozhennoe-oformlenie.fa95dcbb.js"
  },
  "/_nuxt/tamozhennoe-oformlenie.fa95dcbb.js.br": {
    "type": "application/javascript",
    "encoding": "br",
    "etag": "\"6ff-KVVzqgKiU0q1OFqgYAh2r7tBYOo\"",
    "mtime": "2024-01-16T16:57:33.051Z",
    "size": 1791,
    "path": "../public/_nuxt/tamozhennoe-oformlenie.fa95dcbb.js.br"
  },
  "/_nuxt/tamozhennoe-oformlenie.fa95dcbb.js.gz": {
    "type": "application/javascript",
    "encoding": "gzip",
    "etag": "\"8a2-A3cj1FOyVC2jIfKRU3Bh6sqkA58\"",
    "mtime": "2024-01-16T16:57:33.023Z",
    "size": 2210,
    "path": "../public/_nuxt/tamozhennoe-oformlenie.fa95dcbb.js.gz"
  },
  "/_nuxt/tarify-na-tamozhennoe-oformlenie-gruzov.9dfd1d4a.js": {
    "type": "application/javascript",
    "etag": "\"1148-nqZ5+yu8aTw7T8cG5Y7R33JsMdw\"",
    "mtime": "2024-01-16T16:57:06.584Z",
    "size": 4424,
    "path": "../public/_nuxt/tarify-na-tamozhennoe-oformlenie-gruzov.9dfd1d4a.js"
  },
  "/_nuxt/tarify-na-tamozhennoe-oformlenie-gruzov.9dfd1d4a.js.br": {
    "type": "application/javascript",
    "encoding": "br",
    "etag": "\"5ed-+M35DtftOjboriit4D7RcycnOqM\"",
    "mtime": "2024-01-16T16:57:33.065Z",
    "size": 1517,
    "path": "../public/_nuxt/tarify-na-tamozhennoe-oformlenie-gruzov.9dfd1d4a.js.br"
  },
  "/_nuxt/tarify-na-tamozhennoe-oformlenie-gruzov.9dfd1d4a.js.gz": {
    "type": "application/javascript",
    "encoding": "gzip",
    "etag": "\"6f4-wYm43tN28DKs4vgVuRjENdWDm9w\"",
    "mtime": "2024-01-16T16:57:33.053Z",
    "size": 1780,
    "path": "../public/_nuxt/tarify-na-tamozhennoe-oformlenie-gruzov.9dfd1d4a.js.gz"
  },
  "/_nuxt/tarify-na-tamozhennoe-oformlenie-gruzov.cee57967.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"65b-FYIS7Gnn3O1rG2h2tUrUbsdPO6E\"",
    "mtime": "2024-01-16T16:57:06.559Z",
    "size": 1627,
    "path": "../public/_nuxt/tarify-na-tamozhennoe-oformlenie-gruzov.cee57967.css"
  },
  "/_nuxt/tarify-na-tamozhennoe-oformlenie-gruzov.cee57967.css.br": {
    "type": "text/css; charset=utf-8",
    "encoding": "br",
    "etag": "\"1a5-qmicMdygCoRhQmi6B3yOQK0KLGg\"",
    "mtime": "2024-01-16T16:57:33.072Z",
    "size": 421,
    "path": "../public/_nuxt/tarify-na-tamozhennoe-oformlenie-gruzov.cee57967.css.br"
  },
  "/_nuxt/tarify-na-tamozhennoe-oformlenie-gruzov.cee57967.css.gz": {
    "type": "text/css; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"229-YbppkiRoXPvfaIzWnz6GSAYs6zA\"",
    "mtime": "2024-01-16T16:57:33.067Z",
    "size": 553,
    "path": "../public/_nuxt/tarify-na-tamozhennoe-oformlenie-gruzov.cee57967.css.gz"
  },
  "/_nuxt/traffic.47004d19.js": {
    "type": "application/javascript",
    "etag": "\"c15-i8fP5MP+/nMwf8sjRQvNNlfR0LA\"",
    "mtime": "2024-01-16T16:57:06.583Z",
    "size": 3093,
    "path": "../public/_nuxt/traffic.47004d19.js"
  },
  "/_nuxt/traffic.47004d19.js.br": {
    "type": "application/javascript",
    "encoding": "br",
    "etag": "\"574-1L5R9Zdc3o9PolQ/A8HdzItJ1o8\"",
    "mtime": "2024-01-16T16:57:33.111Z",
    "size": 1396,
    "path": "../public/_nuxt/traffic.47004d19.js.br"
  },
  "/_nuxt/traffic.47004d19.js.gz": {
    "type": "application/javascript",
    "encoding": "gzip",
    "etag": "\"689-pCS9m1sn4lg4eBeOjGJaeju5MbI\"",
    "mtime": "2024-01-16T16:57:33.074Z",
    "size": 1673,
    "path": "../public/_nuxt/traffic.47004d19.js.gz"
  },
  "/_nuxt/traffic.a24a129e.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"5a5-mL7PZr98MFSWcikDUNeJ54gcQ9A\"",
    "mtime": "2024-01-16T16:57:06.568Z",
    "size": 1445,
    "path": "../public/_nuxt/traffic.a24a129e.css"
  },
  "/_nuxt/traffic.a24a129e.css.br": {
    "type": "text/css; charset=utf-8",
    "encoding": "br",
    "etag": "\"19e-t++eM/q/TUm4MuTK/YsfcGbJHv8\"",
    "mtime": "2024-01-16T16:57:33.118Z",
    "size": 414,
    "path": "../public/_nuxt/traffic.a24a129e.css.br"
  },
  "/_nuxt/traffic.a24a129e.css.gz": {
    "type": "text/css; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"1f8-aEGEC1qM2y+B1R6oQrNo/rXxaAs\"",
    "mtime": "2024-01-16T16:57:33.113Z",
    "size": 504,
    "path": "../public/_nuxt/traffic.a24a129e.css.gz"
  },
  "/_nuxt/transformDate.2c1990d8.js": {
    "type": "application/javascript",
    "etag": "\"22bd-S5YmnjIciGnNyCf8P6eylw3bEM4\"",
    "mtime": "2024-01-16T16:57:06.575Z",
    "size": 8893,
    "path": "../public/_nuxt/transformDate.2c1990d8.js"
  },
  "/_nuxt/transformDate.2c1990d8.js.br": {
    "type": "application/javascript",
    "encoding": "br",
    "etag": "\"de8-oRh2HJYfEnd1oXPZ3u7XaMp0awc\"",
    "mtime": "2024-01-16T16:57:33.139Z",
    "size": 3560,
    "path": "../public/_nuxt/transformDate.2c1990d8.js.br"
  },
  "/_nuxt/transformDate.2c1990d8.js.gz": {
    "type": "application/javascript",
    "encoding": "gzip",
    "etag": "\"f77-mXvU7Ie0TrL7pUOcc079HsqgjAo\"",
    "mtime": "2024-01-16T16:57:33.121Z",
    "size": 3959,
    "path": "../public/_nuxt/transformDate.2c1990d8.js.gz"
  },
  "/_nuxt/vacancies.14bd6c6f.js": {
    "type": "application/javascript",
    "etag": "\"329b-r/oRub72afo9CIgbbmqrAaESyUQ\"",
    "mtime": "2024-01-16T16:57:06.589Z",
    "size": 12955,
    "path": "../public/_nuxt/vacancies.14bd6c6f.js"
  },
  "/_nuxt/vacancies.14bd6c6f.js.br": {
    "type": "application/javascript",
    "encoding": "br",
    "etag": "\"11cf-mv1joFX11YBwKjIN4wj3ScYiHAk\"",
    "mtime": "2024-01-16T16:57:33.166Z",
    "size": 4559,
    "path": "../public/_nuxt/vacancies.14bd6c6f.js.br"
  },
  "/_nuxt/vacancies.14bd6c6f.js.gz": {
    "type": "application/javascript",
    "encoding": "gzip",
    "etag": "\"1512-UnA0YDHd4OTkmrJ3SH/CmXbupQM\"",
    "mtime": "2024-01-16T16:57:33.141Z",
    "size": 5394,
    "path": "../public/_nuxt/vacancies.14bd6c6f.js.gz"
  },
  "/_nuxt/vacancies.feea65de.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1a4a-VTMvM7xYi0GCZSjTtNVlpt63o+Y\"",
    "mtime": "2024-01-16T16:57:06.548Z",
    "size": 6730,
    "path": "../public/_nuxt/vacancies.feea65de.css"
  },
  "/_nuxt/vacancies.feea65de.css.br": {
    "type": "text/css; charset=utf-8",
    "encoding": "br",
    "etag": "\"53d-Cra9XcCx+wGg9kgR4JF/ZJrucos\"",
    "mtime": "2024-01-16T16:57:33.184Z",
    "size": 1341,
    "path": "../public/_nuxt/vacancies.feea65de.css.br"
  },
  "/_nuxt/vacancies.feea65de.css.gz": {
    "type": "text/css; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"625-y6z0LTcY5rqxQq1YDOU+j3h0zbc\"",
    "mtime": "2024-01-16T16:57:33.168Z",
    "size": 1573,
    "path": "../public/_nuxt/vacancies.feea65de.css.gz"
  },
  "/_nuxt/validate.359f59e0.js": {
    "type": "application/javascript",
    "etag": "\"1d8-FWdjffgBdLb7vbgg47Ok+/cSC7I\"",
    "mtime": "2024-01-16T16:57:06.572Z",
    "size": 472,
    "path": "../public/_nuxt/validate.359f59e0.js"
  },
  "/_nuxt/vneshneekonomicheskaya-deyatelnost.8667ff2c.js": {
    "type": "application/javascript",
    "etag": "\"4aa6-2K4eEDB56xoBqWc0mPFByhI5rzk\"",
    "mtime": "2024-01-16T16:57:06.588Z",
    "size": 19110,
    "path": "../public/_nuxt/vneshneekonomicheskaya-deyatelnost.8667ff2c.js"
  },
  "/_nuxt/vneshneekonomicheskaya-deyatelnost.8667ff2c.js.br": {
    "type": "application/javascript",
    "encoding": "br",
    "etag": "\"17b7-llg7KRj0aAZSVwLj0UxBXxE7i9I\"",
    "mtime": "2024-01-16T16:57:33.224Z",
    "size": 6071,
    "path": "../public/_nuxt/vneshneekonomicheskaya-deyatelnost.8667ff2c.js.br"
  },
  "/_nuxt/vneshneekonomicheskaya-deyatelnost.8667ff2c.js.gz": {
    "type": "application/javascript",
    "encoding": "gzip",
    "etag": "\"1d05-g3hdOO3lHMVCA/WM/yLSbsWyhcA\"",
    "mtime": "2024-01-16T16:57:33.187Z",
    "size": 7429,
    "path": "../public/_nuxt/vneshneekonomicheskaya-deyatelnost.8667ff2c.js.gz"
  },
  "/_nuxt/vneshneekonomicheskaya-deyatelnost.a0c82ce5.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1698-2+qB8jYlz7dv607fil/OZI6Qs2A\"",
    "mtime": "2024-01-16T16:57:06.558Z",
    "size": 5784,
    "path": "../public/_nuxt/vneshneekonomicheskaya-deyatelnost.a0c82ce5.css"
  },
  "/_nuxt/vneshneekonomicheskaya-deyatelnost.a0c82ce5.css.br": {
    "type": "text/css; charset=utf-8",
    "encoding": "br",
    "etag": "\"435-UM8E+wTIhNhJ8IY/ZAtmdRHyDTg\"",
    "mtime": "2024-01-16T16:57:33.239Z",
    "size": 1077,
    "path": "../public/_nuxt/vneshneekonomicheskaya-deyatelnost.a0c82ce5.css.br"
  },
  "/_nuxt/vneshneekonomicheskaya-deyatelnost.a0c82ce5.css.gz": {
    "type": "text/css; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"511-MjsOJisnimfS1RipLs5I2+yk/1Y\"",
    "mtime": "2024-01-16T16:57:33.226Z",
    "size": 1297,
    "path": "../public/_nuxt/vneshneekonomicheskaya-deyatelnost.a0c82ce5.css.gz"
  },
  "/_nuxt/zheleznodorozhnye-perevozki.0d9e559e.js": {
    "type": "application/javascript",
    "etag": "\"33639-siRIqF2B/k9d3yLN3KxyVFw+KtM\"",
    "mtime": "2024-01-16T16:57:06.590Z",
    "size": 210489,
    "path": "../public/_nuxt/zheleznodorozhnye-perevozki.0d9e559e.js"
  },
  "/_nuxt/zheleznodorozhnye-perevozki.0d9e559e.js.br": {
    "type": "application/javascript",
    "encoding": "br",
    "etag": "\"53aa-CbohudNmyIkLHZ6f0qxzzIlTBxU\"",
    "mtime": "2024-01-16T16:57:33.430Z",
    "size": 21418,
    "path": "../public/_nuxt/zheleznodorozhnye-perevozki.0d9e559e.js.br"
  },
  "/_nuxt/zheleznodorozhnye-perevozki.0d9e559e.js.gz": {
    "type": "application/javascript",
    "encoding": "gzip",
    "etag": "\"16eaa-b3kGA+Opof015ueLQFTreVCD+c4\"",
    "mtime": "2024-01-16T16:57:33.267Z",
    "size": 93866,
    "path": "../public/_nuxt/zheleznodorozhnye-perevozki.0d9e559e.js.gz"
  },
  "/_nuxt/zheleznodorozhnye-perevozki.8e0c60db.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"11f8-Edusb5ePDk14XLHTjAiBwFhIuOg\"",
    "mtime": "2024-01-16T16:57:06.558Z",
    "size": 4600,
    "path": "../public/_nuxt/zheleznodorozhnye-perevozki.8e0c60db.css"
  },
  "/_nuxt/zheleznodorozhnye-perevozki.8e0c60db.css.br": {
    "type": "text/css; charset=utf-8",
    "encoding": "br",
    "etag": "\"3df-0kVZRlD3PA5RzKEcegstFlOeHS0\"",
    "mtime": "2024-01-16T16:57:33.442Z",
    "size": 991,
    "path": "../public/_nuxt/zheleznodorozhnye-perevozki.8e0c60db.css.br"
  },
  "/_nuxt/zheleznodorozhnye-perevozki.8e0c60db.css.gz": {
    "type": "text/css; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"49f-BdifZUTy1xeFSwx8LtNAYa0JNj4\"",
    "mtime": "2024-01-16T16:57:33.432Z",
    "size": 1183,
    "path": "../public/_nuxt/zheleznodorozhnye-perevozki.8e0c60db.css.gz"
  },
  "/_nuxt/_slug_.8de644ae.js": {
    "type": "application/javascript",
    "etag": "\"411-jTf2SBvrrKxXPk8oKY/0fxfUz9c\"",
    "mtime": "2024-01-16T16:57:06.575Z",
    "size": 1041,
    "path": "../public/_nuxt/_slug_.8de644ae.js"
  },
  "/_nuxt/_slug_.8de644ae.js.br": {
    "type": "application/javascript",
    "encoding": "br",
    "etag": "\"23d-vb980y4i4XoWbLiqHgbsBvk+jPg\"",
    "mtime": "2024-01-16T16:57:33.450Z",
    "size": 573,
    "path": "../public/_nuxt/_slug_.8de644ae.js.br"
  },
  "/_nuxt/_slug_.8de644ae.js.gz": {
    "type": "application/javascript",
    "encoding": "gzip",
    "etag": "\"291-YK5zhVnfB/DBCE7Bvehz/h05kSE\"",
    "mtime": "2024-01-16T16:57:33.445Z",
    "size": 657,
    "path": "../public/_nuxt/_slug_.8de644ae.js.gz"
  },
  "/_nuxt/_slug_.b8305792.js": {
    "type": "application/javascript",
    "etag": "\"3ef-7F4s71FZZDTE3OPqkX0cnZKHaMk\"",
    "mtime": "2024-01-16T16:57:06.568Z",
    "size": 1007,
    "path": "../public/_nuxt/_slug_.b8305792.js"
  },
  "/images/air_freight/charter.jpg": {
    "type": "image/jpeg",
    "etag": "\"1cf105-W9RkE/Inbr7EeQijGD/g5/IEO7I\"",
    "mtime": "2023-05-29T10:28:46.387Z",
    "size": 1896709,
    "path": "../public/images/air_freight/charter.jpg"
  },
  "/images/air_freight/domestic.jpg": {
    "type": "image/jpeg",
    "etag": "\"ff3b1-ZFhBbg8gfruj8TmQz/VQ4RUiaUc\"",
    "mtime": "2023-05-29T10:28:46.398Z",
    "size": 1045425,
    "path": "../public/images/air_freight/domestic.jpg"
  },
  "/images/air_freight/international.jpg": {
    "type": "image/jpeg",
    "etag": "\"20cd9a-H0RbcHOSIy/Prb0HgZDZHlXmu4c\"",
    "mtime": "2023-05-29T10:28:46.420Z",
    "size": 2149786,
    "path": "../public/images/air_freight/international.jpg"
  },
  "/images/air_freight/plane.png": {
    "type": "image/png",
    "etag": "\"78b9a-qW7JXmYFOMh+IfM+2o6GPbI6GDY\"",
    "mtime": "2023-05-29T10:28:46.426Z",
    "size": 494490,
    "path": "../public/images/air_freight/plane.png"
  },
  "/images/any_delivery/equipment_transportation.jpg": {
    "type": "image/jpeg",
    "etag": "\"266600-vhr1ptBOKNc692FKkGDOhFm41B4\"",
    "mtime": "2023-05-10T00:34:34.140Z",
    "size": 2516480,
    "path": "../public/images/any_delivery/equipment_transportation.jpg"
  },
  "/images/any_delivery/special_transportation.jpg": {
    "type": "image/jpeg",
    "etag": "\"36ba69-tNnYtx27gRLiSKv8z/sSvN5m1Wk\"",
    "mtime": "2023-05-19T14:18:50.470Z",
    "size": 3586665,
    "path": "../public/images/any_delivery/special_transportation.jpg"
  },
  "/images/any_delivery/vehicles_transportation.jpg": {
    "type": "image/jpeg",
    "etag": "\"6497cd-8qesyxMFb2U/79M0tFnsRbbOhAw\"",
    "mtime": "2023-05-19T14:18:50.520Z",
    "size": 6592461,
    "path": "../public/images/any_delivery/vehicles_transportation.jpg"
  },
  "/images/complex_organization/close_all_tasks.svg": {
    "type": "image/svg+xml",
    "etag": "\"699-8HmV8kn+oWFy6w4eLiJGmJ3/J1k\"",
    "mtime": "2023-08-05T13:18:44.865Z",
    "size": 1689,
    "path": "../public/images/complex_organization/close_all_tasks.svg"
  },
  "/images/complex_organization/close_all_tasks.svg.br": {
    "type": "image/svg+xml",
    "encoding": "br",
    "etag": "\"2b3-w7yJExLb5tXoNER7yir3RvURE4g\"",
    "mtime": "2024-01-16T16:57:33.509Z",
    "size": 691,
    "path": "../public/images/complex_organization/close_all_tasks.svg.br"
  },
  "/images/complex_organization/close_all_tasks.svg.gz": {
    "type": "image/svg+xml",
    "encoding": "gzip",
    "etag": "\"2f9-Tcy468EI/z3lO+Vks25xMAtNw2c\"",
    "mtime": "2024-01-16T16:57:33.504Z",
    "size": 761,
    "path": "../public/images/complex_organization/close_all_tasks.svg.gz"
  },
  "/images/complex_organization/employ_constructor.svg": {
    "type": "image/svg+xml",
    "etag": "\"6ab-hJLxWkt9VIFpllYMPM/NeoWtBRM\"",
    "mtime": "2023-10-16T14:27:03.578Z",
    "size": 1707,
    "path": "../public/images/complex_organization/employ_constructor.svg"
  },
  "/images/complex_organization/employ_constructor.svg.br": {
    "type": "image/svg+xml",
    "encoding": "br",
    "etag": "\"21b-29GkeUtBLix3jBiQKPCtXvDdm78\"",
    "mtime": "2024-01-16T16:57:33.517Z",
    "size": 539,
    "path": "../public/images/complex_organization/employ_constructor.svg.br"
  },
  "/images/complex_organization/employ_constructor.svg.gz": {
    "type": "image/svg+xml",
    "encoding": "gzip",
    "etag": "\"265-K6H2McVTbI/amdw6+UQQMH237J4\"",
    "mtime": "2024-01-16T16:57:33.512Z",
    "size": 613,
    "path": "../public/images/complex_organization/employ_constructor.svg.gz"
  },
  "/images/complex_organization/optimal_project_development.svg": {
    "type": "image/svg+xml",
    "etag": "\"8d4-ffOcHqV090KrlIstsILWq+ZWQo0\"",
    "mtime": "2023-08-05T13:18:44.865Z",
    "size": 2260,
    "path": "../public/images/complex_organization/optimal_project_development.svg"
  },
  "/images/complex_organization/optimal_project_development.svg.br": {
    "type": "image/svg+xml",
    "encoding": "br",
    "etag": "\"36b-maU1TzusV12A/J0bF+5vg7Z7Bw4\"",
    "mtime": "2024-01-16T16:57:33.526Z",
    "size": 875,
    "path": "../public/images/complex_organization/optimal_project_development.svg.br"
  },
  "/images/complex_organization/optimal_project_development.svg.gz": {
    "type": "image/svg+xml",
    "encoding": "gzip",
    "etag": "\"3cd-NvnKvNDNsClatUG02XWsvUlgXfE\"",
    "mtime": "2024-01-16T16:57:33.520Z",
    "size": 973,
    "path": "../public/images/complex_organization/optimal_project_development.svg.gz"
  },
  "/images/complex_organization/turn_key_support.svg": {
    "type": "image/svg+xml",
    "etag": "\"d59-n4I4E+1H9CT/cvtMoBtkQ+TBHOM\"",
    "mtime": "2023-08-05T13:18:44.865Z",
    "size": 3417,
    "path": "../public/images/complex_organization/turn_key_support.svg"
  },
  "/images/complex_organization/turn_key_support.svg.br": {
    "type": "image/svg+xml",
    "encoding": "br",
    "etag": "\"55b-03qqiDphmqX/boS0Gt1i4QRyzqE\"",
    "mtime": "2024-01-16T16:57:33.562Z",
    "size": 1371,
    "path": "../public/images/complex_organization/turn_key_support.svg.br"
  },
  "/images/complex_organization/turn_key_support.svg.gz": {
    "type": "image/svg+xml",
    "encoding": "gzip",
    "etag": "\"61d-sL+DYrF8E9hEEwmZGPdMhc5Em8k\"",
    "mtime": "2024-01-16T16:57:33.529Z",
    "size": 1565,
    "path": "../public/images/complex_organization/turn_key_support.svg.gz"
  },
  "/images/containers/container1.png": {
    "type": "image/png",
    "etag": "\"e51ad-1tHB1B2/FcL56QnFp9H7gopTGyo\"",
    "mtime": "2023-04-17T11:41:06.221Z",
    "size": 938413,
    "path": "../public/images/containers/container1.png"
  },
  "/images/containers/container10.png": {
    "type": "image/png",
    "etag": "\"25b6b-VLQ+mRZflF70heg58lJwk5Kc2+8\"",
    "mtime": "2023-04-17T11:46:03.990Z",
    "size": 154475,
    "path": "../public/images/containers/container10.png"
  },
  "/images/containers/container11.png": {
    "type": "image/png",
    "etag": "\"20ff3-EmrIEItyF6cZdzeAx5243tYIUF8\"",
    "mtime": "2023-04-17T11:46:37.339Z",
    "size": 135155,
    "path": "../public/images/containers/container11.png"
  },
  "/images/containers/container12.png": {
    "type": "image/png",
    "etag": "\"12dbb-hfoespeklH7c5A2KWvPs2F6AYUQ\"",
    "mtime": "2023-04-17T13:07:49.152Z",
    "size": 77243,
    "path": "../public/images/containers/container12.png"
  },
  "/images/containers/container13.png": {
    "type": "image/png",
    "etag": "\"198d3-FAcFWaRoynYIYhevnwHN6S2kSP4\"",
    "mtime": "2023-04-17T13:08:52.902Z",
    "size": 104659,
    "path": "../public/images/containers/container13.png"
  },
  "/images/containers/container2.png": {
    "type": "image/png",
    "etag": "\"15b55-n+Ksu9veW1L26y1iHie7tc9i4MQ\"",
    "mtime": "2023-04-17T13:01:43.605Z",
    "size": 88917,
    "path": "../public/images/containers/container2.png"
  },
  "/images/containers/container4.png": {
    "type": "image/png",
    "etag": "\"2249d-fNPNCZAWqhrNloBduykTzK29CBs\"",
    "mtime": "2023-04-17T12:55:58.937Z",
    "size": 140445,
    "path": "../public/images/containers/container4.png"
  },
  "/images/containers/container9.png": {
    "type": "image/png",
    "etag": "\"20418-FQ5ooFzrzVdpgvZTTJ1rTfFjuvg\"",
    "mtime": "2023-04-17T11:44:24.060Z",
    "size": 132120,
    "path": "../public/images/containers/container9.png"
  },
  "/images/car_freight/china_bg.jpg": {
    "type": "image/jpeg",
    "etag": "\"12efb1-gRiUQpgegb3EGlzT3PfMlGlLIgE\"",
    "mtime": "2023-05-29T10:28:46.463Z",
    "size": 1241009,
    "path": "../public/images/car_freight/china_bg.jpg"
  },
  "/images/car_freight/truck.png": {
    "type": "image/png",
    "etag": "\"2404c-N4phBywR0v1Hr0hrLdi42lJkNwo\"",
    "mtime": "2023-08-05T13:18:44.819Z",
    "size": 147532,
    "path": "../public/images/car_freight/truck.png"
  },
  "/images/international_trade/any_market.svg": {
    "type": "image/svg+xml",
    "etag": "\"b59-1LzguLClXOE2j7/xeOtruuGTidU\"",
    "mtime": "2023-09-01T15:42:16.697Z",
    "size": 2905,
    "path": "../public/images/international_trade/any_market.svg"
  },
  "/images/international_trade/any_market.svg.br": {
    "type": "image/svg+xml",
    "encoding": "br",
    "etag": "\"475-hZHM+SXScV6cwjC0fGQKQcZ4DQM\"",
    "mtime": "2024-01-16T16:57:33.580Z",
    "size": 1141,
    "path": "../public/images/international_trade/any_market.svg.br"
  },
  "/images/international_trade/any_market.svg.gz": {
    "type": "image/svg+xml",
    "encoding": "gzip",
    "etag": "\"4f6-bdE6kTDnUIbstLsgrQA1eNSMvIg\"",
    "mtime": "2024-01-16T16:57:33.572Z",
    "size": 1270,
    "path": "../public/images/international_trade/any_market.svg.gz"
  },
  "/images/international_trade/credit.svg": {
    "type": "image/svg+xml",
    "etag": "\"956-l4JR+1KsEtbtYfYWUgNP/tJCMeg\"",
    "mtime": "2023-09-01T15:42:16.698Z",
    "size": 2390,
    "path": "../public/images/international_trade/credit.svg"
  },
  "/images/international_trade/credit.svg.br": {
    "type": "image/svg+xml",
    "encoding": "br",
    "etag": "\"30c-fftC/yN8Fax2v3CoMEn6eqD5bmU\"",
    "mtime": "2024-01-16T16:57:33.589Z",
    "size": 780,
    "path": "../public/images/international_trade/credit.svg.br"
  },
  "/images/international_trade/credit.svg.gz": {
    "type": "image/svg+xml",
    "encoding": "gzip",
    "etag": "\"387-Ftpw+LcL1gLKy2SIxtuJa/CheAY\"",
    "mtime": "2024-01-16T16:57:33.583Z",
    "size": 903,
    "path": "../public/images/international_trade/credit.svg.gz"
  },
  "/images/international_trade/custom_clearance.svg": {
    "type": "image/svg+xml",
    "etag": "\"2de-zOlMZvJffDUD8ImbCY26XL8kWsI\"",
    "mtime": "2023-09-01T15:42:16.699Z",
    "size": 734,
    "path": "../public/images/international_trade/custom_clearance.svg"
  },
  "/images/international_trade/sanctions.svg": {
    "type": "image/svg+xml",
    "etag": "\"a3e-gm01RyZh8L3BDoBoSF0ZYqWtx8o\"",
    "mtime": "2023-09-01T15:42:16.699Z",
    "size": 2622,
    "path": "../public/images/international_trade/sanctions.svg"
  },
  "/images/international_trade/sanctions.svg.br": {
    "type": "image/svg+xml",
    "encoding": "br",
    "etag": "\"383-O/Dlec5l5MsXZL2shDJ6yfJdIIo\"",
    "mtime": "2024-01-16T16:57:33.600Z",
    "size": 899,
    "path": "../public/images/international_trade/sanctions.svg.br"
  },
  "/images/international_trade/sanctions.svg.gz": {
    "type": "image/svg+xml",
    "encoding": "gzip",
    "etag": "\"40a-Dk9Ha75N/lEW83CIYg5KKnyb0rQ\"",
    "mtime": "2024-01-16T16:57:33.593Z",
    "size": 1034,
    "path": "../public/images/international_trade/sanctions.svg.gz"
  },
  "/images/partners/partner1.svg": {
    "type": "image/svg+xml",
    "etag": "\"1170-IfPDkw1+BBFReof3VP7PSPYnW0M\"",
    "mtime": "2023-04-12T06:43:56.695Z",
    "size": 4464,
    "path": "../public/images/partners/partner1.svg"
  },
  "/images/partners/partner1.svg.br": {
    "type": "image/svg+xml",
    "encoding": "br",
    "etag": "\"751-Y/4HBUGjvMfN86v4fQtIY8gSBgA\"",
    "mtime": "2024-01-16T16:57:33.612Z",
    "size": 1873,
    "path": "../public/images/partners/partner1.svg.br"
  },
  "/images/partners/partner1.svg.gz": {
    "type": "image/svg+xml",
    "encoding": "gzip",
    "etag": "\"88e-p+pjPjIZauENejJvXkscJB/pL3I\"",
    "mtime": "2024-01-16T16:57:33.602Z",
    "size": 2190,
    "path": "../public/images/partners/partner1.svg.gz"
  },
  "/images/partners/partner10.svg": {
    "type": "image/svg+xml",
    "etag": "\"165c-x11lysiqBsvj+sGUNNzr5ClejKo\"",
    "mtime": "2023-04-12T06:50:04.711Z",
    "size": 5724,
    "path": "../public/images/partners/partner10.svg"
  },
  "/images/partners/partner10.svg.br": {
    "type": "image/svg+xml",
    "encoding": "br",
    "etag": "\"89e-9rdY94XiN+zcRdX/ImUXoj0+ZuA\"",
    "mtime": "2024-01-16T16:57:33.627Z",
    "size": 2206,
    "path": "../public/images/partners/partner10.svg.br"
  },
  "/images/partners/partner10.svg.gz": {
    "type": "image/svg+xml",
    "encoding": "gzip",
    "etag": "\"9f7-/ZCl+Joyu3i1URgX43VoMCaeokw\"",
    "mtime": "2024-01-16T16:57:33.614Z",
    "size": 2551,
    "path": "../public/images/partners/partner10.svg.gz"
  },
  "/images/partners/partner11.svg": {
    "type": "image/svg+xml",
    "etag": "\"f07-MuWcZEsBz11k7z//NNGM3dRRmvI\"",
    "mtime": "2023-04-12T06:50:27.212Z",
    "size": 3847,
    "path": "../public/images/partners/partner11.svg"
  },
  "/images/partners/partner11.svg.br": {
    "type": "image/svg+xml",
    "encoding": "br",
    "etag": "\"64f-kwyT4b48hwwnY7KvxTxXUbD1s9E\"",
    "mtime": "2024-01-16T16:57:33.638Z",
    "size": 1615,
    "path": "../public/images/partners/partner11.svg.br"
  },
  "/images/partners/partner11.svg.gz": {
    "type": "image/svg+xml",
    "encoding": "gzip",
    "etag": "\"722-B4GkhVLPq05JBEmV48yv2roNjAI\"",
    "mtime": "2024-01-16T16:57:33.629Z",
    "size": 1826,
    "path": "../public/images/partners/partner11.svg.gz"
  },
  "/images/partners/partner2.svg": {
    "type": "image/svg+xml",
    "etag": "\"de4-/QNGCdG2q2qE19WwI8R9T7AMDY4\"",
    "mtime": "2023-04-12T06:45:04.003Z",
    "size": 3556,
    "path": "../public/images/partners/partner2.svg"
  },
  "/images/partners/partner2.svg.br": {
    "type": "image/svg+xml",
    "encoding": "br",
    "etag": "\"52e-J15YxcZ/EflfruJ/tNQs+yjr0bk\"",
    "mtime": "2024-01-16T16:57:33.651Z",
    "size": 1326,
    "path": "../public/images/partners/partner2.svg.br"
  },
  "/images/partners/partner2.svg.gz": {
    "type": "image/svg+xml",
    "encoding": "gzip",
    "etag": "\"5e5-cD8Es8aI4EYfXTTjbgyjk1h25u8\"",
    "mtime": "2024-01-16T16:57:33.640Z",
    "size": 1509,
    "path": "../public/images/partners/partner2.svg.gz"
  },
  "/images/partners/partner3.svg": {
    "type": "image/svg+xml",
    "etag": "\"2be4-PrAxiDT5CmPAuJyZpGSGPDayxsY\"",
    "mtime": "2023-04-12T06:45:33.315Z",
    "size": 11236,
    "path": "../public/images/partners/partner3.svg"
  },
  "/images/partners/partner3.svg.br": {
    "type": "image/svg+xml",
    "encoding": "br",
    "etag": "\"103e-LyG1sNShHOtlrlor66gip3fU1BQ\"",
    "mtime": "2024-01-16T16:57:33.675Z",
    "size": 4158,
    "path": "../public/images/partners/partner3.svg.br"
  },
  "/images/partners/partner3.svg.gz": {
    "type": "image/svg+xml",
    "encoding": "gzip",
    "etag": "\"12ec-OeD6ySo1QLwz1SPuGUv+EOUwlUU\"",
    "mtime": "2024-01-16T16:57:33.653Z",
    "size": 4844,
    "path": "../public/images/partners/partner3.svg.gz"
  },
  "/images/partners/partner4.svg": {
    "type": "image/svg+xml",
    "etag": "\"2188-4+LogVEOt1wYj4mxzioFHbtls4o\"",
    "mtime": "2023-04-12T06:46:03.099Z",
    "size": 8584,
    "path": "../public/images/partners/partner4.svg"
  },
  "/images/partners/partner4.svg.br": {
    "type": "image/svg+xml",
    "encoding": "br",
    "etag": "\"d64-fBS/fJFbRm8TtgYnmSeKCLcJ97w\"",
    "mtime": "2024-01-16T16:57:33.695Z",
    "size": 3428,
    "path": "../public/images/partners/partner4.svg.br"
  },
  "/images/partners/partner4.svg.gz": {
    "type": "image/svg+xml",
    "encoding": "gzip",
    "etag": "\"f80-7lYURk2O7ona7fv8NjuLVQ318SY\"",
    "mtime": "2024-01-16T16:57:33.678Z",
    "size": 3968,
    "path": "../public/images/partners/partner4.svg.gz"
  },
  "/images/partners/partner5.svg": {
    "type": "image/svg+xml",
    "etag": "\"2671-smKe2wjoeqKb/8WQG4o5RDo/+Ag\"",
    "mtime": "2023-04-12T06:47:55.678Z",
    "size": 9841,
    "path": "../public/images/partners/partner5.svg"
  },
  "/images/partners/partner5.svg.br": {
    "type": "image/svg+xml",
    "encoding": "br",
    "etag": "\"e8a-1IdWo4PAO1ppflhO/Fym8WAWA0g\"",
    "mtime": "2024-01-16T16:57:33.717Z",
    "size": 3722,
    "path": "../public/images/partners/partner5.svg.br"
  },
  "/images/partners/partner5.svg.gz": {
    "type": "image/svg+xml",
    "encoding": "gzip",
    "etag": "\"10ea-CmVoTLlNS7couVIqtNklJ++fc/Y\"",
    "mtime": "2024-01-16T16:57:33.698Z",
    "size": 4330,
    "path": "../public/images/partners/partner5.svg.gz"
  },
  "/images/partners/partner6.svg": {
    "type": "image/svg+xml",
    "etag": "\"8fa-RZUc5pdYJMHHYvceSlCQht0f1tc\"",
    "mtime": "2023-04-12T06:48:21.268Z",
    "size": 2298,
    "path": "../public/images/partners/partner6.svg"
  },
  "/images/partners/partner6.svg.br": {
    "type": "image/svg+xml",
    "encoding": "br",
    "etag": "\"3d1-p0BEGSH6hlAdawyMjTgs9f7d3ls\"",
    "mtime": "2024-01-16T16:57:33.728Z",
    "size": 977,
    "path": "../public/images/partners/partner6.svg.br"
  },
  "/images/partners/partner6.svg.gz": {
    "type": "image/svg+xml",
    "encoding": "gzip",
    "etag": "\"44e-kdXyeXDmYoNVlpAYsUQl+nBdXDY\"",
    "mtime": "2024-01-16T16:57:33.721Z",
    "size": 1102,
    "path": "../public/images/partners/partner6.svg.gz"
  },
  "/images/partners/partner7.svg": {
    "type": "image/svg+xml",
    "etag": "\"167d-LGGc2gzpgKG1e3Qnb8Tsbb1ItDQ\"",
    "mtime": "2023-04-12T06:48:49.624Z",
    "size": 5757,
    "path": "../public/images/partners/partner7.svg"
  },
  "/images/partners/partner7.svg.br": {
    "type": "image/svg+xml",
    "encoding": "br",
    "etag": "\"8d8-xd9+7eAm44eP5oOpr7RSULmlMyo\"",
    "mtime": "2024-01-16T16:57:33.742Z",
    "size": 2264,
    "path": "../public/images/partners/partner7.svg.br"
  },
  "/images/partners/partner7.svg.gz": {
    "type": "image/svg+xml",
    "encoding": "gzip",
    "etag": "\"a25-rlNdjQw7H7OPGl3wx80ny2V3ue8\"",
    "mtime": "2024-01-16T16:57:33.730Z",
    "size": 2597,
    "path": "../public/images/partners/partner7.svg.gz"
  },
  "/images/partners/partner8.svg": {
    "type": "image/svg+xml",
    "etag": "\"2a72-BkSg1WHP5W3DW3+KSE0OPDx4tn4\"",
    "mtime": "2023-04-12T06:49:12.957Z",
    "size": 10866,
    "path": "../public/images/partners/partner8.svg"
  },
  "/images/partners/partner8.svg.br": {
    "type": "image/svg+xml",
    "encoding": "br",
    "etag": "\"e2d-3ElrUsPUfg6d+YyOuYhwMsMF63k\"",
    "mtime": "2024-01-16T16:57:33.767Z",
    "size": 3629,
    "path": "../public/images/partners/partner8.svg.br"
  },
  "/images/partners/partner8.svg.gz": {
    "type": "image/svg+xml",
    "encoding": "gzip",
    "etag": "\"1058-KVioXyvO3dGac46sziIdP0xA5Kw\"",
    "mtime": "2024-01-16T16:57:33.746Z",
    "size": 4184,
    "path": "../public/images/partners/partner8.svg.gz"
  },
  "/images/partners/partner9.svg": {
    "type": "image/svg+xml",
    "etag": "\"8e6-vE4lb6KakEcifyl5iJVVBFHecMM\"",
    "mtime": "2023-04-12T06:49:38.940Z",
    "size": 2278,
    "path": "../public/images/partners/partner9.svg"
  },
  "/images/partners/partner9.svg.br": {
    "type": "image/svg+xml",
    "encoding": "br",
    "etag": "\"3be-/uR1ad9M0qqTFg2rJhOtV8ZlBRw\"",
    "mtime": "2024-01-16T16:57:33.776Z",
    "size": 958,
    "path": "../public/images/partners/partner9.svg.br"
  },
  "/images/partners/partner9.svg.gz": {
    "type": "image/svg+xml",
    "encoding": "gzip",
    "etag": "\"433-vmOeZ3K3phDhKqU9WIAP56nG1Pg\"",
    "mtime": "2024-01-16T16:57:33.769Z",
    "size": 1075,
    "path": "../public/images/partners/partner9.svg.gz"
  },
  "/images/project_logistics_slides/slide_1.jpg": {
    "type": "image/jpeg",
    "etag": "\"98ecc-/y9iLRq6HGVxs0z0RXEbH0qLOFY\"",
    "mtime": "2023-10-16T14:27:03.597Z",
    "size": 626380,
    "path": "../public/images/project_logistics_slides/slide_1.jpg"
  },
  "/images/project_logistics_slides/slide_10.jpg": {
    "type": "image/jpeg",
    "etag": "\"695c1-bzbqjsjC636B4OsepvVf0E7fK8o\"",
    "mtime": "2023-10-16T14:27:03.602Z",
    "size": 431553,
    "path": "../public/images/project_logistics_slides/slide_10.jpg"
  },
  "/images/project_logistics_slides/slide_11.jpg": {
    "type": "image/jpeg",
    "etag": "\"57529-mIacqvJOZa25h1xk43/fwv1un9E\"",
    "mtime": "2023-10-16T14:27:03.607Z",
    "size": 357673,
    "path": "../public/images/project_logistics_slides/slide_11.jpg"
  },
  "/images/project_logistics_slides/slide_12.jpg": {
    "type": "image/jpeg",
    "etag": "\"72f79-fd3W1cokV3Pr2M6N+jpG1YJCKAc\"",
    "mtime": "2023-10-16T14:27:03.612Z",
    "size": 470905,
    "path": "../public/images/project_logistics_slides/slide_12.jpg"
  },
  "/images/project_logistics_slides/slide_13.jpg": {
    "type": "image/jpeg",
    "etag": "\"75b32-IuTxMMAe3d8lo9r9kcJtY0BCiFE\"",
    "mtime": "2023-10-16T14:27:03.617Z",
    "size": 482098,
    "path": "../public/images/project_logistics_slides/slide_13.jpg"
  },
  "/images/project_logistics_slides/slide_2.jpg": {
    "type": "image/jpeg",
    "etag": "\"7dc10-EaBSCsOAMHHDeKM7WVUTu7FUCiw\"",
    "mtime": "2023-10-16T14:27:03.622Z",
    "size": 515088,
    "path": "../public/images/project_logistics_slides/slide_2.jpg"
  },
  "/images/project_logistics_slides/slide_3.jpg": {
    "type": "image/jpeg",
    "etag": "\"57d2d-qrwz0HX0nBVhBJdy8RfYFH/6TgQ\"",
    "mtime": "2023-10-16T14:27:03.626Z",
    "size": 359725,
    "path": "../public/images/project_logistics_slides/slide_3.jpg"
  },
  "/images/project_logistics_slides/slide_4.jpg": {
    "type": "image/jpeg",
    "etag": "\"99b47-AXyJdcAQLFsjUg6G8C2i4VrPF90\"",
    "mtime": "2023-10-16T14:27:03.628Z",
    "size": 629575,
    "path": "../public/images/project_logistics_slides/slide_4.jpg"
  },
  "/images/project_logistics_slides/slide_5.jpg": {
    "type": "image/jpeg",
    "etag": "\"6db0d-UL4oKB4HL6Gc0bW88CjdflOk+Mo\"",
    "mtime": "2023-10-16T14:27:03.628Z",
    "size": 449293,
    "path": "../public/images/project_logistics_slides/slide_5.jpg"
  },
  "/images/project_logistics_slides/slide_6.jpg": {
    "type": "image/jpeg",
    "etag": "\"5b4ef-gMl57irSQzboOv9gX/UHIMmczlY\"",
    "mtime": "2023-10-16T14:27:03.628Z",
    "size": 373999,
    "path": "../public/images/project_logistics_slides/slide_6.jpg"
  },
  "/images/project_logistics_slides/slide_7.jpg": {
    "type": "image/jpeg",
    "etag": "\"8acfb-NcYFFjfrvySvCOX/vG9KoiqWCoo\"",
    "mtime": "2023-10-16T14:27:03.644Z",
    "size": 568571,
    "path": "../public/images/project_logistics_slides/slide_7.jpg"
  },
  "/images/project_logistics_slides/slide_8.jpg": {
    "type": "image/jpeg",
    "etag": "\"6db01-FuXeUdtPKeRe1wTmJ3/6mB0VBeg\"",
    "mtime": "2023-10-16T14:27:03.644Z",
    "size": 449281,
    "path": "../public/images/project_logistics_slides/slide_8.jpg"
  },
  "/images/project_logistics_slides/slide_9.jpg": {
    "type": "image/jpeg",
    "etag": "\"6d88c-PCnrOsSL0W7oqCt8j0TuYiTB4tM\"",
    "mtime": "2023-10-16T14:27:03.644Z",
    "size": 448652,
    "path": "../public/images/project_logistics_slides/slide_9.jpg"
  },
  "/images/rental_containers/container_large.jpg": {
    "type": "image/jpeg",
    "etag": "\"42e6d-ys5lD5tP9vPD79G2v7WZ0dpjR2c\"",
    "mtime": "2023-06-07T08:31:02.769Z",
    "size": 274029,
    "path": "../public/images/rental_containers/container_large.jpg"
  },
  "/images/rental_containers/container_small.jpg": {
    "type": "image/jpeg",
    "etag": "\"42af1-CaUILzReWRtxT/r7NVhbESOyS9g\"",
    "mtime": "2023-06-07T08:29:05.809Z",
    "size": 273137,
    "path": "../public/images/rental_containers/container_small.jpg"
  },
  "/images/rental_containers/swiper_img_1.jpg": {
    "type": "image/jpeg",
    "etag": "\"537d7-RKRwzbWt77SI6whwPgz1y1Ec2C0\"",
    "mtime": "2023-06-07T08:29:05.809Z",
    "size": 341975,
    "path": "../public/images/rental_containers/swiper_img_1.jpg"
  },
  "/images/rental_containers/swiper_img_2.jpg": {
    "type": "image/jpeg",
    "etag": "\"470a4-xzgcvd1yHuNkAxfRO5MQQ32uRso\"",
    "mtime": "2023-06-07T08:29:05.809Z",
    "size": 290980,
    "path": "../public/images/rental_containers/swiper_img_2.jpg"
  },
  "/images/rental_containers/swiper_img_3.jpg": {
    "type": "image/jpeg",
    "etag": "\"6289b-SKMrXsRJM+hbPUlEO6Bicqh7G/s\"",
    "mtime": "2023-06-07T08:29:05.824Z",
    "size": 403611,
    "path": "../public/images/rental_containers/swiper_img_3.jpg"
  },
  "/images/rental_containers/swiper_img_4.jpg": {
    "type": "image/jpeg",
    "etag": "\"4db73-YuZ33QDGukWW0r5yjwY1peNye6Q\"",
    "mtime": "2023-06-07T08:29:05.831Z",
    "size": 318323,
    "path": "../public/images/rental_containers/swiper_img_4.jpg"
  },
  "/images/rental_containers/swiper_img_5.jpg": {
    "type": "image/jpeg",
    "etag": "\"2103f-f2cwXNQB5a2Ate6TiSeGfxBJ+aM\"",
    "mtime": "2023-09-01T15:42:16.709Z",
    "size": 135231,
    "path": "../public/images/rental_containers/swiper_img_5.jpg"
  },
  "/images/rental_containers/swiper_img_6.jpg": {
    "type": "image/jpeg",
    "etag": "\"5076a-iAkqH8TFuzfJcheVc7EK98e6MMs\"",
    "mtime": "2023-09-01T15:42:16.713Z",
    "size": 329578,
    "path": "../public/images/rental_containers/swiper_img_6.jpg"
  },
  "/images/rental_containers/swiper_img_7.jpg": {
    "type": "image/jpeg",
    "etag": "\"4b7a7-j5OgJpFJC8+6Y4K//AZr9akWVpw\"",
    "mtime": "2023-09-01T15:42:16.716Z",
    "size": 309159,
    "path": "../public/images/rental_containers/swiper_img_7.jpg"
  },
  "/images/services/air_freight.svg": {
    "type": "image/svg+xml",
    "etag": "\"fbe-Kjc1O4kdxVtCc3/D/bxOgJACwp0\"",
    "mtime": "2023-04-22T19:48:46.673Z",
    "size": 4030,
    "path": "../public/images/services/air_freight.svg"
  },
  "/images/services/air_freight.svg.br": {
    "type": "image/svg+xml",
    "encoding": "br",
    "etag": "\"616-9Bal9igdCxBOZbFdMfsM7uKlc3g\"",
    "mtime": "2024-01-16T16:57:33.809Z",
    "size": 1558,
    "path": "../public/images/services/air_freight.svg.br"
  },
  "/images/services/air_freight.svg.gz": {
    "type": "image/svg+xml",
    "encoding": "gzip",
    "etag": "\"6f2-ybiWFNKqK6ps55rEYpQnLWl3MoI\"",
    "mtime": "2024-01-16T16:57:33.798Z",
    "size": 1778,
    "path": "../public/images/services/air_freight.svg.gz"
  },
  "/images/services/cargo_forwarding.svg": {
    "type": "image/svg+xml",
    "etag": "\"c5d-k1w8ei6x8ftxUBHRYpOvPmxPgIg\"",
    "mtime": "2023-04-22T19:32:32.709Z",
    "size": 3165,
    "path": "../public/images/services/cargo_forwarding.svg"
  },
  "/images/services/cargo_forwarding.svg.br": {
    "type": "image/svg+xml",
    "encoding": "br",
    "etag": "\"409-HVHChDWsBzimXbwxECrSdFJcrRQ\"",
    "mtime": "2024-01-16T16:57:33.822Z",
    "size": 1033,
    "path": "../public/images/services/cargo_forwarding.svg.br"
  },
  "/images/services/cargo_forwarding.svg.gz": {
    "type": "image/svg+xml",
    "encoding": "gzip",
    "etag": "\"487-qENJAS4ywpwd8YgkbEK+hQ0AaaA\"",
    "mtime": "2024-01-16T16:57:33.812Z",
    "size": 1159,
    "path": "../public/images/services/cargo_forwarding.svg.gz"
  },
  "/images/services/cargo_insurance.svg": {
    "type": "image/svg+xml",
    "etag": "\"892-H39KmLAbd/M9nchsju8hC5CGpfQ\"",
    "mtime": "2023-04-22T19:47:34.351Z",
    "size": 2194,
    "path": "../public/images/services/cargo_insurance.svg"
  },
  "/images/services/cargo_insurance.svg.br": {
    "type": "image/svg+xml",
    "encoding": "br",
    "etag": "\"2b0-jFllvpjVOFcT6IR4J7a96VdP3V8\"",
    "mtime": "2024-01-16T16:57:33.833Z",
    "size": 688,
    "path": "../public/images/services/cargo_insurance.svg.br"
  },
  "/images/services/cargo_insurance.svg.gz": {
    "type": "image/svg+xml",
    "encoding": "gzip",
    "etag": "\"313-AZpd4CgWge4mofNGK9SwnpeIGxA\"",
    "mtime": "2024-01-16T16:57:33.824Z",
    "size": 787,
    "path": "../public/images/services/cargo_insurance.svg.gz"
  },
  "/images/services/car_freight.svg": {
    "type": "image/svg+xml",
    "etag": "\"9fc-8XB9K49KIEpWbVqPUqTXjflzKN8\"",
    "mtime": "2023-04-22T19:31:31.891Z",
    "size": 2556,
    "path": "../public/images/services/car_freight.svg"
  },
  "/images/services/car_freight.svg.br": {
    "type": "image/svg+xml",
    "encoding": "br",
    "etag": "\"381-+pxpYfG7ufBIchVDz4kqfhqXRog\"",
    "mtime": "2024-01-16T16:57:33.845Z",
    "size": 897,
    "path": "../public/images/services/car_freight.svg.br"
  },
  "/images/services/car_freight.svg.gz": {
    "type": "image/svg+xml",
    "encoding": "gzip",
    "etag": "\"3f8-r3F9l/ZKDWP8FatLzhUQnjSNynQ\"",
    "mtime": "2024-01-16T16:57:33.836Z",
    "size": 1016,
    "path": "../public/images/services/car_freight.svg.gz"
  },
  "/images/services/china_car_delivery.svg": {
    "type": "image/svg+xml",
    "etag": "\"a26-/BUmkpsYLdYO3NDHf1q9/BQ/omE\"",
    "mtime": "2023-08-05T13:18:44.944Z",
    "size": 2598,
    "path": "../public/images/services/china_car_delivery.svg"
  },
  "/images/services/china_car_delivery.svg.br": {
    "type": "image/svg+xml",
    "encoding": "br",
    "etag": "\"331-vm6/fCjdylkPmnyYssMC1UN7LFc\"",
    "mtime": "2024-01-16T16:57:33.856Z",
    "size": 817,
    "path": "../public/images/services/china_car_delivery.svg.br"
  },
  "/images/services/china_car_delivery.svg.gz": {
    "type": "image/svg+xml",
    "encoding": "gzip",
    "etag": "\"3ae-dPf1lreFRQpuGhxlPk1xOS47ldE\"",
    "mtime": "2024-01-16T16:57:33.847Z",
    "size": 942,
    "path": "../public/images/services/china_car_delivery.svg.gz"
  },
  "/images/services/china_search.svg": {
    "type": "image/svg+xml",
    "etag": "\"161f-6CsUeaaqrPW8jE/Bn0TNJSvxwf8\"",
    "mtime": "2023-08-05T13:18:44.944Z",
    "size": 5663,
    "path": "../public/images/services/china_search.svg"
  },
  "/images/services/china_search.svg.br": {
    "type": "image/svg+xml",
    "encoding": "br",
    "etag": "\"597-ttuBlxx90ZGKIBOj2quqBXotCWo\"",
    "mtime": "2024-01-16T16:57:33.872Z",
    "size": 1431,
    "path": "../public/images/services/china_search.svg.br"
  },
  "/images/services/china_search.svg.gz": {
    "type": "image/svg+xml",
    "encoding": "gzip",
    "etag": "\"674-yI3whmOOwgtmyp/bC8rXKz8sKZA\"",
    "mtime": "2024-01-16T16:57:33.860Z",
    "size": 1652,
    "path": "../public/images/services/china_search.svg.gz"
  },
  "/images/services/customs_declarations.svg": {
    "type": "image/svg+xml",
    "etag": "\"766-/m63k7e+9s+bkJ7HBENr7OncANk\"",
    "mtime": "2023-04-22T19:45:33.289Z",
    "size": 1894,
    "path": "../public/images/services/customs_declarations.svg"
  },
  "/images/services/customs_declarations.svg.br": {
    "type": "image/svg+xml",
    "encoding": "br",
    "etag": "\"302-qePKtpv9ty63cxycfc6gvSgx48U\"",
    "mtime": "2024-01-16T16:57:33.882Z",
    "size": 770,
    "path": "../public/images/services/customs_declarations.svg.br"
  },
  "/images/services/customs_declarations.svg.gz": {
    "type": "image/svg+xml",
    "encoding": "gzip",
    "etag": "\"372-lA7fJXiQs0X7y3ktMKgkLgnkIdw\"",
    "mtime": "2024-01-16T16:57:33.875Z",
    "size": 882,
    "path": "../public/images/services/customs_declarations.svg.gz"
  },
  "/images/services/foreign_activity.svg": {
    "type": "image/svg+xml",
    "etag": "\"bea-6DHmACPQUwX5DeQsbb2rUSsEPVM\"",
    "mtime": "2023-10-04T16:27:23.572Z",
    "size": 3050,
    "path": "../public/images/services/foreign_activity.svg"
  },
  "/images/services/foreign_activity.svg.br": {
    "type": "image/svg+xml",
    "encoding": "br",
    "etag": "\"493-yafNRSF+fLdHmZUc0I+n46fAIvQ\"",
    "mtime": "2024-01-16T16:57:33.893Z",
    "size": 1171,
    "path": "../public/images/services/foreign_activity.svg.br"
  },
  "/images/services/foreign_activity.svg.gz": {
    "type": "image/svg+xml",
    "encoding": "gzip",
    "etag": "\"530-dG/ctnZ9vUae5dVohkTuWquS/9Y\"",
    "mtime": "2024-01-16T16:57:33.884Z",
    "size": 1328,
    "path": "../public/images/services/foreign_activity.svg.gz"
  },
  "/images/services/products_certifying.svg": {
    "type": "image/svg+xml",
    "etag": "\"bea-1qt7TLuKQU7TuhZQnsp0Y1i9eqQ\"",
    "mtime": "2023-04-22T19:48:08.410Z",
    "size": 3050,
    "path": "../public/images/services/products_certifying.svg"
  },
  "/images/services/products_certifying.svg.br": {
    "type": "image/svg+xml",
    "encoding": "br",
    "etag": "\"368-56IC8+zY2Q9gfqUVy4jsFhhO+7U\"",
    "mtime": "2024-01-16T16:57:33.906Z",
    "size": 872,
    "path": "../public/images/services/products_certifying.svg.br"
  },
  "/images/services/products_certifying.svg.gz": {
    "type": "image/svg+xml",
    "encoding": "gzip",
    "etag": "\"3dc-ApPsq30Vb5hbk+qSkfumgUdz+0Q\"",
    "mtime": "2024-01-16T16:57:33.897Z",
    "size": 988,
    "path": "../public/images/services/products_certifying.svg.gz"
  },
  "/images/services/project_logistics.svg": {
    "type": "image/svg+xml",
    "etag": "\"15d6-BWN42xc18KfFf6/UWXG+wFFeJVA\"",
    "mtime": "2023-04-22T19:50:25.869Z",
    "size": 5590,
    "path": "../public/images/services/project_logistics.svg"
  },
  "/images/services/project_logistics.svg.br": {
    "type": "image/svg+xml",
    "encoding": "br",
    "etag": "\"58b-aFQBUZTsrghufRN2b2byk+xWIQ4\"",
    "mtime": "2024-01-16T16:57:33.924Z",
    "size": 1419,
    "path": "../public/images/services/project_logistics.svg.br"
  },
  "/images/services/project_logistics.svg.gz": {
    "type": "image/svg+xml",
    "encoding": "gzip",
    "etag": "\"662-jaiz26FFGVhY2fKVIRrOvmB669g\"",
    "mtime": "2024-01-16T16:57:33.909Z",
    "size": 1634,
    "path": "../public/images/services/project_logistics.svg.gz"
  },
  "/images/services/rental_containers.svg": {
    "type": "image/svg+xml",
    "etag": "\"90f-zdGgHVwvffn3Kgx6TeVZdjnAr5A\"",
    "mtime": "2023-06-08T15:25:13.602Z",
    "size": 2319,
    "path": "../public/images/services/rental_containers.svg"
  },
  "/images/services/rental_containers.svg.br": {
    "type": "image/svg+xml",
    "encoding": "br",
    "etag": "\"30a-2GEZHKsnmvnAWXCl248TL6oGbi0\"",
    "mtime": "2024-01-16T16:57:33.932Z",
    "size": 778,
    "path": "../public/images/services/rental_containers.svg.br"
  },
  "/images/services/rental_containers.svg.gz": {
    "type": "image/svg+xml",
    "encoding": "gzip",
    "etag": "\"36d-jh/4uDfT6a72voI9BBpxmxr2gQk\"",
    "mtime": "2024-01-16T16:57:33.926Z",
    "size": 877,
    "path": "../public/images/services/rental_containers.svg.gz"
  },
  "/images/services/sea_freight.svg": {
    "type": "image/svg+xml",
    "etag": "\"1581-BUHx+05KWz4G8x64X49clK/yViU\"",
    "mtime": "2023-04-11T09:39:41.190Z",
    "size": 5505,
    "path": "../public/images/services/sea_freight.svg"
  },
  "/images/services/sea_freight.svg.br": {
    "type": "image/svg+xml",
    "encoding": "br",
    "etag": "\"5d6-RJT81ZeRgOtKCLbMijK8XsC25so\"",
    "mtime": "2024-01-16T16:57:33.947Z",
    "size": 1494,
    "path": "../public/images/services/sea_freight.svg.br"
  },
  "/images/services/sea_freight.svg.gz": {
    "type": "image/svg+xml",
    "encoding": "gzip",
    "etag": "\"6fb-HaOYakppuzKpYzUDsdVtcdD19GU\"",
    "mtime": "2024-01-16T16:57:33.935Z",
    "size": 1787,
    "path": "../public/images/services/sea_freight.svg.gz"
  },
  "/images/services/storage.svg": {
    "type": "image/svg+xml",
    "etag": "\"a62-Un07zyKQvZ3W04iMIsoHp7uAjwM\"",
    "mtime": "2023-04-22T19:33:51.441Z",
    "size": 2658,
    "path": "../public/images/services/storage.svg"
  },
  "/images/services/storage.svg.br": {
    "type": "image/svg+xml",
    "encoding": "br",
    "etag": "\"371-uPrDga2ANQ1nCojqo9AfcyhN5XI\"",
    "mtime": "2024-01-16T16:57:33.955Z",
    "size": 881,
    "path": "../public/images/services/storage.svg.br"
  },
  "/images/services/storage.svg.gz": {
    "type": "image/svg+xml",
    "encoding": "gzip",
    "etag": "\"3d0-aKkiEjZKQVmae9dBHMDb3gZS29s\"",
    "mtime": "2024-01-16T16:57:33.949Z",
    "size": 976,
    "path": "../public/images/services/storage.svg.gz"
  },
  "/images/services/train_freight.svg": {
    "type": "image/svg+xml",
    "etag": "\"d50-OCWvDTNt/ZwL+6EWg56i9ftIQE0\"",
    "mtime": "2023-04-22T19:26:51.728Z",
    "size": 3408,
    "path": "../public/images/services/train_freight.svg"
  },
  "/images/services/train_freight.svg.br": {
    "type": "image/svg+xml",
    "encoding": "br",
    "etag": "\"42f-s4EslEFAL48DOu3Z0HijwRxkNoA\"",
    "mtime": "2024-01-16T16:57:33.966Z",
    "size": 1071,
    "path": "../public/images/services/train_freight.svg.br"
  },
  "/images/services/train_freight.svg.gz": {
    "type": "image/svg+xml",
    "encoding": "gzip",
    "etag": "\"4c4-MbZewJpJGLo5012rDzF9lK/OCds\"",
    "mtime": "2024-01-16T16:57:33.958Z",
    "size": 1220,
    "path": "../public/images/services/train_freight.svg.gz"
  },
  "/images/services/veterinarian_control.svg": {
    "type": "image/svg+xml",
    "etag": "\"d42-AgpVWZyFNy+ccl948hsZCtyi0Ow\"",
    "mtime": "2023-08-05T13:18:44.944Z",
    "size": 3394,
    "path": "../public/images/services/veterinarian_control.svg"
  },
  "/images/services/veterinarian_control.svg.br": {
    "type": "image/svg+xml",
    "encoding": "br",
    "etag": "\"3e8-W+ZUe/hREegmmFh8LNHBiAAYY+A\"",
    "mtime": "2024-01-16T16:57:33.989Z",
    "size": 1000,
    "path": "../public/images/services/veterinarian_control.svg.br"
  },
  "/images/services/veterinarian_control.svg.gz": {
    "type": "image/svg+xml",
    "encoding": "gzip",
    "etag": "\"484-EB7QOA99cTNjBXL/Uie0r7Hbi/c\"",
    "mtime": "2024-01-16T16:57:33.967Z",
    "size": 1156,
    "path": "../public/images/services/veterinarian_control.svg.gz"
  },
  "/images/svg_numbers/1.svg": {
    "type": "image/svg+xml",
    "etag": "\"1a2-rv2mTn/og9J+Nh1WHTxE4epEROQ\"",
    "mtime": "2023-09-01T15:42:16.718Z",
    "size": 418,
    "path": "../public/images/svg_numbers/1.svg"
  },
  "/images/svg_numbers/2.svg": {
    "type": "image/svg+xml",
    "etag": "\"5ab-tbb1SqgbA77Ipysv9IvZ6c2CMKI\"",
    "mtime": "2023-09-01T15:42:16.719Z",
    "size": 1451,
    "path": "../public/images/svg_numbers/2.svg"
  },
  "/images/svg_numbers/2.svg.br": {
    "type": "image/svg+xml",
    "encoding": "br",
    "etag": "\"2d1-dQ7KwHpAfLTD3ptJDP1uQHqorbc\"",
    "mtime": "2024-01-16T16:57:33.996Z",
    "size": 721,
    "path": "../public/images/svg_numbers/2.svg.br"
  },
  "/images/svg_numbers/2.svg.gz": {
    "type": "image/svg+xml",
    "encoding": "gzip",
    "etag": "\"32b-IEfpDRmjlAMCKpfTGU2Wt6iiTr0\"",
    "mtime": "2024-01-16T16:57:33.992Z",
    "size": 811,
    "path": "../public/images/svg_numbers/2.svg.gz"
  },
  "/images/svg_numbers/3.svg": {
    "type": "image/svg+xml",
    "etag": "\"9ae-nqm9WeD2RrRcsLiXkMxnCARtIYI\"",
    "mtime": "2023-09-01T15:42:16.720Z",
    "size": 2478,
    "path": "../public/images/svg_numbers/3.svg"
  },
  "/images/svg_numbers/3.svg.br": {
    "type": "image/svg+xml",
    "encoding": "br",
    "etag": "\"466-jtiD9IrBzzqV7sHidznkYX6W2jg\"",
    "mtime": "2024-01-16T16:57:34.005Z",
    "size": 1126,
    "path": "../public/images/svg_numbers/3.svg.br"
  },
  "/images/svg_numbers/3.svg.gz": {
    "type": "image/svg+xml",
    "encoding": "gzip",
    "etag": "\"516-XzFq8gmO9GQLyYGhkdCAvT1gNfg\"",
    "mtime": "2024-01-16T16:57:33.998Z",
    "size": 1302,
    "path": "../public/images/svg_numbers/3.svg.gz"
  },
  "/images/svg_numbers/4.svg": {
    "type": "image/svg+xml",
    "etag": "\"1a7-0C5n8XG39VgE0RK/PncbpnHMoNs\"",
    "mtime": "2023-09-01T15:42:16.720Z",
    "size": 423,
    "path": "../public/images/svg_numbers/4.svg"
  },
  "/images/svg_numbers/5.svg": {
    "type": "image/svg+xml",
    "etag": "\"6e3-BE204jqQaRsnI2oHmzf2JPBcJKU\"",
    "mtime": "2023-09-01T15:42:16.721Z",
    "size": 1763,
    "path": "../public/images/svg_numbers/5.svg"
  },
  "/images/svg_numbers/5.svg.br": {
    "type": "image/svg+xml",
    "encoding": "br",
    "etag": "\"362-ZC9dSIQOuVctu2mqdH4gDB9PE0U\"",
    "mtime": "2024-01-16T16:57:34.013Z",
    "size": 866,
    "path": "../public/images/svg_numbers/5.svg.br"
  },
  "/images/svg_numbers/5.svg.gz": {
    "type": "image/svg+xml",
    "encoding": "gzip",
    "etag": "\"3c8-93JE4h/mWuOUcpxBCqiBK+87zNY\"",
    "mtime": "2024-01-16T16:57:34.008Z",
    "size": 968,
    "path": "../public/images/svg_numbers/5.svg.gz"
  },
  "/images/svg_numbers/6.svg": {
    "type": "image/svg+xml",
    "etag": "\"77b-tPKM9ICsvV7/nKx0Z84hRcSsz38\"",
    "mtime": "2023-09-01T15:42:16.722Z",
    "size": 1915,
    "path": "../public/images/svg_numbers/6.svg"
  },
  "/images/svg_numbers/6.svg.br": {
    "type": "image/svg+xml",
    "encoding": "br",
    "etag": "\"389-tAHVVBI/WZqTXNJxG+uOoUea+Qs\"",
    "mtime": "2024-01-16T16:57:34.021Z",
    "size": 905,
    "path": "../public/images/svg_numbers/6.svg.br"
  },
  "/images/svg_numbers/6.svg.gz": {
    "type": "image/svg+xml",
    "encoding": "gzip",
    "etag": "\"3fc-8VKw3ot+2FJhc/QnUCx+wf66xqg\"",
    "mtime": "2024-01-16T16:57:34.015Z",
    "size": 1020,
    "path": "../public/images/svg_numbers/6.svg.gz"
  },
  "/images/svg_numbers/7.svg": {
    "type": "image/svg+xml",
    "etag": "\"158-rdfQX8JmyKYS4QCSTQCRLwXvVqU\"",
    "mtime": "2023-09-01T15:42:16.722Z",
    "size": 344,
    "path": "../public/images/svg_numbers/7.svg"
  },
  "/images/svg_numbers/8.svg": {
    "type": "image/svg+xml",
    "etag": "\"924-SFpr0PHavDGBYxWu+wpHWFZ72Yk\"",
    "mtime": "2023-09-01T15:42:16.723Z",
    "size": 2340,
    "path": "../public/images/svg_numbers/8.svg"
  },
  "/images/svg_numbers/8.svg.br": {
    "type": "image/svg+xml",
    "encoding": "br",
    "etag": "\"3f4-Fg6ejBeqNfqu7vpWQJdXGko9IZU\"",
    "mtime": "2024-01-16T16:57:34.030Z",
    "size": 1012,
    "path": "../public/images/svg_numbers/8.svg.br"
  },
  "/images/svg_numbers/8.svg.gz": {
    "type": "image/svg+xml",
    "encoding": "gzip",
    "etag": "\"468-dRPa+I0RbzgmshMQYOB/tLEizfY\"",
    "mtime": "2024-01-16T16:57:34.024Z",
    "size": 1128,
    "path": "../public/images/svg_numbers/8.svg.gz"
  },
  "/images/svg_numbers/9.svg": {
    "type": "image/svg+xml",
    "etag": "\"79e-IjAz6Y9VLw6SCWhx7RYRHTPnEGI\"",
    "mtime": "2023-09-01T15:42:16.724Z",
    "size": 1950,
    "path": "../public/images/svg_numbers/9.svg"
  },
  "/images/svg_numbers/9.svg.br": {
    "type": "image/svg+xml",
    "encoding": "br",
    "etag": "\"39d-u+/X91r/dfD20fBVOf4g5VTpRlQ\"",
    "mtime": "2024-01-16T16:57:34.039Z",
    "size": 925,
    "path": "../public/images/svg_numbers/9.svg.br"
  },
  "/images/svg_numbers/9.svg.gz": {
    "type": "image/svg+xml",
    "encoding": "gzip",
    "etag": "\"40e-+0WeBn44t20Gd27sjz5nK8aTOIk\"",
    "mtime": "2024-01-16T16:57:34.034Z",
    "size": 1038,
    "path": "../public/images/svg_numbers/9.svg.gz"
  },
  "/images/train_freight/ekaterinburg.png": {
    "type": "image/png",
    "etag": "\"8740-/WZn48otuhrbwF5Qo+CslVn9L+g\"",
    "mtime": "2023-05-23T11:38:23.767Z",
    "size": 34624,
    "path": "../public/images/train_freight/ekaterinburg.png"
  },
  "/images/train_freight/ekaterinburg.svg": {
    "type": "image/svg+xml",
    "etag": "\"1119-vuB8kXjSFF6BRkWOI6g2F3txwyg\"",
    "mtime": "2023-08-05T13:18:44.944Z",
    "size": 4377,
    "path": "../public/images/train_freight/ekaterinburg.svg"
  },
  "/images/train_freight/ekaterinburg.svg.br": {
    "type": "image/svg+xml",
    "encoding": "br",
    "etag": "\"542-gqGVTkpzcJzP/mTbQiyQvLSAT6A\"",
    "mtime": "2024-01-16T16:57:34.051Z",
    "size": 1346,
    "path": "../public/images/train_freight/ekaterinburg.svg.br"
  },
  "/images/train_freight/ekaterinburg.svg.gz": {
    "type": "image/svg+xml",
    "encoding": "gzip",
    "etag": "\"656-Wt8rKIdSnLIwqN5E5BoBywMZ+HU\"",
    "mtime": "2024-01-16T16:57:34.042Z",
    "size": 1622,
    "path": "../public/images/train_freight/ekaterinburg.svg.gz"
  },
  "/images/train_freight/empty.svg": {
    "type": "image/svg+xml",
    "etag": "\"f72-74vyXLeP+jLpqwTfSlsT46BspeY\"",
    "mtime": "2023-08-05T13:18:44.959Z",
    "size": 3954,
    "path": "../public/images/train_freight/empty.svg"
  },
  "/images/train_freight/empty.svg.br": {
    "type": "image/svg+xml",
    "encoding": "br",
    "etag": "\"4c6-7zbT9LNKkww/ZFpdxWfBo2GYIdg\"",
    "mtime": "2024-01-16T16:57:34.062Z",
    "size": 1222,
    "path": "../public/images/train_freight/empty.svg.br"
  },
  "/images/train_freight/empty.svg.gz": {
    "type": "image/svg+xml",
    "encoding": "gzip",
    "etag": "\"5ca-gXmOUr6tGf1Dc5uGJ7UsQ47AZ2Q\"",
    "mtime": "2024-01-16T16:57:34.053Z",
    "size": 1482,
    "path": "../public/images/train_freight/empty.svg.gz"
  },
  "/images/train_freight/irkutsk.png": {
    "type": "image/png",
    "etag": "\"874b-WY0slfrJThGU01jtG+Tud4hpCIY\"",
    "mtime": "2023-05-23T11:38:23.770Z",
    "size": 34635,
    "path": "../public/images/train_freight/irkutsk.png"
  },
  "/images/train_freight/irkutsk.svg": {
    "type": "image/svg+xml",
    "etag": "\"1119-i9nSHgXPRal7sEEYadYxLhEGaho\"",
    "mtime": "2023-08-05T13:18:44.959Z",
    "size": 4377,
    "path": "../public/images/train_freight/irkutsk.svg"
  },
  "/images/train_freight/irkutsk.svg.br": {
    "type": "image/svg+xml",
    "encoding": "br",
    "etag": "\"546-LuEV3MyP14q6dgjHQi3wHuG1LaI\"",
    "mtime": "2024-01-16T16:57:34.074Z",
    "size": 1350,
    "path": "../public/images/train_freight/irkutsk.svg.br"
  },
  "/images/train_freight/irkutsk.svg.gz": {
    "type": "image/svg+xml",
    "encoding": "gzip",
    "etag": "\"65e-JZu09cYodM1aaStBtZd4hnrM3ng\"",
    "mtime": "2024-01-16T16:57:34.065Z",
    "size": 1630,
    "path": "../public/images/train_freight/irkutsk.svg.gz"
  },
  "/images/train_freight/kazan.png": {
    "type": "image/png",
    "etag": "\"872e-OQAMCeN9LtSsfID0ybvnxQ7E+yU\"",
    "mtime": "2023-05-23T11:38:23.778Z",
    "size": 34606,
    "path": "../public/images/train_freight/kazan.png"
  },
  "/images/train_freight/kazan.svg": {
    "type": "image/svg+xml",
    "etag": "\"1119-7DKqvjwA7HMipnuLkSYTDyBbzvM\"",
    "mtime": "2023-08-05T13:18:44.959Z",
    "size": 4377,
    "path": "../public/images/train_freight/kazan.svg"
  },
  "/images/train_freight/kazan.svg.br": {
    "type": "image/svg+xml",
    "encoding": "br",
    "etag": "\"542-wLa8efaYWIbwvWvhdWRYsdEVqkQ\"",
    "mtime": "2024-01-16T16:57:34.088Z",
    "size": 1346,
    "path": "../public/images/train_freight/kazan.svg.br"
  },
  "/images/train_freight/kazan.svg.gz": {
    "type": "image/svg+xml",
    "encoding": "gzip",
    "etag": "\"658-Z+D8833NY9Bb0mRfd8o3sj4QVjs\"",
    "mtime": "2024-01-16T16:57:34.079Z",
    "size": 1624,
    "path": "../public/images/train_freight/kazan.svg.gz"
  },
  "/images/train_freight/khabarovsk.png": {
    "type": "image/png",
    "etag": "\"87be-f8WUV1ASwz52IyRcNbNZE5VEnJU\"",
    "mtime": "2023-05-23T11:38:23.781Z",
    "size": 34750,
    "path": "../public/images/train_freight/khabarovsk.png"
  },
  "/images/train_freight/khabarovsk.svg": {
    "type": "image/svg+xml",
    "etag": "\"1119-OALyjquB8QG01rhvWlFGiIBgqTU\"",
    "mtime": "2023-08-05T13:18:44.959Z",
    "size": 4377,
    "path": "../public/images/train_freight/khabarovsk.svg"
  },
  "/images/train_freight/khabarovsk.svg.br": {
    "type": "image/svg+xml",
    "encoding": "br",
    "etag": "\"53b-b8V2E6Imb2dBbnGlLAr3wdOiF84\"",
    "mtime": "2024-01-16T16:57:34.101Z",
    "size": 1339,
    "path": "../public/images/train_freight/khabarovsk.svg.br"
  },
  "/images/train_freight/khabarovsk.svg.gz": {
    "type": "image/svg+xml",
    "encoding": "gzip",
    "etag": "\"65a-sJLmqtsoKUZt0Ig9rSdqdeF/MrQ\"",
    "mtime": "2024-01-16T16:57:34.091Z",
    "size": 1626,
    "path": "../public/images/train_freight/khabarovsk.svg.gz"
  },
  "/images/train_freight/krasnodar.png": {
    "type": "image/png",
    "etag": "\"8757-vNhr7jouQP+sjm7ILPnGkFfbQF4\"",
    "mtime": "2023-05-23T11:38:23.785Z",
    "size": 34647,
    "path": "../public/images/train_freight/krasnodar.png"
  },
  "/images/train_freight/krasnodar.svg": {
    "type": "image/svg+xml",
    "etag": "\"1119-dD+LrUFd7JlFC1sg72YXEmJjnho\"",
    "mtime": "2023-08-05T13:18:44.959Z",
    "size": 4377,
    "path": "../public/images/train_freight/krasnodar.svg"
  },
  "/images/train_freight/krasnodar.svg.br": {
    "type": "image/svg+xml",
    "encoding": "br",
    "etag": "\"546-n/UtrysfloLAr2/ABQlAqt9z6gc\"",
    "mtime": "2024-01-16T16:57:34.113Z",
    "size": 1350,
    "path": "../public/images/train_freight/krasnodar.svg.br"
  },
  "/images/train_freight/krasnodar.svg.gz": {
    "type": "image/svg+xml",
    "encoding": "gzip",
    "etag": "\"65a-0jF/Ons5nLN7B7DXyJeDEDgN1Ag\"",
    "mtime": "2024-01-16T16:57:34.103Z",
    "size": 1626,
    "path": "../public/images/train_freight/krasnodar.svg.gz"
  },
  "/images/train_freight/krasnoyarsk.png": {
    "type": "image/png",
    "etag": "\"8767-AjgUDVHf6QFPb2F5UvqDEED2eRg\"",
    "mtime": "2023-05-23T11:38:23.792Z",
    "size": 34663,
    "path": "../public/images/train_freight/krasnoyarsk.png"
  },
  "/images/train_freight/krasnoyarsk.svg": {
    "type": "image/svg+xml",
    "etag": "\"1119-ekNG4nCWUoQqdoCfu4GJpX2IsU8\"",
    "mtime": "2023-08-05T13:18:44.959Z",
    "size": 4377,
    "path": "../public/images/train_freight/krasnoyarsk.svg"
  },
  "/images/train_freight/krasnoyarsk.svg.br": {
    "type": "image/svg+xml",
    "encoding": "br",
    "etag": "\"54a-h55uOHT6CpJI8+JeVl1pfMFCzdU\"",
    "mtime": "2024-01-16T16:57:34.125Z",
    "size": 1354,
    "path": "../public/images/train_freight/krasnoyarsk.svg.br"
  },
  "/images/train_freight/krasnoyarsk.svg.gz": {
    "type": "image/svg+xml",
    "encoding": "gzip",
    "etag": "\"659-SKbf/Yv/na/3CsCuHQiaiJB118k\"",
    "mtime": "2024-01-16T16:57:34.115Z",
    "size": 1625,
    "path": "../public/images/train_freight/krasnoyarsk.svg.gz"
  },
  "/images/train_freight/map.png": {
    "type": "image/png",
    "etag": "\"54dd6-Ki2zZbKsft6yxYFIGgZJIdH4NHE\"",
    "mtime": "2023-05-23T11:38:23.810Z",
    "size": 347606,
    "path": "../public/images/train_freight/map.png"
  },
  "/images/train_freight/map.svg": {
    "type": "image/svg+xml",
    "etag": "\"32938-95MAcRJHQ9PK1BDW/QY/ryjGZa4\"",
    "mtime": "2023-08-05T13:18:44.959Z",
    "size": 207160,
    "path": "../public/images/train_freight/map.svg"
  },
  "/images/train_freight/map.svg.br": {
    "type": "image/svg+xml",
    "encoding": "br",
    "etag": "\"4ebc-/IdQXF1CgOL32kGzVgzrfEE6yY8\"",
    "mtime": "2024-01-16T16:57:34.278Z",
    "size": 20156,
    "path": "../public/images/train_freight/map.svg.br"
  },
  "/images/train_freight/map.svg.gz": {
    "type": "image/svg+xml",
    "encoding": "gzip",
    "etag": "\"16766-IFo8SFhkBshRbQP61V9d8Aa6mAA\"",
    "mtime": "2024-01-16T16:57:34.152Z",
    "size": 92006,
    "path": "../public/images/train_freight/map.svg.gz"
  },
  "/images/train_freight/minsk.png": {
    "type": "image/png",
    "etag": "\"879a-QnxLd6k368msTwYLsYZNbN+tPeo\"",
    "mtime": "2023-05-23T11:38:23.813Z",
    "size": 34714,
    "path": "../public/images/train_freight/minsk.png"
  },
  "/images/train_freight/minsk.svg": {
    "type": "image/svg+xml",
    "etag": "\"1119-4wiEGPy2x3OxLRRjHZyFVBl+MdU\"",
    "mtime": "2023-08-05T13:18:44.959Z",
    "size": 4377,
    "path": "../public/images/train_freight/minsk.svg"
  },
  "/images/train_freight/minsk.svg.br": {
    "type": "image/svg+xml",
    "encoding": "br",
    "etag": "\"540-0Gv50pAQY3V3oHvb4CsTzby+UUs\"",
    "mtime": "2024-01-16T16:57:34.290Z",
    "size": 1344,
    "path": "../public/images/train_freight/minsk.svg.br"
  },
  "/images/train_freight/minsk.svg.gz": {
    "type": "image/svg+xml",
    "encoding": "gzip",
    "etag": "\"65b-deN0nnt0vs2K31DbEgzahmzdzew\"",
    "mtime": "2024-01-16T16:57:34.281Z",
    "size": 1627,
    "path": "../public/images/train_freight/minsk.svg.gz"
  },
  "/images/train_freight/moscow.png": {
    "type": "image/png",
    "etag": "\"893e-DMp8vv/zGTV3xd/Too7k7CbxQrs\"",
    "mtime": "2023-05-20T11:11:26.627Z",
    "size": 35134,
    "path": "../public/images/train_freight/moscow.png"
  },
  "/images/train_freight/moscow.svg": {
    "type": "image/svg+xml",
    "etag": "\"1119-5469u5fBKasEOnDKEXXLeHOef7Q\"",
    "mtime": "2023-08-05T13:18:44.959Z",
    "size": 4377,
    "path": "../public/images/train_freight/moscow.svg"
  },
  "/images/train_freight/moscow.svg.br": {
    "type": "image/svg+xml",
    "encoding": "br",
    "etag": "\"544-+Oda528QbQJDiXO+7nC9sLC2e5k\"",
    "mtime": "2024-01-16T16:57:34.302Z",
    "size": 1348,
    "path": "../public/images/train_freight/moscow.svg.br"
  },
  "/images/train_freight/moscow.svg.gz": {
    "type": "image/svg+xml",
    "encoding": "gzip",
    "etag": "\"656-nUPACCYXaKQuehpDpAYgYPjYens\"",
    "mtime": "2024-01-16T16:57:34.294Z",
    "size": 1622,
    "path": "../public/images/train_freight/moscow.svg.gz"
  },
  "/images/train_freight/novosibirsk.png": {
    "type": "image/png",
    "etag": "\"878d-n2ByVPg0gR2VGn89VOQcUV5AntY\"",
    "mtime": "2023-05-23T11:38:23.816Z",
    "size": 34701,
    "path": "../public/images/train_freight/novosibirsk.png"
  },
  "/images/train_freight/novosibirsk.svg": {
    "type": "image/svg+xml",
    "etag": "\"1119-tX7nqZa0KHdzlfuHVL5oqWoxW8Q\"",
    "mtime": "2023-08-05T13:18:44.959Z",
    "size": 4377,
    "path": "../public/images/train_freight/novosibirsk.svg"
  },
  "/images/train_freight/novosibirsk.svg.br": {
    "type": "image/svg+xml",
    "encoding": "br",
    "etag": "\"541-lk1Wx6eWgXX/ZYUHLzna/O18Mkk\"",
    "mtime": "2024-01-16T16:57:34.314Z",
    "size": 1345,
    "path": "../public/images/train_freight/novosibirsk.svg.br"
  },
  "/images/train_freight/novosibirsk.svg.gz": {
    "type": "image/svg+xml",
    "encoding": "gzip",
    "etag": "\"65d-tptSMXFxZbf5G3rwFLjnfdM2c0w\"",
    "mtime": "2024-01-16T16:57:34.305Z",
    "size": 1629,
    "path": "../public/images/train_freight/novosibirsk.svg.gz"
  },
  "/images/train_freight/rostov.png": {
    "type": "image/png",
    "etag": "\"874a-igxs5VUir1h1PPZaRA7spag5i/A\"",
    "mtime": "2023-05-23T11:38:23.818Z",
    "size": 34634,
    "path": "../public/images/train_freight/rostov.png"
  },
  "/images/train_freight/rostov.svg": {
    "type": "image/svg+xml",
    "etag": "\"1119-DrK20lGy2gdSrSvtUT9sRfrwk8U\"",
    "mtime": "2023-08-05T13:18:44.975Z",
    "size": 4377,
    "path": "../public/images/train_freight/rostov.svg"
  },
  "/images/train_freight/rostov.svg.br": {
    "type": "image/svg+xml",
    "encoding": "br",
    "etag": "\"545-6X5Y30FFn9+r41M+zseXMDR8kXw\"",
    "mtime": "2024-01-16T16:57:34.326Z",
    "size": 1349,
    "path": "../public/images/train_freight/rostov.svg.br"
  },
  "/images/train_freight/rostov.svg.gz": {
    "type": "image/svg+xml",
    "encoding": "gzip",
    "etag": "\"65c-gzvbbrqz+0MO0NUfsrRL6X/DkHk\"",
    "mtime": "2024-01-16T16:57:34.316Z",
    "size": 1628,
    "path": "../public/images/train_freight/rostov.svg.gz"
  },
  "/images/train_freight/samara.png": {
    "type": "image/png",
    "etag": "\"8745-nYaz0bnHFe2Y68mAD0QJP0Z8PBM\"",
    "mtime": "2023-05-23T11:38:23.821Z",
    "size": 34629,
    "path": "../public/images/train_freight/samara.png"
  },
  "/images/train_freight/samara.svg": {
    "type": "image/svg+xml",
    "etag": "\"1119-EwJE/4kaau5OBUMzxIHO6YoNszo\"",
    "mtime": "2023-08-05T13:18:44.975Z",
    "size": 4377,
    "path": "../public/images/train_freight/samara.svg"
  },
  "/images/train_freight/samara.svg.br": {
    "type": "image/svg+xml",
    "encoding": "br",
    "etag": "\"547-eBC3VpfXrs3ItKaAFJf0xLL86X8\"",
    "mtime": "2024-01-16T16:57:34.337Z",
    "size": 1351,
    "path": "../public/images/train_freight/samara.svg.br"
  },
  "/images/train_freight/samara.svg.gz": {
    "type": "image/svg+xml",
    "encoding": "gzip",
    "etag": "\"65b-7PDAfm+F0erQEMDfApIXlIgcIak\"",
    "mtime": "2024-01-16T16:57:34.329Z",
    "size": 1627,
    "path": "../public/images/train_freight/samara.svg.gz"
  },
  "/images/train_freight/spb.png": {
    "type": "image/png",
    "etag": "\"874b-H/ncbu8iuM69inj3+VyKrsZHjEo\"",
    "mtime": "2023-05-23T11:38:23.835Z",
    "size": 34635,
    "path": "../public/images/train_freight/spb.png"
  },
  "/images/train_freight/spb.svg": {
    "type": "image/svg+xml",
    "etag": "\"1075-Jp8i1XL0zdT/dPMxrQxQJi/zVgk\"",
    "mtime": "2023-08-05T13:18:44.975Z",
    "size": 4213,
    "path": "../public/images/train_freight/spb.svg"
  },
  "/images/train_freight/spb.svg.br": {
    "type": "image/svg+xml",
    "encoding": "br",
    "etag": "\"507-5ndGEN3jApRk+CYjqbTOgf9kdNU\"",
    "mtime": "2024-01-16T16:57:34.348Z",
    "size": 1287,
    "path": "../public/images/train_freight/spb.svg.br"
  },
  "/images/train_freight/spb.svg.gz": {
    "type": "image/svg+xml",
    "encoding": "gzip",
    "etag": "\"620-rC0CZgJWI4pRS61LoXNGPJGgC9o\"",
    "mtime": "2024-01-16T16:57:34.340Z",
    "size": 1568,
    "path": "../public/images/train_freight/spb.svg.gz"
  },
  "/images/train_freight/vladivostok.png": {
    "type": "image/png",
    "etag": "\"87e1-KmcH9d9c+Km08Jbw21cz4I0eync\"",
    "mtime": "2023-05-23T11:38:23.838Z",
    "size": 34785,
    "path": "../public/images/train_freight/vladivostok.png"
  },
  "/images/train_freight/vladivostok.svg": {
    "type": "image/svg+xml",
    "etag": "\"1119-cB51G6cA0ZbXbI2n0SQS70wPDVY\"",
    "mtime": "2023-08-05T13:18:44.975Z",
    "size": 4377,
    "path": "../public/images/train_freight/vladivostok.svg"
  },
  "/images/train_freight/vladivostok.svg.br": {
    "type": "image/svg+xml",
    "encoding": "br",
    "etag": "\"53b-Cvnate5tnYUP1Kzvmi0rIhP0a6w\"",
    "mtime": "2024-01-16T16:57:34.359Z",
    "size": 1339,
    "path": "../public/images/train_freight/vladivostok.svg.br"
  },
  "/images/train_freight/vladivostok.svg.gz": {
    "type": "image/svg+xml",
    "encoding": "gzip",
    "etag": "\"657-5GaUSQbBHEhi3Hocj1Bom3ukE68\"",
    "mtime": "2024-01-16T16:57:34.350Z",
    "size": 1623,
    "path": "../public/images/train_freight/vladivostok.svg.gz"
  },
  "/images/values/business.svg": {
    "type": "image/svg+xml",
    "etag": "\"72f-2q2E59sOykmBk8VWqQNI3CO8wlk\"",
    "mtime": "2023-04-09T15:47:35.868Z",
    "size": 1839,
    "path": "../public/images/values/business.svg"
  },
  "/images/values/business.svg.br": {
    "type": "image/svg+xml",
    "encoding": "br",
    "etag": "\"2d9-1nhFaBtdstSrRpTU5HWlUfqVdIM\"",
    "mtime": "2024-01-16T16:57:34.366Z",
    "size": 729,
    "path": "../public/images/values/business.svg.br"
  },
  "/images/values/business.svg.gz": {
    "type": "image/svg+xml",
    "encoding": "gzip",
    "etag": "\"312-TCBQgmXqm6k/sVVf04VUVh4CHiw\"",
    "mtime": "2024-01-16T16:57:34.361Z",
    "size": 786,
    "path": "../public/images/values/business.svg.gz"
  },
  "/images/values/graph.svg": {
    "type": "image/svg+xml",
    "etag": "\"17f1-alJ+kUpSjsCyVSAEXdIAr1GyAFg\"",
    "mtime": "2023-04-09T15:56:52.809Z",
    "size": 6129,
    "path": "../public/images/values/graph.svg"
  },
  "/images/values/graph.svg.br": {
    "type": "image/svg+xml",
    "encoding": "br",
    "etag": "\"575-wU0p14Ac278kqE1iHZywPN4btMY\"",
    "mtime": "2024-01-16T16:57:34.381Z",
    "size": 1397,
    "path": "../public/images/values/graph.svg.br"
  },
  "/images/values/graph.svg.gz": {
    "type": "image/svg+xml",
    "encoding": "gzip",
    "etag": "\"807-83oI7iyZBZF7GA8oJ1/Rsxuoq+c\"",
    "mtime": "2024-01-16T16:57:34.370Z",
    "size": 2055,
    "path": "../public/images/values/graph.svg.gz"
  },
  "/images/values/plant.svg": {
    "type": "image/svg+xml",
    "etag": "\"1e3b-UPRZxjBLhUZOf6qVVcqZYvQQOp0\"",
    "mtime": "2023-04-09T16:08:42.560Z",
    "size": 7739,
    "path": "../public/images/values/plant.svg"
  },
  "/images/values/plant.svg.br": {
    "type": "image/svg+xml",
    "encoding": "br",
    "etag": "\"c2d-FnR8U+NBc0B/+ukUy/0IyspmwbM\"",
    "mtime": "2024-01-16T16:57:34.401Z",
    "size": 3117,
    "path": "../public/images/values/plant.svg.br"
  },
  "/images/values/plant.svg.gz": {
    "type": "image/svg+xml",
    "encoding": "gzip",
    "etag": "\"e8b-oUBkJ3oWaAOEOexf7dlvdMSjlh4\"",
    "mtime": "2024-01-16T16:57:34.383Z",
    "size": 3723,
    "path": "../public/images/values/plant.svg.gz"
  },
  "/images/values_icons/client_first.svg": {
    "type": "image/svg+xml",
    "etag": "\"2fe-km1tX2LC8r2XG3Z0cph6Taq8CTs\"",
    "mtime": "2023-09-01T15:42:16.732Z",
    "size": 766,
    "path": "../public/images/values_icons/client_first.svg"
  },
  "/images/values_icons/open.svg": {
    "type": "image/svg+xml",
    "etag": "\"3a9-nyu9DbIotXFUFB/B296dvOi0IlE\"",
    "mtime": "2023-09-01T15:42:16.733Z",
    "size": 937,
    "path": "../public/images/values_icons/open.svg"
  },
  "/images/values_icons/professionalism.svg": {
    "type": "image/svg+xml",
    "etag": "\"336-vuV/thUDXn6McMC378WThqXDZJ0\"",
    "mtime": "2023-09-01T15:42:16.734Z",
    "size": 822,
    "path": "../public/images/values_icons/professionalism.svg"
  },
  "/images/values_icons/reputation.svg": {
    "type": "image/svg+xml",
    "etag": "\"1d5-MtxryeF0Zg6tGP01F/YrPFYykm8\"",
    "mtime": "2023-09-01T15:42:16.735Z",
    "size": 469,
    "path": "../public/images/values_icons/reputation.svg"
  },
  "/images/values_icons/sincerity.svg": {
    "type": "image/svg+xml",
    "etag": "\"b6c-35m/PVMHAreGJ1dC/LsDLkN6EXs\"",
    "mtime": "2023-09-01T15:42:16.736Z",
    "size": 2924,
    "path": "../public/images/values_icons/sincerity.svg"
  },
  "/images/values_icons/sincerity.svg.br": {
    "type": "image/svg+xml",
    "encoding": "br",
    "etag": "\"3fb-fWCm5JY/uVqSkC+3fJ7s7IfHFBo\"",
    "mtime": "2024-01-16T16:57:34.413Z",
    "size": 1019,
    "path": "../public/images/values_icons/sincerity.svg.br"
  },
  "/images/values_icons/sincerity.svg.gz": {
    "type": "image/svg+xml",
    "encoding": "gzip",
    "etag": "\"499-qVM3AvPEbKdeH1Lj8Tg8cfofiuI\"",
    "mtime": "2024-01-16T16:57:34.406Z",
    "size": 1177,
    "path": "../public/images/values_icons/sincerity.svg.gz"
  },
  "/images/values_icons/teamwork.svg": {
    "type": "image/svg+xml",
    "etag": "\"688-tG2y1Jic4tJPlbQimheA91c8v1w\"",
    "mtime": "2023-09-01T15:42:16.736Z",
    "size": 1672,
    "path": "../public/images/values_icons/teamwork.svg"
  },
  "/images/values_icons/teamwork.svg.br": {
    "type": "image/svg+xml",
    "encoding": "br",
    "etag": "\"1d0-kKbk/Ae3prGUgpuO7J91jrwagMU\"",
    "mtime": "2024-01-16T16:57:34.421Z",
    "size": 464,
    "path": "../public/images/values_icons/teamwork.svg.br"
  },
  "/images/values_icons/teamwork.svg.gz": {
    "type": "image/svg+xml",
    "encoding": "gzip",
    "etag": "\"22a-avjWQurpMyPtQjqUAg80hMaHoyE\"",
    "mtime": "2024-01-16T16:57:34.416Z",
    "size": 554,
    "path": "../public/images/values_icons/teamwork.svg.gz"
  },
  "/news/dostavim-vas-gruz-iz-kitaia-v-fleksi-tank-konteinerax/index.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"10316-6LeG05x0pi5KGUvzoWvChhJQDnE\"",
    "mtime": "2024-01-16T16:58:26.613Z",
    "size": 66326,
    "path": "../public/news/dostavim-vas-gruz-iz-kitaia-v-fleksi-tank-konteinerax/index.html"
  },
  "/news/dostavim-vas-gruz-iz-kitaia-v-fleksi-tank-konteinerax/index.html.br": {
    "type": "text/html; charset=utf-8",
    "encoding": "br",
    "etag": "\"2681-P3JRZaLacrfn7qIzYPM8bT5aYnY\"",
    "mtime": "2024-01-16T16:58:40.811Z",
    "size": 9857,
    "path": "../public/news/dostavim-vas-gruz-iz-kitaia-v-fleksi-tank-konteinerax/index.html.br"
  },
  "/news/dostavim-vas-gruz-iz-kitaia-v-fleksi-tank-konteinerax/index.html.gz": {
    "type": "text/html; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"309d-lzbot1UjZujeYt46H6EBGUjDuMs\"",
    "mtime": "2024-01-16T16:58:40.745Z",
    "size": 12445,
    "path": "../public/news/dostavim-vas-gruz-iz-kitaia-v-fleksi-tank-konteinerax/index.html.gz"
  },
  "/news/novaia-usluga-otpravka-iz-kitaia-avtomobilei-v-konteinera-bez-oceredei-ot-2-x-stuk/index.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"10438-PqLWKc/R3Zx+JkrS+PHUI83+1vs\"",
    "mtime": "2024-01-16T16:58:31.556Z",
    "size": 66616,
    "path": "../public/news/novaia-usluga-otpravka-iz-kitaia-avtomobilei-v-konteinera-bez-oceredei-ot-2-x-stuk/index.html"
  },
  "/news/novaia-usluga-otpravka-iz-kitaia-avtomobilei-v-konteinera-bez-oceredei-ot-2-x-stuk/index.html.br": {
    "type": "text/html; charset=utf-8",
    "encoding": "br",
    "etag": "\"2677-/AA8O5CQVuCmjAymWGUqld/472k\"",
    "mtime": "2024-01-16T16:58:40.883Z",
    "size": 9847,
    "path": "../public/news/novaia-usluga-otpravka-iz-kitaia-avtomobilei-v-konteinera-bez-oceredei-ot-2-x-stuk/index.html.br"
  },
  "/news/novaia-usluga-otpravka-iz-kitaia-avtomobilei-v-konteinera-bez-oceredei-ot-2-x-stuk/index.html.gz": {
    "type": "text/html; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"30c0-jwFbPXu+JIKQixmc4DFN+PcPcfA\"",
    "mtime": "2024-01-16T16:58:40.815Z",
    "size": 12480,
    "path": "../public/news/novaia-usluga-otpravka-iz-kitaia-avtomobilei-v-konteinera-bez-oceredei-ot-2-x-stuk/index.html.gz"
  },
  "/news/opekunstvo-nad-belym-nosorogom-po-imeni-zeon/index.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"102bc-OoUHAeh0sK8ZUBx4kJ3V+yMrYz8\"",
    "mtime": "2024-01-16T16:58:36.356Z",
    "size": 66236,
    "path": "../public/news/opekunstvo-nad-belym-nosorogom-po-imeni-zeon/index.html"
  },
  "/news/opekunstvo-nad-belym-nosorogom-po-imeni-zeon/index.html.br": {
    "type": "text/html; charset=utf-8",
    "encoding": "br",
    "etag": "\"266c-NtrX8cGzIFCdVoZpzGjx7fhSFR0\"",
    "mtime": "2024-01-16T16:58:40.955Z",
    "size": 9836,
    "path": "../public/news/opekunstvo-nad-belym-nosorogom-po-imeni-zeon/index.html.br"
  },
  "/news/opekunstvo-nad-belym-nosorogom-po-imeni-zeon/index.html.gz": {
    "type": "text/html; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"308e-Fe+n8xixfVbWBgkigsmBozOoKi0\"",
    "mtime": "2024-01-16T16:58:40.887Z",
    "size": 12430,
    "path": "../public/news/opekunstvo-nad-belym-nosorogom-po-imeni-zeon/index.html.gz"
  },
  "/services/arenda-konteynerov/index.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"1ad65-Od1WyXc8qPoWNU1o3OOWTg5UEnU\"",
    "mtime": "2024-01-16T16:57:54.394Z",
    "size": 109925,
    "path": "../public/services/arenda-konteynerov/index.html"
  },
  "/services/arenda-konteynerov/index.html.br": {
    "type": "text/html; charset=utf-8",
    "encoding": "br",
    "etag": "\"3d9b-/6vkejRuupvDY1ZFYKXqR6P2yPQ\"",
    "mtime": "2024-01-16T16:58:41.090Z",
    "size": 15771,
    "path": "../public/services/arenda-konteynerov/index.html.br"
  },
  "/services/arenda-konteynerov/index.html.gz": {
    "type": "text/html; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"4e08-UrJiEErkc1wmOf42c0smLGRkn50\"",
    "mtime": "2024-01-16T16:58:40.960Z",
    "size": 19976,
    "path": "../public/services/arenda-konteynerov/index.html.gz"
  },
  "/services/aviaperevozki/index.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"1c94b-Df7ZXTtyUCxc+MDnmmSeatT+PEY\"",
    "mtime": "2024-01-16T16:57:53.715Z",
    "size": 117067,
    "path": "../public/services/aviaperevozki/index.html"
  },
  "/services/aviaperevozki/index.html.br": {
    "type": "text/html; charset=utf-8",
    "encoding": "br",
    "etag": "\"3f05-rKkJKvsB5LFcoTjkIl9cPoNi96o\"",
    "mtime": "2024-01-16T16:58:41.223Z",
    "size": 16133,
    "path": "../public/services/aviaperevozki/index.html.br"
  },
  "/services/aviaperevozki/index.html.gz": {
    "type": "text/html; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"55e5-h+xFhSL0lVCqrKqGgm9aZsBnl+w\"",
    "mtime": "2024-01-16T16:58:41.095Z",
    "size": 21989,
    "path": "../public/services/aviaperevozki/index.html.gz"
  },
  "/services/avtomobilnye-perevozki/index.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"1cb13-hFkaQo1blXIB6jys8L1JzzZGdt4\"",
    "mtime": "2024-01-16T16:57:53.463Z",
    "size": 117523,
    "path": "../public/services/avtomobilnye-perevozki/index.html"
  },
  "/services/avtomobilnye-perevozki/index.html.br": {
    "type": "text/html; charset=utf-8",
    "encoding": "br",
    "etag": "\"408e-J+FamhgdvNuCc9tXlISX2OR60Pg\"",
    "mtime": "2024-01-16T16:58:41.359Z",
    "size": 16526,
    "path": "../public/services/avtomobilnye-perevozki/index.html.br"
  },
  "/services/avtomobilnye-perevozki/index.html.gz": {
    "type": "text/html; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"578c-A5YHRlsxsGydX7JoHjHIvmAfpV4\"",
    "mtime": "2024-01-16T16:58:41.227Z",
    "size": 22412,
    "path": "../public/services/avtomobilnye-perevozki/index.html.gz"
  },
  "/services/morskie-gruzoperevozki/index.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"4c8dc-sc3xNQX4lPb/7L0rmzgMS/SGRxo\"",
    "mtime": "2024-01-16T16:57:52.961Z",
    "size": 313564,
    "path": "../public/services/morskie-gruzoperevozki/index.html"
  },
  "/services/morskie-gruzoperevozki/index.html.br": {
    "type": "text/html; charset=utf-8",
    "encoding": "br",
    "etag": "\"117cd-oVyc3wQG6QwaEBAP2/Y4GTJV0Rc\"",
    "mtime": "2024-01-16T16:58:41.953Z",
    "size": 71629,
    "path": "../public/services/morskie-gruzoperevozki/index.html.br"
  },
  "/services/morskie-gruzoperevozki/index.html.gz": {
    "type": "text/html; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"166c4-WgsZjrQa2L+h3ge+hFdbHF/yC9U\"",
    "mtime": "2024-01-16T16:58:41.381Z",
    "size": 91844,
    "path": "../public/services/morskie-gruzoperevozki/index.html.gz"
  },
  "/services/multimodalnye-perevozki/index.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"5f81a-EYoUW7sfQUqtUf67mlTioV/gf1E\"",
    "mtime": "2024-01-16T16:57:52.661Z",
    "size": 391194,
    "path": "../public/services/multimodalnye-perevozki/index.html"
  },
  "/services/multimodalnye-perevozki/index.html.br": {
    "type": "text/html; charset=utf-8",
    "encoding": "br",
    "etag": "\"16468-63dcLiG5FA5lrQbYK1JqVSXUU/A\"",
    "mtime": "2024-01-16T16:58:42.787Z",
    "size": 91240,
    "path": "../public/services/multimodalnye-perevozki/index.html.br"
  },
  "/services/multimodalnye-perevozki/index.html.gz": {
    "type": "text/html; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"1d77d-b7C9MAD/wTWXRDRTmHcTcYo7CSs\"",
    "mtime": "2024-01-16T16:58:41.986Z",
    "size": 120701,
    "path": "../public/services/multimodalnye-perevozki/index.html.gz"
  },
  "/services/project-logistics/index.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"1dc15-T7wf/MaikXtxJsaSpDj3a9K1nsM\"",
    "mtime": "2024-01-16T16:57:53.960Z",
    "size": 121877,
    "path": "../public/services/project-logistics/index.html"
  },
  "/services/project-logistics/index.html.br": {
    "type": "text/html; charset=utf-8",
    "encoding": "br",
    "etag": "\"43d8-lNvEHN08GdKijdiFK+/PMI3LWmU\"",
    "mtime": "2024-01-16T16:58:42.929Z",
    "size": 17368,
    "path": "../public/services/project-logistics/index.html.br"
  },
  "/services/project-logistics/index.html.gz": {
    "type": "text/html; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"62ae-eoBCnU1fctVwQsu9FDrj+Wvm228\"",
    "mtime": "2024-01-16T16:58:42.793Z",
    "size": 25262,
    "path": "../public/services/project-logistics/index.html.gz"
  },
  "/services/tamozhennoe-oformlenie/index.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"13092-Nx75V/x3rB/bn/pZCc4l86e9qso\"",
    "mtime": "2024-01-16T16:57:54.112Z",
    "size": 77970,
    "path": "../public/services/tamozhennoe-oformlenie/index.html"
  },
  "/services/tamozhennoe-oformlenie/index.html.br": {
    "type": "text/html; charset=utf-8",
    "encoding": "br",
    "etag": "\"2f92-NYWGQJMbxytEotLqaqkxu++FxUE\"",
    "mtime": "2024-01-16T16:58:43.014Z",
    "size": 12178,
    "path": "../public/services/tamozhennoe-oformlenie/index.html.br"
  },
  "/services/tamozhennoe-oformlenie/index.html.gz": {
    "type": "text/html; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"3c89-OVKXy5rWFx1cHmAt3xzC/f8/YeQ\"",
    "mtime": "2024-01-16T16:58:42.932Z",
    "size": 15497,
    "path": "../public/services/tamozhennoe-oformlenie/index.html.gz"
  },
  "/services/vneshneekonomicheskaya-deyatelnost/index.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"18e4e-Tpx4WqZv2U0MrWVuttqLjU/W7bY\"",
    "mtime": "2024-01-16T16:57:54.586Z",
    "size": 101966,
    "path": "../public/services/vneshneekonomicheskaya-deyatelnost/index.html"
  },
  "/services/vneshneekonomicheskaya-deyatelnost/index.html.br": {
    "type": "text/html; charset=utf-8",
    "encoding": "br",
    "etag": "\"425e-VNtLZ+0v7EGU30yigwggIWiFlZY\"",
    "mtime": "2024-01-16T16:58:43.134Z",
    "size": 16990,
    "path": "../public/services/vneshneekonomicheskaya-deyatelnost/index.html.br"
  },
  "/services/vneshneekonomicheskaya-deyatelnost/index.html.gz": {
    "type": "text/html; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"5e08-R9t6FHzDuY/mfTjEJsp9NNVgBgI\"",
    "mtime": "2024-01-16T16:58:43.019Z",
    "size": 24072,
    "path": "../public/services/vneshneekonomicheskaya-deyatelnost/index.html.gz"
  },
  "/services/zheleznodorozhnye-perevozki/index.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"4e8e4-8yXZZY+YVRwNTozT+6Ro2n2iyxw\"",
    "mtime": "2024-01-16T16:57:53.228Z",
    "size": 321764,
    "path": "../public/services/zheleznodorozhnye-perevozki/index.html"
  },
  "/services/zheleznodorozhnye-perevozki/index.html.br": {
    "type": "text/html; charset=utf-8",
    "encoding": "br",
    "etag": "\"8aeb-3jknkUOuS/iusyQ3RWEhMC6z9tc\"",
    "mtime": "2024-01-16T16:58:43.423Z",
    "size": 35563,
    "path": "../public/services/zheleznodorozhnye-perevozki/index.html.br"
  },
  "/services/zheleznodorozhnye-perevozki/index.html.gz": {
    "type": "text/html; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"1c770-HWc7orCCp1iYkTqJ2Fjytiw2qXI\"",
    "mtime": "2024-01-16T16:58:43.161Z",
    "size": 116592,
    "path": "../public/services/zheleznodorozhnye-perevozki/index.html.gz"
  },
  "/images/sea_freight/flags/africa.png": {
    "type": "image/png",
    "etag": "\"1139-zTEA5WoUDmWh/mjAQACXHnS7CHo\"",
    "mtime": "2023-05-19T14:18:50.523Z",
    "size": 4409,
    "path": "../public/images/sea_freight/flags/africa.png"
  },
  "/images/sea_freight/flags/brazil.png": {
    "type": "image/png",
    "etag": "\"fd4-RXIY+uLT7zSk/36GDwzB/X6sblc\"",
    "mtime": "2023-05-19T14:18:50.524Z",
    "size": 4052,
    "path": "../public/images/sea_freight/flags/brazil.png"
  },
  "/images/sea_freight/flags/cambodia.png": {
    "type": "image/png",
    "etag": "\"eef-pNFpE9nUISSaAF/yMFekry10dZY\"",
    "mtime": "2023-05-19T14:18:50.524Z",
    "size": 3823,
    "path": "../public/images/sea_freight/flags/cambodia.png"
  },
  "/images/sea_freight/flags/canada.png": {
    "type": "image/png",
    "etag": "\"a69-i0noyI6cOIL7wDA7aXgcrc+bw1A\"",
    "mtime": "2023-05-19T14:18:50.525Z",
    "size": 2665,
    "path": "../public/images/sea_freight/flags/canada.png"
  },
  "/images/sea_freight/flags/chile.png": {
    "type": "image/png",
    "etag": "\"b3f-/x21FAIInygpv4QeoGxr+/nUM6U\"",
    "mtime": "2023-05-19T14:18:50.526Z",
    "size": 2879,
    "path": "../public/images/sea_freight/flags/chile.png"
  },
  "/images/sea_freight/flags/china.png": {
    "type": "image/png",
    "etag": "\"b04-jTyI88+1tCP6xN8Jjxow8bExWIo\"",
    "mtime": "2023-05-19T14:18:50.526Z",
    "size": 2820,
    "path": "../public/images/sea_freight/flags/china.png"
  },
  "/images/sea_freight/flags/eu.png": {
    "type": "image/png",
    "etag": "\"c37-vaTnrJPygWNXEYeE5KPx4RSDf+U\"",
    "mtime": "2023-05-19T14:18:50.527Z",
    "size": 3127,
    "path": "../public/images/sea_freight/flags/eu.png"
  },
  "/images/sea_freight/flags/india.png": {
    "type": "image/png",
    "etag": "\"f01-VsrHuoDZA+XevsOexiQ+C5eNAoQ\"",
    "mtime": "2023-05-19T14:18:50.528Z",
    "size": 3841,
    "path": "../public/images/sea_freight/flags/india.png"
  },
  "/images/sea_freight/flags/indonesia.png": {
    "type": "image/png",
    "etag": "\"951-g6hfc2tDxxjLXD+7TJxkrQpNkcM\"",
    "mtime": "2023-05-19T14:18:50.528Z",
    "size": 2385,
    "path": "../public/images/sea_freight/flags/indonesia.png"
  },
  "/images/sea_freight/flags/japan.png": {
    "type": "image/png",
    "etag": "\"8cc-n/k1PUQdL7XKfqIdJ4QbYHxpv8M\"",
    "mtime": "2023-05-19T14:18:50.529Z",
    "size": 2252,
    "path": "../public/images/sea_freight/flags/japan.png"
  },
  "/images/sea_freight/flags/korea.png": {
    "type": "image/png",
    "etag": "\"df6-CUnyTJC/9UDxlWnU0+cSzhVeoTE\"",
    "mtime": "2023-05-19T14:18:50.529Z",
    "size": 3574,
    "path": "../public/images/sea_freight/flags/korea.png"
  },
  "/images/sea_freight/flags/malaysia.png": {
    "type": "image/png",
    "etag": "\"1648-4siHavg/DndAvmU9UGv/NC1lipo\"",
    "mtime": "2023-05-19T14:18:50.530Z",
    "size": 5704,
    "path": "../public/images/sea_freight/flags/malaysia.png"
  },
  "/images/sea_freight/flags/taiwan.png": {
    "type": "image/png",
    "etag": "\"c8c-H1rHzzCBCcM+RpxeVFz47c0r1zI\"",
    "mtime": "2023-05-19T14:18:50.531Z",
    "size": 3212,
    "path": "../public/images/sea_freight/flags/taiwan.png"
  },
  "/images/sea_freight/flags/turkey.png": {
    "type": "image/png",
    "etag": "\"cc0-5LX8iYzIHWJIT6V1v5vkkz9Tyyk\"",
    "mtime": "2023-05-19T14:18:50.532Z",
    "size": 3264,
    "path": "../public/images/sea_freight/flags/turkey.png"
  },
  "/images/sea_freight/flags/uae.png": {
    "type": "image/png",
    "etag": "\"9d2-Bk0nkXhV8KMaj/KclNvLCSjHB4Q\"",
    "mtime": "2023-05-19T14:18:50.532Z",
    "size": 2514,
    "path": "../public/images/sea_freight/flags/uae.png"
  },
  "/images/sea_freight/flags/usa.png": {
    "type": "image/png",
    "etag": "\"17ce-Q0NEIrVKaRwmk/+2NwJ9e52TxK0\"",
    "mtime": "2023-05-19T14:18:50.533Z",
    "size": 6094,
    "path": "../public/images/sea_freight/flags/usa.png"
  },
  "/images/sea_freight/flags/vietnam.png": {
    "type": "image/png",
    "etag": "\"bbc-hzP9CWifDY8HNzDLjm768vX6S9Y\"",
    "mtime": "2023-05-19T14:18:50.534Z",
    "size": 3004,
    "path": "../public/images/sea_freight/flags/vietnam.png"
  },
  "/images/sea_freight/sea_lines/dong_young.png": {
    "type": "image/png",
    "etag": "\"2b2b-ATYWave6xhGdhL9jBHInGJRGYCA\"",
    "mtime": "2023-08-05T13:18:44.897Z",
    "size": 11051,
    "path": "../public/images/sea_freight/sea_lines/dong_young.png"
  },
  "/images/sea_freight/sea_lines/esl.png": {
    "type": "image/png",
    "etag": "\"2d63-BZkDkN/q8hWllplKBk+oPWGGi7Q\"",
    "mtime": "2023-08-05T13:18:44.897Z",
    "size": 11619,
    "path": "../public/images/sea_freight/sea_lines/esl.png"
  },
  "/images/sea_freight/sea_lines/fesco.png": {
    "type": "image/png",
    "etag": "\"1f8f-+2SpSf17hi2i106lMbjGB3gtcRI\"",
    "mtime": "2023-08-05T13:18:44.897Z",
    "size": 8079,
    "path": "../public/images/sea_freight/sea_lines/fesco.png"
  },
  "/images/sea_freight/sea_lines/gangt.png": {
    "type": "image/png",
    "etag": "\"24dc-4A/JD3x6LyRe7ktjBa3p6B4iioE\"",
    "mtime": "2023-08-05T13:18:44.897Z",
    "size": 9436,
    "path": "../public/images/sea_freight/sea_lines/gangt.png"
  },
  "/images/sea_freight/sea_lines/gfl.png": {
    "type": "image/png",
    "etag": "\"4d36-PEQ+rfuPbe23+/79j8xZcYtTmko\"",
    "mtime": "2023-08-05T13:18:44.897Z",
    "size": 19766,
    "path": "../public/images/sea_freight/sea_lines/gfl.png"
  },
  "/images/sea_freight/sea_lines/gold_tiger.png": {
    "type": "image/png",
    "etag": "\"366d-qAOU9GCt5dxU70jIxtYomZnu9cA\"",
    "mtime": "2023-08-05T13:18:44.897Z",
    "size": 13933,
    "path": "../public/images/sea_freight/sea_lines/gold_tiger.png"
  },
  "/images/sea_freight/sea_lines/huaxin.png": {
    "type": "image/png",
    "etag": "\"1f1c-A1+0hMWJjBSLYJFpUOHbQ4kbjj8\"",
    "mtime": "2023-08-05T13:18:44.897Z",
    "size": 7964,
    "path": "../public/images/sea_freight/sea_lines/huaxin.png"
  },
  "/images/sea_freight/sea_lines/hub.png": {
    "type": "image/png",
    "etag": "\"1895-UDDUNr9g67kPBrINNw5g+R+k0oo\"",
    "mtime": "2023-08-05T13:18:44.897Z",
    "size": 6293,
    "path": "../public/images/sea_freight/sea_lines/hub.png"
  },
  "/images/sea_freight/sea_lines/jtline.png": {
    "type": "image/png",
    "etag": "\"58a9-wvoj7AOf26rW4RMUthp8PTC8kks\"",
    "mtime": "2023-08-05T13:18:44.912Z",
    "size": 22697,
    "path": "../public/images/sea_freight/sea_lines/jtline.png"
  },
  "/images/sea_freight/sea_lines/junan.png": {
    "type": "image/png",
    "etag": "\"3532-cfh2grWDA/7LPu6s7PgHmWeBRhk\"",
    "mtime": "2023-08-05T13:18:44.912Z",
    "size": 13618,
    "path": "../public/images/sea_freight/sea_lines/junan.png"
  },
  "/images/sea_freight/sea_lines/mas.png": {
    "type": "image/png",
    "etag": "\"3d29-z9cZLC/qzAahqfCGEnf/1pu4Gjg\"",
    "mtime": "2023-08-05T13:18:44.912Z",
    "size": 15657,
    "path": "../public/images/sea_freight/sea_lines/mas.png"
  },
  "/images/sea_freight/sea_lines/msc.png": {
    "type": "image/png",
    "etag": "\"1719-MmhwXPEpODRj4phyCdM5QssXNhA\"",
    "mtime": "2023-08-05T13:18:44.912Z",
    "size": 5913,
    "path": "../public/images/sea_freight/sea_lines/msc.png"
  },
  "/images/sea_freight/sea_lines/navis.png": {
    "type": "image/png",
    "etag": "\"1fbc-Cvf+ONJ7wL2PtZdwL+S2tAvNBe4\"",
    "mtime": "2023-08-05T13:18:44.912Z",
    "size": 8124,
    "path": "../public/images/sea_freight/sea_lines/navis.png"
  },
  "/images/sea_freight/sea_lines/ovp.png": {
    "type": "image/png",
    "etag": "\"3f52-FETqq2MI+uwDsc0anGH6+gxmm/0\"",
    "mtime": "2023-08-05T13:18:44.912Z",
    "size": 16210,
    "path": "../public/images/sea_freight/sea_lines/ovp.png"
  },
  "/images/sea_freight/sea_lines/panda.png": {
    "type": "image/png",
    "etag": "\"2e22-/OWfkBmGstX5fPMV2Wk6255GqtE\"",
    "mtime": "2023-08-05T13:18:44.912Z",
    "size": 11810,
    "path": "../public/images/sea_freight/sea_lines/panda.png"
  },
  "/images/sea_freight/sea_lines/ruscon.png": {
    "type": "image/png",
    "etag": "\"1774-bauHU4NvzKMAUzRsTHQTTHlpERs\"",
    "mtime": "2023-08-05T13:18:44.912Z",
    "size": 6004,
    "path": "../public/images/sea_freight/sea_lines/ruscon.png"
  },
  "/images/sea_freight/sea_lines/sasco.png": {
    "type": "image/png",
    "etag": "\"13f5-f+nA+E+9tLEHNpUAw6MhZ0T9Ffs\"",
    "mtime": "2023-08-05T13:18:44.912Z",
    "size": 5109,
    "path": "../public/images/sea_freight/sea_lines/sasco.png"
  },
  "/images/sea_freight/sea_lines/sco.png": {
    "type": "image/png",
    "etag": "\"617a-tqpm5crtCBtHXRa/XHzg68oJHOE\"",
    "mtime": "2023-08-05T13:18:44.912Z",
    "size": 24954,
    "path": "../public/images/sea_freight/sea_lines/sco.png"
  },
  "/images/sea_freight/sea_lines/sino.png": {
    "type": "image/png",
    "etag": "\"2c8b-eyJVQhUGia5c5kPT25fZJGhKjCk\"",
    "mtime": "2023-08-05T13:18:44.912Z",
    "size": 11403,
    "path": "../public/images/sea_freight/sea_lines/sino.png"
  },
  "/images/sea_freight/sea_lines/sinokor.png": {
    "type": "image/png",
    "etag": "\"2a02-4S5RSwXmJmKBkk2Z0WdkGfBfU4Y\"",
    "mtime": "2023-08-05T13:18:44.928Z",
    "size": 10754,
    "path": "../public/images/sea_freight/sea_lines/sinokor.png"
  },
  "/images/sea_freight/sea_lines/sitc.png": {
    "type": "image/png",
    "etag": "\"16b8-LCuc22WnfWjiP7Xvptvtv+YgWVU\"",
    "mtime": "2023-08-05T13:18:44.928Z",
    "size": 5816,
    "path": "../public/images/sea_freight/sea_lines/sitc.png"
  },
  "/images/sea_freight/sea_lines/torgmoll.png": {
    "type": "image/png",
    "etag": "\"3bd3-x/oI09nIRrAxwHiL5D+tikWUPLk\"",
    "mtime": "2023-08-05T13:18:44.928Z",
    "size": 15315,
    "path": "../public/images/sea_freight/sea_lines/torgmoll.png"
  },
  "/images/sea_freight/sea_lines/transit.png": {
    "type": "image/png",
    "etag": "\"2930-VN6Brj2cwgFidz0uHehSzkaE6Hw\"",
    "mtime": "2023-08-05T13:18:44.928Z",
    "size": 10544,
    "path": "../public/images/sea_freight/sea_lines/transit.png"
  },
  "/images/sea_freight/sea_lines/zhonggu.png": {
    "type": "image/png",
    "etag": "\"4039-bUOOOjEXrkX9pmCyfhK3jxIjB7g\"",
    "mtime": "2023-08-05T13:18:44.928Z",
    "size": 16441,
    "path": "../public/images/sea_freight/sea_lines/zhonggu.png"
  },
  "/images/sea_freight/static_maps/coastal.png": {
    "type": "image/png",
    "etag": "\"60b18-1WMn4NLp1PmFFz1d0wOv1KTedCY\"",
    "mtime": "2023-05-19T14:18:50.558Z",
    "size": 396056,
    "path": "../public/images/sea_freight/static_maps/coastal.png"
  },
  "/images/sea_freight/static_maps/coastal.svg": {
    "type": "image/svg+xml",
    "etag": "\"0-2jmj7l5rSw0yVb/vlWAYkK/YBwk\"",
    "mtime": "2023-08-05T13:18:44.928Z",
    "size": 0,
    "path": "../public/images/sea_freight/static_maps/coastal.svg"
  },
  "/images/train_freight/cargo_types/dangerous.svg": {
    "type": "image/svg+xml",
    "etag": "\"1178-AjBOSiObfxnsRF8RppjZ9GVzHsg\"",
    "mtime": "2023-08-05T13:18:44.944Z",
    "size": 4472,
    "path": "../public/images/train_freight/cargo_types/dangerous.svg"
  },
  "/images/train_freight/cargo_types/dangerous.svg.br": {
    "type": "image/svg+xml",
    "encoding": "br",
    "etag": "\"73e-I2d/16kKhjF2+r/IwvTbBzXrrRE\"",
    "mtime": "2024-01-16T16:57:34.459Z",
    "size": 1854,
    "path": "../public/images/train_freight/cargo_types/dangerous.svg.br"
  },
  "/images/train_freight/cargo_types/dangerous.svg.gz": {
    "type": "image/svg+xml",
    "encoding": "gzip",
    "etag": "\"850-/KUvNNw2VhA1PWD6fgq0+uNnpk8\"",
    "mtime": "2024-01-16T16:57:34.448Z",
    "size": 2128,
    "path": "../public/images/train_freight/cargo_types/dangerous.svg.gz"
  },
  "/images/train_freight/cargo_types/general.svg": {
    "type": "image/svg+xml",
    "etag": "\"2570-91IkvSIX3d1AcjnHd5+hWZ/CjoI\"",
    "mtime": "2023-08-05T13:18:44.944Z",
    "size": 9584,
    "path": "../public/images/train_freight/cargo_types/general.svg"
  },
  "/images/train_freight/cargo_types/general.svg.br": {
    "type": "image/svg+xml",
    "encoding": "br",
    "etag": "\"f61-oCs9KEP98681eC7qXvpg6RfYCzA\"",
    "mtime": "2024-01-16T16:57:34.480Z",
    "size": 3937,
    "path": "../public/images/train_freight/cargo_types/general.svg.br"
  },
  "/images/train_freight/cargo_types/general.svg.gz": {
    "type": "image/svg+xml",
    "encoding": "gzip",
    "etag": "\"11ae-CXszGx47+KjtgANGsAr1Onw/Z64\"",
    "mtime": "2024-01-16T16:57:34.461Z",
    "size": 4526,
    "path": "../public/images/train_freight/cargo_types/general.svg.gz"
  },
  "/images/train_freight/cargo_types/oversized.svg": {
    "type": "image/svg+xml",
    "etag": "\"cab-LcIa4M6f4JCE5j+9oe9VP16fdqI\"",
    "mtime": "2023-08-05T13:18:44.944Z",
    "size": 3243,
    "path": "../public/images/train_freight/cargo_types/oversized.svg"
  },
  "/images/train_freight/cargo_types/oversized.svg.br": {
    "type": "image/svg+xml",
    "encoding": "br",
    "etag": "\"54f-VCXqapNrNT0CZhnKAFYSaHgfISQ\"",
    "mtime": "2024-01-16T16:57:34.494Z",
    "size": 1359,
    "path": "../public/images/train_freight/cargo_types/oversized.svg.br"
  },
  "/images/train_freight/cargo_types/oversized.svg.gz": {
    "type": "image/svg+xml",
    "encoding": "gzip",
    "etag": "\"5ff-kN9TOH4pBdiYswHbrodOq+O4A3s\"",
    "mtime": "2024-01-16T16:57:34.483Z",
    "size": 1535,
    "path": "../public/images/train_freight/cargo_types/oversized.svg.gz"
  },
  "/images/train_freight/cargo_types/refrigerated.svg": {
    "type": "image/svg+xml",
    "etag": "\"1acf-F5lLDFXcuKsIAzngM8rRb6T+edk\"",
    "mtime": "2023-08-05T13:18:44.944Z",
    "size": 6863,
    "path": "../public/images/train_freight/cargo_types/refrigerated.svg"
  },
  "/images/train_freight/cargo_types/refrigerated.svg.br": {
    "type": "image/svg+xml",
    "encoding": "br",
    "etag": "\"a7c-HzUDpbRLET3MbUVo/8InrDMK8t8\"",
    "mtime": "2024-01-16T16:57:34.513Z",
    "size": 2684,
    "path": "../public/images/train_freight/cargo_types/refrigerated.svg.br"
  },
  "/images/train_freight/cargo_types/refrigerated.svg.gz": {
    "type": "image/svg+xml",
    "encoding": "gzip",
    "etag": "\"c62-kpQ/W/k5f08UZRRRz+yK0LRax2w\"",
    "mtime": "2024-01-16T16:57:34.496Z",
    "size": 3170,
    "path": "../public/images/train_freight/cargo_types/refrigerated.svg.gz"
  }
};

function readAsset (id) {
  const serverDir = dirname(fileURLToPath(globalThis._importMeta_.url));
  return promises.readFile(resolve(serverDir, assets[id].path))
}

const publicAssetBases = {"/_nuxt":{"maxAge":31536000}};

function isPublicAssetURL(id = '') {
  if (assets[id]) {
    return true
  }
  for (const base in publicAssetBases) {
    if (id.startsWith(base)) { return true }
  }
  return false
}

function getAsset (id) {
  return assets[id]
}

const METHODS = /* @__PURE__ */ new Set(["HEAD", "GET"]);
const EncodingMap = { gzip: ".gz", br: ".br" };
const _f4b49z = eventHandler((event) => {
  if (event.node.req.method && !METHODS.has(event.node.req.method)) {
    return;
  }
  let id = decodeURIComponent(
    withLeadingSlash(
      withoutTrailingSlash(parseURL(event.node.req.url).pathname)
    )
  );
  let asset;
  const encodingHeader = String(
    event.node.req.headers["accept-encoding"] || ""
  );
  const encodings = [
    ...encodingHeader.split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(),
    ""
  ];
  if (encodings.length > 1) {
    event.node.res.setHeader("Vary", "Accept-Encoding");
  }
  for (const encoding of encodings) {
    for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
      const _asset = getAsset(_id);
      if (_asset) {
        asset = _asset;
        id = _id;
        break;
      }
    }
  }
  if (!asset) {
    if (isPublicAssetURL(id)) {
      event.node.res.removeHeader("cache-control");
      throw createError({
        statusMessage: "Cannot find static asset " + id,
        statusCode: 404
      });
    }
    return;
  }
  const ifNotMatch = event.node.req.headers["if-none-match"] === asset.etag;
  if (ifNotMatch) {
    event.node.res.statusCode = 304;
    event.node.res.end();
    return;
  }
  const ifModifiedSinceH = event.node.req.headers["if-modified-since"];
  const mtimeDate = new Date(asset.mtime);
  if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= mtimeDate) {
    event.node.res.statusCode = 304;
    event.node.res.end();
    return;
  }
  if (asset.type && !event.node.res.getHeader("Content-Type")) {
    event.node.res.setHeader("Content-Type", asset.type);
  }
  if (asset.etag && !event.node.res.getHeader("ETag")) {
    event.node.res.setHeader("ETag", asset.etag);
  }
  if (asset.mtime && !event.node.res.getHeader("Last-Modified")) {
    event.node.res.setHeader("Last-Modified", mtimeDate.toUTCString());
  }
  if (asset.encoding && !event.node.res.getHeader("Content-Encoding")) {
    event.node.res.setHeader("Content-Encoding", asset.encoding);
  }
  if (asset.size > 0 && !event.node.res.getHeader("Content-Length")) {
    event.node.res.setHeader("Content-Length", asset.size);
  }
  return readAsset(id);
});

const _ogvWPp = lazyEventHandler(() => {
  const opts = useRuntimeConfig().ipx;
  const ipxOptions = {
    ...opts || {},
    dir: fileURLToPath(new URL(opts.dir, globalThis._importMeta_.url))
  };
  const ipx = createIPX(ipxOptions);
  const middleware = createIPXMiddleware(ipx);
  return eventHandler(async (event) => {
    event.node.req.url = withLeadingSlash(event.context.params._);
    await middleware(event.node.req, event.node.res);
  });
});

const disallow = "/inkoterms-2020";
const sitemap = ["https://tislogistic.ru/sitemap.xml"];
const indexable = true;
const robotsDisabledValue = "noindex, nofollow";

const asArray = (v) => Array.isArray(v) ? v : [v];
const _0oSyoA = defineEventHandler(async (event) => {
  setHeader(event, "Content-Type", "text/plain");
  const debug = "";
  const sitemapLink = (sitemap && indexable ? asArray(sitemap || []) : []).map((path) => `Sitemap: ${path}`).join("\n");
  const disallowedPaths = (asArray(disallow ) ).map((path) => `Disallow: ${path}`).join("\n");
  return `${debug}User-agent: *
${disallowedPaths}
${sitemapLink}`;
});

const _nrgIgV = defineEventHandler((event) => {
  if (event.path === "/robots.txt")
    return;
  const routeRules = getRouteRules(event);
  if (typeof routeRules.robots === "string")
    setHeader(event, "X-Robots-Tag", routeRules.robots);
  else if (routeRules.index === false || indexable === false)
    setHeader(event, "X-Robots-Tag", robotsDisabledValue);
});

const _lazy_z3NbxA = () => import('./renderer.mjs').then(function (n) { return n.r; });
const _lazy_bEjehI = () => import('./og.png.mjs');
const _lazy_N5apiL = () => import('./html.mjs');
const _lazy_cufkMF = () => import('./options.mjs');
const _lazy_mGbiHO = () => import('./svg.mjs');
const _lazy_rHfIrT = () => import('./vnode.mjs');
const _lazy_CWaQx7 = () => import('./font.mjs');

const handlers = [
  { route: '', handler: _f4b49z, lazy: false, middleware: true, method: undefined },
  { route: '/__nuxt_error', handler: _lazy_z3NbxA, lazy: true, middleware: false, method: undefined },
  { route: '/_ipx/**', handler: _ogvWPp, lazy: false, middleware: false, method: undefined },
  { route: '/robots.txt', handler: _0oSyoA, lazy: false, middleware: false, method: undefined },
  { route: '', handler: _nrgIgV, lazy: false, middleware: false, method: undefined },
  { route: '', handler: _lazy_bEjehI, lazy: true, middleware: false, method: undefined },
  { route: '/api/og-image-html', handler: _lazy_N5apiL, lazy: true, middleware: false, method: undefined },
  { route: '/api/og-image-options', handler: _lazy_cufkMF, lazy: true, middleware: false, method: undefined },
  { route: '/api/og-image-svg', handler: _lazy_mGbiHO, lazy: true, middleware: false, method: undefined },
  { route: '/api/og-image-vnode', handler: _lazy_rHfIrT, lazy: true, middleware: false, method: undefined },
  { route: '/api/og-image-font', handler: _lazy_CWaQx7, lazy: true, middleware: false, method: undefined },
  { route: '/**', handler: _lazy_z3NbxA, lazy: true, middleware: false, method: undefined }
];

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const h3App = createApp({
    debug: destr(false),
    onError: errorHandler
  });
  const router = createRouter$1();
  h3App.use(createRouteRulesHandler());
  const localCall = createCall(toNodeListener(h3App));
  const localFetch = createFetch(localCall, globalThis.fetch);
  const $fetch = createFetch$1({
    fetch: localFetch,
    Headers,
    defaults: { baseURL: config.app.baseURL }
  });
  globalThis.$fetch = $fetch;
  h3App.use(
    eventHandler((event) => {
      const envContext = event.node.req.__unenv__;
      if (envContext) {
        Object.assign(event.context, envContext);
      }
      event.fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: localFetch });
      event.$fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: $fetch });
    })
  );
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(
        /\/+/g,
        "/"
      );
      h3App.use(middlewareBase, handler);
    } else {
      const routeRules = getRouteRulesForPath(
        h.route.replace(/:\w+|\*\*/g, "_")
      );
      if (routeRules.cache) {
        handler = cachedEventHandler(handler, {
          group: "nitro/routes",
          ...routeRules.cache
        });
      }
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router);
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch
  };
  for (const plugin of plugins) {
    plugin(app);
  }
  return app;
}
const nitroApp = createNitroApp();
const useNitroApp = () => nitroApp;

const cert = process.env.NITRO_SSL_CERT;
const key = process.env.NITRO_SSL_KEY;
const server = cert && key ? new Server({ key, cert }, toNodeListener(nitroApp.h3App)) : new Server$1(toNodeListener(nitroApp.h3App));
const port = destr(process.env.NITRO_PORT || process.env.PORT) || 3e3;
const host = process.env.NITRO_HOST || process.env.HOST;
const s = server.listen(port, host, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  const protocol = cert && key ? "https" : "http";
  const i = s.address();
  const baseURL = (useRuntimeConfig().app.baseURL || "").replace(/\/$/, "");
  const url = `${protocol}://${i.family === "IPv6" ? `[${i.address}]` : i.address}:${i.port}${baseURL}`;
  console.log(`Listening ${url}`);
});
{
  process.on(
    "unhandledRejection",
    (err) => console.error("[nitro] [dev] [unhandledRejection] " + err)
  );
  process.on(
    "uncaughtException",
    (err) => console.error("[nitro] [dev] [uncaughtException] " + err)
  );
}
const nodeServer = {};

export { useRuntimeConfig as a, useStorage as b, defineCachedEventHandler as d, getRouteRules as g, nodeServer as n, useNitroApp as u };
//# sourceMappingURL=node-server.mjs.map
