import CountUp from "vue-countup-v3";
import { resolveComponent, mergeProps, useSSRContext, ref, unref } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import "hookable";
import "destr";
const KeyIndicatorsItem_scss_vue_type_style_index_0_src_dad1f69a_scoped_dad1f69a_lang = "";
const _sfc_main$1 = {
  components: {
    "count-up": CountUp
  },
  props: {
    title: {
      type: Number,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    measurement: {
      type: String,
      default: "",
      required: false
    },
    inServices: {
      type: Boolean,
      required: true
    }
  },
  computed: {
    counterOptions() {
      return {
        separator: " ",
        suffix: this.measurement,
        useEasing: true,
        smartEasingThreshold: this.title - 5,
        smartEasingAmount: 5,
        enableScrollSpy: true,
        scrollSpyOnce: true
      };
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_count_up = resolveComponent("count-up");
  _push(`<div${ssrRenderAttrs(mergeProps({
    ref: "advantage",
    class: "advantage"
  }, _attrs))} data-v-dad1f69a>`);
  _push(ssrRenderComponent(_component_count_up, {
    class: ["advantage__title", { yellow: $props.inServices }],
    "end-val": $props.title,
    duration: 3,
    options: $options.counterOptions,
    autoplay: false
  }, null, _parent));
  _push(`<p class="advantage__description" data-v-dad1f69a>${ssrInterpolate($props.description)}</p></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Shared/KeyIndicatorsItem.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-dad1f69a"]]);
const KeyIndicators_scss_vue_type_style_index_0_src_b75b7885_scoped_b75b7885_lang = "";
const _sfc_main = {
  __name: "KeyIndicators",
  __ssrInlineRender: true,
  props: ["title", "inServices"],
  setup(__props) {
    const props = __props;
    const items = ref([]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SharedKeyIndicatorsItem = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "advantages" }, _attrs))} data-v-b75b7885>`);
      if (props.inServices && props.title) {
        _push(`<h2 class="advantages__title advantages__title_services" data-v-b75b7885>${ssrInterpolate(props.title)}</h2>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(items)) {
        _push(`<div class="advantages__container" data-v-b75b7885><!--[-->`);
        ssrRenderList(unref(items), (item) => {
          _push(ssrRenderComponent(_component_SharedKeyIndicatorsItem, {
            key: item.header,
            title: item.title,
            description: item.description,
            measurement: item.measurement,
            "in-services": props.inServices
          }, null, _parent));
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Shared/KeyIndicators.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-b75b7885"]]);
export {
  __nuxt_component_4 as _
};
//# sourceMappingURL=KeyIndicators-1e584f96.js.map
