import { b as buildAssetsURL } from '../../handlers/renderer.mjs';
import { _ as _export_sfc, f as useRoute, u as useNuxtApp, i as useRuntimeConfig } from '../server.mjs';
import { useSSRContext, mergeProps, withCtx, createTextVNode } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderClass, ssrRenderAttr, ssrRenderList } from 'vue/server-renderer';
import { _ as _imports_0$1 } from './expand-29e2e84d.mjs';
import { _ as __nuxt_component_0$2 } from './nuxt-link-0d39ff03.mjs';
import { u as useCalculatorPopup, c as useSuccessModal } from './state-06d22502.mjs';
import { v as validate } from './validate-895dda7b.mjs';

const _sfc_main$3 = {
  props: {
    formData: {
      type: Object,
      required: true
    },
    invalidInputMessages: {
      type: Object,
      required: true
    }
  },
  emits: ["fieldUpd"],
  data() {
    return {
      cityOptionsShown: false
    };
  },
  computed: {
    cities() {
      const route = useRoute();
      return [
        "services-terminalnie-uslugi",
        "services-terminal-services"
      ].includes(route.name) ? {
        20: "Vladivostok",
        30: "Novosibirsk",
        70: "Khabarovsk"
      } : {
        2: "Vladivostok",
        3: "Novosibirsk",
        4: "Moscow",
        5: "Saint Petersburg",
        6: "Nakhodka",
        7: "Khabarovsk",
        8: "Ussuriysk"
      };
    },
    citiesIDs() {
      return Object.keys(this.cities);
    },
    cityChosen() {
      const { $texts } = useNuxtApp();
      return this.formData.city_id ? this.cities[this.formData.city_id] : $texts.chooseClosestBranch;
    }
  },
  methods: {
    updateField(value) {
      this.$emit("fieldUpd", value);
    }
  }
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "calculator__input-container select_container" }, _attrs))} data-v-df70b09f><div class="${ssrRenderClass([{ gray: !$props.formData.city_id }, "calculator__select"])}" data-v-df70b09f>${ssrInterpolate($options.cityChosen)} <img${ssrRenderAttr("src", _imports_0$1)} class="${ssrRenderClass({ rotated: $data.cityOptionsShown })}" alt="" data-v-df70b09f>`);
  if ($data.cityOptionsShown) {
    _push(`<ul class="calculator__options" data-v-df70b09f><!--[-->`);
    ssrRenderList($options.citiesIDs, (cityID, key) => {
      _push(`<li data-v-df70b09f>${ssrInterpolate($options.cities[cityID])}</li>`);
    });
    _push(`<!--]--></ul>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div><label class="calculator__input-label" data-v-df70b09f>Branch</label>`);
  if ($props.invalidInputMessages.city_id) {
    _push(`<div class="calculator__error-message" data-v-df70b09f>${ssrInterpolate($props.invalidInputMessages.city_id)}</div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Shared/CalculatorBranchSelect.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3], ["__scopeId", "data-v-df70b09f"]]);
const _imports_0 = "" + buildAssetsURL("info.ab8754de.svg");
const _sfc_main$2 = {
  props: {
    formData: {
      type: Object,
      required: true
    },
    invalidInputMessages: {
      type: Object,
      required: true
    },
    inputName: {
      type: String,
      required: true
    }
  },
  emits: ["fieldUpd"],
  methods: {
    updateField(e) {
      const value = e.target.value;
      this.$emit("fieldUpd", value);
    }
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "calculator__input-container" }, _attrs))} data-v-747640bf>`);
  if ($props.inputName === "description") {
    _push(`<img${ssrRenderAttr("src", _imports_0)} class="calculator__info_icon"${ssrRenderAttr("alt", _ctx.$texts.additionalInfo)} data-v-747640bf>`);
  } else {
    _push(`<!---->`);
  }
  if ($props.inputName === "description") {
    _push(`<div class="calculator__description-message" data-v-747640bf>${ssrInterpolate(_ctx.$texts.descriptionInputMessage)}</div>`);
  } else {
    _push(`<!---->`);
  }
  if ($props.inputName === "phone") {
    _push(`<input class="calculator__input"${ssrRenderAttr("placeholder", _ctx.$texts[$props.inputName])}${ssrRenderAttr("value", $props.formData[$props.inputName])} data-v-747640bf>`);
  } else {
    _push(`<input${ssrRenderAttr("type", $props.inputName === "email" ? "email" : "text")} class="calculator__input"${ssrRenderAttr("placeholder", _ctx.$texts[$props.inputName])}${ssrRenderAttr("value", $props.formData[$props.inputName])} data-v-747640bf>`);
  }
  _push(`<label class="calculator__input-label" data-v-747640bf>${ssrInterpolate(_ctx.$texts[$props.inputName])}</label>`);
  if ($props.invalidInputMessages[$props.inputName]) {
    _push(`<div class="calculator__error-message" data-v-747640bf>${ssrInterpolate($props.invalidInputMessages[$props.inputName])}</div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Shared/CalculatorInput.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_1$1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-747640bf"]]);
