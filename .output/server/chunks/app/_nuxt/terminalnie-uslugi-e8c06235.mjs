import { _ as __nuxt_component_0 } from './ServicesHeader-479be9b9.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-img-6da1c54a.mjs';
import { useSSRContext, mergeProps, unref, ref, onUnmounted, withCtx, createVNode, openBlock, createBlock, Fragment, renderList } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderAttr, ssrRenderComponent, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { _ as _export_sfc, u as useNuxtApp, a as useHead } from '../server.mjs';
import { _ as __nuxt_component_0$3 } from './CardsItem-9188544b.mjs';
import { _ as __nuxt_component_0$2 } from './SwiperControls-9dd92448.mjs';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { _ as __nuxt_component_3$1 } from './AdvantagesSliderSlide-230e944b.mjs';
import { _ as __nuxt_component_4 } from './ServicesFiller-aac6605f.mjs';
import { u as useServerHead } from './internalLinks-11d3a882.mjs';
import { u as useImage } from './composables-5d51eb10.mjs';
import './BreadCrumbs-c74601ed.mjs';
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
import './KeyIndicators-e53d8500.mjs';
import './DeliveryCalculator-ef5e9098.mjs';
import '../../handlers/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'maska';
import './expand-29e2e84d.mjs';
import './validate-e4070f14.mjs';
import './CompanyLogo-fae8444b.mjs';
import './CompanyPresentation-d2ffd002.mjs';
import './ServicesLinks-676808ff.mjs';
import './servicesList-a71f476f.mjs';

