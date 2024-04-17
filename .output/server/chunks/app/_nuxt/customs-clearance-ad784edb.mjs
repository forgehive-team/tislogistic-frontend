import { _ as __nuxt_component_0 } from './BreadCrumbs-51af2094.mjs';
import { _ as __nuxt_component_1 } from './ServicesLinks-b725e6d3.mjs';
import { _ as __nuxt_component_2 } from './GoUp-6f51a1ea.mjs';
import { _ as _export_sfc, u as useNuxtApp, a as useHead } from '../server.mjs';
import { u as useServerHead } from './internalLinks-4b44e090.mjs';
import { useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import './nuxt-link-0d39ff03.mjs';
import 'ufo';
import './servicesList-30883593.mjs';
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
  __name: "customs-clearance",
  __ssrInlineRender: true,
  setup(__props) {
    const { $texts } = useNuxtApp();
    useHead({
      title: "Customs Clearance"
    });
    useServerHead({
      meta: [
        { name: "description", content: "We can help you navigate the nuances of legislation and the specifics of foreign economic activity. We can serve as your outsourced procurement and logistics department, addressing all issues related to organizing international freight transportation." },
        { name: "keywords", content: $texts.seoKeywordsBase + " customs clearance, customs clearance Moscow, cost of customs clearance, calculation of customs duties, customs broker services" }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SharedBreadCrumbs = __nuxt_component_0;
      const _component_SharedServicesLinks = __nuxt_component_1;
      const _component_SharedGoUp = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-62d0e326><section data-v-62d0e326><div class="bg white-theme-only gradient-bg" data-v-62d0e326></div><div data-v-62d0e326>`);
      _push(ssrRenderComponent(_component_SharedBreadCrumbs, { class: "breadcrumbs" }, null, _parent));
      _push(`<div class="top" data-v-62d0e326><h1 data-v-62d0e326>Customs clearance</h1><p data-v-62d0e326> Explain the details of legislation and conduct foreign economic activity. If necessary replace the logistics and purchasing department for the business - we take to outsource these functional responsibilities. Resolve any issues and problems related to the organisation and international freight transport. </p></div><p class="text" data-v-62d0e326> With our company you get a team of experienced specialists. The staff has years of experience working with customs and transport, certification and other permitting authorities. We act as a licensing representative (broker) in many transport hubs. In particular, Russian ports of St. Petersburg, Vladivostok and Eastern, land border crossings between the Russian Federation and the \u0421hina. </p><h2 data-v-62d0e326>What services do we provide?</h2><ul data-v-62d0e326><li data-v-62d0e326> Advise on the application of relevant legislation and calculation of duties. </li><li data-v-62d0e326> Assistance with temporary export or import of goods. </li><li data-v-62d0e326>Compile foreign trade contracts.</li><li data-v-62d0e326>Goods declaration.</li><li data-v-62d0e326>Registration of transaction passports.</li><li data-v-62d0e326> Preparation and filing of the necessary package of documents. </li><li data-v-62d0e326> Accompanying or representing for the earliest and the proper conduct of customs clearance procedures. </li><li data-v-62d0e326> Acting as contract holder. Taking over activities required at conclusion foreign economic transaction. Signing a contract with by a foreign counterparty and the importation of goods is carried out on our behalf, but on behalf of the client. We buy products from abroad ourselves, and then we&#39;re handing it over to you on Russian territory. In doing so collect all required documents, and pay for own account customs clearance, VAT and import (import) duty. You eliminate the need to even keep government interactions to a minimum bodies. You don&#39;t have to register as of an economic activity, to enter into a currency transaction and to transfer money for goods to a foreign seller. </li></ul><p data-v-62d0e326> You can always clarify the conditions and procedure of customs clearance For this purpose, please contact TIS LOGISTICS. To do this, contact our managers - use any convenient way: </p><ul data-v-62d0e326><li data-v-62d0e326>by phone 8 800 234-80-70</li></ul><div class="bottom" data-v-62d0e326>`);
      _push(ssrRenderComponent(_component_SharedServicesLinks, null, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_SharedGoUp, null, null, _parent));
      _push(`</div></section></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/services/customs-clearance.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const customsClearance = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-62d0e326"]]);

export { customsClearance as default };
//# sourceMappingURL=customs-clearance-ad784edb.mjs.map
