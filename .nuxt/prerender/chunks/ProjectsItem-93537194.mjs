import { b as buildAssetsURL } from './renderer.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-0d39ff03.mjs';
import { mergeProps, withCtx, createVNode, toDisplayString, useSSRContext } from 'file://C:/Users/tzhovtyy/Desktop/tislogistic-frontend/node_modules/vue/index.mjs';
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttr } from 'file://C:/Users/tzhovtyy/Desktop/tislogistic-frontend/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from './server.mjs';

const _imports_0 = "" + buildAssetsURL("arrow-long-right.3355f589.svg");
const _sfc_main = {
  props: {
    title: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    },
    date: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: true
    },
    path: {
      type: String,
      required: false,
      default: "/projects"
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(ssrRenderComponent(_component_NuxtLink, mergeProps({
    to: $props.path + $props.link,
    class: "project"
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<h3 class="project__title" data-v-1fb46a5b${_scopeId}>${ssrInterpolate($props.title)}</h3><p class="project__text" data-v-1fb46a5b${_scopeId}>${ssrInterpolate($props.text)}</p><div class="project__bottom" data-v-1fb46a5b${_scopeId}><span class="project__date" data-v-1fb46a5b${_scopeId}>${ssrInterpolate($props.date)}</span><img${ssrRenderAttr("src", _imports_0)} alt="" data-v-1fb46a5b${_scopeId}></div>`);
      } else {
        return [
          createVNode("h3", { class: "project__title" }, toDisplayString($props.title), 1),
          createVNode("p", { class: "project__text" }, toDisplayString($props.text), 1),
          createVNode("div", { class: "project__bottom" }, [
            createVNode("span", { class: "project__date" }, toDisplayString($props.date), 1),
            createVNode("img", {
              src: _imports_0,
              alt: ""
            })
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Home/ProjectsItem.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-1fb46a5b"]]);

export { __nuxt_component_0 as _ };
//# sourceMappingURL=ProjectsItem-93537194.mjs.map
