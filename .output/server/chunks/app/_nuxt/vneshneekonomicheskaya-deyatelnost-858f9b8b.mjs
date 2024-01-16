import { _ as __nuxt_component_0$1 } from './ServicesHeader-c845d360.mjs';
import { _ as __nuxt_component_0$2 } from './nuxt-img-6da1c54a.mjs';
import { useSSRContext, unref, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { _ as _export_sfc, u as useNuxtApp, a as useHead } from '../server.mjs';
import { _ as __nuxt_component_1$2 } from './ServicesLinks-af51bc72.mjs';
import { u as useServerHead } from './internalLinks-dc4e1b80.mjs';
import { u as useImage } from './composables-5d51eb10.mjs';
import './BreadCrumbs-7a67b271.mjs';
import './nuxt-link-0d39ff03.mjs';
import 'ufo';
import './ExpandArrow-c1187625.mjs';
import './state-06d22502.mjs';
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
import './servicesList-d8a4a1b3.mjs';

const services = [
  "\u041A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0446\u0438\u044E \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u0432 \n\u043F\u043E\xA0\u0432\u043E\u043F\u0440\u043E\u0441\u0430\u043C \u043E\u0431\u0445\u043E\u0434\u0430 \n\u0441\u0430\u043D\u043A\u0446\u0438\u043E\u043D\u043D\u044B\u0445 \n\u043E\u0433\u0440\u0430\u043D\u0438\u0447\u0435\u043D\u0438\u0439",
  "\u0420\u0430\u0441\u0447\u0451\u0442 \u0442\u0430\u043C\u043E\u0436\u0435\u043D\u043D\u044B\u0445 \n\u043F\u043E\u0448\u043B\u0438\u043D \u0438\xA0\u043D\u0430\u043B\u043E\u0433\u043E\u0432, \n\u043F\u043E\u0434\u043B\u0435\u0436\u0430\u0449\u0438\u0445 \u0443\u043F\u043B\u0430\u0442\u0435 \n\u0432\xA0\u0442\u0430\u043C\u043E\u0436\u0435\u043D\u043D\u044B\u0445 \u043E\u0440\u0433\u0430\u043D\u0430\u0445",
  "\u041F\u043E\u043B\u043D\u0443\u044E \u043F\u0440\u0435\u0434\u0432\u0430\u0440\u0438\u0442\u0435\u043B\u044C\u043D\u0443\u044E \n\u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0443 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u043E\u0432 \n\u0434\u043B\u044F\xA0\u0442\u0430\u043C\u043E\u0436\u0435\u043D\u043D\u043E\u0433\u043E \n\u043E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u0438\u044F",
  "\u0421\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u0438\xA0\u043F\u043E\u0434\u0430\u0447\u0443 \n\u0442\u0430\u043C\u043E\u0436\u0435\u043D\u043D\u044B\u0445 \u0434\u0435\u043A\u043B\u0430\u0440\u0430\u0446\u0438\u0439 \n\u0438\xA0\u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044C \u043F\u0440\u043E\u0445\u043E\u0436\u0434\u0435\u043D\u0438\u044F \n\u0442\u0430\u043C\u043E\u0436\u0435\u043D\u043D\u043E\u0433\u043E \u043E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u0438\u044F",
  "\u041F\u043E\u0434\u0431\u043E\u0440 \u043A\u043E\u0434\u0430 \n\u0422\u041D \u0412\u042D\u0414",
  "\u0421\u043E\u043F\u0440\u043E\u0432\u043E\u0436\u0434\u0435\u043D\u0438\u0435 \u0442\u0430\u043C\u043E\u0436\u0435\u043D\u043D\u044B\u0445 \u043F\u0440\u043E\u0446\u0435\u0434\u0443\u0440 \u0438 \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u0438\u043D\u0442\u0435\u0440\u0435\u0441\u043E\u0432 \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u0432 \u0432 \u0442\u0430\u043C\u043E\u0436\u0435\u043D\u043D\u044B\u0445 \u043E\u0440\u0433\u0430\u043D\u0430\u0445",
  "\u041F\u043E\u043C\u043E\u0449\u044C \u0432 \u0441\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u0438\u0438 \n\u0432\u043D\u0435\u0448\u043D\u0435\u0442\u043E\u0440\u0433\u043E\u0432\u044B\u0445 \n\u043A\u043E\u043D\u0442\u0440\u0430\u043A\u0442\u0430\u0445",
  "\u0421\u043E\u043F\u0440\u043E\u0432\u043E\u0436\u0434\u0435\u043D\u0438\u0435 \u0441\u0443\u0434\u0435\u0431\u043D\u044B\u0445 \n\u0441\u043F\u043E\u0440\u043E\u0432 \u0441 \u0442\u0430\u043C\u043E\u0436\u0435\u043D\u043D\u044B\u043C\u0438 \n\u043E\u0440\u0433\u0430\u043D\u0430\u043C\u0438 \u043F\u043E \u0433\u0440\u0430\u0436\u0434\u0430\u043D\u0441\u043A\u0438\u043C \n\u0438 \u0430\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u0438\u0432\u043D\u044B\u043C \u0434\u0435\u043B\u0430\u043C",
  "\u041F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u0443\u0441\u043B\u0443\u0433\u0438 \n\xAB\u041C\u0435\u0436\u0434\u0443\u043D\u0430\u0440\u043E\u0434\u043D\u044B\u0439 \u0442\u043E\u0440\u0433\u043E\u0432\u044B\u0439 \u0434\u043E\u043C\xBB"
];
const _sfc_main$a = {
  __name: "ForeignServices",
  __ssrInlineRender: true,
  setup(__props) {
    const imgBasePath2 = "images/svg_numbers/";
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_img = __nuxt_component_0$2;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-b5a2e9a1><h2 data-v-b5a2e9a1>${ssrInterpolate(_ctx.$texts.foreignServicesTitle)}</h2><div class="grid" data-v-b5a2e9a1><!--[-->`);
      ssrRenderList(unref(services), (item, i) => {
        _push(`<div class="card" data-v-b5a2e9a1><span data-v-b5a2e9a1>${ssrInterpolate(item)}</span>`);
        _push(ssrRenderComponent(_component_nuxt_img, {
          src: imgBasePath2 + (i + 1) + ".svg",
          class: "number",
          alt: ""
        }, null, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--><div class="card card_container" data-v-b5a2e9a1>`);
      _push(ssrRenderComponent(_component_nuxt_img, {
        src: "images/container_blue.png",
        format: "webp",
        alt: ""
      }, null, _parent));
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ForeignActivity/ForeignServices.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const __nuxt_component_1$1 = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["__scopeId", "data-v-b5a2e9a1"]]);
const imgBasePath = "images/international_trade/";
const list = [
  {
    label: "\u041F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u0438 \u043A\u0440\u0435\u0434\u0438\u0442\u043E\u0432\u0430\u043D\u0438\u044F \u043D\u0430 \u0432\u044B\u0433\u043E\u0434\u043D\u044B\u0445 \u0443\u0441\u043B\u043E\u0432\u0438\u044F\u0445 \u0431\u0435\u0437 \u043B\u0438\u0448\u043D\u0438\u0445 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u043E\u0432 \u0434\u043B\u044F \u043F\u043E\u0441\u0442\u043E\u044F\u043D\u043D\u044B\u0445 \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u0432",
    img: imgBasePath + "credit.svg"
  },
  {
    label: "\u041F\u0440\u0438\u043E\u0431\u0440\u0435\u0442\u0435\u043D\u0438\u0435 \u0442\u043E\u0432\u0430\u0440\u0430 \u043D\u0430 \u043B\u044E\u0431\u043E\u043C \u043C\u0435\u0436\u0434\u0443\u043D\u0430\u0440\u043E\u0434\u043D\u043E\u043C \u0440\u044B\u043D\u043A\u0435, \u0432\u043A\u043B\u044E\u0447\u0430\u044F \u043F\u0430\u0440\u0430\u043B\u043B\u0435\u043B\u044C\u043D\u044B\u0439 \u0438\u043C\u043F\u043E\u0440\u0442*",
    img: imgBasePath + "any_market.svg"
  },
  {
    label: "\u041F\u043E\u043B\u043D\u0443\u044E \u0442\u0430\u043C\u043E\u0436\u0435\u043D\u043D\u0443\u044E \u043E\u0447\u0438\u0441\u0442\u043A\u0443, \u043A\u0430\u043A \u0432 \u0441\u0442\u0440\u0430\u043D\u0435 \u043E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u0435\u043B\u044F, \u0442\u0430\u043A \u0438 \u0432 \u0441\u0442\u0440\u0430\u043D\u0435 \u043F\u043E\u043B\u0443\u0447\u0430\u0442\u0435\u043B\u044F\xA0",
    img: imgBasePath + "custom_clearance.svg"
  },
  {
    label: "\u041E\u0431\u0445\u043E\u0434 \n\u043C\u0435\u0436\u0434\u0443\u043D\u0430\u0440\u043E\u0434\u043D\u044B\u0445 \n\u0441\u0430\u043D\u043A\u0446\u0438\u0439**",
    img: imgBasePath + "sanctions.svg"
  }
];
const _sfc_main$9 = {
  __name: "InternationalTrade",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_img = __nuxt_component_0$2;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-3b2c15ad><h2 data-v-3b2c15ad>${ssrInterpolate(_ctx.$texts.internationalTradeTitle)}</h2><div class="grid" data-v-3b2c15ad><!--[-->`);
      ssrRenderList(unref(list), (item, i) => {
        _push(`<div class="item" data-v-3b2c15ad>`);
        _push(ssrRenderComponent(_component_nuxt_img, {
          src: item.img,
          alt: "",
          class: "icon-gray"
        }, null, _parent));
        _push(`<p data-v-3b2c15ad>${ssrInterpolate(item.label)}</p></div>`);
      });
      _push(`<!--]--></div><p class="footnote" data-v-3b2c15ad>${ssrInterpolate(_ctx.$texts.parallelImportDef)}</p><p class="footnote footnote_second" data-v-3b2c15ad>${ssrInterpolate(_ctx.$texts.from500Kilos)}</p></div>`);
    };
  }
};
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ForeignActivity/InternationalTrade.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const __nuxt_component_2$1 = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["__scopeId", "data-v-3b2c15ad"]]);
const _sfc_main$8 = {};
function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "112",
    height: "112",
    viewBox: "0 0 112 112",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path d="M94.8888 76.5557C94.8888 84.5332 88.4218 91.0002 80.4444 91.0002C72.467 91.0002 66 84.5332 66 76.5557C66 68.5783 72.467 62.1113 80.4444 62.1113C88.4218 62.1113 94.8888 68.5783 94.8888 76.5557ZM67.2393 76.5557C67.2393 83.8488 73.1514 89.7609 80.4444 89.7609C87.7374 89.7609 93.6496 83.8488 93.6496 76.5557C93.6496 69.2627 87.7374 63.3506 80.4444 63.3506C73.1514 63.3506 67.2393 69.2627 67.2393 76.5557Z" fill="currentColor"></path><path d="M17.1113 34.9042V75.6371C17.1113 76.0392 17.3521 76.4022 17.7226 76.5585L49.3185 89.8888M17.1113 34.9042L48.9182 21.1728C49.1735 21.0626 49.4631 21.0637 49.7176 21.1758L59.2039 25.3538M17.1113 34.9042L27.9534 39.3282M49.3185 89.8888V48.8083M49.3185 89.8888L67.176 81.9887M49.3185 48.8083L80.888 34.9042M49.3185 48.8083L39.4332 44.3843M80.888 34.9042L70.0459 30.129M80.888 34.9042V61.7644M27.9534 39.3282L59.2039 25.3538M27.9534 39.3282V57.3772C27.9534 58.1741 28.8398 58.6508 29.5046 58.2116L32.8519 56.0002C33.3154 55.694 33.9397 55.8243 34.2421 56.2903L37.5942 61.4577C38.1362 62.2932 39.4332 61.9094 39.4332 60.9135V44.3843M59.2039 25.3538L70.0459 30.129M70.0459 30.129L39.4332 44.3843M54.1018 78.8286L64.6249 74.0886M54.1018 75.0366L63.6683 70.9285M71.9592 74.4046L76.7546 81.026C77.1186 81.5287 77.8479 81.5818 78.2809 81.1372L88.2223 70.9285" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"></path><rect x="0.5" y="0.5" width="111" height="111" rx="15.5" stroke="#848484"></rect></svg>`);
}
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Icons/CooperationScheme/CargoBox.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["ssrRender", _sfc_ssrRender$7]]);
const _sfc_main$7 = {};
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "40",
    height: "40",
    viewBox: "0 0 40 40",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path d="M29.1436 20H10.8578" stroke="#F1B83B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M22.2868 26.8561L29.1429 20L22.2868 13.1439" stroke="#F1B83B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><rect x="0.75" y="0.75" width="38.5" height="38.5" rx="7.25" stroke="#F1B83B" stroke-width="1.5"></rect></svg>`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Icons/CooperationScheme/StepArrow.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$6]]);
