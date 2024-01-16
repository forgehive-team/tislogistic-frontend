import { _ as __nuxt_component_0$3 } from "./ServicesHeader-89631274.js";
import { _ as _export_sfc, u as useNuxtApp, a as useHead } from "../server.mjs";
import { mergeProps, useSSRContext, unref } from "vue";
import "destr";
import { u as useImage } from "./composables-5d51eb10.js";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderAttr, ssrInterpolate, ssrRenderList, ssrRenderComponent } from "vue/server-renderer";
import { _ as __nuxt_component_0$1 } from "./nuxt-img-6da1c54a.js";
import { _ as __nuxt_component_0$2 } from "./CardsItem-11652c8d.js";
import { _ as __nuxt_component_4 } from "./ServicesFiller-e0abeacd.js";
import { u as useServerHead } from "./internalLinks-dc4e1b80.js";
import "./BreadCrumbs-7a67b271.js";
import "./nuxt-link-0d39ff03.js";
import "ufo";
import "hookable";
import "./ExpandArrow-c1187625.js";
import "./state-06d22502.js";
import "ofetch";
import "#internal/nitro";
import "unctx";
/* empty css                     */import "vue-router";
import "h3";
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
const AirTypes_scss_vue_type_style_index_0_src_124b9c4a_scoped_124b9c4a_lang = "";
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
      return this.data.title + " oт" + $texts.companyNameSeo;
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
    title: "Международные авиаперевозки",
    text: "Доставим Ваш груз из любой точки мира*. Широкая агентская сеть, представительства в разных странах и прямые соглашения с крупными авиаперевозчиками позволяют нам предлагать клиентам оптимальные тарифы на авиадоставку",
    legal: "*имеются ограничения, за более подробной консультацией обращайтесь напрямую к менеджеру компании.",
    img: imgPath + "international.jpg",
    seoAlt: ""
  },
  {
    title: "Авиаперевозки по России",
    text: "Наша внутрироссийская сеть охватывает Москву, Санкт-Петербург, Новосибирск, Хабаровск, Владивосток и другие крупные города. Организуем грузовую авиаперевозку любых объектов: опасных, режимных, скоропортящихся, негабаритных — а Вы сможете управлять процессом, словно командир самолёта",
    img: imgPath + "domestic.jpg",
    seoAlt: ""
  },
  {
    title: "Чартерные авиаперевозки",
    text: "Организуем индивидуальные чартерные авиаперевозки для проектных грузов. При необходимости — арендуем целый самолёт, если объём позволит заполнить грузовой отсек целиком",
    legal: "",
    img: imgPath + "charter.jpg",
    seoAlt: ""
  }
];
const airFreightAdvantages = [
  "Легко доставить даже туда, где невозможно доставить наземным транспортом",
  "Большая вместимость грузовых отсеков авиатранспорта",
  "Эффективно в любой сезон: самолёты летают одинаково быстро и зимой, и летом, и в межсезонье",
  "Никаких проблем наземной транспортировки: ни пробок, ни ремонта дорог",
  "Не нужно переживать за скоропортящиеся грузы",
  "Быстро, надежно, \nбезопасно"
];
const AirTypes_scss_vue_type_style_index_0_src_f982fcc7_scoped_f982fcc7_lang = "";
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
const AirAdvantages_scss_vue_type_style_index_0_src_7a3c7912_scoped_7a3c7912_lang = "";
const _sfc_main$1 = {
  __name: "AirAdvantages",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_img = __nuxt_component_0$1;
      const _component_HomeCardsItem = __nuxt_component_0$2;
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
const Aviaperevozki_scss_vue_type_style_index_0_src_d0881a43_scoped_d0881a43_lang = "";
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
  const _component_SharedServicesHeader = __nuxt_component_0$3;
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
export {
  aviaperevozki as default
};
//# sourceMappingURL=aviaperevozki-f61f8f53.js.map
