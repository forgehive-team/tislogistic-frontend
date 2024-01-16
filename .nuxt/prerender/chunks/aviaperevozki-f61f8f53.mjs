import { _ as __nuxt_component_0$1 } from './ServicesHeader-89631274.mjs';
import { _ as _export_sfc, u as useNuxtApp, a as useHead } from './server.mjs';
import { useSSRContext, mergeProps, unref } from 'file://C:/Users/tzhovtyy/Desktop/tislogistic-frontend/node_modules/vue/index.mjs';
import { u as useImage } from './composables-5d51eb10.mjs';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderAttr, ssrRenderComponent, ssrInterpolate, ssrRenderList } from 'file://C:/Users/tzhovtyy/Desktop/tislogistic-frontend/node_modules/vue/server-renderer/index.mjs';
import { _ as __nuxt_component_0$2 } from './nuxt-img-6da1c54a.mjs';
import { _ as __nuxt_component_0$3 } from './CardsItem-11652c8d.mjs';
import { _ as __nuxt_component_4 } from './ServicesFiller-e0abeacd.mjs';
import { u as useServerHead } from './internalLinks-dc4e1b80.mjs';
import './BreadCrumbs-7a67b271.mjs';
import './nuxt-link-0d39ff03.mjs';
import 'file://C:/Users/tzhovtyy/Desktop/tislogistic-frontend/node_modules/ufo/dist/index.mjs';
import './ExpandArrow-c1187625.mjs';
import './state-06d22502.mjs';
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
import './KeyIndicators-1e584f96.mjs';
import './DeliveryCalculator-288af09b.mjs';
import './renderer.mjs';
import 'file://C:/Users/tzhovtyy/Desktop/tislogistic-frontend/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file://C:/Users/tzhovtyy/Desktop/tislogistic-frontend/node_modules/maska/dist/maska.js';
import './expand-29e2e84d.mjs';
import './validate-e4070f14.mjs';
import './CompanyLogo-fae8444b.mjs';
import './CompanyPresentation-9c0cc7e3.mjs';
import './ArrowRight-4312bfbb.mjs';
import './ServicesLinks-af51bc72.mjs';
import './servicesList-d8a4a1b3.mjs';

const _sfc_main$3 = {
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  computed: {
    seoAlt() {
      const { $texts } = useNuxtApp();
      return this.data.title + " o\u0442" + $texts.companyNameSeo;
    },
    bg() {
      const $img = useImage();
      const imgUrl = $img(this.data.img, {
        format: "webp",
        quality: 40,
        alt: this.seoAlt
      });
      return {
        backgroundImage: `url('${imgUrl}')`
      };
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "card" }, _attrs))} data-v-124b9c4a><div class="card__img-container" style="${ssrRenderStyle($options.bg)}"${ssrRenderAttr("title", $options.seoAlt)}${ssrRenderAttr("aria-label", $options.seoAlt)} data-v-124b9c4a></div><div class="card__info" data-v-124b9c4a><h3 data-v-124b9c4a>${ssrInterpolate($props.data.title)}</h3><p data-v-124b9c4a>${ssrInterpolate($props.data.text)}</p>`);
  if ($props.data.legal) {
    _push(`<p class="legal" data-v-124b9c4a>${ssrInterpolate($props.data.legal)}</p>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Aviaperevozki/AirTypesCard.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-124b9c4a"]]);
