import { _ as __nuxt_component_0$2 } from './BreadCrumbs-7a67b271.mjs';
import { useSSRContext, mergeProps, withCtx, createVNode, openBlock, createBlock, Fragment, renderList } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderClass } from 'vue/server-renderer';
import { _ as _export_sfc, u as useNuxtApp, a as useHead } from '../server.mjs';
import { _ as __nuxt_component_1$2 } from './CompanyLogo-fae8444b.mjs';
import { u as useImage } from './composables-5d51eb10.mjs';
import { _ as __nuxt_component_0$1 } from './ReturnCallForm-aea0d31d.mjs';
import { _ as __nuxt_component_4$1 } from './KeyIndicators-1e584f96.mjs';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { _ as __nuxt_component_0$3 } from './nuxt-img-6da1c54a.mjs';
import { _ as __nuxt_component_3 } from './SwiperControls-e2965511.mjs';
import { _ as __nuxt_component_5 } from './CompanyProjects-3b587959.mjs';
import { _ as __nuxt_component_1$1 } from './ServicesLinks-af51bc72.mjs';
import { u as useServerHead } from './internalLinks-dc4e1b80.mjs';
import { b as useTheme } from './state-06d22502.mjs';
import './nuxt-link-0d39ff03.mjs';
import 'ufo';
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
import 'maska';
import './validate-e4070f14.mjs';
import './expand-29e2e84d.mjs';
import '../../handlers/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import './ArrowLeft-dd643b18.mjs';
import './ArrowRight-4312bfbb.mjs';
import './LinkUnderline-05508d8a.mjs';
import './ProjectsItem-93537194.mjs';
import './transformDate-3029d144.mjs';
import 'dayjs';
import './servicesList-d8a4a1b3.mjs';

