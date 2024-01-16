import { _ as __nuxt_component_0 } from './BreadCrumbs-7a67b271.mjs';
import { _ as __nuxt_component_2 } from './GoUp-9c5eead8.mjs';
import { _ as _export_sfc, u as useNuxtApp, a as useHead } from './server.mjs';
import { u as useServerHead } from './internalLinks-dc4e1b80.mjs';
import { useSSRContext } from 'file://C:/Users/tzhovtyy/Desktop/tislogistic-frontend/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'file://C:/Users/tzhovtyy/Desktop/tislogistic-frontend/node_modules/vue/server-renderer/index.mjs';
import './nuxt-link-0d39ff03.mjs';
import 'file://C:/Users/tzhovtyy/Desktop/tislogistic-frontend/node_modules/ufo/dist/index.mjs';
import './renderer.mjs';
import 'file://C:/Users/tzhovtyy/Desktop/tislogistic-frontend/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file://C:/Users/tzhovtyy/Desktop/tislogistic-frontend/node_modules/h3/dist/index.mjs';
import 'file://C:/Users/tzhovtyy/Desktop/tislogistic-frontend/node_modules/destr/dist/index.mjs';
import 'file://C:/Users/tzhovtyy/Desktop/tislogistic-frontend/node_modules/ohash/dist/index.mjs';
import './nitro-prerenderer.mjs';
import 'file://C:/Users/tzhovtyy/Desktop/tislogistic-frontend/node_modules/node-fetch-native/dist/polyfill.mjs';
import 'file://C:/Users/tzhovtyy/Desktop/tislogistic-frontend/node_modules/ofetch/dist/node.mjs';
import 'file://C:/Users/tzhovtyy/Desktop/tislogistic-frontend/node_modules/unenv/runtime/fetch/index.mjs';
import 'file://C:/Users/tzhovtyy/Desktop/tislogistic-frontend/node_modules/hookable/dist/index.mjs';
import 'file://C:/Users/tzhovtyy/Desktop/tislogistic-frontend/node_modules/scule/dist/index.mjs';
import 'file://C:/Users/tzhovtyy/Desktop/tislogistic-frontend/node_modules/defu/dist/defu.mjs';
import 'file://C:/Users/tzhovtyy/Desktop/tislogistic-frontend/node_modules/unstorage/dist/index.mjs';
import 'file://C:/Users/tzhovtyy/Desktop/tislogistic-frontend/node_modules/unstorage/drivers/fs.mjs';
import 'file://C:/Users/tzhovtyy/Desktop/tislogistic-frontend/node_modules/radix3/dist/index.mjs';
import 'node:url';
import 'file://C:/Users/tzhovtyy/Desktop/tislogistic-frontend/node_modules/ipx/dist/index.mjs';
import 'file://C:/Users/tzhovtyy/Desktop/tislogistic-frontend/node_modules/unctx/dist/index.mjs';
import 'file://C:/Users/tzhovtyy/Desktop/tislogistic-frontend/node_modules/vue-router/dist/vue-router.node.mjs';

