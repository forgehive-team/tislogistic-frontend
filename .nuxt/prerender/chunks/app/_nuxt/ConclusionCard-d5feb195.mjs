import { b as buildAssetsURL } from '../../renderer.mjs';
import { u as useCalculatorPopup } from './state-06d22502.mjs';
import { u as useImage } from './composables-5d51eb10.mjs';
import { _ as _export_sfc, u as useNuxtApp } from '../server.mjs';
import { mergeProps, useSSRContext } from 'file:///Users/nikitamakovei/repos/tislogistic-frontend/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr } from 'file:///Users/nikitamakovei/repos/tislogistic-frontend/node_modules/vue/server-renderer/index.mjs';

const _imports_0 = "" + buildAssetsURL("phone.e28f8ce4.svg");
const _sfc_main = {
  // since the alt tag is put on background image, it's applied to the containing div too
  props: {
    seoAlt: {
      type: String,
      required: true
    }
  },
  setup() {
    const calculatorPopupShown = useCalculatorPopup();
    return {
      calculatorPopupShown
    };
  },
  computed: {
    background() {
      const $img = useImage();
      const imgUrl = $img("images/footer_card_background.jpg", {
        format: "webp",
        quality: 90,
        alt: this.seoAlt,
        sizes: "lg:700px xxl:1512px"
      });
      return {
        backgroundImage: `url('${imgUrl}')`
      };
    },
    phoneRef() {
      const $texts = useNuxtApp();
      return `mailto:${$texts.companyPhone}`;
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "conclusion",
    style: $options.background,
    title: $props.seoAlt,
    "aria-label": $props.seoAlt
  }, _attrs))} data-v-2b979209><h2 class="conclusion__title" data-v-2b979209>${ssrInterpolate(_ctx.$texts.homeHeader)} <br class="title-break" data-v-2b979209><span data-v-2b979209>${ssrInterpolate(_ctx.$texts.companyName)}</span></h2><p class="conclusion__note" data-v-2b979209>${ssrInterpolate(_ctx.$texts.conclusionNote)}</p><div class="conclusion__bottom" data-v-2b979209><button class="conclusion__btn animate-red" data-v-2b979209>${ssrInterpolate(_ctx.$texts.calculate)}</button><div class="conclusion__info" data-v-2b979209><a${ssrRenderAttr("href", $options.phoneRef)} data-v-2b979209><img${ssrRenderAttr("src", _imports_0)}${ssrRenderAttr("alt", _ctx.$texts.phone)} data-v-2b979209> ${ssrInterpolate(_ctx.$texts.companyPhone)}</a></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Shared/ConclusionCard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-2b979209"]]);

export { __nuxt_component_2 as _ };
//# sourceMappingURL=ConclusionCard-d5feb195.mjs.map
