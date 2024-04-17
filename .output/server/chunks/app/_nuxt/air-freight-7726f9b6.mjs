import { _ as __nuxt_component_0$1 } from './ServicesHeader-229e8eeb.mjs';
import { _ as _export_sfc, u as useNuxtApp, a as useHead } from '../server.mjs';
import { useSSRContext, mergeProps, unref } from 'vue';
import { u as useImage } from './composables-5d51eb10.mjs';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderAttr, ssrRenderComponent, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { _ as __nuxt_component_0$2 } from './nuxt-img-6da1c54a.mjs';
import { _ as __nuxt_component_0$3 } from './CardsItem-9188544b.mjs';
import { _ as __nuxt_component_4 } from './ServicesFiller-3fb83980.mjs';
import { u as useServerHead } from './internalLinks-4b44e090.mjs';
import './BreadCrumbs-51af2094.mjs';
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
      return this.data.title + " from" + $texts.companyNameSeo;
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
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "card" }, _attrs))} data-v-d504a27d><div class="card__img-container" style="${ssrRenderStyle($options.bg)}"${ssrRenderAttr("title", $options.seoAlt)}${ssrRenderAttr("aria-label", $options.seoAlt)} data-v-d504a27d></div><div class="card__info" data-v-d504a27d><h3 data-v-d504a27d>${ssrInterpolate($props.data.title)}</h3><p data-v-d504a27d>${ssrInterpolate($props.data.text)}</p>`);
  if ($props.data.legal) {
    _push(`<p class="legal" data-v-d504a27d>${ssrInterpolate($props.data.legal)}</p>`);
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
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-d504a27d"]]);
const imgPath = "images/air_freight/";
const airFreightTypes = [
  {
    Title: "International air transportation",
    text: "We will deliver your cargo from anywhere in the world*. A wide agent network, representative offices in different countries and direct agreements with major air carriers allow us to offer our customers the best possible airfares",
    legal: "*Limitations apply, please contact the company manager directly for more detailed advice.",
    img: imgPath + "international.jpg",
    seoAlt: ""
  },
  {
    title: "Air transportation within Russia",
    text: "Our domestic network covers Moscow, St. Petersburg, Novosibirsk, Khabarovsk, Vladivostok and other major cities. We organize air cargo transportation of any objects: hazardous, sensitive, perishable, oversized - and you can manage the process as if you were the commander of the aircraft",
    img: imgPath + "domestic.jpg",
    seoAlt: ""
  },
  {
    title: "Air charter transportation",
    text: "We organize individual air charter services for project cargoes. If necessary, we rent a whole airplane, if the volume allows us to fill the entire cargo compartment",
    legal: "",
    img: imgPath + "charter.jpg",
    seoAlt: ""
  }
];
const airFreightAdvantages = [
  "Easy to deliver even where ground transportation is not possible",
  "Large capacity air cargo bays",
  "Effective in any season: airplanes fly equally fast in winter, summer, and off-season",
  "No ground transportation problems: no traffic jams, no road repairs",
  "You don't have to worry about perishable goods",
  "Fast, reliable, safe."
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
  _push(`<main${ssrRenderAttrs(_attrs)} data-v-2a65b506><section data-v-2a65b506><div style="${ssrRenderStyle($options.background)}" class="bg air-freight-bg"${ssrRenderAttr("title", $options.seoAlt)}${ssrRenderAttr("aria-label", $options.seoAlt)} data-v-2a65b506></div>`);
  _push(ssrRenderComponent(_component_SharedServicesHeader, {
    title: _ctx.$texts.airFreight,
    subtitle: _ctx.$texts.airFreightNote,
    class: "_air"
  }, null, _parent));
  _push(`</section><section id="scroll-target" data-v-2a65b506>`);
  _push(ssrRenderComponent(_component_AviaperevozkiAirTypes, null, null, _parent));
  _push(`</section><section data-v-2a65b506>`);
  _push(ssrRenderComponent(_component_AviaperevozkiAirAdvantages, null, null, _parent));
  _push(`</section>`);
  _push(ssrRenderComponent(_component_SharedServicesFiller, null, null, _parent));
  _push(`</main>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/services/air-freight.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const airFreight = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-2a65b506"]]);

export { airFreight as default };
//# sourceMappingURL=air-freight-7726f9b6.mjs.map
