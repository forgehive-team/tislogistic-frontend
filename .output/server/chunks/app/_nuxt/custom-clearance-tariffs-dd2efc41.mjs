import { _ as __nuxt_component_0 } from './BreadCrumbs-51af2094.mjs';
import { _ as __nuxt_component_2 } from './GoUp-6f51a1ea.mjs';
import { _ as _export_sfc, u as useNuxtApp, a as useHead } from '../server.mjs';
import { u as useServerHead } from './internalLinks-4b44e090.mjs';
import { useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import './nuxt-link-0d39ff03.mjs';
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
  __name: "custom-clearance-tariffs",
  __ssrInlineRender: true,
  setup(__props) {
    const { $texts } = useNuxtApp();
    useHead({
      title: "Customs clearance tariffs"
    });
    useServerHead({
      meta: [
        { name: "description", content: "Customs clearance tariffs. \xABTIS LOGISTICS\xBB - freight forwarding company. Multimodal container transportation, air-, auto-, rail-delivery of cargoes in Russia from China and Asian countries on a turnkey basis. Customs clearance, certification and professional warehousing services." },
        { name: "keywords", content: $texts.seoKeywordsBase }
      ]
    });
    const tables = [
      {
        title: "Provision of advisory services",
        rows: [
          {
            name: "Advice to participants of the CEA (determination of the TNVED code, preliminary calculation of payments, the need for certification, licensing, etc.) for each code",
            price: "Free"
          }
        ]
      },
      {
        title: "Documentation:",
        rows: [
          {
            name: "Customs declaration (CT) (1 container/1 load)",
            price: "from 15 000"
          },
          {
            name: "- for each subsequent container in the batch",
            price: " "
          },
          {
            name: "- from 2 to 5 ktk in a batch",
            price: "3 000"
          },
          {
            name: "- from 5 to 10 ktk in a batch",
            price: "2 000"
          },
          {
            name: "- 10 and above",
            price: "1 000"
          },
          {
            name: "- for each additional sheet",
            price: "3 000"
          },
          {
            name: "Issuance of necessary certificates (excluding cost of work of certification bodies)",
            price: "3 000"
          }
        ]
      },
      {
        title: "Organisational services:",
        rows: [
          {
            name: "Organisation of customs inspection",
            price: "from 6 000"
          },
          {
            name: "Organisation of customs inspection (including preliminary)",
            price: "from 6 000"
          },
          {
            name: "Organisation of sampling and sampling",
            price: "from 6 000"
          },
          {
            name: "Organisation of passage of CFC, veterinary control",
            price: "from 5 000"
          }
        ]
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SharedBreadCrumbs = __nuxt_component_0;
      const _component_SharedGoUp = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-4ed7f1fb><section data-v-4ed7f1fb><div class="bg white-theme-only gradient-bg" data-v-4ed7f1fb></div><div data-v-4ed7f1fb>`);
      _push(ssrRenderComponent(_component_SharedBreadCrumbs, { class: "breadcrumbs" }, null, _parent));
      _push(`<h1 data-v-4ed7f1fb>Customs clearance fees</h1><div class="content" data-v-4ed7f1fb><strong data-v-4ed7f1fb> Contingent tariffs for the calculation of the contract price of the Yew service Customs clearance logistician </strong><!--[-->`);
      ssrRenderList(tables, (item) => {
        _push(`<!--[--><h2 data-v-4ed7f1fb>${ssrInterpolate(item.title)}</h2><table data-v-4ed7f1fb><thead data-v-4ed7f1fb><tr data-v-4ed7f1fb><th data-v-4ed7f1fb>Name</th><th data-v-4ed7f1fb>Price, rubles</th></tr></thead><tbody data-v-4ed7f1fb><!--[-->`);
        ssrRenderList(item.rows, (row) => {
          _push(`<tr data-v-4ed7f1fb><td data-v-4ed7f1fb>${ssrInterpolate(row.name)}</td><td data-v-4ed7f1fb>${ssrInterpolate(row.price)}</td></tr>`);
        });
        _push(`<!--]--></tbody></table><!--]-->`);
      });
      _push(`<!--]--><br data-v-4ed7f1fb><h2 data-v-4ed7f1fb>Note:</h2><ul data-v-4ed7f1fb><li data-v-4ed7f1fb>Prices include VAT;</li><li data-v-4ed7f1fb>Complex regimes are at a negotiated cost;</li><li data-v-4ed7f1fb> Service fees are not included public bodies and the cost of third-party services organisations; </li><li data-v-4ed7f1fb> The timing and cost of certification services depend on the specifics of the goods themselves, the availability of other certificates and the characteristics of the certification tests carried out. Final cost of certification services determined on a case-by-case basis, after look into all aspects of the upcoming process certifications; </li><li data-v-4ed7f1fb> Discounts are given to regular customers, the size of which shall be specified in a separate addendum to treaty. </li></ul></div></div>`);
      _push(ssrRenderComponent(_component_SharedGoUp, null, null, _parent));
      _push(`</section></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/custom-clearance-tariffs.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const customClearanceTariffs = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-4ed7f1fb"]]);

export { customClearanceTariffs as default };
//# sourceMappingURL=custom-clearance-tariffs-dd2efc41.mjs.map
