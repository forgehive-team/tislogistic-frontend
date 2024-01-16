import { _ as __nuxt_component_0 } from "./nuxt-img-6da1c54a.js";
import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
const ServiceAdvantages_scss_vue_type_style_index_0_src_a3754dc4_scoped_a3754dc4_lang = "";
const _sfc_main = {
  props: {
    title: {
      type: String,
      required: true
    },
    list: {
      type: Array,
      required: true
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_img = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "advantages" }, _attrs))} data-v-a3754dc4><h2 data-v-a3754dc4>${ssrInterpolate($props.title)}</h2><div class="advantages__container" data-v-a3754dc4><!--[-->`);
  ssrRenderList($props.list, (advantage, i) => {
    _push(`<div class="advantage" data-v-a3754dc4>`);
    _push(ssrRenderComponent(_component_nuxt_img, {
      src: "images/advantages_icons/" + advantage.imgPath,
      alt: advantage.seoAlt + advantage.title,
      class: "icon-gray"
    }, null, _parent));
    _push(`<p data-v-a3754dc4><span data-v-a3754dc4>${ssrInterpolate(advantage.title)}</span>${ssrInterpolate(advantage.text)}</p></div>`);
  });
  _push(`<!--]--></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Shared/ServiceAdvantages.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-a3754dc4"]]);
export {
  __nuxt_component_1 as _
};
//# sourceMappingURL=ServiceAdvantages-56aaa41d.js.map
