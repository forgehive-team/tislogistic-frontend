import { _ as __nuxt_component_0$2 } from './BreadCrumbs-51af2094.mjs';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { _ as __nuxt_component_3$1 } from './SwiperControls-8bb386b1.mjs';
import { _ as __nuxt_component_0$3 } from './FullScreenImg-6689124a.mjs';
import { useSSRContext, mergeProps, unref, ref, withCtx, createVNode, openBlock, createBlock, Fragment, renderList } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _export_sfc, u as useNuxtApp } from '../server.mjs';
import { _ as __nuxt_component_0$1 } from './ProjectsItem-93537194.mjs';
import { t as transformDate } from './transformDate-c9f9e569.mjs';
import { u as useCalculatorPopup, a as useReturnCallModal } from './state-06d22502.mjs';
import { _ as _imports_0 } from './expand-29e2e84d.mjs';

const _sfc_main$3 = {
  __name: "ImagesSwiper",
  __ssrInlineRender: true,
  props: ["imgList"],
  setup(__props) {
    const props = __props;
    const fullScreenImgSrc = ref(null);
    const close = () => {
      fullScreenImgSrc.value = null;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Swiper = Swiper;
      const _component_SwiperSlide = SwiperSlide;
      const _component_ArendaKonteynerovSwiperControls = __nuxt_component_3$1;
      const _component_SharedFullScreenImg = __nuxt_component_0$3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "containers-swiper" }, _attrs))} data-v-b00afe0d>`);
      _push(ssrRenderComponent(_component_Swiper, {
        loop: "",
        breakpoints: {
          320: {
            slidesPerView: 1,
            spaceBetween: 8
          },
          400: {
            slidesPerView: 2,
            spaceBetween: 8
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 10
          }
        }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(2, (n) => {
              _push2(`<!--[--><!--[-->`);
              ssrRenderList(props.imgList, (img, i) => {
                _push2(ssrRenderComponent(_component_SwiperSlide, {
                  key: i,
                  class: "slide"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<div class="slide-img-container" data-v-b00afe0d${_scopeId2}><img${ssrRenderAttr("src", img)} data-v-b00afe0d${_scopeId2}></div>`);
                    } else {
                      return [
                        createVNode("div", {
                          class: "slide-img-container",
                          onClick: ($event) => fullScreenImgSrc.value = img
                        }, [
                          createVNode("img", { src: img }, null, 8, ["src"])
                        ], 8, ["onClick"])
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
                  (openBlock(true), createBlock(Fragment, null, renderList(props.imgList, (img, i) => {
                    return openBlock(), createBlock(_component_SwiperSlide, {
                      key: i,
                      class: "slide"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", {
                          class: "slide-img-container",
                          onClick: ($event) => fullScreenImgSrc.value = img
                        }, [
                          createVNode("img", { src: img }, null, 8, ["src"])
                        ], 8, ["onClick"])
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
      if (unref(fullScreenImgSrc)) {
        _push(ssrRenderComponent(_component_SharedFullScreenImg, {
          img: unref(fullScreenImgSrc),
          onClose: close
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/News/ImagesSwiper.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-b00afe0d"]]);
const _sfc_main$2 = {
  __name: "StaticImages",
  __ssrInlineRender: true,
  props: ["images"],
  setup(__props) {
    const props = __props;
    const fullScreenImgSrc = ref(null);
    const close = () => {
      fullScreenImgSrc.value = null;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SharedFullScreenImg = __nuxt_component_0$3;
      _push(`<!--[--><div class="news__static-pictures" data-v-4dbcb49e><!--[-->`);
      ssrRenderList(props.images, (imgSrc, i) => {
        _push(`<div class="news__bottom-img-container" data-v-4dbcb49e><img${ssrRenderAttr("src", imgSrc)} data-v-4dbcb49e></div>`);
      });
      _push(`<!--]--></div>`);
      if (unref(fullScreenImgSrc)) {
        _push(ssrRenderComponent(_component_SharedFullScreenImg, {
          img: unref(fullScreenImgSrc),
          onClose: close
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/News/StaticImages.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-4dbcb49e"]]);
const __default__ = {
  props: {
    itemsList: {
      type: Array,
      required: true
    },
    isNews: {
      type: Boolean,
      required: true
    }
  },
  computed: {
    path() {
      return this.isNews ? "/news" : "/projects";
    }
  }
};
const _sfc_main$1 = /* @__PURE__ */ Object.assign(__default__, {
  __name: "OtherItems",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_HomeProjectsItem = __nuxt_component_0$1;
      if (__props.itemsList) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "projects__container" }, _attrs))} data-v-3fdcb84e><!--[-->`);
        ssrRenderList(__props.itemsList, (item, i) => {
          _push(ssrRenderComponent(_component_HomeProjectsItem, {
            key: i,
            title: item.title,
            text: item.short_description,
            date: unref(transformDate)(item.published_at),
            link: "/" + item.slug,
            path: _ctx.path
          }, null, _parent));
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/News/OtherItems.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-3fdcb84e"]]);
const _sfc_main = {
  props: {
    data: {
      type: Object,
      required: true
    },
    isNews: {
      type: Boolean,
      required: true
    }
  },
  setup() {
    const calculatorPopupShown = useCalculatorPopup();
    const returnCallShown = useReturnCallModal();
    return {
      calculatorPopupShown,
      returnCallShown
    };
  },
  computed: {
    processedDate() {
      return transformDate(this.data.published_at);
    },
    otherItemsTitle() {
      const { $texts } = useNuxtApp();
      return this.isNews ? $texts.otherNews : $texts.otherProjects;
    }
  },
  methods: {
    scrollToTop() {
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  var _a, _b;
  const _component_SharedBreadCrumbs = __nuxt_component_0$2;
  const _component_NewsImagesSwiper = __nuxt_component_1;
  const _component_NewsStaticImages = __nuxt_component_2;
  const _component_NewsOtherItems = __nuxt_component_3;
  _push(`<!--[-->`);
  if ($props.data) {
    _push(`<section class="news__top">`);
    _push(ssrRenderComponent(_component_SharedBreadCrumbs, {
      class: "news__breadcrumbs",
      "reactive-label": $props.data.title
    }, null, _parent));
    _push(`<div class="bg gradient-bg white-theme-only"></div><div class="news__main-content"><p class="news__date">${ssrInterpolate($options.processedDate)}</p><h1 class="news__title">${ssrInterpolate($props.data.title)}</h1><p class="news__short-description">${ssrInterpolate($props.data.short_description)}</p>`);
    if ($props.data.main_image) {
      _push(`<img class="news__main-img"${ssrRenderAttr("src", $props.data.main_image)}${ssrRenderAttr("alt", $props.data.title + _ctx.$texts.companyNameSeo)}>`);
    } else {
      _push(`<!---->`);
    }
    _push(`<div class="news__description">${$props.data.description}</div>`);
    if ($props.data.has_request_button || $props.data.has_callback_button) {
      _push(`<div class="news__action_btns">`);
      if ($props.data.has_request_button) {
        _push(`<button class="calculate-btn">${ssrInterpolate($props.data.request_button_text)}</button>`);
      } else {
        _push(`<!---->`);
      }
      if ($props.data.has_callback_button) {
        _push(`<button class="return-call-btn">${ssrInterpolate($props.data.callback_button_text)}</button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    } else {
      _push(`<!---->`);
    }
    if ($props.data.bottom_body) {
      _push(`<div class="news__description">${$props.data.bottom_body}</div>`);
    } else {
      _push(`<!---->`);
    }
    if ($props.data.images.length) {
      _push(`<!--[-->`);
      if ($props.data.images.length > 2) {
        _push(ssrRenderComponent(_component_NewsImagesSwiper, {
          class: "news__swiper",
          "img-list": $props.data.images
        }, null, _parent));
      } else {
        _push(ssrRenderComponent(_component_NewsStaticImages, {
          images: $props.data.images
        }, null, _parent));
      }
      _push(`<!--]-->`);
    } else {
      _push(`<!---->`);
    }
    _push(`</div></section>`);
  } else {
    _push(`<!---->`);
  }
  if ((_a = $props.data) == null ? void 0 : _a.other_items.length) {
    _push(`<section class="news__bottom"><h2 class="news__other-items-title">${ssrInterpolate($options.otherItemsTitle)}</h2>`);
    _push(ssrRenderComponent(_component_NewsOtherItems, {
      "items-list": (_b = $props.data) == null ? void 0 : _b.other_items,
      "is-news": $props.isNews
    }, null, _parent));
    _push(`<div class="news__btn-container"><button class="news__go-up-btn">${ssrInterpolate(_ctx.$texts.goUp)} <img${ssrRenderAttr("src", _imports_0)} alt=""></button></div></section>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/News/NewsPage.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { __nuxt_component_0 as _ };
//# sourceMappingURL=NewsPage-08b806e9.mjs.map
