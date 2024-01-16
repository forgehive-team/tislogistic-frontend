import { b as buildAssetsURL } from './renderer.mjs';
import { ssrRenderAttrs, ssrRenderAttr } from 'file://C:/Users/tzhovtyy/Desktop/tislogistic-frontend/node_modules/vue/server-renderer/index.mjs';
import { useSSRContext } from 'file://C:/Users/tzhovtyy/Desktop/tislogistic-frontend/node_modules/vue/index.mjs';
import { _ as _export_sfc } from './server.mjs';

const _imports_0 = "" + buildAssetsURL("arrow-up-bold.8b0d721e.svg");
const _sfc_main = {
  __name: "GoUp",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-563e82a5><button data-v-563e82a5> \u041D\u0430\u0432\u0435\u0440\u0445 <img${ssrRenderAttr("src", _imports_0)} data-v-563e82a5></button></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Shared/GoUp.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-563e82a5"]]);

export { __nuxt_component_2 as _ };
//# sourceMappingURL=GoUp-9c5eead8.mjs.map
