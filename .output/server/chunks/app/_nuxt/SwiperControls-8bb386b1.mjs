import { _ as __nuxt_component_0 } from './ArrowLeft-dd643b18.mjs';
import { _ as __nuxt_component_1 } from './ArrowRight-4312bfbb.mjs';
import { useSwiper } from 'swiper/vue';
import { useSSRContext, defineComponent, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "SwiperControls",
  __ssrInlineRender: true,
  setup(__props) {
    useSwiper();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_IconsArrowLeft = __nuxt_component_0;
      const _component_IconsArrowRight = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "swiper_controls" }, _attrs))} data-v-b6da0942><button data-v-b6da0942>`);
      _push(ssrRenderComponent(_component_IconsArrowLeft, null, null, _parent));
      _push(`</button><button data-v-b6da0942>`);
      _push(ssrRenderComponent(_component_IconsArrowRight, null, null, _parent));
      _push(`</button></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ArendaKonteynerov/SwiperControls.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-b6da0942"]]);

export { __nuxt_component_3 as _ };
//# sourceMappingURL=SwiperControls-8bb386b1.mjs.map
