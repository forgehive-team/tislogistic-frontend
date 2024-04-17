import { _ as __nuxt_component_4$1 } from './KeyIndicators-e53d8500.mjs';
import { _ as __nuxt_component_1 } from './DeliveryCalculator-ef5e9098.mjs';
import { _ as __nuxt_component_1$1 } from './CompanyLogo-fae8444b.mjs';
import { _ as __nuxt_component_3 } from './CompanyPresentation-d2ffd002.mjs';
import { _ as __nuxt_component_1$2 } from './ServicesLinks-676808ff.mjs';
import { b as useTheme } from './state-06d22502.mjs';
import { u as useImage } from './composables-5d51eb10.mjs';
import { useSSRContext } from 'vue';
import { ssrRenderClass, ssrRenderComponent, ssrRenderSlot, ssrRenderStyle } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';

const _sfc_main = {
  props: {
    modifier: {
      type: String,
      required: false,
      default: ""
    }
  },
  setup() {
    const isWhiteTheme = useTheme();
    return {
      isWhiteTheme
    };
  },
  computed: {
    bottomBackground() {
      if (this.isWhiteTheme)
        return "";
      const $img = useImage();
      const imgUrl = $img("images/main_background.jpg", {
        format: "webp",
        quality: 40
      });
      return {
        backgroundImage: `linear-gradient(180deg, #1B1B1F 2.74%, rgba(20, 20, 23, 0.829382) 27.02%, rgba(0, 0, 0, 0.61) 72.08%), url('${imgUrl}')`
      };
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_SharedKeyIndicators = __nuxt_component_4$1;
  const _component_SharedDeliveryCalculator = __nuxt_component_1;
  const _component_IconsCompanyLogo = __nuxt_component_1$1;
  const _component_HomeCompanyPresentation = __nuxt_component_3;
  const _component_SharedServicesLinks = __nuxt_component_1$2;
  _push(`<!--[--><section class="${ssrRenderClass({ indicators_train: $props.modifier === "train" })}" data-v-9670334e>`);
  _push(ssrRenderComponent(_component_SharedKeyIndicators, {
    title: _ctx.$texts.keyIndicators,
    "in-services": true
  }, null, _parent));
  _push(`</section>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`<section data-v-9670334e><div class="calculator__back-blur" data-v-9670334e>`);
  _push(ssrRenderComponent(_component_SharedDeliveryCalculator, null, null, _parent));
  _push(ssrRenderComponent(_component_IconsCompanyLogo, { class: "logo" }, null, _parent));
  _push(`</div></section><section style="${ssrRenderStyle($options.bottomBackground)}" data-v-9670334e>`);
  _push(ssrRenderComponent(_component_HomeCompanyPresentation, null, null, _parent));
  _push(ssrRenderComponent(_component_SharedServicesLinks, { class: "other" }, null, _parent));
  _push(`</section><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Shared/ServicesFiller.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-9670334e"]]);

export { __nuxt_component_4 as _ };
//# sourceMappingURL=ServicesFiller-aac6605f.mjs.map
