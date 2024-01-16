import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "6",
    height: "9",
    viewBox: "0 0 6 9",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path d="M0 7.9425L3.7085 4.5L0 1.0575L1.1417 0L6 4.5L1.1417 9L0 7.9425Z"></path></svg>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Icons/ArrowRight.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { __nuxt_component_1 as _ };
//# sourceMappingURL=ArrowRight-4312bfbb.mjs.map
