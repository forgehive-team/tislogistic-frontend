import { _ as __nuxt_component_0 } from './ServicesHeader-229e8eeb.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-img-6da1c54a.mjs';
import { useSSRContext, mergeProps, unref, ref, onUnmounted, withCtx, createVNode, openBlock, createBlock, Fragment, renderList } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderAttr, ssrRenderComponent, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { _ as _export_sfc, u as useNuxtApp, a as useHead } from '../server.mjs';
import { _ as __nuxt_component_0$3 } from './CardsItem-9188544b.mjs';
import { _ as __nuxt_component_0$2 } from './SwiperControls-9dd92448.mjs';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { _ as __nuxt_component_3$1 } from './AdvantagesSliderSlide-230e944b.mjs';
import { _ as __nuxt_component_4 } from './ServicesFiller-3fb83980.mjs';
import { u as useServerHead } from './internalLinks-4b44e090.mjs';
import { u as useImage } from './composables-5d51eb10.mjs';
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
import './ArrowLeft-dd643b18.mjs';
import './ArrowRight-4312bfbb.mjs';
import './KeyIndicators-c056b723.mjs';
import './DeliveryCalculator-22efe5b0.mjs';
import '../../handlers/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import './expand-29e2e84d.mjs';
import './validate-895dda7b.mjs';
import './CompanyLogo-fae8444b.mjs';
import './CompanyPresentation-c67bf544.mjs';
import './ServicesLinks-b725e6d3.mjs';
import './servicesList-30883593.mjs';

