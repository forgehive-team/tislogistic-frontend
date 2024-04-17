import { useSSRContext, mergeProps, withCtx, createTextVNode, createVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderClass, ssrRenderAttr, ssrRenderList } from 'vue/server-renderer';
import { _ as _export_sfc, f as useRoute, u as useNuxtApp, i as useRuntimeConfig } from '../server.mjs';
import { _ as __nuxt_component_0$2 } from './nuxt-link-0d39ff03.mjs';
import { a as useReturnCallModal, c as useSuccessModal } from './state-06d22502.mjs';
import { v as validate } from './validate-895dda7b.mjs';
import { _ as _imports_0 } from './expand-29e2e84d.mjs';

const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M30 18L18 30" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M18 18L30 30" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Icons/ClosePopup.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  props: {
    title: {
      type: String,
      required: true
    },
    modal: {
      type: Boolean,
      required: true
    },
    rentalContainers: {
      type: Boolean,
      required: true
    },
    sumbitBtnText: {
      type: String,
      required: true
    }
  },
  setup() {
    const returnCallShown = useReturnCallModal();
    const successShown = useSuccessModal();
    const route = useRoute();
    return {
      returnCallShown,
      successShown,
      route
    };
  },
  data() {
    return {
      serviceOptionsShown: false,
      branchOptionsShown: false,
      formData: {
        service_id: "",
        city_id: "",
        phone: "",
        full_name: ""
      },
      invalidInputMessages: {
        service_id: "",
        city_id: "",
        phone: "",
        full_name: ""
      }
    };
  },
  computed: {
    services() {
      return this.rentalContainers ? {
        25: "20DC",
        26: "20HC PW",
        27: "40HC",
        28: "40HC PW"
      } : {
        29: "Multimodal transportation",
        30: "Terminal services",
        14: "Sea freight",
        15: "Railway freight",
        16: "Automobile transportation",
        17: "Air freight",
        24: "Project logistics",
        19: "Customs clearance",
        20: "Responsible storage",
        21: "Freight forwarding",
        18: "Delivery of bulk cargo",
        22: "Cargo insurance",
        23: "Product certification"
      };
    },
    servicesIDs() {
      return Object.keys(this.services);
    },
    serviceChosen() {
      const { $texts } = useNuxtApp();
      return this.formData.service_id ? this.services[this.formData.service_id] : this.rentalContainers ? $texts.containerType : $texts.whichService;
    },
    cities() {
      return {
        4: "Moscow",
        2: "Vladivostok",
        5: "Saint Petersburg",
        3: "Novosibirsk",
        7: "Khabarovsk",
        8: "Ussuriysk",
        6: "Nakhodka"
      };
    },
    citiesIDs() {
      return [4, 2, 5, 3, 7, 8, 6];
    },
    cityChosen() {
      const { $texts } = useNuxtApp();
      return this.formData.city_id ? this.cities[this.formData.city_id] : $texts.branch;
    }
  },
  methods: {
    updateField(value, key) {
      this.formData[key] = value;
    },
    handleSubmit() {
      let valid = true;
      for (const [key, value] of Object.entries(this.formData)) {
        const errMessage = validate(value, key);
        if (errMessage) {
          valid = false;
          this.invalidInputMessages[key] = errMessage;
          const unwatch = this.$watch(
            () => this.formData[key],
            () => this.clearError(key, unwatch)
          );
        }
      }
      valid && this.sendData();
    },
    clearError(key, unwatch) {
      this.invalidInputMessages[key] = "";
      unwatch();
    },
    clearData() {
      for (const key in this.formData) {
        this.formData[key] = "";
      }
    },
    async sendData() {
      const { apiBase } = /* @__PURE__ */ useRuntimeConfig();
      const queryParams = Object.keys(this.route.query).length ? this.route.query : null;
      const data = { ...this.formData, query_params: queryParams };
      this.successShown = !this.successShown;
      this.returnCallShown = false;
      try {
        if (dataLayer) {
          dataLayer.push({ event: "callback" });
        }
        await $fetch(`${apiBase}/api/callback_request/submit`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(data),
          credentials: "include"
        });
        this.clearData();
      } catch (err) {
        this.clearData();
      }
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_IconsClosePopup = __nuxt_component_0$1;
  const _component_NuxtLink = __nuxt_component_0$2;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "return-call" }, _attrs))} data-v-c7993bd8>`);
  if ($props.modal) {
    _push(`<button class="return-call__close" data-v-c7993bd8>`);
    _push(ssrRenderComponent(_component_IconsClosePopup, {
      alt: _ctx.$texts.close
    }, null, _parent));
    _push(`</button>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<h3 data-v-c7993bd8>${ssrInterpolate($props.title)}</h3><h5 data-v-c7993bd8>${ssrInterpolate(_ctx.$texts.willCall)}</h5><div class="return-call__fields" data-v-c7993bd8><div class="return-call__field" data-v-c7993bd8><div class="${ssrRenderClass([{ gray: !$data.formData.service_id }, "return-call__input"])}" data-v-c7993bd8>${ssrInterpolate($options.serviceChosen)} <img${ssrRenderAttr("src", _imports_0)} class="${ssrRenderClass({ rotated: $data.serviceOptionsShown })}" alt="" data-v-c7993bd8><ul class="${ssrRenderClass([{ options_shown: $data.serviceOptionsShown }, "return-call__options"])}" data-v-c7993bd8><!--[-->`);
  ssrRenderList($options.servicesIDs, (serviceID, key) => {
    _push(`<li data-v-c7993bd8>${ssrInterpolate($options.services[serviceID])}</li>`);
  });
  _push(`<!--]--></ul></div><div class="return-call__error" data-v-c7993bd8>${ssrInterpolate($data.invalidInputMessages.service_id)}</div></div><div class="return-call__field" data-v-c7993bd8><div class="${ssrRenderClass([{ gray: !$data.formData.city_id }, "return-call__input"])}" data-v-c7993bd8>${ssrInterpolate($options.cityChosen)} <img${ssrRenderAttr("src", _imports_0)} class="${ssrRenderClass({ rotated: $data.branchOptionsShown })}" alt="" data-v-c7993bd8><ul class="${ssrRenderClass([{ options_shown: $data.branchOptionsShown }, "return-call__options branch_options"])}" data-v-c7993bd8><!--[-->`);
  ssrRenderList($options.citiesIDs, (cityID, key) => {
    _push(`<li data-v-c7993bd8>${ssrInterpolate($options.cities[cityID])}</li>`);
  });
  _push(`<!--]--></ul></div><div class="return-call__error" data-v-c7993bd8>${ssrInterpolate($data.invalidInputMessages.city_id)}</div></div><div class="return-call__field" data-v-c7993bd8><input class="return-call__input"${ssrRenderAttr("placeholder", _ctx.$texts.name)}${ssrRenderAttr("value", $data.formData.full_name)} data-v-c7993bd8><div class="return-call__error" data-v-c7993bd8>${ssrInterpolate($data.invalidInputMessages.full_name)}</div></div><div class="return-call__field" data-v-c7993bd8><input class="return-call__input"${ssrRenderAttr("placeholder", _ctx.$texts.phoneNumber)}${ssrRenderAttr("value", $data.formData.phone)} data-v-c7993bd8><div class="return-call__error" data-v-c7993bd8>${ssrInterpolate($data.invalidInputMessages.phone)}</div></div></div><div class="return-call__bottom" data-v-c7993bd8><button class="return-call__send animate-red" data-v-c7993bd8>${ssrInterpolate($props.sumbitBtnText)}</button><p data-v-c7993bd8> By clicking the button, you accept the terms of <br class="tablet-only" data-v-c7993bd8>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/eula",
    target: "_blank"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`user <br class="desktop-only" data-v-c7993bd8${_scopeId}> agreement `);
      } else {
        return [
          createTextVNode("user "),
          createVNode("br", { class: "desktop-only" }),
          createTextVNode(" agreement ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(` and `);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/privacy-policy",
    target: "_blank"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`privacy policy`);
      } else {
        return [
          createTextVNode("privacy policy")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</p></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Shared/ReturnCallForm.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-c7993bd8"]]);

export { __nuxt_component_0 as _, __nuxt_component_0$1 as a };
//# sourceMappingURL=ReturnCallForm-d086548f.mjs.map
