import { mergeProps, useSSRContext } from 'file://C:/Users/tzhovtyy/Desktop/tislogistic-frontend/node_modules/vue/index.mjs';
import { ssrRenderAttrs } from 'file://C:/Users/tzhovtyy/Desktop/tislogistic-frontend/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from './server.mjs';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "12",
    height: "7",
    viewBox: "0 0 12 7",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path d="M6.71005 6.03282L10.9501 1.79282C11.0438 1.69986 11.1182 1.58926 11.1689 1.4674C11.2197 1.34554 11.2458 1.21484 11.2458 1.08282C11.2458 0.950812 11.2197 0.820106 11.1689 0.698247C11.1182 0.576388 11.0438 0.465787 10.9501 0.372824C10.7627 0.186573 10.5092 0.0820312 10.2451 0.0820312C9.98087 0.0820312 9.72741 0.186573 9.54005 0.372824L6.00005 3.91282L2.46005 0.372823C2.27269 0.186572 2.01924 0.0820308 1.75505 0.0820308C1.49086 0.0820308 1.23741 0.186572 1.05005 0.372823C0.95737 0.466263 0.884045 0.577079 0.83428 0.698917C0.784515 0.820754 0.759291 0.951217 0.760052 1.08282C0.759291 1.21443 0.784515 1.34489 0.83428 1.46673C0.884045 1.58857 0.95737 1.69938 1.05005 1.79282L5.29005 6.03282C5.38301 6.12655 5.49362 6.20095 5.61547 6.25171C5.73733 6.30248 5.86804 6.32862 6.00005 6.32862C6.13206 6.32862 6.26277 6.30248 6.38463 6.25171C6.50649 6.20095 6.61709 6.12655 6.71005 6.03282Z"></path></svg>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Icons/ExpandArrow.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { __nuxt_component_1 as _ };
//# sourceMappingURL=ExpandArrow-c1187625.mjs.map
