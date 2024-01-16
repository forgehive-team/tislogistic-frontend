import { _ as __nuxt_component_0 } from './BreadCrumbs-7a67b271.mjs';
import { _ as __nuxt_component_1 } from './ServicesLinks-af51bc72.mjs';
import { _ as __nuxt_component_2 } from './GoUp-9c5eead8.mjs';
import { _ as _export_sfc, u as useNuxtApp, a as useHead } from './server.mjs';
import { u as useServerHead } from './internalLinks-dc4e1b80.mjs';
import { useSSRContext } from 'file://C:/Users/tzhovtyy/Desktop/tislogistic-frontend/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate } from 'file://C:/Users/tzhovtyy/Desktop/tislogistic-frontend/node_modules/vue/server-renderer/index.mjs';
import './nuxt-link-0d39ff03.mjs';
import 'file://C:/Users/tzhovtyy/Desktop/tislogistic-frontend/node_modules/ufo/dist/index.mjs';
import './servicesList-d8a4a1b3.mjs';
import './renderer.mjs';
import 'file://C:/Users/tzhovtyy/Desktop/tislogistic-frontend/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file://C:/Users/tzhovtyy/Desktop/tislogistic-frontend/node_modules/h3/dist/index.mjs';
import 'file://C:/Users/tzhovtyy/Desktop/tislogistic-frontend/node_modules/destr/dist/index.mjs';
import 'file://C:/Users/tzhovtyy/Desktop/tislogistic-frontend/node_modules/ohash/dist/index.mjs';
import './nitro-prerenderer.mjs';
import 'file://C:/Users/tzhovtyy/Desktop/tislogistic-frontend/node_modules/node-fetch-native/dist/polyfill.mjs';
import 'file://C:/Users/tzhovtyy/Desktop/tislogistic-frontend/node_modules/ofetch/dist/node.mjs';
import 'file://C:/Users/tzhovtyy/Desktop/tislogistic-frontend/node_modules/unenv/runtime/fetch/index.mjs';
import 'file://C:/Users/tzhovtyy/Desktop/tislogistic-frontend/node_modules/hookable/dist/index.mjs';
import 'file://C:/Users/tzhovtyy/Desktop/tislogistic-frontend/node_modules/scule/dist/index.mjs';
import 'file://C:/Users/tzhovtyy/Desktop/tislogistic-frontend/node_modules/defu/dist/defu.mjs';
import 'file://C:/Users/tzhovtyy/Desktop/tislogistic-frontend/node_modules/unstorage/dist/index.mjs';
import 'file://C:/Users/tzhovtyy/Desktop/tislogistic-frontend/node_modules/unstorage/drivers/fs.mjs';
import 'file://C:/Users/tzhovtyy/Desktop/tislogistic-frontend/node_modules/radix3/dist/index.mjs';
import 'node:url';
import 'file://C:/Users/tzhovtyy/Desktop/tislogistic-frontend/node_modules/ipx/dist/index.mjs';
import 'file://C:/Users/tzhovtyy/Desktop/tislogistic-frontend/node_modules/unctx/dist/index.mjs';
import 'file://C:/Users/tzhovtyy/Desktop/tislogistic-frontend/node_modules/vue-router/dist/vue-router.node.mjs';

