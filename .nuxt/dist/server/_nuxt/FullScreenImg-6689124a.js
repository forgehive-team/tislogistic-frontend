import { ssrRenderAttrs, ssrRenderAttr } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../server.mjs";
const FullScreenImg_scss_vue_type_style_index_0_src_d605b52c_scoped_d605b52c_lang = "";
const _sfc_main = {
  __name: "FullScreenImg",
  __ssrInlineRender: true,
  props: ["img"],
  emits: ["close"],
  setup(__props, { emit }) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-d605b52c><img${ssrRenderAttr("src", props.img)} data-v-d605b52c></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Shared/FullScreenImg.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-d605b52c"]]);
export {
  __nuxt_component_0 as _
};
//# sourceMappingURL=FullScreenImg-6689124a.js.map
