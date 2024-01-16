import { b as buildAssetsURL } from '../../renderer.mjs';
import { ssrRenderAttrs, ssrRenderAttr } from 'file:///Users/nikitamakovei/repos/tislogistic-frontend/node_modules/vue/server-renderer/index.mjs';
import { useSSRContext } from 'file:///Users/nikitamakovei/repos/tislogistic-frontend/node_modules/vue/index.mjs';
import { _ as _export_sfc } from '../server.mjs';

const _imports_0 = "" + buildAssetsURL("arrow-up-bold.8b0d721e.svg");
const _sfc_main = {
  __name: "GoUp",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-72e06853><button data-v-72e06853> \u041D\u0430\u0432\u0435\u0440\u0445 <img${ssrRenderAttr("src", _imports_0)} data-v-72e06853></button></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Shared/GoUp.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-72e06853"]]);

export { __nuxt_component_2 as _ };
//# sourceMappingURL=GoUp-a1c9a0cf.mjs.map
