import { b as buildAssetsURL } from '../../handlers/renderer.mjs';
import { ssrRenderAttrs, ssrRenderAttr } from 'vue/server-renderer';
import { useSSRContext } from 'vue';
import { _ as _export_sfc } from '../server.mjs';

const _imports_0 = "" + buildAssetsURL("arrow-up-bold.8b0d721e.svg");
const _sfc_main = {
  __name: "GoUp",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-c568ff4b><button data-v-c568ff4b> Go Up <img${ssrRenderAttr("src", _imports_0)} data-v-c568ff4b></button></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Shared/GoUp.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-c568ff4b"]]);

export { __nuxt_component_2 as _ };
//# sourceMappingURL=GoUp-6f51a1ea.mjs.map
