import { useSSRContext, resolveDirective, mergeProps, withCtx, createTextVNode, createVNode } from 'file:///Users/nikitamakovei/repos/tislogistic-frontend/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderClass, ssrRenderAttr, ssrRenderList, ssrGetDirectiveProps } from 'file:///Users/nikitamakovei/repos/tislogistic-frontend/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc, f as useRoute, u as useNuxtApp, i as useRuntimeConfig } from '../server.mjs';
import { _ as __nuxt_component_0$2 } from './nuxt-link-0d39ff03.mjs';
import { a as useReturnCallModal, c as useSuccessModal } from './state-06d22502.mjs';
import { vMaska } from 'file:///Users/nikitamakovei/repos/tislogistic-frontend/node_modules/maska/dist/maska.js';
import { v as validate } from './validate-e4070f14.mjs';
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
  directives: { maska: vMaska },
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
        14: "\u041C\u043E\u0440\u0441\u043A\u0438\u0435 \u0433\u0440\u0443\u0437\u043E\u043F\u0435\u0440\u0435\u0432\u043E\u0437\u043A\u0438",
        15: "\u0416\u0435\u043B\u0435\u0437\u043D\u043E\u0434\u043E\u0440\u043E\u0436\u043D\u044B\u0435 \u043F\u0435\u0440\u0435\u0432\u043E\u0437\u043A\u0438",
        16: "\u0410\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0435 \u043F\u0435\u0440\u0435\u0432\u043E\u0437\u043A\u0438",
        17: "\u0410\u0432\u0438\u0430\u043F\u0435\u0440\u0435\u0432\u043E\u0437\u043A\u0438",
        24: "\u041F\u0440\u043E\u0435\u043A\u0442\u043D\u0430\u044F \u043B\u043E\u0433\u0438\u0441\u0442\u0438\u043A\u0430",
        19: "\u0422\u0430\u043C\u043E\u0436\u0435\u043D\u043D\u043E\u0435 \u043E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u0438\u0435",
        20: "\u041E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0435 \u0445\u0440\u0430\u043D\u0435\u043D\u0438\u0435",
        21: "\u042D\u043A\u0441\u043F\u0435\u0434\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u0433\u0440\u0443\u0437\u043E\u0432",
        18: "\u0414\u043E\u0441\u0442\u0430\u0432\u043A\u0430 \u0441\u0431\u043E\u0440\u043D\u044B\u0445 \u0433\u0440\u0443\u0437\u043E\u0432",
        22: "\u0421\u0442\u0440\u0430\u0445\u043E\u0432\u0430\u043D\u0438\u0435 \u0433\u0440\u0443\u0437\u043E\u0432",
        23: "\u0421\u0435\u0440\u0442\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u044F \u043F\u0440\u043E\u0434\u0443\u043A\u0446\u0438\u0438"
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
        4: "\u041C\u043E\u0441\u043A\u0432\u0430",
        2: "\u0412\u043B\u0430\u0434\u0438\u0432\u043E\u0441\u0442\u043E\u043A",
        5: "\u0421\u0430\u043D\u043A\u0442-\u041F\u0435\u0442\u0435\u0440\u0431\u0443\u0440\u0433",
        3: "\u041D\u043E\u0432\u043E\u0441\u0438\u0431\u0438\u0440\u0441\u043A",
        7: "\u0425\u0430\u0431\u0430\u0440\u043E\u0432\u0441\u043A",
        8: "\u0423\u0441\u0441\u0443\u0440\u0438\u0439\u0441\u043A",
        6: "\u041D\u0430\u0445\u043E\u0434\u043A\u0430"
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
  const _directive_maska = resolveDirective("maska");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "return-call" }, _attrs))} data-v-f2e50809>`);
  if ($props.modal) {
    _push(`<button class="return-call__close" data-v-f2e50809>`);
    _push(ssrRenderComponent(_component_IconsClosePopup, {
      alt: _ctx.$texts.close
    }, null, _parent));
    _push(`</button>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<h3 data-v-f2e50809>${ssrInterpolate($props.title)}</h3><h5 data-v-f2e50809>${ssrInterpolate(_ctx.$texts.willCall)}</h5><div class="return-call__fields" data-v-f2e50809><div class="return-call__field" data-v-f2e50809><div class="${ssrRenderClass([{ gray: !$data.formData.service_id }, "return-call__input"])}" data-v-f2e50809>${ssrInterpolate($options.serviceChosen)} <img${ssrRenderAttr("src", _imports_0)} class="${ssrRenderClass({ rotated: $data.serviceOptionsShown })}" alt="" data-v-f2e50809><ul class="${ssrRenderClass([{ options_shown: $data.serviceOptionsShown }, "return-call__options"])}" data-v-f2e50809><!--[-->`);
  ssrRenderList($options.servicesIDs, (serviceID, key) => {
    _push(`<li data-v-f2e50809>${ssrInterpolate($options.services[serviceID])}</li>`);
  });
  _push(`<!--]--></ul></div><div class="return-call__error" data-v-f2e50809>${ssrInterpolate($data.invalidInputMessages.service_id)}</div></div><div class="return-call__field" data-v-f2e50809><div class="${ssrRenderClass([{ gray: !$data.formData.city_id }, "return-call__input"])}" data-v-f2e50809>${ssrInterpolate($options.cityChosen)} <img${ssrRenderAttr("src", _imports_0)} class="${ssrRenderClass({ rotated: $data.branchOptionsShown })}" alt="" data-v-f2e50809><ul class="${ssrRenderClass([{ options_shown: $data.branchOptionsShown }, "return-call__options branch_options"])}" data-v-f2e50809><!--[-->`);
  ssrRenderList($options.citiesIDs, (cityID, key) => {
    _push(`<li data-v-f2e50809>${ssrInterpolate($options.cities[cityID])}</li>`);
  });
  _push(`<!--]--></ul></div><div class="return-call__error" data-v-f2e50809>${ssrInterpolate($data.invalidInputMessages.city_id)}</div></div><div class="return-call__field" data-v-f2e50809><input class="return-call__input"${ssrRenderAttr("placeholder", _ctx.$texts.name)}${ssrRenderAttr("value", $data.formData.full_name)} data-v-f2e50809><div class="return-call__error" data-v-f2e50809>${ssrInterpolate($data.invalidInputMessages.full_name)}</div></div><div class="return-call__field" data-v-f2e50809><input${ssrRenderAttrs(mergeProps({
    class: "return-call__input",
    placeholder: _ctx.$texts.phoneNumber,
    "data-maska": "+7 ### ###-##-##",
    "data-maska-eager": "",
    value: $data.formData.phone
  }, ssrGetDirectiveProps(_ctx, _directive_maska)))} data-v-f2e50809><div class="return-call__error" data-v-f2e50809>${ssrInterpolate($data.invalidInputMessages.phone)}</div></div></div><div class="return-call__bottom" data-v-f2e50809><button class="return-call__send animate-red" data-v-f2e50809>${ssrInterpolate($props.sumbitBtnText)}</button><p data-v-f2e50809> \u041D\u0430\u0436\u0438\u043C\u0430\u044F \u043A\u043D\u043E\u043F\u043A\u0443, \u0412\u044B \u043F\u0440\u0438\u043D\u0438\u043C\u0430\u0435\u0442\u0435 \u0443\u0441\u043B\u043E\u0432\u0438\u044F <br class="tablet-only" data-v-f2e50809>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/eula",
    target: "_blank"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u043E\u0433\u043E <br class="desktop-only" data-v-f2e50809${_scopeId}> \u0441\u043E\u0433\u043B\u0430\u0448\u0435\u043D\u0438\u044F `);
      } else {
        return [
          createTextVNode("\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u043E\u0433\u043E "),
          createVNode("br", { class: "desktop-only" }),
          createTextVNode(" \u0441\u043E\u0433\u043B\u0430\u0448\u0435\u043D\u0438\u044F ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(` \u0438 `);
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
  _push(`</p></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Shared/ReturnCallForm.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-f2e50809"]]);

export { __nuxt_component_0 as _, __nuxt_component_0$1 as a };
//# sourceMappingURL=ReturnCallForm-aea0d31d.mjs.map