const spectrumList = [
  "Reception and unloading from containers and vans",
  "Issuing and loading into containers and vans",
  "Storage of cargo in a secure area or warehouse",
  "Freight forwarding to the client",
  "Consolidation and deconsolidation of cargo"
];
const advantages = [
  {
    title: "Optimization of logistics processes",
    text: "We transport goods directly or through our warehouse and develop individual logistics solutions, taking into account the requirements and timing of orders.\n\nWe guarantee the safety of the cargo and compliance with delivery deadlines."
  },
  {
    title: "Responsible and long-term storage",
    text: "You can store the cargo as long as needed.\nWe guarantee its safety"
  },
  {
    title: "Delivery of any cargo",
    text: "Far East, Khabarovsk Territory, Amur Region, Jewish Autonomous Okrug, Sakhalin, Kamchatka, Magadan, Yakutia"
  },
  {
    title: "Own equipment and personnel for PRR",
    text: "We have the best equipment and experienced personnel for loading and unloading operations"
  },
  {
    title: "Placement and unloading of oversized cargo",
    text: "We work with cargo of non-standard sizes and special equipment"
  }
];
const slidesBasePath = "images/terminal_advantages_slides/";
const advantagesSlidesList = [
  {
    img: slidesBasePath + "1.png",
    title: "Own container park",
    subtitle: "More than 1400 units for multimodal transport"
  },
  {
    img: slidesBasePath + "2.png",
    title: "Warm warehouse",
    subtitle: "We guarantee the safety of the cargo and compliance with all necessary storage parameters"
  },
  {
    img: slidesBasePath + "3.png",
    title: "Cargo forwarding",
    subtitle: "Our specialists will select the optimal route and suitable type of transport for transporting any cargo, taking into account"
  },
  {
    img: slidesBasePath + "4.png",
    title: "Sending cargo across \nthe Russian Federation",
    subtitle: "Export and Import \nTransportation of goods within the Russian Federation and imported \nReception and dispatch of railway cars \nRoad transportation from 20 tons"
  }
];
const _sfc_main$3 = {
  __name: "FullSpectrum",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_img = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "spectrum" }, _attrs))} data-v-4c97f84c><h2 data-v-4c97f84c>${ssrInterpolate(_ctx.$texts.terminalServicesSpectrum)}</h2><ul class="spectrum__container" data-v-4c97f84c><!--[-->`);
      ssrRenderList(unref(spectrumList), (service, i) => {
        _push(`<li data-v-4c97f84c>`);
        _push(ssrRenderComponent(_component_nuxt_img, {
          src: "images/advantages_icons/standard.svg",
          alt: ""
        }, null, _parent));
        _push(`<p data-v-4c97f84c>${ssrInterpolate(service)}</p></li>`);
      });
      _push(`<!--]--></ul></div>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TerminalnieUslugi/FullSpectrum.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-4c97f84c"]]);
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
  const _component_HomeCardsItem = __nuxt_component_0$3;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "car-advantages" }, _attrs))} data-v-7e3020fa><h2 data-v-7e3020fa>${ssrInterpolate(_ctx.$texts.terminalServicesAdvantages)}</h2><div class="car-advantages__container" data-v-7e3020fa><div class="car-advantages__main-card" data-v-7e3020fa><h3 data-v-7e3020fa>${ssrInterpolate($options.mainCard.title)}</h3><p data-v-7e3020fa>${ssrInterpolate($options.mainCard.text)}</p>`);
  _push(ssrRenderComponent(_component_nuxt_img, {
    src: "images/terminal_services/truck.png",
    alt: _ctx.$texts.terminalServicesAdvantagesSeo
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TerminalnieUslugi/Advantages.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-7e3020fa"]]);
const _sfc_main$1 = {
  __name: "AdvantagesSlider",
  __ssrInlineRender: true,
  setup(__props) {
    const swiperInstance = ref(null);
    let intervalRef;
    const onSwiper = (swiper) => {
      swiperInstance.value = swiper;
      intervalRef = setInterval(() => {
        slideNext();
      }, 7e3);
    };
    const slideNext = () => {
      var _a;
      (_a = swiperInstance.value) == null ? void 0 : _a.slideNext();
    };
    const slidePrev = () => {
      var _a;
      (_a = swiperInstance.value) == null ? void 0 : _a.slidePrev();
    };
    onUnmounted(() => {
      if (intervalRef)
        clearInterval(intervalRef);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SharedSwiperControls = __nuxt_component_0$2;
      const _component_Swiper = Swiper;
      const _component_SwiperSlide = SwiperSlide;
      const _component_HomeAdvantagesSliderSlide = __nuxt_component_3$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "advantages-slider" }, _attrs))} data-v-09ccaee1><h2 data-v-09ccaee1>${ssrInterpolate(_ctx.$texts.terminalServicesSliderTitle)}</h2>`);
      _push(ssrRenderComponent(_component_SharedSwiperControls, {
        class: "controls-desktop",
        onSlideNext: slideNext,
        onSlidePrev: slidePrev
      }, null, _parent));
      _push(ssrRenderComponent(_component_Swiper, {
        class: "swiper",
        speed: 600,
        "slides-per-view": "1",
        loop: "",
        onSwiper
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(advantagesSlidesList), (slide, i) => {
              _push2(ssrRenderComponent(_component_SwiperSlide, {
                key: i,
                class: "slide"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_HomeAdvantagesSliderSlide, {
                      img: slide.img,
                      title: slide.title,
                      subtitle: slide.subtitle
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_HomeAdvantagesSliderSlide, {
                        img: slide.img,
                        title: slide.title,
                        subtitle: slide.subtitle
                      }, null, 8, ["img", "title", "subtitle"])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(unref(advantagesSlidesList), (slide, i) => {
                return openBlock(), createBlock(_component_SwiperSlide, {
                  key: i,
                  class: "slide"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_HomeAdvantagesSliderSlide, {
                      img: slide.img,
                      title: slide.title,
                      subtitle: slide.subtitle
                    }, null, 8, ["img", "title", "subtitle"])
                  ]),
                  _: 2
                }, 1024);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_SharedSwiperControls, {
        class: "controls-mobile",
        onSlideNext: slideNext,
        onSlidePrev: slidePrev
      }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TerminalnieUslugi/AdvantagesSlider.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-09ccaee1"]]);
const _sfc_main = {
  setup() {
    const { $texts } = useNuxtApp();
    useHead({
      title: $texts.terminalServices
    });
    useServerHead({
      meta: [
        { property: "og:title", content: $texts.terminalServices },
        { name: "description", content: $texts.seoTerminalServicesDescription },
        { property: "og:description", content: $texts.seoTerminalServicesDescription },
        { name: "keywords", content: $texts.seoKeywordsBase + $texts.seoTerminalServicesKeywords + $texts.seoServicesKeywordsBase }
      ]
    });
  },
  computed: {
    seoAlt() {
      const { $texts } = useNuxtApp();
      return $texts.terminalServices + $texts.companyNameSeo;
    },
    background() {
      const $img = useImage();
      const imgUrl = $img("images/terminal_services_background.png", {
        format: "webp",
        preload: true,
        sizes: "md:768px lg:1024px xl:1280px xxl:1512px",
        quality: 100,
        alt: this.seoAlt
      });
      return {
        backgroundImage: `url('${imgUrl}')`
      };
    },
    advantagesList() {
      const { $texts } = useNuxtApp();
      return [
        {
          text: $texts.terminalServicesAdvantage1,
          imgPath: "gold-check.svg",
          seoAlt: $texts.terminalServicesAdvantagesSeo
        },
        {
          text: $texts.terminalServicesAdvantage2,
          imgPath: "gold-check.svg",
          seoAlt: $texts.terminalServicesAdvantagesSeo
        },
        {
          text: $texts.terminalServicesAdvantage3,
          imgPath: "gold-check.svg",
          seoAlt: $texts.terminalServicesAdvantagesSeo
        },
        {
          text: $texts.terminalServicesAdvantage4,
          imgPath: "gold-check.svg",
          seoAlt: $texts.terminalServicesAdvantagesSeo
        },
        {
          text: $texts.terminalServicesAdvantage5,
          imgPath: "gold-check.svg",
          seoAlt: $texts.terminalServicesAdvantagesSeo
        }
      ];
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_SharedServicesHeader = __nuxt_component_0;
  const _component_TerminalnieUslugiFullSpectrum = __nuxt_component_1;
  const _component_TerminalnieUslugiAdvantages = __nuxt_component_2;
  const _component_TerminalnieUslugiAdvantagesSlider = __nuxt_component_3;
  const _component_SharedServicesFiller = __nuxt_component_4;
  _push(`<div${ssrRenderAttrs(_attrs)} data-v-077c862d><section class="terminal-services-main" data-v-077c862d><div style="${ssrRenderStyle($options.background)}" class="bg terminal-services-bg"${ssrRenderAttr("title", $options.seoAlt)}${ssrRenderAttr("aria-label", $options.seoAlt)} data-v-077c862d></div>`);
  _push(ssrRenderComponent(_component_SharedServicesHeader, {
    button: _ctx.$texts.calculateShort,
    title: _ctx.$texts.terminalServices,
    subtitle: _ctx.$texts.seaFreightNote
  }, null, _parent));
  _push(`</section><section id="scroll-target" class="car-freight-spectrum" data-v-077c862d>`);
  _push(ssrRenderComponent(_component_TerminalnieUslugiFullSpectrum, null, null, _parent));
  _push(`</section><section data-v-077c862d>`);
  _push(ssrRenderComponent(_component_TerminalnieUslugiAdvantages, null, null, _parent));
  _push(`</section><section data-v-077c862d><div class="banner" data-v-077c862d><strong data-v-077c862d>${ssrInterpolate(_ctx.$texts.terminalServicesBanner1)} <span data-v-077c862d>${ssrInterpolate(_ctx.$texts.terminalServicesBanner2)}</span></strong></div></section><section data-v-077c862d>`);
  _push(ssrRenderComponent(_component_TerminalnieUslugiAdvantagesSlider, null, null, _parent));
  _push(`</section>`);
  _push(ssrRenderComponent(_component_SharedServicesFiller, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/services/terminal-services.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const terminalServices = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-077c862d"]]);

export { terminalServices as default };
//# sourceMappingURL=terminal-services-b180034d.mjs.map
