import { b as buildAssetsURL } from './renderer.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-0d39ff03.mjs';
import { _ as __nuxt_component_0$2 } from './nuxt-img-6da1c54a.mjs';
import { _ as _export_sfc, u as useNuxtApp } from './server.mjs';
import { useSSRContext, mergeProps, withCtx, createVNode, toDisplayString } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';

const _imports_0 = "" + buildAssetsURL("arrow-diagonal.889b5b8a.svg");
const _sfc_main$1 = {
  props: {
    service: {
      type: Object,
      required: true
    }
  },
  computed: {
    imgAlt() {
      const { $texts } = useNuxtApp();
      return this.service.title + " " + $texts.companyName;
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __nuxt_component_0$1;
  const _component_nuxt_img = __nuxt_component_0$2;
  _push(ssrRenderComponent(_component_NuxtLink, mergeProps({
    class: ["service", { service_disabled: $props.service.disabled }],
    to: $props.service.to
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="service__content" data-v-34fc84e2${_scopeId}><img class="service__arrow service-icon"${ssrRenderAttr("src", _imports_0)} alt="" data-v-34fc84e2${_scopeId}><h3 class="service__title" data-v-34fc84e2${_scopeId}>${ssrInterpolate($props.service.title)}</h3></div>`);
        _push2(ssrRenderComponent(_component_nuxt_img, {
          class: "service__img service-icon",
          src: $props.service.icon,
          alt: $options.imgAlt
        }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode("div", { class: "service__content" }, [
            createVNode("img", {
              class: "service__arrow service-icon",
              src: _imports_0,
              alt: ""
            }),
            createVNode("h3", { class: "service__title" }, toDisplayString($props.service.title), 1)
          ]),
          createVNode(_component_nuxt_img, {
            class: "service__img service-icon",
            src: $props.service.icon,
            alt: $options.imgAlt
          }, null, 8, ["src", "alt"])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Shared/ServicesCardItem.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-34fc84e2"]]);
const _sfc_main = {
  props: {
    servicesList: {
      required: true,
      type: Array
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_SharedServicesCardItem = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "services__cards-container" }, _attrs))} data-v-2ae561e8><!--[-->`);
  ssrRenderList($props.servicesList, (service, i) => {
    _push(ssrRenderComponent(_component_SharedServicesCardItem, {
      key: i,
      service
    }, null, _parent));
  });
  _push(`<!--]--></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Shared/ServicesCards.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-2ae561e8"]]);

export { __nuxt_component_1 as _ };
//# sourceMappingURL=ServicesCards-0145abf8.mjs.map
