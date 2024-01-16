import { u as useNuxtApp, a as useHead, i as useRuntimeConfig, b as useRouter, d as useSchemaOrg, k as defineWebSite, l as defineWebPage, _ as _export_sfc, f as useRoute } from "../server.mjs";
import { reactive, defineComponent, computed, useSSRContext, mergeProps, unref, withCtx, createVNode, resolveComponent, createTextVNode, toDisplayString, openBlock, createBlock, Fragment, renderList } from "vue";
import "destr";
import { t as titleCase, u as useServerHead, c as createInternalLinkResolver, r as resolveAbsoluteInternalLink } from "./internalLinks-dc4e1b80.js";
import { ssrRenderAttrs, ssrIncludeBooleanAttr, ssrLooseContain, ssrRenderAttr, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrRenderSlot } from "vue/server-renderer";
import { _ as __nuxt_component_0$1 } from "./nuxt-link-0d39ff03.js";
import { _ as __nuxt_component_1$2 } from "./ExpandArrow-c1187625.js";
import { c as useTheme, u as useCalculatorPopup, b as useReturnCallModal, a as useSuccessModal } from "./state-06d22502.js";
import { _ as __nuxt_component_1$1 } from "./CompanyLogo-fae8444b.js";
import { Collapse } from "vue-collapsed";
import { s as servicesList } from "./servicesList-d8a4a1b3.js";
import { _ as __nuxt_component_0$2, a as __nuxt_component_0$3 } from "./ReturnCallForm-c80b6bba.js";
import { _ as __nuxt_component_1$3 } from "./DeliveryCalculator-288af09b.js";
import "ofetch";
import "#internal/nitro";
import "hookable";
import "unctx";
/* empty css                     */import "vue-router";
import "h3";
import "ufo";
import "defu";
import "maska";
import "./validate-e4070f14.js";
import "./expand-29e2e84d.js";
function isObject(value) {
  return value !== null && typeof value === "object";
}
function _defu(baseObject, defaults, namespace = ".", merger) {
  if (!isObject(defaults)) {
    return _defu(baseObject, {}, namespace, merger);
  }
  const object = Object.assign({}, defaults);
  for (const key in baseObject) {
    if (key === "__proto__" || key === "constructor") {
      continue;
    }
    const value = baseObject[key];
    if (value === null || value === void 0) {
      continue;
    }
    if (merger && merger(object, key, value, namespace)) {
      continue;
    }
    if (Array.isArray(value) && Array.isArray(object[key])) {
      object[key] = [...value, ...object[key]];
    } else if (isObject(value) && isObject(object[key])) {
      object[key] = _defu(
        value,
        object[key],
        (namespace ? `${namespace}.` : "") + key.toString(),
        merger
      );
    } else {
      object[key] = value;
    }
  }
  return object;
}
function createDefu(merger) {
  return (...arguments_) => (
    // eslint-disable-next-line unicorn/no-array-reduce
    arguments_.reduce((p, c) => _defu(p, c, "", merger), {})
  );
}
const defuFn = createDefu((object, key, currentValue) => {
  if (typeof object[key] !== "undefined" && typeof currentValue === "function") {
    object[key] = currentValue(object[key]);
    return true;
  }
});
const inlineConfig = {};
const __appConfig = /* @__PURE__ */ defuFn(inlineConfig);
function useAppConfig() {
  const nuxtApp = useNuxtApp();
  if (!nuxtApp._appConfig) {
    nuxtApp._appConfig = reactive(__appConfig);
  }
  return nuxtApp._appConfig;
}
const robotsEnabledValue = "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1";
const robotsDisabledValue = "noindex, nofollow";
function defineRobotMeta() {
  {
    const nuxtApp = useNuxtApp();
    useHead({
      meta: [
        {
          name: "robots",
          content: () => {
            var _a, _b, _c, _d;
            const routeRules = (_d = (_c = (_b = (_a = nuxtApp == null ? void 0 : nuxtApp.ssrContext) == null ? void 0 : _a.event) == null ? void 0 : _b.context) == null ? void 0 : _c._nitro) == null ? void 0 : _d.routeRules;
            if (typeof routeRules.robots === "string")
              return routeRules.robots;
            return (routeRules == null ? void 0 : routeRules.index) === false ? robotsDisabledValue : robotsEnabledValue;
          }
        }
      ]
    }, { mode: "server" });
  }
}
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  __name: "SeoKit",
  __ssrInlineRender: true,
  props: {
    siteUrl: null,
    siteName: null,
    siteDescription: null,
    siteImage: null,
    titleSeparator: null,
    language: null
  },
  setup(__props) {
    const props = __props;
    const runtimeConfig = useRuntimeConfig().public;
    const appConfig = useAppConfig();
    const SeoKitPublicRuntimeConfigKeys = [
      "siteName",
      "siteDescription",
      "siteImage",
      "siteUrl",
      "titleSeparator",
      "trailingSlash",
      "language"
    ];
    const siteMeta = computed(() => {
      const runtimeConfigExtract = {};
      for (const k of SeoKitPublicRuntimeConfigKeys) {
        if (runtimeConfig[k])
          runtimeConfigExtract[k] = runtimeConfig[k];
      }
      const propExtract = {};
      for (const k of SeoKitPublicRuntimeConfigKeys) {
        if (props[k])
          propExtract[k] = props[k];
      }
      return {
        ...runtimeConfigExtract,
        // app config has the highest priority
        // @ts-expect-error untyped
        ...appConfig.site,
        ...propExtract
      };
    });
    const router = useRouter();
    const route = router.currentRoute;
    const resolveUrl = createInternalLinkResolver();
    function computeMeta() {
      var _a, _b, _c, _d, _e;
      const meta = [
        {
          property: "og:url",
          content: resolveUrl(((_a = route.value) == null ? void 0 : _a.path) || "/")
        },
        {
          property: "og:locale",
          content: siteMeta.value.language
        }
      ];
      if (siteMeta.value.siteName) {
        meta.push({
          property: "og:site_name",
          content: siteMeta.value.siteName
        });
      }
      let ogImage = ((_c = (_b = route.value) == null ? void 0 : _b.meta) == null ? void 0 : _c.image) || siteMeta.value.siteImage;
      if (typeof ogImage === "string") {
        if (ogImage.startsWith("/"))
          ogImage = resolveAbsoluteInternalLink(ogImage);
        meta.push({
          property: "og:image",
          content: ogImage
        });
      }
      const description = ((_e = (_d = route.value) == null ? void 0 : _d.meta) == null ? void 0 : _e.description) || siteMeta.value.siteDescription;
      if (description) {
        meta.push({
          name: "description",
          content: description
        });
      }
      return meta;
    }
    useHead({
      templateParams: {
        // @ts-expect-error untyped
        siteName: () => siteMeta.value.siteName,
        // @ts-expect-error untyped
        siteDescription: () => siteMeta.value.siteDescription,
        // @ts-expect-error untyped
        siteImage: () => siteMeta.value.siteImage,
        // @ts-expect-error untyped
        siteUrl: () => siteMeta.value.siteUrl,
        // @ts-expect-error untyped
        titleSeparator: () => siteMeta.value.titleSeparator,
        // @ts-expect-error untyped
        trailingSlash: () => siteMeta.value.trailingSlash,
        // @ts-expect-error untyped
        language: () => siteMeta.value.language
      },
      htmlAttrs: {
        lang: () => siteMeta.value.language
      },
      title: () => {
        var _a, _b, _c, _d, _e;
        if (typeof ((_b = (_a = route.value) == null ? void 0 : _a.meta) == null ? void 0 : _b.title) === "string")
          return (_d = (_c = route.value) == null ? void 0 : _c.meta) == null ? void 0 : _d.title;
        const path = ((_e = route.value) == null ? void 0 : _e.path) || "/";
        const lastSegment = path.split("/").pop();
        return lastSegment ? titleCase(lastSegment) : null;
      },
      link: [
        {
          rel: "canonical",
          href: () => {
            var _a;
            return resolveUrl(((_a = route.value) == null ? void 0 : _a.path) || "/");
          }
        }
      ],
      meta: computeMeta
    });
    useServerHead({
      meta: [
        {
          property: "og:type",
          content: "website"
        }
      ],
      link: [
        {
          rel: "profile",
          href: "https://gmpg.org/xfn/11"
        }
      ]
    });
    defineRobotMeta();
    useSchemaOrg([
      defineWebSite({
        name: () => {
          var _a;
          return ((_a = siteMeta.value) == null ? void 0 : _a.siteName) || "";
        },
        inLanguage: () => {
          var _a;
          return ((_a = siteMeta.value) == null ? void 0 : _a.language) || "";
        },
        description: () => {
          var _a;
          return ((_a = siteMeta.value) == null ? void 0 : _a.siteDescription) || "";
        }
      }),
      defineWebPage()
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}></div>`);
    };
  }
});
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/nuxt-seo-kit/components/SeoKit.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const _imports_0$3 = "" + __buildAssetsURL("sun.6778997c.svg");
const _imports_1$2 = "" + __buildAssetsURL("moon.4bc1f6d3.svg");
const ThemeSwitch_scss_vue_type_style_index_0_src_c8ecfa66_scoped_c8ecfa66_lang = "";
const _sfc_main$a = {
  __name: "ThemeSwitch",
  __ssrInlineRender: true,
  setup(__props) {
    const isWhiteTheme = useTheme();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<label${ssrRenderAttrs(mergeProps({ class: "switch" }, _attrs))} data-v-c8ecfa66><input${ssrIncludeBooleanAttr(Array.isArray(unref(isWhiteTheme)) ? ssrLooseContain(unref(isWhiteTheme), null) : unref(isWhiteTheme)) ? " checked" : ""} type="checkbox" data-v-c8ecfa66><span class="slider round" data-v-c8ecfa66></span><img class="sun"${ssrRenderAttr("src", _imports_0$3)} alt="" data-v-c8ecfa66><img class="moon"${ssrRenderAttr("src", _imports_1$2)} alt="" data-v-c8ecfa66></label>`);
    };
  }
};
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Shared/ThemeSwitch.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const __nuxt_component_2$1 = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["__scopeId", "data-v-c8ecfa66"]]);
const pathDictionary = {
  "/services/morskie-gruzoperevozki": "/services/sea-freight",
  "/services/zheleznodorozhnye-perevozki": "/services/railway-freight",
  "/services/avtomobilnye-perevozki": "/services/automobile-transportation",
  "/services/aviaperevozki": "/services/air-freight",
  "/services/arenda-konteynerov": "/services/rental-containers",
  "/services/tamozhennoe-oformlenie": "/services/customs-clearance",
  "/services/multimodalnye-perevozki": "/services/multimodal-transportation",
  "/services/vneshneekonomicheskaya-deyatelnost": "/services/foreign-economic-activity",
  "/tarify-na-tamozhennoe-oformlenie-gruzov": "/custom-clearance-tariffs",
  "/politika-konfidencialnosti": "/privacy-policy"
};
function translatePath(fullPath, isRus) {
  const [path, queryParams] = fullPath.split(/\?(.+)/);
  const targetPath = isRus ? pathDictionary[path] : getKeyByValue(pathDictionary, path);
  if (!targetPath) {
    return fullPath;
  }
  return queryParams ? targetPath + "?" + queryParams : targetPath;
}
function getKeyByValue(object, value) {
  return Object.keys(object).find((key) => object[key] === value);
}
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "LanguageSwitch",
  __ssrInlineRender: true,
  setup(__props) {
    const { siteUrl } = /* @__PURE__ */ useRuntimeConfig();
    const route = useRoute();
    const isRus = siteUrl === "https://tislogistic.ru/";
    const targetUrl = computed(() => {
      const path = translatePath(route.fullPath, isRus);
      return isRus ? "https://tislogistic.com" + path : "https://tislogistic.ru" + path;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(ssrRenderComponent(_component_NuxtLink, mergeProps({
        to: unref(targetUrl),
        class: "link-wrapper"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<label class="switch dummy" data-v-001d4354${_scopeId}><input${ssrIncludeBooleanAttr(isRus) ? " checked" : ""} type="checkbox" data-v-001d4354${_scopeId}><span class="slider round" data-v-001d4354${_scopeId}></span><span class="sun lang-name" data-v-001d4354${_scopeId}>Ru</span><span class="moon lang-name" data-v-001d4354${_scopeId}>En</span></label>`);
          } else {
            return [
              createVNode("label", { class: "switch dummy" }, [
                createVNode("input", {
                  checked: isRus,
                  type: "checkbox"
                }),
                createVNode("span", { class: "slider round" }),
                createVNode("span", { class: "sun lang-name" }, "Ru"),
                createVNode("span", { class: "moon lang-name" }, "En")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const ThemeSwitch_scss_vue_type_style_index_0_src_001d4354_scoped_001d4354_lang = "";
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Shared/LanguageSwitch.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const __nuxt_component_3$1 = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["__scopeId", "data-v-001d4354"]]);
const _sfc_main$8 = {};
function _sfc_ssrRender$8(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path d="M14.23 10.6289C13.2733 10.6289 12.3478 10.4733 11.4844 10.1933C11.2559 10.115 11.0053 10.1518 10.8066 10.2899C10.7298 10.3432 10.6731 10.4195 10.6221 10.4977V10.4977C10.2519 11.065 9.5141 11.2774 8.93924 10.9192C7.51624 10.0325 6.2136 8.77657 5.27519 7.33993C4.84404 6.67987 5.03522 5.81994 5.63556 5.30889V5.30889C5.84556 5.09111 5.90778 4.78778 5.82222 4.51556C5.53444 3.65222 5.38667 2.72667 5.38667 1.77C5.38667 1.35 5.03667 1 4.61667 1H1.92556C1.50556 1 1 1.18667 1 1.77C1 8.99556 7.01222 15 14.23 15C14.7822 15 15 14.51 15 14.0822V11.3989C15 10.9789 14.65 10.6289 14.23 10.6289Z"></path></svg>`);
}
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Icons/PhoneIcon.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const __nuxt_component_4$2 = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["ssrRender", _sfc_ssrRender$8]]);
const _imports_0$2 = "" + __buildAssetsURL("close.e501a77d.svg");
const SideBar_vue_vue_type_style_index_0_scoped_1a91fdfc_lang = "";
const _sfc_main$7 = {
  components: {
    Collapse
  },
  props: {
    toggleSidebar: {
      type: Function,
      required: true
    },
    links: {
      type: Object,
      required: true
    }
  },
  setup() {
    const calculatorPopupShown = useCalculatorPopup();
    const returnCallShown = useReturnCallModal();
    const { $texts } = useNuxtApp();
    const secondaryLinks = [
      {
        label: $texts.containerClassification,
        to: "/containers",
        className: "classification"
      },
      {
        label: $texts.tariffs,
        to: "/tarify-na-tamozhennoe-oformlenie-gruzov",
        className: "tariffs"
      },
      {
        label: $texts.websiteMap,
        to: "/sitemap",
        className: "map"
      }
    ];
    return {
      calculatorPopupShown,
      returnCallShown,
      secondaryLinks
    };
  },
  data() {
    return {
      servicesShown: false
    };
  },
  computed: {
    services() {
      return servicesList.filter((obj) => !obj.disabled);
    }
  },
  methods: {
    openCalculatorPopup() {
      this.toggleSidebar();
      this.calculatorPopupShown = true;
    },
    openReturnCall() {
      this.toggleSidebar();
      this.returnCallShown = true;
    },
    toggleServices() {
      this.servicesShown = !this.servicesShown;
    }
  }
};
function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __nuxt_component_0$1;
  const _component_IconsCompanyLogo = __nuxt_component_1$1;
  const _component_SharedThemeSwitch = __nuxt_component_2$1;
  const _component_SharedLanguageSwitch = __nuxt_component_3$1;
  const _component_IconsPhoneIcon = __nuxt_component_4$2;
  const _component_IconsExpandArrow = __nuxt_component_1$2;
  const _component_Collapse = resolveComponent("Collapse");
  _push(`<aside${ssrRenderAttrs(mergeProps({ class: "sidebar mobile-tablet-only" }, _attrs))} data-v-1a91fdfc><div class="sidebar__container" data-v-1a91fdfc><div class="sidebar__top" data-v-1a91fdfc>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "sidebar__logo",
    to: "/",
    onClick: $props.toggleSidebar
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_IconsCompanyLogo, {
          alt: _ctx.$texts.homePage + _ctx.$texts.companyNameSeo
        }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_IconsCompanyLogo, {
            alt: _ctx.$texts.homePage + _ctx.$texts.companyNameSeo
          }, null, 8, ["alt"])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<button class="sidebar__close" data-v-1a91fdfc><img${ssrRenderAttr("src", _imports_0$2)}${ssrRenderAttr("alt", _ctx.$texts.close)} data-v-1a91fdfc></button></div><div class="sidebar__theme-container" data-v-1a91fdfc>`);
  _push(ssrRenderComponent(_component_SharedThemeSwitch, null, null, _parent));
  _push(ssrRenderComponent(_component_SharedLanguageSwitch, null, null, _parent));
  _push(`</div><div class="sidebar__contacts" data-v-1a91fdfc><a${ssrRenderAttr("href", `tel:${_ctx.$texts.companyPhone}`)} data-v-1a91fdfc>`);
  _push(ssrRenderComponent(_component_IconsPhoneIcon, null, null, _parent));
  _push(` ${ssrInterpolate(_ctx.$texts.companyPhone)}</a></div><div class="sidebar__buttons" data-v-1a91fdfc><button class="navbar__btn navbar__btn_red sidebar__btn" data-v-1a91fdfc>${ssrInterpolate(_ctx.$texts.calculateDelivery)}</button><button class="navbar__btn sidebar__btn" data-v-1a91fdfc>${ssrInterpolate(_ctx.$texts.returnCall)}</button></div><div class="sidebar__links" data-v-1a91fdfc>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/about",
    class: "sidebar__link",
    onClick: $props.toggleSidebar
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate(_ctx.$texts.about)}`);
      } else {
        return [
          createTextVNode(toDisplayString(_ctx.$texts.about), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div data-v-1a91fdfc><div class="sidebar__services-link" data-v-1a91fdfc>`);
  _push(ssrRenderComponent(_component_NuxtLink, { class: "sidebar__link" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate(_ctx.$texts.services)}`);
      } else {
        return [
          createTextVNode(toDisplayString(_ctx.$texts.services), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_IconsExpandArrow, {
    class: ["expand-arrow", { rotated: $data.servicesShown }]
  }, null, _parent));
  _push(`</div>`);
  _push(ssrRenderComponent(_component_Collapse, {
    when: $data.servicesShown,
    class: "collapse"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="sidebar__services-list" data-v-1a91fdfc${_scopeId}><!--[-->`);
        ssrRenderList($options.services, (service, i) => {
          _push2(ssrRenderComponent(_component_NuxtLink, {
            key: i,
            class: "service-link service-link_sidebar",
            to: service.to,
            onClick: $props.toggleSidebar
          }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`${ssrInterpolate(service.title)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(service.title), 1)
                ];
              }
            }),
            _: 2
          }, _parent2, _scopeId));
        });
        _push2(`<!--]--></div>`);
      } else {
        return [
          createVNode("div", { class: "sidebar__services-list" }, [
            (openBlock(true), createBlock(Fragment, null, renderList($options.services, (service, i) => {
              return openBlock(), createBlock(_component_NuxtLink, {
                key: i,
                class: "service-link service-link_sidebar",
                to: service.to,
                onClick: $props.toggleSidebar
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(service.title), 1)
                ]),
                _: 2
              }, 1032, ["to", "onClick"]);
            }), 128))
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><!--[-->`);
  ssrRenderList($props.links, (link) => {
    _push(ssrRenderComponent(_component_NuxtLink, {
      key: link.label,
      to: link.path,
      class: "sidebar__link",
      onClick: $props.toggleSidebar
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate(link.label)}`);
        } else {
          return [
            createTextVNode(toDisplayString(link.label), 1)
          ];
        }
      }),
      _: 2
    }, _parent));
  });
  _push(`<!--]--></div><div class="sidebar__links sidebar__links_secondary" data-v-1a91fdfc><a href="/traffic" class="vessels" data-v-1a91fdfc>${ssrInterpolate(_ctx.$texts.vesselsPosition)}</a><!--[-->`);
  ssrRenderList($setup.secondaryLinks, (link) => {
    _push(ssrRenderComponent(_component_NuxtLink, {
      key: link.label,
      to: link.to,
      onClick: $props.toggleSidebar
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate(link.label)}`);
        } else {
          return [
            createTextVNode(toDisplayString(link.label), 1)
          ];
        }
      }),
      _: 2
    }, _parent));
  });
  _push(`<!--]--></div></div></aside>`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Shared/SideBar.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __nuxt_component_4$1 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$7], ["__scopeId", "data-v-1a91fdfc"]]);
const _imports_0$1 = "" + __buildAssetsURL("logoBlack.445f085f.svg");
const _imports_1$1 = "" + __buildAssetsURL("bars.fdd7c7de.svg");
const NavBar_scss_vue_type_style_index_0_src_true_lang = "";
const _sfc_main$6 = {
  setup() {
    const calculatorPopupShown = useCalculatorPopup();
    const returnCallShown = useReturnCallModal();
    return {
      calculatorPopupShown,
      returnCallShown
    };
  },
  data() {
    return {
      isScrolled: false,
      sidebarShown: false,
      servicesListShown: false
    };
  },
  computed: {
    links() {
      const { $texts } = useNuxtApp();
      return [
        {
          label: $texts.vacancies,
          path: `/vacancies`
        },
        {
          label: $texts.contacts,
          path: `/contacts`
        },
        {
          label: $texts.news,
          path: `/news`
        }
      ];
    },
    services() {
      return servicesList.filter((obj) => !obj.disabled);
    }
  },
  mounted() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          this.isScrolled = !entry.isIntersecting;
        });
      },
      { threshold: [0] }
    );
    observer.observe(this.$refs.scrollTracker);
  },
  methods: {
    toggleSidebar() {
      this.sidebarShown = !this.sidebarShown;
    },
    toggleServicesList(status) {
      this.servicesListShown = status;
    }
  }
};
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __nuxt_component_0$1;
  const _component_IconsExpandArrow = __nuxt_component_1$2;
  const _component_SharedThemeSwitch = __nuxt_component_2$1;
  const _component_SharedLanguageSwitch = __nuxt_component_3$1;
  const _component_SharedSideBar = __nuxt_component_4$1;
  _push(`<!--[--><nav class="${ssrRenderClass([{ navbar_black: $data.isScrolled }, "navbar"])}"><div class="navbar__layout-container"><div class="navbar__left">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "navbar__logo-container",
    to: "/"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_0$1)} class="navbar__logo"${ssrRenderAttr("alt", _ctx.$texts.homePage + _ctx.$texts.companyNameSeo)}${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_0$1,
            class: "navbar__logo",
            alt: _ctx.$texts.homePage + _ctx.$texts.companyNameSeo
          }, null, 8, ["alt"])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="navbar__links">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/about",
    class: "navbar__link"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate(_ctx.$texts.about)}`);
      } else {
        return [
          createTextVNode(toDisplayString(_ctx.$texts.about), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="navbar__services-link">`);
  _push(ssrRenderComponent(_component_NuxtLink, { class: "navbar__link" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate(_ctx.$texts.services + " ")} `);
        _push2(ssrRenderComponent(_component_IconsExpandArrow, {
          class: ["expand-arrow", { rotated: $data.servicesListShown }]
        }, null, _parent2, _scopeId));
      } else {
        return [
          createTextVNode(toDisplayString(_ctx.$texts.services + " ") + " ", 1),
          createVNode(_component_IconsExpandArrow, {
            class: ["expand-arrow", { rotated: $data.servicesListShown }]
          }, null, 8, ["class"])
        ];
      }
    }),
    _: 1
  }, _parent));
  if ($data.servicesListShown) {
    _push(`<div class="navbar__services-list"><!--[-->`);
    ssrRenderList($options.services, (service, i) => {
      _push(ssrRenderComponent(_component_NuxtLink, {
        key: i,
        to: service.to,
        class: "service-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(service.title)}`);
          } else {
            return [
              createTextVNode(toDisplayString(service.title), 1)
            ];
          }
        }),
        _: 2
      }, _parent));
    });
    _push(`<!--]--></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div><!--[-->`);
  ssrRenderList($options.links, (link) => {
    _push(ssrRenderComponent(_component_NuxtLink, {
      key: link.label,
      to: link.path,
      class: "navbar__link"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate(link.label)}`);
        } else {
          return [
            createTextVNode(toDisplayString(link.label), 1)
          ];
        }
      }),
      _: 2
    }, _parent));
  });
  _push(`<!--]--></div></div><div class="navbar__center">`);
  _push(ssrRenderComponent(_component_SharedThemeSwitch, null, null, _parent));
  _push(ssrRenderComponent(_component_SharedLanguageSwitch, null, null, _parent));
  _push(`</div><div class="navbar__right"><a href="tel:8 (800) 234-80-70" class="navbar__phone">${ssrInterpolate(_ctx.$texts.companyPhone)}</a><div class="navbar__desktop-buttons"><button class="navbar__btn">${ssrInterpolate(_ctx.$texts.returnCall)}</button><button class="navbar__btn navbar__btn_red">${ssrInterpolate(_ctx.$texts.calculateDelivery)}</button></div><button class="navbar__expand-btn mobile-tablet-only"><img${ssrRenderAttr("src", _imports_1$1)} class="" alt=""></button></div></div><div class="${ssrRenderClass([{ blur_shown: $data.sidebarShown }, "blur"])}"></div>`);
  _push(ssrRenderComponent(_component_SharedSideBar, {
    class: { sidebar_shown: $data.sidebarShown },
    "toggle-sidebar": $options.toggleSidebar,
    links: $options.links
  }, null, _parent));
  _push(`</nav><div class="scroll-tracker"></div><!--]-->`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Shared/NavBar.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$6]]);
const ReturnCallModal_scss_vue_type_style_index_0_src_43c35789_scoped_43c35789_lang = "";
const _sfc_main$5 = {
  setup() {
    const returnCallShown = useReturnCallModal();
    return {
      returnCallShown
    };
  },
  methods: {
    closeFromBoundaries(e) {
      if (e.target === e.currentTarget) {
        this.returnCallShown = false;
      }
    }
  }
};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_SharedReturnCallForm = __nuxt_component_0$2;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "blur_shown return-bg visibility-animate" }, _attrs))} data-v-43c35789>`);
  _push(ssrRenderComponent(_component_SharedReturnCallForm, {
    title: _ctx.$texts.returnCall,
    modal: true,
    "rental-containers": false,
    "sumbit-btn-text": _ctx.$texts.send
  }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Shared/ReturnCallModal.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$5], ["__scopeId", "data-v-43c35789"]]);
