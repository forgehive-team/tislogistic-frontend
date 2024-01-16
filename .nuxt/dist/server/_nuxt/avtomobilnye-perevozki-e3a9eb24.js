import { _ as __nuxt_component_0$2 } from "./ServicesHeader-89631274.js";
import { _ as __nuxt_component_0 } from "./nuxt-img-6da1c54a.js";
import { mergeProps, unref, useSSRContext, withCtx, createVNode } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderComponent, ssrRenderStyle, ssrRenderAttr } from "vue/server-renderer";
import { _ as _export_sfc, u as useNuxtApp, a as useHead } from "../server.mjs";
import { _ as __nuxt_component_0$1 } from "./CardsItem-11652c8d.js";
import { _ as __nuxt_component_4$1 } from "./ServicesFiller-e0abeacd.js";
import { u as useServerHead } from "./internalLinks-dc4e1b80.js";
import "destr";
import { c as useTheme } from "./state-06d22502.js";
import { u as useImage } from "./composables-5d51eb10.js";
import "./BreadCrumbs-7a67b271.js";
import "./nuxt-link-0d39ff03.js";
import "ufo";
import "hookable";
import "./ExpandArrow-c1187625.js";
import "h3";
import "ofetch";
import "#internal/nitro";
import "unctx";
/* empty css                     */import "vue-router";
import "defu";
import "./KeyIndicators-1e584f96.js";
import "vue-countup-v3";
import "./DeliveryCalculator-288af09b.js";
import "maska";
import "./expand-29e2e84d.js";
import "./validate-e4070f14.js";
import "./CompanyLogo-fae8444b.js";
import "./CompanyPresentation-9c0cc7e3.js";
import "./ArrowRight-4312bfbb.js";
import "./ServicesLinks-af51bc72.js";
import "./servicesList-d8a4a1b3.js";
const spectrumList = [
  "Автодоставка \nкрупнотоннажных \nконтейнеров",
  "Раскредитация и представление интересов клиентов на морских и ж/д терминалах",
  "Доставка груза \nот двери до двери",
  "Экспедиторские \nуслуги",
  "Перевозка \nнегабаритных грузов"
];
const advantages = [
  {
    title: "Возможность осуществления перевозки \nопасных грузов от 1-9 класса",
    text: "Для каждой описанной выше группы веществ существуют строгие правила, касающиеся их хранения и перемещения"
  },
  {
    title: "Собственный \nавтопарк",
    text: "Более 1000 единиц \nтранспортной техники"
  },
  {
    title: "Помощь в оформлении \nдокументации",
    text: "Оформление транспортных \nи коммерческих документов"
  },
  {
    title: "Оперативность \nлогистов",
    text: "Логистический аутсорсинг \n(доставка «под ключ»)"
  },
  {
    title: "Прямая логистика из Китая в РФ",
    text: "Доставка сборных грузов \nиз Китая в Россию"
  }
];
const tableData = [
  {
    destination: "Хуньчунь — Москва",
    terms: "14 дней",
    registration: "15 000 ₽"
  },
  {
    destination: "Хуньчунь — Уссурийск/ Владивосток",
    terms: "4 дня",
    registration: "15 000 ₽"
  },
  {
    destination: "Шанхай — Москва",
    terms: "17 дней",
    registration: "15 000 ₽"
  },
  {
    destination: "Циндао — Москва",
    terms: "16 дней",
    registration: "15 000 ₽"
  },
  {
    destination: "Гуанчжоу — Москва",
    terms: "18 дней",
    registration: "15 000 ₽"
  },
  {
    destination: "Дунин — Уссурийск/ Владивосток",
    terms: "4 дня",
    registration: "15 000 ₽"
  },
  {
    destination: "Суйфэньхэ — Уссурийск/ Владивосток",
    terms: "4 дня",
    registration: "15 000 ₽"
  }
];
const FullSpectrum_scss_vue_type_style_index_0_src_54a0d1cc_scoped_54a0d1cc_lang = "";
const _sfc_main$3 = {
  __name: "FullSpectrum",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_img = __nuxt_component_0;
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
const CarAdvantages_scss_vue_type_style_index_0_src_c45384cd_scoped_c45384cd_lang = "";
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
  const _component_nuxt_img = __nuxt_component_0;
  const _component_HomeCardsItem = __nuxt_component_0$1;
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
const ChinaDelivery_scss_vue_type_style_index_0_src_c332672a_scoped_c332672a_lang = "";
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
const AvtomobilnyePerevozki_scss_vue_type_style_index_0_src_2857630c_scoped_2857630c_lang = "";
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
  const _component_SharedServicesHeader = __nuxt_component_0$2;
  const _component_AvtomobilnyePerevozkiFullSpectrum = __nuxt_component_1;
  const _component_AvtomobilnyePerevozkiCarAdvantages = __nuxt_component_2;
  const _component_nuxt_img = __nuxt_component_0;
  const _component_AvtomobilnyePerevozkiChinaDelivery = __nuxt_component_4;
  const _component_SharedServicesFiller = __nuxt_component_4$1;
  _push(`<main${ssrRenderAttrs(mergeProps({ class: "safari-fix" }, _attrs))} data-v-2857630c><section class="car-freight-main" data-v-2857630c><div style="${ssrRenderStyle($options.background)}" class="bg car-freight-bg"${ssrRenderAttr("title", $options.seoAlt)}${ssrRenderAttr("aria-label", $options.seoAlt)} data-v-2857630c></div>`);
  _push(ssrRenderComponent(_component_SharedServicesHeader, {
    title: _ctx.$texts.carFreight,
    subtitle: _ctx.$texts.carFreightNote,
    class: "_car"
  }, null, _parent));
  _push(`</section><section id="scroll-target" class="car-freight-spectrum" data-v-2857630c>`);
  _push(ssrRenderComponent(_component_AvtomobilnyePerevozkiFullSpectrum, null, null, _parent));
  _push(`</section><section data-v-2857630c>`);
  _push(ssrRenderComponent(_component_AvtomobilnyePerevozkiCarAdvantages, null, null, _parent));
  _push(`</section><section class="car-freight-china" data-v-2857630c>`);
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
        _push2(`<section data-v-2857630c${_scopeId}><h2 class="filler-message" data-v-2857630c${_scopeId}>${_ctx.$texts.leaveApplicationHTML}</h2></section>`);
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
const avtomobilnyePerevozki = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-2857630c"]]);
export {
  avtomobilnyePerevozki as default
};
//# sourceMappingURL=avtomobilnye-perevozki-e3a9eb24.js.map