const imgPath = "images/air_freight/";
const airFreightTypes = [
  {
    title: "\u041C\u0435\u0436\u0434\u0443\u043D\u0430\u0440\u043E\u0434\u043D\u044B\u0435 \u0430\u0432\u0438\u0430\u043F\u0435\u0440\u0435\u0432\u043E\u0437\u043A\u0438",
    text: "\u0414\u043E\u0441\u0442\u0430\u0432\u0438\u043C \u0412\u0430\u0448 \u0433\u0440\u0443\u0437 \u0438\u0437 \u043B\u044E\u0431\u043E\u0439 \u0442\u043E\u0447\u043A\u0438 \u043C\u0438\u0440\u0430*. \u0428\u0438\u0440\u043E\u043A\u0430\u044F \u0430\u0433\u0435\u043D\u0442\u0441\u043A\u0430\u044F \u0441\u0435\u0442\u044C, \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u0438\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u0430 \u0432\xA0\u0440\u0430\u0437\u043D\u044B\u0445 \u0441\u0442\u0440\u0430\u043D\u0430\u0445 \u0438\xA0\u043F\u0440\u044F\u043C\u044B\u0435 \u0441\u043E\u0433\u043B\u0430\u0448\u0435\u043D\u0438\u044F \u0441\xA0\u043A\u0440\u0443\u043F\u043D\u044B\u043C\u0438 \u0430\u0432\u0438\u0430\u043F\u0435\u0440\u0435\u0432\u043E\u0437\u0447\u0438\u043A\u0430\u043C\u0438 \u043F\u043E\u0437\u0432\u043E\u043B\u044F\u044E\u0442 \u043D\u0430\u043C\xA0\u043F\u0440\u0435\u0434\u043B\u0430\u0433\u0430\u0442\u044C \u043A\u043B\u0438\u0435\u043D\u0442\u0430\u043C \u043E\u043F\u0442\u0438\u043C\u0430\u043B\u044C\u043D\u044B\u0435 \u0442\u0430\u0440\u0438\u0444\u044B \u043D\u0430\xA0\u0430\u0432\u0438\u0430\u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0443",
    legal: "*\u0438\u043C\u0435\u044E\u0442\u0441\u044F \u043E\u0433\u0440\u0430\u043D\u0438\u0447\u0435\u043D\u0438\u044F, \u0437\u0430 \u0431\u043E\u043B\u0435\u0435 \u043F\u043E\u0434\u0440\u043E\u0431\u043D\u043E\u0439 \u043A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0446\u0438\u0435\u0439 \u043E\u0431\u0440\u0430\u0449\u0430\u0439\u0442\u0435\u0441\u044C \u043D\u0430\u043F\u0440\u044F\u043C\u0443\u044E \u043A \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440\u0443 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438.",
    img: imgPath + "international.jpg",
    seoAlt: ""
  },
  {
    title: "\u0410\u0432\u0438\u0430\u043F\u0435\u0440\u0435\u0432\u043E\u0437\u043A\u0438 \u043F\u043E \u0420\u043E\u0441\u0441\u0438\u0438",
    text: "\u041D\u0430\u0448\u0430 \u0432\u043D\u0443\u0442\u0440\u0438\u0440\u043E\u0441\u0441\u0438\u0439\u0441\u043A\u0430\u044F \u0441\u0435\u0442\u044C \u043E\u0445\u0432\u0430\u0442\u044B\u0432\u0430\u0435\u0442 \u041C\u043E\u0441\u043A\u0432\u0443, \u0421\u0430\u043D\u043A\u0442-\u041F\u0435\u0442\u0435\u0440\u0431\u0443\u0440\u0433, \u041D\u043E\u0432\u043E\u0441\u0438\u0431\u0438\u0440\u0441\u043A, \u0425\u0430\u0431\u0430\u0440\u043E\u0432\u0441\u043A, \u0412\u043B\u0430\u0434\u0438\u0432\u043E\u0441\u0442\u043E\u043A \u0438\xA0\u0434\u0440\u0443\u0433\u0438\u0435 \u043A\u0440\u0443\u043F\u043D\u044B\u0435 \u0433\u043E\u0440\u043E\u0434\u0430. \u041E\u0440\u0433\u0430\u043D\u0438\u0437\u0443\u0435\u043C \u0433\u0440\u0443\u0437\u043E\u0432\u0443\u044E \u0430\u0432\u0438\u0430\u043F\u0435\u0440\u0435\u0432\u043E\u0437\u043A\u0443 \u043B\u044E\u0431\u044B\u0445 \u043E\u0431\u044A\u0435\u043A\u0442\u043E\u0432: \u043E\u043F\u0430\u0441\u043D\u044B\u0445, \u0440\u0435\u0436\u0438\u043C\u043D\u044B\u0445, \u0441\u043A\u043E\u0440\u043E\u043F\u043E\u0440\u0442\u044F\u0449\u0438\u0445\u0441\u044F, \u043D\u0435\u0433\u0430\u0431\u0430\u0440\u0438\u0442\u043D\u044B\u0445\xA0\u2014 \u0430\xA0\u0412\u044B\xA0\u0441\u043C\u043E\u0436\u0435\u0442\u0435 \u0443\u043F\u0440\u0430\u0432\u043B\u044F\u0442\u044C \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u043E\u043C, \u0441\u043B\u043E\u0432\u043D\u043E \u043A\u043E\u043C\u0430\u043D\u0434\u0438\u0440 \u0441\u0430\u043C\u043E\u043B\u0451\u0442\u0430",
    img: imgPath + "domestic.jpg",
    seoAlt: ""
  },
  {
    title: "\u0427\u0430\u0440\u0442\u0435\u0440\u043D\u044B\u0435 \u0430\u0432\u0438\u0430\u043F\u0435\u0440\u0435\u0432\u043E\u0437\u043A\u0438",
    text: "\u041E\u0440\u0433\u0430\u043D\u0438\u0437\u0443\u0435\u043C \u0438\u043D\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043B\u044C\u043D\u044B\u0435 \u0447\u0430\u0440\u0442\u0435\u0440\u043D\u044B\u0435 \u0430\u0432\u0438\u0430\u043F\u0435\u0440\u0435\u0432\u043E\u0437\u043A\u0438 \u0434\u043B\u044F\xA0\u043F\u0440\u043E\u0435\u043A\u0442\u043D\u044B\u0445 \u0433\u0440\u0443\u0437\u043E\u0432. \u041F\u0440\u0438\xA0\u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E\u0441\u0442\u0438\xA0\u2014 \u0430\u0440\u0435\u043D\u0434\u0443\u0435\u043C \u0446\u0435\u043B\u044B\u0439 \u0441\u0430\u043C\u043E\u043B\u0451\u0442, \u0435\u0441\u043B\u0438\xA0\u043E\u0431\u044A\u0451\u043C \u043F\u043E\u0437\u0432\u043E\u043B\u0438\u0442 \u0437\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u044C \u0433\u0440\u0443\u0437\u043E\u0432\u043E\u0439 \u043E\u0442\u0441\u0435\u043A \u0446\u0435\u043B\u0438\u043A\u043E\u043C",
    legal: "",
    img: imgPath + "charter.jpg",
    seoAlt: ""
  }
];
const airFreightAdvantages = [
  "\u041B\u0435\u0433\u043A\u043E \u0434\u043E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0434\u0430\u0436\u0435 \u0442\u0443\u0434\u0430, \u0433\u0434\u0435 \u043D\u0435\u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E \u0434\u043E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u043D\u0430\u0437\u0435\u043C\u043D\u044B\u043C \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442\u043E\u043C",
  "\u0411\u043E\u043B\u044C\u0448\u0430\u044F \u0432\u043C\u0435\u0441\u0442\u0438\u043C\u043E\u0441\u0442\u044C \u0433\u0440\u0443\u0437\u043E\u0432\u044B\u0445 \u043E\u0442\u0441\u0435\u043A\u043E\u0432 \u0430\u0432\u0438\u0430\u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442\u0430",
  "\u042D\u0444\u0444\u0435\u043A\u0442\u0438\u0432\u043D\u043E \u0432\xA0\u043B\u044E\u0431\u043E\u0439 \u0441\u0435\u0437\u043E\u043D: \u0441\u0430\u043C\u043E\u043B\u0451\u0442\u044B \u043B\u0435\u0442\u0430\u044E\u0442 \u043E\u0434\u0438\u043D\u0430\u043A\u043E\u0432\u043E \u0431\u044B\u0441\u0442\u0440\u043E \u0438\xA0\u0437\u0438\u043C\u043E\u0439, \u0438\xA0\u043B\u0435\u0442\u043E\u043C, \u0438\xA0\u0432\xA0\u043C\u0435\u0436\u0441\u0435\u0437\u043E\u043D\u044C\u0435",
  "\u041D\u0438\u043A\u0430\u043A\u0438\u0445 \u043F\u0440\u043E\u0431\u043B\u0435\u043C \u043D\u0430\u0437\u0435\u043C\u043D\u043E\u0439 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u043A\u0438: \u043D\u0438\xA0\u043F\u0440\u043E\u0431\u043E\u043A, \u043D\u0438\xA0\u0440\u0435\u043C\u043E\u043D\u0442\u0430 \u0434\u043E\u0440\u043E\u0433",
  "\u041D\u0435 \u043D\u0443\u0436\u043D\u043E \u043F\u0435\u0440\u0435\u0436\u0438\u0432\u0430\u0442\u044C \u0437\u0430 \u0441\u043A\u043E\u0440\u043E\u043F\u043E\u0440\u0442\u044F\u0449\u0438\u0435\u0441\u044F \u0433\u0440\u0443\u0437\u044B",
  "\u0411\u044B\u0441\u0442\u0440\u043E, \u043D\u0430\u0434\u0435\u0436\u043D\u043E, \n\u0431\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E"
];
const _sfc_main$2 = {
  __name: "AirTypes",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AviaperevozkiAirTypesCard = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "types" }, _attrs))} data-v-f982fcc7><h2 data-v-f982fcc7>${ssrInterpolate(_ctx.$texts.airFreightTypes)}</h2><!--[-->`);
      ssrRenderList(unref(airFreightTypes), (data, i) => {
        _push(ssrRenderComponent(_component_AviaperevozkiAirTypesCard, {
          key: i,
          data
        }, null, _parent));
      });
      _push(`<!--]--></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Aviaperevozki/AirTypes.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-f982fcc7"]]);
