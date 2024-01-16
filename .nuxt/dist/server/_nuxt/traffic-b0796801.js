import { _ as __nuxt_component_0 } from "./BreadCrumbs-7a67b271.js";
import { _ as __nuxt_component_1 } from "./ServicesLinks-af51bc72.js";
import { _ as __nuxt_component_2 } from "./GoUp-9c5eead8.js";
import { _ as _export_sfc, u as useNuxtApp, a as useHead } from "../server.mjs";
import { u as useServerHead } from "./internalLinks-dc4e1b80.js";
import { useSSRContext } from "vue";
import "destr";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import "./nuxt-link-0d39ff03.js";
import "ufo";
import "hookable";
import "./servicesList-d8a4a1b3.js";
import "ofetch";
import "#internal/nitro";
import "unctx";
/* empty css                     */import "vue-router";
import "h3";
import "defu";
const Traffic_scss_vue_type_style_index_0_src_bf10ed65_scoped_bf10ed65_lang = "";
const _sfc_main = {
  __name: "traffic",
  __ssrInlineRender: true,
  setup(__props) {
    const { $texts } = useNuxtApp();
    useHead({
      title: "Позиция и движение судов"
    });
    useServerHead({
      meta: [
        { name: "description", content: $texts.seoHomeDescription },
        { property: "og:description", content: $texts.seoHomeDescription },
        { name: "keywords", content: $texts.seoKeywordsBase }
      ]
    });
    const legendItems = [
      {
        title: "Пассажирские суда",
        color: "#3498db"
      },
      {
        title: "Грузовые суда",
        color: "#27ae60"
      },
      {
        title: "Танкеры",
        color: "#d35400"
      },
      {
        title: "На якорь",
        color: "yellow"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SharedBreadCrumbs = __nuxt_component_0;
      const _component_SharedServicesLinks = __nuxt_component_1;
      const _component_SharedGoUp = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-bf10ed65><section data-v-bf10ed65><div class="bg white-theme-only gradient-bg" data-v-bf10ed65></div><div data-v-bf10ed65>`);
      _push(ssrRenderComponent(_component_SharedBreadCrumbs, { class: "breadcrumbs" }, null, _parent));
      _push(`<div class="top" data-v-bf10ed65><h1 data-v-bf10ed65>Позиция и движение судов</h1><p data-v-bf10ed65> Комплексное предоставление услуг, транспортировка любых грузов на дальние расстояния, гарантированное качество услуги и тщательный контроль на каждом этапе следования контейнера, платформы или вагона — эти преимущества заставляют наших Клиентов пользоваться именно нашими услугами. </p></div><div class="main" data-v-bf10ed65><div id="gist" data-v-bf10ed65></div><div id="gist1" data-v-bf10ed65></div><div class="legend" data-v-bf10ed65><!--[-->`);
      ssrRenderList(legendItems, (item, i) => {
        _push(`<span data-v-bf10ed65><svg width="11" height="22" viewBox="0 0 11 22"${ssrRenderAttr("fill", item.color)} xmlns="http://www.w3.org/2000/svg" data-v-bf10ed65><path d="M0.5 10.2744C0.5 7.79285 1.30262 5.35711 2.82346 3.22331L4.79963 0.450668C5.22791 -0.150222 6.27209 -0.150223 6.70037 0.450668L8.67654 3.22331C10.1974 5.35711 11 7.79285 11 10.2744V21.0775C11 21.8604 9.90162 22.286 9.1828 21.7818L6.46194 19.873C6.05053 19.5844 5.44947 19.5844 5.03806 19.873L2.3172 21.7818C1.59838 22.286 0.5 21.8604 0.5 21.0775L0.5 10.2744Z" data-v-bf10ed65></path></svg> ${ssrInterpolate(item.title)}</span>`);
      });
      _push(`<!--]--></div></div><div class="bottom" data-v-bf10ed65>`);
      _push(ssrRenderComponent(_component_SharedServicesLinks, { title: "Услуги" }, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_SharedGoUp, null, null, _parent));
      _push(`</div></section></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/traffic.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const traffic = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-bf10ed65"]]);
export {
  traffic as default
};
//# sourceMappingURL=traffic-b0796801.js.map
