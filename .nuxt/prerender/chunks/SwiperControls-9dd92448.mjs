import { _ as __nuxt_component_0$1 } from './ArrowLeft-dd643b18.mjs';
import { _ as __nuxt_component_1 } from './ArrowRight-4312bfbb.mjs';
import { mergeProps, useSSRContext } from 'file://C:/Users/tzhovtyy/Desktop/tislogistic-frontend/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent } from 'file://C:/Users/tzhovtyy/Desktop/tislogistic-frontend/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from './server.mjs';

const _sfc_main = {
  __name: "SwiperControls",
  __ssrInlineRender: true,
  emits: ["slide-next", "slide-prev"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_IconsArrowLeft = __nuxt_component_0$1;
      const _component_IconsArrowRight = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "swiper-controls" }, _attrs))} data-v-0f192c0d><button data-v-0f192c0d>`);
      _push(ssrRenderComponent(_component_IconsArrowLeft, null, null, _parent));
      _push(`</button><button data-v-0f192c0d>`);
      _push(ssrRenderComponent(_component_IconsArrowRight, null, null, _parent));
      _push(`</button></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Shared/SwiperControls.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-0f192c0d"]]);

export { __nuxt_component_0 as _ };
//# sourceMappingURL=SwiperControls-9dd92448.mjs.map