const spectrumList = [
  "\u041F\u0440\u0438\u0451\u043C \u0438 \u0432\u044B\u0433\u0440\u0443\u0437\u043A\u0430 \u0438\u0437 \u043A\u043E\u043D\u0442\u0435\u0439\u043D\u0435\u0440\u043E\u0432 \u0438 \u0444\u0443\u0440\u0433\u043E\u043D\u043E\u0432",
  "\u0412\u044B\u0434\u0430\u0447\u0430 \u0438 \u043F\u043E\u0433\u0440\u0443\u0437\u043A\u0430 \u0432 \u043A\u043E\u043D\u0442\u0435\u0439\u043D\u0435\u0440\u044B \u0438 \u0444\u0443\u0440\u0433\u043E\u043D\u044B",
  "\u0425\u0440\u0430\u043D\u0435\u043D\u0438\u0435 \u0433\u0440\u0443\u0437\u0430 \u043D\u0430 \u043E\u0445\u0440\u0430\u043D\u044F\u0435\u043C\u043E\u0439 \u043F\u043B\u043E\u0449\u0430\u0434\u043A\u0435 \u0438\u043B\u0438 \u0441\u043A\u043B\u0430\u0434\u0435",
  "\u042D\u043A\u0441\u043F\u0435\u0434\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u0433\u0440\u0443\u0437\u0430 \u0434\u043E \u043A\u043B\u0438\u0435\u043D\u0442\u0430",
  "\u041A\u043E\u043D\u0441\u043E\u043B\u0438\u0434\u0430\u0446\u0438\u044F \u0438 \u0434\u0435\u043A\u043E\u043D\u0441\u043E\u043B\u0438\u0434\u0430\u0446\u0438\u044F \u0433\u0440\u0443\u0437\u043E\u0432"
];
const advantages = [
  {
    title: "\u041E\u043F\u0442\u0438\u043C\u0438\u0437\u0430\u0446\u0438\u044F \u043B\u043E\u0433\u0438\u0441\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u043E\u0432",
    text: "\u041C\u044B \u043F\u0435\u0440\u0435\u0432\u043E\u0437\u0438\u043C \u0433\u0440\u0443\u0437\u044B \u043D\u0430\u043F\u0440\u044F\u043C\u0443\u044E \u043B\u0438\u0431\u043E \u0447\u0435\u0440\u0435\u0437 \u043D\u0430\u0448 \u0441\u043A\u043B\u0430\u0434 \u0438 \u0440\u0430\u0437\u0440\u0430\u0431\u0430\u0442\u044B\u0432\u0430\u0435\u043C \u0438\u043D\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043B\u044C\u043D\u044B\u0435 \u043B\u043E\u0433\u0438\u0441\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0440\u0435\u0448\u0435\u043D\u0438\u044F, \u0443\u0447\u0438\u0442\u044B\u0432\u0430\u044F \u0442\u0440\u0435\u0431\u043E\u0432\u0430\u043D\u0438\u044F \u0438 \u0441\u0440\u043E\u043A\u0438 \u0437\u0430\u043A\u0430\u0437\u043E\u0432.\n\n\u041C\u044B \u0433\u0430\u0440\u0430\u043D\u0442\u0438\u0440\u0443\u0435\u043C \u0441\u043E\u0445\u0440\u0430\u043D\u043D\u043E\u0441\u0442\u044C \u0433\u0440\u0443\u0437\u0430 \u0438 \u0441\u043E\u0431\u043B\u044E\u0434\u0435\u043D\u0438\u0435 \u0441\u0440\u043E\u043A\u043E\u0432 \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0438."
  },
  {
    title: "\u041E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0435 \u0438 \u0434\u043E\u043B\u0433\u043E\u0435 \u0445\u0440\u0430\u043D\u0435\u043D\u0438\u0435",
    text: "\u0412\u044B \u0441\u043C\u043E\u0436\u0435\u0442\u0435 \u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0433\u0440\u0443\u0437 \u0441\u0442\u043E\u043B\u044C\u043A\u043E, \u0441\u043A\u043E\u043B\u044C\u043A\u043E \u043F\u043E\u0442\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044F.\n\u041C\u044B \u0433\u0430\u0440\u0430\u043D\u0442\u0438\u0440\u0443\u0435\u043C \u0435\u0433\u043E \u0441\u043E\u0445\u0440\u0430\u043D\u043D\u043E\u0441\u0442\u044C"
  },
  {
    title: "\u0414\u043E\u0441\u0442\u0430\u0432\u043A\u0430 \u043B\u044E\u0431\u043E\u0433\u043E \u0433\u0440\u0443\u0437\u0430",
    text: "\u0414\u0430\u043B\u044C\u043D\u0438\u0439 \u0432\u043E\u0441\u0442\u043E\u043A, \u0425\u0430\u0431\u0430\u0440\u043E\u0432\u0441\u043A\u0438\u0439 \u043A\u0440\u0430\u0439, \u0410\u043C\u0443\u0440\u0441\u043A\u0430\u044F \u043E\u0431\u043B\u0430\u0441\u0442\u044C, \u0415\u0410\u041E, \u0421\u0430\u0445\u0430\u043B\u0438\u043D, \u041A\u0430\u043C\u0447\u0430\u0442\u043A\u0430, \u041C\u0430\u0433\u0430\u0434\u0430\u043D, \u042F\u043A\u0443\u0442\u0438\u044F"
  },
  {
    title: "\u0421\u043E\u0431\u0441\u0442\u0432\u0435\u043D\u043D\u0430\u044F \u0442\u0435\u0445\u043D\u0438\u043A\u0430 \u0438 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B \u0434\u043B\u044F \u041F\u0420\u0420",
    text: "\u0423 \u043D\u0430\u0441 \u043B\u0443\u0447\u0448\u0435\u0435 \u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u0435 \u0438 \u043E\u043F\u044B\u0442\u043D\u044B\u0439 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B \u0434\u043B\u044F \u043F\u043E\u0433\u0440\u0443\u0437\u043E\u0447\u043D\u043E-\u0440\u0430\u0437\u0433\u0440\u0443\u0437\u043E\u0447\u043D\u044B\u0445 \u0440\u0430\u0431\u043E\u0442"
  },
  {
    title: "\u0420\u0430\u0437\u043C\u0435\u0449\u0435\u043D\u0438\u0435 \u0438 \u0432\u044B\u0433\u0440\u0443\u0437\u043A\u0430 \u043D\u0435\u0433\u0430\u0431\u0430\u0440\u0438\u0442\u043D\u044B\u0445 \u0433\u0440\u0443\u0437\u043E\u0432",
    text: "\u0420\u0430\u0431\u043E\u0442\u0430\u0435\u043C \u0441 \u0433\u0440\u0443\u0437\u0430\u043C\u0438 \u043D\u0435\u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0445 \u0440\u0430\u0437\u043C\u0435\u0440\u043E\u0432 \u0438 \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0439 \u0442\u0435\u0445\u043D\u0438\u043A\u043E\u0439"
  }
];
const slidesBasePath = "images/terminal_advantages_slides/";
const advantagesSlidesList = [
  {
    img: slidesBasePath + "1.png",
    title: "\u0421\u043E\u0431\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0439 \n\u043A\u043E\u043D\u0442\u0435\u0439\u043D\u0435\u0440\u043D\u044B\u0439 \u043F\u0430\u0440\u043A",
    subtitle: "\u0411\u043E\u043B\u0435\u0435 1400 \u0435\u0434\u0438\u043D\u0438\u0446 \u0434\u043B\u044F \u043C\u0443\u043B\u044C\u0442\u0438\u043C\u043E\u0434\u0430\u043B\u044C\u043D\u044B\u0445 \u043F\u0435\u0440\u0435\u0432\u043E\u0437\u043E\u043A"
  },
  {
    img: slidesBasePath + "2.png",
    title: "\u0442\u0435\u043F\u043B\u044B\u0439 \n\u0441\u043A\u043B\u0430\u0434",
    subtitle: "\u041C\u044B \u0433\u0430\u0440\u0430\u043D\u0442\u0438\u0440\u0443\u0435\u043C \u0441\u043E\u0445\u0440\u0430\u043D\u043D\u043E\u0441\u0442\u044C \u0433\u0440\u0443\u0437\u0430 \u0438 \u0441\u043E\u0431\u043B\u044E\u0434\u0435\u043D\u0438\u0435 \u0432\u0441\u0435\u0445 \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u044B\u0445 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u043E\u0432 \u0445\u0440\u0430\u043D\u0435\u043D\u0438\u044F"
  },
  {
    img: slidesBasePath + "3.png",
    title: "\u042D\u043A\u0441\u043F\u0435\u0434\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \n\u0433\u0440\u0443\u0437\u0430",
    subtitle: "\u041D\u0430\u0448\u0438 \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0441\u0442\u044B \u043F\u043E\u0434\u0431\u0435\u0440\u0443\u0442 \u043E\u043F\u0442\u0438\u043C\u0430\u043B\u044C\u043D\u044B\u0439 \u043C\u0430\u0440\u0448\u0440\u0443\u0442 \u0438 \u043F\u043E\u0434\u0445\u043E\u0434\u044F\u0449\u0438\u0439 \u0432\u0438\u0434 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442\u0430 \u0434\u043B\u044F \u043F\u0435\u0440\u0435\u0432\u043E\u0437\u043A\u0438 \u043B\u044E\u0431\u043E\u0433\u043E \u0433\u0440\u0443\u0437\u0430 \u0441 \u0443\u0447\u0451\u0442\u043E\u043C"
  },
  {
    img: slidesBasePath + "4.png",
    title: "\u041E\u0442\u043F\u0440\u0430\u0432\u043A\u0430 \n\u0433\u0440\u0443\u0437\u043E\u0432 \u043F\u043E \u0420\u0424",
    subtitle: "\u042D\u043A\u0441\u043F\u043E\u0440\u0442 \u0438 \u0418\u043C\u043F\u043E\u0440\u0442 \n\u041F\u0435\u0440\u0435\u0432\u043E\u0437\u043A\u0430 \u0433\u0440\u0443\u0437\u043E\u0432 \u043F\u043E \u0420\u0424 \u0438 \u0438\u043C\u043F\u043E\u0440\u0442\u043D\u044B\u0445 \n\u041F\u0440\u0438\u0435\u043C \u0438 \u043E\u0442\u043F\u0440\u0430\u0432\u043A\u0430 \u0416\u0414 \u0432\u0430\u0433\u043E\u043D\u043E\u0432 \n\u0410\u0432\u0442\u043E\u043F\u0435\u0440\u0435\u0432\u043E\u0437\u043A\u0438 \u043E\u0442 20 \u0442\u043E\u043D\u043D"
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
  _push(`<div${ssrRenderAttrs(_attrs)} data-v-5c3a34a1><section class="terminal-services-main" data-v-5c3a34a1><div style="${ssrRenderStyle($options.background)}" class="bg terminal-services-bg"${ssrRenderAttr("title", $options.seoAlt)}${ssrRenderAttr("aria-label", $options.seoAlt)} data-v-5c3a34a1></div>`);
  _push(ssrRenderComponent(_component_SharedServicesHeader, {
    button: _ctx.$texts.calculateShort,
    title: _ctx.$texts.terminalServices,
    subtitle: _ctx.$texts.seaFreightNote
  }, null, _parent));
  _push(`</section><section id="scroll-target" class="car-freight-spectrum" data-v-5c3a34a1>`);
  _push(ssrRenderComponent(_component_TerminalnieUslugiFullSpectrum, null, null, _parent));
  _push(`</section><section data-v-5c3a34a1>`);
  _push(ssrRenderComponent(_component_TerminalnieUslugiAdvantages, null, null, _parent));
  _push(`</section><section data-v-5c3a34a1><div class="banner" data-v-5c3a34a1><strong data-v-5c3a34a1>${ssrInterpolate(_ctx.$texts.terminalServicesBanner1)} <span data-v-5c3a34a1>${ssrInterpolate(_ctx.$texts.terminalServicesBanner2)}</span></strong></div></section><section data-v-5c3a34a1>`);
  _push(ssrRenderComponent(_component_TerminalnieUslugiAdvantagesSlider, null, null, _parent));
  _push(`</section>`);
  _push(ssrRenderComponent(_component_SharedServicesFiller, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/services/terminalnie-uslugi.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const terminalnieUslugi = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-5c3a34a1"]]);

export { terminalnieUslugi as default };
//# sourceMappingURL=terminalnie-uslugi-e8c06235.mjs.map