const _sfc_main$4 = {};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "74",
    height: "74",
    viewBox: "0 0 74 74",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path d="M37.0013 67.8334C54.0306 67.8334 67.8346 54.0293 67.8346 37.0001C67.8346 19.9708 54.0306 6.16675 37.0013 6.16675C19.9721 6.16675 6.16797 19.9708 6.16797 37.0001C6.16797 54.0293 19.9721 67.8334 37.0013 67.8334Z" stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M27.75 36.9999L33.9167 43.1666L46.25 30.8333" stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"></path></svg>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Icons/SuccessTick.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$4]]);
const CalculatorSuccessModal_scss_vue_type_style_index_0_src_0fe3e498_scoped_0fe3e498_lang = "";
const _sfc_main$3 = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  const _component_IconsSuccessTick = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "success-bg visibility-animate" }, _attrs))} data-v-0fe3e498><div class="success" data-v-0fe3e498>`);
  _push(ssrRenderComponent(_component_IconsSuccessTick, { alt: "" }, null, _parent));
  _push(`<h3 data-v-0fe3e498>${ssrInterpolate(_ctx.$texts.calculatorSuccessTitle)}</h3><h5 data-v-0fe3e498>${ssrInterpolate(_ctx.$texts.calculatorSuccessNote)}</h5></div></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Shared/CalculatorSuccessModal.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3], ["__scopeId", "data-v-0fe3e498"]]);
