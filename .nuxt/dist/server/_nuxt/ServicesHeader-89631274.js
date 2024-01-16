import { _ as __nuxt_component_0$1 } from "./BreadCrumbs-7a67b271.js";
import { _ as __nuxt_component_0$2 } from "./nuxt-link-0d39ff03.js";
import { _ as __nuxt_component_1 } from "./ExpandArrow-c1187625.js";
import { u as useCalculatorPopup } from "./state-06d22502.js";
import { mergeProps, withCtx, createTextVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
const ServicesHeader_scss_vue_type_style_index_0_src_c79b8757_scoped_c79b8757_lang = "";
const _sfc_main = {
  props: {
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: String,
      required: true
    },
    formless: {
      type: Boolean,
      required: false,
      default: false
    },
    link: {
      type: String,
      required: false,
      default: ""
    }
  },
  setup() {
    const calculatorPopupShown = useCalculatorPopup();
    return {
      calculatorPopupShown
    };
  },
  methods: {
    scrollDown() {
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_SharedBreadCrumbs = __nuxt_component_0$1;
  const _component_NuxtLink = __nuxt_component_0$2;
  const _component_IconsExpandArrow = __nuxt_component_1;
  _push(`<header${ssrRenderAttrs(mergeProps({ class: "header" }, _attrs))} data-v-c79b8757>`);
  _push(ssrRenderComponent(_component_SharedBreadCrumbs, { class: "breadcrumbs" }, null, _parent));
  _push(`<h1 data-v-c79b8757>${ssrInterpolate($props.title)}</h1><h5 data-v-c79b8757>${ssrInterpolate($props.subtitle)}</h5><div class="header__btns-container" data-v-c79b8757>`);
  if (!$props.formless) {
    _push(`<button class="button animate-red" data-v-c79b8757>${ssrInterpolate(_ctx.$texts.calculate)}</button>`);
  } else {
    _push(`<!---->`);
  }
  if ($props.link) {
    _push(ssrRenderComponent(_component_NuxtLink, {
      class: "button header__btn_gray",
      to: $props.link
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate(_ctx.$texts.details)}`);
        } else {
          return [
            createTextVNode(toDisplayString(_ctx.$texts.details), 1)
          ];
        }
      }),
      _: 1
    }, _parent));
  } else {
    _push(`<button class="button header__btn_gray" data-v-c79b8757>${ssrInterpolate(_ctx.$texts.details)} `);
    _push(ssrRenderComponent(_component_IconsExpandArrow, null, null, _parent));
    _push(`</button>`);
  }
  _push(`</div></header>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Shared/ServicesHeader.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-c79b8757"]]);
export {
  __nuxt_component_0 as _
};
//# sourceMappingURL=ServicesHeader-89631274.js.map
