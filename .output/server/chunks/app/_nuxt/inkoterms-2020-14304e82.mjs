import { _ as __nuxt_component_0 } from './BreadCrumbs-c74601ed.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-img-6da1c54a.mjs';
import { _ as __nuxt_component_2 } from './GoUp-a1c9a0cf.mjs';
import { _ as _export_sfc, u as useNuxtApp, a as useHead } from '../server.mjs';
import { u as useServerHead } from './internalLinks-11d3a882.mjs';
import { ref, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import './nuxt-link-0d39ff03.mjs';
import 'ufo';
import './composables-5d51eb10.mjs';
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
  __name: "inkoterms-2020",
  __ssrInlineRender: true,
  setup(__props) {
    const { $texts } = useNuxtApp();
    useHead({
      title: "\u0418\u041D\u041A\u041E\u0422\u0415\u0420\u041C\u0421 2020"
    });
    useServerHead({
      meta: [
        { name: "description", content: "\u0421\u0442\u043E\u0438\u0442 \u043B\u0438 \u0412\u0430\u043C \u0431\u0435\u0441\u043F\u043E\u043A\u043E\u0438\u0442\u044C\u0441\u044F \u043F\u043E \u043F\u043E\u0432\u043E\u0434\u0443 \u0418\u041D\u041A\u041E\u0422\u0415\u0420\u041C\u0421 2020? \xAB\u0422\u0418\u0421 \u041B\u041E\u0414\u0416\u0418\u0421\u0422\u0418\u041A\xBB \u2014 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442\u043D\u043E-\u044D\u043A\u0441\u043F\u0435\u0434\u0438\u0442\u043E\u0440\u0441\u043A\u0430\u044F \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u044F. \u041C\u0443\u043B\u044C\u0442\u0438\u043C\u043E\u0434\u0430\u043B\u044C\u043D\u044B\u0435 \u043C\u0435\u0436\u0434\u0443\u043D\u0430\u0440\u043E\u0434\u043D\u044B\u0435 \u043A\u043E\u043D\u0442\u0435\u0439\u043D\u0435\u0440\u043D\u044B\u0435 \u043F\u0435\u0440\u0435\u0432\u043E\u0437\u043A\u0438, \u0430\u0432\u0438\u0430-, \u0430\u0432\u0442\u043E-, \u0416\u0414 \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0430 \u0433\u0440\u0443\u0437\u043E\u0432 \u043F\u043E \u0420\u043E\u0441\u0441\u0438\u0438 \u0438\u0437 \u041A\u0438\u0442\u0430\u044F \u0438 \u0441\u0442\u0440\u0430\u043D \u0410\u0437\u0438\u0438 \u043F\u043E\u0434 \u043A\u043B\u044E\u0447. \u0422\u0430\u043C\u043E\u0436\u0435\u043D\u043D\u043E\u0435 \u043E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u0438\u0435, \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u043E\u043D\u043D\u044B\u0435 \u0438 \u043F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0435 \u0441\u043A\u043B\u0430\u0434\u0441\u043A\u0438\u0435 \u0443\u0441\u043B\u0443\u0433\u0438." },
        { name: "keywords", content: $texts.seoKeywordsBase + "\u0438\u043D\u043A\u043E\u0442\u0435\u0440\u043C\u0441, \u0418\u041D\u041A\u041E\u0422\u0415\u0420\u041C\u0421 2020, \u0438\u043D\u043A\u043E\u0442\u0435\u0440\u043C\u0441 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F, \u0438\u043D\u043A\u043E\u0442\u0435\u0440\u043C\u0441 \u043D\u043E\u0432\u044B\u0435 \u0442\u0435\u0440\u043C\u0438\u043D\u044B" }
      ]
    });
    const fullScreenImgShown = ref(false);
    const showImage = () => {
      fullScreenImgShown.value = true;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SharedBreadCrumbs = __nuxt_component_0;
      const _component_nuxt_img = __nuxt_component_0$1;
      const _component_SharedGoUp = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-d48f7909><section data-v-d48f7909><div class="bg white-theme-only gradient-bg" data-v-d48f7909></div><div data-v-d48f7909>`);
      _push(ssrRenderComponent(_component_SharedBreadCrumbs, { class: "breadcrumbs" }, null, _parent));
      _push(`<h1 data-v-d48f7909>\u0418\u041D\u041A\u041E\u0422\u0415\u0420\u041C\u0421 2020</h1><h2 data-v-d48f7909> \u0418\u043D\u043A\u043E\u0442\u0435\u0440\u043C\u0441 2020 \u0432\u0441\u0442\u0443\u043F\u0438\u043B \u0432 \u0441\u0438\u043B\u0443 \u0441 \u043F\u0435\u0440\u0432\u043E\u0433\u043E \u044F\u043D\u0432\u0430\u0440\u044F 2020 \u0433\u043E\u0434\u0430 </h2><h3 data-v-d48f7909>\u0427\u0442\u043E \u0434\u0435\u043B\u0430\u0442\u044C \u0441 \u0443\u0436\u0435 \u0437\u0430\u043A\u043B\u044E\u0447\u0435\u043D\u043D\u044B\u043C\u0438 \u043A\u043E\u043D\u0442\u0440\u0430\u043A\u0442\u0430\u043C\u0438?</h3><p data-v-d48f7909> \u0418\u043D\u043A\u043E\u0442\u0435\u0440\u043C\u0441 2020 \u0432\u0441\u0442\u0443\u043F\u0438\u043B \u0432 \u0441\u0438\u043B\u0443 \u0441 \u043F\u0435\u0440\u0432\u043E\u0433\u043E \u044F\u043D\u0432\u0430\u0440\u044F 2020 \u0433\u043E\u0434\u0430, \u043E\u0434\u043D\u0430\u043A\u043E \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435 \u0441\u0442\u0430\u0440\u044B\u0445 \u0440\u0435\u0434\u0430\u043A\u0446\u0438\u0439 \u0442\u0430\u043A\u0436\u0435 \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E \u0432 \u043D\u0430\u0441\u0442\u043E\u044F\u0449\u0435\u0435 \u0432\u0440\u0435\u043C\u044F. \u0418\u043C\u0435\u043D\u043D\u043E \u043F\u043E\u044D\u0442\u043E\u043C\u0443 \u043F\u0440\u0438 \u0443\u043F\u043E\u043C\u0438\u043D\u0430\u043D\u0438\u0438 \u0443\u0441\u043B\u043E\u0432\u0438\u0439 \u043F\u043E\u0441\u0442\u0430\u0432\u043A\u0438 \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E \u0443\u043A\u0430\u0437\u044B\u0432\u0430\u0442\u044C \u0440\u0435\u0434\u0430\u043A\u0446\u0438\u044E \u041F\u0440\u0430\u0432\u0438\u043B \u0441 \u0443\u043A\u0430\u0437\u0430\u043D\u0438\u0435\u043C \u043A\u043E\u043D\u043A\u0440\u0435\u0442\u043D\u043E\u0433\u043E \u0433\u043E\u0434\u0430. </p><h3 data-v-d48f7909>\u0421\u0442\u043E\u0438\u0442 \u043B\u0438 \u0412\u0430\u043C \u0431\u0435\u0441\u043F\u043E\u043A\u043E\u0438\u0442\u044C\u0441\u044F \u043F\u043E \u043F\u043E\u0432\u043E\u0434\u0443 \u0418\u041D\u041A\u041E\u0422\u0415\u0420\u041C\u0421 2020?</h3><p data-v-d48f7909> \u041F\u0440\u0430\u0432\u0438\u043B\u0430 \u0418\u043D\u043A\u043E\u0442\u0435\u0440\u043C\u0441 \u043D\u0435 \u0437\u0430\u043C\u0435\u043D\u044F\u044E\u0442 \u0432\u043D\u0435\u0448\u043D\u0435\u0442\u043E\u0440\u0433\u043E\u0432\u044B\u0439 \u043A\u043E\u043D\u0442\u0440\u0430\u043A\u0442, \u0430 \u0442\u043E\u043B\u044C\u043A\u043E \u043F\u043E\u0437\u0432\u043E\u043B\u044F\u044E\u0442 \u0437\u043D\u0430\u0447\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0441\u043E\u043A\u0440\u0430\u0442\u0438\u0442\u044C \u0438 \u0443\u043F\u0440\u043E\u0441\u0442\u0438\u0442\u044C \u0435\u0433\u043E. \u0423\u043D\u0438\u0444\u0438\u0446\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0435 \u0443\u0441\u043B\u043E\u0432\u0438\u044F \u043D\u0435 \u0440\u0435\u0433\u043B\u0430\u043C\u0435\u043D\u0442\u0438\u0440\u0443\u044E\u0442 \u043F\u0435\u0440\u0435\u0445\u043E\u0434 \u043F\u0440\u0430\u0432\u0430 \u0441\u043E\u0431\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0441\u0442\u0438 \u043D\u0430 \u0442\u043E\u0432\u0430\u0440\u043D\u0443\u044E \u043F\u0430\u0440\u0442\u0438\u044E, \u043D\u0435 \u0443\u043A\u0430\u0437\u044B\u0432\u0430\u044E\u0442 \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u0435\u0434\u0438\u043D\u0438\u0446\u044B \u043F\u0440\u043E\u0434\u0443\u043A\u0446\u0438\u0438 \u0438\u043B\u0438 \u0441\u043F\u043E\u0441\u043E\u0431\u044B \u043E\u043F\u043B\u0430\u0442\u044B. \u041E\u043D\u0438 \u043B\u0438\u0448\u044C \u0444\u0438\u043A\u0441\u0438\u0440\u0443\u044E\u0442 \u0440\u0430\u0441\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u0438\u0435 \u043C\u0435\u0436\u0434\u0443 \u0441\u0442\u043E\u0440\u043E\u043D\u0430\u043C\u0438 \u0441\u0434\u0435\u043B\u043A\u0438 \u043A\u0443\u043F\u043B\u0438-\u043F\u0440\u043E\u0434\u0430\u0436\u0438 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u0441\u0442\u0432 \u0438 \u0444\u0438\u043D\u0430\u043D\u0441\u043E\u0432\u044B\u0445 \u0440\u0430\u0441\u0445\u043E\u0434\u043E\u0432, \u0442\u0430\u043A\u0438\u0445 \u043A\u0430\u043A: \u043E\u043F\u043B\u0430\u0442\u0430 \u043F\u0435\u0440\u0435\u0432\u043E\u0437\u043A\u0438, \u0440\u0430\u0437\u0433\u0440\u0443\u0437\u043A\u0438 \u0442\u043E\u0432\u0430\u0440\u043D\u043E\u0439 \u043F\u0430\u0440\u0442\u0438\u0438, \u0442\u0430\u043C\u043E\u0436\u0435\u043D\u043D\u043E\u0435 \u043E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u0438\u0435, \u0443\u043F\u043B\u0430\u0442\u0430 \u043D\u0430\u043B\u043E\u0433\u043E\u0432 \u0438 \u043F\u043E\u0448\u043B\u0438\u043D, \u0441\u0442\u0440\u0430\u0445\u043E\u0432\u043A\u0430, \u0430 \u0442\u0430\u043A\u0436\u0435 \u043F\u0435\u0440\u0435\u0434\u0430\u0447\u0430 \u0440\u0438\u0441\u043A\u043E\u0432 \u0432 \u0441\u043B\u0443\u0447\u0430\u0435 \u043F\u043E\u0442\u0435\u0440\u0438 \u0438 \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u044B\u0445 \u043F\u043E\u0432\u0440\u0435\u0436\u0434\u0435\u043D\u0438\u0439 \u043F\u0440\u043E\u0434\u0443\u043A\u0446\u0438\u0438. \u0412 \u043D\u043E\u0432\u044B\u0445 \u043F\u0440\u0430\u0432\u0438\u043B\u0430\u0445 \u0418\u043D\u043A\u043E\u0442\u0435\u0440\u043C\u0441 \u043E\u0436\u0438\u0434\u0430\u043B\u0438\u0441\u044C \u0431\u043E\u043B\u044C\u0448\u0438\u0435 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F \u043F\u043E \u0441\u0440\u0430\u0432\u043D\u0435\u043D\u0438\u044E \u0441 \u043F\u0440\u0435\u0434\u044B\u0434\u0443\u0449\u0438\u043C\u0438 \u0432\u0435\u0440\u0441\u0438\u044F\u043C\u0438 (\u0438\u0441\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0435 \u043D\u0435\u043A\u043E\u0442\u043E\u0440\u044B\u0445 \u0442\u0435\u0440\u043C\u0438\u043D\u043E\u0432, \u0443\u043D\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u044F \u043F\u043E \u0432\u0438\u0434\u0430\u043C \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442\u0430 \u0438 \u0442.\u0434.), \u043E\u0434\u043D\u0430\u043A\u043E \u044D\u0442\u0438 \u043E\u0436\u0438\u0434\u0430\u043D\u0438\u044F \u043D\u0435 \u043E\u043F\u0440\u0430\u0432\u0434\u0430\u043B\u0438\u0441\u044C. </p><h3 data-v-d48f7909> \u041E \u043A\u0430\u043A\u0438\u0445 \u043E\u0441\u043D\u043E\u0432\u043D\u044B\u0445 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F\u0445 \u0432 \u0418\u041D\u041A\u041E\u0422\u0415\u0420\u041C\u0421 2020 \u0412\u0430\u043C \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E \u0437\u043D\u0430\u0442\u044C? </h3><p data-v-d48f7909> \u041D\u0438 \u043E\u0434\u043D\u043E\u0433\u043E \u0442\u0435\u0440\u043C\u0438\u043D\u0430 \u043D\u0435 \u0431\u044B\u043B\u043E \u0443\u0434\u0430\u043B\u0435\u043D\u043E \u0438\u043B\u0438 \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u043E \u0432 \u043D\u043E\u0432\u043E\u0439 \u0440\u0435\u0434\u0430\u043A\u0446\u0438\u0438. \u041B\u0438\u0448\u044C \u043E\u0434\u0438\u043D \u0431\u0430\u0437\u0438\u0441 \u043F\u043E\u0441\u0442\u0430\u0432\u043A\u0438 \u0441\u043C\u0435\u043D\u0438\u043B \u0441\u0432\u043E\u0451 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435: DAT \u043F\u0435\u0440\u0435\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D \u0432 DPU. \u041F\u0440\u0438 \u044D\u0442\u043E\u043C \u043F\u0435\u0440\u0435\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435 \u043D\u043E\u0441\u0438\u0442 \u0441\u043A\u043E\u0440\u0435\u0435 \u0442\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0445\u0430\u0440\u0430\u043A\u0442\u0435\u0440. \u041A\u0430\u043A \u0438 \u0432 \u043F\u0440\u0435\u0434\u044B\u0434\u0443\u0449\u0435\u0439 \u0432\u0435\u0440\u0441\u0438\u0438 \u043D\u0435\u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0442\u0435\u0440\u043C\u0438\u043D\u044B \u043F\u0440\u0438\u043C\u0435\u043D\u044F\u044E\u0442\u0441\u044F \u0442\u043E\u043B\u044C\u043A\u043E \u043A \u043C\u043E\u0440\u0441\u043A\u0438\u043C (\u0440\u0435\u0447\u043D\u044B\u043C) \u043F\u0435\u0440\u0435\u0432\u043E\u0437\u043A\u0430\u043C \u0438 \u043D\u0435 \u0441\u0442\u0430\u043B\u0438 \u0443\u043D\u0438\u0432\u0435\u0440\u0441\u0430\u043B\u044C\u043D\u044B\u043C\u0438. </p><p data-v-d48f7909> \u0418\u0437\u043C\u0435\u043D\u0438\u043B\u043E\u0441\u044C \u043E\u0434\u043D\u043E \u0438\u0437 \u0441\u0430\u043C\u044B\u0445 \u0440\u0430\u0441\u043F\u0440\u043E\u0441\u0442\u0440\u0430\u043D\u0451\u043D\u043D\u044B\u0445 \u0431\u0430\u0437\u0438\u0441\u043E\u0432 \u043F\u043E\u0441\u0442\u0430\u0432\u043A\u0438 (FCA), \u0442\u0435\u043F\u0435\u0440\u044C \u0435\u0433\u043E \u043F\u0440\u0438\u043C\u0435\u043D\u0435\u043D\u0438\u0435 \u043F\u043E\u0437\u0432\u043E\u043B\u044F\u0435\u0442 \u0441\u0442\u043E\u0440\u043E\u043D\u0430\u043C \u0441\u0434\u0435\u043B\u043A\u0438 \u0434\u043E\u0433\u043E\u0432\u043E\u0440\u0438\u0442\u044C\u0441\u044F, \u0447\u0442\u043E \u043F\u043E\u043A\u0443\u043F\u0430\u0442\u0435\u043B\u044C \u043C\u043E\u0436\u0435\u0442 \u0443\u043A\u0430\u0437\u0430\u0442\u044C \u043F\u0435\u0440\u0435\u0432\u043E\u0437\u0447\u0438\u043A\u0443 \u0432\u044B\u0434\u0430\u0442\u044C \u043C\u043E\u0440\u0441\u043A\u043E\u0439 \u043A\u043E\u043D\u043E\u0441\u0430\u043C\u0435\u043D\u0442 \u0441 \u0431\u043E\u0440\u0442\u043E\u0432\u043E\u0439 \u0437\u0430\u043F\u0438\u0441\u044C\u044E \u043F\u0440\u043E\u0434\u0430\u0432\u0446\u0443. \u042D\u0442\u043E \u043F\u043E\u0437\u0432\u043E\u043B\u0438\u0442 \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0435\u043C\u0443 \u0432 \u043A\u043E\u0440\u043E\u0442\u043A\u0438\u0435 \u0441\u0440\u043E\u043A\u0438 \u0432\u044B\u043F\u043E\u043B\u043D\u0438\u0442\u044C \u0443\u0441\u043B\u043E\u0432\u0438\u044F \u0430\u043A\u043A\u0440\u0435\u0434\u0438\u0442\u0438\u0432\u0430. \u0422\u0430\u043A\u0436\u0435 \u043D\u043E\u0432\u043E\u0432\u0432\u0435\u0434\u0435\u043D\u0438\u044F \u043A\u043E\u0441\u043D\u0443\u043B\u0438\u0441\u044C \u0443\u0441\u043B\u043E\u0432\u0438\u0439 CIP, \u0440\u0430\u0437\u043C\u0435\u0440 \u0441\u0442\u0440\u0430\u0445\u043E\u0432\u043E\u0439 \u0441\u0443\u043C\u043C\u044B \u0432\u043E\u0437\u0440\u043E\u0441 \u0438 \u0434\u043E\u043B\u0436\u0435\u043D \u043F\u0440\u0435\u0432\u044B\u0448\u0430\u0442\u044C 110 \u043F\u0440\u043E\u0446\u0435\u043D\u0442\u043E\u0432 \u043E\u0442 \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u0438 \u0441\u0442\u0440\u0430\u0445\u0443\u0435\u043C\u043E\u0439 \u0442\u043E\u0432\u0430\u0440\u043D\u043E\u0439 \u043F\u0430\u0440\u0442\u0438\u0438. </p><p data-v-d48f7909> \u0412 \u043D\u043E\u0432\u043E\u0439 \u0440\u0435\u0434\u0430\u043A\u0446\u0438\u0438 \u0442\u0430\u043A\u0436\u0435 \u0434\u0430\u043D\u044B \u0440\u0430\u0437\u044A\u044F\u0441\u043D\u0435\u043D\u0438\u044F \u043F\u043E \u043F\u043E\u0432\u043E\u0434\u0443 \u0442\u0430\u043C\u043E\u0436\u0435\u043D\u043D\u043E\u0433\u043E \u043E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u0438\u044F \u043F\u0440\u043E\u0434\u0443\u043A\u0446\u0438\u0438 \u043D\u0430 \u0433\u0440\u0430\u043D\u0438\u0446\u0435 \u0438 \u0432\u0432\u0435\u0434\u0435\u043D\u043E \u043D\u043E\u0432\u043E\u0435 \u043F\u043E\u043D\u044F\u0442\u0438\u0435 \xAB\u0431\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E\u0441\u0442\u044C \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442\u0430\xBB. </p><p data-v-d48f7909> \u041A\u0430\u043A \u043F\u0440\u043E\u0434\u0430\u0432\u0446\u0443, \u0442\u0430\u043A \u0438 \u043F\u043E\u043A\u0443\u043F\u0430\u0442\u0435\u043B\u044E \u0432 \u043D\u043E\u0432\u043E\u0439 \u0440\u0435\u0434\u0430\u043A\u0446\u0438\u0438 \u041F\u0440\u0430\u0432\u0438\u043B \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043D\u043E \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C\u0441\u044F \u0434\u043B\u044F \u043F\u0435\u0440\u0435\u0432\u043E\u0437\u043A\u0438 \u0441\u0432\u043E\u0438\u043C \u0441\u043E\u0431\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u043C \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442\u043E\u043C, \u0430 \u043D\u0435 \u0437\u0430\u043A\u043B\u044E\u0447\u0430\u0442\u044C \u0434\u043E\u0433\u043E\u0432\u043E\u0440 \u0441 \u0442\u0440\u0435\u0442\u044C\u0438\u043C \u043B\u0438\u0446\u043E\u043C, \u043F\u0435\u0440\u0435\u0434\u0430\u0432\u0430\u044F \u044D\u0442\u0443 \u0443\u0441\u043B\u0443\u0433\u0443 \u043D\u0430 \u0430\u0443\u0442\u0441\u043E\u0440\u0441\u0438\u043D\u0433. \u0412 \u0418\u043D\u043A\u043E\u0442\u0435\u0440\u043C\u0441 2020 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442 4 \u0433\u0440\u0443\u043F\u043F\u044B \u0431\u0430\u0437\u0438\u0441\u043D\u044B\u0445 \u0443\u0441\u043B\u043E\u0432\u0438\u0439 \u043F\u043E\u0441\u0442\u0430\u0432\u043E\u043A \u043F\u0440\u043E\u0434\u0443\u043A\u0446\u0438\u0438 (E, F, C \u0438 D). \u041E\u043D\u0438 \u0434\u0435\u043B\u044F\u0442\u0441\u044F \u0441\u043E\u0433\u043B\u0430\u0441\u043D\u043E \u0440\u0430\u0441\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u0438\u044E \u043E\u0431\u044F\u0437\u0430\u043D\u043D\u043E\u0441\u0442\u0435\u0439 \u043C\u0435\u0436\u0434\u0443 \u0441\u0442\u043E\u0440\u043E\u043D\u0430\u043C\u0438 \u0432\u043D\u0435\u0448\u043D\u0435\u0442\u043E\u0440\u0433\u043E\u0432\u043E\u0439 \u0441\u0434\u0435\u043B\u043A\u0438. </p><br data-v-d48f7909><br data-v-d48f7909><div class="img-container" data-v-d48f7909>`);
      _push(ssrRenderComponent(_component_nuxt_img, {
        src: "images/incoterms.jpg",
        alt: "inkoterms-2020",
        onClick: showImage
      }, null, _parent));
      _push(`</div>`);
      if (unref(fullScreenImgShown)) {
        _push(`<div class="fullscreen-image" data-v-d48f7909><span class="close-btn" data-v-d48f7909>\xD7 </span>`);
        _push(ssrRenderComponent(_component_nuxt_img, {
          id: "fullscreen-img",
          src: "images/incoterms.jpg",
          alt: "inkoterms-2020"
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_SharedGoUp, null, null, _parent));
      _push(`</div></section></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/inkoterms-2020.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const inkoterms2020 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-d48f7909"]]);

export { inkoterms2020 as default };
//# sourceMappingURL=inkoterms-2020-14304e82.mjs.map
