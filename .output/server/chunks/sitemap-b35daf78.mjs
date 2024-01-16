import { _ as __nuxt_component_0 } from './BreadCrumbs-7a67b271.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-0d39ff03.mjs';
import { _ as __nuxt_component_2 } from './GoUp-9c5eead8.mjs';
import { _ as _export_sfc, u as useNuxtApp, a as useHead } from './server.mjs';
import { u as useServerHead } from './internalLinks-dc4e1b80.mjs';
import { withCtx, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import 'ufo';
import './renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'h3';
import 'destr';
import 'ohash';
import './node-server.mjs';
import 'node-fetch-native/polyfill';
import 'node:http';
import 'node:https';
import 'ofetch';
import 'unenv/runtime/fetch/index';
import 'hookable';
import 'scule';
import 'defu';
import 'unstorage';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';
import 'ipx';
import 'unctx';
import 'vue-router';

const _sfc_main = {
  __name: "sitemap",
  __ssrInlineRender: true,
  setup(__props) {
    const { $texts } = useNuxtApp();
    useHead({
      title: "\u041A\u0430\u0440\u0442\u0430 \u0441\u0430\u0439\u0442\u0430"
    });
    useServerHead({
      meta: [
        { name: "keywords", content: $texts.seoKeywordsBase }
      ]
    });
    const parsedSitemap = [
      {
        label: "\u0413\u043B\u0430\u0432\u043D\u0430\u044F",
        url: "/",
        subroutes: []
      },
      {
        label: "\u041E \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438",
        url: "/about",
        subroutes: []
      },
      {
        label: "\u041A\u043B\u0430\u0441\u0441\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u044F \u043A\u043E\u043D\u0442\u0435\u0439\u043D\u0435\u0440\u043E\u0432",
        url: "/containers",
        subroutes: []
      },
      {
        label: "\u041F\u043E\u0437\u0438\u0446\u0438\u044F \u0438 \u0434\u0432\u0438\u0436\u0435\u043D\u0438\u0435 \u0441\u0443\u0434\u043E\u0432",
        url: "/traffic",
        subroutes: [],
        client: true
      },
      {
        label: "\u041F\u0440\u043E\u0435\u043A\u0442\u044B",
        url: "/projects",
        subroutes: [
          {
            label: "\u041D\u0430\u0448\u0438 \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u0438: \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0430 \u043E\u0431\u044A\u0435\u043C\u043D\u044B\u0445 \u0433\u0440\u0443\u0437\u043E\u0432",
            url: "/projects/nashi-vozmozhnosti-dostavka-obemnyh-gruzov"
          },
          {
            label: "\u041E\u043F\u0430\u0441\u043D\u0430\u044F \u043A\u0440\u0430\u0441\u043A\u0430",
            url: "/projects/opasnaya-kraska"
          },
          {
            label: "\u0422\u044F\u0436\u0435\u043B\u043E\u0435 \u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u0435",
            url: "/projects/tyazheloe-oborudovanie"
          },
          {
            label: "\u041B\u0430\u043C\u0431\u043E\u0440\u0433\u0438\u043D\u0438 \u0438\u0437 \u042F\u043F\u043E\u043D\u0438\u0438, \u0438\u043B\u0438 \u0441\u043B\u043E\u0436\u043D\u043E\u0441\u0442\u0438 \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0438 \u0432 \u0443\u0441\u043B\u043E\u0432\u0438\u044F\u0445 \u0441\u0430\u043D\u043A\u0446\u0438\u0439",
            url: "/projects/lamborgini-iz-yaponii-ili-slozhnosti-dostavki-v-usloviyah-sankcij"
          }
        ]
      },
      {
        label: "\u041D\u043E\u0432\u043E\u0441\u0442\u0438",
        url: "/news",
        subroutes: [
          {
            label: "\u0414\u043E\u0441\u0442\u0430\u0432\u0438\u043C \u0432\u0430\u0448 \u0433\u0440\u0443\u0437 \u0438\u0437 \u041A\u0438\u0442\u0430\u044F \u0432 \u0444\u043B\u0435\u043A\u0441\u0438\u0442\u0430\u043D\u043A-\u043A\u043E\u043D\u0442\u0435\u0439\u043D\u0435\u0440\u0430\u0445",
            url: "/news/dostavim-vas-gruz-iz-kitaia-v-fleksi-tank-konteinerax"
          },
          {
            label: "\u041E\u0442\u043F\u0440\u0430\u0432\u043A\u0430 \u0438\u0437 \u041A\u0438\u0442\u0430\u044F \u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u0435\u0439 \u0432 \u043A\u043E\u043D\u0442\u0435\u0439\u043D\u0435\u0440\u0430\u0445 \u0431\u0435\u0437 \u043E\u0447\u0435\u0440\u0435\u0434\u0435\u0439",
            url: "/news/novaia-usluga-otpravka-iz-kitaia-avtomobilei-v-konteinera-bez-oceredei-ot-2-x-stuk"
          },
          {
            label: "\u0417\u0435\u043E\u043D \u043F\u043E\u0434 \u043E\u043F\u0435\u043A\u043E\u0439",
            url: "/news/opekunstvo-nad-belym-nosorogom-po-imeni-zeon"
          }
        ]
      },
      {
        label: "\u041F\u043E\u043B\u0438\u0442\u0438\u043A\u0430 \u043A\u043E\u043D\u0444\u0438\u0434\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438",
        url: "/politika-konfidencialnosti",
        subroutes: []
      },
      {
        label: "\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u043E\u0435 \u0441\u043E\u0433\u043B\u0430\u0448\u0435\u043D\u0438\u0435",
        url: "/eula",
        subroutes: []
      },
      // {
      //     label: 'Инкотермс 2020',
      //     url: '/inkoterms-2020',
      //     subroutes: [],
      // },
      {
        label: "\u0422\u0430\u0440\u0438\u0444\u044B \u043D\u0430 \u0442\u0430\u043C\u043E\u0436\u0435\u043D\u043D\u043E\u0435 \u043E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u0438\u0435 \u0433\u0440\u0443\u0437\u043E\u0432",
        url: "/tarify-na-tamozhennoe-oformlenie-gruzov",
        subroutes: []
      },
      {
        label: "\u041A\u0430\u0440\u0442\u0430 \u0441\u0430\u0439\u0442\u0430",
        url: "/sitemap",
        subroutes: []
      },
      {
        label: "\u0423\u0441\u043B\u0443\u0433\u0438",
        url: "/services",
        subroutes: [
          {
            label: "\u041C\u043E\u0440\u0441\u043A\u0438\u0435 \u0433\u0440\u0443\u0437\u043E\u043F\u0435\u0440\u0435\u0432\u043E\u0437\u043A\u0438",
            url: "/services/morskie-gruzoperevozki"
          },
          {
            label: "\u0416\u0435\u043B\u0435\u0437\u043D\u043E\u0434\u043E\u0440\u043E\u0436\u043D\u044B\u0435 \u043F\u0435\u0440\u0435\u0432\u043E\u0437\u043A\u0438",
            url: "/services/zheleznodorozhnye-perevozki"
          },
          {
            label: "\u0410\u0432\u0438\u0430\u043F\u0435\u0440\u0435\u0432\u043E\u0437\u043A\u0438",
            url: "/services/aviaperevozki"
          },
          {
            label: "\u0410\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0435 \u043F\u0435\u0440\u0435\u0432\u043E\u0437\u043A\u0438",
            url: "/services/avtomobilnye-perevozki"
          },
          {
            label: "\u041F\u0440\u043E\u0435\u043A\u0442\u043D\u0430\u044F \u043B\u043E\u0433\u0438\u0441\u0442\u0438\u043A\u0430",
            url: "/services/project-logistics"
          },
          {
            label: "\u0410\u0440\u0435\u043D\u0434\u0430 \u043A\u043E\u043D\u0442\u0435\u0439\u043D\u0435\u0440\u043E\u0432",
            url: "/services/arenda-konteynerov"
          },
          {
            label: "\u0422\u0430\u043C\u043E\u0436\u0435\u043D\u043D\u043E\u0435 \u043E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u0438\u0435",
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
      _push(`<h1 data-v-e0e42f77>\u041A\u0430\u0440\u0442\u0430 \u0441\u0430\u0439\u0442\u0430</h1><div class="sitemap" data-v-e0e42f77><!--[-->`);
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

export { sitemap as default };
//# sourceMappingURL=sitemap-b35daf78.mjs.map
