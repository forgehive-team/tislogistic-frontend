import { u as useImage } from './composables-5d51eb10.mjs';
import { mergeProps, useSSRContext } from 'file://C:/Users/tzhovtyy/Desktop/tislogistic-frontend/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrInterpolate } from 'file://C:/Users/tzhovtyy/Desktop/tislogistic-frontend/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from './server.mjs';

const _sfc_main = {
  __name: "AdvantagesSliderSlide",
  __ssrInlineRender: true,
  props: ["title", "subtitle", "img"],
  setup(__props) {
    const props = __props;
    const $img = useImage();
    const imgUrl = $img(props.img, {
      format: "webp",
      quality: "90"
    });
    const bg = {
      backgroundImage: `url('${imgUrl}')`
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "slide-content",
        style: bg
      }, _attrs))} data-v-da48311c><h3 data-v-da48311c>${ssrInterpolate(props.title)}</h3><p data-v-da48311c>${ssrInterpolate(props.subtitle)}</p></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Home/AdvantagesSliderSlide.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-da48311c"]]);

export { __nuxt_component_3 as _ };
//# sourceMappingURL=AdvantagesSliderSlide-3aa7a258.mjs.map
