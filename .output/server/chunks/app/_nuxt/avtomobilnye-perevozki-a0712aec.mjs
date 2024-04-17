import { _ as __nuxt_component_0 } from './ServicesHeader-479be9b9.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-img-6da1c54a.mjs';
import { useSSRContext, mergeProps, withCtx, createVNode, unref } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderAttr, ssrRenderComponent, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { _ as _export_sfc, u as useNuxtApp, a as useHead } from '../server.mjs';
import { _ as __nuxt_component_0$2 } from './CardsItem-9188544b.mjs';
import { _ as __nuxt_component_4$1 } from './ServicesFiller-aac6605f.mjs';
import { u as useServerHead } from './internalLinks-11d3a882.mjs';
import { b as useTheme } from './state-06d22502.mjs';
import { u as useImage } from './composables-5d51eb10.mjs';
import './BreadCrumbs-c74601ed.mjs';
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
import './KeyIndicators-e53d8500.mjs';
import './DeliveryCalculator-ef5e9098.mjs';
import '../../handlers/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'maska';
import './expand-29e2e84d.mjs';
import './validate-e4070f14.mjs';
import './CompanyLogo-fae8444b.mjs';
import './CompanyPresentation-d2ffd002.mjs';
import './ArrowRight-4312bfbb.mjs';
import './ServicesLinks-676808ff.mjs';
import './servicesList-a71f476f.mjs';

