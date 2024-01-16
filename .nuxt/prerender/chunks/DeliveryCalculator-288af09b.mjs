import { b as buildAssetsURL } from './renderer.mjs';
import { _ as _export_sfc, f as useRoute, u as useNuxtApp, i as useRuntimeConfig } from './server.mjs';
import { useSSRContext, mergeProps, withCtx, createTextVNode, resolveDirective } from 'file://C:/Users/tzhovtyy/Desktop/tislogistic-frontend/node_modules/vue/index.mjs';
import { vMaska } from 'file://C:/Users/tzhovtyy/Desktop/tislogistic-frontend/node_modules/maska/dist/maska.js';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderClass, ssrRenderAttr, ssrRenderList, ssrGetDirectiveProps } from 'file://C:/Users/tzhovtyy/Desktop/tislogistic-frontend/node_modules/vue/server-renderer/index.mjs';
import { _ as _imports_0$1 } from './expand-29e2e84d.mjs';
import { _ as __nuxt_component_0$2 } from './nuxt-link-0d39ff03.mjs';
import { u as useCalculatorPopup, c as useSuccessModal } from './state-06d22502.mjs';
import { v as validate } from './validate-e4070f14.mjs';

const _sfc_main$3 = {
  directives: { maska: vMaska },
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
      return {
        2: "\u0412\u043B\u0430\u0434\u0438\u0432\u043E\u0441\u0442\u043E\u043A",
        3: "\u041D\u043E\u0432\u043E\u0441\u0438\u0431\u0438\u0440\u0441\u043A",
        4: "\u041C\u043E\u0441\u043A\u0432\u0430",
        5: "\u0421\u0430\u043D\u043A\u0442-\u041F\u0435\u0442\u0435\u0440\u0431\u0443\u0440\u0433",
        6: "\u041D\u0430\u0445\u043E\u0434\u043A\u0430",
        7: "\u0425\u0430\u0431\u0430\u0440\u043E\u0432\u0441\u043A",
        8: "\u0423\u0441\u0441\u0443\u0440\u0438\u0439\u0441\u043A"
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
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "calculator__input-container select_container" }, _attrs))} data-v-34c19a65><div class="${ssrRenderClass([{ gray: !$props.formData.city_id }, "calculator__select"])}" data-v-34c19a65>${ssrInterpolate($options.cityChosen)} <img${ssrRenderAttr("src", _imports_0$1)} class="${ssrRenderClass({ rotated: $data.cityOptionsShown })}" alt="" data-v-34c19a65>`);
  if ($data.cityOptionsShown) {
    _push(`<ul class="calculator__options" data-v-34c19a65><!--[-->`);
    ssrRenderList($options.citiesIDs, (cityID, key) => {
      _push(`<li data-v-34c19a65>${ssrInterpolate($options.cities[cityID])}</li>`);
    });
    _push(`<!--]--></ul>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div><label class="calculator__input-label" data-v-34c19a65>\u0424\u0438\u043B\u0438\u0430\u043B</label>`);
  if ($props.invalidInputMessages.city_id) {
    _push(`<div class="calculator__error-message" data-v-34c19a65>${ssrInterpolate($props.invalidInputMessages.city_id)}</div>`);
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
const __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3], ["__scopeId", "data-v-34c19a65"]]);
const _imports_0 = "" + buildAssetsURL("info.ab8754de.svg");
const _sfc_main$2 = {
  directives: { maska: vMaska },
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
    },
    setNumberToDefault() {
      if (!this.formData.phone) {
        this.$emit("fieldUpd", "+7");
      }
    }
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _directive_maska = resolveDirective("maska");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "calculator__input-container" }, _attrs))} data-v-50212889>`);
  if ($props.inputName === "description") {
    _push(`<img${ssrRenderAttr("src", _imports_0)} class="calculator__info_icon"${ssrRenderAttr("alt", _ctx.$texts.additionalInfo)} data-v-50212889>`);
  } else {
    _push(`<!---->`);
  }
  if ($props.inputName === "description") {
    _push(`<div class="calculator__description-message" data-v-50212889>${ssrInterpolate(_ctx.$texts.descriptionInputMessage)}</div>`);
  } else {
    _push(`<!---->`);
  }
  if ($props.inputName === "phone") {
    _push(`<input${ssrRenderAttrs(mergeProps({
      "data-maska": "+# ### ###-##-##",
      class: "calculator__input",
      placeholder: _ctx.$texts[$props.inputName],
      value: $props.formData[$props.inputName]
    }, ssrGetDirectiveProps(_ctx, _directive_maska)))} data-v-50212889>`);
  } else {
    _push(`<input${ssrRenderAttr("type", $props.inputName === "email" ? "email" : "text")} class="calculator__input"${ssrRenderAttr("placeholder", _ctx.$texts[$props.inputName])}${ssrRenderAttr("value", $props.formData[$props.inputName])} data-v-50212889>`);
  }
  _push(`<label class="calculator__input-label" data-v-50212889>${ssrInterpolate(_ctx.$texts[$props.inputName])}</label>`);
  if ($props.invalidInputMessages[$props.inputName]) {
    _push(`<div class="calculator__error-message" data-v-50212889>${ssrInterpolate($props.invalidInputMessages[$props.inputName])}</div>`);
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
const __nuxt_component_1$1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-50212889"]]);
const _sfc_main$1 = {
  directives: { maska: vMaska },
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
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "calculator__body" }, _attrs))} data-v-62b09f69><div class="calculator__second-desktop-layout-container" data-v-62b09f69>`);
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
  _push(`<div class="calculator__email-container" data-v-62b09f69>`);
  _push(ssrRenderComponent(_component_SharedCalculatorInput, {
    class: "shrink",
    "form-data": $props.formData,
    "invalid-input-messages": $props.invalidInputMessages,
    "input-name": "email",
    onFieldUpd: (value) => _ctx.$emit("fieldUpd", value, "email")
  }, null, _parent));
  _push(`<p class="calculator__email-note" data-v-62b09f69>${ssrInterpolate(_ctx.$texts.calculatorEmailNote)}</p></div></div><div class="calculator__bottom" data-v-62b09f69><div class="calculator__send-container" data-v-62b09f69><button class="calculator__button animate-red" data-v-62b09f69>${ssrInterpolate(_ctx.$texts.send)}</button><div class="calculator__confidentiality" data-v-62b09f69> \u041D\u0430\u0436\u0438\u043C\u0430\u044F \u043A\u043D\u043E\u043F\u043A\u0443 <span data-v-62b09f69>\xAB\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C\xBB</span>, \u0412\u044B \u043F\u0440\u0438\u043D\u0438\u043C\u0430\u0435\u0442\u0435 \u0443\u0441\u043B\u043E\u0432\u0438\u044F `);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/eula",
    target: "_blank"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u043E\u0433\u043E \u0441\u043E\u0433\u043B\u0430\u0448\u0435\u043D\u0438\u044F `);
      } else {
        return [
          createTextVNode("\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u043E\u0433\u043E \u0441\u043E\u0433\u043B\u0430\u0448\u0435\u043D\u0438\u044F ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`\u0438 `);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/politika-konfidencialnosti",
    target: "_blank"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`\u043F\u043E\u043B\u0438\u0442\u0438\u043A\u0438 \u043A\u043E\u043D\u0444\u0438\u0434\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438`);
      } else {
        return [
          createTextVNode("\u043F\u043E\u043B\u0438\u0442\u0438\u043A\u0438 \u043A\u043E\u043D\u0444\u0438\u0434\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438")
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
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-62b09f69"]]);
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
  }, _attrs))} data-v-8d0e9f87><h2 class="calculator__title" data-v-8d0e9f87>${ssrInterpolate(_ctx.$texts.calculateTitle)}</h2><p class="calculator__subtitle" data-v-8d0e9f87>${ssrInterpolate(_ctx.$texts.legalEntitiesOnly)}</p>`);
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
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-8d0e9f87"]]);

export { __nuxt_component_1 as _ };
//# sourceMappingURL=DeliveryCalculator-288af09b.mjs.map