const DeliveryCalculator_scss_vue_type_style_index_0_src_7f563f1d_scoped_7f563f1d_lang = "";
const _sfc_main$2 = {
  setup() {
    const calculatorPopupShown = useCalculatorPopup();
    return {
      calculatorPopupShown
    };
  },
  methods: {
    closeFromBoundaries(e) {
      if (e.target === e.currentTarget) {
        this.calculatorPopupShown = false;
      }
    }
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_IconsClosePopup = __nuxt_component_0$3;
  const _component_SharedDeliveryCalculator = __nuxt_component_1$3;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "blur_shown calculator-blur visibility-animate" }, _attrs))} data-v-7f563f1d><div class="calc-popup" data-v-7f563f1d><button class="calc-popup__close" data-v-7f563f1d>`);
  _push(ssrRenderComponent(_component_IconsClosePopup, {
    alt: _ctx.$texts.close
  }, null, _parent));
  _push(`</button>`);
  _push(ssrRenderComponent(_component_SharedDeliveryCalculator, null, null, _parent));
  _push(`</div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Shared/CalculatorPopup.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-7f563f1d"]]);
const _imports_0 = "" + __buildAssetsURL("logo-yellow-red.efbf8528.svg");
const _imports_1 = "" + __buildAssetsURL("rhino.858bfab7.svg");
const MainFooter_scss_vue_type_style_index_0_src_44763f2d_scoped_44763f2d_lang = "";
const _sfc_main$1 = {
  computed: {
    texts() {
      const { $texts } = useNuxtApp();
      return $texts;
    },
    linksLeft() {
      return [
        {
          label: this.texts.about,
          to: "/about"
        },
        {
          label: this.texts.services,
          to: "/services"
        },
        {
          label: this.texts.vacancies,
          to: "/vacancies"
        },
        {
          label: this.texts.contacts,
          to: "/contacts"
        },
        {
          label: this.texts.news,
          to: "/news"
        }
      ];
    },
    linksCenter() {
      return [
        {
          label: this.texts.news,
          to: "/news",
          className: "projects"
        },
        {
          label: this.texts.websiteMap,
          to: "/sitemap",
          className: "map"
        }
        // {
        //     label: this.texts.inkoterms,
        //     to: '/inkoterms-2020',
        //     className: 'inkoterms',
        // },
      ];
    },
    linksRight() {
      return [
        {
          label: this.texts.tariffs,
          to: "/tarify-na-tamozhennoe-oformlenie-gruzov",
          className: "tariffs"
        },
        {
          label: this.texts.containerClassification,
          to: "/containers",
          className: "classification"
        }
      ];
    },
    phoneRef() {
      return `tel:${this.texts.companyPhone}`;
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __nuxt_component_0$1;
  const _component_IconsCompanyLogo = __nuxt_component_1$1;
  _push(`<footer${ssrRenderAttrs(mergeProps({ class: "footer" }, _attrs))} data-v-44763f2d><div class="footer__container" data-v-44763f2d>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "footer__logo-container",
    to: "/"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_IconsCompanyLogo, null, null, _parent2, _scopeId));
        _push2(`<img${ssrRenderAttr("src", _imports_0)}${ssrRenderAttr("alt", _ctx.$texts.companyNameSeo)} data-v-44763f2d${_scopeId}>`);
      } else {
        return [
          createVNode(_component_IconsCompanyLogo),
          createVNode("img", {
            src: _imports_0,
            alt: _ctx.$texts.companyNameSeo
          }, null, 8, ["alt"])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="footer__nav-links" data-v-44763f2d><!--[-->`);
  ssrRenderList($options.linksLeft, (link, key) => {
    _push(ssrRenderComponent(_component_NuxtLink, {
      key,
      to: link.to
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate(link.label)}`);
        } else {
          return [
            createTextVNode(toDisplayString(link.label), 1)
          ];
        }
      }),
      _: 2
    }, _parent));
  });
  _push(`<!--]--></div><div class="footer__info footer__info_left" data-v-44763f2d><!--[-->`);
  ssrRenderList($options.linksCenter, (link, key) => {
    _push(ssrRenderComponent(_component_NuxtLink, {
      key,
      to: link.to
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate(link.label)}`);
        } else {
          return [
            createTextVNode(toDisplayString(link.label), 1)
          ];
        }
      }),
      _: 2
    }, _parent));
  });
  _push(`<!--]--><a href="/traffic" class="vessels" data-v-44763f2d>${ssrInterpolate(_ctx.$texts.vesselsPosition)}</a></div><div class="footer__info footer__info_right" data-v-44763f2d><!--[-->`);
  ssrRenderList($options.linksRight, (link, key) => {
    _push(ssrRenderComponent(_component_NuxtLink, {
      key,
      to: link.to
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate(link.label)}`);
        } else {
          return [
            createTextVNode(toDisplayString(link.label), 1)
          ];
        }
      }),
      _: 2
    }, _parent));
  });
  _push(`<!--]--></div><div class="footer__branch-info phone-block" data-v-44763f2d><span data-v-44763f2d>${ssrInterpolate(_ctx.$texts.phone)}</span><a${ssrRenderAttr("href", $options.phoneRef)} data-v-44763f2d>${ssrInterpolate(_ctx.$texts.companyPhone)}</a></div><div class="desktop-placeholder" data-v-44763f2d></div><img class="footer__bg"${ssrRenderAttr("src", _imports_1)} alt="" data-v-44763f2d></div><div class="footer__bottom" data-v-44763f2d>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "confidentiality",
    to: "/politika-konfidencialnosti"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate(_ctx.$texts.confidentialityPolicy)}`);
      } else {
        return [
          createTextVNode(toDisplayString(_ctx.$texts.confidentialityPolicy), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="placeholder" data-v-44763f2d></div>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "agreement",
    to: "/eula"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate(_ctx.$texts.customerAgreement)}`);
      } else {
        return [
          createTextVNode(toDisplayString(_ctx.$texts.customerAgreement), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<span class="copyright" data-v-44763f2d>${ssrInterpolate(_ctx.$texts.footerNote)}</span></div></footer>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Shared/MainFooter.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-44763f2d"]]);
const _sfc_main = {
  setup() {
    const isWhiteTheme = useTheme();
    useHead({
      // meta: [{ name: 'yandex-verification', content: webmasterKey }],
      // proof of ownership for metrika, even though metrika doesnt require metas;
      meta: [
        { name: "yandex-verification", content: "12db09dc804685c2" }
      ],
      script: [
        // roistat script:
        {
          children: `(function(w, d, s, h, id) {w.roistatProjectId = id; w.roistatHost = h; var p = d.location.protocol == "https:" ? "https://" : "http://"; var u = /^.*roistat_visit=[^;]+(.*)?$/.test(d.cookie) ? "/dist/module.js" : "/api/site/1.0/"+id+"/init?referrer="+encodeURIComponent(d.location.href);var js = d.createElement(s); js.charset="UTF-8"; js.async = 1; js.src = p+h+u; var js2 = d.getElementsByTagName(s)[0]; js2.parentNode.insertBefore(js, js2);})(window, document, 'script', 'cloud.roistat.com', '089514df0b4eabe45f1a32e7191da33e');`,
          tagPosition: "bodyOpen"
        },
        // gtm 1
        {
          children: "(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-5WKX7NL');"
        },
        // gtm 2
        {
          children: "(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-5WX5RR9V');"
        }
      ],
      noscript: [
        {
          innerHTML: '<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5WKX7NL" height="0" width="0" style="display:none;visibility:hidden"></iframe>',
          tagPosition: "bodyOpen"
        },
        {
          innerHTML: '<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5WX5RR9V" height="0" width="0" style="display:none;visibility:hidden"></iframe>',
          tagPosition: "bodyOpen"
        }
      ],
      bodyAttrs: {
        class: computed(() => {
          return isWhiteTheme.value ? "white-theme" : "dark-theme";
        })
      }
    });
    const returnCallShown = useReturnCallModal();
    const successShown = useSuccessModal();
    const calculatorPopupShown = useCalculatorPopup();
    return {
      returnCallShown,
      successShown,
      calculatorPopupShown
    };
  },
  data() {
    return {
      returnCallRendered: false,
      returnCallOpacity: false,
      successRendered: false,
      successOpacity: false,
      calculatorPopupRendered: false,
      calculatorPopupOpacity: false
    };
  },
  watch: {
    returnCallShown(newVal) {
      if (newVal) {
        this.returnCallRendered = true;
        setTimeout(() => this.returnCallOpacity = true, 10);
      } else {
        this.returnCallOpacity = false;
        setTimeout(() => this.returnCallRendered = false, 210);
      }
    },
    successShown() {
      this.successRendered = true;
      setTimeout(() => {
        this.successOpacity = true;
      }, 10);
      setTimeout(() => {
        this.successOpacity = false;
      }, 3e3);
      setTimeout(() => {
        this.successRendered = false;
      }, 3210);
    },
    calculatorPopupShown(newVal) {
      if (newVal) {
        this.calculatorPopupRendered = true;
        setTimeout(() => this.calculatorPopupOpacity = true, 10);
      } else {
        this.calculatorPopupOpacity = false;
        setTimeout(() => this.calculatorPopupRendered = false, 210);
      }
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_SeoKit = _sfc_main$b;
  const _component_SharedNavBar = __nuxt_component_1;
  const _component_SharedReturnCallModal = __nuxt_component_2;
  const _component_SharedCalculatorSuccessModal = __nuxt_component_3;
  const _component_SharedCalculatorPopup = __nuxt_component_4;
  const _component_SharedMainFooter = __nuxt_component_5;
  _push(`<main${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_SeoKit, null, null, _parent));
  _push(ssrRenderComponent(_component_SharedNavBar, null, null, _parent));
  if ($data.returnCallRendered) {
    _push(ssrRenderComponent(_component_SharedReturnCallModal, {
      class: { visible: $data.returnCallOpacity }
    }, null, _parent));
  } else {
    _push(`<!---->`);
  }
  if ($data.successRendered) {
    _push(ssrRenderComponent(_component_SharedCalculatorSuccessModal, {
      class: { visible: $data.successOpacity }
    }, null, _parent));
  } else {
    _push(`<!---->`);
  }
  if ($data.calculatorPopupRendered) {
    _push(ssrRenderComponent(_component_SharedCalculatorPopup, {
      class: { visible: $data.calculatorPopupOpacity }
    }, null, _parent));
  } else {
    _push(`<!---->`);
  }
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(ssrRenderComponent(_component_SharedMainFooter, null, null, _parent));
  _push(`</main>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  _default as default
};
//# sourceMappingURL=default-37b73cd7.js.map
