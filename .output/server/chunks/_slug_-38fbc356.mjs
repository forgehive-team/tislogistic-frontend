import { _ as __nuxt_component_0 } from './NewsPage-1b1383d3.mjs';
import { f as useRoute, a as useHead, i as useRuntimeConfig } from './server.mjs';
import { u as useServerHead } from './internalLinks-dc4e1b80.mjs';
import { withAsyncContext, watchEffect, mergeProps, unref, useSSRContext } from 'vue';
import { u as useFetch } from './fetch-dfe554a9.mjs';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import './BreadCrumbs-7a67b271.mjs';
import './nuxt-link-0d39ff03.mjs';
import 'ufo';
import 'swiper/vue';
import './SwiperControls-e2965511.mjs';
import './ArrowLeft-dd643b18.mjs';
import './ArrowRight-4312bfbb.mjs';
import './FullScreenImg-6689124a.mjs';
import './ProjectsItem-93537194.mjs';
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
import './transformDate-3029d144.mjs';
import 'dayjs';
import './state-06d22502.mjs';
import './expand-29e2e84d.mjs';
import 'unctx';
import 'vue-router';

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
      title: () => (data == null ? void 0 : data.value) ? data.value.title : "\u041D\u043E\u0432\u043E\u0441\u0442\u0438"
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

export { _sfc_main as default };
//# sourceMappingURL=_slug_-38fbc356.mjs.map