const _sfc_main = {
  __name: "tarify-na-tamozhennoe-oformlenie-gruzov",
  __ssrInlineRender: true,
  setup(__props) {
    const { $texts } = useNuxtApp();
    useHead({
      title: "\u0422\u0430\u0440\u0438\u0444\u044B \u043D\u0430 \u0442\u0430\u043C\u043E\u0436\u0435\u043D\u043D\u043E\u0435 \u043E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u0438\u0435 \u0433\u0440\u0443\u0437\u043E\u0432"
    });
    useServerHead({
      meta: [
        { name: "description", content: "\u0422\u0430\u0440\u0438\u0444\u044B \u043D\u0430 \u0442\u0430\u043C\u043E\u0436\u0435\u043D\u043D\u043E\u0435 \u043E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u0438\u0435 \u0433\u0440\u0443\u0437\u043E\u0432. \xAB\u0422\u0438\u0441 \u041B\u043E\u0434\u0436\u0438\u0441\u0442\u0438\u043A\xBB \u2014 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442\u043D\u043E-\u044D\u043A\u0441\u043F\u0435\u0434\u0438\u0442\u043E\u0440\u0441\u043A\u0430\u044F \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u044F. \u041C\u0443\u043B\u044C\u0442\u0438\u043C\u043E\u0434\u0430\u043B\u044C\u043D\u044B\u0435 \u043A\u043E\u043D\u0442\u0435\u0439\u043D\u0435\u0440\u043D\u044B\u0435 \u043F\u0435\u0440\u0435\u0432\u043E\u0437\u043A\u0438, \u0430\u0432\u0438\u0430-, \u0430\u0432\u0442\u043E-, \u0416\u0414 \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0430 \u0433\u0440\u0443\u0437\u043E\u0432 \u043F\u043E \u0420\u043E\u0441\u0441\u0438\u0438 \u0438\u0437 \u041A\u0438\u0442\u0430\u044F \u0438 \u0441\u0442\u0440\u0430\u043D \u0410\u0437\u0438\u0438 \u043F\u043E\u0434 \u043A\u043B\u044E\u0447. \u0422\u0430\u043C\u043E\u0436\u0435\u043D\u043D\u043E\u0435 \u043E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u0438\u0435, \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u043E\u043D\u043D\u044B\u0435 \u0438 \u043F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0435 \u0441\u043A\u043B\u0430\u0434\u0441\u043A\u0438\u0435 \u0443\u0441\u043B\u0443\u0433\u0438." },
        { name: "keywords", content: $texts.seoKeywordsBase }
      ]
    });
    const tables = [
      {
        title: "\u041E\u043A\u0430\u0437\u0430\u043D\u0438\u0435 \u043A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0446\u0438\u043E\u043D\u043D\u044B\u0445 \u0443\u0441\u043B\u0443\u0433",
        rows: [
          {
            name: "\u041A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0446\u0438\u044F \u0443\u0447\u0430\u0441\u0442\u043D\u0438\u043A\u0430\u043C \u0412\u042D\u0414 (\u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u0438\u0435 \u043A\u043E\u0434\u0430 \u0422\u041D\u0412\u042D\u0414, \u043F\u0440\u0435\u0434\u0432\u0430\u0440\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0439 \u0440\u0430\u0441\u0447\u0435\u0442 \u043F\u043B\u0430\u0442\u0435\u0436\u0435\u0439, \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E\u0441\u0442\u044C \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u0438, \u043B\u0438\u0446\u0435\u043D\u0437\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F \u0438 \u0442.\u043F.) \u0437\u0430 \u043A\u0430\u0436\u0434\u044B\u0439 \u043A\u043E\u0434",
            price: "\u0411\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u043E"
          }
        ]
      },
      {
        title: "\u041E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u0438\u0435 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u043E\u0432:",
        rows: [
          {
            name: "\u041E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u0438\u0435 \u0442\u0430\u043C\u043E\u0436\u0435\u043D\u043D\u043E\u0439 \u0434\u0435\u043A\u043B\u0430\u0440\u0430\u0446\u0438\u0438 (\u0414\u0422)(1 \u043A\u043E\u043D\u0442\u0435\u0439\u043D\u0435\u0440/1\u0442\u043E\u0432\u0430\u0440)",
            price: "\u043E\u0442 15 000"
          },
          {
            name: "\u2014 \u0437\u0430 \u043A\u0430\u0436\u0434\u044B\u0439 \u043F\u043E\u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0439 \u043A\u043E\u043D\u0442\u0435\u0439\u043D\u0435\u0440 \u0432 \u043F\u0430\u0440\u0442\u0438\u0438",
            price: ""
          },
          {
            name: "\u2014 \u043E\u0442 2 \u0434\u043E 5 \u043A\u0442\u043A \u0432 \u043F\u0430\u0440\u0442\u0438\u0438",
            price: "3 000"
          },
          {
            name: "\u2014 \u043E\u0442 5 \u0434\u043E 10 \u043A\u0442\u043A \u0432 \u043F\u0430\u0440\u0442\u0438\u0438",
            price: "2 000"
          },
          {
            name: "\u2014 \u043E\u0442 10 \u0438 \u0432\u044B\u0448\u0435",
            price: "1 000"
          },
          {
            name: "\u2014 \u0437\u0430 \u043A\u0430\u0436\u0434\u044B\u0439 \u0434\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0439 \u043B\u0438\u0441\u0442",
            price: "3 000"
          },
          {
            name: "\u041E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u0438\u0435 \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u044B\u0445 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u043E\u0432 (\u0431\u0435\u0437 \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u0438 \u0440\u0430\u0431\u043E\u0442 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u043E\u043D\u043D\u044B\u0445 \u043E\u0440\u0433\u0430\u043D\u043E\u0432)",
            price: "3 000"
          }
        ]
      },
      {
        title: "\u041E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u043E\u043D\u043D\u044B\u0435 \u0443\u0441\u043B\u0443\u0433\u0438:",
        rows: [
          {
            name: "\u041E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F \u0442\u0430\u043C\u043E\u0436\u0435\u043D\u043D\u043E\u0433\u043E \u0434\u043E\u0441\u043C\u043E\u0442\u0440\u0430",
            price: "\u043E\u0442 6 000"
          },
          {
            name: "\u041E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F \u0442\u0430\u043C\u043E\u0436\u0435\u043D\u043D\u043E\u0433\u043E \u043E\u0441\u043C\u043E\u0442\u0440\u0430 (\u0432 \u0442.\u0447. \u043F\u0440\u0435\u0434\u0432\u0430\u0440\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0433\u043E)",
            price: "\u043E\u0442 6 000"
          },
          {
            name: "\u041E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F \u043E\u0442\u0431\u043E\u0440\u0430 \u043F\u0440\u043E\u0431 \u0438 \u043E\u0431\u0440\u0430\u0437\u0446\u043E\u0432",
            price: "\u043E\u0442 6 000"
          },
          {
            name: "\u041E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F \u043F\u0440\u043E\u0445\u043E\u0436\u0434\u0435\u043D\u0438\u044F \u041A\u0424\u041A, \u0432\u0435\u0442\u0435\u0440\u0438\u043D\u0430\u0440\u043D\u043E\u0433\u043E \u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044F",
            price: "\u043E\u0442 5 000"
          }
        ]
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SharedBreadCrumbs = __nuxt_component_0;
      const _component_SharedGoUp = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-ee7f966c><section data-v-ee7f966c><div class="bg white-theme-only gradient-bg" data-v-ee7f966c></div><div data-v-ee7f966c>`);
      _push(ssrRenderComponent(_component_SharedBreadCrumbs, { class: "breadcrumbs" }, null, _parent));
      _push(`<h1 data-v-ee7f966c>\u0422\u0430\u0440\u0438\u0444\u044B \u043D\u0430 \u0442\u0430\u043C\u043E\u0436\u0435\u043D\u043D\u043E\u0435 \u043E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u0438\u0435 \u0433\u0440\u0443\u0437\u043E\u0432</h1><div class="content" data-v-ee7f966c><strong data-v-ee7f966c> \u0423\u0441\u043B\u043E\u0432\u043D\u044B\u0435 \u0442\u0430\u0440\u0438\u0444\u044B \u0434\u043B\u044F \u0440\u0430\u0441\u0447\u0435\u0442\u0430 \u0434\u043E\u0433\u043E\u0432\u043E\u0440\u043D\u043E\u0439 \u0446\u0435\u043D\u044B \u0443\u0441\u043B\u0443\u0433\u0438 \u0422\u0438\u0441 \u041B\u043E\u0434\u0436\u0438\u0441\u0442\u0438\u043A \u043F\u043E \u0442\u0430\u043C\u043E\u0436\u0435\u043D\u043D\u043E\u043C\u0443 \u043E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u0438\u044E \u0433\u0440\u0443\u0437\u043E\u0432 </strong><!--[-->`);
      ssrRenderList(tables, (item) => {
        _push(`<!--[--><h2 data-v-ee7f966c>${ssrInterpolate(item.title)}</h2><table data-v-ee7f966c><thead data-v-ee7f966c><tr data-v-ee7f966c><th data-v-ee7f966c>\u041D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435</th><th data-v-ee7f966c>\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C, \u0440\u0443\u0431.</th></tr></thead><tbody data-v-ee7f966c><!--[-->`);
        ssrRenderList(item.rows, (row) => {
          _push(`<tr data-v-ee7f966c><td data-v-ee7f966c>${ssrInterpolate(row.name)}</td><td data-v-ee7f966c>${ssrInterpolate(row.price)}</td></tr>`);
        });
        _push(`<!--]--></tbody></table><!--]-->`);
      });
      _push(`<!--]--><br data-v-ee7f966c><h2 data-v-ee7f966c>\u041F\u0440\u0438\u043C\u0435\u0447\u0430\u043D\u0438\u0435:</h2><ul data-v-ee7f966c><li data-v-ee7f966c>\u0426\u0435\u043D\u044B \u0443\u043A\u0430\u0437\u0430\u043D\u044B \u0441 \u0443\u0447\u0435\u0442\u043E\u043C \u041D\u0414\u0421;</li><li data-v-ee7f966c> \u0421\u043B\u043E\u0436\u043D\u044B\u0435 \u0440\u0435\u0436\u0438\u043C\u044B \u043E\u0444\u043E\u0440\u043C\u043B\u044F\u044E\u0442\u0441\u044F \u043F\u043E \u0434\u043E\u0433\u043E\u0432\u043E\u0440\u043D\u043E\u0439 \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u0438; </li><li data-v-ee7f966c> \u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u0443\u0441\u043B\u0443\u0433 \u043D\u0435 \u0432\u043A\u043B\u044E\u0447\u0430\u0435\u0442 \u0432 \u0441\u0435\u0431\u044F \u0441\u0431\u043E\u0440\u044B \u0433\u043E\u0441\u0443\u0434\u0430\u0440\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0445 \u043E\u0440\u0433\u0430\u043D\u043E\u0432 \u0438 \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u0443\u0441\u043B\u0443\u0433 \u0441\u0442\u043E\u0440\u043E\u043D\u043D\u0438\u0445 \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0439; </li><li data-v-ee7f966c> \u0421\u0440\u043E\u043A\u0438 \u0438 \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u0443\u0441\u043B\u0443\u0433 \u043F\u043E \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u0438 \u0437\u0430\u0432\u0438\u0441\u044F\u0442 \u043E\u0442 \u0441\u043F\u0435\u0446\u0438\u0444\u0438\u043A\u0438 \u0441\u0430\u043C\u043E\u0433\u043E \u0442\u043E\u0432\u0430\u0440\u0430, \u043D\u0430\u043B\u0438\u0447\u0438\u044F \u0434\u0440\u0443\u0433\u0438\u0445 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u043E\u0432 \u0438 \u043E\u0441\u043E\u0431\u0435\u043D\u043D\u043E\u0441\u0442\u0435\u0439 \u043F\u0440\u043E\u0432\u043E\u0434\u0438\u043C\u044B\u0445 \u0438\u0441\u043F\u044B\u0442\u0430\u043D\u0438\u0439 \u043F\u043E \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u0438. \u041E\u043A\u043E\u043D\u0447\u0430\u0442\u0435\u043B\u044C\u043D\u0430\u044F \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u043E\u043D\u043D\u044B\u0445 \u0443\u0441\u043B\u0443\u0433 \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u044F\u0435\u0442\u0441\u044F \u0432 \u043A\u0430\u0436\u0434\u043E\u043C \u0441\u043B\u0443\u0447\u0430\u0435 \u043E\u0442\u0434\u0435\u043B\u044C\u043D\u043E, \u043F\u043E\u0441\u043B\u0435 \u0438\u0437\u0443\u0447\u0435\u043D\u0438\u044F \u0432\u0441\u0435\u0445 \u0430\u0441\u043F\u0435\u043A\u0442\u043E\u0432 \u043F\u0440\u0435\u0434\u0441\u0442\u043E\u044F\u0449\u0435\u0433\u043E \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u0430 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u0438; </li><li data-v-ee7f966c> \u041F\u043E\u0441\u0442\u043E\u044F\u043D\u043D\u044B\u043C \u043A\u043B\u0438\u0435\u043D\u0442\u0430\u043C \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u044E\u0442\u0441\u044F \u0441\u043A\u0438\u0434\u043A\u0438, \u0440\u0430\u0437\u043C\u0435\u0440 \u043A\u043E\u0442\u043E\u0440\u044B\u0445 \u043E\u0433\u043E\u0432\u0430\u0440\u0438\u0432\u0430\u0435\u0442\u0441\u044F \u043E\u0442\u0434\u0435\u043B\u044C\u043D\u044B\u043C \u0434\u043E\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u0435\u043C \u043A \u0434\u043E\u0433\u043E\u0432\u043E\u0440\u0443. </li></ul></div></div>`);
      _push(ssrRenderComponent(_component_SharedGoUp, null, null, _parent));
      _push(`</section></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tarify-na-tamozhennoe-oformlenie-gruzov.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const tarifyNaTamozhennoeOformlenieGruzov = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-ee7f966c"]]);

export { tarifyNaTamozhennoeOformlenieGruzov as default };
//# sourceMappingURL=tarify-na-tamozhennoe-oformlenie-gruzov-aece5037.mjs.map
