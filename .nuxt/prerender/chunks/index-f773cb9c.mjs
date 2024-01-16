import { _ as __nuxt_component_0 } from './NewsMain-79f45275.mjs';
import { u as useNuxtApp, a as useHead, i as useRuntimeConfig } from './server.mjs';
import { u as useServerHead } from './internalLinks-dc4e1b80.mjs';
import { withAsyncContext, watchEffect, unref, mergeProps, useSSRContext } from 'file://C:/Users/tzhovtyy/Desktop/tislogistic-frontend/node_modules/vue/index.mjs';
import { u as useFetch } from './fetch-dfe554a9.mjs';
import { ssrRenderAttrs, ssrRenderComponent } from 'file://C:/Users/tzhovtyy/Desktop/tislogistic-frontend/node_modules/vue/server-renderer/index.mjs';
import './BreadCrumbs-7a67b271.mjs';
import './nuxt-link-0d39ff03.mjs';
import 'file://C:/Users/tzhovtyy/Desktop/tislogistic-frontend/node_modules/ufo/dist/index.mjs';
import './transformDate-3029d144.mjs';
import 'file://C:/Users/tzhovtyy/Desktop/tislogistic-frontend/node_modules/dayjs/dayjs.min.js';
import './ExpandArrow-c1187625.mjs';
import './composables-5d51eb10.mjs';
import 'file://C:/Users/tzhovtyy/Desktop/tislogistic-frontend/node_modules/ofetch/dist/node.mjs';
import 'file://C:/Users/tzhovtyy/Desktop/tislogistic-frontend/node_modules/hookable/dist/index.mjs';
import 'file://C:/Users/tzhovtyy/Desktop/tislogistic-frontend/node_modules/unctx/dist/index.mjs';
import 'file://C:/Users/tzhovtyy/Desktop/tislogistic-frontend/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file://C:/Users/tzhovtyy/Desktop/tislogistic-frontend/node_modules/h3/dist/index.mjs';
import 'file://C:/Users/tzhovtyy/Desktop/tislogistic-frontend/node_modules/defu/dist/defu.mjs';
import './nitro-prerenderer.mjs';
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

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { $texts } = useNuxtApp();
    useHead({
      title: $texts.projects
    });
    useServerHead({
      meta: [
        { name: "description", content: $texts.projects + $texts.companyNameSeo }
      ]
    });
    const { newsApiBase } = /* @__PURE__ */ useRuntimeConfig();
    const url = newsApiBase + "projects";
    const { pending, data, refresh } = ([__temp, __restore] = withAsyncContext(() => useFetch(url, {
      key: "projects"
    }, "$olQ4jpDRvq")), __temp = await __temp, __restore(), __temp);
    watchEffect(() => {
      refresh();
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NewsMain = __nuxt_component_0;
      if (unref(pending)) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "pending-load" }, _attrs))}></div>`);
      } else {
        _push(`<div${ssrRenderAttrs(_attrs)}>`);
        _push(ssrRenderComponent(_component_NewsMain, {
          data: unref(data),
          pending: unref(pending)
        }, null, _parent));
        _push(`</div>`);
      }
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/projects/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-f773cb9c.mjs.map
