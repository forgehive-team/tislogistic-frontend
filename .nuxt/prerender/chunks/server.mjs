import { getCurrentInstance, version, toRef, isRef, inject, ref, watchEffect, watch, useSSRContext, createApp, reactive, unref, provide, onErrorCaptured, onServerPrefetch, shallowRef, computed, isReadonly, defineAsyncComponent, withCtx, createVNode, nextTick, defineComponent, h, Suspense, Transition } from 'file://C:/Users/tzhovtyy/Desktop/tislogistic-frontend/node_modules/vue/index.mjs';
import { $fetch } from 'file://C:/Users/tzhovtyy/Desktop/tislogistic-frontend/node_modules/ofetch/dist/node.mjs';
import { createHooks } from 'file://C:/Users/tzhovtyy/Desktop/tislogistic-frontend/node_modules/hookable/dist/index.mjs';
import { getContext, executeAsync } from 'file://C:/Users/tzhovtyy/Desktop/tislogistic-frontend/node_modules/unctx/dist/index.mjs';
import { createMemoryHistory, createRouter, useRoute as useRoute$1, RouterView } from 'file://C:/Users/tzhovtyy/Desktop/tislogistic-frontend/node_modules/vue-router/dist/vue-router.node.mjs';
import { sendRedirect, createError as createError$1, setResponseStatus as setResponseStatus$1 } from 'file://C:/Users/tzhovtyy/Desktop/tislogistic-frontend/node_modules/h3/dist/index.mjs';
import { hasProtocol as hasProtocol$1, parseURL, joinURL as joinURL$1, encodeParam, isEqual, withLeadingSlash, encodePath } from 'file://C:/Users/tzhovtyy/Desktop/tislogistic-frontend/node_modules/ufo/dist/index.mjs';
import { defu } from 'file://C:/Users/tzhovtyy/Desktop/tislogistic-frontend/node_modules/defu/dist/defu.mjs';
import { ssrRenderSuspense, ssrRenderComponent } from 'file://C:/Users/tzhovtyy/Desktop/tislogistic-frontend/node_modules/vue/server-renderer/index.mjs';
import { a as useRuntimeConfig$1 } from './nitro-prerenderer.mjs';
import 'file://C:/Users/tzhovtyy/Desktop/tislogistic-frontend/node_modules/node-fetch-native/dist/polyfill.mjs';
import 'file://C:/Users/tzhovtyy/Desktop/tislogistic-frontend/node_modules/destr/dist/index.mjs';
import 'file://C:/Users/tzhovtyy/Desktop/tislogistic-frontend/node_modules/unenv/runtime/fetch/index.mjs';
import 'file://C:/Users/tzhovtyy/Desktop/tislogistic-frontend/node_modules/scule/dist/index.mjs';
import 'file://C:/Users/tzhovtyy/Desktop/tislogistic-frontend/node_modules/ohash/dist/index.mjs';
import 'file://C:/Users/tzhovtyy/Desktop/tislogistic-frontend/node_modules/unstorage/dist/index.mjs';
import 'file://C:/Users/tzhovtyy/Desktop/tislogistic-frontend/node_modules/unstorage/drivers/fs.mjs';
import 'file://C:/Users/tzhovtyy/Desktop/tislogistic-frontend/node_modules/radix3/dist/index.mjs';
import 'node:url';
import 'file://C:/Users/tzhovtyy/Desktop/tislogistic-frontend/node_modules/ipx/dist/index.mjs';

