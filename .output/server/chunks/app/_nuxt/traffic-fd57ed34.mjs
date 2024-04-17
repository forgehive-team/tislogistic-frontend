import { _ as __nuxt_component_0 } from './BreadCrumbs-51af2094.mjs';
import { _ as __nuxt_component_1 } from './ServicesLinks-b725e6d3.mjs';
import { _ as __nuxt_component_2 } from './GoUp-6f51a1ea.mjs';
import { _ as _export_sfc, u as useNuxtApp, a as useHead } from '../server.mjs';
import { u as useServerHead } from './internalLinks-4b44e090.mjs';
import { useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import './nuxt-link-0d39ff03.mjs';
import 'ufo';
import './servicesList-30883593.mjs';
import '../../handlers/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'h3';
import 'destr';
import 'ohash';
import '../../nitro/node-server.mjs';
import 'node-fetch-native/polyfill';
import 'node:http';
import 'node:https';
import 'ofetch';
import 'unenv/runtime/fetch/index';
import 'hookable';
import 'scule';
import 'defu';
import 'unstorage';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';
import 'ipx';
import 'unctx';
import 'vue-router';

const _sfc_main = {
  __name: "traffic",
  __ssrInlineRender: true,
  setup(__props) {
    const { $texts } = useNuxtApp();
    useHead({
      title: "Vessels Traffic"
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
        title: "Passenger Ships",
        color: "#3498db"
      },
      {
        title: "Cargo Ships",
        color: "#27ae60"
      },
      {
        title: "Tankers",
        color: "#d35400"
      },
      {
        title: "Lie at anchor",
        color: "yellow"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SharedBreadCrumbs = __nuxt_component_0;
      const _component_SharedServicesLinks = __nuxt_component_1;
      const _component_SharedGoUp = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-243037ba><section data-v-243037ba><div class="bg white-theme-only gradient-bg" data-v-243037ba></div><div data-v-243037ba>`);
      _push(ssrRenderComponent(_component_SharedBreadCrumbs, { class: "breadcrumbs" }, null, _parent));
      _push(`<div class="top" data-v-243037ba><h1 data-v-243037ba>Position and movement of vessels</h1><p data-v-243037ba> Comprehensive service, transportation of any long-distance, quality-assured services and close monitoring at every stage of the journey container, platform or wagon - these advantages make our customers use our Services </p></div><div class="main" data-v-243037ba><div id="gist" data-v-243037ba></div><div id="gist1" data-v-243037ba></div><div class="legend" data-v-243037ba><!--[-->`);
      ssrRenderList(legendItems, (item, i) => {
        _push(`<span data-v-243037ba><svg width="11" height="22" viewBox="0 0 11 22"${ssrRenderAttr("fill", item.color)} xmlns="http://www.w3.org/2000/svg" data-v-243037ba><path d="M0.5 10.2744C0.5 7.79285 1.30262 5.35711 2.82346 3.22331L4.79963 0.450668C5.22791 -0.150222 6.27209 -0.150223 6.70037 0.450668L8.67654 3.22331C10.1974 5.35711 11 7.79285 11 10.2744V21.0775C11 21.8604 9.90162 22.286 9.1828 21.7818L6.46194 19.873C6.05053 19.5844 5.44947 19.5844 5.03806 19.873L2.3172 21.7818C1.59838 22.286 0.5 21.8604 0.5 21.0775L0.5 10.2744Z" data-v-243037ba></path></svg> ${ssrInterpolate(item.title)}</span>`);
      });
      _push(`<!--]--></div></div><div class="bottom" data-v-243037ba>`);
      _push(ssrRenderComponent(_component_SharedServicesLinks, { title: "Services" }, null, _parent));
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
const traffic = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-243037ba"]]);

export { traffic as default };
//# sourceMappingURL=traffic-fd57ed34.mjs.map
