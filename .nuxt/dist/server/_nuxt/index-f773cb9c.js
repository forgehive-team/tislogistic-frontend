import { _ as __nuxt_component_0 } from "./NewsMain-79f45275.js";
import { u as useNuxtApp, a as useHead, i as useRuntimeConfig } from "../server.mjs";
import { u as useServerHead } from "./internalLinks-dc4e1b80.js";
import { withAsyncContext, watchEffect, unref, mergeProps, useSSRContext } from "vue";
import { u as useFetch } from "./fetch-dfe554a9.js";
import "destr";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import "./BreadCrumbs-7a67b271.js";
import "./nuxt-link-0d39ff03.js";
import "ufo";
import "hookable";
import "./transformDate-3029d144.js";
import "dayjs";
import "dayjs/locale/ru.js";
import "./ExpandArrow-c1187625.js";
import "./composables-5d51eb10.js";
import "ofetch";
import "#internal/nitro";
import "unctx";
/* empty css                     */import "vue-router";
import "h3";
import "defu";
import "ohash";
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { $texts } = useNuxtApp();
    useHead({
      title: $texts.projects
    });
    useServerHead({
      meta: [
        { name: "description", content: $texts.projects + $texts.companyNameSeo }
      ]
    });
    const { newsApiBase } = /* @__PURE__ */ useRuntimeConfig();
    const url = newsApiBase + "projects";
    const { pending, data, refresh } = ([__temp, __restore] = withAsyncContext(() => useFetch(url, {
      key: "projects"
    }, "$olQ4jpDRvq")), __temp = await __temp, __restore(), __temp);
    watchEffect(() => {
      refresh();
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NewsMain = __nuxt_component_0;
      if (unref(pending)) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "pending-load" }, _attrs))}></div>`);
      } else {
        _push(`<div${ssrRenderAttrs(_attrs)}>`);
        _push(ssrRenderComponent(_component_NewsMain, {
          data: unref(data),
          pending: unref(pending)
        }, null, _parent));
        _push(`</div>`);
      }
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/projects/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-f773cb9c.js.map