const _sfc_main = {
  __name: "traffic",
  __ssrInlineRender: true,
  setup(__props) {
    const { $texts } = useNuxtApp();
    useHead({
      title: "\u041F\u043E\u0437\u0438\u0446\u0438\u044F \u0438 \u0434\u0432\u0438\u0436\u0435\u043D\u0438\u0435 \u0441\u0443\u0434\u043E\u0432"
    });
    useServerHead({
      meta: [
        { name: "description", content: $texts.seoHomeDescription },
        { property: "og:description", content: $texts.seoHomeDescription },
        { name: "keywords", content: $texts.seoKeywordsBase }
      ]
    });
    const legendItems = [
      {
        title: "\u041F\u0430\u0441\u0441\u0430\u0436\u0438\u0440\u0441\u043A\u0438\u0435 \u0441\u0443\u0434\u0430",
        color: "#3498db"
      },
      {
        title: "\u0413\u0440\u0443\u0437\u043E\u0432\u044B\u0435 \u0441\u0443\u0434\u0430",
        color: "#27ae60"
      },
      {
        title: "\u0422\u0430\u043D\u043A\u0435\u0440\u044B",
        color: "#d35400"
      },
      {
        title: "\u041D\u0430 \u044F\u043A\u043E\u0440\u044C",
        color: "yellow"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SharedBreadCrumbs = __nuxt_component_0;
      const _component_SharedServicesLinks = __nuxt_component_1;
      const _component_SharedGoUp = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-bf10ed65><section data-v-bf10ed65><div class="bg white-theme-only gradient-bg" data-v-bf10ed65></div><div data-v-bf10ed65>`);
      _push(ssrRenderComponent(_component_SharedBreadCrumbs, { class: "breadcrumbs" }, null, _parent));
      _push(`<div class="top" data-v-bf10ed65><h1 data-v-bf10ed65>\u041F\u043E\u0437\u0438\u0446\u0438\u044F \u0438 \u0434\u0432\u0438\u0436\u0435\u043D\u0438\u0435 \u0441\u0443\u0434\u043E\u0432</h1><p data-v-bf10ed65> \u041A\u043E\u043C\u043F\u043B\u0435\u043A\u0441\u043D\u043E\u0435 \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u0443\u0441\u043B\u0443\u0433, \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u043A\u0430 \u043B\u044E\u0431\u044B\u0445 \u0433\u0440\u0443\u0437\u043E\u0432 \u043D\u0430 \u0434\u0430\u043B\u044C\u043D\u0438\u0435 \u0440\u0430\u0441\u0441\u0442\u043E\u044F\u043D\u0438\u044F, \u0433\u0430\u0440\u0430\u043D\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u043E\u0435 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u043E \u0443\u0441\u043B\u0443\u0433\u0438 \u0438 \u0442\u0449\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0439 \u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044C \u043D\u0430 \u043A\u0430\u0436\u0434\u043E\u043C \u044D\u0442\u0430\u043F\u0435 \u0441\u043B\u0435\u0434\u043E\u0432\u0430\u043D\u0438\u044F \u043A\u043E\u043D\u0442\u0435\u0439\u043D\u0435\u0440\u0430, \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u044B \u0438\u043B\u0438 \u0432\u0430\u0433\u043E\u043D\u0430 \u2014 \u044D\u0442\u0438 \u043F\u0440\u0435\u0438\u043C\u0443\u0449\u0435\u0441\u0442\u0432\u0430 \u0437\u0430\u0441\u0442\u0430\u0432\u043B\u044F\u044E\u0442 \u043D\u0430\u0448\u0438\u0445 \u041A\u043B\u0438\u0435\u043D\u0442\u043E\u0432 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C\u0441\u044F \u0438\u043C\u0435\u043D\u043D\u043E \u043D\u0430\u0448\u0438\u043C\u0438 \u0443\u0441\u043B\u0443\u0433\u0430\u043C\u0438. </p></div><div class="main" data-v-bf10ed65><div id="gist" data-v-bf10ed65></div><div id="gist1" data-v-bf10ed65></div><div class="legend" data-v-bf10ed65><!--[-->`);
      ssrRenderList(legendItems, (item, i) => {
        _push(`<span data-v-bf10ed65><svg width="11" height="22" viewBox="0 0 11 22"${ssrRenderAttr("fill", item.color)} xmlns="http://www.w3.org/2000/svg" data-v-bf10ed65><path d="M0.5 10.2744C0.5 7.79285 1.30262 5.35711 2.82346 3.22331L4.79963 0.450668C5.22791 -0.150222 6.27209 -0.150223 6.70037 0.450668L8.67654 3.22331C10.1974 5.35711 11 7.79285 11 10.2744V21.0775C11 21.8604 9.90162 22.286 9.1828 21.7818L6.46194 19.873C6.05053 19.5844 5.44947 19.5844 5.03806 19.873L2.3172 21.7818C1.59838 22.286 0.5 21.8604 0.5 21.0775L0.5 10.2744Z" data-v-bf10ed65></path></svg> ${ssrInterpolate(item.title)}</span>`);
      });
      _push(`<!--]--></div></div><div class="bottom" data-v-bf10ed65>`);
      _push(ssrRenderComponent(_component_SharedServicesLinks, { title: "\u0423\u0441\u043B\u0443\u0433\u0438" }, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_SharedGoUp, null, null, _parent));
      _push(`</div></section></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/traffic.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const traffic = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-bf10ed65"]]);

export { traffic as default };
//# sourceMappingURL=traffic-b0796801.mjs.map
