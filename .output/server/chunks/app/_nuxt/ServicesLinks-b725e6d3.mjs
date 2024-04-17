import { _ as __nuxt_component_0 } from './nuxt-link-0d39ff03.mjs';
import { withCtx, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { _ as _export_sfc, f as useRoute } from '../server.mjs';
import { s as servicesList } from './servicesList-30883593.mjs';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderComponent } from 'vue/server-renderer';

const _sfc_main = {
  props: {
    title: {
      type: String,
      requied: false,
      default: ""
    }
  },
  setup() {
    const route = useRoute();
    const currentRoute = route.fullPath;
    return {
      currentRoute
    };
  },
  computed: {
    services() {
      return servicesList.filter(
        (service) => service.to !== this.currentRoute && !service.disabled
      );
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(_attrs)} data-v-1da08b36><h2 data-v-1da08b36>${ssrInterpolate($props.title || _ctx.$texts.otherServices)}</h2><div class="links-container" data-v-1da08b36><!--[-->`);
  ssrRenderList($options.services, (service, i) => {
    _push(ssrRenderComponent(_component_NuxtLink, {
      key: i,
      to: service.to
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate(service.title)}`);
        } else {
          return [
            createTextVNode(toDisplayString(service.title), 1)
          ];
        }
      }),
      _: 2
    }, _parent));
  });
  _push(`<!--]--></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Shared/ServicesLinks.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-1da08b36"]]);

export { __nuxt_component_1 as _ };
//# sourceMappingURL=ServicesLinks-b725e6d3.mjs.map
