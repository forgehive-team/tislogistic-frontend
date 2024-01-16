import { mergeProps, useSSRContext, ref, unref } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderAttr } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import { _ as __nuxt_component_1 } from "./ArrowRight-4312bfbb.js";
import { _ as __nuxt_component_0$1 } from "./nuxt-img-6da1c54a.js";
import { a as useSuccessModal } from "./state-06d22502.js";
import "hookable";
import "destr";
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "18",
    height: "14",
    viewBox: "0 0 18 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path fill-rule="evenodd" clip-rule="evenodd" d="M0.5 4C0.5 2.067 2.067 0.5 4 0.5H14C15.933 0.5 17.5 2.067 17.5 4V10C17.5 11.933 15.933 13.5 14 13.5H4C2.067 13.5 0.5 11.933 0.5 10V4ZM10.4287 6.96711C9.5701 7.56509 8.4299 7.56509 7.57127 6.96711L1.74853 2.91199C2.15311 2.07632 3.00925 1.5 4 1.5H14C14.9907 1.5 15.8469 2.07632 16.2515 2.91199L10.4287 6.96711ZM11.0002 7.78772C9.79814 8.62489 8.20186 8.62489 6.99977 7.78772L1.5 4V10C1.5 11.3807 2.61929 12.5 4 12.5H14C15.3807 12.5 16.5 11.3807 16.5 10V4L11.0002 7.78772Z" fill="currentColor"></path></svg>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Icons/EmailIcon.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const CompanyPresentation_scss_vue_type_style_index_0_src_60fcc0d0_scoped_60fcc0d0_lang = "";
const _sfc_main = {
  __name: "CompanyPresentation",
  __ssrInlineRender: true,
  setup(__props) {
    useSuccessModal();
    const email = ref("");
    const errorMessage = ref("");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_IconsEmailIcon = __nuxt_component_0;
      const _component_IconsArrowRight = __nuxt_component_1;
      const _component_nuxt_img = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "presentation" }, _attrs))} data-v-60fcc0d0><div class="presentation__content" data-v-60fcc0d0><h2 class="presentation__title" data-v-60fcc0d0>${ssrInterpolate(_ctx.$texts.presentationTitle)}</h2><p class="presentation__text" data-v-60fcc0d0>${ssrInterpolate(_ctx.$texts.presentationDescription)}</p><div class="btns-container" data-v-60fcc0d0><div class="input-container" data-v-60fcc0d0>`);
      _push(ssrRenderComponent(_component_IconsEmailIcon, null, null, _parent));
      _push(`<input${ssrRenderAttr("value", unref(email))}${ssrRenderAttr("placeholder", _ctx.$texts.email)} data-v-60fcc0d0></div><button data-v-60fcc0d0> Отправить `);
      _push(ssrRenderComponent(_component_IconsArrowRight, null, null, _parent));
      _push(`</button></div><p class="error" data-v-60fcc0d0>${ssrInterpolate(unref(errorMessage))}</p></div>`);
      _push(ssrRenderComponent(_component_nuxt_img, {
        class: "presentation__img",
        format: "webp",
        quality: "100",
        sizes: "sm:0px md:0px lg:500px xl:700px xxl:700px 2xl:700px",
        src: "images/notepad.png",
        alt: _ctx.$texts.presentationTitle + " " + _ctx.$texts.companyName
      }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Home/CompanyPresentation.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-60fcc0d0"]]);
export {
  __nuxt_component_3 as _
};
//# sourceMappingURL=CompanyPresentation-9c0cc7e3.js.map
