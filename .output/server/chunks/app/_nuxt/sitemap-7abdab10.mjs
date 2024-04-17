import { _ as __nuxt_component_0 } from './BreadCrumbs-51af2094.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-0d39ff03.mjs';
import { _ as __nuxt_component_2 } from './GoUp-6f51a1ea.mjs';
import { _ as _export_sfc, u as useNuxtApp, a as useHead } from '../server.mjs';
import { u as useServerHead } from './internalLinks-4b44e090.mjs';
import { withCtx, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import 'ufo';
import '../../handlers/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'h3';
import 'destr';
import 'ohash';
import '../../nitro/node-server.mjs';
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
      title: "Site Map"
    });
    useServerHead({
      meta: [
        { name: "keywords", content: $texts.seoKeywordsBase }
      ]
    });
    const parsedSitemap = [
      {
        label: "Home",
        url: "/",
        subroutes: []
      },
      {
        label: "About the company",
        url: "/about",
        subroutes: []
      },
      {
        label: "Classification of containers",
        url: "/containers",
        subroutes: []
      },
      {
        label: "Position and movement of vessels",
        url: "/traffic",
        subroutes: [],
        client: true
      },
      {
        label: "Projects",
        url: "/projects",
        subroutes: [
          {
            label: "Our capability: Bulk delivery",
            url: "/projects/our-vehicles-delivery-obemnyh-gruzov"
          },
          {
            label: "Dangerous paint",
            url: "/projects/opasnaya-kraska"
          },
          {
            label: "Heavy equipment",
            url: "/projects/tyazheloe-development"
          },
          {
            label: "Lamborghinis from Japan, or the difficulties of delivery under sanctions",
            url: "/projects/Lamborghini-from-japan-or-implications-in-sanctions"
          }
        ]
      },
      {
        label: "News",
        url: "/news",
        subroutes: [
          {
            label: "We will deliver your cargo from China in flexitank containers",
            url: `/news/let's-deliver-vas-gruz-from-kitai-in-flexi-tank-conteinerax`
          },
          {
            label: "Shipment of vehicles from China in containers without queues",
            url: "/news/new-service-fixing-other-cars-in-container-without-2-x-stuk"
          },
          {
            label: "Zeon in Custody",
            url: "/news/burning-over-the-white-nose-after-the-name-zeon"
          }
        ]
      },
      {
        label: "Privacy Policy",
        url: "/privacy-policy",
        subroutes: []
      },
      {
        label: "User Agreement",
        url: "/eula",
        subroutes: []
      },
      {
        label: "Customs clearance tariffs",
        url: "/customs-clearance-tariffs",
        subroutes: []
      },
      {
        label: "Website Map",
        url: "/sitemap",
        subroutes: []
      },
      {
        label: "Services",
        url: "/services",
        subroutes: [
          {
            label: "Sea freight",
            url: "/services/sea-freight"
          },
          {
            label: "Railway transportation",
            url: "/services/railway-freight"
          },
          {
            label: "Air transport",
            url: "/services/air-freight"
          },
          {
            label: "Road freight transportation",
            url: "/services/automobile-transportation"
          },
          {
            label: "Project Logistics",
            url: "/services/project-logistics"
          },
          {
            label: "Containers rental",
            url: "/services/arenda-conteynerov"
          },
          {
            label: "Customs clearance",
            url: "/services/customs-clearance"
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
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-b0f99387><section data-v-b0f99387><div class="bg white-theme-only gradient-bg" data-v-b0f99387></div><div data-v-b0f99387>`);
      _push(ssrRenderComponent(_component_SharedBreadCrumbs, { class: "breadcrumbs" }, null, _parent));
      _push(`<h1 data-v-b0f99387>Site map</h1><div class="sitemap" data-v-b0f99387><!--[-->`);
      ssrRenderList(routesList, (sitemap2, i) => {
        _push(`<div data-v-b0f99387><!--[-->`);
        ssrRenderList(sitemap2, (route) => {
          _push(`<ul data-v-b0f99387><li data-v-b0f99387>`);
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
            _push(`<a${ssrRenderAttr("href", route.url)} data-v-b0f99387>${ssrInterpolate(route.label)}</a>`);
          }
          if (route.subroutes.length) {
            _push(`<ul class="subroutes" data-v-b0f99387><!--[-->`);
            ssrRenderList(route.subroutes, (subroute) => {
              _push(`<li data-v-b0f99387>`);
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
const sitemap = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-b0f99387"]]);

export { sitemap as default };
//# sourceMappingURL=sitemap-7abdab10.mjs.map
