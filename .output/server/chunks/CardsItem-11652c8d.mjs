import { useSSRContext, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';

const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "120",
    height: "111",
    viewBox: "0 0 120 111",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><g clip-path="url(#clip0_39_881)"><path d="M141.04 11.64L125.6 27.08C126.32 30.68 126.72 34.28 126.72 37.96C126.72 67.64 102.56 91.72 72.96 91.72C43.36 91.72 19.2 67.64 19.2 37.96C19.2 8.28 43.36 -15.8 72.96 -15.8C85.76 -15.8 98 -11.24 107.76 -3L121.36 -16.6C108 -28.52 90.88 -35 72.96 -35C32.72 -35 0 -2.28 0 37.96C0 78.2 32.72 110.92 72.96 110.92C113.2 110.92 145.92 78.2 145.92 37.96C146 28.92 144.32 20.04 141.04 11.64Z"></path><path d="M71.3603 43.32L42.8803 14.84L29.2803 28.44L71.2803 70.44L123.04 18.44L137.6 3.96004C137.28 3.32004 136.96 2.68004 136.56 2.04004C134.64 -1.39996 132.32 -4.75996 129.84 -7.87996C128.72 -9.23996 127.52 -10.6 126.32 -11.96L112.72 1.64004L71.3603 43.32Z"></path></g><defs><clipPath id="clip0_39_881"><rect width="120" height="111" fill="transparent"></rect></clipPath></defs></svg>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Icons/CircleTick.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  props: {
    title: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: false,
      default: ""
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_IconsCircleTick = __nuxt_component_0$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "card" }, _attrs))} data-v-f6af5089><h3 class="card__title" data-v-f6af5089>${ssrInterpolate($props.title)}</h3>`);
  if ($props.text) {
    _push(`<p class="card__text" data-v-f6af5089>${ssrInterpolate($props.text)}</p>`);
  } else {
    _push(`<!---->`);
  }
  _push(ssrRenderComponent(_component_IconsCircleTick, { class: "card__bg" }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Home/CardsItem.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-f6af5089"]]);

export { __nuxt_component_0 as _ };
//# sourceMappingURL=CardsItem-11652c8d.mjs.map