const _sfc_main$6 = {};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "113",
    height: "112",
    viewBox: "0 0 113 112",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path d="M46.4971 59V63.8C46.4971 63.9105 46.5866 64 46.6971 64H54.7971C54.9075 64 54.9971 63.9105 54.9971 63.8V59M46.4971 59H54.9971M46.4971 59H44.4971M54.9971 59H63.7971C63.9075 59 63.9971 59.0895 63.9971 59.2V81.8C63.9971 81.9105 63.9075 82 63.7971 82H37.6971C37.5866 82 37.4971 81.9105 37.4971 81.8V77M44.9971 70.5H56.4971M44.9971 74H56.4971M27.4971 78.5C29.6637 78.8333 34.6971 79 37.4971 77M37.4971 77V59.2C37.4971 59.0895 37.5866 59 37.6971 59H44.4971M44.4971 59C44.8304 57.8333 46.1971 55.1 48.9971 53.5C52.4971 51.5 51.9971 47.5 52.4971 46.5C52.9971 45.5 53.4971 44 59.4971 44C65.4971 44 65.9971 37 65.9971 36C65.9971 35 64.4971 26 72.4971 28M57.9971 23.5C55.9971 23.5 50.9971 27.5 52.9971 29.5C55.4971 32 58.9971 32 57.9971 35C56.9971 38 49.4971 33.5 46.9971 36M33.9971 43.5C32.1637 42.8333 27.2971 42.5 24.4971 44.5M37.9971 53C37.9971 53.5 38.0971 54.9 38.4971 56.5M68.4971 76.5C68.9971 76.3333 70.2971 75.8 71.4971 75M74.9971 72.5C75.3304 72.3333 76.2971 71.6 77.4971 70M78.9971 67C79.3304 66 79.9971 63.8 79.9971 63" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"></path><path d="M91.1377 41.6214L91.1332 41.6429L91.1302 41.6647C90.6515 45.1382 87.9702 48.9478 85.2991 51.9569C83.978 53.4452 82.6868 54.7078 81.7256 55.5985C81.2453 56.0435 80.8482 56.3949 80.572 56.6343C80.5671 56.6386 80.5623 56.6428 80.5575 56.6469C80.323 56.4438 79.9979 56.1571 79.6066 55.7986C78.7692 55.0314 77.6306 53.9375 76.4267 52.6319C74.0015 50.0018 71.3802 46.5853 70.354 43.2865L70.3471 43.2643L70.3386 43.2425C69.8917 42.1016 69.6471 40.8652 69.6471 39.5727C69.6471 33.8394 74.4814 29.15 80.4971 29.15C86.5128 29.15 91.3471 33.8394 91.3471 39.5727C91.3471 40.2745 91.275 40.9595 91.1377 41.6214Z" stroke="currentColor" stroke-width="1.3"></path><path d="M48.1377 31.6214L48.1332 31.6429L48.1302 31.6647C47.6515 35.1382 44.9702 38.9478 42.2991 41.9569C40.978 43.4452 39.6868 44.7078 38.7256 45.5985C38.2453 46.0435 37.8482 46.3949 37.572 46.6343C37.5671 46.6386 37.5623 46.6428 37.5575 46.6469C37.323 46.4438 36.9979 46.1571 36.6066 45.7986C35.7692 45.0314 34.6306 43.9375 33.4267 42.6319C31.0015 40.0018 28.3802 36.5853 27.354 33.2865L27.3471 33.2643L27.3386 33.2425C26.8917 32.1016 26.6471 30.8652 26.6471 29.5727C26.6471 23.8394 31.4814 19.15 37.4971 19.15C43.5128 19.15 48.3471 23.8394 48.3471 29.5727C48.3471 30.2745 48.275 30.9595 48.1377 31.6214Z" stroke="currentColor" stroke-width="1.3"></path><path d="M79.9971 36.15C81.8472 36.15 83.3471 37.6498 83.3471 39.5C83.3471 41.3502 81.8472 42.85 79.9971 42.85C78.1469 42.85 76.6471 41.3502 76.6471 39.5C76.6471 37.6498 78.1469 36.15 79.9971 36.15Z" stroke="currentColor" stroke-width="1.3"></path><path d="M36.9971 26.15C38.8472 26.15 40.3471 27.6498 40.3471 29.5C40.3471 31.3502 38.8472 32.85 36.9971 32.85C35.1469 32.85 33.6471 31.3502 33.6471 29.5C33.6471 27.6498 35.1469 26.15 36.9971 26.15Z" stroke="currentColor" stroke-width="1.3"></path><path d="M29.0018 37.5004C21.003 45.5004 21.0024 57.5004 21.0029 58.5004C21.0029 77.8303 36.6717 93.5004 56.0001 93.5004C75.3285 93.5004 90.9973 77.8303 90.9973 58.5004C90.9977 57.5004 90.9973 53.0004 88.4973 47.5004M47.4973 25.0004C51.4973 23.8004 54.8325 23.5004 56.0001 23.5004C59.6658 23.3337 68.6973 24.4004 75.4973 30.0004" stroke="currentColor" stroke-width="1.3"></path><rect x="1" y="0.5" width="111" height="111" rx="15.5" stroke="#848484"></rect></svg>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Icons/CooperationScheme/SecureChain.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$5]]);