const _sfc_main$3 = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  const _component_SharedBreadCrumbs = __nuxt_component_0$2;
  _push(`<header${ssrRenderAttrs(mergeProps({ class: "rental-header" }, _attrs))} data-v-26accc62>`);
  _push(ssrRenderComponent(_component_SharedBreadCrumbs, { class: "breadcrumbs" }, null, _parent));
  _push(`<h1 data-v-26accc62>${ssrInterpolate(_ctx.$texts.rentalContainersTitle)}</h1><h5 data-v-26accc62>${ssrInterpolate(_ctx.$texts.rentalContainersNote)}</h5></header>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ArendaKonteynerov/MainHeader.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3], ["__scopeId", "data-v-26accc62"]]);
const containersTypes = [
  {
    name: "20DC",
    index: 0
  },
  {
    name: "20HC PW",
    index: 1
  },
  {
    name: "40HC",
    index: 2
  },
  {
    name: "40HC PW",
    index: 3
  }
];
const containersStatsLabels = [
  {
    label: "\u0414\u043B\u0438\u043D\u0430",
    key: "length"
  },
  {
    label: "\u0428\u0438\u0440\u0438\u043D\u0430",
    key: "width"
  },
  {
    label: "\u0412\u044B\u0441\u043E\u0442\u0430",
    key: "height"
  },
  {
    label: "\u041F\u043B\u043E\u0449\u0430\u0434\u044C",
    key: "area"
  },
  {
    label: "\u041E\u0431\u044A\u0435\u043C",
    key: "volume"
  },
  {
    label: "\u041C\u0430\u043A\u0441. \u0433\u0440\u0443\u0437\u043E\u043F\u043E\u0434\u044A\u0435\u043C\u043D\u043E\u0441\u0442\u044C",
    key: "payload"
  },
  {
    label: "\u0428\u0438\u0440\u0438\u043D\u0430 \u0434\u0432\u0435\u0440\u043D\u043E\u0433\u043E \u043F\u0440\u043E\u0435\u043C\u0430",
    key: "doorsWidth"
  },
  {
    label: "\u0412\u044B\u0441\u043E\u0442\u0430 \u0434\u0432\u0435\u0440\u043D\u043E\u0433\u043E \u043F\u0440\u043E\u0435\u043C\u0430",
    key: "doorsHeight"
  },
  {
    label: "\u041A\u043E\u043B-\u0432\u043E \u043F\u0430\u043B\u043B\u0435\u0442, \u0415\u0432\u0440\u043E",
    key: "palletsEuro"
  },
  {
    label: "\u041A\u043E\u043B-\u0432\u043E \u043F\u0430\u043B\u043B\u0435\u0442, \u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442",
    key: "palletsStandard"
  }
];
const containersStatsValues = [
  {
    length: "5 898 \u043C\u043C",
    width: "2 352 \u043C\u043C",
    height: "2 393 \u043C\u043C",
    area: "13,9 \u043C2",
    volume: "33,2 \u043A\u0443\u0431",
    payload: "28 360 \u043A\u0433",
    doorsWidth: "2 336 \u043C\u043C",
    doorsHeight: "2 291 \u043C\u043C",
    palletsEuro: "11 \u0448\u0442",
    palletsStandard: "9 \u0448\u0442",
    img: "container_small.jpg",
    price: "10 000 \u20BD"
  },
  {
    length: "5 922 \u043C\u043C",
    width: "2 418 \u043C\u043C",
    height: "2 689 \u043C\u043C",
    area: "14,3 \u043C2",
    volume: "38,5 \u043A\u0443\u0431",
    payload: "27 790 \u043A\u0433",
    doorsWidth: "2 400 \u043C\u043C",
    doorsHeight: "2 585 \u043C\u043C",
    palletsEuro: "14 \u0448\u0442",
    palletsStandard: "11 \u0448\u0442",
    img: "container_small.jpg",
    price: "12 000 \u20BD"
  },
  {
    length: "12 922 \u043C\u043C",
    width: "2 352 \u043C\u043C",
    height: "2 689 \u043C\u043C",
    area: "28,3 \u043C2",
    volume: "76,4 \u043A\u0443\u0431",
    payload: "28 800 \u043A\u0433",
    doorsWidth: "2 340 \u043C\u043C",
    doorsHeight: "2 285 \u043C\u043C",
    palletsEuro: "24 \u0448\u0442",
    palletsStandard: "21 \u0448\u0442",
    img: "container_large.jpg",
    price: "15 000 \u20BD"
  },
  {
    length: "12 898 \u043C\u043C",
    width: "2 422 \u043C\u043C",
    height: "2 692 \u043C\u043C",
    area: "29,3 \u043C2",
    volume: "78,9 \u043A\u0443\u0431",
    payload: "29 600 \u043A\u0433",
    doorsWidth: "2 396 \u043C\u043C",
    doorsHeight: "2 584 \u043C\u043C",
    palletsEuro: "30 \u0448\u0442",
    palletsStandard: "24 \u0448\u0442",
    img: "container_large.jpg",
    price: "18 000 \u20BD"
  }
];
const _sfc_main$2 = {
  data() {
    return {
      currentIndex: 0
    };
  },
  computed: {
    controlBtnsData() {
      return containersTypes;
    },
    currentContainerData() {
      return containersStatsValues[this.currentIndex];
    },
    currentContainerTableData() {
      return containersStatsLabels.map((item) => ({
        label: item.label,
        value: this.currentContainerData[item.key]
      }));
    },
    img() {
      const $img = useImage();
      const imgUrl = $img(
        `images/rental_containers/${this.currentContainerData.img}`,
        {
          format: "webp",
          preload: true
        }
      );
      return {
        backgroundImage: `url('${imgUrl}')`
      };
    }
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_IconsCompanyLogo = __nuxt_component_1$2;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "containers-stats" }, _attrs))} data-v-d2abbfb3>`);
  _push(ssrRenderComponent(_component_IconsCompanyLogo, {
    class: "logo",
    alt: _ctx.$texts.companyNameSeo
  }, null, _parent));
  _push(`<div class="controls" data-v-d2abbfb3><!--[-->`);
  ssrRenderList($options.controlBtnsData, (container, i) => {
    _push(`<button class="${ssrRenderClass({ btn_active: container.index === $data.currentIndex })}" data-v-d2abbfb3>${ssrInterpolate(container.name)}</button>`);
  });
  _push(`<!--]--></div><div class="body" data-v-d2abbfb3><div class="image-conainer" style="${ssrRenderStyle($options.img)}" data-v-d2abbfb3></div><div class="stats" data-v-d2abbfb3><h3 data-v-d2abbfb3>${ssrInterpolate(_ctx.$texts.containerStats)}</h3><div class="table" data-v-d2abbfb3><!--[-->`);
  ssrRenderList($options.currentContainerTableData, (item, i) => {
    _push(`<div class="table-item" data-v-d2abbfb3><span class="table-item__label" data-v-d2abbfb3>${ssrInterpolate(item.label)}</span><span class="table-item__line" data-v-d2abbfb3>${ssrInterpolate(_ctx.$texts.leadingDots)}</span><span class="table-item__value" data-v-d2abbfb3>${ssrInterpolate(item.value)}</span></div>`);
  });
  _push(`<!--]--></div><div class="bottom" data-v-d2abbfb3><span class="price" data-v-d2abbfb3>${ssrInterpolate(_ctx.$texts.monthlyRent + $options.currentContainerData.price)}</span><p class="delivery-note" data-v-d2abbfb3>${ssrInterpolate(_ctx.$texts.rentalContainerDeliveryNote)}</p></div></div></div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ArendaKonteynerov/ContainersStats.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-d2abbfb3"]]);
const _sfc_main$1 = {
  computed: {
    imgList() {
      const path = "images/rental_containers/";
      return [
        path + "swiper_img_1.jpg",
        path + "swiper_img_2.jpg",
        path + "swiper_img_3.jpg",
        path + "swiper_img_4.jpg"
      ];
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Swiper = Swiper;
  const _component_SwiperSlide = SwiperSlide;
  const _component_nuxt_img = __nuxt_component_0$3;
  const _component_ArendaKonteynerovSwiperControls = __nuxt_component_3;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "containers-swiper" }, _attrs))} data-v-0930dd5f><h2 data-v-0930dd5f>${ssrInterpolate(_ctx.$texts.rentalContainersSwiperTitle)}</h2>`);
  _push(ssrRenderComponent(_component_Swiper, {
    loop: "",
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 8
      },
      500: {
        slidesPerView: 3,
        spaceBetween: 8
      },
      700: {
        slidesPerView: 4,
        spaceBetween: 18
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 32
      }
    }
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<!--[-->`);
        ssrRenderList(2, (n) => {
          _push2(`<!--[--><!--[-->`);
          ssrRenderList($options.imgList, (img, i) => {
            _push2(ssrRenderComponent(_component_SwiperSlide, {
              key: i,
              class: "slide"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="slide-img-container" data-v-0930dd5f${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_nuxt_img, {
                    src: img,
                    format: "webp",
                    alt: _ctx.$texts.containers + _ctx.$texts.companyNameSeo
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "slide-img-container" }, [
                      createVNode(_component_nuxt_img, {
                        src: img,
                        format: "webp",
                        alt: _ctx.$texts.containers + _ctx.$texts.companyNameSeo
                      }, null, 8, ["src", "alt"])
                    ])
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          });
          _push2(`<!--]--><!--]-->`);
        });
        _push2(`<!--]-->`);
        _push2(ssrRenderComponent(_component_ArendaKonteynerovSwiperControls, null, null, _parent2, _scopeId));
      } else {
        return [
          (openBlock(), createBlock(Fragment, null, renderList(2, (n) => {
            return openBlock(), createBlock(Fragment, { key: n }, [
              (openBlock(true), createBlock(Fragment, null, renderList($options.imgList, (img, i) => {
                return openBlock(), createBlock(_component_SwiperSlide, {
                  key: i,
                  class: "slide"
                }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "slide-img-container" }, [
                      createVNode(_component_nuxt_img, {
                        src: img,
                        format: "webp",
                        alt: _ctx.$texts.containers + _ctx.$texts.companyNameSeo
                      }, null, 8, ["src", "alt"])
                    ])
                  ]),
                  _: 2
                }, 1024);
              }), 128))
            ], 64);
          }), 64)),
          createVNode(_component_ArendaKonteynerovSwiperControls)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ArendaKonteynerov/ContainersSwiper.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-0930dd5f"]]);
const _sfc_main = {
  setup() {
    const { $texts } = useNuxtApp();
    useHead({
      title: $texts.rentalContainersTitle
    });
    useServerHead({
      meta: [
        { property: "og:title", content: $texts.rentalContainersTitle },
        { name: "description", content: $texts.seoRentalContainersDescription },
        { property: "og:description", content: $texts.seoRentalContainersDescription },
        { name: "keywords", content: $texts.seoKeywordsBase + $texts.seoRentalContainersKeywords }
      ]
    });
    const isWhiteTheme = useTheme();
    return {
      isWhiteTheme
    };
  },
  computed: {
    bgImg() {
      const { $texts } = useNuxtApp();
      const $img = useImage();
      const imgUrl = $img("images/main_background.png", {
        format: "webp",
        preload: true,
        quality: 100,
        alt: $texts.seoMainAlt
      });
      return imgUrl;
    },
    background() {
      const imgUrl = this.bgImg;
      return {
        backgroundImage: `url('${imgUrl}')`
      };
    },
    bottomBackground() {
      if (this.isWhiteTheme)
        return "";
      const imgUrl = this.bgImg;
      return {
        backgroundImage: `linear-gradient(180deg, #1B1B1F 2.74%, rgba(20, 20, 23, 0.829382) 33.51%, rgba(0, 0, 0, 0.61) 72.08%), url('${imgUrl}')`
      };
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ArendaKonteynerovMainHeader = __nuxt_component_0;
  const _component_ArendaKonteynerovContainersStats = __nuxt_component_1;
  const _component_SharedReturnCallForm = __nuxt_component_0$1;
  const _component_SharedKeyIndicators = __nuxt_component_4$1;
  const _component_ArendaKonteynerovContainersSwiper = __nuxt_component_4;
  const _component_HomeCompanyProjects = __nuxt_component_5;
  const _component_SharedServicesLinks = __nuxt_component_1$1;
  _push(`<main${ssrRenderAttrs(_attrs)} data-v-e52270aa><section data-v-e52270aa><div style="${ssrRenderStyle($options.background)}" class="bg rent-bg" data-v-e52270aa></div>`);
  _push(ssrRenderComponent(_component_ArendaKonteynerovMainHeader, null, null, _parent));
  _push(`</section><section data-v-e52270aa>`);
  _push(ssrRenderComponent(_component_ArendaKonteynerovContainersStats, null, null, _parent));
  _push(`</section><section class="form-section" data-v-e52270aa>`);
  _push(ssrRenderComponent(_component_SharedReturnCallForm, {
    title: _ctx.$texts.rentalContainersFormTitle,
    modal: false,
    "rental-containers": true,
    "sumbit-btn-text": _ctx.$texts.requestPriceCalculation
  }, null, _parent));
  _push(`</section><section data-v-e52270aa>`);
  _push(ssrRenderComponent(_component_SharedKeyIndicators, {
    title: _ctx.$texts.keyIndicators,
    "in-services": true
  }, null, _parent));
  _push(`</section><section data-v-e52270aa>`);
  _push(ssrRenderComponent(_component_ArendaKonteynerovContainersSwiper, null, null, _parent));
  _push(`</section><section class="projects-section" data-v-e52270aa><div style="${ssrRenderStyle($options.bottomBackground)}" class="bg bottom-bg" data-v-e52270aa></div>`);
  _push(ssrRenderComponent(_component_HomeCompanyProjects, { "in-services": true }, null, _parent));
  _push(ssrRenderComponent(_component_SharedServicesLinks, { class: "other" }, null, _parent));
  _push(`</section></main>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/services/arenda-konteynerov.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const arendaKonteynerov = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-e52270aa"]]);

export { arendaKonteynerov as default };
//# sourceMappingURL=arenda-konteynerov-002b7f64.mjs.map
