import { _ as __nuxt_component_0 } from './ServicesHeader-229e8eeb.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-img-6da1c54a.mjs';
import { useSSRContext, mergeProps, withCtx, createVNode, unref } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderAttr, ssrRenderComponent, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { _ as _export_sfc, u as useNuxtApp, a as useHead } from '../server.mjs';
import { _ as __nuxt_component_0$2 } from './CardsItem-9188544b.mjs';
import { _ as __nuxt_component_4$1 } from './ServicesFiller-3fb83980.mjs';
import { u as useServerHead } from './internalLinks-4b44e090.mjs';
import { b as useTheme } from './state-06d22502.mjs';
import { u as useImage } from './composables-5d51eb10.mjs';
import './BreadCrumbs-51af2094.mjs';
import './nuxt-link-0d39ff03.mjs';
import 'ufo';
import './ExpandArrow-c1187625.mjs';
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
import './KeyIndicators-c056b723.mjs';
import './DeliveryCalculator-22efe5b0.mjs';
import '../../handlers/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import './expand-29e2e84d.mjs';
import './validate-895dda7b.mjs';
import './CompanyLogo-fae8444b.mjs';
import './CompanyPresentation-c67bf544.mjs';
import './ArrowRight-4312bfbb.mjs';
import './ServicesLinks-b725e6d3.mjs';
import './servicesList-30883593.mjs';

const spectrumList = [
  "Large-tonnage container trucking",
  "Soliciting and representing clients at marine and rail terminals",
  "Door-to-door delivery",
  "Freight forwarding services",
  "Oversized cargo transportation"
];
const advantages = [
  {
    title: "Ability to transport hazardous goods from class 1-9",
    text: "For each group of substances described above, there are strict rules regarding their storage and handling"
  },
  {
    title: "Own a fleet of cars",
    text: "Over 1,000 pieces of transportation equipment"
  },
  {
    title: "Help with documentation",
    text: "Processing of transportation and commercial documents"
  },
  {
    title: "Logistics specialists efficiency",
    text: "Logistics outsourcing \n(full-service solution delivery)"
  },
  {
    title: "Direct logistics from China to Russia",
    text: "Delivery of prefabricated cargo from China to Russia"
  }
];
const tableData = [
  {
    destination: "Hunchun to Moscow",
    terms: "14 days",
    registration: "15 000 \u20BD"
  },
  {
    destination: "Hunchun \u2014 Ussu\u200Briysk / Vladivostok",
    terms: "4 days",
    registration: "15 000 \u20BD"
  },
  {
    destination: "Shanghai to Moscow",
    terms: "17 days",
    registration: "15 000 \u20BD"
  },
  {
    destination: "Qingdao to Moscow",
    terms: "16 days",
    registration: "15 000 \u20BD"
  },
  {
    destination: "Guangzhou to Moscow",
    terms: "18 days",
    registration: "15 000 \u20BD"
  },
  {
    destination: "Dunin \u2014 Ussu\u200Briysk / Vladivostok",
    terms: "4 days",
    registration: "15 000 \u20BD"
  },
  {
    destination: "Suifenhe \u2014 Ussu\u200Briysk / Vladivostok",
    terms: "4 days",
    registration: "15 000 \u20BD"
  }
];
const _sfc_main$3 = {
  __name: "FullSpectrum",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_img = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "spectrum" }, _attrs))} data-v-54a0d1cc><h2 data-v-54a0d1cc>${ssrInterpolate(_ctx.$texts.servicesSpectrum)}</h2><ul class="spectrum__container" data-v-54a0d1cc><!--[-->`);
      ssrRenderList(unref(spectrumList), (service, i) => {
        _push(`<li data-v-54a0d1cc>`);
        _push(ssrRenderComponent(_component_nuxt_img, {
          src: "images/advantages_icons/standard.svg",
          alt: ""
        }, null, _parent));
        _push(`<p data-v-54a0d1cc>${ssrInterpolate(service)}</p></li>`);
      });
      _push(`<!--]--></ul></div>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AvtomobilnyePerevozki/FullSpectrum.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-54a0d1cc"]]);
const _sfc_main$2 = {
  computed: {
    mainCard() {
      return advantages[0];
    },
    simpleCards() {
      return advantages.slice(-4);
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_img = __nuxt_component_0$1;
  const _component_HomeCardsItem = __nuxt_component_0$2;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "car-advantages" }, _attrs))} data-v-c45384cd><h2 data-v-c45384cd>${ssrInterpolate(_ctx.$texts.carFreightAdvantages)}</h2><div class="car-advantages__container" data-v-c45384cd><div class="car-advantages__main-card" data-v-c45384cd><h3 data-v-c45384cd>${ssrInterpolate($options.mainCard.title)}</h3><p data-v-c45384cd>${ssrInterpolate($options.mainCard.text)}</p>`);
  _push(ssrRenderComponent(_component_nuxt_img, {
    src: "images/car_freight/truck.png",
    alt: _ctx.$texts.carFreightAdvantagesSeo
  }, null, _parent));
  _push(`</div><!--[-->`);
  ssrRenderList($options.simpleCards, (advantage, i) => {
    _push(ssrRenderComponent(_component_HomeCardsItem, {
      key: i,
      title: advantage.title,
      text: advantage.text,
      class: "_car"
    }, null, _parent));
  });
  _push(`<!--]--></div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AvtomobilnyePerevozki/CarAdvantages.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-c45384cd"]]);
