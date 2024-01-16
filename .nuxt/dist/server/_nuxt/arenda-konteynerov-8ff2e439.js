import { _ as __nuxt_component_0$1 } from "./BreadCrumbs-7a67b271.js";
import { mergeProps, useSSRContext, withCtx, createVNode, openBlock, createBlock, Fragment, renderList } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrRenderStyle } from "vue/server-renderer";
import { _ as _export_sfc, u as useNuxtApp, a as useHead } from "../server.mjs";
import { _ as __nuxt_component_1$1 } from "./CompanyLogo-fae8444b.js";
import { u as useImage } from "./composables-5d51eb10.js";
import { _ as __nuxt_component_0$3 } from "./ReturnCallForm-c80b6bba.js";
import { _ as __nuxt_component_4$1 } from "./KeyIndicators-1e584f96.js";
import { Swiper, SwiperSlide } from "swiper/vue";
import { _ as __nuxt_component_0$2 } from "./nuxt-img-6da1c54a.js";
import { _ as __nuxt_component_3 } from "./SwiperControls-e2965511.js";
import { _ as __nuxt_component_5 } from "./CompanyProjects-3b587959.js";
import { _ as __nuxt_component_1$2 } from "./ServicesLinks-af51bc72.js";
import { u as useServerHead } from "./internalLinks-dc4e1b80.js";
import "destr";
import { c as useTheme } from "./state-06d22502.js";
import "./nuxt-link-0d39ff03.js";
import "ufo";
import "hookable";
import "ofetch";
import "#internal/nitro";
import "unctx";
/* empty css                     */import "vue-router";
import "h3";
import "defu";
import "maska";
import "./validate-e4070f14.js";
import "./expand-29e2e84d.js";
import "vue-countup-v3";
import "./ArrowLeft-dd643b18.js";
import "./ArrowRight-4312bfbb.js";
import "./LinkUnderline-05508d8a.js";
import "./ProjectsItem-93537194.js";
import "./transformDate-3029d144.js";
import "dayjs";
import "dayjs/locale/ru.js";
import "./servicesList-d8a4a1b3.js";
const MainHeader_scss_vue_type_style_index_0_src_26accc62_scoped_26accc62_lang = "";
const _sfc_main$3 = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  const _component_SharedBreadCrumbs = __nuxt_component_0$1;
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
    label: "Длина",
    key: "length"
  },
  {
    label: "Ширина",
    key: "width"
  },
  {
    label: "Высота",
    key: "height"
  },
  {
    label: "Площадь",
    key: "area"
  },
  {
    label: "Объем",
    key: "volume"
  },
  {
    label: "Макс. грузоподъемность",
    key: "payload"
  },
  {
    label: "Ширина дверного проема",
    key: "doorsWidth"
  },
  {
    label: "Высота дверного проема",
    key: "doorsHeight"
  },
  {
    label: "Кол-во паллет, Евро",
    key: "palletsEuro"
  },
  {
    label: "Кол-во паллет, Стандарт",
    key: "palletsStandard"
  }
];
const containersStatsValues = [
  {
    length: "5 898 мм",
    width: "2 352 мм",
    height: "2 393 мм",
    area: "13,9 м2",
    volume: "33,2 куб",
    payload: "28 360 кг",
    doorsWidth: "2 336 мм",
    doorsHeight: "2 291 мм",
    palletsEuro: "11 шт",
    palletsStandard: "9 шт",
    img: "container_small.jpg",
    price: "10 000 ₽"
  },
  {
    length: "5 922 мм",
    width: "2 418 мм",
    height: "2 689 мм",
    area: "14,3 м2",
    volume: "38,5 куб",
    payload: "27 790 кг",
    doorsWidth: "2 400 мм",
    doorsHeight: "2 585 мм",
    palletsEuro: "14 шт",
    palletsStandard: "11 шт",
    img: "container_small.jpg",
    price: "12 000 ₽"
  },
  {
    length: "12 922 мм",
    width: "2 352 мм",
    height: "2 689 мм",
    area: "28,3 м2",
    volume: "76,4 куб",
    payload: "28 800 кг",
    doorsWidth: "2 340 мм",
    doorsHeight: "2 285 мм",
    palletsEuro: "24 шт",
    palletsStandard: "21 шт",
    img: "container_large.jpg",
    price: "15 000 ₽"
  },
  {
    length: "12 898 мм",
    width: "2 422 мм",
    height: "2 692 мм",
    area: "29,3 м2",
    volume: "78,9 куб",
    payload: "29 600 кг",
    doorsWidth: "2 396 мм",
    doorsHeight: "2 584 мм",
    palletsEuro: "30 шт",
    palletsStandard: "24 шт",
    img: "container_large.jpg",
    price: "18 000 ₽"
  }
];
const ContainersStats_scss_vue_type_style_index_0_src_d2abbfb3_scoped_d2abbfb3_lang = "";
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
  const _component_IconsCompanyLogo = __nuxt_component_1$1;
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
const ContainersSwiper_scss_vue_type_style_index_0_src_646cc7b3_scoped_646cc7b3_lang = "";
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
  const _component_nuxt_img = __nuxt_component_0$2;
  const _component_ArendaKonteynerovSwiperControls = __nuxt_component_3;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "containers-swiper" }, _attrs))} data-v-646cc7b3><h2 data-v-646cc7b3>${ssrInterpolate(_ctx.$texts.rentalContainersSwiperTitle)}</h2>`);
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
                  _push3(`<div class="slide-img-container" data-v-646cc7b3${_scopeId2}>`);
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
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-646cc7b3"]]);
const ArendaKonteynerov_scss_vue_type_style_index_0_src_3af6cfbc_scoped_3af6cfbc_lang = "";
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
  const _component_SharedReturnCallForm = __nuxt_component_0$3;
  const _component_SharedKeyIndicators = __nuxt_component_4$1;
  const _component_ArendaKonteynerovContainersSwiper = __nuxt_component_4;
  const _component_HomeCompanyProjects = __nuxt_component_5;
  const _component_SharedServicesLinks = __nuxt_component_1$2;
  _push(`<main${ssrRenderAttrs(_attrs)} data-v-3af6cfbc><section data-v-3af6cfbc><div style="${ssrRenderStyle($options.background)}" class="bg rent-bg" data-v-3af6cfbc></div>`);
  _push(ssrRenderComponent(_component_ArendaKonteynerovMainHeader, null, null, _parent));
  _push(`</section><section data-v-3af6cfbc>`);
  _push(ssrRenderComponent(_component_ArendaKonteynerovContainersStats, null, null, _parent));
  _push(`</section><section class="form-section" data-v-3af6cfbc>`);
  _push(ssrRenderComponent(_component_SharedReturnCallForm, {
    title: _ctx.$texts.rentalContainersFormTitle,
    modal: false,
    "rental-containers": true,
    "sumbit-btn-text": _ctx.$texts.requestPriceCalculation
  }, null, _parent));
  _push(`</section><section data-v-3af6cfbc>`);
  _push(ssrRenderComponent(_component_SharedKeyIndicators, {
    title: _ctx.$texts.keyIndicators,
    "in-services": true
  }, null, _parent));
  _push(`</section><section data-v-3af6cfbc>`);
  _push(ssrRenderComponent(_component_ArendaKonteynerovContainersSwiper, null, null, _parent));
  _push(`</section><section class="projects-section" data-v-3af6cfbc><div style="${ssrRenderStyle($options.bottomBackground)}" class="bg bottom-bg" data-v-3af6cfbc></div>`);
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
const arendaKonteynerov = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-3af6cfbc"]]);
export {
  arendaKonteynerov as default
};
//# sourceMappingURL=arenda-konteynerov-8ff2e439.js.map
