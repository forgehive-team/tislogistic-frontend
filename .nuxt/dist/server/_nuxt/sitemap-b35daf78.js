import { _ as __nuxt_component_0 } from "./BreadCrumbs-7a67b271.js";
import { _ as __nuxt_component_0$1 } from "./nuxt-link-0d39ff03.js";
import { _ as __nuxt_component_2 } from "./GoUp-9c5eead8.js";
import { _ as _export_sfc, u as useNuxtApp, a as useHead } from "../server.mjs";
import { u as useServerHead } from "./internalLinks-dc4e1b80.js";
import { withCtx, createTextVNode, toDisplayString, useSSRContext } from "vue";
import "destr";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
import "hookable";
import "ufo";
import "ofetch";
import "#internal/nitro";
import "unctx";
/* empty css                     */import "vue-router";
import "h3";
import "defu";
const Sitemap_scss_vue_type_style_index_0_src_e0e42f77_scoped_e0e42f77_lang = "";
const _sfc_main = {
  __name: "sitemap",
  __ssrInlineRender: true,
  setup(__props) {
    const { $texts } = useNuxtApp();
    useHead({
      title: "Карта сайта"
    });
    useServerHead({
      meta: [
        { name: "keywords", content: $texts.seoKeywordsBase }
      ]
    });
    const parsedSitemap = [
      {
        label: "Главная",
        url: "/",
        subroutes: []
      },
      {
        label: "О компании",
        url: "/about",
        subroutes: []
      },
      {
        label: "Классификация контейнеров",
        url: "/containers",
        subroutes: []
      },
      {
        label: "Позиция и движение судов",
        url: "/traffic",
        subroutes: [],
        client: true
      },
      {
        label: "Проекты",
        url: "/projects",
        subroutes: [
          {
            label: "Наши возможности: доставка объемных грузов",
            url: "/projects/nashi-vozmozhnosti-dostavka-obemnyh-gruzov"
          },
          {
            label: "Опасная краска",
            url: "/projects/opasnaya-kraska"
          },
          {
            label: "Тяжелое оборудование",
            url: "/projects/tyazheloe-oborudovanie"
          },
          {
            label: "Ламборгини из Японии, или сложности доставки в условиях санкций",
            url: "/projects/lamborgini-iz-yaponii-ili-slozhnosti-dostavki-v-usloviyah-sankcij"
          }
        ]
      },
      {
        label: "Новости",
        url: "/news",
        subroutes: [
          {
            label: "Доставим ваш груз из Китая в флекситанк-контейнерах",
            url: "/news/dostavim-vas-gruz-iz-kitaia-v-fleksi-tank-konteinerax"
          },
          {
            label: "Отправка из Китая автомобилей в контейнерах без очередей",
            url: "/news/novaia-usluga-otpravka-iz-kitaia-avtomobilei-v-konteinera-bez-oceredei-ot-2-x-stuk"
          },
          {
            label: "Зеон под опекой",
            url: "/news/opekunstvo-nad-belym-nosorogom-po-imeni-zeon"
          }
        ]
      },
      {
        label: "Политика конфиденциальности",
        url: "/politika-konfidencialnosti",
        subroutes: []
      },
      {
        label: "Пользовательское соглашение",
        url: "/eula",
        subroutes: []
      },
      // {
      //     label: 'Инкотермс 2020',
      //     url: '/inkoterms-2020',
      //     subroutes: [],
      // },
      {
        label: "Тарифы на таможенное оформление грузов",
        url: "/tarify-na-tamozhennoe-oformlenie-gruzov",
        subroutes: []
      },
      {
        label: "Карта сайта",
        url: "/sitemap",
        subroutes: []
      },
      {
        label: "Услуги",
        url: "/services",
        subroutes: [
          {
            label: "Морские грузоперевозки",
            url: "/services/morskie-gruzoperevozki"
          },
          {
            label: "Железнодорожные перевозки",
            url: "/services/zheleznodorozhnye-perevozki"
          },
          {
            label: "Авиаперевозки",
            url: "/services/aviaperevozki"
          },
          {
            label: "Автомобильные перевозки",
            url: "/services/avtomobilnye-perevozki"
          },
          {
            label: "Проектная логистика",
            url: "/services/project-logistics"
          },
          {
            label: "Аренда контейнеров",
            url: "/services/arenda-konteynerov"
          },
          {
            label: "Таможенное оформление",
            url: "/services/tamozhennoe-oformlenie"
          }
        ]
      }
    ];
    const routesRight = parsedSitemap.slice(-4);
    const routesLeft = parsedSitemap.slice(0, 8);
    const routesList = [routesLeft, routesRight];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SharedBreadCrumbs = __nuxt_component_0;
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_SharedGoUp = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-e0e42f77><section data-v-e0e42f77><div class="bg white-theme-only gradient-bg" data-v-e0e42f77></div><div data-v-e0e42f77>`);
      _push(ssrRenderComponent(_component_SharedBreadCrumbs, { class: "breadcrumbs" }, null, _parent));
      _push(`<h1 data-v-e0e42f77>Карта сайта</h1><div class="sitemap" data-v-e0e42f77><!--[-->`);
      ssrRenderList(routesList, (sitemap2, i) => {
        _push(`<div data-v-e0e42f77><!--[-->`);
        ssrRenderList(sitemap2, (route) => {
          _push(`<ul data-v-e0e42f77><li data-v-e0e42f77>`);
          if (!route.client) {
            _push(ssrRenderComponent(_component_NuxtLink, {
              to: route.url
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`${ssrInterpolate(route.label)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(route.label), 1)
                  ];
                }
              }),
              _: 2
            }, _parent));
          } else {
            _push(`<a${ssrRenderAttr("href", route.url)} data-v-e0e42f77>${ssrInterpolate(route.label)}</a>`);
          }
          if (route.subroutes.length) {
            _push(`<ul class="subroutes" data-v-e0e42f77><!--[-->`);
            ssrRenderList(route.subroutes, (subroute) => {
              _push(`<li data-v-e0e42f77>`);
              _push(ssrRenderComponent(_component_NuxtLink, {
                to: subroute.url
              }, {
                default: withCtx((_, _push2, _parent2, _scopeId) => {
                  if (_push2) {
                    _push2(`${ssrInterpolate(subroute.label)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(subroute.label), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent));
              _push(`</li>`);
            });
            _push(`<!--]--></ul>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</li></ul>`);
        });
        _push(`<!--]--></div>`);
      });
      _push(`<!--]--></div></div>`);
      _push(ssrRenderComponent(_component_SharedGoUp, null, null, _parent));
      _push(`</section></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/sitemap.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const sitemap = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e0e42f77"]]);
export {
  sitemap as default
};
//# sourceMappingURL=sitemap-b35daf78.js.map