const spectrumList = [
  "\u0410\u0432\u0442\u043E\u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0430 \n\u043A\u0440\u0443\u043F\u043D\u043E\u0442\u043E\u043D\u043D\u0430\u0436\u043D\u044B\u0445 \n\u043A\u043E\u043D\u0442\u0435\u0439\u043D\u0435\u0440\u043E\u0432",
  "\u0420\u0430\u0441\u043A\u0440\u0435\u0434\u0438\u0442\u0430\u0446\u0438\u044F\xA0\u0438 \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u0438\u043D\u0442\u0435\u0440\u0435\u0441\u043E\u0432 \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u0432 \u043D\u0430 \u043C\u043E\u0440\u0441\u043A\u0438\u0445 \u0438 \u0436/\u0434 \u0442\u0435\u0440\u043C\u0438\u043D\u0430\u043B\u0430\u0445",
  "\u0414\u043E\u0441\u0442\u0430\u0432\u043A\u0430\xA0\u0433\u0440\u0443\u0437\u0430 \n\u043E\u0442 \u0434\u0432\u0435\u0440\u0438 \u0434\u043E \u0434\u0432\u0435\u0440\u0438",
  "\u042D\u043A\u0441\u043F\u0435\u0434\u0438\u0442\u043E\u0440\u0441\u043A\u0438\u0435 \n\u0443\u0441\u043B\u0443\u0433\u0438",
  "\u041F\u0435\u0440\u0435\u0432\u043E\u0437\u043A\u0430 \n\u043D\u0435\u0433\u0430\u0431\u0430\u0440\u0438\u0442\u043D\u044B\u0445 \u0433\u0440\u0443\u0437\u043E\u0432"
];
const advantages = [
  {
    title: "\u0412\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u044C \u043E\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043B\u0435\u043D\u0438\u044F \u043F\u0435\u0440\u0435\u0432\u043E\u0437\u043A\u0438 \n\u043E\u043F\u0430\u0441\u043D\u044B\u0445 \u0433\u0440\u0443\u0437\u043E\u0432 \u043E\u0442\xA01-9\xA0\u043A\u043B\u0430\u0441\u0441\u0430",
    text: "\u0414\u043B\u044F \u043A\u0430\u0436\u0434\u043E\u0439 \u043E\u043F\u0438\u0441\u0430\u043D\u043D\u043E\u0439 \u0432\u044B\u0448\u0435 \u0433\u0440\u0443\u043F\u043F\u044B \u0432\u0435\u0449\u0435\u0441\u0442\u0432 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044E\u0442 \u0441\u0442\u0440\u043E\u0433\u0438\u0435 \u043F\u0440\u0430\u0432\u0438\u043B\u0430, \u043A\u0430\u0441\u0430\u044E\u0449\u0438\u0435\u0441\u044F \u0438\u0445 \u0445\u0440\u0430\u043D\u0435\u043D\u0438\u044F \u0438 \u043F\u0435\u0440\u0435\u043C\u0435\u0449\u0435\u043D\u0438\u044F"
  },
  {
    title: "\u0421\u043E\u0431\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0439 \n\u0430\u0432\u0442\u043E\u043F\u0430\u0440\u043A",
    text: "\u0411\u043E\u043B\u0435\u0435 1000 \u0435\u0434\u0438\u043D\u0438\u0446 \n\u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442\u043D\u043E\u0439 \u0442\u0435\u0445\u043D\u0438\u043A\u0438"
  },
  {
    title: "\u041F\u043E\u043C\u043E\u0449\u044C \u0432\xA0\u043E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u0438\u0438 \n\u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430\u0446\u0438\u0438",
    text: "\u041E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u0438\u0435 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442\u043D\u044B\u0445 \n\u0438\xA0\u043A\u043E\u043C\u043C\u0435\u0440\u0447\u0435\u0441\u043A\u0438\u0445 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u043E\u0432"
  },
  {
    title: "\u041E\u043F\u0435\u0440\u0430\u0442\u0438\u0432\u043D\u043E\u0441\u0442\u044C \n\u043B\u043E\u0433\u0438\u0441\u0442\u043E\u0432",
    text: "\u041B\u043E\u0433\u0438\u0441\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0430\u0443\u0442\u0441\u043E\u0440\u0441\u0438\u043D\u0433 \n(\u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0430 \xAB\u043F\u043E\u0434 \u043A\u043B\u044E\u0447\xBB)"
  },
  {
    title: "\u041F\u0440\u044F\u043C\u0430\u044F \u043B\u043E\u0433\u0438\u0441\u0442\u0438\u043A\u0430 \u0438\u0437\xA0\u041A\u0438\u0442\u0430\u044F \u0432\xA0\u0420\u0424",
    text: "\u0414\u043E\u0441\u0442\u0430\u0432\u043A\u0430 \u0441\u0431\u043E\u0440\u043D\u044B\u0445 \u0433\u0440\u0443\u0437\u043E\u0432 \n\u0438\u0437 \u041A\u0438\u0442\u0430\u044F \u0432 \u0420\u043E\u0441\u0441\u0438\u044E"
  }
];
const tableData = [
  {
    destination: "\u0425\u0443\u043D\u044C\u0447\u0443\u043D\u044C \u2014 \u041C\u043E\u0441\u043A\u0432\u0430",
    terms: "14 \u0434\u043D\u0435\u0439",
    registration: "15 000 \u20BD"
  },
  {
    destination: "\u0425\u0443\u043D\u044C\u0447\u0443\u043D\u044C \u2014 \u0423\u0441\u0441\u0443\u0440\u0438\u0439\u0441\u043A/ \u0412\u043B\u0430\u0434\u0438\u0432\u043E\u0441\u0442\u043E\u043A",
    terms: "4 \u0434\u043D\u044F",
    registration: "15 000 \u20BD"
  },
  {
    destination: "\u0428\u0430\u043D\u0445\u0430\u0439 \u2014 \u041C\u043E\u0441\u043A\u0432\u0430",
    terms: "17 \u0434\u043D\u0435\u0439",
    registration: "15 000 \u20BD"
  },
  {
    destination: "\u0426\u0438\u043D\u0434\u0430\u043E \u2014 \u041C\u043E\u0441\u043A\u0432\u0430",
    terms: "16 \u0434\u043D\u0435\u0439",
    registration: "15 000 \u20BD"
  },
  {
    destination: "\u0413\u0443\u0430\u043D\u0447\u0436\u043E\u0443 \u2014 \u041C\u043E\u0441\u043A\u0432\u0430",
    terms: "18 \u0434\u043D\u0435\u0439",
    registration: "15 000 \u20BD"
  },
  {
    destination: "\u0414\u0443\u043D\u0438\u043D \u2014 \u0423\u0441\u0441\u0443\u0440\u0438\u0439\u0441\u043A/ \u0412\u043B\u0430\u0434\u0438\u0432\u043E\u0441\u0442\u043E\u043A",
    terms: "4 \u0434\u043D\u044F",
    registration: "15 000 \u20BD"
  },
  {
    destination: "\u0421\u0443\u0439\u0444\u044D\u043D\u044C\u0445\u044D \u2014 \u0423\u0441\u0441\u0443\u0440\u0438\u0439\u0441\u043A/ \u0412\u043B\u0430\u0434\u0438\u0432\u043E\u0441\u0442\u043E\u043A",
    terms: "4 \u0434\u043D\u044F",
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
  _push(`<main${ssrRenderAttrs(mergeProps({ class: "safari-fix" }, _attrs))} data-v-8629a5d0><section class="car-freight-main" data-v-8629a5d0><div style="${ssrRenderStyle($options.background)}" class="bg car-freight-bg"${ssrRenderAttr("title", $options.seoAlt)}${ssrRenderAttr("aria-label", $options.seoAlt)} data-v-8629a5d0></div>`);
  _push(ssrRenderComponent(_component_SharedServicesHeader, {
    title: _ctx.$texts.carFreight,
    subtitle: _ctx.$texts.carFreightNote,
    class: "_car"
  }, null, _parent));
  _push(`</section><section id="scroll-target" class="car-freight-spectrum" data-v-8629a5d0>`);
  _push(ssrRenderComponent(_component_AvtomobilnyePerevozkiFullSpectrum, null, null, _parent));
  _push(`</section><section data-v-8629a5d0>`);
  _push(ssrRenderComponent(_component_AvtomobilnyePerevozkiCarAdvantages, null, null, _parent));
  _push(`</section><section class="car-freight-china" data-v-8629a5d0>`);
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
        _push2(`<section data-v-8629a5d0${_scopeId}><h2 class="filler-message" data-v-8629a5d0${_scopeId}>${_ctx.$texts.leaveApplicationHTML}</h2></section>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/services/avtomobilnye-perevozki.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const avtomobilnyePerevozki = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-8629a5d0"]]);

export { avtomobilnyePerevozki as default };
//# sourceMappingURL=avtomobilnye-perevozki-a0712aec.mjs.map
