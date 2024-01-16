import { _ as __nuxt_component_0 } from './BreadCrumbs-7a67b271.mjs';
import { _ as __nuxt_component_1 } from './ServicesLinks-af51bc72.mjs';
import { _ as __nuxt_component_2 } from './GoUp-9c5eead8.mjs';
import { _ as _export_sfc, u as useNuxtApp, a as useHead } from './server.mjs';
import { u as useServerHead } from './internalLinks-dc4e1b80.mjs';
import { useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import './nuxt-link-0d39ff03.mjs';
import 'ufo';
import './servicesList-d8a4a1b3.mjs';
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
  __name: "tamozhennoe-oformlenie",
  __ssrInlineRender: true,
  setup(__props) {
    const { $texts } = useNuxtApp();
    useHead({
      title: "\u0422\u0430\u043C\u043E\u0436\u0435\u043D\u043D\u043E\u0435 \u043E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u0438\u0435"
    });
    useServerHead({
      meta: [
        { name: "description", content: "\u041F\u043E\u043C\u043E\u0436\u0435\u043C \u0440\u0430\u0437\u043E\u0431\u0440\u0430\u0442\u044C\u0441\u044F \u0432 \u043D\u044E\u0430\u043D\u0441\u0430\u0445 \u0437\u0430\u043A\u043E\u043D\u043E\u0434\u0430\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u0430 \u0438 \u0441\u043F\u0435\u0446\u0438\u0444\u0438\u043A\u0435 \u0432\u0435\u0434\u0435\u043D\u0438\u044F \u0432\u043D\u0435\u0448\u043D\u0435\u0439 \u044D\u043A\u043E\u043D\u043E\u043C\u0438\u0447\u0435\u0441\u043A\u043E\u0439 \u0434\u0435\u044F\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438. \u041C\u044B \u043C\u043E\u0436\u0435\u043C \u0441\u0442\u0430\u0442\u044C \u0412\u0430\u0448\u0438\u043C \u043E\u0442\u0434\u0435\u043B\u043E\u043C \u0437\u0430\u043A\u0443\u043F\u0430 \u0438 \u043B\u043E\u0433\u0438\u0441\u0442\u0438\u043A\u0438 \u043D\u0430 \u0430\u0443\u0442\u0441\u043E\u0440\u0441\u0438\u043D\u0433\u0435, \u0430 \u0442\u0430\u043A\u0436\u0435 \u0440\u0435\u0448\u0430\u0442\u044C \u0432\u0441\u0435 \u0432\u043E\u043F\u0440\u043E\u0441\u044B \u043F\u043E \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438 \u043C\u0435\u0436\u0434\u0443\u043D\u0430\u0440\u043E\u0434\u043D\u044B\u0445 \u0433\u0440\u0443\u0437\u043E\u0432\u044B\u0445 \u043F\u0435\u0440\u0435\u0432\u043E\u0437\u043E\u043A." },
        { name: "keywords", content: $texts.seoKeywordsBase + ' \u0442\u0430\u043C\u043E\u0436\u0435\u043D\u043D\u043E\u0435 \u043E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u0438\u0435 \u0433\u0440\u0443\u0437\u043E\u0432, \u0442\u0430\u043C\u043E\u0436\u0435\u043D\u043D\u043E\u0435 \u043E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u0438\u0435 \u043C\u043E\u0441\u043A\u0432\u0430, \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u0442\u0430\u043C\u043E\u0436\u0435\u043D\u043D\u043E\u0433\u043E \u043E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u0438\u044F, \u0440\u0430\u0441\u0447\u0435\u0442 \u0442\u0430\u043C\u043E\u0436\u0435\u043D\u043D\u043E\u0439 \u043F\u043E\u0448\u043B\u0438\u043D\u044B, \u0443\u0441\u043B\u0443\u0433\u0438 \u0442\u0430\u043C\u043E\u0436\u0435\u043D\u043D\u043E\u0433\u043E \u0431\u0440\u043E\u043A\u0435\u0440\u0430"' }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SharedBreadCrumbs = __nuxt_component_0;
      const _component_SharedServicesLinks = __nuxt_component_1;
      const _component_SharedGoUp = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-09780d33><section data-v-09780d33><div class="bg white-theme-only gradient-bg" data-v-09780d33></div><div data-v-09780d33>`);
      _push(ssrRenderComponent(_component_SharedBreadCrumbs, { class: "breadcrumbs" }, null, _parent));
      _push(`<div class="top" data-v-09780d33><h1 data-v-09780d33>\u0422\u0430\u043C\u043E\u0436\u0435\u043D\u043D\u043E\u0435 \u043E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u0438\u0435</h1><p data-v-09780d33> \u0420\u0430\u0437\u044A\u044F\u0441\u043D\u044F\u0435\u043C \u043D\u044E\u0430\u043D\u0441\u044B \u0437\u0430\u043A\u043E\u043D\u043E\u0434\u0430\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u0430 \u0438 \u0432\u0435\u0434\u0435\u043D\u0438\u044F \u0432\u043D\u0435\u0448\u043D\u0435\u044D\u043A\u043E\u043D\u043E\u043C\u0438\u0447\u0435\u0441\u043A\u043E\u0439 \u0434\u0435\u044F\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438. \u041F\u0440\u0438 \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E\u0441\u0442\u0438 \u0437\u0430\u043C\u0435\u043D\u044F\u0435\u043C \u0434\u043B\u044F \u0431\u0438\u0437\u043D\u0435\u0441\u0430 \u043E\u0442\u0434\u0435\u043B \u043B\u043E\u0433\u0438\u0441\u0442\u0438\u043A\u0438 \u0438 \u0437\u0430\u043A\u0443\u043F\u043E\u043A \u2014 \u0431\u0435\u0440\u0435\u043C \u044D\u0442\u0438 \u0444\u0443\u043D\u043A\u0446\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0435 \u043E\u0431\u044F\u0437\u0430\u043D\u043D\u043E\u0441\u0442\u0438 \u043D\u0430 \u0430\u0443\u0442\u0441\u043E\u0440\u0441\u0438\u043D\u0433. \u0420\u0435\u0448\u0430\u0435\u043C \u043B\u044E\u0431\u044B\u0435 \u0432\u043E\u043F\u0440\u043E\u0441\u044B \u0438 \u043F\u0440\u043E\u0431\u043B\u0435\u043C\u044B, \u0441\u0432\u044F\u0437\u0430\u043D\u043D\u044B\u0435 \u0441 \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0435\u0439 \u0438 \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u0435\u043C \u043C\u0435\u0436\u0434\u0443\u043D\u0430\u0440\u043E\u0434\u043D\u044B\u0445 \u0433\u0440\u0443\u0437\u043E\u0432\u044B\u0445 \u043F\u0435\u0440\u0435\u0432\u043E\u0437\u043E\u043A. </p></div><p class="text" data-v-09780d33> \u0412 \u043B\u0438\u0446\u0435 \u043D\u0430\u0448\u0435\u0439 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438 \u0412\u044B \u043F\u043E\u043B\u0443\u0447\u0430\u0435\u0442\u0435 \u043A\u043E\u043C\u0430\u043D\u0434\u0443 \u043E\u043F\u044B\u0442\u043D\u044B\u0445 \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0441\u0442\u043E\u0432. \u0412 \u0430\u0440\u0441\u0435\u043D\u0430\u043B\u0435 \u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u043E\u0432 \u2014 \u0433\u043E\u0434\u044B \u0440\u0430\u0431\u043E\u0442\u044B \u0441 \u0442\u0430\u043C\u043E\u0436\u0435\u043D\u043D\u044B\u043C\u0438 \u0438 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442\u043D\u044B\u043C\u0438, \u0441 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u043E\u043D\u043D\u044B\u043C\u0438 \u0438 \u0438\u043D\u044B\u043C\u0438 \u0440\u0430\u0437\u0440\u0435\u0448\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u043C\u0438 \u043E\u0440\u0433\u0430\u043D\u0430\u043C\u0438. \u0412\u044B\u0441\u0442\u0443\u043F\u0430\u0435\u043C \u0432 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u043B\u0438\u0446\u0435\u043D\u0437\u0438\u043E\u043D\u043D\u043E\u0433\u043E \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u0438\u0442\u0435\u043B\u044F (\u0431\u0440\u043E\u043A\u0435\u0440\u0430) \u0432\u043E \u043C\u043D\u043E\u0433\u0438\u0445 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442\u043D\u044B\u0445 \u0443\u0437\u043B\u0430\u0445. \u0412 \u0447\u0430\u0441\u0442\u043D\u043E\u0441\u0442\u0438, \u044D\u0442\u043E \u043F\u043E\u0440\u0442\u044B \u0421\u0430\u043D\u043A\u0442-\u041F\u0435\u0442\u0435\u0440\u0431\u0443\u0440\u0433, \u0412\u043B\u0430\u0434\u0438\u0432\u043E\u0441\u0442\u043E\u043A \u0438 \u0412\u043E\u0441\u0442\u043E\u0447\u043D\u044B\u0439, \u0441\u0443\u0445\u043E\u043F\u0443\u0442\u043D\u044B\u0435 \u043F\u043E\u0433\u0440\u0430\u043D\u0438\u0447\u043D\u044B\u0435 \u043F\u0435\u0440\u0435\u0445\u043E\u0434\u044B \u043C\u0435\u0436\u0434\u0443 \u0420\u0424 \u0438 \u041A\u041D\u0420. </p><h2 data-v-09780d33>\u041A\u0430\u043A\u0438\u0435 \u0443\u0441\u043B\u0443\u0433\u0438 \u043C\u044B \u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0435\u043C?</h2><ul data-v-09780d33><li data-v-09780d33> \u041A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0446\u0438\u0438 \u043F\u043E \u043F\u0440\u0438\u043C\u0435\u043D\u0435\u043D\u0438\u044E \u043F\u0440\u043E\u0444\u0438\u043B\u044C\u043D\u043E\u0433\u043E \u0437\u0430\u043A\u043E\u043D\u043E\u0434\u0430\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u0430 \u0438 \u0440\u0430\u0441\u0447\u0435\u0442\u0443 \u043F\u043E\u0448\u043B\u0438\u043D. </li><li data-v-09780d33> \u041F\u043E\u043C\u043E\u0449\u044C \u0432 \u043F\u0440\u043E\u0432\u0435\u0434\u0435\u043D\u0438\u0438 \u0432\u0440\u0435\u043C\u0435\u043D\u043D\u043E\u0433\u043E \u0432\u044B\u0432\u043E\u0437\u0430 \u0438\u043B\u0438 \u0432\u0432\u043E\u0437\u0430 \u0433\u0440\u0443\u0437\u043E\u0432. </li><li data-v-09780d33>\u0421\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u0432\u043D\u0435\u0448\u043D\u0435\u0442\u043E\u0440\u0433\u043E\u0432\u044B\u0445 \u043A\u043E\u043D\u0442\u0440\u0430\u043A\u0442\u043E\u0432.</li><li data-v-09780d33>\u0414\u0435\u043A\u043B\u0430\u0440\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u0442\u043E\u0432\u0430\u0440\u043E\u0432.</li><li data-v-09780d33>\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F \u043F\u0430\u0441\u043F\u043E\u0440\u0442\u043E\u0432 \u0441\u0434\u0435\u043B\u043E\u043A.</li><li data-v-09780d33>\u041F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u043A\u0430 \u0438 \u043F\u043E\u0434\u0430\u0447\u0430 \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E\u0433\u043E \u043F\u0430\u043A\u0435\u0442\u0430 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u043E\u0432.</li><li data-v-09780d33> \u0421\u043E\u043F\u0440\u043E\u0432\u043E\u0436\u0434\u0435\u043D\u0438\u0435 \u0438\u043B\u0438 \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u0438\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u043E \u0434\u043B\u044F \u0441\u043A\u043E\u0440\u0435\u0439\u0448\u0435\u0433\u043E \u0438 \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u043E\u0433\u043E \u043F\u0440\u043E\u0432\u0435\u0434\u0435\u043D\u0438\u044F \u043F\u0440\u043E\u0446\u0435\u0434\u0443\u0440\u044B \u0442\u0430\u043C\u043E\u0436\u0435\u043D\u043D\u043E\u0433\u043E \u043E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u0438\u044F. </li><li data-v-09780d33> \u0412\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u0435 \u0444\u0443\u043D\u043A\u0446\u0438\u0439 \u043A\u043E\u043D\u0442\u0440\u0430\u043A\u0442\u043E\u0434\u0435\u0440\u0436\u0430\u0442\u0435\u043B\u044F. \u0411\u0435\u0440\u0435\u043C \u043D\u0430 \u0441\u0435\u0431\u044F \u0432\u0441\u0435 \u043C\u0435\u0440\u043E\u043F\u0440\u0438\u044F\u0442\u0438\u044F, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0442\u0440\u0435\u0431\u0443\u044E\u0442\u0441\u044F \u043F\u0440\u0438 \u0437\u0430\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0438 \u0432\u043D\u0435\u0448\u043D\u0435\u044D\u043A\u043E\u043D\u043E\u043C\u0438\u0447\u0435\u0441\u043A\u043E\u0439 \u0441\u0434\u0435\u043B\u043A\u0438. \u041F\u043E\u0434\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u0434\u043E\u0433\u043E\u0432\u043E\u0440\u0430 \u0441 \u0438\u043D\u043E\u0441\u0442\u0440\u0430\u043D\u043D\u044B\u043C \u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u043E\u043C \u0438 \u0438\u043C\u043F\u043E\u0440\u0442 \u0442\u043E\u0432\u0430\u0440\u043E\u0432 \u043E\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u043E\u0442 \u043D\u0430\u0448\u0435\u0433\u043E \u0438\u043C\u0435\u043D\u0438, \u043D\u043E \u043F\u043E \u043F\u043E\u0440\u0443\u0447\u0435\u043D\u0438\u044E \u043A\u043B\u0438\u0435\u043D\u0442\u0430. \u041C\u044B \u0441\u0430\u043C\u043E\u0441\u0442\u043E\u044F\u0442\u0435\u043B\u044C\u043D\u043E \u043F\u043E\u043A\u0443\u043F\u0430\u0435\u043C \u043F\u0440\u043E\u0434\u0443\u043A\u0446\u0438\u044E \u0437\u0430 \u0440\u0443\u0431\u0435\u0436\u043E\u043C, \u0430 \u043F\u043E\u0442\u043E\u043C \u043F\u0435\u0440\u0435\u0434\u0430\u0435\u043C \u0435\u0435 \u0412\u0430\u043C \u0443\u0436\u0435 \u043D\u0430 \u0440\u043E\u0441\u0441\u0438\u0439\u0441\u043A\u043E\u0439 \u0442\u0435\u0440\u0440\u0438\u0442\u043E\u0440\u0438\u0438. \u041F\u0440\u0438 \u044D\u0442\u043E\u043C \u0441\u043E\u0431\u0438\u0440\u0430\u0435\u043C \u0432\u0441\u0435 \u0442\u0440\u0435\u0431\u0443\u0435\u043C\u044B\u0435 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u044B, \u0430 \u0442\u0430\u043A\u0436\u0435 \u043E\u043F\u043B\u0430\u0447\u0438\u0432\u0430\u0435\u043C \u0437\u0430 \u0441\u0432\u043E\u0439 \u0441\u0447\u0435\u0442 \u0442\u0430\u043C\u043E\u0436\u0435\u043D\u043D\u043E\u0435 \u043E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u0438\u0435, \u041D\u0414\u0421 \u0438 \u0438\u043C\u043F\u043E\u0440\u0442\u043D\u0443\u044E (\u0432\u0432\u043E\u0437\u043D\u0443\u044E) \u043F\u043E\u0448\u043B\u0438\u043D\u0443. \u0412\u044B \u0438\u0437\u0431\u0430\u0432\u043B\u044F\u0435\u0442\u0435\u0441\u044C \u043E\u0442 \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E\u0441\u0442\u0438 \u0434\u0430\u0436\u0435 \u043C\u0438\u043D\u0438\u043C\u0430\u043B\u044C\u043D\u043E \u0432\u0437\u0430\u0438\u043C\u043E\u0434\u0435\u0439\u0441\u0442\u0432\u043E\u0432\u0430\u0442\u044C \u0441 \u0433\u043E\u0441\u0443\u0434\u0430\u0440\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u043C\u0438 \u043E\u0440\u0433\u0430\u043D\u0430\u043C\u0438. \u0412\u0430\u043C \u043D\u0435 \u043F\u0440\u0438\u0434\u0435\u0442\u0441\u044F \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C\u0441\u044F \u0432 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0443\u0447\u0430\u0441\u0442\u043D\u0438\u043A\u0430 \u0412\u042D\u0414, \u0437\u0430\u043A\u043B\u044E\u0447\u0430\u0442\u044C \u0432\u0430\u043B\u044E\u0442\u043D\u0443\u044E \u0441\u0434\u0435\u043B\u043A\u0443 \u0438 \u043F\u0435\u0440\u0435\u0432\u043E\u0434\u0438\u0442\u044C \u0434\u0435\u043D\u044C\u0433\u0438 \u0437\u0430 \u0442\u043E\u0432\u0430\u0440 \u0438\u043D\u043E\u0441\u0442\u0440\u0430\u043D\u043D\u043E\u043C\u0443 \u043F\u0440\u043E\u0434\u0430\u0432\u0446\u0443. </li></ul><p data-v-09780d33> \u0412\u044B \u0432\u0441\u0435\u0433\u0434\u0430 \u043C\u043E\u0436\u0435\u0442\u0435 \u0443\u0442\u043E\u0447\u043D\u0438\u0442\u044C \u0443\u0441\u043B\u043E\u0432\u0438\u044F \u0438 \u043F\u043E\u0440\u044F\u0434\u043E\u043A \u0442\u0430\u043C\u043E\u0436\u0435\u043D\u043D\u043E\u0433\u043E \u043E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u0438\u044F \u0432 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438 \xAB\u0422\u0438\u0441 \u041B\u043E\u0434\u0436\u0438\u0441\u0442\u0438\u043A\xBB. \u0414\u043B\u044F \u044D\u0442\u043E\u0433\u043E \u0441\u0432\u044F\u0436\u0438\u0442\u0435\u0441\u044C \u0441 \u043D\u0430\u0448\u0438\u043C\u0438 \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440\u0430\u043C\u0438 \u2014 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0439\u0442\u0435 \u043B\u044E\u0431\u043E\u0439 \u0443\u0434\u043E\u0431\u043D\u044B\u0439 \u0441\u043F\u043E\u0441\u043E\u0431: </p><ul data-v-09780d33><li data-v-09780d33>\u043F\u043E \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0443 8 800 234-80-70</li><li data-v-09780d33>\u0438\u043B\u0438 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u043E\u0439 \u043F\u043E\u0447\u0442\u0435 info@tislogistic.ru</li></ul><div class="bottom" data-v-09780d33>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/services/tamozhennoe-oformlenie.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const tamozhennoeOformlenie = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-09780d33"]]);

export { tamozhennoeOformlenie as default };
//# sourceMappingURL=tamozhennoe-oformlenie-fc1be6fe.mjs.map