const _sfc_main$1 = {
  __name: "AirAdvantages",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_img = __nuxt_component_0$2;
      const _component_HomeCardsItem = __nuxt_component_0$3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "advantages" }, _attrs))} data-v-7a3c7912><h2 class="title" data-v-7a3c7912>${ssrInterpolate(_ctx.$texts.airFreightAdvantages)}</h2><div class="advantages__container" data-v-7a3c7912><div class="main-card" data-v-7a3c7912><h2 class="in-card-title" data-v-7a3c7912>${ssrInterpolate(_ctx.$texts.airFreightAdvantages)}</h2><h3 data-v-7a3c7912>${ssrInterpolate(unref(airFreightAdvantages)[0])}</h3>`);
      _push(ssrRenderComponent(_component_nuxt_img, {
        src: "images/air_freight/plane.png",
        quality: "80",
        format: "webp",
        alt: _ctx.$texts.airFreightAdvantages + " c" + _ctx.$texts.companyNameSeo
      }, null, _parent));
      _push(`</div><!--[-->`);
      ssrRenderList(unref(airFreightAdvantages), (title, i) => {
        _push(ssrRenderComponent(_component_HomeCardsItem, {
          key: i,
          title,
          class: "_air"
        }, null, _parent));
      });
      _push(`<!--]--></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Aviaperevozki/AirAdvantages.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-7a3c7912"]]);
