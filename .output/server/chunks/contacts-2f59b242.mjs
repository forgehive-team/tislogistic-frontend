import { _ as __nuxt_component_0$2 } from './BreadCrumbs-7a67b271.mjs';
import { _ as __nuxt_component_0$3 } from './CitySlider-5181d92e.mjs';
import { useSSRContext, ref, computed, toRaw, unref, onMounted, mergeProps, withCtx, createVNode, openBlock, createBlock, createCommentVNode, toDisplayString, Fragment, renderList, createTextVNode, defineComponent, createElementBlock } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrRenderStyle, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _export_sfc, u as useNuxtApp, a as useHead } from './server.mjs';
import { u as useImage } from './composables-5d51eb10.mjs';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { _ as __nuxt_component_0$4 } from './LinkUnderline-05508d8a.mjs';
import { _ as __nuxt_component_0$5 } from './nuxt-img-6da1c54a.mjs';
import { _ as __nuxt_component_1 } from './DeliveryCalculator-288af09b.mjs';
import { _ as __nuxt_component_1$1 } from './CompanyLogo-fae8444b.mjs';
import { u as useServerHead } from './internalLinks-dc4e1b80.mjs';
import './nuxt-link-0d39ff03.mjs';
import 'ufo';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'vue-router';
import 'h3';
import 'defu';
import './node-server.mjs';
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
import './renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'maska';
import './expand-29e2e84d.mjs';
import './state-06d22502.mjs';
import './validate-e4070f14.mjs';

const __nuxt_component_0$1 = /* @__PURE__ */ defineComponent({
  name: "ClientOnly",
  inheritAttrs: false,
  // eslint-disable-next-line vue/require-prop-types
  props: ["fallback", "placeholder", "placeholderTag", "fallbackTag"],
  setup(_, { slots, attrs }) {
    const mounted = ref(false);
    return (props) => {
      var _a;
      if (mounted.value) {
        return (_a = slots.default) == null ? void 0 : _a.call(slots);
      }
      const slot = slots.fallback || slots.placeholder;
      if (slot) {
        return slot();
      }
      const fallbackStr = props.fallback || props.placeholder || "";
      const fallbackTag = props.fallbackTag || props.placeholderTag || "span";
      return createElementBlock(fallbackTag, attrs, fallbackStr);
    };
  }
});
const _sfc_main$5 = {
  __name: "YandexMap",
  __ssrInlineRender: true,
  props: ["coordinates"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_client_only = __nuxt_component_0$1;
      _push(ssrRenderComponent(_component_client_only, _attrs, {}, _parent));
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Contacts/YandexMap.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_0 = _sfc_main$5;
const _sfc_main$4 = {
  __name: "BranchInfo",
  __ssrInlineRender: true,
  props: ["data"],
  setup(__props) {
    const props = __props;
    const { $texts } = useNuxtApp();
    const showMap = ref(false);
    onMounted(() => {
      setTimeout(() => {
        showMap.value = true;
      }, 1e3);
    });
    const fields = [
      {
        label: $texts.phone,
        ref: "phone_number"
      },
      {
        label: $texts.address,
        ref: "address"
      },
      {
        label: $texts.workingHours,
        ref: "schedule"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ContactsYandexMap = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "branch-info" }, _attrs))} data-v-a956898c><div class="info" data-v-a956898c><!--[-->`);
      ssrRenderList(fields, (item, i) => {
        _push(`<div class="item" data-v-a956898c><p class="label" data-v-a956898c>${ssrInterpolate(item.label)}</p><p class="${ssrRenderClass([i < 1 && "value_bold", "value"])}" data-v-a956898c>${ssrInterpolate(props.data[item.ref])}</p></div>`);
      });
      _push(`<!--]--></div>`);
      if (unref(showMap)) {
        _push(`<div class="map" data-v-a956898c>`);
        _push(ssrRenderComponent(_component_ContactsYandexMap, {
          coordinates: props.data.coordinates
        }, null, _parent));
        _push(`<div data-v-a956898c><h3 data-v-a956898c>${ssrInterpolate(props.data.coords)}</h3></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Contacts/BranchInfo.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-a956898c"]]);
const _sfc_main$3 = {
  __name: "CeoQuote",
  __ssrInlineRender: true,
  setup(__props) {
    const $img = useImage();
    const ceoImgUrl = $img("images/ceo.png");
    const ceoPhoto = `background-image: url('${ceoImgUrl}')`;
    const deputyImgUrl = $img("images/deputy_ceo.png");
    const deputyPhoto = `background-image: url('${deputyImgUrl}')`;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "ceo-wrapper" }, _attrs))} data-v-203f276c><div class="ceo-container" data-v-203f276c><div class="photo-container photo-container_ceo" style="${ssrRenderStyle(ceoPhoto)}" data-v-203f276c><div class="person" data-v-203f276c><p class="name" data-v-203f276c>${ssrInterpolate(_ctx.$texts.ceoName)}</p><p class="ceo" data-v-203f276c>${ssrInterpolate(_ctx.$texts.ceo)}</p></div></div><div class="text-container" data-v-203f276c><p class="quote" data-v-203f276c>${ssrInterpolate(_ctx.$texts.ceoQuote)}</p><div class="mobile-only mobile-content" data-v-203f276c><div class="photo-container" style="${ssrRenderStyle(ceoPhoto)}" data-v-203f276c></div><p class="name" data-v-203f276c>${ssrInterpolate(_ctx.$texts.ceoName)}</p><p class="ceo" data-v-203f276c>${ssrInterpolate(_ctx.$texts.ceo)}</p></div></div></div><div class="ceo-container ceo-container_deputy" data-v-203f276c><div class="photo-container photo-container_deputy" style="${ssrRenderStyle(deputyPhoto)}" data-v-203f276c><div class="person" data-v-203f276c><p class="name" data-v-203f276c>${ssrInterpolate(_ctx.$texts.deputyCeoName)}</p><p class="ceo" data-v-203f276c>${ssrInterpolate(_ctx.$texts.deputyCeo)}</p></div></div></div></div>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Contacts/CeoQuote.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-203f276c"]]);