const appConfig = useRuntimeConfig$1().app;
const baseURL = () => appConfig.baseURL;
const nuxtAppCtx = /* @__PURE__ */ getContext("nuxt-app");
const NuxtPluginIndicator = "__nuxt_plugin";
function createNuxtApp(options) {
  let hydratingCount = 0;
  const nuxtApp = {
    provide: void 0,
    globalName: "nuxt",
    versions: {
      get nuxt() {
        return "3.3.2";
      },
      get vue() {
        return nuxtApp.vueApp.version;
      }
    },
    payload: reactive({
      data: {},
      state: {},
      _errors: {},
      ...{ serverRendered: true }
    }),
    static: {
      data: {}
    },
    isHydrating: false,
    deferHydration() {
      if (!nuxtApp.isHydrating) {
        return () => {
        };
      }
      hydratingCount++;
      let called = false;
      return () => {
        if (called) {
          return;
        }
        called = true;
        hydratingCount--;
        if (hydratingCount === 0) {
          nuxtApp.isHydrating = false;
          return nuxtApp.callHook("app:suspense:resolve");
        }
      };
    },
    _asyncDataPromises: {},
    _asyncData: {},
    ...options
  };
  nuxtApp.hooks = createHooks();
  nuxtApp.hook = nuxtApp.hooks.hook;
  {
    async function contextCaller(hooks, args) {
      for (const hook of hooks) {
        await nuxtAppCtx.call(nuxtApp, () => hook(...args));
      }
    }
    nuxtApp.hooks.callHook = (name, ...args) => nuxtApp.hooks.callHookWith(contextCaller, name, ...args);
  }
  nuxtApp.callHook = nuxtApp.hooks.callHook;
  nuxtApp.provide = (name, value) => {
    const $name = "$" + name;
    defineGetter(nuxtApp, $name, value);
    defineGetter(nuxtApp.vueApp.config.globalProperties, $name, value);
  };
  defineGetter(nuxtApp.vueApp, "$nuxt", nuxtApp);
  defineGetter(nuxtApp.vueApp.config.globalProperties, "$nuxt", nuxtApp);
  {
    if (nuxtApp.ssrContext) {
      nuxtApp.ssrContext.nuxt = nuxtApp;
    }
    nuxtApp.ssrContext = nuxtApp.ssrContext || {};
    if (nuxtApp.ssrContext.payload) {
      Object.assign(nuxtApp.payload, nuxtApp.ssrContext.payload);
    }
    nuxtApp.ssrContext.payload = nuxtApp.payload;
    nuxtApp.payload.config = {
      public: options.ssrContext.runtimeConfig.public,
      app: options.ssrContext.runtimeConfig.app
    };
  }
  const runtimeConfig = options.ssrContext.runtimeConfig;
  const compatibilityConfig = new Proxy(runtimeConfig, {
    get(target, prop) {
      if (prop === "public") {
        return target.public;
      }
      return target[prop] ?? target.public[prop];
    },
    set(target, prop, value) {
      {
        return false;
      }
    }
  });
  nuxtApp.provide("config", compatibilityConfig);
  return nuxtApp;
}
async function applyPlugin(nuxtApp, plugin) {
  if (typeof plugin !== "function") {
    return;
  }
  const { provide: provide2 } = await callWithNuxt(nuxtApp, plugin, [nuxtApp]) || {};
  if (provide2 && typeof provide2 === "object") {
    for (const key in provide2) {
      nuxtApp.provide(key, provide2[key]);
    }
  }
}
async function applyPlugins(nuxtApp, plugins2) {
  for (const plugin of plugins2) {
    await applyPlugin(nuxtApp, plugin);
  }
}
function normalizePlugins(_plugins2) {
  const plugins2 = _plugins2.map((plugin) => {
    if (typeof plugin !== "function") {
      return null;
    }
    if (plugin.length > 1) {
      return (nuxtApp) => plugin(nuxtApp, nuxtApp.provide);
    }
    return plugin;
  }).filter(Boolean);
  return plugins2;
}
function defineNuxtPlugin(plugin) {
  plugin[NuxtPluginIndicator] = true;
  return plugin;
}
function callWithNuxt(nuxt, setup, args) {
  const fn = () => args ? setup(...args) : setup();
  {
    return nuxtAppCtx.callAsync(nuxt, fn);
  }
}
function useNuxtApp() {
  const nuxtAppInstance = nuxtAppCtx.tryUse();
  if (!nuxtAppInstance) {
    const vm = getCurrentInstance();
    if (!vm) {
      throw new Error("nuxt instance unavailable");
    }
    return vm.appContext.app.$nuxt;
  }
  return nuxtAppInstance;
}
function useRuntimeConfig() {
  return useNuxtApp().$config;
}
function defineGetter(obj, key, val) {
  Object.defineProperty(obj, key, { get: () => val });
}
const components = {};
const components_plugin_KR1HBZs4kY = /* @__PURE__ */ defineNuxtPlugin((nuxtApp) => {
  for (const name in components) {
    nuxtApp.vueApp.component(name, components[name]);
    nuxtApp.vueApp.component("Lazy" + name, components[name]);
  }
});
function asArray$1(value) {
  return Array.isArray(value) ? value : [value];
}
const SelfClosingTags = ["meta", "link", "base"];
const TagsWithInnerContent = ["title", "script", "style", "noscript"];
const ValidHeadTags = [
  "title",
  "titleTemplate",
  "templateParams",
  "base",
  "htmlAttrs",
  "bodyAttrs",
  "meta",
  "link",
  "style",
  "script",
  "noscript"
];
const UniqueTags = ["base", "title", "titleTemplate", "bodyAttrs", "htmlAttrs", "templateParams"];
const TagConfigKeys = ["tagPosition", "tagPriority", "tagDuplicateStrategy", "innerHTML", "textContent"];
function defineHeadPlugin(plugin) {
  return plugin;
}
function hashCode$1(s) {
  let h2 = 9;
  for (let i = 0; i < s.length; )
    h2 = Math.imul(h2 ^ s.charCodeAt(i++), 9 ** 9);
  return ((h2 ^ h2 >>> 9) + 65536).toString(16).substring(1, 8).toLowerCase();
}
function hashTag(tag) {
  return hashCode$1(`${tag.tag}:${tag.textContent || tag.innerHTML || ""}:${Object.entries(tag.props).map(([key, value]) => `${key}:${String(value)}`).join(",")}`);
}
function computeHashes(hashes) {
  let h2 = 9;
  for (const s of hashes) {
    for (let i = 0; i < s.length; )
      h2 = Math.imul(h2 ^ s.charCodeAt(i++), 9 ** 9);
  }
  return ((h2 ^ h2 >>> 9) + 65536).toString(16).substring(1, 8).toLowerCase();
}
function tagDedupeKey(tag, fn) {
  const { props, tag: tagName } = tag;
  if (UniqueTags.includes(tagName))
    return tagName;
  if (tagName === "link" && props.rel === "canonical")
    return "canonical";
  if (props.charset)
    return "charset";
  const name = ["id"];
  if (tagName === "meta")
    name.push(...["name", "property", "http-equiv"]);
  for (const n of name) {
    if (typeof props[n] !== "undefined") {
      const val = String(props[n]);
      if (fn && !fn(val))
        return false;
      return `${tagName}:${n}:${val}`;
    }
  }
  return false;
}
const resolveTitleTemplate = (template, title) => {
  if (template == null)
    return title || null;
  if (typeof template === "function")
    return template(title);
  return template;
};
const TAG_WEIGHTS = {
  // aliases
  critical: 2,
  high: 9,
  low: 12,
  // tags
  base: -1,
  title: 1,
  meta: 10
};
function tagWeight(tag) {
  if (typeof tag.tagPriority === "number")
    return tag.tagPriority;
  if (tag.tag === "meta") {
    if (tag.props.charset)
      return -2;
    if (tag.props["http-equiv"] === "content-security-policy")
      return 0;
  }
  const key = tag.tagPriority || tag.tag;
  if (key in TAG_WEIGHTS) {
    return TAG_WEIGHTS[key];
  }
  return 10;
}
const SortModifiers = [{ prefix: "before:", offset: -1 }, { prefix: "after:", offset: 1 }];
function SortTagsPlugin() {
  return defineHeadPlugin({
    hooks: {
      "tags:resolve": (ctx) => {
        const tagPositionForKey = (key) => {
          var _a;
          return (_a = ctx.tags.find((tag) => tag._d === key)) == null ? void 0 : _a._p;
        };
        for (const { prefix, offset } of SortModifiers) {
          for (const tag of ctx.tags.filter((tag2) => typeof tag2.tagPriority === "string" && tag2.tagPriority.startsWith(prefix))) {
            const position = tagPositionForKey(
              tag.tagPriority.replace(prefix, "")
            );
            if (typeof position !== "undefined")
              tag._p = position + offset;
          }
        }
        ctx.tags.sort((a, b) => a._p - b._p).sort((a, b) => tagWeight(a) - tagWeight(b));
      }
    }
  });
}
const TitleTemplatePlugin = () => {
  return defineHeadPlugin({
    hooks: {
      "tags:resolve": (ctx) => {
        const { tags } = ctx;
        let titleTemplateIdx = tags.findIndex((i) => i.tag === "titleTemplate");
        const titleIdx = tags.findIndex((i) => i.tag === "title");
        if (titleIdx !== -1 && titleTemplateIdx !== -1) {
          const newTitle = resolveTitleTemplate(
            tags[titleTemplateIdx].textContent,
            tags[titleIdx].textContent
          );
          if (newTitle !== null) {
            tags[titleIdx].textContent = newTitle || tags[titleIdx].textContent;
          } else {
            delete tags[titleIdx];
          }
        } else if (titleTemplateIdx !== -1) {
          const newTitle = resolveTitleTemplate(
            tags[titleTemplateIdx].textContent
          );
          if (newTitle !== null) {
            tags[titleTemplateIdx].textContent = newTitle;
            tags[titleTemplateIdx].tag = "title";
            titleTemplateIdx = -1;
          }
        }
        if (titleTemplateIdx !== -1) {
          delete tags[titleTemplateIdx];
        }
        ctx.tags = tags.filter(Boolean);
      }
    }
  });
};
const DeprecatedTagAttrPlugin = () => {
  return defineHeadPlugin({
    hooks: {
      "tag:normalise": function({ tag }) {
        if (typeof tag.props.body !== "undefined") {
          tag.tagPosition = "bodyClose";
          delete tag.props.body;
        }
      }
    }
  });
};
const DupeableTags = ["link", "style", "script", "noscript"];
const ProvideTagHashPlugin = () => {
  return defineHeadPlugin({
    hooks: {
      "tag:normalise": ({ tag, resolvedOptions }) => {
        if (resolvedOptions.experimentalHashHydration === true) {
          tag._h = hashTag(tag);
        }
        if (tag.key && DupeableTags.includes(tag.tag)) {
          tag._h = hashCode$1(tag.key);
          tag.props[`data-h-${tag._h}`] = "";
        }
      }
    }
  });
};
const ValidEventTags = ["script", "link", "bodyAttrs"];
const EventHandlersPlugin = () => {
  const stripEventHandlers = (mode, tag) => {
    const props = {};
    const eventHandlers = {};
    Object.entries(tag.props).forEach(([key, value]) => {
      if (key.startsWith("on") && typeof value === "function")
        eventHandlers[key] = value;
      else
        props[key] = value;
    });
    let delayedSrc;
    if (mode === "dom" && tag.tag === "script" && typeof props.src === "string" && typeof eventHandlers.onload !== "undefined") {
      delayedSrc = props.src;
      delete props.src;
    }
    return { props, eventHandlers, delayedSrc };
  };
  return defineHeadPlugin({
    hooks: {
      "ssr:render": function(ctx) {
        ctx.tags = ctx.tags.map((tag) => {
          if (!ValidEventTags.includes(tag.tag))
            return tag;
          if (!Object.entries(tag.props).find(([key, value]) => key.startsWith("on") && typeof value === "function"))
            return tag;
          tag.props = stripEventHandlers("ssr", tag).props;
          return tag;
        });
      },
      "dom:beforeRenderTag": function(ctx) {
        if (!ValidEventTags.includes(ctx.tag.tag))
          return;
        if (!Object.entries(ctx.tag.props).find(([key, value]) => key.startsWith("on") && typeof value === "function"))
          return;
        const { props, eventHandlers, delayedSrc } = stripEventHandlers("dom", ctx.tag);
        if (!Object.keys(eventHandlers).length)
          return;
        ctx.tag.props = props;
        ctx.tag._eventHandlers = eventHandlers;
        ctx.tag._delayedSrc = delayedSrc;
      },
      "dom:renderTag": function(ctx) {
        const $el = ctx.$el;
        if (!ctx.tag._eventHandlers || !$el)
          return;
        const $eventListenerTarget = ctx.tag.tag === "bodyAttrs" && false ? window : $el;
        Object.entries(ctx.tag._eventHandlers).forEach(([k, value]) => {
          const sdeKey = `${ctx.tag._d || ctx.tag._p}:${k}`;
          const eventName = k.slice(2).toLowerCase();
          const eventDedupeKey = `data-h-${eventName}`;
          ctx.markSideEffect(sdeKey, () => {
          });
          if ($el.hasAttribute(eventDedupeKey))
            return;
          const handler = value;
          $el.setAttribute(eventDedupeKey, "");
          $eventListenerTarget.addEventListener(eventName, handler);
          if (ctx.entry) {
            ctx.entry._sde[sdeKey] = () => {
              $eventListenerTarget.removeEventListener(eventName, handler);
              $el.removeAttribute(eventDedupeKey);
            };
          }
        });
        if (ctx.tag._delayedSrc) {
          $el.setAttribute("src", ctx.tag._delayedSrc);
        }
      }
    }
  });
};
const UsesMergeStrategy = ["templateParams", "htmlAttrs", "bodyAttrs"];
const DedupesTagsPlugin = () => {
  return defineHeadPlugin({
    hooks: {
      "tag:normalise": function({ tag }) {
        ["hid", "vmid", "key"].forEach((key) => {
          if (tag.props[key]) {
            tag.key = tag.props[key];
            delete tag.props[key];
          }
        });
        const dedupe = tag.key ? `${tag.tag}:${tag.key}` : tagDedupeKey(tag);
        if (dedupe)
          tag._d = dedupe;
      },
      "tags:resolve": function(ctx) {
        const deduping = {};
        ctx.tags.forEach((tag) => {
          const dedupeKey = tag._d || tag._p;
          const dupedTag = deduping[dedupeKey];
          if (dupedTag) {
            let strategy = tag == null ? void 0 : tag.tagDuplicateStrategy;
            if (!strategy && UsesMergeStrategy.includes(tag.tag))
              strategy = "merge";
            if (strategy === "merge") {
              const oldProps = dupedTag.props;
              ["class", "style"].forEach((key) => {
                if (tag.props[key] && oldProps[key]) {
                  if (key === "style" && !oldProps[key].endsWith(";"))
                    oldProps[key] += ";";
                  tag.props[key] = `${oldProps[key]} ${tag.props[key]}`;
                }
              });
              deduping[dedupeKey].props = {
                ...oldProps,
                ...tag.props
              };
              return;
            } else if (tag._e === dupedTag._e) {
              dupedTag._duped = dupedTag._duped || [];
              tag._d = `${dupedTag._d}:${dupedTag._duped.length + 1}`;
              dupedTag._duped.push(tag);
              return;
            }
            const propCount = Object.keys(tag.props).length;
            if ((propCount === 0 || propCount === 1 && typeof tag.props["data-h-key"] !== "undefined") && !tag.innerHTML && !tag.textContent) {
              delete deduping[dedupeKey];
              return;
            }
          }
          deduping[dedupeKey] = tag;
        });
        const newTags = [];
        Object.values(deduping).forEach((tag) => {
          const dupes = tag._duped;
          delete tag._duped;
          newTags.push(tag);
          if (dupes)
            newTags.push(...dupes);
        });
        ctx.tags = newTags;
      }
    }
  });
};
function processTemplateParams(s, config2) {
  function sub(token) {
    if (["s", "pageTitle"].includes(token))
      return config2.pageTitle;
    let val;
    if (token.includes(".")) {
      val = token.split(".").reduce((acc, key) => acc ? acc[key] || void 0 : void 0, config2);
    } else {
      val = config2[token];
    }
    return typeof val !== "undefined" ? val || "" : false;
  }
  let decoded = s;
  try {
    decoded = decodeURI(s);
  } catch {
  }
  const tokens = (decoded.match(/%(\w+\.+\w+)|%(\w+)/g) || []).sort().reverse();
  tokens.forEach((token) => {
    const re = sub(token.slice(1));
    if (typeof re === "string") {
      s = s.replaceAll(new RegExp(`\\${token}(\\W|$)`, "g"), `${re}$1`).trim();
    }
  });
  if (config2.separator) {
    if (s.endsWith(config2.separator))
      s = s.slice(0, -config2.separator.length).trim();
    if (s.startsWith(config2.separator))
      s = s.slice(config2.separator.length).trim();
    s = s.replace(new RegExp(`\\${config2.separator}\\s*\\${config2.separator}`, "g"), config2.separator);
  }
  return s;
}
function TemplateParamsPlugin() {
  return defineHeadPlugin({
    hooks: {
      "tags:resolve": (ctx) => {
        var _a;
        const { tags } = ctx;
        const title = (_a = tags.find((tag) => tag.tag === "title")) == null ? void 0 : _a.textContent;
        const idx = tags.findIndex((tag) => tag.tag === "templateParams");
        const params = idx !== -1 ? tags[idx].props : {};
        params.pageTitle = params.pageTitle || title || "";
        for (const tag of tags) {
          if (["titleTemplate", "title"].includes(tag.tag) && typeof tag.textContent === "string") {
            tag.textContent = processTemplateParams(tag.textContent, params);
          } else if (tag.tag === "meta" && typeof tag.props.content === "string") {
            tag.props.content = processTemplateParams(tag.props.content, params);
          } else if (tag.tag === "link" && typeof tag.props.href === "string") {
            tag.props.href = processTemplateParams(tag.props.href, params);
          } else if (tag.tag === "script" && ["application/json", "application/ld+json"].includes(tag.props.type) && typeof tag.innerHTML === "string") {
            try {
              tag.innerHTML = JSON.stringify(JSON.parse(tag.innerHTML), (key, val) => {
                if (typeof val === "string")
                  return processTemplateParams(val, params);
                return val;
              });
            } catch {
            }
          }
        }
        ctx.tags = tags.filter((tag) => tag.tag !== "templateParams");
      }
    }
  });
}
let activeHead;
const setActiveHead = (head) => activeHead = head;
const getActiveHead = () => activeHead;
async function normaliseTag(tagName, input) {
  const tag = { tag: tagName, props: {} };
  if (tagName === "templateParams") {
    tag.props = input;
    return tag;
  }
  if (["title", "titleTemplate"].includes(tagName)) {
    tag.textContent = input instanceof Promise ? await input : input;
    return tag;
  }
  if (typeof input === "string") {
    if (!["script", "noscript", "style"].includes(tagName))
      return false;
    if (tagName === "script" && (/^(https?:)?\/\//.test(input) || input.startsWith("/")))
      tag.props.src = input;
    else
      tag.innerHTML = input;
    return tag;
  }
  tag.props = await normaliseProps(tagName, { ...input });
  if (tag.props.children) {
    tag.props.innerHTML = tag.props.children;
  }
  delete tag.props.children;
  Object.keys(tag.props).filter((k) => TagConfigKeys.includes(k)).forEach((k) => {
    if (!["innerHTML", "textContent"].includes(k) || TagsWithInnerContent.includes(tag.tag)) {
      tag[k] = tag.props[k];
    }
    delete tag.props[k];
  });
  ["innerHTML", "textContent"].forEach((k) => {
    if (tag.tag === "script" && typeof tag[k] === "string" && ["application/ld+json", "application/json"].includes(tag.props.type)) {
      try {
        tag[k] = JSON.parse(tag[k]);
      } catch (e) {
        tag[k] = "";
      }
    }
    if (typeof tag[k] === "object")
      tag[k] = JSON.stringify(tag[k]);
  });
  if (tag.props.class)
    tag.props.class = normaliseClassProp(tag.props.class);
  if (tag.props.content && Array.isArray(tag.props.content))
    return tag.props.content.map((v) => ({ ...tag, props: { ...tag.props, content: v } }));
  return tag;
}
function normaliseClassProp(v) {
  if (typeof v === "object" && !Array.isArray(v)) {
    v = Object.keys(v).filter((k) => v[k]);
  }
  return (Array.isArray(v) ? v.join(" ") : v).split(" ").filter((c) => c.trim()).filter(Boolean).join(" ");
}
async function normaliseProps(tagName, props) {
  for (const k of Object.keys(props)) {
    const isDataKey = k.startsWith("data-");
    if (props[k] instanceof Promise) {
      props[k] = await props[k];
    }
    if (String(props[k]) === "true") {
      props[k] = isDataKey ? "true" : "";
    } else if (String(props[k]) === "false") {
      if (isDataKey) {
        props[k] = "false";
      } else {
        delete props[k];
      }
    }
  }
  return props;
}
const TagEntityBits = 10;
async function normaliseEntryTags(e) {
  const tagPromises = [];
  Object.entries(e.resolvedInput).filter(([k, v]) => typeof v !== "undefined" && ValidHeadTags.includes(k)).forEach(([k, value]) => {
    const v = asArray$1(value);
    tagPromises.push(...v.map((props) => normaliseTag(k, props)).flat());
  });
  return (await Promise.all(tagPromises)).flat().filter(Boolean).map((t, i) => {
    t._e = e._i;
    t._p = (e._i << TagEntityBits) + i;
    return t;
  });
}
const CorePlugins = () => [
  // dedupe needs to come first
  DedupesTagsPlugin(),
  SortTagsPlugin(),
  TemplateParamsPlugin(),
  TitleTemplatePlugin(),
  ProvideTagHashPlugin(),
  EventHandlersPlugin(),
  DeprecatedTagAttrPlugin()
];
function createServerHead$1(options = {}) {
  const head = createHeadCore(options);
  setActiveHead(head);
  return head;
}
function createHeadCore(options = {}) {
  let entries = [];
  let _sde = {};
  let _eid = 0;
  const hooks = createHooks();
  if (options == null ? void 0 : options.hooks)
    hooks.addHooks(options.hooks);
  options.plugins = [
    ...CorePlugins(),
    ...(options == null ? void 0 : options.plugins) || []
  ];
  options.plugins.forEach((p) => p.hooks && hooks.addHooks(p.hooks));
  options.document = options.document || void 0;
  const updated = () => hooks.callHook("entries:updated", head);
  const head = {
    resolvedOptions: options,
    headEntries() {
      return entries;
    },
    get hooks() {
      return hooks;
    },
    use(plugin) {
      if (plugin.hooks)
        hooks.addHooks(plugin.hooks);
    },
    push(input, options2) {
      const activeEntry = {
        _i: _eid++,
        input,
        _sde: {}
      };
      if (options2 == null ? void 0 : options2.mode)
        activeEntry._m = options2 == null ? void 0 : options2.mode;
      if (options2 == null ? void 0 : options2.transform) {
        activeEntry._t = options2 == null ? void 0 : options2.transform;
      }
      entries.push(activeEntry);
      updated();
      return {
        dispose() {
          entries = entries.filter((e) => {
            if (e._i !== activeEntry._i)
              return true;
            _sde = { ..._sde, ...e._sde || {} };
            e._sde = {};
            updated();
            return false;
          });
        },
        // a patch is the same as creating a new entry, just a nice DX
        patch(input2) {
          entries = entries.map((e) => {
            if (e._i === activeEntry._i) {
              activeEntry.input = e.input = input2;
              updated();
            }
            return e;
          });
        }
      };
    },
    async resolveTags() {
      const resolveCtx = { tags: [], entries: [...entries] };
      await hooks.callHook("entries:resolve", resolveCtx);
      for (const entry2 of resolveCtx.entries) {
        const transformer = entry2._t || ((i) => i);
        entry2.resolvedInput = transformer(entry2.resolvedInput || entry2.input);
        if (entry2.resolvedInput) {
          for (const tag of await normaliseEntryTags(entry2)) {
            const tagCtx = { tag, entry: entry2, resolvedOptions: head.resolvedOptions };
            await hooks.callHook("tag:normalise", tagCtx);
            resolveCtx.tags.push(tagCtx.tag);
          }
        }
      }
      await hooks.callHook("tags:resolve", resolveCtx);
      return resolveCtx.tags;
    },
    _popSideEffectQueue() {
      const sde = { ..._sde };
      _sde = {};
      return sde;
    },
    _elMap: {}
  };
  head.hooks.callHook("init", head);
  return head;
}
function resolveUnref(r) {
  return typeof r === "function" ? r() : unref(r);
}
function resolveUnrefHeadInput(ref2, lastKey = "") {
  if (ref2 instanceof Promise)
    return ref2;
  const root = resolveUnref(ref2);
  if (!ref2 || !root)
    return root;
  if (Array.isArray(root))
    return root.map((r) => resolveUnrefHeadInput(r, lastKey));
  if (typeof root === "object") {
    return Object.fromEntries(
      Object.entries(root).map(([k, v]) => {
        if (k === "titleTemplate" || k.startsWith("on"))
          return [k, unref(v)];
        return [k, resolveUnrefHeadInput(v, k)];
      })
    );
  }
  return root;
}
const Vue3 = version.startsWith("3");
const headSymbol = "usehead";
function injectHead() {
  return getCurrentInstance() && inject(headSymbol) || getActiveHead();
}
function vueInstall(head) {
  const plugin = {
    install(app) {
      if (Vue3) {
        app.config.globalProperties.$unhead = head;
        app.config.globalProperties.$head = head;
        app.provide(headSymbol, head);
      }
    }
  };
  return plugin.install;
}
function createServerHead(options = {}) {
  const head = createServerHead$1({
    ...options,
    plugins: [
      VueReactiveUseHeadPlugin(),
      ...(options == null ? void 0 : options.plugins) || []
    ]
  });
  head.install = vueInstall(head);
  return head;
}
const VueReactiveUseHeadPlugin = () => {
  return defineHeadPlugin({
    hooks: {
      "entries:resolve": function(ctx) {
        for (const entry2 of ctx.entries)
          entry2.resolvedInput = resolveUnrefHeadInput(entry2.input);
      }
    }
  });
};
function clientUseHead(input, options = {}) {
  const head = injectHead();
  const deactivated = ref(false);
  const resolvedInput = ref({});
  watchEffect(() => {
    resolvedInput.value = deactivated.value ? {} : resolveUnrefHeadInput(input);
  });
  const entry2 = head.push(resolvedInput.value, options);
  watch(resolvedInput, (e) => {
    entry2.patch(e);
  });
  getCurrentInstance();
  return entry2;
}
function serverUseHead(input, options = {}) {
  const head = injectHead();
  return head.push(input, options);
}
function useHead(input, options = {}) {
  var _a;
  const head = injectHead();
  if (head) {
    const isBrowser = !!((_a = head.resolvedOptions) == null ? void 0 : _a.document);
    if (options.mode === "server" && isBrowser || options.mode === "client" && !isBrowser)
      return;
    return isBrowser ? clientUseHead(input, options) : serverUseHead(input, options);
  }
}
const propsToString = (props) => {
  const handledAttributes = [];
  for (const [key, value] of Object.entries(props)) {
    if (value === false || value == null)
      continue;
    let attribute = key;
    if (value !== true)
      attribute += `="${String(value).replace(/"/g, "&quot;")}"`;
    handledAttributes.push(attribute);
  }
  return handledAttributes.length > 0 ? ` ${handledAttributes.join(" ")}` : "";
};
function encodeInnerHtml(str) {
  return str.replace(/[&<>"'/]/g, (char) => {
    switch (char) {
      case "&":
        return "&amp;";
      case "<":
        return "&lt;";
      case ">":
        return "&gt;";
      case '"':
        return "&quot;";
      case "'":
        return "&#x27;";
      case "/":
        return "&#x2F;";
      default:
        return char;
    }
  });
}
const tagToString = (tag) => {
  const attrs = propsToString(tag.props);
  const openTag = `<${tag.tag}${attrs}>`;
  if (!TagsWithInnerContent.includes(tag.tag))
    return SelfClosingTags.includes(tag.tag) ? openTag : `${openTag}</${tag.tag}>`;
  let content = String(tag.innerHTML || "");
  if (tag.textContent)
    content = encodeInnerHtml(String(tag.textContent));
  return SelfClosingTags.includes(tag.tag) ? openTag : `${openTag}${content}</${tag.tag}>`;
};
function ssrRenderTags(tags) {
  const schema = { htmlAttrs: {}, bodyAttrs: {}, tags: { head: [], bodyClose: [], bodyOpen: [] } };
  for (const tag of tags) {
    if (tag.tag === "htmlAttrs" || tag.tag === "bodyAttrs") {
      schema[tag.tag] = { ...schema[tag.tag], ...tag.props };
      continue;
    }
    schema.tags[tag.tagPosition || "head"].push(tagToString(tag));
  }
  return {
    headTags: schema.tags.head.join("\n"),
    bodyTags: schema.tags.bodyClose.join("\n"),
    bodyTagsOpen: schema.tags.bodyOpen.join("\n"),
    htmlAttrs: propsToString(schema.htmlAttrs),
    bodyAttrs: propsToString(schema.bodyAttrs)
  };
}
async function renderSSRHead(head) {
  const beforeRenderCtx = { shouldRender: true };
  await head.hooks.callHook("ssr:beforeRender", beforeRenderCtx);
  if (!beforeRenderCtx.shouldRender) {
    return {
      headTags: "",
      bodyTags: "",
      bodyTagsOpen: "",
      htmlAttrs: "",
      bodyAttrs: ""
    };
  }
  const ctx = { tags: await head.resolveTags() };
  if (head.resolvedOptions.experimentalHashHydration) {
    ctx.tags.push({
      tag: "meta",
      props: {
        name: "unhead:ssr",
        content: computeHashes(
          ctx.tags.filter((t) => {
            const entry2 = head.headEntries().find((entry22) => entry22._i === t._e);
            return (entry2 == null ? void 0 : entry2._m) !== "server";
          }).map((tag) => tag._h)
        )
      }
    });
  }
  await head.hooks.callHook("ssr:render", ctx);
  const html = ssrRenderTags(ctx.tags);
  const renderCtx = { tags: ctx.tags, html };
  await head.hooks.callHook("ssr:rendered", renderCtx);
  return renderCtx.html;
}
const appPageTransition = { "name": "page", "mode": "out-in" };
const appHead = { "meta": [{ "name": "viewport", "content": "width=device-width, initial-scale=1" }, { "charset": "utf-8" }], "link": [], "style": [], "script": [{ "src": "https://mc.yandex.ru/metrika/tag.js", "async": true, "tagPosition": "head" }], "noscript": [], "titleTemplate": "%s %separator %siteName" };
const appLayoutTransition = false;
const appKeepalive = false;
const unhead_KgADcZ0jPj = /* @__PURE__ */ defineNuxtPlugin((nuxtApp) => {
  const createHead = createServerHead;
  const head = createHead();
  head.push(appHead);
  nuxtApp.vueApp.use(head);
  {
    nuxtApp.ssrContext.renderMeta = async () => {
      const meta = await renderSSRHead(head);
      return {
        ...meta,
        bodyScriptsPrepend: meta.bodyTagsOpen,
        // resolves naming difference with NuxtMeta and Unhead
        bodyScripts: meta.bodyTags
      };
    };
  }
});
function polyfillAsVueUseHead(head) {
  const polyfilled = head;
  polyfilled.headTags = head.resolveTags;
  polyfilled.addEntry = head.push;
  polyfilled.addHeadObjs = head.push;
  polyfilled.addReactiveEntry = (input, options) => {
    const api = useHead(input, options);
    if (typeof api !== "undefined")
      return api.dispose;
    return () => {
    };
  };
  polyfilled.removeHeadObjs = () => {
  };
  polyfilled.updateDOM = () => {
    head.hooks.callHook("entries:updated", head);
  };
  polyfilled.unhead = head;
  return polyfilled;
}
const vueuse_head_polyfill_M7DKUOwKp5 = /* @__PURE__ */ defineNuxtPlugin((nuxtApp) => {
  polyfillAsVueUseHead(nuxtApp.vueApp._context.provides.usehead);
});
function useState(...args) {
  const autoKey = typeof args[args.length - 1] === "string" ? args.pop() : void 0;
  if (typeof args[0] !== "string") {
    args.unshift(autoKey);
  }
  const [_key, init] = args;
  if (!_key || typeof _key !== "string") {
    throw new TypeError("[nuxt] [useState] key must be a string: " + _key);
  }
  if (init !== void 0 && typeof init !== "function") {
    throw new Error("[nuxt] [useState] init must be a function: " + init);
  }
  const key = "$s" + _key;
  const nuxt = useNuxtApp();
  const state = toRef(nuxt.payload.state, key);
  if (state.value === void 0 && init) {
    const initialValue = init();
    if (isRef(initialValue)) {
      nuxt.payload.state[key] = initialValue;
      return initialValue;
    }
    state.value = initialValue;
  }
  return state;
}
function useRequestEvent(nuxtApp = useNuxtApp()) {
  var _a;
  return (_a = nuxtApp.ssrContext) == null ? void 0 : _a.event;
}
function useRequestFetch() {
  var _a;
  const event = (_a = useNuxtApp().ssrContext) == null ? void 0 : _a.event;
  return (event == null ? void 0 : event.$fetch) || globalThis.$fetch;
}
function setResponseStatus(code, message) {
  setResponseStatus$1(useRequestEvent(), code, message);
}
const useRouter = () => {
  var _a;
  return (_a = useNuxtApp()) == null ? void 0 : _a.$router;
};
const useRoute = () => {
  if (getCurrentInstance()) {
    return inject("_route", useNuxtApp()._route);
  }
  return useNuxtApp()._route;
};
const defineNuxtRouteMiddleware = (middleware) => middleware;
const isProcessingMiddleware = () => {
  try {
    if (useNuxtApp()._processingMiddleware) {
      return true;
    }
  } catch {
    return true;
  }
  return false;
};
const navigateTo = (to, options) => {
  if (!to) {
    to = "/";
  }
  const toPath = typeof to === "string" ? to : to.path || "/";
  const isExternal = (options == null ? void 0 : options.external) || hasProtocol$1(toPath, { acceptRelative: true });
  if (isExternal && !(options == null ? void 0 : options.external)) {
    throw new Error("Navigating to external URL is not allowed by default. Use `navigateTo (url, { external: true })`.");
  }
  if (isExternal && parseURL(toPath).protocol === "script:") {
    throw new Error("Cannot navigate to an URL with script protocol.");
  }
  const router = useRouter();
  {
    const nuxtApp = useNuxtApp();
    if (nuxtApp.ssrContext && nuxtApp.ssrContext.event) {
      if (isProcessingMiddleware() && !isExternal) {
        setResponseStatus((options == null ? void 0 : options.redirectCode) || 302);
        return to;
      }
      const redirectLocation = isExternal ? toPath : joinURL$1(useRuntimeConfig().app.baseURL, router.resolve(to).fullPath || "/");
      return nuxtApp.callHook("app:redirected").then(() => sendRedirect(nuxtApp.ssrContext.event, redirectLocation, (options == null ? void 0 : options.redirectCode) || 302));
    }
  }
  if (isExternal) {
    if (options == null ? void 0 : options.replace) {
      location.replace(toPath);
    } else {
      location.href = toPath;
    }
    return Promise.resolve();
  }
  return (options == null ? void 0 : options.replace) ? router.replace(to) : router.push(to);
};
const useError = () => toRef(useNuxtApp().payload, "error");
const showError = (_err) => {
  const err = createError(_err);
  try {
    const nuxtApp = useNuxtApp();
    nuxtApp.callHook("app:error", err);
    const error = useError();
    error.value = error.value || err;
  } catch {
    throw err;
  }
  return err;
};
const createError = (err) => {
  const _err = createError$1(err);
  _err.__nuxt_error = true;
  return _err;
};
const __nuxt_page_meta$m = {
  breadcrumbTitle: "О компании"
};
const __nuxt_page_meta$l = {
  breadcrumbTitle: "Контакты"
};
const __nuxt_page_meta$k = {
  breadcrumbTitle: "Классификация контейнеров"
};
const __nuxt_page_meta$j = {
  breadcrumbTitle: "Пользовательское соглашение"
};
const __nuxt_page_meta$i = {
  breadcrumbTitle: "Главная страница"
};
const __nuxt_page_meta$h = {
  breadcrumbTitle: "ИНКОТЕРМС 2020"
};
const __nuxt_page_meta$g = {
  breadcrumbTitle: "Новости"
};
const __nuxt_page_meta$f = {
  breadcrumbTitle: "Политика конфиденциальности"
};
const __nuxt_page_meta$e = {
  breadcrumbTitle: "Проекты"
};
const __nuxt_page_meta$d = {
  breadcrumbTitle: "Аренда с доставкой"
};
const __nuxt_page_meta$c = {
  // $texts cannot be used here
  breadcrumbTitle: "Авиаперевозки"
};
const __nuxt_page_meta$b = {
  breadcrumbTitle: "Проектная логистика"
};
const __nuxt_page_meta$a = {
  breadcrumbTitle: "Услуги"
};
const __nuxt_page_meta$9 = {
  breadcrumbTitle: "Морские грузоперевозки"
};
const __nuxt_page_meta$8 = {
  breadcrumbTitle: "Мультимодальные перевозки"
};
const __nuxt_page_meta$7 = {
  breadcrumbTitle: "Проектная логистика"
};
const __nuxt_page_meta$6 = {
  breadcrumbTitle: "Таможенное оформление"
};
const __nuxt_page_meta$5 = {
  breadcrumbTitle: "Внешнеэкономическая деятельность"
};
const __nuxt_page_meta$4 = {
  // $texts cannot be used here
  breadcrumbTitle: "Железнодорожные перевозки"
};
const __nuxt_page_meta$3 = {
  breadcrumbTitle: "Карта сайтa"
};
const __nuxt_page_meta$2 = {
  breadcrumbTitle: "Тарифы на таможенное оформление грузов"
};
const __nuxt_page_meta$1 = {
  breadcrumbTitle: "Позиция и движение судов"
};
const __nuxt_page_meta = {
  breadcrumbTitle: "Вакансии"
};
const _routes = [
  {
    name: (__nuxt_page_meta$m == null ? void 0 : __nuxt_page_meta$m.name) ?? "about",
    path: (__nuxt_page_meta$m == null ? void 0 : __nuxt_page_meta$m.path) ?? "/about",
    meta: __nuxt_page_meta$m || {},
    alias: (__nuxt_page_meta$m == null ? void 0 : __nuxt_page_meta$m.alias) || [],
    redirect: (__nuxt_page_meta$m == null ? void 0 : __nuxt_page_meta$m.redirect) || void 0,
    component: () => import('./about-147f24d7.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$l == null ? void 0 : __nuxt_page_meta$l.name) ?? "contacts",
    path: (__nuxt_page_meta$l == null ? void 0 : __nuxt_page_meta$l.path) ?? "/contacts",
    meta: __nuxt_page_meta$l || {},
    alias: (__nuxt_page_meta$l == null ? void 0 : __nuxt_page_meta$l.alias) || [],
    redirect: (__nuxt_page_meta$l == null ? void 0 : __nuxt_page_meta$l.redirect) || void 0,
    component: () => import('./contacts-2f59b242.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$k == null ? void 0 : __nuxt_page_meta$k.name) ?? "containers",
    path: (__nuxt_page_meta$k == null ? void 0 : __nuxt_page_meta$k.path) ?? "/containers",
    meta: __nuxt_page_meta$k || {},
    alias: (__nuxt_page_meta$k == null ? void 0 : __nuxt_page_meta$k.alias) || [],
    redirect: (__nuxt_page_meta$k == null ? void 0 : __nuxt_page_meta$k.redirect) || void 0,
    component: () => import('./containers-201c9f66.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$j == null ? void 0 : __nuxt_page_meta$j.name) ?? "eula",
    path: (__nuxt_page_meta$j == null ? void 0 : __nuxt_page_meta$j.path) ?? "/eula",
    meta: __nuxt_page_meta$j || {},
    alias: (__nuxt_page_meta$j == null ? void 0 : __nuxt_page_meta$j.alias) || [],
    redirect: (__nuxt_page_meta$j == null ? void 0 : __nuxt_page_meta$j.redirect) || void 0,
    component: () => import('./eula-d7979f61.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$i == null ? void 0 : __nuxt_page_meta$i.name) ?? "index",
    path: (__nuxt_page_meta$i == null ? void 0 : __nuxt_page_meta$i.path) ?? "/",
    meta: __nuxt_page_meta$i || {},
    alias: (__nuxt_page_meta$i == null ? void 0 : __nuxt_page_meta$i.alias) || [],
    redirect: (__nuxt_page_meta$i == null ? void 0 : __nuxt_page_meta$i.redirect) || void 0,
    component: () => import('./index-3ae6aede.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$h == null ? void 0 : __nuxt_page_meta$h.name) ?? "inkoterms-2020",
    path: (__nuxt_page_meta$h == null ? void 0 : __nuxt_page_meta$h.path) ?? "/inkoterms-2020",
    meta: __nuxt_page_meta$h || {},
    alias: (__nuxt_page_meta$h == null ? void 0 : __nuxt_page_meta$h.alias) || [],
    redirect: (__nuxt_page_meta$h == null ? void 0 : __nuxt_page_meta$h.redirect) || void 0,
    component: () => import('./inkoterms-2020-1f619d44.mjs').then((m) => m.default || m)
  },
  {
    name: "news-slug",
    path: "/news/:slug",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import('./_slug_-38fbc356.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$g == null ? void 0 : __nuxt_page_meta$g.name) ?? "news",
    path: (__nuxt_page_meta$g == null ? void 0 : __nuxt_page_meta$g.path) ?? "/news",
    meta: __nuxt_page_meta$g || {},
    alias: (__nuxt_page_meta$g == null ? void 0 : __nuxt_page_meta$g.alias) || [],
    redirect: (__nuxt_page_meta$g == null ? void 0 : __nuxt_page_meta$g.redirect) || void 0,
    component: () => import('./index-dfd74922.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$f == null ? void 0 : __nuxt_page_meta$f.name) ?? "politika-konfidencialnosti",
    path: (__nuxt_page_meta$f == null ? void 0 : __nuxt_page_meta$f.path) ?? "/politika-konfidencialnosti",
    meta: __nuxt_page_meta$f || {},
    alias: (__nuxt_page_meta$f == null ? void 0 : __nuxt_page_meta$f.alias) || [],
    redirect: (__nuxt_page_meta$f == null ? void 0 : __nuxt_page_meta$f.redirect) || void 0,
    component: () => import('./politika-konfidencialnosti-63e4aaa9.mjs').then((m) => m.default || m)
  },
  {
    name: "projects-slug",
    path: "/projects/:slug",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import('./_slug_-a211f1d8.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$e == null ? void 0 : __nuxt_page_meta$e.name) ?? "projects",
    path: (__nuxt_page_meta$e == null ? void 0 : __nuxt_page_meta$e.path) ?? "/projects",
    meta: __nuxt_page_meta$e || {},
    alias: (__nuxt_page_meta$e == null ? void 0 : __nuxt_page_meta$e.alias) || [],
    redirect: (__nuxt_page_meta$e == null ? void 0 : __nuxt_page_meta$e.redirect) || void 0,
    component: () => import('./index-f773cb9c.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$d == null ? void 0 : __nuxt_page_meta$d.name) ?? "services-arenda-konteynerov",
    path: (__nuxt_page_meta$d == null ? void 0 : __nuxt_page_meta$d.path) ?? "/services/arenda-konteynerov",
    meta: __nuxt_page_meta$d || {},
    alias: (__nuxt_page_meta$d == null ? void 0 : __nuxt_page_meta$d.alias) || [],
    redirect: (__nuxt_page_meta$d == null ? void 0 : __nuxt_page_meta$d.redirect) || void 0,
    component: () => import('./arenda-konteynerov-8ff2e439.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$c == null ? void 0 : __nuxt_page_meta$c.name) ?? "services-aviaperevozki",
    path: (__nuxt_page_meta$c == null ? void 0 : __nuxt_page_meta$c.path) ?? "/services/aviaperevozki",
    meta: __nuxt_page_meta$c || {},
    alias: (__nuxt_page_meta$c == null ? void 0 : __nuxt_page_meta$c.alias) || [],
    redirect: (__nuxt_page_meta$c == null ? void 0 : __nuxt_page_meta$c.redirect) || void 0,
    component: () => import('./aviaperevozki-f61f8f53.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$b == null ? void 0 : __nuxt_page_meta$b.name) ?? "services-avtomobilnye-perevozki",
    path: (__nuxt_page_meta$b == null ? void 0 : __nuxt_page_meta$b.path) ?? "/services/avtomobilnye-perevozki",
    meta: __nuxt_page_meta$b || {},
    alias: (__nuxt_page_meta$b == null ? void 0 : __nuxt_page_meta$b.alias) || [],
    redirect: (__nuxt_page_meta$b == null ? void 0 : __nuxt_page_meta$b.redirect) || void 0,
    component: () => import('./avtomobilnye-perevozki-e3a9eb24.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$a == null ? void 0 : __nuxt_page_meta$a.name) ?? "services",
    path: (__nuxt_page_meta$a == null ? void 0 : __nuxt_page_meta$a.path) ?? "/services",
    meta: __nuxt_page_meta$a || {},
    alias: (__nuxt_page_meta$a == null ? void 0 : __nuxt_page_meta$a.alias) || [],
    redirect: (__nuxt_page_meta$a == null ? void 0 : __nuxt_page_meta$a.redirect) || void 0,
    component: () => import('./index-f4a9ddaf.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$9 == null ? void 0 : __nuxt_page_meta$9.name) ?? "services-morskie-gruzoperevozki",
    path: (__nuxt_page_meta$9 == null ? void 0 : __nuxt_page_meta$9.path) ?? "/services/morskie-gruzoperevozki",
    meta: __nuxt_page_meta$9 || {},
    alias: (__nuxt_page_meta$9 == null ? void 0 : __nuxt_page_meta$9.alias) || [],
    redirect: (__nuxt_page_meta$9 == null ? void 0 : __nuxt_page_meta$9.redirect) || void 0,
    component: () => import('./morskie-gruzoperevozki-a25aec6c.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$8 == null ? void 0 : __nuxt_page_meta$8.name) ?? "services-multimodalnye-perevozki",
    path: (__nuxt_page_meta$8 == null ? void 0 : __nuxt_page_meta$8.path) ?? "/services/multimodalnye-perevozki",
    meta: __nuxt_page_meta$8 || {},
    alias: (__nuxt_page_meta$8 == null ? void 0 : __nuxt_page_meta$8.alias) || [],
    redirect: (__nuxt_page_meta$8 == null ? void 0 : __nuxt_page_meta$8.redirect) || void 0,
    component: () => import('./multimodalnye-perevozki-e856b3c2.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$7 == null ? void 0 : __nuxt_page_meta$7.name) ?? "services-project-logistics",
    path: (__nuxt_page_meta$7 == null ? void 0 : __nuxt_page_meta$7.path) ?? "/services/project-logistics",
    meta: __nuxt_page_meta$7 || {},
    alias: (__nuxt_page_meta$7 == null ? void 0 : __nuxt_page_meta$7.alias) || [],
    redirect: (__nuxt_page_meta$7 == null ? void 0 : __nuxt_page_meta$7.redirect) || void 0,
    component: () => import('./project-logistics-407763df.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$6 == null ? void 0 : __nuxt_page_meta$6.name) ?? "services-tamozhennoe-oformlenie",
    path: (__nuxt_page_meta$6 == null ? void 0 : __nuxt_page_meta$6.path) ?? "/services/tamozhennoe-oformlenie",
    meta: __nuxt_page_meta$6 || {},
    alias: (__nuxt_page_meta$6 == null ? void 0 : __nuxt_page_meta$6.alias) || [],
    redirect: (__nuxt_page_meta$6 == null ? void 0 : __nuxt_page_meta$6.redirect) || void 0,
    component: () => import('./tamozhennoe-oformlenie-fc1be6fe.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$5 == null ? void 0 : __nuxt_page_meta$5.name) ?? "services-vneshneekonomicheskaya-deyatelnost",
    path: (__nuxt_page_meta$5 == null ? void 0 : __nuxt_page_meta$5.path) ?? "/services/vneshneekonomicheskaya-deyatelnost",
    meta: __nuxt_page_meta$5 || {},
    alias: (__nuxt_page_meta$5 == null ? void 0 : __nuxt_page_meta$5.alias) || [],
    redirect: (__nuxt_page_meta$5 == null ? void 0 : __nuxt_page_meta$5.redirect) || void 0,
    component: () => import('./vneshneekonomicheskaya-deyatelnost-4083a05a.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$4 == null ? void 0 : __nuxt_page_meta$4.name) ?? "services-zheleznodorozhnye-perevozki",
    path: (__nuxt_page_meta$4 == null ? void 0 : __nuxt_page_meta$4.path) ?? "/services/zheleznodorozhnye-perevozki",
    meta: __nuxt_page_meta$4 || {},
    alias: (__nuxt_page_meta$4 == null ? void 0 : __nuxt_page_meta$4.alias) || [],
    redirect: (__nuxt_page_meta$4 == null ? void 0 : __nuxt_page_meta$4.redirect) || void 0,
    component: () => import('./zheleznodorozhnye-perevozki-b950f6e5.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$3 == null ? void 0 : __nuxt_page_meta$3.name) ?? "sitemap",
    path: (__nuxt_page_meta$3 == null ? void 0 : __nuxt_page_meta$3.path) ?? "/sitemap",
    meta: __nuxt_page_meta$3 || {},
    alias: (__nuxt_page_meta$3 == null ? void 0 : __nuxt_page_meta$3.alias) || [],
    redirect: (__nuxt_page_meta$3 == null ? void 0 : __nuxt_page_meta$3.redirect) || void 0,
    component: () => import('./sitemap-b35daf78.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$2 == null ? void 0 : __nuxt_page_meta$2.name) ?? "tarify-na-tamozhennoe-oformlenie-gruzov",
    path: (__nuxt_page_meta$2 == null ? void 0 : __nuxt_page_meta$2.path) ?? "/tarify-na-tamozhennoe-oformlenie-gruzov",
    meta: __nuxt_page_meta$2 || {},
    alias: (__nuxt_page_meta$2 == null ? void 0 : __nuxt_page_meta$2.alias) || [],
    redirect: (__nuxt_page_meta$2 == null ? void 0 : __nuxt_page_meta$2.redirect) || void 0,
    component: () => import('./tarify-na-tamozhennoe-oformlenie-gruzov-aece5037.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$1 == null ? void 0 : __nuxt_page_meta$1.name) ?? "traffic",
    path: (__nuxt_page_meta$1 == null ? void 0 : __nuxt_page_meta$1.path) ?? "/traffic",
    meta: __nuxt_page_meta$1 || {},
    alias: (__nuxt_page_meta$1 == null ? void 0 : __nuxt_page_meta$1.alias) || [],
    redirect: (__nuxt_page_meta$1 == null ? void 0 : __nuxt_page_meta$1.redirect) || void 0,
    component: () => import('./traffic-b0796801.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta == null ? void 0 : __nuxt_page_meta.name) ?? "vacancies",
    path: (__nuxt_page_meta == null ? void 0 : __nuxt_page_meta.path) ?? "/vacancies",
    meta: __nuxt_page_meta || {},
    alias: (__nuxt_page_meta == null ? void 0 : __nuxt_page_meta.alias) || [],
    redirect: (__nuxt_page_meta == null ? void 0 : __nuxt_page_meta.redirect) || void 0,
    component: () => import('./vacancies-133d7825.mjs').then((m) => m.default || m)
  }
];
const routerOptions0 = {
  scrollBehavior(to, from, savedPosition) {
    const nuxtApp = useNuxtApp();
    let position = savedPosition || void 0;
    if (!position && from && to && to.meta.scrollToTop !== false && _isDifferentRoute(from, to)) {
      position = { left: 0, top: 0 };
    }
    if (to.path === from.path) {
      if (from.hash && !to.hash) {
        return { left: 0, top: 0 };
      }
      if (to.hash) {
        return { el: to.hash, top: _getHashElementScrollMarginTop(to.hash) };
      }
    }
    const hasTransition = (route) => !!(route.meta.pageTransition ?? appPageTransition);
    const hookToWait = hasTransition(from) && hasTransition(to) ? "page:transition:finish" : "page:finish";
    return new Promise((resolve) => {
      nuxtApp.hooks.hookOnce(hookToWait, async () => {
        await nextTick();
        if (to.hash) {
          position = { el: to.hash, top: _getHashElementScrollMarginTop(to.hash) };
        }
        resolve(position);
      });
    });
  }
};
function _getHashElementScrollMarginTop(selector) {
  try {
    const elem = document.querySelector(selector);
    if (elem) {
      return parseFloat(getComputedStyle(elem).scrollMarginTop);
    }
  } catch {
  }
  return 0;
}
function _isDifferentRoute(a, b) {
  const samePageComponent = a.matched[0] === b.matched[0];
  if (!samePageComponent) {
    return true;
  }
  if (samePageComponent && JSON.stringify(a.params) !== JSON.stringify(b.params)) {
    return true;
  }
  return false;
}
const configRouterOptions = {};
const routerOptions = {
  ...configRouterOptions,
  ...routerOptions0
};
const validate = /* @__PURE__ */ defineNuxtRouteMiddleware(async (to) => {
  var _a;
  let __temp, __restore;
  if (!((_a = to.meta) == null ? void 0 : _a.validate)) {
    return;
  }
  useNuxtApp();
  useRouter();
  const result = ([__temp, __restore] = executeAsync(() => Promise.resolve(to.meta.validate(to))), __temp = await __temp, __restore(), __temp);
  if (result === true) {
    return;
  }
  {
    return result;
  }
});
const persist_45query_45global = /* @__PURE__ */ defineNuxtRouteMiddleware((to, from) => {
  const router = useRouter();
  const route = router.resolve(to.path);
  if (!route.matched.length) {
    return navigateTo("/");
  }
  if (Object.keys(from.query).length && !Object.keys(to.query).length) {
    return navigateTo({
      path: to.path,
      hash: to.hash,
      params: to.params,
      query: from.query
    });
  }
});
const globalMiddleware = [
  validate,
  persist_45query_45global
];
const namedMiddleware = {};
const router_jmwsqit4Rs = /* @__PURE__ */ defineNuxtPlugin(async (nuxtApp) => {
  var _a, _b;
  let __temp, __restore;
  let routerBase = useRuntimeConfig().app.baseURL;
  if (routerOptions.hashMode && !routerBase.includes("#")) {
    routerBase += "#";
  }
  const history = ((_a = routerOptions.history) == null ? void 0 : _a.call(routerOptions, routerBase)) ?? createMemoryHistory(routerBase);
  const routes = ((_b = routerOptions.routes) == null ? void 0 : _b.call(routerOptions, _routes)) ?? _routes;
  const initialURL = nuxtApp.ssrContext.url;
  const router = createRouter({
    ...routerOptions,
    history,
    routes
  });
  nuxtApp.vueApp.use(router);
  const previousRoute = shallowRef(router.currentRoute.value);
  router.afterEach((_to, from) => {
    previousRoute.value = from;
  });
  Object.defineProperty(nuxtApp.vueApp.config.globalProperties, "previousRoute", {
    get: () => previousRoute.value
  });
  const _route = shallowRef(router.resolve(initialURL));
  const syncCurrentRoute = () => {
    _route.value = router.currentRoute.value;
  };
  nuxtApp.hook("page:finish", syncCurrentRoute);
  router.afterEach((to, from) => {
    var _a2, _b2, _c, _d;
    if (((_b2 = (_a2 = to.matched[0]) == null ? void 0 : _a2.components) == null ? void 0 : _b2.default) === ((_d = (_c = from.matched[0]) == null ? void 0 : _c.components) == null ? void 0 : _d.default)) {
      syncCurrentRoute();
    }
  });
  const route = {};
  for (const key in _route.value) {
    route[key] = computed(() => _route.value[key]);
  }
  nuxtApp._route = reactive(route);
  nuxtApp._middleware = nuxtApp._middleware || {
    global: [],
    named: {}
  };
  useError();
  try {
    if (true) {
      ;
      [__temp, __restore] = executeAsync(() => router.push(initialURL)), await __temp, __restore();
      ;
    }
    ;
    [__temp, __restore] = executeAsync(() => router.isReady()), await __temp, __restore();
    ;
  } catch (error2) {
    [__temp, __restore] = executeAsync(() => callWithNuxt(nuxtApp, showError, [error2])), await __temp, __restore();
  }
  const initialLayout = useState("_layout");
  router.beforeEach(async (to, from) => {
    var _a2;
    to.meta = reactive(to.meta);
    if (nuxtApp.isHydrating && initialLayout.value && !isReadonly(to.meta.layout)) {
      to.meta.layout = initialLayout.value;
    }
    nuxtApp._processingMiddleware = true;
    const middlewareEntries = /* @__PURE__ */ new Set([...globalMiddleware, ...nuxtApp._middleware.global]);
    for (const component of to.matched) {
      const componentMiddleware = component.meta.middleware;
      if (!componentMiddleware) {
        continue;
      }
      if (Array.isArray(componentMiddleware)) {
        for (const entry2 of componentMiddleware) {
          middlewareEntries.add(entry2);
        }
      } else {
        middlewareEntries.add(componentMiddleware);
      }
    }
    for (const entry2 of middlewareEntries) {
      const middleware = typeof entry2 === "string" ? nuxtApp._middleware.named[entry2] || await ((_a2 = namedMiddleware[entry2]) == null ? void 0 : _a2.call(namedMiddleware).then((r) => r.default || r)) : entry2;
      if (!middleware) {
        throw new Error(`Unknown route middleware: '${entry2}'.`);
      }
      const result = await callWithNuxt(nuxtApp, middleware, [to, from]);
      {
        if (result === false || result instanceof Error) {
          const error2 = result || createError$1({
            statusCode: 404,
            statusMessage: `Page Not Found: ${initialURL}`
          });
          await callWithNuxt(nuxtApp, showError, [error2]);
          return false;
        }
      }
      if (result || result === false) {
        return result;
      }
    }
  });
  router.afterEach(async (to) => {
    delete nuxtApp._processingMiddleware;
    if (to.matched.length === 0) {
      await callWithNuxt(nuxtApp, showError, [createError$1({
        statusCode: 404,
        fatal: false,
        statusMessage: `Page not found: ${to.fullPath}`
      })]);
    } else {
      const currentURL = to.fullPath || "/";
      if (!isEqual(currentURL, initialURL, { trailingSlash: true })) {
        const event = await callWithNuxt(nuxtApp, useRequestEvent);
        const options = { redirectCode: event.node.res.statusCode !== 200 ? event.node.res.statusCode || 302 : 302 };
        await callWithNuxt(nuxtApp, navigateTo, [currentURL, options]);
      }
    }
  });
  nuxtApp.hooks.hookOnce("app:created", async () => {
    try {
      await router.replace({
        ...router.resolve(initialURL),
        name: void 0,
        // #4920, #$4982
        force: true
      });
    } catch (error2) {
      await callWithNuxt(nuxtApp, showError, [error2]);
    }
  });
  return { provide: { router } };
});
const InferSeoMetaPlugin = (options = {}) => {
  return defineHeadPlugin({
    hooks: {
      entries: {
        resolve({ entries }) {
          var _a;
          let titleTemplate = null;
          for (const entry2 of entries) {
            const inputKey = entry2.resolvedInput ? "resolvedInput" : "input";
            const input = entry2[inputKey];
            if (typeof input.titleTemplate !== "undefined")
              titleTemplate = input.titleTemplate;
          }
          for (const entry2 of entries) {
            const inputKey = entry2.resolvedInput ? "resolvedInput" : "input";
            const input = entry2[inputKey];
            const resolvedMeta = input.meta || [];
            titleTemplate = resolveTitleTemplate(titleTemplate, input.title);
            const title = input.title;
            const description = (_a = resolvedMeta.find((meta) => meta.name === "description")) == null ? void 0 : _a.content;
            const hasOgTitle = !!resolvedMeta.find((meta) => meta.property === "og:title");
            const hasOgImage = !!resolvedMeta.find((meta) => meta.property === "og:image");
            const hasTwitterCard = !!resolvedMeta.find((meta) => meta.property === "twitter:card");
            const hasOgDescription = !!resolvedMeta.find((meta) => meta.property === "og:description");
            entry2[inputKey].meta = input.meta || [];
            if (titleTemplate && !hasOgTitle) {
              let newOgTitle = (options == null ? void 0 : options.ogTitle) || titleTemplate;
              if (typeof newOgTitle === "function")
                newOgTitle = newOgTitle(title);
              if (newOgTitle) {
                entry2[inputKey].meta.push({
                  property: "og:title",
                  // have the og:title be removed if we don't have a title
                  content: String(newOgTitle)
                });
              }
            }
            if (description && !hasOgDescription) {
              let newOgDescription = (options == null ? void 0 : options.ogDescription) || description;
              if (typeof newOgDescription === "function")
                newOgDescription = newOgDescription(title);
              if (newOgDescription) {
                entry2[inputKey].meta.push({
                  property: "og:description",
                  content: String(newOgDescription)
                });
              }
            }
            if (hasOgImage && !hasTwitterCard) {
              entry2[inputKey].meta.push({
                name: "twitter:card",
                content: (options == null ? void 0 : options.twitterCard) || "summary_large_image"
              });
            }
          }
        }
      }
    }
  });
};
const plugin_BEnDUEy4ze = /* @__PURE__ */ defineNuxtPlugin(() => {
  const head = injectHead();
  const config2 = useRuntimeConfig().public;
  if (!head)
    return;
  const { resolveAliases, seoOptimise } = config2["nuxt-unhead"];
  if (seoOptimise) {
    head.use(InferSeoMetaPlugin());
  }
  const separator = config2.separator || config2.titleSeparator || "|";
  head.push({
    templateParams: {
      // @ts-expect-error untyped
      ...config2,
      // @ts-expect-error untyped
      separator,
      // @ts-expect-error untyped
      titleSeparator: separator
    }
  });
  if (resolveAliases) {
    head.hooks.hook("tags:resolve", async (ctx) => {
      var _a;
      const validTags = [];
      for (const tag of ctx.tags) {
        for (const prop of resolveAliasProps) {
          if (!tag.props[prop] || !(((_a = tag.props) == null ? void 0 : _a[prop]) && /^[~@]+\//.test(tag.props[prop])))
            continue;
          {
            let moduleUrl = tag.props[prop];
            try {
              moduleUrl = (await import(
                /* @vite-ignore */
                `${tag.props[prop]}?url`
              )).default;
            } catch (e) {
            }
            tag.props[prop] = moduleUrl;
          }
        }
        validTags.push(tag);
      }
      ctx.tags = validTags;
    });
  }
});
const provideResolver = (input, resolver2) => {
  if (!input)
    input = {};
  input._resolver = resolver2;
  return input;
};
const defineBreadcrumb = (input) => provideResolver(input, "breadcrumb");
const defineWebPage = (input) => provideResolver(input, "webPage");
const defineWebSite = (input) => provideResolver(input, "webSite");
function useSchemaOrg(input) {
  return useHead({
    script: [
      {
        type: "application/ld+json",
        id: "schema-org-graph",
        key: "schema-org-graph",
        // @ts-expect-error runtime type
        nodes: input
      }
    ]
  }, { mode: "server" });
}
function defineSchemaOrgResolver(schema) {
  return schema;
}
const PROTOCOL_STRICT_REGEX = /^\w{2,}:([/\\]{1,2})/;
const PROTOCOL_REGEX = /^\w{2,}:([/\\]{2})?/;
const PROTOCOL_RELATIVE_REGEX = /^[/\\]{2}[^/\\]+/;
function hasProtocol(inputString, opts = {}) {
  if (typeof opts === "boolean") {
    opts = { acceptRelative: opts };
  }
  if (opts.strict) {
    return PROTOCOL_STRICT_REGEX.test(inputString);
  }
  return PROTOCOL_REGEX.test(inputString) || (opts.acceptRelative ? PROTOCOL_RELATIVE_REGEX.test(inputString) : false);
}
const TRAILING_SLASH_RE = /\/$|\/\?/;
function hasTrailingSlash(input = "", queryParameters = false) {
  if (!queryParameters) {
    return input.endsWith("/");
  }
  return TRAILING_SLASH_RE.test(input);
}
function withoutTrailingSlash(input = "", queryParameters = false) {
  if (!queryParameters) {
    return (hasTrailingSlash(input) ? input.slice(0, -1) : input) || "/";
  }
  if (!hasTrailingSlash(input, true)) {
    return input || "/";
  }
  const [s0, ...s] = input.split("?");
  return (s0.slice(0, -1) || "/") + (s.length > 0 ? `?${s.join("?")}` : "");
}
function withTrailingSlash(input = "", queryParameters = false) {
  if (!queryParameters) {
    return input.endsWith("/") ? input : input + "/";
  }
  if (hasTrailingSlash(input, true)) {
    return input || "/";
  }
  const [s0, ...s] = input.split("?");
  return s0 + "/" + (s.length > 0 ? `?${s.join("?")}` : "");
}
function hasLeadingSlash(input = "") {
  return input.startsWith("/");
}
function withoutLeadingSlash(input = "") {
  return (hasLeadingSlash(input) ? input.slice(1) : input) || "/";
}
function withBase(input, base) {
  if (isEmptyURL(base) || hasProtocol(input)) {
    return input;
  }
  const _base = withoutTrailingSlash(base);
  if (input.startsWith(_base)) {
    return input;
  }
  return joinURL(_base, input);
}
function isEmptyURL(url) {
  return !url || url === "/";
}
function isNonEmptyURL(url) {
  return url && url !== "/";
}
function joinURL(base, ...input) {
  let url = base || "";
  for (const index of input.filter((url2) => isNonEmptyURL(url2))) {
    url = url ? withTrailingSlash(url) + withoutLeadingSlash(index) : index;
  }
  return url;
}
const idReference = (node) => ({
  "@id": typeof node !== "string" ? node["@id"] : node
});
const resolvableDateToDate = (val) => {
  try {
    const date = val instanceof Date ? val : new Date(Date.parse(val));
    return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
  } catch (e) {
  }
  return typeof val === "string" ? val : val.toString();
};
const resolvableDateToIso = (val) => {
  if (!val)
    return val;
  try {
    if (val instanceof Date)
      return val.toISOString();
    else
      return new Date(Date.parse(val)).toISOString();
  } catch (e) {
  }
  return typeof val === "string" ? val : val.toString();
};
const IdentityId = "#identity";
const setIfEmpty = (node, field, value) => {
  if (!(node == null ? void 0 : node[field]) && value)
    node[field] = value;
};
const asArray = (input) => Array.isArray(input) ? input : [input];
const dedupeMerge = (node, field, value) => {
  const dedupeMerge2 = [];
  const input = asArray(node[field]);
  dedupeMerge2.push(...input);
  const data = new Set(dedupeMerge2);
  data.add(value);
  node[field] = [...data.values()].filter(Boolean);
};
const prefixId = (url, id) => {
  if (hasProtocol(id))
    return url;
  if (!id.startsWith("#"))
    id = `#${id}`;
  return joinURL(url, id);
};
const trimLength = (val, length) => {
  if (!val)
    return val;
  if (val.length > length) {
    const trimmedString = val.substring(0, length);
    return trimmedString.substring(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(" ")));
  }
  return val;
};
const resolveDefaultType = (node, defaultType) => {
  const val = node["@type"];
  if (val === defaultType)
    return;
  const types = /* @__PURE__ */ new Set([
    ...asArray(defaultType),
    ...asArray(val)
  ]);
  node["@type"] = types.size === 1 ? val : [...types.values()];
};
const resolveWithBase = (base, urlOrPath) => {
  if (!urlOrPath || hasProtocol(urlOrPath) || !urlOrPath.startsWith("/") && !urlOrPath.startsWith("#"))
    return urlOrPath;
  return withBase(urlOrPath, base);
};
const resolveAsGraphKey = (key) => {
  if (!key)
    return key;
  return key.substring(key.lastIndexOf("#"));
};
const stripEmptyProperties = (obj) => {
  Object.keys(obj).forEach((k) => {
    if (obj[k] && typeof obj[k] === "object") {
      if (obj[k].__v_isReadonly || obj[k].__v_isRef)
        return;
      stripEmptyProperties(obj[k]);
      return;
    }
    if (obj[k] === "" || obj[k] === null || typeof obj[k] === "undefined")
      delete obj[k];
  });
  return obj;
};
function hashCode(s) {
  let h2 = 9;
  for (let i = 0; i < s.length; )
    h2 = Math.imul(h2 ^ s.charCodeAt(i++), 9 ** 9);
  return ((h2 ^ h2 >>> 9) + 65536).toString(16).substring(1, 8).toLowerCase();
}
const offerResolver = defineSchemaOrgResolver({
  cast(node) {
    if (typeof node === "number" || typeof node === "string") {
      return {
        price: node
      };
    }
    return node;
  },
  defaults: {
    "@type": "Offer",
    "availability": "InStock"
  },
  resolve(node, ctx) {
    setIfEmpty(node, "priceCurrency", ctx.meta.currency);
    setIfEmpty(node, "priceValidUntil", new Date(Date.UTC((/* @__PURE__ */ new Date()).getFullYear() + 1, 12, -1, 0, 0, 0)));
    if (node.url)
      resolveWithBase(ctx.meta.host, node.url);
    if (node.availability)
      node.availability = withBase(node.availability, "https://schema.org/");
    if (node.priceValidUntil)
      node.priceValidUntil = resolvableDateToIso(node.priceValidUntil);
    return node;
  }
});
const aggregateOfferResolver = defineSchemaOrgResolver({
  defaults: {
    "@type": "AggregateOffer"
  },
  inheritMeta: [
    { meta: "currency", key: "priceCurrency" }
  ],
  resolve(node, ctx) {
    node.offers = resolveRelation(node.offers, ctx, offerResolver);
    if (node.offers)
      setIfEmpty(node, "offerCount", asArray(node.offers).length);
    return node;
  }
});
const aggregateRatingResolver = defineSchemaOrgResolver({
  defaults: {
    "@type": "AggregateRating"
  }
});
const searchActionResolver = defineSchemaOrgResolver({
  defaults: {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint"
    },
    "query-input": {
      "@type": "PropertyValueSpecification",
      "valueRequired": true,
      "valueName": "search_term_string"
    }
  },
  resolve(node, ctx) {
    if (typeof node.target === "string") {
      node.target = {
        "@type": "EntryPoint",
        "urlTemplate": resolveWithBase(ctx.meta.host, node.target)
      };
    }
    return node;
  }
});
const PrimaryWebSiteId = "#website";
const webSiteResolver = defineSchemaOrgResolver({
  defaults: {
    "@type": "WebSite"
  },
  inheritMeta: [
    "inLanguage",
    { meta: "host", key: "url" }
  ],
  idPrefix: ["host", PrimaryWebSiteId],
  resolve(node, ctx) {
    node.potentialAction = resolveRelation(node.potentialAction, ctx, searchActionResolver, {
      array: true
    });
    node.publisher = resolveRelation(node.publisher, ctx);
    return node;
  },
  resolveRootNode(node, { find }) {
    if (resolveAsGraphKey(node["@id"]) === PrimaryWebSiteId) {
      const identity = find(IdentityId);
      if (identity)
        setIfEmpty(node, "publisher", idReference(identity));
      const webPage = find(PrimaryWebPageId);
      if (webPage)
        setIfEmpty(webPage, "isPartOf", idReference(node));
    }
    return node;
  }
});
const listItemResolver = defineSchemaOrgResolver({
  cast(node) {
    if (typeof node === "string") {
      node = {
        name: node
      };
    }
    return node;
  },
  defaults: {
    "@type": "ListItem"
  },
  resolve(node, ctx) {
    if (typeof node.item === "string")
      node.item = resolveWithBase(ctx.meta.host, node.item);
    else if (typeof node.item === "object")
      node.item = resolveRelation(node.item, ctx);
    return node;
  }
});
const PrimaryBreadcrumbId = "#breadcrumb";
const breadcrumbResolver = defineSchemaOrgResolver({
  defaults: {
    "@type": "BreadcrumbList"
  },
  idPrefix: ["url", PrimaryBreadcrumbId],
  resolve(breadcrumb, ctx) {
    if (breadcrumb.itemListElement) {
      let index = 1;
      breadcrumb.itemListElement = resolveRelation(breadcrumb.itemListElement, ctx, listItemResolver, {
        array: true,
        afterResolve(node) {
          setIfEmpty(node, "position", index++);
        }
      });
    }
    return breadcrumb;
  },
  resolveRootNode(node, { find }) {
    const webPage = find(PrimaryWebPageId);
    if (webPage)
      setIfEmpty(webPage, "breadcrumb", idReference(node));
  }
});
const imageResolver = defineSchemaOrgResolver({
  alias: "image",
  cast(input) {
    if (typeof input === "string") {
      input = {
        url: input
      };
    }
    return input;
  },
  defaults: {
    "@type": "ImageObject"
  },
  inheritMeta: [
    // @todo possibly only do if there's a caption
    "inLanguage"
  ],
  idPrefix: "host",
  resolve(image, { meta }) {
    image.url = resolveWithBase(meta.host, image.url);
    setIfEmpty(image, "contentUrl", image.url);
    if (image.height && !image.width)
      delete image.height;
    if (image.width && !image.height)
      delete image.width;
    return image;
  }
});
const addressResolver = defineSchemaOrgResolver({
  defaults: {
    "@type": "PostalAddress"
  }
});
const organizationResolver = defineSchemaOrgResolver({
  defaults: {
    "@type": "Organization"
  },
  idPrefix: ["host", IdentityId],
  inheritMeta: [
    { meta: "host", key: "url" }
  ],
  resolve(node, ctx) {
    resolveDefaultType(node, "Organization");
    node.address = resolveRelation(node.address, ctx, addressResolver);
    return node;
  },
  resolveRootNode(node, ctx) {
    const isIdentity = resolveAsGraphKey(node["@id"]) === IdentityId;
    const webPage = ctx.find(PrimaryWebPageId);
    if (node.logo) {
      node.logo = resolveRelation(node.logo, ctx, imageResolver, {
        root: true,
        afterResolve(logo) {
          if (isIdentity)
            logo["@id"] = prefixId(ctx.meta.host, "#logo");
          setIfEmpty(logo, "caption", node.name);
        }
      });
      if (webPage)
        setIfEmpty(webPage, "primaryImageOfPage", idReference(node.logo));
    }
    if (isIdentity && webPage)
      setIfEmpty(webPage, "about", idReference(node));
    const webSite = ctx.find(PrimaryWebSiteId);
    if (webSite)
      setIfEmpty(webSite, "publisher", idReference(node));
  }
});
const personResolver = defineSchemaOrgResolver({
  cast(node) {
    if (typeof node === "string") {
      return {
        name: node
      };
    }
    return node;
  },
  defaults: {
    "@type": "Person"
  },
  idPrefix: ["host", IdentityId],
  resolveRootNode(node, { find, meta }) {
    if (resolveAsGraphKey(node["@id"]) === IdentityId) {
      setIfEmpty(node, "url", meta.host);
      const webPage = find(PrimaryWebPageId);
      if (webPage)
        setIfEmpty(webPage, "about", idReference(node));
      const webSite = find(PrimaryWebSiteId);
      if (webSite)
        setIfEmpty(webSite, "publisher", idReference(node));
    }
    const article = find(PrimaryArticleId);
    if (article)
      setIfEmpty(article, "author", idReference(node));
  }
});
const readActionResolver = defineSchemaOrgResolver({
  defaults: {
    "@type": "ReadAction"
  },
  resolve(node, ctx) {
    if (!node.target.includes(ctx.meta.url))
      node.target.unshift(ctx.meta.url);
    return node;
  }
});
const PrimaryWebPageId = "#webpage";
const webPageResolver = defineSchemaOrgResolver({
  defaults({ meta }) {
    const endPath = withoutTrailingSlash(meta.url.substring(meta.url.lastIndexOf("/") + 1));
    let type = "WebPage";
    switch (endPath) {
      case "about":
      case "about-us":
        type = "AboutPage";
        break;
      case "search":
        type = "SearchResultsPage";
        break;
      case "checkout":
        type = "CheckoutPage";
        break;
      case "contact":
      case "get-in-touch":
      case "contact-us":
        type = "ContactPage";
        break;
      case "faq":
        type = "FAQPage";
        break;
    }
    const defaults2 = {
      "@type": type
    };
    return defaults2;
  },
  idPrefix: ["url", PrimaryWebPageId],
  inheritMeta: [
    { meta: "title", key: "name" },
    "description",
    "datePublished",
    "dateModified",
    "url"
  ],
  resolve(node, ctx) {
    node.dateModified = resolvableDateToIso(node.dateModified);
    node.datePublished = resolvableDateToIso(node.datePublished);
    resolveDefaultType(node, "WebPage");
    node.about = resolveRelation(node.about, ctx, organizationResolver);
    node.breadcrumb = resolveRelation(node.breadcrumb, ctx, breadcrumbResolver);
    node.author = resolveRelation(node.author, ctx, personResolver);
    node.primaryImageOfPage = resolveRelation(node.primaryImageOfPage, ctx, imageResolver);
    node.potentialAction = resolveRelation(node.potentialAction, ctx, readActionResolver);
    if (node["@type"] === "WebPage") {
      setIfEmpty(node, "potentialAction", [
        {
          "@type": "ReadAction",
          "target": [ctx.meta.url]
        }
      ]);
    }
    return node;
  },
  resolveRootNode(webPage, { find, meta }) {
    const identity = find(IdentityId);
    const webSite = find(PrimaryWebSiteId);
    const logo = find("#logo");
    if (identity && meta.url === meta.host)
      setIfEmpty(webPage, "about", idReference(identity));
    if (logo)
      setIfEmpty(webPage, "primaryImageOfPage", idReference(logo));
    if (webSite)
      setIfEmpty(webPage, "isPartOf", idReference(webSite));
    const breadcrumb = find(PrimaryBreadcrumbId);
    if (breadcrumb)
      setIfEmpty(webPage, "breadcrumb", idReference(breadcrumb));
    return webPage;
  }
});
const PrimaryArticleId = "#article";
const articleResolver = defineSchemaOrgResolver({
  defaults: {
    "@type": "Article"
  },
  inheritMeta: [
    "inLanguage",
    "description",
    "image",
    "dateModified",
    "datePublished",
    { meta: "title", key: "headline" }
  ],
  idPrefix: ["url", PrimaryArticleId],
  resolve(node, ctx) {
    node.author = resolveRelation(node.author, ctx, personResolver, {
      root: true
    });
    node.publisher = resolveRelation(node.publisher, ctx);
    node.dateModified = resolvableDateToIso(node.dateModified);
    node.datePublished = resolvableDateToIso(node.datePublished);
    resolveDefaultType(node, "Article");
    node.headline = trimLength(node.headline, 110);
    return node;
  },
  resolveRootNode(node, { find, meta }) {
    var _a;
    const webPage = find(PrimaryWebPageId);
    const identity = find(IdentityId);
    if (node.image && !node.thumbnailUrl) {
      const firstImage = asArray(node.image)[0];
      if (typeof firstImage === "string")
        setIfEmpty(node, "thumbnailUrl", resolveWithBase(meta.host, firstImage));
      else if (firstImage == null ? void 0 : firstImage["@id"])
        setIfEmpty(node, "thumbnailUrl", (_a = find(firstImage["@id"])) == null ? void 0 : _a.url);
    }
    if (identity) {
      setIfEmpty(node, "publisher", idReference(identity));
      setIfEmpty(node, "author", idReference(identity));
    }
    if (webPage) {
      setIfEmpty(node, "isPartOf", idReference(webPage));
      setIfEmpty(node, "mainEntityOfPage", idReference(webPage));
      setIfEmpty(webPage, "potentialAction", [
        {
          "@type": "ReadAction",
          "target": [meta.url]
        }
      ]);
      setIfEmpty(webPage, "dateModified", node.dateModified);
      setIfEmpty(webPage, "datePublished", node.datePublished);
    }
    return node;
  }
});
const bookEditionResolver = defineSchemaOrgResolver({
  defaults: {
    "@type": "Book"
  },
  inheritMeta: [
    "inLanguage"
  ],
  resolve(node, ctx) {
    if (node.bookFormat)
      node.bookFormat = withBase(node.bookFormat, "https://schema.org/");
    if (node.datePublished)
      node.datePublished = resolvableDateToDate(node.datePublished);
    node.author = resolveRelation(node.author, ctx);
    return node;
  },
  resolveRootNode(node, { find }) {
    const identity = find(IdentityId);
    if (identity)
      setIfEmpty(node, "provider", idReference(identity));
    return node;
  }
});
const PrimaryBookId = "#book";
const bookResolver = defineSchemaOrgResolver({
  defaults: {
    "@type": "Book"
  },
  inheritMeta: [
    "description",
    "url",
    { meta: "title", key: "name" }
  ],
  idPrefix: ["url", PrimaryBookId],
  resolve(node, ctx) {
    node.workExample = resolveRelation(node.workExample, ctx, bookEditionResolver);
    node.author = resolveRelation(node.author, ctx);
    if (node.url)
      withBase(node.url, ctx.meta.host);
    return node;
  },
  resolveRootNode(node, { find }) {
    const identity = find(IdentityId);
    if (identity)
      setIfEmpty(node, "author", idReference(identity));
    return node;
  }
});
const commentResolver = defineSchemaOrgResolver({
  defaults: {
    "@type": "Comment"
  },
  idPrefix: "url",
  resolve(node, ctx) {
    node.author = resolveRelation(node.author, ctx, personResolver, {
      root: true
    });
    return node;
  },
  resolveRootNode(node, { find }) {
    const article = find(PrimaryArticleId);
    if (article)
      setIfEmpty(node, "about", idReference(article));
  }
});
const courseResolver = defineSchemaOrgResolver({
  defaults: {
    "@type": "Course"
  },
  resolve(node, ctx) {
    node.provider = resolveRelation(node.provider, ctx, organizationResolver, {
      root: true
    });
    return node;
  },
  resolveRootNode(node, { find }) {
    const identity = find(IdentityId);
    if (identity)
      setIfEmpty(node, "provider", idReference(identity));
    return node;
  }
});
const placeResolver = defineSchemaOrgResolver({
  defaults: {
    "@type": "Place"
  },
  resolve(node, ctx) {
    if (typeof node.address !== "string")
      node.address = resolveRelation(node.address, ctx, addressResolver);
    return node;
  }
});
const virtualLocationResolver = defineSchemaOrgResolver({
  cast(node) {
    if (typeof node === "string") {
      return {
        url: node
      };
    }
    return node;
  },
  defaults: {
    "@type": "VirtualLocation"
  }
});
const PrimaryEventId = "#event";
const eventResolver = defineSchemaOrgResolver({
  defaults: {
    "@type": "Event"
  },
  inheritMeta: [
    "inLanguage",
    "description",
    "image",
    { meta: "title", key: "name" }
  ],
  idPrefix: ["url", PrimaryEventId],
  resolve(node, ctx) {
    var _a;
    if (node.location) {
      const isVirtual = node.location === "string" || ((_a = node.location) == null ? void 0 : _a.url) !== "undefined";
      node.location = resolveRelation(node.location, ctx, isVirtual ? virtualLocationResolver : placeResolver);
    }
    node.performer = resolveRelation(node.performer, ctx, personResolver, {
      root: true
    });
    node.organizer = resolveRelation(node.organizer, ctx, organizationResolver, {
      root: true
    });
    node.offers = resolveRelation(node.offers, ctx, offerResolver);
    if (node.eventAttendanceMode)
      node.eventAttendanceMode = withBase(node.eventAttendanceMode, "https://schema.org/");
    if (node.eventStatus)
      node.eventStatus = withBase(node.eventStatus, "https://schema.org/");
    const isOnline = node.eventStatus === "https://schema.org/EventMovedOnline";
    const dates = ["startDate", "previousStartDate", "endDate"];
    dates.forEach((date) => {
      if (!isOnline) {
        if (node[date] instanceof Date && node[date].getHours() === 0 && node[date].getMinutes() === 0)
          node[date] = resolvableDateToDate(node[date]);
      } else {
        node[date] = resolvableDateToIso(node[date]);
      }
    });
    setIfEmpty(node, "endDate", node.startDate);
    return node;
  },
  resolveRootNode(node, { find }) {
    const identity = find(IdentityId);
    if (identity)
      setIfEmpty(node, "organizer", idReference(identity));
  }
});
const howToStepDirectionResolver = defineSchemaOrgResolver({
  cast(node) {
    if (typeof node === "string") {
      return {
        text: node
      };
    }
    return node;
  },
  defaults: {
    "@type": "HowToDirection"
  }
});
const howToStepResolver = defineSchemaOrgResolver({
  cast(node) {
    if (typeof node === "string") {
      return {
        text: node
      };
    }
    return node;
  },
  defaults: {
    "@type": "HowToStep"
  },
  resolve(step, ctx) {
    if (step.url)
      step.url = resolveWithBase(ctx.meta.url, step.url);
    if (step.image) {
      step.image = resolveRelation(step.image, ctx, imageResolver, {
        root: true
      });
    }
    if (step.itemListElement)
      step.itemListElement = resolveRelation(step.itemListElement, ctx, howToStepDirectionResolver);
    return step;
  }
});
const HowToId = "#howto";
const howToResolver = defineSchemaOrgResolver({
  defaults: {
    "@type": "HowTo"
  },
  inheritMeta: [
    "description",
    "image",
    "inLanguage",
    { meta: "title", key: "name" }
  ],
  idPrefix: ["url", HowToId],
  resolve(node, ctx) {
    node.step = resolveRelation(node.step, ctx, howToStepResolver);
    return node;
  },
  resolveRootNode(node, { find }) {
    const webPage = find(PrimaryWebPageId);
    if (webPage)
      setIfEmpty(node, "mainEntityOfPage", idReference(webPage));
  }
});
const itemListResolver = defineSchemaOrgResolver({
  defaults: {
    "@type": "ItemList"
  },
  resolve(node, ctx) {
    if (node.itemListElement) {
      let index = 1;
      node.itemListElement = resolveRelation(node.itemListElement, ctx, listItemResolver, {
        array: true,
        afterResolve(node2) {
          setIfEmpty(node2, "position", index++);
        }
      });
    }
    return node;
  }
});
const quantitativeValueResolver = defineSchemaOrgResolver({
  defaults: {
    "@type": "QuantitativeValue"
  }
});
const monetaryAmountResolver = defineSchemaOrgResolver({
  defaults: {
    "@type": "MonetaryAmount"
  },
  resolve(node, ctx) {
    node.value = resolveRelation(node.value, ctx, quantitativeValueResolver);
    return node;
  }
});
const jobPostingResolver = defineSchemaOrgResolver({
  defaults: {
    "@type": "JobPosting"
  },
  resolve(node, ctx) {
    node.datePosted = resolvableDateToIso(node.datePosted);
    node.hiringOrganization = resolveRelation(node.hiringOrganization, ctx, organizationResolver);
    node.jobLocation = resolveRelation(node.jobLocation, ctx, placeResolver);
    node.baseSalary = resolveRelation(node.baseSalary, ctx, monetaryAmountResolver);
    node.validThrough = resolvableDateToIso(node.validThrough);
    return node;
  }
});
const openingHoursResolver = defineSchemaOrgResolver({
  defaults: {
    "@type": "OpeningHoursSpecification",
    "opens": "00:00",
    "closes": "23:59"
  }
});
const localBusinessResolver = defineSchemaOrgResolver({
  defaults: {
    "@type": ["Organization", "LocalBusiness"]
  },
  inheritMeta: [
    { key: "url", meta: "host" },
    { key: "currenciesAccepted", meta: "currency" }
  ],
  idPrefix: ["host", IdentityId],
  resolve(node, ctx) {
    resolveDefaultType(node, ["Organization", "LocalBusiness"]);
    node.address = resolveRelation(node.address, ctx, addressResolver);
    node.openingHoursSpecification = resolveRelation(node.openingHoursSpecification, ctx, openingHoursResolver);
    node.logo = resolveRelation(node.logo, ctx, imageResolver, {
      afterResolve(logo) {
        const hasLogo = !!ctx.find("#logo");
        if (!hasLogo)
          logo["@id"] = prefixId(ctx.meta.host, "#logo");
        setIfEmpty(logo, "caption", node.name);
      }
    });
    return node;
  }
});
const ratingResolver = defineSchemaOrgResolver({
  cast(node) {
    if (node === "number") {
      return {
        ratingValue: node
      };
    }
    return node;
  },
  defaults: {
    "@type": "Rating",
    "bestRating": 5,
    "worstRating": 1
  }
});
const reviewResolver = defineSchemaOrgResolver({
  defaults: {
    "@type": "Review"
  },
  inheritMeta: [
    "inLanguage"
  ],
  resolve(review, ctx) {
    review.reviewRating = resolveRelation(review.reviewRating, ctx, ratingResolver);
    review.author = resolveRelation(review.author, ctx, personResolver);
    return review;
  }
});
const videoResolver = defineSchemaOrgResolver({
  cast(input) {
    if (typeof input === "string") {
      input = {
        url: input
      };
    }
    return input;
  },
  alias: "video",
  defaults: {
    "@type": "VideoObject"
  },
  inheritMeta: [
    { meta: "title", key: "name" },
    "description",
    "image",
    "inLanguage",
    { meta: "datePublished", key: "uploadDate" }
  ],
  idPrefix: "host",
  resolve(video, ctx) {
    if (video.uploadDate)
      video.uploadDate = resolvableDateToIso(video.uploadDate);
    video.url = resolveWithBase(ctx.meta.host, video.url);
    if (video.caption && !video.description)
      video.description = video.caption;
    if (!video.description)
      video.description = "No description";
    if (video.thumbnailUrl)
      video.thumbnailUrl = resolveRelation(video.thumbnailUrl, ctx, imageResolver);
    return video;
  },
  resolveRootNode(video, { find }) {
    var _a;
    if (video.image && !video.thumbnailUrl) {
      const firstImage = asArray(video.image)[0];
      setIfEmpty(video, "thumbnailUrl", (_a = find(firstImage["@id"])) == null ? void 0 : _a.url);
    }
  }
});
const movieResolver = defineSchemaOrgResolver({
  defaults: {
    "@type": "Movie"
  },
  resolve(node, ctx) {
    node.aggregateRating = resolveRelation(node.aggregateRating, ctx, aggregateRatingResolver);
    node.review = resolveRelation(node.review, ctx, reviewResolver);
    node.director = resolveRelation(node.director, ctx, personResolver);
    node.actor = resolveRelation(node.actor, ctx, personResolver);
    node.trailer = resolveRelation(node.trailer, ctx, videoResolver);
    if (node.dateCreated)
      node.dateCreated = resolvableDateToDate(node.dateCreated);
    return node;
  }
});
const defaults = {
  ignoreUnknown: false,
  respectType: false,
  respectFunctionNames: false,
  respectFunctionProperties: false,
  unorderedObjects: true,
  unorderedArrays: false,
  unorderedSets: false
};
function objectHash(object, options = {}) {
  options = { ...defaults, ...options };
  const hasher = createHasher(options);
  hasher.dispatch(object);
  return hasher.toString();
}
function createHasher(options) {
  const buff = [];
  let context = [];
  const write = (str) => {
    buff.push(str);
  };
  return {
    toString() {
      return buff.join("");
    },
    getContext() {
      return context;
    },
    dispatch(value) {
      if (options.replacer) {
        value = options.replacer(value);
      }
      const type = value === null ? "null" : typeof value;
      return this["_" + type](value);
    },
    _object(object) {
      const pattern = /\[object (.*)]/i;
      const objString = Object.prototype.toString.call(object);
      const _objType = pattern.exec(objString);
      const objType = _objType ? _objType[1].toLowerCase() : "unknown:[" + objString.toLowerCase() + "]";
      let objectNumber = null;
      if ((objectNumber = context.indexOf(object)) >= 0) {
        return this.dispatch("[CIRCULAR:" + objectNumber + "]");
      } else {
        context.push(object);
      }
      if (typeof Buffer !== "undefined" && Buffer.isBuffer && Buffer.isBuffer(object)) {
        write("buffer:");
        return write(object.toString("utf8"));
      }
      if (objType !== "object" && objType !== "function" && objType !== "asyncfunction") {
        if (this["_" + objType]) {
          this["_" + objType](object);
        } else if (options.ignoreUnknown) {
          return write("[" + objType + "]");
        } else {
          throw new Error('Unknown object type "' + objType + '"');
        }
      } else {
        let keys = Object.keys(object);
        if (options.unorderedObjects) {
          keys = keys.sort();
        }
        if (options.respectType !== false && !isNativeFunction(object)) {
          keys.splice(0, 0, "prototype", "__proto__", "letructor");
        }
        if (options.excludeKeys) {
          keys = keys.filter(function(key) {
            return !options.excludeKeys(key);
          });
        }
        write("object:" + keys.length + ":");
        for (const key of keys) {
          this.dispatch(key);
          write(":");
          if (!options.excludeValues) {
            this.dispatch(object[key]);
          }
          write(",");
        }
      }
    },
    _array(arr, unordered) {
      unordered = typeof unordered !== "undefined" ? unordered : options.unorderedArrays !== false;
      write("array:" + arr.length + ":");
      if (!unordered || arr.length <= 1) {
        for (const entry2 of arr) {
          this.dispatch(entry2);
        }
        return;
      }
      const contextAdditions = [];
      const entries = arr.map((entry2) => {
        const hasher = createHasher(options);
        hasher.dispatch(entry2);
        contextAdditions.push(hasher.getContext());
        return hasher.toString();
      });
      context = [...context, ...contextAdditions];
      entries.sort();
      return this._array(entries, false);
    },
    _date(date) {
      return write("date:" + date.toJSON());
    },
    _symbol(sym) {
      return write("symbol:" + sym.toString());
    },
    _error(err) {
      return write("error:" + err.toString());
    },
    _boolean(bool) {
      return write("bool:" + bool.toString());
    },
    _string(string) {
      write("string:" + string.length + ":");
      write(string.toString());
    },
    _function(fn) {
      write("fn:");
      if (isNativeFunction(fn)) {
        this.dispatch("[native]");
      } else {
        this.dispatch(fn.toString());
      }
      if (options.respectFunctionNames !== false) {
        this.dispatch("function-name:" + String(fn.name));
      }
      if (options.respectFunctionProperties) {
        this._object(fn);
      }
    },
    _number(number) {
      return write("number:" + number.toString());
    },
    _xml(xml) {
      return write("xml:" + xml.toString());
    },
    _null() {
      return write("Null");
    },
    _undefined() {
      return write("Undefined");
    },
    _regexp(regex) {
      return write("regex:" + regex.toString());
    },
    _uint8array(arr) {
      write("uint8array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    _uint8clampedarray(arr) {
      write("uint8clampedarray:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    _int8array(arr) {
      write("int8array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    _uint16array(arr) {
      write("uint16array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    _int16array(arr) {
      write("int16array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    _uint32array(arr) {
      write("uint32array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    _int32array(arr) {
      write("int32array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    _float32array(arr) {
      write("float32array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    _float64array(arr) {
      write("float64array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    _arraybuffer(arr) {
      write("arraybuffer:");
      return this.dispatch(new Uint8Array(arr));
    },
    _url(url) {
      return write("url:" + url.toString());
    },
    _map(map) {
      write("map:");
      const arr = [...map];
      return this._array(arr, options.unorderedSets !== false);
    },
    _set(set) {
      write("set:");
      const arr = [...set];
      return this._array(arr, options.unorderedSets !== false);
    },
    _file(file) {
      write("file:");
      return this.dispatch([file.name, file.size, file.type, file.lastModfied]);
    },
    _blob() {
      if (options.ignoreUnknown) {
        return write("[blob]");
      }
      throw new Error('Hashing Blob objects is currently not supported\nUse "options.replacer" or "options.ignoreUnknown"\n');
    },
    _domwindow() {
      return write("domwindow");
    },
    _bigint(number) {
      return write("bigint:" + number.toString());
    },
    _process() {
      return write("process");
    },
    _timer() {
      return write("timer");
    },
    _pipe() {
      return write("pipe");
    },
    _tcp() {
      return write("tcp");
    },
    _udp() {
      return write("udp");
    },
    _tty() {
      return write("tty");
    },
    _statwatcher() {
      return write("statwatcher");
    },
    _securecontext() {
      return write("securecontext");
    },
    _connection() {
      return write("connection");
    },
    _zlib() {
      return write("zlib");
    },
    _context() {
      return write("context");
    },
    _nodescript() {
      return write("nodescript");
    },
    _httpparser() {
      return write("httpparser");
    },
    _dataview() {
      return write("dataview");
    },
    _signal() {
      return write("signal");
    },
    _fsevent() {
      return write("fsevent");
    },
    _tlswrap() {
      return write("tlswrap");
    }
  };
}
function isNativeFunction(f) {
  if (typeof f !== "function") {
    return false;
  }
  const exp = /^function\s+\w*\s*\(\s*\)\s*{\s+\[native code]\s+}$/i;
  return exp.exec(Function.prototype.toString.call(f)) != null;
}
class WordArray {
  constructor(words, sigBytes) {
    words = this.words = words || [];
    this.sigBytes = sigBytes !== void 0 ? sigBytes : words.length * 4;
  }
  toString(encoder) {
    return (encoder || Hex).stringify(this);
  }
  concat(wordArray) {
    this.clamp();
    if (this.sigBytes % 4) {
      for (let i = 0; i < wordArray.sigBytes; i++) {
        const thatByte = wordArray.words[i >>> 2] >>> 24 - i % 4 * 8 & 255;
        this.words[this.sigBytes + i >>> 2] |= thatByte << 24 - (this.sigBytes + i) % 4 * 8;
      }
    } else {
      for (let j = 0; j < wordArray.sigBytes; j += 4) {
        this.words[this.sigBytes + j >>> 2] = wordArray.words[j >>> 2];
      }
    }
    this.sigBytes += wordArray.sigBytes;
    return this;
  }
  clamp() {
    this.words[this.sigBytes >>> 2] &= 4294967295 << 32 - this.sigBytes % 4 * 8;
    this.words.length = Math.ceil(this.sigBytes / 4);
  }
  clone() {
    return new WordArray([...this.words]);
  }
}
const Hex = {
  stringify(wordArray) {
    const hexChars = [];
    for (let i = 0; i < wordArray.sigBytes; i++) {
      const bite = wordArray.words[i >>> 2] >>> 24 - i % 4 * 8 & 255;
      hexChars.push(
        (bite >>> 4).toString(16),
        (bite & 15).toString(16)
      );
    }
    return hexChars.join("");
  }
};
const Base64 = {
  stringify(wordArray) {
    const keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const base64Chars = [];
    for (let i = 0; i < wordArray.sigBytes; i += 3) {
      const byte1 = wordArray.words[i >>> 2] >>> 24 - i % 4 * 8 & 255;
      const byte2 = wordArray.words[i + 1 >>> 2] >>> 24 - (i + 1) % 4 * 8 & 255;
      const byte3 = wordArray.words[i + 2 >>> 2] >>> 24 - (i + 2) % 4 * 8 & 255;
      const triplet = byte1 << 16 | byte2 << 8 | byte3;
      for (let j = 0; j < 4 && i * 8 + j * 6 < wordArray.sigBytes * 8; j++) {
        base64Chars.push(keyStr.charAt(triplet >>> 6 * (3 - j) & 63));
      }
    }
    return base64Chars.join("");
  }
};
const Latin1 = {
  parse(latin1Str) {
    const latin1StrLength = latin1Str.length;
    const words = [];
    for (let i = 0; i < latin1StrLength; i++) {
      words[i >>> 2] |= (latin1Str.charCodeAt(i) & 255) << 24 - i % 4 * 8;
    }
    return new WordArray(words, latin1StrLength);
  }
};
const Utf8 = {
  parse(utf8Str) {
    return Latin1.parse(unescape(encodeURIComponent(utf8Str)));
  }
};
class BufferedBlockAlgorithm {
  constructor() {
    this._minBufferSize = 0;
    this.blockSize = 512 / 32;
    this.reset();
  }
  reset() {
    this._data = new WordArray();
    this._nDataBytes = 0;
  }
  _append(data) {
    if (typeof data === "string") {
      data = Utf8.parse(data);
    }
    this._data.concat(data);
    this._nDataBytes += data.sigBytes;
  }
  _doProcessBlock(_dataWords, _offset) {
  }
  _process(doFlush) {
    let processedWords;
    let nBlocksReady = this._data.sigBytes / (this.blockSize * 4);
    if (doFlush) {
      nBlocksReady = Math.ceil(nBlocksReady);
    } else {
      nBlocksReady = Math.max((nBlocksReady | 0) - this._minBufferSize, 0);
    }
    const nWordsReady = nBlocksReady * this.blockSize;
    const nBytesReady = Math.min(nWordsReady * 4, this._data.sigBytes);
    if (nWordsReady) {
      for (let offset = 0; offset < nWordsReady; offset += this.blockSize) {
        this._doProcessBlock(this._data.words, offset);
      }
      processedWords = this._data.words.splice(0, nWordsReady);
      this._data.sigBytes -= nBytesReady;
    }
    return new WordArray(processedWords, nBytesReady);
  }
}
class Hasher extends BufferedBlockAlgorithm {
  update(messageUpdate) {
    this._append(messageUpdate);
    this._process();
    return this;
  }
  finalize(messageUpdate) {
    if (messageUpdate) {
      this._append(messageUpdate);
    }
  }
}
const H = [1779033703, -1150833019, 1013904242, -1521486534, 1359893119, -1694144372, 528734635, 1541459225];
const K = [1116352408, 1899447441, -1245643825, -373957723, 961987163, 1508970993, -1841331548, -1424204075, -670586216, 310598401, 607225278, 1426881987, 1925078388, -2132889090, -1680079193, -1046744716, -459576895, -272742522, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, -1740746414, -1473132947, -1341970488, -1084653625, -958395405, -710438585, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, -2117940946, -1838011259, -1564481375, -1474664885, -1035236496, -949202525, -778901479, -694614492, -200395387, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, -2067236844, -1933114872, -1866530822, -1538233109, -1090935817, -965641998];
const W = [];
class SHA256 extends Hasher {
  constructor() {
    super();
    this.reset();
  }
  reset() {
    super.reset();
    this._hash = new WordArray([...H]);
  }
  _doProcessBlock(M, offset) {
    const H2 = this._hash.words;
    let a = H2[0];
    let b = H2[1];
    let c = H2[2];
    let d = H2[3];
    let e = H2[4];
    let f = H2[5];
    let g = H2[6];
    let h2 = H2[7];
    for (let i = 0; i < 64; i++) {
      if (i < 16) {
        W[i] = M[offset + i] | 0;
      } else {
        const gamma0x = W[i - 15];
        const gamma0 = (gamma0x << 25 | gamma0x >>> 7) ^ (gamma0x << 14 | gamma0x >>> 18) ^ gamma0x >>> 3;
        const gamma1x = W[i - 2];
        const gamma1 = (gamma1x << 15 | gamma1x >>> 17) ^ (gamma1x << 13 | gamma1x >>> 19) ^ gamma1x >>> 10;
        W[i] = gamma0 + W[i - 7] + gamma1 + W[i - 16];
      }
      const ch = e & f ^ ~e & g;
      const maj = a & b ^ a & c ^ b & c;
      const sigma0 = (a << 30 | a >>> 2) ^ (a << 19 | a >>> 13) ^ (a << 10 | a >>> 22);
      const sigma1 = (e << 26 | e >>> 6) ^ (e << 21 | e >>> 11) ^ (e << 7 | e >>> 25);
      const t1 = h2 + sigma1 + ch + K[i] + W[i];
      const t2 = sigma0 + maj;
      h2 = g;
      g = f;
      f = e;
      e = d + t1 | 0;
      d = c;
      c = b;
      b = a;
      a = t1 + t2 | 0;
    }
    H2[0] = H2[0] + a | 0;
    H2[1] = H2[1] + b | 0;
    H2[2] = H2[2] + c | 0;
    H2[3] = H2[3] + d | 0;
    H2[4] = H2[4] + e | 0;
    H2[5] = H2[5] + f | 0;
    H2[6] = H2[6] + g | 0;
    H2[7] = H2[7] + h2 | 0;
  }
  finalize(messageUpdate) {
    super.finalize(messageUpdate);
    const nBitsTotal = this._nDataBytes * 8;
    const nBitsLeft = this._data.sigBytes * 8;
    this._data.words[nBitsLeft >>> 5] |= 128 << 24 - nBitsLeft % 32;
    this._data.words[(nBitsLeft + 64 >>> 9 << 4) + 14] = Math.floor(nBitsTotal / 4294967296);
    this._data.words[(nBitsLeft + 64 >>> 9 << 4) + 15] = nBitsTotal;
    this._data.sigBytes = this._data.words.length * 4;
    this._process();
    return this._hash;
  }
}
function sha256base64(message) {
  return new SHA256().finalize(message).toString(Base64);
}
function hash(object, options = {}) {
  const hashed = typeof object === "string" ? object : objectHash(object, options);
  return sha256base64(hashed).slice(0, 10);
}
const ProductId = "#product";
const productResolver = defineSchemaOrgResolver({
  defaults: {
    "@type": "Product"
  },
  inheritMeta: [
    "description",
    "image",
    { meta: "title", key: "name" }
  ],
  idPrefix: ["url", ProductId],
  resolve(node, ctx) {
    setIfEmpty(node, "sku", hash(node.name));
    node.aggregateOffer = resolveRelation(node.aggregateOffer, ctx, aggregateOfferResolver);
    node.aggregateRating = resolveRelation(node.aggregateRating, ctx, aggregateRatingResolver);
    node.offers = resolveRelation(node.offers, ctx, offerResolver);
    node.review = resolveRelation(node.review, ctx, reviewResolver);
    return node;
  },
  resolveRootNode(product, { find }) {
    const webPage = find(PrimaryWebPageId);
    const identity = find(IdentityId);
    if (identity)
      setIfEmpty(product, "brand", idReference(identity));
    if (webPage)
      setIfEmpty(product, "mainEntityOfPage", idReference(webPage));
    return product;
  }
});
const answerResolver = defineSchemaOrgResolver({
  cast(node) {
    if (typeof node === "string") {
      return {
        text: node
      };
    }
    return node;
  },
  defaults: {
    "@type": "Answer"
  }
});
const questionResolver = defineSchemaOrgResolver({
  defaults: {
    "@type": "Question"
  },
  inheritMeta: [
    "inLanguage"
  ],
  idPrefix: "url",
  resolve(question, ctx) {
    if (question.question)
      question.name = question.question;
    if (question.answer)
      question.acceptedAnswer = question.answer;
    question.acceptedAnswer = resolveRelation(question.acceptedAnswer, ctx, answerResolver);
    return question;
  },
  resolveRootNode(question, { find }) {
    const webPage = find(PrimaryWebPageId);
    if (webPage && asArray(webPage["@type"]).includes("FAQPage"))
      dedupeMerge(webPage, "mainEntity", idReference(question));
  }
});
const RecipeId = "#recipe";
const recipeResolver = defineSchemaOrgResolver({
  defaults: {
    "@type": "Recipe"
  },
  inheritMeta: [
    { meta: "title", key: "name" },
    "description",
    "image",
    "datePublished"
  ],
  idPrefix: ["url", RecipeId],
  resolve(node, ctx) {
    node.recipeInstructions = resolveRelation(node.recipeInstructions, ctx, howToStepResolver);
    return node;
  },
  resolveRootNode(node, { find }) {
    const article = find(PrimaryArticleId);
    const webPage = find(PrimaryWebPageId);
    if (article)
      setIfEmpty(node, "mainEntityOfPage", idReference(article));
    else if (webPage)
      setIfEmpty(node, "mainEntityOfPage", idReference(webPage));
    if (article == null ? void 0 : article.author)
      setIfEmpty(node, "author", article.author);
    return node;
  }
});
const softwareAppResolver = defineSchemaOrgResolver({
  defaults: {
    "@type": "SoftwareApplication"
  },
  resolve(node, ctx) {
    resolveDefaultType(node, "SoftwareApplication");
    node.offers = resolveRelation(node.offers, ctx, offerResolver);
    node.aggregateRating = resolveRelation(node.aggregateRating, ctx, aggregateRatingResolver);
    node.review = resolveRelation(node.review, ctx, reviewResolver);
    return node;
  }
});
function loadResolver(resolver2) {
  switch (resolver2) {
    case "address":
      return addressResolver;
    case "aggregateOffer":
      return aggregateOfferResolver;
    case "aggregateRating":
      return aggregateRatingResolver;
    case "article":
      return articleResolver;
    case "breadcrumb":
      return breadcrumbResolver;
    case "comment":
      return commentResolver;
    case "event":
      return eventResolver;
    case "virtualLocation":
      return virtualLocationResolver;
    case "place":
      return placeResolver;
    case "howTo":
      return howToResolver;
    case "howToStep":
      return howToStepResolver;
    case "image":
      return imageResolver;
    case "localBusiness":
      return localBusinessResolver;
    case "offer":
      return offerResolver;
    case "openingHours":
      return openingHoursResolver;
    case "organization":
      return organizationResolver;
    case "person":
      return personResolver;
    case "product":
      return productResolver;
    case "question":
      return questionResolver;
    case "recipe":
      return recipeResolver;
    case "review":
      return reviewResolver;
    case "video":
      return videoResolver;
    case "webPage":
      return webPageResolver;
    case "webSite":
      return webSiteResolver;
    case "book":
      return bookResolver;
    case "course":
      return courseResolver;
    case "itemList":
      return itemListResolver;
    case "jobPosting":
      return jobPostingResolver;
    case "listItem":
      return listItemResolver;
    case "movie":
      return movieResolver;
    case "searchAction":
      return searchActionResolver;
    case "readAction":
      return readActionResolver;
    case "softwareApp":
      return softwareAppResolver;
    case "bookEdition":
      return bookEditionResolver;
  }
  return null;
}
const resolver = {
  __proto__: null,
  loadResolver
};
const resolveMeta = (meta) => {
  if (!meta.host && meta.canonicalHost)
    meta.host = meta.canonicalHost;
  if (!meta.tagPosition && meta.position)
    meta.tagPosition = meta.position;
  if (!meta.currency && meta.defaultCurrency)
    meta.currency = meta.defaultCurrency;
  if (!meta.inLanguage && meta.defaultLanguage)
    meta.inLanguage = meta.defaultLanguage;
  if (!meta.path)
    meta.path = "/";
  if (!meta.host && false)
    meta.host = document.location.host;
  if (!meta.url && meta.canonicalUrl)
    meta.url = meta.canonicalUrl;
  if (meta.path !== "/") {
    if (meta.trailingSlash && !hasTrailingSlash(meta.path))
      meta.path = withTrailingSlash(meta.path);
    else if (!meta.trailingSlash && hasTrailingSlash(meta.path))
      meta.path = withoutTrailingSlash(meta.path);
  }
  meta.url = joinURL(meta.host, meta.path);
  return {
    ...meta,
    host: meta.host,
    url: meta.url,
    currency: meta.currency,
    image: meta.image,
    inLanguage: meta.inLanguage,
    title: meta.title,
    description: meta.description,
    datePublished: meta.datePublished,
    dateModified: meta.dateModified
  };
};
const resolveNode = (node, ctx, resolver2) => {
  var _a;
  if (resolver2 == null ? void 0 : resolver2.cast)
    node = resolver2.cast(node, ctx);
  if (resolver2 == null ? void 0 : resolver2.defaults) {
    let defaults2 = resolver2.defaults || {};
    if (typeof defaults2 === "function")
      defaults2 = defaults2(ctx);
    node = {
      ...defaults2,
      ...node
    };
  }
  (_a = resolver2.inheritMeta) == null ? void 0 : _a.forEach((entry2) => {
    if (typeof entry2 === "string")
      setIfEmpty(node, entry2, ctx.meta[entry2]);
    else
      setIfEmpty(node, entry2.key, ctx.meta[entry2.meta]);
  });
  if (resolver2 == null ? void 0 : resolver2.resolve)
    node = resolver2.resolve(node, ctx);
  for (const k in node) {
    const v = node[k];
    if (typeof v === "object" && (v == null ? void 0 : v._resolver))
      node[k] = resolveRelation(v, ctx, v._resolver);
  }
  stripEmptyProperties(node);
  return node;
};
const resolveNodeId = (node, ctx, resolver2, resolveAsRoot = false) => {
  var _a, _b;
  const prefix = Array.isArray(resolver2.idPrefix) ? resolver2.idPrefix[0] : resolver2.idPrefix;
  if (!prefix)
    return node;
  if (node["@id"] && !node["@id"].startsWith(ctx.meta.host)) {
    node["@id"] = prefixId(ctx.meta[prefix], node["@id"]);
    return node;
  }
  const rootId = Array.isArray(resolver2.idPrefix) ? (_a = resolver2.idPrefix) == null ? void 0 : _a[1] : void 0;
  if (resolveAsRoot && rootId) {
    node["@id"] = prefixId(ctx.meta[prefix], rootId);
  }
  if (!node["@id"]) {
    let alias = resolver2 == null ? void 0 : resolver2.alias;
    if (!alias) {
      const type = ((_b = asArray(node["@type"])) == null ? void 0 : _b[0]) || "";
      alias = type.toLowerCase();
    }
    const hashNodeData = {};
    Object.entries(node).forEach(([key, val]) => {
      if (!key.startsWith("_"))
        hashNodeData[key] = val;
    });
    node["@id"] = prefixId(ctx.meta[prefix], `#/schema/${alias}/${hashCode(JSON.stringify(hashNodeData))}`);
  }
  return node;
};
function resolveRelation(input, ctx, fallbackResolver, options = {}) {
  if (!input)
    return input;
  const ids = asArray(input).map((a) => {
    if (Object.keys(a).length === 1 && a["@id"])
      return a;
    let resolver2 = fallbackResolver;
    if (a._resolver) {
      resolver2 = a._resolver;
      if (typeof resolver2 === "string")
        resolver2 = loadResolver(resolver2);
      delete a._resolver;
    }
    if (!resolver2)
      return a;
    let node = resolveNode(a, ctx, resolver2);
    if (options.afterResolve)
      options.afterResolve(node);
    if (options.generateId || options.root)
      node = resolveNodeId(node, ctx, resolver2, false);
    if (options.root) {
      if (resolver2.resolveRootNode)
        resolver2.resolveRootNode(node, ctx);
      ctx.push(node);
      return idReference(node["@id"]);
    }
    return node;
  });
  if (!options.array && ids.length === 1)
    return ids[0];
  return ids;
}
const groupBy = (array, predicate) => array.reduce((acc, value, index, array2) => {
  const key = predicate(value, index, array2);
  if (!acc[key])
    acc[key] = [];
  acc[key].push(value);
  return acc;
}, {});
const dedupeNodes = (nodes) => {
  const sortedNodeKeys = nodes.keys();
  const dedupedNodes = {};
  for (const key of sortedNodeKeys) {
    const n = nodes[key];
    const nodeKey = resolveAsGraphKey(n["@id"] || hash(n));
    const groupedKeys = groupBy(Object.keys(n), (key2) => {
      const val = n[key2];
      if (key2.startsWith("_"))
        return "ignored";
      if (Array.isArray(val) || typeof val === "object")
        return "relations";
      return "primitives";
    });
    const keys = [
      ...(groupedKeys.primitives || []).sort(),
      ...(groupedKeys.relations || []).sort()
    ];
    const newNode = {};
    for (const key2 of keys)
      newNode[key2] = n[key2];
    dedupedNodes[nodeKey] = newNode;
  }
  return Object.values(dedupedNodes);
};
const createSchemaOrgGraph = () => {
  const ctx = {
    find(id) {
      const key = resolveAsGraphKey(id);
      return ctx.nodes.filter((n) => !!n["@id"]).find((n) => resolveAsGraphKey(n["@id"]) === key);
    },
    push(input) {
      asArray(input).forEach((node) => {
        const registeredNode = node;
        ctx.nodes.push(registeredNode);
      });
    },
    resolveGraph(meta) {
      ctx.meta = resolveMeta({ ...meta });
      ctx.nodes.forEach((node, key) => {
        const resolver2 = node._resolver;
        if (resolver2) {
          node = resolveNode(node, ctx, resolver2);
          node = resolveNodeId(node, ctx, resolver2, true);
        }
        ctx.nodes[key] = node;
      });
      ctx.nodes.forEach((node) => {
        var _a;
        if (node.image && typeof node.image === "string") {
          node.image = resolveRelation(node.image, ctx, imageResolver, {
            root: true
          });
        }
        if ((_a = node._resolver) == null ? void 0 : _a.resolveRootNode)
          node._resolver.resolveRootNode(node, ctx);
        delete node._resolver;
      });
      return dedupeNodes(ctx.nodes);
    },
    nodes: [],
    meta: {}
  };
  return ctx;
};
function SchemaOrgUnheadPlugin(config2, meta) {
  config2 = resolveMeta({ ...config2 });
  let graph;
  const resolvedMeta = {};
  return {
    hooks: {
      "entries:resolve": function() {
        graph = createSchemaOrgGraph();
      },
      "tag:normalise": async function({ tag }) {
        if (tag.key === "schema-org-graph") {
          const { loadResolver: loadResolver2 } = await Promise.resolve().then(function() {
            return resolver;
          });
          const nodes = await tag.props.nodes;
          for (const node of Array.isArray(nodes) ? nodes : [nodes]) {
            const newNode = {
              ...node,
              _resolver: loadResolver2(await node._resolver)
            };
            graph.push(newNode);
          }
          tag.tagPosition = config2.tagPosition === "head" ? "head" : "bodyClose";
        }
        if (tag.tag === "title")
          resolvedMeta.title = tag.textContent;
        else if (tag.tag === "meta" && tag.props.name === "description")
          resolvedMeta.description = tag.props.content;
        else if (tag.tag === "link" && tag.props.rel === "canonical")
          resolvedMeta.url = tag.props.href;
        else if (tag.tag === "meta" && tag.props.property === "og:image")
          resolvedMeta.image = tag.props.content;
      },
      "tags:resolve": async function(ctx) {
        for (const tag of ctx.tags) {
          if (tag.tag === "script" && tag.key === "schema-org-graph") {
            tag.innerHTML = JSON.stringify({
              "@context": "https://schema.org",
              "@graph": graph.resolveGraph({ ...config2, ...resolvedMeta, ...await meta() })
            }, null, 2);
            delete tag.props.nodes;
          }
        }
      }
    }
  };
}
const config = { "host": "https://tislogistic.ru/", "trailingSlash": false, "inLanguage": "ru" };
const plugin_hk8DoX26Pk = /* @__PURE__ */ defineNuxtPlugin((nuxtApp) => {
  const head = nuxtApp.vueApp._context.provides.usehead;
  const router = useRouter();
  const currentRoute = router.currentRoute;
  head.use(SchemaOrgUnheadPlugin(config, async () => {
    const route = unref(currentRoute);
    const meta = {
      ...config,
      path: route.path,
      ...route.meta
    };
    await nuxtApp.hooks.callHook("schema-org:meta", meta);
    return meta;
  }));
});
async function imageMeta(_ctx, url) {
  const meta = await _imageMeta(url).catch((err) => {
    console.error("Failed to get image meta for " + url, err + "");
    return {
      width: 0,
      height: 0,
      ratio: 0
    };
  });
  return meta;
}
async function _imageMeta(url) {
  {
    const imageMeta2 = await import('file://C:/Users/tzhovtyy/Desktop/tislogistic-frontend/node_modules/image-meta/dist/index.mjs').then((r) => r.imageMeta);
    const data = await fetch(url).then((res) => res.buffer());
    const metadata = imageMeta2(data);
    if (!metadata) {
      throw new Error(`No metadata could be extracted from the image \`${url}\`.`);
    }
    const { width, height } = metadata;
    const meta = {
      width,
      height,
      ratio: width && height ? width / height : void 0
    };
    return meta;
  }
}
function createMapper(map) {
  return (key) => {
    return key ? map[key] || key : map.missingValue;
  };
}
function createOperationsGenerator({ formatter, keyMap, joinWith = "/", valueMap } = {}) {
  if (!formatter) {
    formatter = (key, value) => `${key}=${value}`;
  }
  if (keyMap && typeof keyMap !== "function") {
    keyMap = createMapper(keyMap);
  }
  const map = valueMap || {};
  Object.keys(map).forEach((valueKey) => {
    if (typeof map[valueKey] !== "function") {
      map[valueKey] = createMapper(map[valueKey]);
    }
  });
  return (modifiers = {}) => {
    const operations = Object.entries(modifiers).filter(([_, value]) => typeof value !== "undefined").map(([key, value]) => {
      const mapper = map[key];
      if (typeof mapper === "function") {
        value = mapper(modifiers[key]);
      }
      key = typeof keyMap === "function" ? keyMap(key) : key;
      return formatter(key, value);
    });
    return operations.join(joinWith);
  };
}
function parseSize(input = "") {
  if (typeof input === "number") {
    return input;
  }
  if (typeof input === "string") {
    if (input.replace("px", "").match(/^\d+$/g)) {
      return parseInt(input, 10);
    }
  }
}
function createImage(globalOptions) {
  const ctx = {
    options: globalOptions
  };
  const getImage2 = (input, options = {}) => {
    const image = resolveImage(ctx, input, options);
    return image;
  };
  const $img = (input, modifiers = {}, options = {}) => {
    return getImage2(input, {
      ...options,
      modifiers: defu(modifiers, options.modifiers || {})
    }).url;
  };
  for (const presetName in globalOptions.presets) {
    $img[presetName] = (source, modifiers, options) => $img(source, modifiers, { ...globalOptions.presets[presetName], ...options });
  }
  $img.options = globalOptions;
  $img.getImage = getImage2;
  $img.getMeta = (input, options) => getMeta(ctx, input, options);
  $img.getSizes = (input, options) => getSizes(ctx, input, options);
  ctx.$img = $img;
  return $img;
}
async function getMeta(ctx, input, options) {
  const image = resolveImage(ctx, input, { ...options });
  if (typeof image.getMeta === "function") {
    return await image.getMeta();
  } else {
    return await imageMeta(ctx, image.url);
  }
}
function resolveImage(ctx, input, options) {
  var _a, _b;
  if (typeof input !== "string" || input === "") {
    throw new TypeError(`input must be a string (received ${typeof input}: ${JSON.stringify(input)})`);
  }
  if (input.startsWith("data:")) {
    return {
      url: input
    };
  }
  const { provider, defaults: defaults2 } = getProvider(ctx, options.provider || ctx.options.provider);
  const preset = getPreset(ctx, options.preset);
  input = hasProtocol$1(input) ? input : withLeadingSlash(input);
  if (!provider.supportsAlias) {
    for (const base in ctx.options.alias) {
      if (input.startsWith(base)) {
        input = joinURL$1(ctx.options.alias[base], input.substr(base.length));
      }
    }
  }
  if (provider.validateDomains && hasProtocol$1(input)) {
    const inputHost = parseURL(input).host;
    if (!ctx.options.domains.find((d) => d === inputHost)) {
      return {
        url: input
      };
    }
  }
  const _options = defu(options, preset, defaults2);
  _options.modifiers = { ..._options.modifiers };
  const expectedFormat = _options.modifiers.format;
  if ((_a = _options.modifiers) == null ? void 0 : _a.width) {
    _options.modifiers.width = parseSize(_options.modifiers.width);
  }
  if ((_b = _options.modifiers) == null ? void 0 : _b.height) {
    _options.modifiers.height = parseSize(_options.modifiers.height);
  }
  const image = provider.getImage(input, _options, ctx);
  image.format = image.format || expectedFormat || "";
  return image;
}
function getProvider(ctx, name) {
  const provider = ctx.options.providers[name];
  if (!provider) {
    throw new Error("Unknown provider: " + name);
  }
  return provider;
}
function getPreset(ctx, name) {
  if (!name) {
    return {};
  }
  if (!ctx.options.presets[name]) {
    throw new Error("Unknown preset: " + name);
  }
  return ctx.options.presets[name];
}
function getSizes(ctx, input, opts) {
  var _a, _b;
  const width = parseSize((_a = opts.modifiers) == null ? void 0 : _a.width);
  const height = parseSize((_b = opts.modifiers) == null ? void 0 : _b.height);
  const hwRatio = width && height ? height / width : 0;
  const variants = [];
  const sizes = {};
  if (typeof opts.sizes === "string") {
    for (const entry2 of opts.sizes.split(/[\s,]+/).filter((e) => e)) {
      const s = entry2.split(":");
      if (s.length !== 2) {
        continue;
      }
      sizes[s[0].trim()] = s[1].trim();
    }
  } else {
    Object.assign(sizes, opts.sizes);
  }
  for (const key in sizes) {
    const screenMaxWidth = ctx.options.screens && ctx.options.screens[key] || parseInt(key);
    let size = String(sizes[key]);
    const isFluid = size.endsWith("vw");
    if (!isFluid && /^\d+$/.test(size)) {
      size = size + "px";
    }
    if (!isFluid && !size.endsWith("px")) {
      continue;
    }
    let _cWidth = parseInt(size);
    if (!screenMaxWidth || !_cWidth) {
      continue;
    }
    if (isFluid) {
      _cWidth = Math.round(_cWidth / 100 * screenMaxWidth);
    }
    const _cHeight = hwRatio ? Math.round(_cWidth * hwRatio) : height;
    variants.push({
      width: _cWidth,
      size,
      screenMaxWidth,
      media: `(max-width: ${screenMaxWidth}px)`,
      src: ctx.$img(input, { ...opts.modifiers, width: _cWidth, height: _cHeight }, opts)
    });
  }
  variants.sort((v1, v2) => v1.screenMaxWidth - v2.screenMaxWidth);
  const defaultVar = variants[variants.length - 1];
  if (defaultVar) {
    defaultVar.media = "";
  }
  return {
    sizes: variants.map((v) => `${v.media ? v.media + " " : ""}${v.size}`).join(", "),
    srcset: variants.map((v) => `${v.src} ${v.width}w`).join(", "),
    src: defaultVar == null ? void 0 : defaultVar.src
  };
}
const operationsGenerator = createOperationsGenerator({
  keyMap: {
    format: "f",
    fit: "fit",
    width: "w",
    height: "h",
    resize: "s",
    quality: "q",
    background: "b"
  },
  joinWith: "&",
  formatter: (key, val) => encodeParam(key) + "_" + encodeParam(val)
});
const getImage = (src, { modifiers = {}, baseURL: baseURL2 } = {}, ctx) => {
  if (modifiers.width && modifiers.height) {
    modifiers.resize = `${modifiers.width}x${modifiers.height}`;
    delete modifiers.width;
    delete modifiers.height;
  }
  const params = operationsGenerator(modifiers) || "_";
  if (!baseURL2) {
    baseURL2 = joinURL$1(ctx.options.nuxt.baseURL, "/_ipx");
  }
  return {
    url: joinURL$1(baseURL2, params, encodePath(src))
  };
};
const validateDomains = true;
const supportsAlias = true;
const ipxRuntime$Gpx8mN1Axj = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  getImage,
  supportsAlias,
  validateDomains
});
const imageOptions = {
  "screens": {
    "xs": 320,
    "sm": 640,
    "md": 768,
    "lg": 1024,
    "xl": 1280,
    "xxl": 1536,
    "2xl": 1536
  },
  "presets": {},
  "provider": "ipx",
  "domains": [],
  "alias": {}
};
imageOptions.providers = {
  ["ipx"]: { provider: ipxRuntime$Gpx8mN1Axj, defaults: {} }
};
const plugin_OrkQhMqHci = /* @__PURE__ */ defineNuxtPlugin(() => {
  const config2 = /* @__PURE__ */ useRuntimeConfig();
  const img = createImage({
    ...imageOptions,
    nuxt: {
      baseURL: config2.app.baseURL
    }
  });
  return {
    provide: {
      img
    }
  };
});
const texts = {
  homeHeader: "Транспортно-экспедиторская \nкомпания ",
  companyName: "«ТИС ЛОДЖИСТИК» ",
  companyNameSeo: " «ТИС ЛОДЖИСТИК»",
  homeSubheader: "Доставляем грузы «от двери к двери» из любой страны мира. Основная деятельность — мультимодальные и ж/д перевозки в собственных контейнерах.",
  learnMore: "Узнать подробнее",
  companyPhone: "8 (800) 234 80 70",
  returnCall: "Обратный звонок",
  calculateDelivery: "Расчёт доставки",
  about: "О компании",
  services: "Услуги",
  allServices: "Все услуги",
  vacancies: "Вакансии",
  openVacancies: "Открытые вакансии",
  contacts: "Контакты",
  projects: "Проекты",
  news: "Новости",
  calculateTitle: "Расчёт стоимости доставки",
  legalEntitiesOnly: "Работаем только с юридическими лицами",
  step1: "Шаг 1",
  step2: "Шаг 2",
  from: "Откуда",
  to: "Куда",
  // calculator city suggestions
  dest1: "Владивосток",
  dest2: "Камчатка",
  dest3: "Хабаровск",
  dest4: "Москва",
  dest5: "Санкт-Петербург",
  dest6: "Новосибирск",
  description: "Описание груза",
  calculatorNote: "Вы можете произвести расчёт, заполнив форму на сайте или же уточнить стоимость, проконсультировавшись с нашими менеджерами, заказав обратный звонок",
  next: "Далее",
  back: "Назад",
  send: "Отправить",
  phone: "Телефон",
  email: "E-mail",
  descriptionInputMessage: "Опишите Ваш груз в свободной форме в этом поле",
  calculatorEmailNote: "Оставьте свой email, и мы пришлём Вам расчёт",
  whyChooseUs: "Почему стоит выбрать именно нас!",
  whyUs: "Почему мы?",
  warehouseArea: "площадь терминально-складского комплекса",
  warehouseAreaNumber: 3500,
  warehouseAreaNumberSuffix: " м2",
  branchesTitle: "Представительства и филиалы в России",
  partners: "Партнеры",
  presentationTitle: "Узнайте больше о компании из презентации",
  presentationDescription: "Чтобы познакомиться с компанией ТИС ЛОДЖИСТИК поближе, введите ниже свой email и мы отправим Вам презентацию",
  download: "Скачать",
  inkoterms: "ИНКОТЕРМС 2020",
  containerClassification: "Классификация контейнеров",
  vesselsPosition: "Позиция и движение судов",
  tariffs: "Тарифы на таможенное оформление грузов",
  websiteMap: "Карта сайта",
  address: "Адрес",
  workingHours: "Режим работы",
  confidentialityPolicy: "Политика конфиденциальности",
  customerAgreement: "Пользовательское соглашение",
  footerNote: "© 2006 - 2023 ООО «ТИС ЛОДЖИСТИК»",
  companyNews: "Новости компании",
  allNews: "Все новости",
  projectsDate: "30 сентября 2022",
  safelyTransport: "Надежно перевезём ваш груз в собственных контейнерах",
  importFromCountries: "Импорт из стран Азии, Европы и Америки",
  details: "Подробнее",
  ownContainers: "Собственный контейнерный парк",
  ownContainersDesc: "Более 3000 единиц для мультимодальных перевозок",
  qualifiedEmployees: "Квалифицированный персонал",
  qualifiedEmployeesDesc: "Более 170 опытных профессионалов",
  presenceGeography: "География присутствия",
  presenceGeographyDesc: "7 филиалов и 20 представительств",
  seaFreight: "Морские грузоперевозки",
  trainFreight: "Железнодорожные грузоперевозки ",
  carFreight: "Автомобильные перевозки",
  airFreight: "Авиаперевозки",
  projectLogistics: "Проектная логистика",
  customsDeclarations: "Таможенное оформление",
  storage: "Ответственное хранение",
  cargoForwarding: "Экспедирование грузов",
  cargoInsurance: "Страхование грузов",
  productsCertifying: "Сертификация продукции",
  companyValues: "Ценности ТИС ЛОДЖИСТИК",
  ourMission: "<b>Наша миссия –</b> обеспечить процесс логистики <span>максимально удобным и эффективным</span> для наших клиентов, предоставив комфортные условия <span>для роста и развития их бизнеса</span>, осуществляя комплексную доставку грузов <span>в любую точку мира</span>.",
  professionalism: "Профессионализм — ",
  professionalismDesc: "мы стремимся делать больше и лучше, постоянно наращивая наш опыт и компетенции в области транспортной логистики, а также уделяем особое внимание качеству нашей работы.",
  improvement: "Постоянное совершенствование — ",
  improvementDesc: "мы ориентированы как на эффективность и прибыльность компании, так и на личностное совершенствование каждого сотрудника, создавая комфортные условия для работы.",
  ecologyCompliance: "Экологичность — ",
  ecologyComplianceDesc: "мы заботимся об экологии и поддерживаем экологические инициативы, предоставляя чистые решения в нашей деятельности.",
  useUs: "Воспользовавшись услугами нашей транспортной компании, Вы сможете отправить и получить международные (мультимодальные) грузы из любой страны мира в любой город России «под ключ». ",
  backToForm: "Вернуться к форме расчета",
  containersHeader: "Классификация, виды и технические характеристики контейнеров компании",
  containersCalculate: "Рассчитать доставку в контейнере",
  calculate: "Рассчитать стоимость доставки",
  containerDimensions: "Размеры контейнера",
  width: "Ширина",
  length: "Длина",
  height: "Высота",
  inner: "Внутренние",
  outer: "Внешние",
  doors: "Двери",
  grossWeightMax: "Макс. Брутто",
  tare: "Тара",
  maxLoad: "Макс. Загрузка",
  volume: "Грузовместимость (объем)",
  weight: "Вес:",
  containerSharedDescription: "Это контейнер с увеличенной вместимостью. Последний показатель увеличен по сравнению с подобной моделью — контейнер 40 футов «Стандартный» именно из-за этого, показатели вместимости выше почти на пять тысяч килограмм, что немаловажно для товаров небольших габаритов. Этот контейнер идеально подходит для транспортировки мелко-расфасованных грузов на большие расстояния авто-фурами или железной дорогой, так как ширина и длина контейнера стандартные.",
  containerSharedDescription2: "Стандартный контейнер используемый для транспортировки автопоездом или по железной дороге. Также подобные контейнеры используются для транспортировки морем. Данный тип контейнера проверен временем и великолепно зарекомендовал себя в грузоперевозках. Его объем и габариты позволят Вам сэкономить на рейсах за товаром, а надежная конструкция обеспечит сохранность груза.",
  containerSharedDescription3: "Предназначены для перевозки грузов любого типа, однако, основное преимущество опен-топов перед другими типами контейнеров — возможность более удобной загрузки контейнера подъемным краном или крабом за счет открытого верха и снимающейся дверной перегородки. Кроме того, опен-топы незаменимы при перевозки высоких негабаритных грузов, которые не помещаются в контейнеры других типов, например, при перевозке спецтехники.",
  containerSharedDescription4: "Предназначен для перевозки тяжелых длинномеров, частей машинооборудования, автобусов, траков, авиамоторов, и других тяжелых сборных грузов.",
  containerRusTitle: "Российские 3, 5, 20, 24 тонные контейнеры ГОСТ 8477-79",
  sizesDesignation: "Обозначение типоразмеров",
  grossWeightTonns: "Масса брутто, тн",
  innerVolume: "Внутренняя полезная вместимость, куб",
  sizes: "Размеры, мм",
  doorsSizes: "Размеры дверного проема, мм",
  conclusionNote: "Воспользовавшись услугами нашей транспортной компании, Вы сможете отправить и получить международные (мультимодальные) грузы из любой страны мира в любой город России «под ключ». Организуем закуп товара у поставщиков, комплексную логистику до вашего склада, таможенное оформление, сертификационные и профессиональные складские услуги.",
  transportCompany: "Транспортная компания ",
  servicesTitle: " \nпредоставляет комплексные услуги по доставке грузов",
  servicesNote: "География нашей деятельности охватывает все ключевые страны: Китай, Японию, Корею, Вьетнам, Россия, Беларусь, Казахстан,  а также государства Юго-Восточной Азии.",
  mainServices: "Основные услуги",
  additionalServices: "Дополнительные услуги",
  additionalServicesHomeTitle: "Дополнительный сервис для вашего удобства",
  projectLogisticsTitle: "Проектная логистика любой сложности",
  projectLogisticsNote: "Перевозим сверхнегабаритные, тяжеловесные и длинномерные грузы \nпо всему миру любым видом транспорта.",
  complexDeliveryCardDesc: "Комплексная организация доставки крупногабаритных и тяжеловесных грузов",
  deliveryComplexOrganization: "Комплексная организация доставки крупногабаритных и тяжеловесных грузов совместно с «Тис Лоджистик»",
  optimalProjectDevelopment: "Разработка оптимального \nпроекта логистики",
  optimalProjectDevelopmentDesc: "Наша команда разработает и предложит лучшее решение для вашего бизнеса.",
  turnKeySupport: "Сопровождение \nпроекта под ключ",
  turnKeySupportDesc: "Наши менеджеры сопровождают сделку на всех ключевых этапах перевозки – контроль и решение всех вопросов.",
  closeAllTasks: "Закрываем все задачи по организации перевозки",
  closeAllTasksDesc: "Проведение лицензированного таможенного оформления, осуществление любых сопутствующих работ и координация всех участников перевозки.",
  calculatorSuccessTitle: "Заявка успешно отправлена",
  calculatorSuccessNote: "Наш менеджер с Вами свяжется для уточнения необходимой информации",
  willCall: "Мы перезвоним Вам в ближайшее время",
  whichService: "Какая услуга Вас интересует?",
  branch: "Филиал",
  FIO: "ФИО",
  phoneNumber: "Номер телефона",
  partnersSEOAlt: "Логистические услуги от транспортно-экспедиторской компании TIS Logistic",
  seoDescription: "TIS Logistic - транспортно-экспедиторская компания логистических услуг в России и за рубежом. Международная логистика, таможенное оформление, грузоперевозки и складские услуги по выгодным ценам.",
  seoAltProjectLogistics: "Проектная логистика любой сложности от транспортно-экспедиторской компании TIS Logistic ",
  seoConclusionContainers: "Классификация контейнеров Транспортно-экспедиторской компании «ТИС ЛОДЖИСТИК»",
  seoConclusionServices: "Услуги Транспортно-экспедиторской компании «ТИС ЛОДЖИСТИК»",
  seoMainAlt: "«ТИС ЛОДЖИСТИК» — транспортно-экспедиторская компания",
  anyDeliveryTitle: "Осуществляем любые виды проектных перевозок",
  keyIndicators: "Ключевые показатели компании",
  ourTask: "Доставка грузов - наша задача, \nудовлетворение клиента - ",
  ourGoal: "наша цель!",
  seaFreightNote: "В случае удалённости пункта доставки и необходимости комбинировать грузоперевозки «Тис Лоджистик» рекомендует использовать транспортировку морем. А уже в зависимости от пункта назначения мы предлагаем каботажные и международные перевозки.",
  seaFreightAdvantages: "Преимущества морских грузоперевозок",
  reliability: "Надёжность: ",
  seaFreightReliability: "грузы находятся не только на палубе судна, но и в трюме, что обеспечивает сохранность в холодное время года",
  universal: "Универсальность: ",
  seaFreightUniversal: "этот способ отлично подходит в том случае, если необходимо комбинировать отправления",
  distance: "Удалённость: ",
  seaFreightDistance: "отлично подходят для отправки в удалённые пункты",
  speed: "Скорость: ",
  seaFreightSpeed: "собственный контейнерный парк значительно удешевляет и ускоряет перевозку",
  internationalSeaFreight: "Международные морские грузоперевозки ",
  internationalSeaFreightNote: "Cтраны поставок, позволяющие доставлять грузы в контейнерах по всему миру",
  avaiableDestinations: "Среди доступных направлений",
  coastalShipping: "Каботажные морские грузоперевозки",
  coastalShippingNote: "Если же необходимо доставить груз в пределах страны, то каботажные перевозки — ваш вариант. На сегодняшний день мы осуществляем постоянные поставки продуктов питания, тяжелого негабаритного оборудования и колесной техники на Камчатку, Сахалин и Чукотку",
  coastalAvailableDestinations: "Доступные направления",
  seaFreightAllCountries: "Все страны поставок, позволяющие доставлять грузы в контейнерах по всему миру!",
  seaFreightAdvantagesSeo: "Преимущества морских грузоперевозок: ",
  otherServices: "Другие услуги",
  startCalculation: "Начать расчет",
  trainFreightNote: "Железнодорожные грузоперевозки — основная транспортная артерия в России. \nДоставим Ваш груз из точки, А в точку Б. За время существования мы создали развитую систему контейнерных и вагонных перевозок по России любых видов груза с возможностью обеспечения охраны по пути следования.",
  trainFreightAdvantages: "Преимущества ж/д перевозок \n«ТИС ЛОДЖИСТИК»",
  price: "Цена: ",
  trainFreightPrice: "в сравнении с авиа — и автоперевозками себестоимость меньше за счёт больших объёмов",
  security: "Безопасность: ",
  trainFreightSecurity: "все грузы перевозятся в надежных контейнерах и тщательно контролируются на каждом этапе",
  trainFreightUniversal: "перевозка любых грузов (в том числе спецтехники, автомобилей) на дальние расстояния",
  standard: "Стандарт: ",
  trainFreightStandard: "единый стандарт контейнеров — удобство для любого вида транспорта",
  regularRoutesMap: "Карта регулярных маршрутов ж/д перевозок",
  showAll: "Посмотреть все",
  expandAll: "Развернуть все",
  cargoTypes: "Виды перевозимых грузов",
  generalCargo: "Генеральные грузы",
  dangerousCargo: "Опасные грузы",
  refrigeratedCargo: "Рефрижераторные грузы",
  oversizedCargo: "Крупногабаритные грузы",
  collapse: "Свернуть",
  trainFreightAdvantagesSeo: "Преимущества железнодорожных грузоперевозок: ",
  carFreightNote: "Высокая скорость доставки, возможность транспортировать товары даже в отдалённые населённые пункты. С ними нет необходимости тратить время на планирование и согласование маршрута, как в случае c ж/д и авиаперевозками.",
  servicesSpectrum: "Полный спектр логистических услуг «Тис Лоджистик»",
  carFreightAdvantages: "Преимущества автомобильных \nперевозок",
  carFreightFromChinaHTML: 'Мы предоставляем сервис доставки груза \n<span class="yellow">напрямую из Китая в РФ</span> c оформлением транзитной документации и CMR, а также таможенной очистки при необходимости.',
  destination: "Направление",
  terms: "Сроки",
  registration: "Оформление \nТД и CMR",
  leaveApplicationHTML: 'Просто оставьте заявку, указав информацию о грузе, а также точки отправки и доставки. Наши менеджеры подберут автотранспорт и рассчитают <span class="yellow">оптимальный маршрут</span>.',
  airFreightNote: "Компания «Тис Лоджистик» предоставляет услуги международных, внутрироссийских и чартерных авиаперевозок. Мы доставляем грузы авиатранспортом по всему миру в кратчайшие сроки.",
  airFreightTypes: "Виды авиаперевозок",
  airFreightAdvantages: "Преимущества авиаперевозок",
  carFreightAdvantagesSeo: "Преимущества автомобильных перевозок с «ТИС ЛОДЖИСТИК»",
  rentalContainersTitle: "Аренда контейнеров с доставкой",
  rentalContainersNote: "Периоды аренды, под склад и для перевозок, могут быть различные — от краткосрочных до длительных. Мы открыты для сотрудничества и подберём Вам выгодные условия.",
  containerStats: "Характеристики контейнера",
  monthlyRent: "Аренда в месяц — ",
  rentalContainerDeliveryNote: "Стоимость и условия доставки до места хранения оплачивается отдельно и согласовывается с менеджером.",
  leadingDots: "..........................................................................................................................................................",
  // seo metas:
  seoKeywordsBase: "тис лоджистик, tis logistic, tis logistics, тис лоджистик владивосток, тис логистика, логистические услуги, логистика, грузоперевозки, международная логистика, международные грузоперевозки, доставка, международная доствка, перевозки, международная доставка грузов, тис-лоджистик, расчет стоимости логистических услуг, рассчитать стоимость доставки, стоимость грузоперевозок, ооо тис лоджистик, 2023, грузоперевозки «под ключ», организация логистики, ",
  seoServicesKeywordsBase: "таможенное оформление, растаможка, морские грузоперевозки, железнодорожные грузоперевозки, ж/д перевозки, жд перевозки, автомобильные перевозки, авиаперевозки, проектная логистика, складские услуги, экспедирование грузов, страхование грузов, сертификация продукции, ",
  seoHomeTitle: "Логистическая компания",
  seoHomeDescription: "TIS Logistic - транспортно-экспедиторская компания логистических услуг. Международная логистика, доставка из Китая, таможенное оформление и складские услуги",
  seoHomeKeywords: "доставка из Китая, доставка из Китая 2023, доставка в Россию 2023, доставка из Японии, доставка в условиях санкций, мультимодальные перевозки, перевозка грузов в собственных контейнерах, собственный контейнерный парк, предоставление контейнеров, филиалы TIS Logistic, перевозка негабаритных грузов, перевозка опасных грузов, транспортная логистика, из любой страны, в любой город, организация перевозок, контейнерные перевозки",
  seoContainersTitle: "Классификация контейнеров",
  seoContainersDescription: "Классификация, виды и технические характеристики контейнеров, сравнение контейнеров, вместимость контейнеров, все виды контейнеров компании TIS Logistic",
  seoContainersKeywords: "виды контейнеров, типы контейнеров, классификация контейнеров, характеристики контейнеров, сравнить контейнеры, отличия контейнеров, вместимость контейнеров, размеры контейнера, контейнеры увеличенной вместимости, грузовместимость контейнера, Pallet Wide, контейнер, 40 НC PW, 20 НC PW, усиленный контейнер, 40 НC, 20 НC, стандартный контейнер, стальной контейнер, контейнер с отрытым верхом, контейнер Hard Top, контейнер с торцевыми стенками, рефрижераторный контейнер, ГОСТ 8477-79, загрузка контейнера, ",
  seoServicesTitle: "Логистические услуги",
  seoServicesDescription: "Международные грузоперевозки, логистика по России, из Китая. Морские, железнодорожные, автомобильные и авиаперевозки, таможенное оформление и другие услуги",
  seoServicesKeywords: "отправить международные грузы, получить международные грузы, доставка из Китая, доставка из Кореи, доставка из Белоруси, Вьетнам, Казахстан, закуп товара в Китае, закуп товара у поставщиков, комплексная логистика, логистика до склада, мультимодальные грузы",
  seoProjectLogisticsDescription: "Перевозка негабаритных, сверхгабаритных, тяжеловесных, длинномерных и опасных грузов. Любые виды проектных грузоперевозок, комплексная организация доставки",
  seoProjectLogisticsKeywords: "проектная логистика, проектные грузоперевозки, перевозка грузов, сверхгабаритных, тяжеловесных, негабаритных, крупногабаритных, длинномерных, опасных, перевозка оборудования, перевозка промышленного оборудования, перевозка транспорта, доставка из Японии, доставка в условиях санкций, ",
  seoSeaFreightDescription: "Международные морские перевозки, доставка в Россию из Китая, Японии, США, Кореи, Европы и других направлений, каботажные грузоперевозки по России",
  seoSeaFreightKeywords: "доставка морем, морские грузоперевозки, международные морские перевозки, доставка из Китая, Япония, Корея, доставка из США, Европа, ОАЭ, каботажные, каботажные перевозки, чукотка, сахалин, камчатка, ",
  seoTrainFreightDescription: "Контейнерные и вагонные перевозки грузов железнодорожным транспортом. Ж/д перевозки рефрижераторных, крупногабаритных, опасных грузов и обеспечение охраны.",
  seoTrainFreightKeywords: "вагонные перевозки, контейнерные перевозки, железнодорожный транспорт, рефрижераторные грузы, крупногабаритные грузы, опасные грузы, генеральные грузы, Москва, Владивосток, Санкт-Петербург, перевозки во Владивосток, ",
  seoCarFreightDescription: "Грузовые автоперевозки, логистика негабаритных и опасных грузов. Прямая доставка из Китая (Хуньчунь, Суйфеньхэ и другие города) во Владивосток, Москву.",
  seoCarFreightKeywords: "автоперевозки, автодоставка, доставка из Китая, перевозки из Китая, грузы из Китая, хуньчунь, суйфеньхэ, шанхай, циндао, гуанчжоу, дунин, доставка из китая во владивосток, перевозки из китая во владивосток, доставка из китая в москву, сроки доставки из китая, сроки оформления грузов из китая, цена доставки из китая, оформление транзитной документации, таможенная очистка, прямая логистика из китая, CMR, ",
  seoAirFreightDescription: "Доставка грузов авиатранспортом по всему миру. Международные, внутренние и чартерные перевозки. Доставка режимных (скоропортящихся) грузов.",
  seoAirFreightKeywords: "авиадоставка, междунарондые, внутренние, чартерные авиаперевозки, доставка скоропортящихся грузов, доставка режиммных грузов, аренда самолета, грузовой самолет, тарифы на авиадоставку, ",
  seoRentalContainersDescription: "Аренда контейнеров для перевозок и под склад, на краткосрочный или длительный период.",
  seoRentalContainersKeywords: "контейнер, контейнеры, аренда контейнеров, контейнеры в аренду, арендовать контейнер, аренда контейнеров под склад, аренда контейнеров для перевозок, краткосрочная аренда, долгосрочная аренда, доставка контейнеров, контейнеры с доставкой, характеристики контейнера, 20DC, 20HC PW, 40HC, 40HC PW, стоимость аренды контейнера, заказать контейнер, сравнить контейнеры, отличия контейнеров, вместимость контейнеров",
  rentalContainersFormTitle: "Заявка на расчет аренды контейнеров",
  containerType: "Тип контейнера",
  requestPriceCalculation: "Запросить  расчет стоимости",
  rentalContainersSwiperTitle: "Как выглядят наши контейнеры",
  homePage: "главная страница",
  close: "закрыть",
  followLink: "перейти по ссылке",
  additionalInfo: "Дополнительная информация",
  containers: "Контейнеры",
  deliveryProcess: "Процесс доставки груза",
  goUp: "Наверх",
  seaLinesTitle: "Морские линии, с которыми мы работаем",
  multimodalDelivery: "Мультимодальные перевозки с ТИС ЛОДЖИСТИК:",
  multimodalFreight: "Мультимодальные перевозки",
  multimodalFreightDef: "Это доставка грузов, в процессе которых используются несколько видов транспорта: морской, автомобильный, железнодорожный или авиаперевозка в любом их сочетании  на основе единого сквозного договора.  При этом, по желанию заказчика транспортирование товаров может выполняться в любую точку Земного Шара.",
  multimodalSubheaderHtml: 'С помощью мультимодальных перевозок – мы помогаем Вам <span class="yellow">сократить время доставки и ее стоимость.</span>',
  chinaCarDelivery: "Отправка легковых автомобилей в контейнерах из Китая",
  chinaSearch: "Поиск товара в Китае и проверка надежности отправителя",
  veterinarianControl: "Услуга оформления ветеринарного контроля",
  chooseBranch: "Выбрать филиал",
  chooseClosestBranch: "Выберите ближайший \nк вам филиал",
  faqTitle: "Часто задаваемые вопросы",
  aboutTitle: "ТИС ЛОДЖИСТИК",
  aboutSubtitle: "Основная деятельность компании — международные (мультимодальные) грузоперевозки из любой страны мира в любой город России «под ключ», включая закуп товара у поставщиков, комплексную логистику до Вашего склада, таможенное оформление, сертификационные услуги и профессиональные складские услуги.",
  companyDescription: "Бренд <span>Тис Лоджистик</span> существует с 2006 года. Пройдя долгий путь развития, <span>Тис Лоджистик</span> имеет уникальный опыт и широкую партнерскую сеть, благодаря которой предоставляет клиентам особые условия логистики, а также экспертную помощь в отправке сложных и нестандартных грузах. ",
  companyLocation: "Компания располагается в 8 городах России, связанными единой информационной системой, что обеспечивает индивидуальный подход к каждому клиенту, позволяя оптимально управлять цепью поставок контейнерных грузов любого объема и сложности.",
  principles: "Принципы ТИС ЛОДЖИСТИК",
  ceo: "Генеральный директор",
  ceoName: "Ватутин Виталий",
  ceoQuote: "Мы предлагаем лучшие условия своим клиентам, не допуская ошибок, проколов и проволочек. Речь — о сервисе премиального уровня от слаженной команды высококлассных специалистов. Хоть мы и не стали первопроходцами в отрасли, мы можем гордиться сотнями успешно выполненных проектов.",
  certificates: "Сертификаты и награды",
  foreignActivity: "Внешнеэкономическая деятельность",
  foreignActivityNote: "Перевозим сверхнегабаритные, тяжеловесные и длинномерные грузы по всему миру любым видом транспорта.",
  foreignServicesTitle: "Внешнеэкономическая деятельность с ТИС ЛОДЖИСТИК включает в себя полный комплекс услуг:",
  internationalTradeTitle: "Услуга «Международный торговый дом» включает в себя:",
  parallelImportDef: "*параллельный импорт  — это ввоз зарубежных товаров без разрешения правообладателя товарного знака, то есть «параллельно» официальному импорту таких товаров через дилеров, уполномоченных правообладателем.",
  cooperationResultTitle: "В результате сотрудничества с нами \nВы получаете:",
  ourAdvantages: "Наши преимущества",
  customerCare: '<span class="yellow">Забота об интересах клиентов –</span> наша главная цель!',
  companyAdministration: "Руководство компании",
  branchAdministration: "Руководство филиала",
  emailString: "Электронная почта",
  emailShort: "Почта",
  telegramTitle: "Новостной канал ТИС ЛОДЖИСТИК",
  telegramDescription: "Все самые интересные новости и предложения здесь!",
  goToTelegram: "Перейти в Telegram",
  telegramLink: "https://t.me/tislogistic",
  vacanciesBanner1: "Не смогли найти подходящую вакансию? \nОставьте свои контактные данные на нашем сайте или заполните анкету и ",
  vacanciesBanner2: "мы обязательно свяжемся с вами!",
  downloadSurvey: "Скачайте анкету",
  uploadSurvey: "Прикрепите анкету",
  passengerShips: "Пассажирские суда",
  cargoShips: "Грузовые суда",
  tankers: "Танкеры",
  atAnchor: "На якорь",
  buyGoods: "Покупаем товар",
  buildChain: "Выстраиваем безопасную, быструю и выгодную логистическую цепочку из любой точки мира",
  doCustomClearance: "Проводим таможенную очистку",
  unloadCargo: "Отгружаем товар на ваш склад",
  paymentAfter: "Оплата всех этапов \nв конце сделки",
  otherNews: "Другие новости",
  otherProjects: "Другие проекты",
  confidentialityAcknowledge: "Нажимая кнопку «Отправить», Вы принимаете условия пользовательского соглашения и политики конфиденциальности",
  deputyCeoName: "Васильченко Денис",
  deputyCeo: "Заместитель генерального директора",
  name: "Имя",
  employConstructor: "Привлекаем \nконструкторское бюро",
  employConstructorDesc: "Для осуществления проектной перевозки привлекается конструкторское бюро, которое разрабатывает безопасный маршрут груза с согласованиями во всех регионах РФ и привлечением контролирующих органов.",
  from500Kilos: "** Берем заявки в работу весом груза от 500 килограмм."
};
const injectDictionary_uD7f7eThLi = /* @__PURE__ */ defineNuxtPlugin(() => {
  return {
    provide: {
      texts
    }
  };
});
const _plugins = [
  components_plugin_KR1HBZs4kY,
  unhead_KgADcZ0jPj,
  vueuse_head_polyfill_M7DKUOwKp5,
  router_jmwsqit4Rs,
  plugin_BEnDUEy4ze,
  plugin_hk8DoX26Pk,
  plugin_OrkQhMqHci,
  injectDictionary_uD7f7eThLi
];
const Fragment = /* @__PURE__ */ defineComponent({
  name: "FragmentWrapper",
  setup(_props, { slots }) {
    return () => {
      var _a;
      return (_a = slots.default) == null ? void 0 : _a.call(slots);
    };
  }
});
const _wrapIf = (component, props, slots) => {
  return { default: () => props ? h(component, props === true ? {} : props, slots) : h(Fragment, {}, slots) };
};
const layouts = {
  default: () => import('./default-37b73cd7.mjs').then((m) => m.default || m)
};
const LayoutLoader = /* @__PURE__ */ defineComponent({
  name: "LayoutLoader",
  inheritAttrs: false,
  props: {
    name: String,
    ...{}
  },
  async setup(props, context) {
    const LayoutComponent = await layouts[props.name]().then((r) => r.default || r);
    return () => {
      return h(LayoutComponent, context.attrs, context.slots);
    };
  }
});
const __nuxt_component_0 = /* @__PURE__ */ defineComponent({
  name: "NuxtLayout",
  inheritAttrs: false,
  props: {
    name: {
      type: [String, Boolean, Object],
      default: null
    }
  },
  setup(props, context) {
    const injectedRoute = inject("_route");
    const route = injectedRoute === useRoute() ? useRoute$1() : injectedRoute;
    const layout = computed(() => unref(props.name) ?? route.meta.layout ?? "default");
    return () => {
      const hasLayout = layout.value && layout.value in layouts;
      const transitionProps = route.meta.layoutTransition ?? appLayoutTransition;
      return _wrapIf(Transition, hasLayout && transitionProps, {
        default: () => _wrapIf(LayoutLoader, hasLayout && {
          key: layout.value,
          name: layout.value,
          ...{},
          ...context.attrs
        }, context.slots).default()
      }).default();
    };
  }
});
const interpolatePath = (route, match) => {
  return match.path.replace(/(:\w+)\([^)]+\)/g, "$1").replace(/(:\w+)[?+*]/g, "$1").replace(/:\w+/g, (r) => {
    var _a;
    return ((_a = route.params[r.slice(1)]) == null ? void 0 : _a.toString()) || "";
  });
};
const generateRouteKey = (routeProps, override) => {
  const matchedRoute = routeProps.route.matched.find((m) => {
    var _a;
    return ((_a = m.components) == null ? void 0 : _a.default) === routeProps.Component.type;
  });
  const source = override ?? (matchedRoute == null ? void 0 : matchedRoute.meta.key) ?? (matchedRoute && interpolatePath(routeProps.route, matchedRoute));
  return typeof source === "function" ? source(routeProps.route) : source;
};
const wrapInKeepAlive = (props, children) => {
  return { default: () => children };
};
const __nuxt_component_1 = /* @__PURE__ */ defineComponent({
  name: "NuxtPage",
  inheritAttrs: false,
  props: {
    name: {
      type: String
    },
    transition: {
      type: [Boolean, Object],
      default: void 0
    },
    keepalive: {
      type: [Boolean, Object],
      default: void 0
    },
    route: {
      type: Object
    },
    pageKey: {
      type: [Function, String],
      default: null
    }
  },
  setup(props, { attrs }) {
    const nuxtApp = useNuxtApp();
    return () => {
      return h(RouterView, { name: props.name, route: props.route, ...attrs }, {
        default: (routeProps) => {
          if (!routeProps.Component) {
            return;
          }
          const key = generateRouteKey(routeProps, props.pageKey);
          const done = nuxtApp.deferHydration();
          const hasTransition = !!(props.transition ?? routeProps.route.meta.pageTransition ?? appPageTransition);
          const transitionProps = hasTransition && _mergeTransitionProps([
            props.transition,
            routeProps.route.meta.pageTransition,
            appPageTransition,
            { onAfterLeave: () => {
              nuxtApp.callHook("page:transition:finish", routeProps.Component);
            } }
          ].filter(Boolean));
          return _wrapIf(
            Transition,
            hasTransition && transitionProps,
            wrapInKeepAlive(
              props.keepalive ?? routeProps.route.meta.keepalive ?? appKeepalive,
              h(Suspense, {
                onPending: () => nuxtApp.callHook("page:start", routeProps.Component),
                onResolve: () => {
                  nextTick(() => nuxtApp.callHook("page:finish", routeProps.Component).finally(done));
                }
              }, { default: () => h(RouteProvider, { key, routeProps, pageKey: key, hasTransition }) })
            )
          ).default();
        }
      });
    };
  }
});
function _toArray(val) {
  return Array.isArray(val) ? val : val ? [val] : [];
}
function _mergeTransitionProps(routeProps) {
  const _props = routeProps.map((prop) => ({
    ...prop,
    onAfterLeave: _toArray(prop.onAfterLeave)
  }));
  return defu(..._props);
}
const RouteProvider = /* @__PURE__ */ defineComponent({
  name: "RouteProvider",
  // TODO: Type props
  // eslint-disable-next-line vue/require-prop-types
  props: ["routeProps", "pageKey", "hasTransition"],
  setup(props) {
    const previousKey = props.pageKey;
    const previousRoute = props.routeProps.route;
    const route = {};
    for (const key in props.routeProps.route) {
      route[key] = computed(() => previousKey === props.pageKey ? props.routeProps.route[key] : previousRoute[key]);
    }
    provide("_route", reactive(route));
    return () => {
      return h(props.routeProps.Component);
    };
  }
});
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLayout = __nuxt_component_0;
  const _component_NuxtPage = __nuxt_component_1;
  _push(ssrRenderComponent(_component_NuxtLayout, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_NuxtPage, null, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_NuxtPage)
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/nuxt/dist/pages/runtime/app.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const AppComponent = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "nuxt-root",
  __ssrInlineRender: true,
  setup(__props) {
    const ErrorComponent = /* @__PURE__ */ defineAsyncComponent(() => import('./error-component-e2ed78f8.mjs').then((r) => r.default || r));
    const IslandRenderer = /* @__PURE__ */ defineAsyncComponent(() => import('./island-renderer-2624e4e3.mjs').then((r) => r.default || r));
    const nuxtApp = useNuxtApp();
    nuxtApp.deferHydration();
    provide("_route", useRoute());
    nuxtApp.hooks.callHookWith((hooks) => hooks.map((hook) => hook()), "vue:setup");
    const error = useError();
    onErrorCaptured((err, target, info) => {
      nuxtApp.hooks.callHook("vue:error", err, target, info).catch((hookError) => console.error("[nuxt] Error in `vue:error` hook", hookError));
      {
        const p = callWithNuxt(nuxtApp, showError, [err]);
        onServerPrefetch(() => p);
      }
    });
    const { islandContext } = nuxtApp.ssrContext;
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderSuspense(_push, {
        default: () => {
          if (unref(error)) {
            _push(ssrRenderComponent(unref(ErrorComponent), { error: unref(error) }, null, _parent));
          } else if (unref(islandContext)) {
            _push(ssrRenderComponent(unref(IslandRenderer), { context: unref(islandContext) }, null, _parent));
          } else {
            _push(ssrRenderComponent(unref(AppComponent), null, null, _parent));
          }
        },
        _: 1
      });
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/nuxt/dist/app/components/nuxt-root.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const RootComponent = _sfc_main;
if (!globalThis.$fetch) {
  globalThis.$fetch = $fetch.create({
    baseURL: baseURL()
  });
}
let entry;
const plugins = normalizePlugins(_plugins);
{
  entry = async function createNuxtAppServer(ssrContext) {
    const vueApp = createApp(RootComponent);
    const nuxt = createNuxtApp({ vueApp, ssrContext });
    try {
      await applyPlugins(nuxt, plugins);
      await nuxt.hooks.callHook("app:created", vueApp);
    } catch (err) {
      await nuxt.hooks.callHook("app:error", err);
      nuxt.payload.error = nuxt.payload.error || err;
    }
    return vueApp;
  };
}
const entry$1 = (ctx) => entry(ctx);

export { _export_sfc as _, useHead as a, useRouter as b, createError as c, useSchemaOrg as d, entry$1 as default, defineBreadcrumb as e, useRoute as f, useState as g, useRequestEvent as h, useRuntimeConfig as i, useRequestFetch as j, defineWebSite as k, defineWebPage as l, navigateTo as n, parseSize as p, serverUseHead as s, texts as t, useNuxtApp as u };
//# sourceMappingURL=server.mjs.map