const _sfc_main$5 = {};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "113",
    height: "112",
    viewBox: "0 0 113 112",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><g clip-path="url(#clip0_3202_5537)"><path d="M77.4664 83.6594V89.8057C77.4664 90.2907 77.0791 90.6838 76.6012 90.6838H21.663C21.1852 90.6838 20.7979 90.2907 20.7979 89.8057V21.757C20.7979 21.272 21.1852 20.8789 21.663 20.8789H76.6012C77.0791 20.8789 77.4664 21.272 77.4664 21.757V54.2448M77.4664 54.2448V59.9521M77.4664 54.2448H84.3877C85.6855 54.3911 88.281 55.5618 88.281 59.074C88.281 62.4601 88.281 69.3828 88.281 72.7605C88.281 72.9934 88.3722 73.2154 88.5344 73.38L95.6349 80.5862M84.3877 89.8057L74.1467 78.9791C74.054 78.8811 73.9846 78.7638 73.9473 78.6333C73.305 76.3856 72.7905 71.8052 75.0997 68.964C75.4166 68.5743 75.4392 67.9923 75.0873 67.6351L68.0939 60.5377C67.999 60.4413 67.9263 60.3239 67.8883 60.1932C67.1546 57.6709 68.1795 54.997 72.0132 55.5217C72.1831 55.5449 72.342 55.6255 72.4668 55.7446L79.6293 62.5862" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path><path d="M38.1016 20.8789V27.3773C38.1016 27.4351 38.1068 27.4925 38.1193 27.549C38.2871 28.3094 38.8322 29.7602 39.8319 30.0984C40.8559 30.4448 52.625 30.2502 58.6195 30.1045C58.7831 30.1004 58.9404 30.0526 59.0609 29.9403C59.5156 29.5164 60.1634 28.5447 60.1634 27.0252C60.1634 25.2692 60.1634 22.196 60.1634 20.8789" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path><path d="M70.9771 49.8527V27.9015C70.9771 27.4166 70.5898 27.0234 70.112 27.0234H60.5951M38.1007 27.0234H28.1513C27.6735 27.0234 27.2861 27.4166 27.2861 27.9015V83.2186C27.2861 83.7035 27.6735 84.0966 28.1513 84.0966H70.112M48.9153 71.3649H60.5951M48.9153 64.7795H63.6232M48.9153 59.0722H60.5951M48.9153 52.4869H63.6232M48.9153 45.9015H60.5951M48.9153 39.7551H64.0558M34.2075 43.7064L36.1681 45.6962C36.5149 46.0481 37.0802 46.0375 37.4139 45.6728L42.4266 40.1942M34.2075 56.4381L36.1681 58.4279C36.5149 58.7798 37.0802 58.7692 37.4139 58.4046L42.4266 52.9259M34.2075 68.7308L36.1681 70.7206C36.5149 71.0725 37.0802 71.0619 37.4139 70.6972L42.4266 65.2186" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path></g><rect x="1" y="0.5" width="111" height="111" rx="15.5" stroke="#848484"></rect><defs><clipPath id="clip0_3202_5537"><rect width="77" height="72" fill="white" transform="translate(19.5 20)"></rect></clipPath></defs></svg>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Icons/CooperationScheme/CustomClearance.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_3$1 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$4]]);
