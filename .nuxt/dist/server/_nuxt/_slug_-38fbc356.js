import { _ as __nuxt_component_0 } from "./NewsPage-1b1383d3.js";
import { f as useRoute, a as useHead, i as useRuntimeConfig } from "../server.mjs";
import { u as useServerHead } from "./internalLinks-dc4e1b80.js";
import { withAsyncContext, watchEffect, mergeProps, unref, useSSRContext } from "vue";
import { u as useFetch } from "./fetch-dfe554a9.js";
import "destr";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import "./BreadCrumbs-7a67b271.js";
import "./nuxt-link-0d39ff03.js";
import "ufo";
import "hookable";
import "swiper/vue";
import "./SwiperControls-e2965511.js";
import "./ArrowLeft-dd643b18.js";
import "./ArrowRight-4312bfbb.js";
import "./FullScreenImg-6689124a.js";
import "./ProjectsItem-93537194.js";
import "./transformDate-3029d144.js";
import "dayjs";
import "dayjs/locale/ru.js";
import "./state-06d22502.js";
import "./expand-29e2e84d.js";
import "ofetch";
import "#internal/nitro";
import "unctx";
/* empty css                     */import "vue-router";
import "h3";
import "defu";
import "ohash";
const _sfc_main = {
  __name: "[slug]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { slug } = useRoute().params;
    const { newsApiBase } = /* @__PURE__ */ useRuntimeConfig();
    const url = newsApiBase + "news/" + slug;
    const { pending, data, refresh } = ([__temp, __restore] = withAsyncContext(() => useFetch(url, {
      key: slug
    }, "$L5ituuvlSl")), __temp = await __temp, __restore(), __temp);
    watchEffect(() => {
      refresh();
    });
    useHead({
      title: () => (data == null ? void 0 : data.value) ? data.value.title : "Новости"
    });
    useServerHead({});
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NewsPage = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "news" }, _attrs))}>`);
      if (unref(pending)) {
        _push(`<section>Loading...</section>`);
      } else {
        _push(ssrRenderComponent(_component_NewsPage, {
          data: unref(data),
          "is-news": true
        }, null, _parent));
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/news/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=_slug_-38fbc356.js.map