const _sfc_main$1 = {
  props: {
    handleSubmit: {
      type: Function,
      required: true
    },
    formData: {
      type: Object,
      required: true
    },
    invalidInputMessages: {
      type: Object,
      required: true
    }
  },
  emits: ["fieldUpd"]
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_SharedCalculatorBranchSelect = __nuxt_component_0$1;
  const _component_SharedCalculatorInput = __nuxt_component_1$1;
  const _component_NuxtLink = __nuxt_component_0$2;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "calculator__body" }, _attrs))} data-v-c036e5e5><div class="calculator__second-desktop-layout-container" data-v-c036e5e5>`);
  _push(ssrRenderComponent(_component_SharedCalculatorBranchSelect, {
    "form-data": $props.formData,
    "invalid-input-messages": $props.invalidInputMessages,
    onFieldUpd: (value) => _ctx.$emit("fieldUpd", value, "city_id")
  }, null, _parent));
  _push(ssrRenderComponent(_component_SharedCalculatorInput, {
    class: "shrink",
    "form-data": $props.formData,
    "invalid-input-messages": $props.invalidInputMessages,
    "input-name": "phone",
    onFieldUpd: (value) => _ctx.$emit("fieldUpd", value, "phone")
  }, null, _parent));
  _push(`<div class="calculator__email-container" data-v-c036e5e5>`);
  _push(ssrRenderComponent(_component_SharedCalculatorInput, {
    class: "shrink",
    "form-data": $props.formData,
    "invalid-input-messages": $props.invalidInputMessages,
    "input-name": "email",
    onFieldUpd: (value) => _ctx.$emit("fieldUpd", value, "email")
  }, null, _parent));
  _push(`<p class="calculator__email-note" data-v-c036e5e5>${ssrInterpolate(_ctx.$texts.calculatorEmailNote)}</p></div></div><div class="calculator__bottom" data-v-c036e5e5><div class="calculator__send-container" data-v-c036e5e5><button class="calculator__button animate-red" data-v-c036e5e5>${ssrInterpolate(_ctx.$texts.send)}</button><div class="calculator__confidentiality" data-v-c036e5e5> By clicking <span data-v-c036e5e5>&quot;Send&quot;</span>, you accept the terms of `);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/eula",
    target: "_blank"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`user agreement `);
      } else {
        return [
          createTextVNode("user agreement ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`and `);
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
  _push(`</div></div></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Shared/CalculatorSecondStep.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-c036e5e5"]]);
const _sfc_main = {
  setup() {
    const calculatorPopupShown = useCalculatorPopup();
    const successShown = useSuccessModal();
    const route = useRoute();
    return {
      calculatorPopupShown,
      successShown,
      route
    };
  },
  data() {
    return {
      firstStep: false,
      formData: {
        city_id: "",
        // from: '',
        // to: '',
        // description: '',
        phone: "",
        email: ""
      },
      invalidInputMessages: {
        city_id: "",
        // to: '',
        // from: '',
        // description: '',
        phone: "",
        email: ""
      },
      unwatchers: {
        // to: null,
        // from: null,
        // description: null,
        phone: null,
        email: null
      }
    };
  },
  // computed: {
  //     isFirstStep() {
  //         return this.firstStep;
  //     },
  //     isSecondStep() {
  //         return !this.firstStep;
  //     },
  // },
  methods: {
    clearError(key, unwatch) {
      this.invalidInputMessages[key] = "";
      unwatch();
    },
    // goFirstStep() {
    //     this.firstStep = true;
    // },
    // goSecondStep() {
    //     this.firstStep = false;
    // },
    updateField(value, key) {
      this.formData[key] = value;
    },
    handleSubmit() {
      let valid = true;
      for (const [key, value] of Object.entries(this.formData)) {
        const errMessage = validate(value, key);
        if (errMessage) {
          this.invalidInputMessages[key] = errMessage;
          valid = false;
          const unwatch = this.$watch(
            () => this.formData[key],
            () => this.clearError(key, unwatch)
          );
        }
      }
      if (!valid)
        return;
      this.isFirstStep ? this.goSecondStep() : this.sendData();
    },
    async sendData() {
      const { apiBase } = /* @__PURE__ */ useRuntimeConfig();
      this.successShown = !this.successShown;
      this.calculatorPopupShown = false;
      const queryParams = Object.keys(this.route.query).length ? this.route.query : null;
      const data = { ...this.formData, query_params: queryParams };
      try {
        if (dataLayer) {
          dataLayer.push({ event: "calc_delivery" });
        }
        await $fetch(`${apiBase}/api/calculation_request/submit`, {
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
    },
    clearData() {
      for (const key in this.formData) {
        this.formData[key] = "";
      }
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_SharedCalculatorSecondStep = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({
    id: "calculator",
    class: "calculator"
  }, _attrs))} data-v-7364d8b6><h2 class="calculator__title" data-v-7364d8b6>${ssrInterpolate(_ctx.$texts.calculateTitle)}</h2><p class="calculator__subtitle" data-v-7364d8b6>${ssrInterpolate(_ctx.$texts.legalEntitiesOnly)}</p>`);
  _push(ssrRenderComponent(_component_SharedCalculatorSecondStep, {
    "handle-submit": $options.handleSubmit,
    "form-data": $data.formData,
    "invalid-input-messages": $data.invalidInputMessages,
    onFieldUpd: $options.updateField
  }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Shared/DeliveryCalculator.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-7364d8b6"]]);

export { __nuxt_component_1 as _ };
//# sourceMappingURL=DeliveryCalculator-22efe5b0.mjs.map