const _sfc_main$2 = {
  __name: "AdministrationSlider",
  __ssrInlineRender: true,
  props: ["data"],
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Swiper = Swiper;
      const _component_SwiperSlide = SwiperSlide;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "administration" }, _attrs))} data-v-e262988c><h2 data-v-e262988c>${ssrInterpolate(_ctx.$texts.branchAdministration)}</h2>`);
      _push(ssrRenderComponent(_component_Swiper, {
        class: "swiper",
        "slides-per-view": "auto",
        breakpoints: {
          320: {
            spaceBetween: 12
          },
          768: {
            spaceBetween: 12
          },
          1248: {
            spaceBetween: 16
          }
        }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(props.data, (item, i) => {
              _push2(ssrRenderComponent(_component_SwiperSlide, {
                key: i,
                class: "slide"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="slide-content" data-v-e262988c${_scopeId2}><div class="img-container" data-v-e262988c${_scopeId2}>`);
                    if (item.image) {
                      _push3(`<img${ssrRenderAttr("src", item.image)} data-v-e262988c${_scopeId2}>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`</div><p class="name" data-v-e262988c${_scopeId2}>${ssrInterpolate(item.name)}</p><p class="position" data-v-e262988c${_scopeId2}>${ssrInterpolate(item.position)}</p></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "slide-content" }, [
                        createVNode("div", { class: "img-container" }, [
                          item.image ? (openBlock(), createBlock("img", {
                            key: 0,
                            src: item.image
                          }, null, 8, ["src"])) : createCommentVNode("", true)
                        ]),
                        createVNode("p", { class: "name" }, toDisplayString(item.name), 1),
                        createVNode("p", { class: "position" }, toDisplayString(item.position), 1)
                      ])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(props.data, (item, i) => {
                return openBlock(), createBlock(_component_SwiperSlide, {
                  key: i,
                  class: "slide"
                }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "slide-content" }, [
                      createVNode("div", { class: "img-container" }, [
                        item.image ? (openBlock(), createBlock("img", {
                          key: 0,
                          src: item.image
                        }, null, 8, ["src"])) : createCommentVNode("", true)
                      ]),
                      createVNode("p", { class: "name" }, toDisplayString(item.name), 1),
                      createVNode("p", { class: "position" }, toDisplayString(item.position), 1)
                    ])
                  ]),
                  _: 2
                }, 1024);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Contacts/AdministrationSlider.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-e262988c"]]);
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_HomeLinkUnderline = __nuxt_component_0$4;
  const _component_nuxt_img = __nuxt_component_0$5;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "telegram" }, _attrs))} data-v-bc5eda65><h2 data-v-bc5eda65>${ssrInterpolate(_ctx.$texts.telegramTitle)}</h2><p data-v-bc5eda65>${ssrInterpolate(_ctx.$texts.telegramDescription)}</p>`);
  _push(ssrRenderComponent(_component_HomeLinkUnderline, {
    to: _ctx.$texts.telegramLink,
    blank: true
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate(_ctx.$texts.goToTelegram)}`);
      } else {
        return [
          createTextVNode(toDisplayString(_ctx.$texts.goToTelegram), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_nuxt_img, {
    src: "images/telegram.png",
    format: "webp",
    quality: "100"
  }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Contacts/TelegramChannel.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-bc5eda65"]]);
const _sfc_main = {
  __name: "contacts",
  __ssrInlineRender: true,
  setup(__props) {
    const { $texts } = useNuxtApp();
    useHead({
      title: $texts.contacts
    });
    useServerHead({
      meta: [
        { property: "og:title", content: $texts.contacts },
        { name: "keywords", content: $texts.seoHomeKeywords + $texts.seoKeywordsBase }
      ]
    });
    const data = ref(null);
    const activeCityId = ref(1);
    const changeCity = (id) => {
      activeCityId.value = id;
    };
    const activeCity = computed(() => {
      return data.value ? toRaw(data.value).find((obj) => obj.id === activeCityId.value) : null;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SharedBreadCrumbs = __nuxt_component_0$2;
      const _component_ContactsCitySlider = __nuxt_component_0$3;
      const _component_ContactsBranchInfo = __nuxt_component_2;
      const _component_ContactsCeoQuote = __nuxt_component_3;
      const _component_ContactsAdministrationSlider = __nuxt_component_4;
      const _component_ContactsTelegramChannel = __nuxt_component_5;
      const _component_SharedDeliveryCalculator = __nuxt_component_1;
      const _component_IconsCompanyLogo = __nuxt_component_1$1;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-ae861809><section data-v-ae861809><div class="bg white-theme-only gradient-bg" data-v-ae861809></div>`);
      _push(ssrRenderComponent(_component_SharedBreadCrumbs, { class: "breadcrumbs" }, null, _parent));
      _push(`<h1 data-v-ae861809>${ssrInterpolate(unref($texts).contacts)}</h1></section><section class="city-slider" data-v-ae861809>`);
      if (unref(data)) {
        _push(ssrRenderComponent(_component_ContactsCitySlider, {
          "active-city-id": unref(activeCityId),
          cities: unref(data),
          onPickCity: changeCity
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</section><section class="branch-info" data-v-ae861809>`);
      if (unref(activeCity)) {
        _push(ssrRenderComponent(_component_ContactsBranchInfo, { data: unref(activeCity) }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</section>`);
      if (unref(activeCity) && unref(activeCity).is_major_branch) {
        _push(`<section data-v-ae861809><h2 data-v-ae861809>${ssrInterpolate(unref($texts).companyAdministration)}</h2>`);
        _push(ssrRenderComponent(_component_ContactsCeoQuote, { class: "ceo-quote" }, null, _parent));
        _push(`</section>`);
      } else if (unref(data) && unref(activeCity).employees.length) {
        _push(`<section class="administration" data-v-ae861809>`);
        _push(ssrRenderComponent(_component_ContactsAdministrationSlider, {
          data: unref(activeCity).employees
        }, null, _parent));
        _push(`</section>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<section data-v-ae861809>`);
      _push(ssrRenderComponent(_component_ContactsTelegramChannel, null, null, _parent));
      _push(`</section><section data-v-ae861809><div class="calculator__back-blur" data-v-ae861809>`);
      _push(ssrRenderComponent(_component_SharedDeliveryCalculator, null, null, _parent));
      _push(ssrRenderComponent(_component_IconsCompanyLogo, { class: "logo" }, null, _parent));
      _push(`</div></section></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contacts.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const contacts = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-ae861809"]]);

export { contacts as default };
//# sourceMappingURL=contacts-2f59b242.mjs.map
