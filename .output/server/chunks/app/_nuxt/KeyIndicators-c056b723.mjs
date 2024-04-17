import { useSSRContext, ref, mergeProps, unref } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';

const _sfc_main$1 = {
  // components: {
  //     'count-up': CountUp,
  // },
  props: {
    title: {
      type: String,
      // Number
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
  }
  /*
  computed: {
      counterOptions() {
          return {
              separator: ' ',
              suffix: this.measurement,
              useEasing: true,
              smartEasingThreshold: this.title - 8,
              smartEasingAmount: 8,
              enableScrollSpy: true,
              scrollSpyOnce: true,
          };
      },
  },
   */
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    ref: "advantage",
    class: "advantage"
  }, _attrs))} data-v-a6ef0bd9><div class="advantage__title" data-v-a6ef0bd9><span data-v-a6ef0bd9>${ssrInterpolate($props.title)}</span></div><p class="advantage__description" data-v-a6ef0bd9>${ssrInterpolate($props.description)}</p></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Shared/KeyIndicatorsItem.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-a6ef0bd9"]]);
const _sfc_main = {
  __name: "KeyIndicators",
  __ssrInlineRender: true,
  props: ["title", "inServices"],
  setup(__props) {
    const props = __props;
    const items = ref([]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SharedKeyIndicatorsItem = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "advantages" }, _attrs))} data-v-cffdc38c>`);
      if (props.inServices && props.title) {
        _push(`<h2 class="advantages__title advantages__title_services" data-v-cffdc38c>${ssrInterpolate(props.title)}</h2>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(items)) {
        _push(`<div class="advantages__container" data-v-cffdc38c><!--[-->`);
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
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-cffdc38c"]]);

export { __nuxt_component_3 as _ };
//# sourceMappingURL=KeyIndicators-c056b723.mjs.map