const _sfc_main$4 = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "112",
    height: "112",
    viewBox: "0 0 112 112",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><g clip-path="url(#clip0_3202_5544)"><path d="M42.1803 72.297V53.797C42.1803 53.3104 41.7811 52.916 41.2887 52.916H21.2285C20.7361 52.916 20.3369 53.3104 20.3369 53.797V72.297M42.1803 72.297H20.3369M42.1803 72.297V92.1184M42.1803 72.297H63.5779C64.0703 72.297 64.4694 72.6914 64.4694 73.1779V91.2374C64.4694 91.724 64.0703 92.1184 63.5779 92.1184H42.1803M20.3369 72.297V91.2374C20.3369 91.724 20.7361 92.1184 21.2285 92.1184H42.1803" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"></path><path d="M27.4697 52.916V59.5232C27.4697 60.0097 27.8689 60.4041 28.3613 60.4041H34.1565C34.6489 60.4041 35.048 60.0097 35.048 59.5232V52.916M27.4697 72.7374V78.9041C27.4697 79.3907 27.8689 79.7851 28.3613 79.7851H34.1565C34.6489 79.7851 35.048 79.3907 35.048 78.9041V72.7374M49.7589 72.7374V78.9041C49.7589 79.3907 50.158 79.7851 50.6505 79.7851H56.4456C56.938 79.7851 57.3372 79.3907 57.3372 78.9041V72.297" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"></path><path d="M36.8311 86.834H38.1684" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"></path><path d="M36.8311 67.4531H38.1684" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"></path><path d="M59.1201 86.834H60.4575" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"></path><path d="M68.482 91.6781H78.2893M78.2893 91.6781H88.0965M78.2893 91.6781V48.071M92.1085 91.6781H88.0965M88.0965 91.6781V32.6543M78.2893 48.071V44.1067C78.2893 43.6201 77.8901 43.2257 77.3977 43.2257H34.6025C34.1101 43.2257 33.7109 43.6201 33.7109 44.1067V47.19C33.7109 47.6766 34.1101 48.071 34.6025 48.071H78.2893Z" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"></path><path d="M78.2887 52.9165H46.6381M46.6381 57.7617H78.2887M78.2887 62.607H46.6381M23.9032 48.5117V32.6546M91.4301 28.525L56.2092 19.9319C56.0714 19.8983 55.9275 19.8977 55.7895 19.9301L21.0225 28.089C20.6206 28.1832 20.3369 28.5379 20.3369 28.9461V32.4072C20.3369 32.9804 20.882 33.4009 21.4447 33.2619L55.7847 24.7791C55.9257 24.7443 56.0734 24.744 56.2146 24.7785L91.0027 33.2659C91.5648 33.4031 92.108 32.9827 92.108 32.4107V29.3802C92.108 28.975 91.8283 28.622 91.4301 28.525Z" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"></path><path d="M59.5658 31.9941H53.3249C51.9708 31.9941 50.873 33.0788 50.873 34.4168C50.873 35.7547 51.9708 36.8394 53.3249 36.8394H59.5658C60.9199 36.8394 62.0176 35.7547 62.0176 34.4168C62.0176 33.0788 60.9199 31.9941 59.5658 31.9941Z" stroke="currentColor" stroke-width="1.2"></path></g><rect x="0.5" y="0.5" width="111" height="111" rx="15.5" stroke="#848484"></rect><defs><clipPath id="clip0_3202_5544"><rect width="74" height="74" fill="white" transform="translate(19 19)"></rect></clipPath></defs></svg>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Icons/CooperationScheme/CargoLoad.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$3 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "1249",
    height: "90",
    viewBox: "0 0 1249 90",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path d="M1 1V28.7419C1 35.3694 6.37258 40.7419 13 40.7419H627M1248 1V28.7419C1248 35.3694 1242.63 40.7419 1236 40.7419H627M627 40.7419V89" stroke="#848484" stroke-width="1.5" stroke-linecap="round"></path></svg>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Icons/CooperationScheme/SumLine.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$2 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "112",
    height: "112",
    viewBox: "0 0 112 112",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><rect width="112" height="112" rx="16" fill="#F1B83B"></rect><path d="M24.3336 71.5556C27.4817 66.7407 32.8891 55.7778 31.5558 46C31.5558 43.7778 32.3336 43 35.4447 42.1111C38.5558 41.2222 46.3706 39.5185 49.8891 38.7778M54.3336 52.6667L52.6669 47.1111M67.6669 53.2222L69.5749 52.7288M52.6669 47.1111L47.3994 29.2018C47.2413 28.6641 47.5558 28.1015 48.0967 27.9546L91.1442 16.2627C91.678 16.1177 92.2281 16.4336 92.3719 16.9678L99.6265 43.9136C99.7711 44.4507 99.4498 45.0025 98.9113 45.1418L69.5749 52.7288M52.6669 47.1111C52.6669 51.5653 49.6368 55.1985 48 57.2457C47.8843 57.3904 48.0126 57.5975 48.1943 57.5612L50.3832 57.1234C50.4232 57.1154 50.4598 57.0953 50.4881 57.0659L61.2618 45.8613L62.2582 44.825M37.1113 84.3333C38.0002 83.4444 42.2965 80.6296 44.3336 79.3333L52.6669 74.3333C54.8764 72.6762 56.3536 67.3577 57.0985 64.9305C57.1072 64.9023 57.1216 64.8776 57.1416 64.8558C57.5896 64.3651 58.0911 63.8145 58.6294 63.2222M62.2582 44.825L64.3336 42.6667C65.4447 41.5556 67.4346 40.7677 69.8891 43.2222C72.6669 46 71.0002 48.7778 69.8891 50.4444C69.7286 50.6852 69.9318 50.5517 69.3736 51.2115M62.2582 44.825C62.593 45.9345 64.4847 48.7651 69.3736 51.2115M69.3736 51.2115C67.2028 53.7774 61.9288 59.5921 58.6294 63.2222M58.6294 63.2222C58.6789 64.5185 58.8891 67.4444 59.3336 68.7778C59.7593 70.0549 62.2578 70.0748 63.6068 69.9114C63.7056 69.8995 63.778 69.815 63.778 69.7154V58.7052C63.778 58.485 64.1182 58.4101 64.2231 58.6037C65.2232 60.4494 67.21 62.8582 69.4065 62.6271C69.5037 62.6169 69.5749 62.5326 69.5749 62.4348V52.7288M31.6972 95.8586L39.7477 87.8081C39.8258 87.73 39.8258 87.6034 39.7477 87.5252L20.5861 68.3636C20.508 68.2855 20.3813 68.2855 20.3032 68.3636L12.2527 76.4141C12.1746 76.4922 12.1746 76.6189 12.2528 76.697L31.4144 95.8586C31.4925 95.9367 31.6191 95.9367 31.6972 95.8586Z" stroke="#1E1E1E" stroke-width="1.5" stroke-linecap="round"></path><path d="M50.9998 40.9996L95.4442 28.7773M49.8887 35.9996L93.7776 23.7773M86.1921 44.278L93.5853 42.1656C93.6915 42.1353 93.753 42.0246 93.7226 41.9184L91.6103 34.5252C91.5799 34.419 91.4692 34.3575 91.363 34.3878L83.9699 36.5002C83.8637 36.5305 83.8022 36.6412 83.8325 36.7474L85.9448 44.1406C85.9752 44.2468 86.0859 44.3083 86.1921 44.278Z" stroke="#1E1E1E" stroke-width="1.5" stroke-linecap="round"></path></svg>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Icons/CooperationScheme/ThePayment.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_6 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_IconsCooperationSchemeCargoBox = __nuxt_component_0;
  const _component_IconsCooperationSchemeStepArrow = __nuxt_component_1;
  const _component_IconsCooperationSchemeSecureChain = __nuxt_component_2;
  const _component_IconsCooperationSchemeCustomClearance = __nuxt_component_3$1;
  const _component_IconsCooperationSchemeCargoLoad = __nuxt_component_4;
  const _component_IconsCooperationSchemeSumLine = __nuxt_component_5;
  const _component_IconsCooperationSchemeThePayment = __nuxt_component_6;
  _push(`<div${ssrRenderAttrs(_attrs)} data-v-8f9ca320><h2 data-v-8f9ca320>${ssrInterpolate(_ctx.$texts.cooperationResultTitle)}</h2><div class="top-container" data-v-8f9ca320><div class="icon-wrapper" data-v-8f9ca320>`);
  _push(ssrRenderComponent(_component_IconsCooperationSchemeCargoBox, null, null, _parent));
  _push(`<p class="t1" data-v-8f9ca320>${ssrInterpolate(_ctx.$texts.buyGoods)}</p></div>`);
  _push(ssrRenderComponent(_component_IconsCooperationSchemeStepArrow, { class: "arrow" }, null, _parent));
  _push(`<div class="icon-wrapper" data-v-8f9ca320>`);
  _push(ssrRenderComponent(_component_IconsCooperationSchemeSecureChain, null, null, _parent));
  _push(`<p class="t2" data-v-8f9ca320>${ssrInterpolate(_ctx.$texts.buildChain)}</p></div>`);
  _push(ssrRenderComponent(_component_IconsCooperationSchemeStepArrow, { class: "arrow extend" }, null, _parent));
  _push(`<div class="icon-wrapper" data-v-8f9ca320>`);
  _push(ssrRenderComponent(_component_IconsCooperationSchemeCustomClearance, null, null, _parent));
  _push(`<p class="t3" data-v-8f9ca320>${ssrInterpolate(_ctx.$texts.doCustomClearance)}</p></div>`);
  _push(ssrRenderComponent(_component_IconsCooperationSchemeStepArrow, { class: "arrow" }, null, _parent));
  _push(`<div class="icon-wrapper" data-v-8f9ca320>`);
  _push(ssrRenderComponent(_component_IconsCooperationSchemeCargoLoad, null, null, _parent));
  _push(`<p class="t4" data-v-8f9ca320>${ssrInterpolate(_ctx.$texts.unloadCargo)}</p></div></div><div class="middle-container" data-v-8f9ca320>`);
  _push(ssrRenderComponent(_component_IconsCooperationSchemeSumLine, null, null, _parent));
  _push(`</div><div class="bottom-container" data-v-8f9ca320>`);
  _push(ssrRenderComponent(_component_IconsCooperationSchemeThePayment, null, null, _parent));
  _push(`<p data-v-8f9ca320>${ssrInterpolate(_ctx.$texts.paymentAfter)}</p></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ForeignActivity/CooperationResult.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-8f9ca320"]]);
const _sfc_main = {
  __name: "vneshneekonomicheskaya-deyatelnost",
  __ssrInlineRender: true,
  setup(__props) {
    const { $texts } = useNuxtApp();
    useHead({
      title: $texts.foreignActivity
    });
    useServerHead({
      meta: [
        { property: "og:title", content: $texts.foreignActivity },
        { name: "description", content: $texts.foreignActivityNote },
        { property: "og:description", content: $texts.foreignActivityNote },
        { name: "keywords", content: $texts.seoKeywordsBase + $texts.seoServicesKeywordsBase }
      ]
    });
    const $img = useImage();
    const imgUrl = $img("images/foreign_activity_background.png", {
      format: "webp",
      preload: true,
      quality: "100"
    });
    const bgImg = `background-image: url('${imgUrl}')`;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SharedServicesHeader = __nuxt_component_0$1;
      const _component_ForeignServices = __nuxt_component_1$1;
      const _component_ForeignActivityInternationalTrade = __nuxt_component_2$1;
      const _component_ForeignActivityCooperationResult = __nuxt_component_3;
      const _component_SharedServicesLinks = __nuxt_component_1$2;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-6b5f0f8c><section data-v-6b5f0f8c><div style="${ssrRenderStyle(bgImg)}" class="bg foreign-bg" data-v-6b5f0f8c></div>`);
      _push(ssrRenderComponent(_component_SharedServicesHeader, {
        title: unref($texts).foreignActivity,
        subtitle: unref($texts).foreignActivityNote,
        formless: true,
        class: "_foreign"
      }, null, _parent));
      _push(`</section><section id="scroll-target" data-v-6b5f0f8c>`);
      _push(ssrRenderComponent(_component_ForeignServices, null, null, _parent));
      _push(`</section><section data-v-6b5f0f8c>`);
      _push(ssrRenderComponent(_component_ForeignActivityInternationalTrade, null, null, _parent));
      _push(`</section><section data-v-6b5f0f8c>`);
      _push(ssrRenderComponent(_component_ForeignActivityCooperationResult, null, null, _parent));
      _push(`</section><section data-v-6b5f0f8c>`);
      _push(ssrRenderComponent(_component_SharedServicesLinks, null, null, _parent));
      _push(`</section></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/services/vneshneekonomicheskaya-deyatelnost.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const vneshneekonomicheskayaDeyatelnost = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-6b5f0f8c"]]);

export { vneshneekonomicheskayaDeyatelnost as default };
//# sourceMappingURL=vneshneekonomicheskaya-deyatelnost-858f9b8b.mjs.map