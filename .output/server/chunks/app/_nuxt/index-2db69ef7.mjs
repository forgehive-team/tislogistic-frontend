import { _ as __nuxt_component_0$1 } from './BreadCrumbs-c74601ed.mjs';
import { useSSRContext, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc, u as useNuxtApp, a as useHead } from '../server.mjs';
import { _ as __nuxt_component_1 } from './ServicesCards-0145abf8.mjs';
import { _ as __nuxt_component_2 } from './ConclusionCard-d5feb195.mjs';
import { u as useServerHead } from './internalLinks-11d3a882.mjs';
import { s as servicesList } from './servicesList-a71f476f.mjs';
import './nuxt-link-0d39ff03.mjs';
import 'ufo';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'vue-router';
import 'h3';
import 'defu';
import '../../nitro/node-server.mjs';
import 'node-fetch-native/polyfill';
import 'node:http';
import 'node:https';
import 'destr';
import 'unenv/runtime/fetch/index';
import 'scule';
import 'ohash';
import 'unstorage';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';
import 'ipx';
import '../../handlers/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import './nuxt-img-6da1c54a.mjs';
import './composables-5d51eb10.mjs';
import './state-06d22502.mjs';

const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_SharedBreadCrumbs = __nuxt_component_0$1;
  _push(`<header${ssrRenderAttrs(mergeProps({ class: "header" }, _attrs))} data-v-d77e532b>`);
  _push(ssrRenderComponent(_component_SharedBreadCrumbs, null, null, _parent));
  _push(`<h1 class="header__title" data-v-d77e532b>${ssrInterpolate(_ctx.$texts.transportCompany)} <span data-v-d77e532b>${ssrInterpolate(_ctx.$texts.companyName)}</span> ${ssrInterpolate(_ctx.$texts.servicesTitle)}</h1><p class="header__note" data-v-d77e532b>${ssrInterpolate(_ctx.$texts.servicesNote)}</p></header>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Services/MainHeader.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-d77e532b"]]);
const _sfc_main = {
  setup() {
    const { $texts } = useNuxtApp();
    useHead({
      title: $texts.seoServicesTitle
    });
    useServerHead({
      meta: [
        { property: "og:title", content: $texts.seoServicesTitle },
        { name: "description", content: $texts.seoServicesDescription },
        { property: "og:description", content: $texts.seoServicesDescription },
        { name: "keywords", content: $texts.seoKeywordsBase + $texts.seoServicesKeywordsBase + $texts.seoServicesKeywords }
      ]
    });
  },
  computed: {
    mainServices() {
      return servicesList.slice(0, 5);
    },
    additionalServices() {
      return servicesList.slice(5);
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ServicesMainHeader = __nuxt_component_0;
  const _component_SharedServicesCards = __nuxt_component_1;
  const _component_SharedConclusionCard = __nuxt_component_2;
  _push(`<div${ssrRenderAttrs(_attrs)} data-v-4b32c46e><section class="services-header" data-v-4b32c46e><div class="bg gradient-bg white-theme-only services-bg" data-v-4b32c46e></div>`);
  _push(ssrRenderComponent(_component_ServicesMainHeader, null, null, _parent));
  _push(`</section><section class="services-main" data-v-4b32c46e><h2 class="services-list__title" data-v-4b32c46e>${ssrInterpolate(_ctx.$texts.mainServices)}</h2>`);
  _push(ssrRenderComponent(_component_SharedServicesCards, {
    class: "services-cards_services-page services-cards_main-services",
    "services-list": $options.mainServices
  }, null, _parent));
  _push(`</section><section class="services-extra" data-v-4b32c46e><h2 class="services-list__title" data-v-4b32c46e>${ssrInterpolate(_ctx.$texts.additionalServices)}</h2>`);
  _push(ssrRenderComponent(_component_SharedServicesCards, {
    class: "services-cards_services-page services-cards_additional-services",
    "services-list": $options.additionalServices
  }, null, _parent));
  _push(`</section><section class="services-card" data-v-4b32c46e>`);
  _push(ssrRenderComponent(_component_SharedConclusionCard, {
    "seo-alt": _ctx.$texts.seoConclusionServices
  }, null, _parent));
  _push(`</section></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/services/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-4b32c46e"]]);

export { index as default };
//# sourceMappingURL=index-2db69ef7.mjs.map
