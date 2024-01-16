import { _ as __nuxt_component_0$1 } from './ServicesHeader-c845d360.mjs';
import { _ as __nuxt_component_0$3 } from './nuxt-img-6da1c54a.mjs';
import { _ as _export_sfc, u as useNuxtApp, a as useHead } from '../server.mjs';
import { useSSRContext, mergeProps, unref, ref, onUnmounted, withCtx, createVNode, openBlock, createBlock, Fragment, renderList } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderAttr, ssrRenderComponent, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { u as useImage } from './composables-5d51eb10.mjs';
import { _ as __nuxt_component_0$2 } from './SwiperControls-9dd92448.mjs';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { _ as __nuxt_component_3$1 } from './AdvantagesSliderSlide-3aa7a258.mjs';
import { _ as __nuxt_component_4 } from './KeyIndicators-1e584f96.mjs';
import { _ as __nuxt_component_5 } from './CompanyProjects-3b587959.mjs';
import { _ as __nuxt_component_1$1 } from './DeliveryCalculator-e734ee29.mjs';
import { _ as __nuxt_component_1$2 } from './CompanyLogo-fae8444b.mjs';
import { _ as __nuxt_component_1$3 } from './ServicesLinks-af51bc72.mjs';
import { u as useServerHead } from './internalLinks-dc4e1b80.mjs';
import { b as useTheme } from './state-06d22502.mjs';
import './BreadCrumbs-7a67b271.mjs';
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
import './ArrowLeft-dd643b18.mjs';
import './ArrowRight-4312bfbb.mjs';
import './LinkUnderline-05508d8a.mjs';
import './ProjectsItem-93537194.mjs';
import '../../handlers/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import './transformDate-3029d144.mjs';
import 'dayjs';
import 'maska';
import './expand-29e2e84d.mjs';
import './validate-e4070f14.mjs';
import './servicesList-d8a4a1b3.mjs';

const _sfc_main$4 = {
  computed: {
    points() {
      const { $texts } = useNuxtApp();
      return [
        {
          title: $texts.optimalProjectDevelopment,
          text: $texts.optimalProjectDevelopmentDesc,
          img: "images/complex_organization/optimal_project_development.svg"
        },
        {
          title: $texts.turnKeySupport,
          text: $texts.turnKeySupportDesc,
          img: "images/complex_organization/turn_key_support.svg"
        },
        {
          title: $texts.employConstructor,
          text: $texts.employConstructorDesc,
          img: "images/complex_organization/employ_constructor.svg"
        },
        {
          title: $texts.closeAllTasks,
          text: $texts.closeAllTasksDesc,
          img: "images/complex_organization/close_all_tasks.svg"
        }
      ];
    }
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_img = __nuxt_component_0$3;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "complex-organization" }, _attrs))} data-v-cc7a3027><h2 data-v-cc7a3027>${ssrInterpolate(_ctx.$texts.deliveryComplexOrganization)}</h2><div class="complex-organization__points-container" data-v-cc7a3027><!--[-->`);
  ssrRenderList($options.points, (point, key) => {
    _push(`<div class="complex-organization__point" data-v-cc7a3027>`);
    _push(ssrRenderComponent(_component_nuxt_img, {
      src: point.img,
      alt: point.title + " \u0432 \u0422\u0418\u0421 \u041B\u043E\u0434\u0436\u0438\u0441\u0442\u0438\u043A",
      class: "icon-gray"
    }, null, _parent));
    _push(`<h4 data-v-cc7a3027>${ssrInterpolate(point.title)}</h4><p data-v-cc7a3027>${ssrInterpolate(point.text)}</p></div>`);
  });
  _push(`<!--]--></div></div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ProjectLogistics/ComplexOrganization.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-cc7a3027"]]);
