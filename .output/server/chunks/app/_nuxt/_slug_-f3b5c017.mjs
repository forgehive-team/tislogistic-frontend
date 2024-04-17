import { _ as __nuxt_component_0 } from './NewsPage-ee9224b6.mjs';
import { f as useRoute, a as useHead, i as useRuntimeConfig } from '../server.mjs';
import { u as useServerHead } from './internalLinks-11d3a882.mjs';
import { withAsyncContext, mergeProps, unref, useSSRContext } from 'vue';
import { a as useLazyFetch } from './fetch-dfe554a9.mjs';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import './BreadCrumbs-c74601ed.mjs';
import './nuxt-link-0d39ff03.mjs';
import 'ufo';
import 'swiper/vue';
import './SwiperControls-e2965511.mjs';
import './ArrowLeft-dd643b18.mjs';
import './ArrowRight-4312bfbb.mjs';
import './FullScreenImg-6689124a.mjs';
import './ProjectsItem-93537194.mjs';
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
    const url = newsApiBase + "projects/" + slug;
    const { pending, data } = ([__temp, __restore] = withAsyncContext(() => useLazyFetch(url, "$06HzrrEgMX")), __temp = await __temp, __restore(), __temp);
    useHead({
      title: () => (data == null ? void 0 : data.value) ? data.value.title : "\u041F\u0440\u043E\u0435\u043A\u0442\u044B"
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
          "is-news": false
        }, null, _parent));
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/projects/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_slug_-f3b5c017.mjs.map
