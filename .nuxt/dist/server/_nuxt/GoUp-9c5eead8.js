import { ssrRenderAttrs, ssrRenderAttr } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../server.mjs";
const _imports_0 = "" + __buildAssetsURL("arrow-up-bold.8b0d721e.svg");
const GoUp_vue_vue_type_style_index_0_scoped_563e82a5_lang = "";
const _sfc_main = {
  __name: "GoUp",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-563e82a5><button data-v-563e82a5> Наверх <img${ssrRenderAttr("src", _imports_0)} data-v-563e82a5></button></div>`);
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
export {
  __nuxt_component_2 as _
};
//# sourceMappingURL=GoUp-9c5eead8.js.map