const _sfc_main$3 = {
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  computed: {
    bg() {
      const $img = useImage();
      const imgUrl = $img(this.data.img, {
        format: "webp",
        quality: 60,
        alt: this.data.seoAlt
      });
      return {
        backgroundImage: `url('${imgUrl}')`
      };
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "card" }, _attrs))} data-v-f3557c55><div class="card__img-container"${ssrRenderAttr("title", $props.data.seoAlt)} style="${ssrRenderStyle($options.bg)}" data-v-f3557c55></div><div class="card__info" data-v-f3557c55><h3 data-v-f3557c55>${ssrInterpolate($props.data.title)}</h3><ul data-v-f3557c55><!--[-->`);
  ssrRenderList($props.data.list, (line, key) => {
    _push(`<li data-v-f3557c55>${ssrInterpolate(line)}</li>`);
  });
  _push(`<!--]--></ul></div></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ProjectLogistics/AnyDeliveryCard.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-f3557c55"]]);
const imgPath = "images/any_delivery/";
const anyDeliveryList = [
  {
    title: "\u041F\u0435\u0440\u0435\u0432\u043E\u0437\u043A\u0430 \u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F",
    img: imgPath + "equipment_transportation.jpg",
    list: [
      "\u041D\u0435\u0444\u0442\u0435\u0433\u0430\u0437\u043E\u0432\u043E\u0439 \u043F\u0440\u043E\u043C\u044B\u0448\u043B\u0435\u043D\u043D\u043E\u0441\u0442\u0438",
      "\u0413\u043E\u0440\u043D\u043E\u0434\u043E\u0431\u044B\u0432\u0430\u044E\u0449\u0435\u0439 \u043F\u0440\u043E\u043C\u044B\u0448\u043B\u0435\u043D\u043D\u043E\u0441\u0442\u0438",
      "\u041C\u0435\u0442\u0430\u043B\u043B\u0443\u0440\u0433\u0438\u0447\u0435\u0441\u043A\u043E\u0439 \u043F\u0440\u043E\u043C\u044B\u0448\u043B\u0435\u043D\u043D\u043E\u0441\u0442\u0438",
      "\u042D\u043D\u0435\u0440\u0433\u0435\u0442\u0438\u0447\u0435\u0441\u043A\u043E\u0435 \u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u0435",
      "\u041A\u0440\u0443\u043F\u043D\u043E\u0433\u0430\u0431\u0430\u0440\u0438\u0442\u043D\u044B\u0435 \u0441\u0442\u0430\u043D\u043A\u0438",
      "\u0421\u0438\u043B\u043E\u0441\u044B \u0434\u043B\u044F \u0441\u0435\u043B\u044C\u0445\u043E\u0437\u0442\u043E\u0432\u0430\u0440\u043E\u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u0435\u0439"
    ],
    seoAlt: "\u041F\u0435\u0440\u0435\u0432\u043E\u0437\u043A\u0430 \u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F \u043E\u0442 TIS Logistic"
  },
  {
    title: "\u041F\u0435\u0440\u0435\u0432\u043E\u0437\u043A\u0430 \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0439 \u0442\u0435\u0445\u043D\u0438\u043A\u0438",
    img: imgPath + "special_transportation.jpg",
    list: [
      "\u042D\u043A\u0441\u043A\u0430\u0432\u0430\u0442\u043E\u0440\u044B",
      "\u0422\u0440\u0430\u043A\u0442\u043E\u0440\u0430",
      "\u0411\u0430\u0448\u0435\u043D\u043D\u044B\u0435 \u043A\u0440\u0430\u043D\u044B",
      "\u041A\u0430\u0442\u043A\u0438",
      "\u041F\u043E\u0433\u0440\u0443\u0437\u0447\u0438\u043A\u0438",
      "\u0421\u0435\u043B\u044C\u0445\u043E\u0437\u0442\u0435\u0445\u043D\u0438\u043A\u0430"
    ],
    seoAlt: "\u041F\u0435\u0440\u0435\u0432\u043E\u0437\u043A\u0430 \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0439 \u0442\u0435\u0445\u043D\u0438\u043A\u0438 \u043E\u0442 TIS Logistic"
  },
  {
    title: "\u041F\u0435\u0440\u0435\u0432\u043E\u0437\u043A\u0430 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442\u0430",
    img: imgPath + "vehicles_transportation.jpg",
    list: [
      "\u041B\u0435\u0433\u043A\u043E\u0432\u044B\u0435 \u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u0438",
      "\u0413\u0440\u0443\u0437\u043E\u0432\u044B\u0435 \u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u0438, \u0430\u0432\u0442\u043E\u0431\u0443\u0441\u044B",
      "\u042F\u0445\u0442\u044B, \u043A\u0440\u0443\u0438\u0437\u043D\u044B\u0435 \u043A\u0430\u0442\u0435\u0440\u0430",
      "\u041A\u043E\u0440\u0430\u0431\u0435\u043B\u044C\u043D\u044B\u0435 \u044F\u043A\u043E\u0440\u044F",
      "\u0421\u0443\u0434\u043E\u0432\u044B\u0435 \u0434\u0432\u0438\u0433\u0430\u0442\u0435\u043B\u0438"
    ],
    seoAlt: "\u041F\u0435\u0440\u0435\u0432\u043E\u0437\u043A\u0430 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442\u0430 \u043E\u0442 TIS Logistic"
  }
];
const _sfc_main$2 = {
  __name: "AnyDelivery",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ProjectLogisticsAnyDeliveryCard = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "any-delivery" }, _attrs))} data-v-f9bf815d><h2 data-v-f9bf815d>${ssrInterpolate(_ctx.$texts.anyDeliveryTitle)}</h2><!--[-->`);
      ssrRenderList(unref(anyDeliveryList), (data, i) => {
        _push(ssrRenderComponent(_component_ProjectLogisticsAnyDeliveryCard, {
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ProjectLogistics/AnyDelivery.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-f9bf815d"]]);
const basePath = "images/project_logistics_slides";
const projectLogisticsSlides = [
  basePath + "/slide_1.jpg",
  basePath + "/slide_2.jpg",
  basePath + "/slide_3.jpg",
  // basePath + '/slide_4.jpg',
  basePath + "/slide_5.jpg",
  basePath + "/slide_6.jpg",
  // basePath + '/slide_7.jpg',
  basePath + "/slide_8.jpg",
  basePath + "/slide_9.jpg",
  basePath + "/slide_10.jpg",
  basePath + "/slide_11.jpg",
  basePath + "/slide_12.jpg",
  basePath + "/slide_13.jpg"
];
const _sfc_main$1 = {
  __name: "ImagesSlider",
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
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "advantages-slider" }, _attrs))} data-v-1713cac6><div class="tablet-desktop-only" style="${ssrRenderStyle({
        height: "62px"
      })}" data-v-1713cac6></div>`);
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
            ssrRenderList(unref(projectLogisticsSlides), (slide, i) => {
              _push2(ssrRenderComponent(_component_SwiperSlide, {
                key: i,
                class: "slide"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_HomeAdvantagesSliderSlide, { img: slide }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_HomeAdvantagesSliderSlide, { img: slide }, null, 8, ["img"])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(unref(projectLogisticsSlides), (slide, i) => {
                return openBlock(), createBlock(_component_SwiperSlide, {
                  key: i,
                  class: "slide"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_HomeAdvantagesSliderSlide, { img: slide }, null, 8, ["img"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ProjectLogistics/ImagesSlider.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-1713cac6"]]);
const _sfc_main = {
  setup() {
    const { $texts } = useNuxtApp();
    useHead({
      title: $texts.projectLogistics
    });
    useServerHead({
      meta: [
        { property: "og:title", content: $texts.projectLogistics },
        { name: "description", content: $texts.seoProjectLogisticsDescription },
        { property: "og:description", content: $texts.seoProjectLogisticsDescription },
        { name: "keywords", content: $texts.seoKeywordsBase + $texts.seoProjectLogisticsKeywords + $texts.seoServicesKeywordsBase }
      ]
    });
    const isWhiteTheme = useTheme();
    return {
      isWhiteTheme
    };
  },
  computed: {
    background() {
      const $img = useImage();
      const imgUrl = $img("images/project_logistics_background.png", {
        format: "webp",
        preload: true,
        sizes: "xxl:1512",
        quality: 100
      });
      return {
        backgroundImage: `url('${imgUrl}')`
      };
    },
    bottomBackground() {
      if (this.isWhiteTheme)
        return "";
      const $img = useImage();
      const imgUrl = $img("images/main_background.jpg", {
        format: "webp"
      });
      return {
        backgroundImage: `linear-gradient(180deg, #1B1B1F 12.17%, rgba(20, 20, 23, 0.829382) 24.78%, rgba(0, 0, 0, 0.61) 45.5%), url('${imgUrl}')`
      };
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_SharedServicesHeader = __nuxt_component_0$1;
  const _component_ProjectLogisticsComplexOrganization = __nuxt_component_1;
  const _component_ProjectLogisticsAnyDelivery = __nuxt_component_2;
  const _component_ProjectLogisticsImagesSlider = __nuxt_component_3;
  const _component_SharedKeyIndicators = __nuxt_component_4;
  const _component_HomeCompanyProjects = __nuxt_component_5;
  const _component_SharedDeliveryCalculator = __nuxt_component_1$1;
  const _component_IconsCompanyLogo = __nuxt_component_1$2;
  const _component_SharedServicesLinks = __nuxt_component_1$3;
  _push(`<main${ssrRenderAttrs(_attrs)} data-v-48433a6b><section class="project-logistics-main" data-v-48433a6b><div style="${ssrRenderStyle($options.background)}" class="bg project-logistics-bg"${ssrRenderAttr("title", _ctx.$texts.seoAltProjectLogistics)} data-v-48433a6b></div>`);
  _push(ssrRenderComponent(_component_SharedServicesHeader, {
    title: _ctx.$texts.projectLogisticsTitle,
    subtitle: _ctx.$texts.projectLogisticsNote
  }, null, _parent));
  _push(`</section><section id="scroll-target" class="project-logistics-complex-organization" data-v-48433a6b>`);
  _push(ssrRenderComponent(_component_ProjectLogisticsComplexOrganization, null, null, _parent));
  _push(`</section><section class="project-logistics-any-delivery" data-v-48433a6b>`);
  _push(ssrRenderComponent(_component_ProjectLogisticsAnyDelivery, null, null, _parent));
  _push(`</section><section data-v-48433a6b>`);
  _push(ssrRenderComponent(_component_ProjectLogisticsImagesSlider, null, null, _parent));
  _push(`</section><section class="project-logistics-stats" data-v-48433a6b>`);
  _push(ssrRenderComponent(_component_SharedKeyIndicators, {
    title: _ctx.$texts.keyIndicators,
    "in-services": true
  }, null, _parent));
  _push(`</section><section class="project-logistics-projects" data-v-48433a6b>`);
  _push(ssrRenderComponent(_component_HomeCompanyProjects, { "in-services": true }, null, _parent));
  _push(`</section><section class="project-logistics-calculator" style="${ssrRenderStyle($options.bottomBackground)}" data-v-48433a6b><h2 data-v-48433a6b>${ssrInterpolate(_ctx.$texts.ourTask)}<span data-v-48433a6b>${ssrInterpolate(_ctx.$texts.ourGoal)}</span></h2><div class="calculator__back-blur" data-v-48433a6b>`);
  _push(ssrRenderComponent(_component_SharedDeliveryCalculator, null, null, _parent));
  _push(ssrRenderComponent(_component_IconsCompanyLogo, { class: "logo" }, null, _parent));
  _push(`</div>`);
  _push(ssrRenderComponent(_component_SharedServicesLinks, { class: "other" }, null, _parent));
  _push(`</section></main>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/services/project-logistics.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const projectLogistics = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-48433a6b"]]);

export { projectLogistics as default };
//# sourceMappingURL=project-logistics-7fb3fde8.mjs.map