const _sfc_main$1 = {
  __name: "ChinaDelivery",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "china-delivery" }, _attrs))} data-v-c332672a><h2 data-v-c332672a>${_ctx.$texts.carFreightFromChinaHTML}</h2><div class="table" data-v-c332672a><div class="table-head head-left" data-v-c332672a>${ssrInterpolate(_ctx.$texts.destination)}</div><div class="table-head" data-v-c332672a>${ssrInterpolate(_ctx.$texts.terms)}</div><div class="table-head table-right" data-v-c332672a>${ssrInterpolate(_ctx.$texts.registration)}</div><!--[-->`);
      ssrRenderList(unref(tableData), (line, i) => {
        _push(`<!--[--><div class="table-item table-dest" data-v-c332672a>${ssrInterpolate(line.destination)}</div><div class="table-item" data-v-c332672a>${ssrInterpolate(line.terms)}</div><div class="table-item table-right" data-v-c332672a>${ssrInterpolate(line.registration)}</div><!--]-->`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AvtomobilnyePerevozki/ChinaDelivery.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-c332672a"]]);
const _sfc_main = {
  setup() {
    const { $texts } = useNuxtApp();
    useHead({
      title: $texts.carFreight
    });
    useServerHead({
      meta: [
        { property: "og:title", content: $texts.carFreight },
        { name: "description", content: $texts.seoCarFreightDescription },
        { property: "og:description", content: $texts.seoCarFreightDescription },
        { name: "keywords", content: $texts.seoKeywordsBase + $texts.seoCarFreightKeywords + $texts.seoServicesKeywordsBase }
      ]
    });
    const isWhiteTheme = useTheme();
    return {
      isWhiteTheme
    };
  },
  computed: {
    seoAlt() {
      const { $texts } = useNuxtApp();
      return $texts.carFreight + $texts.companyNameSeo;
    },
    background() {
      const $img = useImage();
      const imgUrl = $img("images/car_freight_background.png", {
        format: "webp",
        preload: true,
        sizes: "xxl:1512",
        quality: 100,
        alt: this.seoAlt
      });
      return {
        backgroundImage: `url('${imgUrl}')`
      };
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_SharedServicesHeader = __nuxt_component_0;
  const _component_AvtomobilnyePerevozkiFullSpectrum = __nuxt_component_1;
  const _component_AvtomobilnyePerevozkiCarAdvantages = __nuxt_component_2;
  const _component_nuxt_img = __nuxt_component_0$1;
  const _component_AvtomobilnyePerevozkiChinaDelivery = __nuxt_component_4;
  const _component_SharedServicesFiller = __nuxt_component_4$1;
  _push(`<main${ssrRenderAttrs(mergeProps({ class: "safari-fix" }, _attrs))} data-v-f77f718e><section class="car-freight-main" data-v-f77f718e><div style="${ssrRenderStyle($options.background)}" class="bg car-freight-bg"${ssrRenderAttr("title", $options.seoAlt)}${ssrRenderAttr("aria-label", $options.seoAlt)} data-v-f77f718e></div>`);
  _push(ssrRenderComponent(_component_SharedServicesHeader, {
    title: _ctx.$texts.carFreight,
    subtitle: _ctx.$texts.carFreightNote,
    class: "_car"
  }, null, _parent));
  _push(`</section><section id="scroll-target" class="car-freight-spectrum" data-v-f77f718e>`);
  _push(ssrRenderComponent(_component_AvtomobilnyePerevozkiFullSpectrum, null, null, _parent));
  _push(`</section><section data-v-f77f718e>`);
  _push(ssrRenderComponent(_component_AvtomobilnyePerevozkiCarAdvantages, null, null, _parent));
  _push(`</section><section class="car-freight-china" data-v-f77f718e>`);
  _push(ssrRenderComponent(_component_nuxt_img, {
    src: "images/car_freight/china_bg.jpg",
    class: "china-bg dark-theme-only",
    alt: ""
  }, null, _parent));
  _push(ssrRenderComponent(_component_AvtomobilnyePerevozkiChinaDelivery, null, null, _parent));
  _push(`</section>`);
  _push(ssrRenderComponent(_component_SharedServicesFiller, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<section data-v-f77f718e${_scopeId}><h2 class="filler-message" data-v-f77f718e${_scopeId}>${_ctx.$texts.leaveApplicationHTML}</h2></section>`);
      } else {
        return [
          createVNode("section", null, [
            createVNode("h2", {
              class: "filler-message",
              innerHTML: _ctx.$texts.leaveApplicationHTML
            }, null, 8, ["innerHTML"])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</main>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/services/automobile-transportation.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const automobileTransportation = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-f77f718e"]]);

export { automobileTransportation as default };
//# sourceMappingURL=automobile-transportation-f07758aa.mjs.map