const _sfc_main = {
  setup() {
    const { $texts } = useNuxtApp();
    useHead({
      title: $texts.airFreight
    });
    useServerHead({
      meta: [
        { property: "og:title", content: $texts.airFreight },
        { name: "description", content: $texts.seoAirFreightDescription },
        { property: "og:description", content: $texts.seoAirFreightDescription },
        { name: "keywords", content: $texts.seoKeywordsBase + $texts.seoAirFreightKeywords + $texts.seoServicesKeywordsBase }
      ]
    });
  },
  computed: {
    seoAlt() {
      const { $texts } = useNuxtApp();
      return $texts.airFreight + $texts.companyNameSeo;
    },
    background() {
      const $img = useImage();
      const imgUrl = $img("images/air_freight_background.png", {
        format: "webp",
        preload: true,
        quality: "100",
        alt: this.seoAlt
      });
      return {
        backgroundImage: `url('${imgUrl}')`
      };
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_SharedServicesHeader = __nuxt_component_0$1;
  const _component_AviaperevozkiAirTypes = __nuxt_component_1;
  const _component_AviaperevozkiAirAdvantages = __nuxt_component_2;
  const _component_SharedServicesFiller = __nuxt_component_4;
  _push(`<main${ssrRenderAttrs(_attrs)} data-v-d0881a43><section data-v-d0881a43><div style="${ssrRenderStyle($options.background)}" class="bg air-freight-bg"${ssrRenderAttr("title", $options.seoAlt)}${ssrRenderAttr("aria-label", $options.seoAlt)} data-v-d0881a43></div>`);
  _push(ssrRenderComponent(_component_SharedServicesHeader, {
    title: _ctx.$texts.airFreight,
    subtitle: _ctx.$texts.airFreightNote,
    class: "_air"
  }, null, _parent));
  _push(`</section><section id="scroll-target" data-v-d0881a43>`);
  _push(ssrRenderComponent(_component_AviaperevozkiAirTypes, null, null, _parent));
  _push(`</section><section data-v-d0881a43>`);
  _push(ssrRenderComponent(_component_AviaperevozkiAirAdvantages, null, null, _parent));
  _push(`</section>`);
  _push(ssrRenderComponent(_component_SharedServicesFiller, null, null, _parent));
  _push(`</main>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/services/aviaperevozki.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const aviaperevozki = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-d0881a43"]]);

export { aviaperevozki as default };
//# sourceMappingURL=aviaperevozki-f61f8f53.mjs.map
