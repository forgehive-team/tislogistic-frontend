import { _ as __nuxt_component_0$1 } from './BreadCrumbs-51af2094.mjs';
import { _ as __nuxt_component_0$2 } from './CardsItem-9188544b.mjs';
import { useSSRContext, unref, reactive, ref, mergeProps, withCtx, createTextVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrRenderClass } from 'vue/server-renderer';
import { _ as _export_sfc, u as useNuxtApp, a as useHead } from '../server.mjs';
import { _ as __nuxt_component_0$3 } from './nuxt-link-0d39ff03.mjs';
import { c as useSuccessModal } from './state-06d22502.mjs';
import { u as useServerHead } from './internalLinks-4b44e090.mjs';
import { u as useImage } from './composables-5d51eb10.mjs';
import 'ufo';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'vue-router';
import 'h3';
import 'defu';
import '../../nitro/node-server.mjs';
import 'node-fetch-native/polyfill';
import 'node:http';
import 'node:https';
import 'destr';
import 'unenv/runtime/fetch/index';
import 'scule';
import 'ohash';
import 'unstorage';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';
import 'ipx';

const cards = [
  {
    title: "Working conditions",
    text: "We do not adhere to strict rules: we work in a hybrid format and are not tied to time, we have 2 metrics that we pay attention to - deadlines and results. As for appearance - we value individuality, we do not have a strict dress code, we are for comfort and convenience, and only at business meetings we recommend to stick to a more restrained style. Office - we have comfortable workplaces with a recreation area, where you can spend your lunch break and gain strength to accomplish great things."
  },
  {
    title: "Education",
    text: "Our company does not stand still and is constantly improving its knowledge. We undergo both offline and online training, exchange experience with colleagues, and attend various educational events. We are happy to share our knowledge and practical skills at various conferences and exhibitions to help others develop and achieve their goals."
  },
  {
    title: "Ecology",
    text: "We are doing our part to reduce our ecological footprint so that we can be part of a bigger cause. For example, we collect batteries and take them to a proper recycling center, and we also participate in tree planting. We support every endeavor, if you share our views, join our ranks!"
  },
  {
    title: "Health",
    text: "We take care of our employees' health: we have VHI and dispenserization programs, which we improve and enhance every year - all to take care of our colleagues."
  },
  {
    title: "Leisure",
    text: "We like not only to work with our colleagues, but also to spend our leisure time together. For example, we organize themed evenings, hiking trips and Sunday picnics."
  }
];
const _sfc_main$5 = {
  __name: "WhyUs",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_HomeCardsItem = __nuxt_component_0$2;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-2fc4b619><h2 data-v-2fc4b619>${ssrInterpolate(_ctx.$texts.whyUs)}</h2><div class="pseudo-grid" data-v-2fc4b619><div class="left column" data-v-2fc4b619><!--[-->`);
      ssrRenderList(unref(cards).slice(0, 2), (item, i) => {
        _push(ssrRenderComponent(_component_HomeCardsItem, {
          key: i,
          class: "_title-yellow _vacancies",
          title: item.title,
          text: item.text
        }, null, _parent));
      });
      _push(`<!--]--></div><div class="right column" data-v-2fc4b619><!--[-->`);
      ssrRenderList(unref(cards).slice(2), (item, i) => {
        _push(ssrRenderComponent(_component_HomeCardsItem, {
          key: i,
          class: "_title-yellow _vacancies",
          title: item.title,
          text: item.text
        }, null, _parent));
      });
      _push(`<!--]--></div></div></div>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Vacancies/WhyUs.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_1$1 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-2fc4b619"]]);
const _sfc_main$4 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "10",
    height: "12",
    viewBox: "0 0 10 12",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path d="M9.39142 4.61236H6.88225V0.847656H3.11754V4.61236H0.607422L4.99989 9.00483L9.39142 4.61236ZM0.607422 10.2594V11.514H9.39142V10.2594H0.607422Z"></path></svg>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Icons/DownLoad.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$3 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "16",
    height: "17",
    viewBox: "0 0 16 17",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path d="M9.25529 1.92969H4.23506C3.54517 1.92969 2.98706 2.49439 2.98706 3.18522L2.98047 13.2238C2.98047 13.9146 3.53859 14.4793 4.22941 14.4793H11.7645C12.4553 14.4793 13.02 13.9146 13.02 13.2238V5.69439L9.25529 1.92969ZM10.5099 11.9692H5.49059V10.7146H10.5099V11.9692ZM10.5099 9.4591H5.49059V8.20451H10.5099V9.4591ZM8.62753 6.32216V2.87086L12.0788 6.32216H8.62753Z"></path></svg>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Icons/UpLoad.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$2 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "800px",
    height: "800px",
    viewBox: "0 -0.5 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path d="M6.96967 16.4697C6.67678 16.7626 6.67678 17.2374 6.96967 17.5303C7.26256 17.8232 7.73744 17.8232 8.03033 17.5303L6.96967 16.4697ZM13.0303 12.5303C13.3232 12.2374 13.3232 11.7626 13.0303 11.4697C12.7374 11.1768 12.2626 11.1768 11.9697 11.4697L13.0303 12.5303ZM11.9697 11.4697C11.6768 11.7626 11.6768 12.2374 11.9697 12.5303C12.2626 12.8232 12.7374 12.8232 13.0303 12.5303L11.9697 11.4697ZM18.0303 7.53033C18.3232 7.23744 18.3232 6.76256 18.0303 6.46967C17.7374 6.17678 17.2626 6.17678 16.9697 6.46967L18.0303 7.53033ZM13.0303 11.4697C12.7374 11.1768 12.2626 11.1768 11.9697 11.4697C11.6768 11.7626 11.6768 12.2374 11.9697 12.5303L13.0303 11.4697ZM16.9697 17.5303C17.2626 17.8232 17.7374 17.8232 18.0303 17.5303C18.3232 17.2374 18.3232 16.7626 18.0303 16.4697L16.9697 17.5303ZM11.9697 12.5303C12.2626 12.8232 12.7374 12.8232 13.0303 12.5303C13.3232 12.2374 13.3232 11.7626 13.0303 11.4697L11.9697 12.5303ZM8.03033 6.46967C7.73744 6.17678 7.26256 6.17678 6.96967 6.46967C6.67678 6.76256 6.67678 7.23744 6.96967 7.53033L8.03033 6.46967ZM8.03033 17.5303L13.0303 12.5303L11.9697 11.4697L6.96967 16.4697L8.03033 17.5303ZM13.0303 12.5303L18.0303 7.53033L16.9697 6.46967L11.9697 11.4697L13.0303 12.5303ZM11.9697 12.5303L16.9697 17.5303L18.0303 16.4697L13.0303 11.4697L11.9697 12.5303ZM13.0303 11.4697L8.03033 6.46967L6.96967 7.53033L11.9697 12.5303L13.0303 11.4697Z"></path></svg>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Icons/IconsCross.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_2$1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$1 = {
  __name: "CvForm",
  __ssrInlineRender: true,
  setup(__props) {
    useSuccessModal();
    const formData = reactive({
      phone: "",
      email: "",
      full_name: "",
      file: null
    });
    const invalidInputMessages = reactive({
      phone: "",
      email: "",
      full_name: "",
      file: ""
    });
    const fileName = ref("");
    ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_IconsDownLoad = __nuxt_component_0;
      const _component_IconsUpLoad = __nuxt_component_1;
      const _component_IconsCross = __nuxt_component_2$1;
      const _component_NuxtLink = __nuxt_component_0$3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "form-container" }, _attrs))} data-v-30c8f27a><div class="fields" data-v-30c8f27a><div class="fields fields_top" data-v-30c8f27a><div class="input-container" data-v-30c8f27a><input${ssrRenderAttr("value", unref(formData).phone)} class="input"${ssrRenderAttr("placeholder", _ctx.$texts.phoneNumber)} data-v-30c8f27a><p class="error" data-v-30c8f27a>${ssrInterpolate(unref(invalidInputMessages).phone)}</p></div><div class="input-container" data-v-30c8f27a><input${ssrRenderAttr("value", unref(formData).email)} class="input"${ssrRenderAttr("placeholder", _ctx.$texts.email)} data-v-30c8f27a><p class="error" data-v-30c8f27a>${ssrInterpolate(unref(invalidInputMessages).email)}</p></div></div><div class="input-container fio" data-v-30c8f27a><input${ssrRenderAttr("value", unref(formData).full_name)} class="input"${ssrRenderAttr("placeholder", _ctx.$texts.FIO)} data-v-30c8f27a><p class="error" data-v-30c8f27a>${ssrInterpolate(unref(invalidInputMessages).full_name)}</p></div></div><div class="bottom" data-v-30c8f27a><div class="btns" data-v-30c8f27a><a class="cv-btn" href="/anketa.docx" download="\u0410\u043D\u043A\u0435\u0442\u0430_\u0422\u0438\u0441_\u041B\u043E\u0434\u0436\u0438\u0441\u0442\u0438\u043A" data-v-30c8f27a>`);
      _push(ssrRenderComponent(_component_IconsDownLoad, null, null, _parent));
      _push(`${ssrInterpolate(_ctx.$texts.downloadSurvey)}</a><div class="input-container" data-v-30c8f27a><input id="file-upload" class="input-hidden" type="file" hidden data-v-30c8f27a><label for="file-upload" class="${ssrRenderClass([{ disabled: unref(fileName) }, "cv-btn label"])}" data-v-30c8f27a>`);
      _push(ssrRenderComponent(_component_IconsUpLoad, null, null, _parent));
      _push(` ${ssrInterpolate(unref(fileName) || _ctx.$texts.uploadSurvey)}</label>`);
      if (unref(formData).file) {
        _push(`<span class="delete-file" data-v-30c8f27a>`);
        _push(ssrRenderComponent(_component_IconsCross, null, null, _parent));
        _push(`</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<p class="error survey_error" data-v-30c8f27a>${ssrInterpolate(unref(invalidInputMessages).file)}</p></div><button class="send-btn" data-v-30c8f27a>${ssrInterpolate(_ctx.$texts.send)}</button></div><p class="confidentiality" data-v-30c8f27a> By clicking &quot;Send&quot;, you accept the terms of <br data-v-30c8f27a>`);
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
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Vacancies/CvForm.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-30c8f27a"]]);
const _sfc_main = {
  __name: "vacancies",
  __ssrInlineRender: true,
  setup(__props) {
    const { $texts } = useNuxtApp();
    useHead({
      title: $texts.vacancies
    });
    useServerHead({
      meta: [
        { property: "og:title", content: $texts.vacancies },
        { name: "description", content: $texts.aboutSubtitle },
        { property: "og:description", content: $texts.aboutSubtitle },
        { name: "keywords", content: $texts.seoHomeKeywords + $texts.seoKeywordsBase }
      ]
    });
    const $img = useImage();
    const imgUrl = $img("images/vacancies_background.png", {
      format: "webp",
      preload: true,
      quality: "100"
    });
    const bgImg = `background-image: url('${imgUrl}')`;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SharedBreadCrumbs = __nuxt_component_0$1;
      const _component_VacanciesWhyUs = __nuxt_component_1$1;
      const _component_VacanciesCvForm = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-3183a483><section data-v-3183a483><div style="${ssrRenderStyle(bgImg)}" class="bg vacancies-bg" data-v-3183a483></div><div data-v-3183a483>`);
      _push(ssrRenderComponent(_component_SharedBreadCrumbs, null, null, _parent));
      _push(`<h1 data-v-3183a483>${ssrInterpolate(unref($texts).vacancies)}</h1><p data-v-3183a483> Join <span data-v-3183a483>the team of professionals in </span><strong data-v-3183a483>TIS LOGISTIC</strong></p></div></section><section data-v-3183a483>`);
      _push(ssrRenderComponent(_component_VacanciesWhyUs, null, null, _parent));
      _push(`</section><section data-v-3183a483><div class="open-vacancies" data-v-3183a483><h2 data-v-3183a483>${ssrInterpolate(unref($texts).openVacancies)}</h2><a href="https://novosibirsk.hh.ru/employer/171487?hhtmFrom=vacancy" target="_blank" data-v-3183a483>List of vacancies <span data-v-3183a483></span></a></div></section><section data-v-3183a483><div class="banner" data-v-3183a483><strong data-v-3183a483>${ssrInterpolate(unref($texts).vacanciesBanner1)} <span data-v-3183a483>${ssrInterpolate(unref($texts).vacanciesBanner2)}</span></strong></div></section><section data-v-3183a483>`);
      _push(ssrRenderComponent(_component_VacanciesCvForm, null, null, _parent));
      _push(`</section></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/vacancies.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const vacancies = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-3183a483"]]);

export { vacancies as default };
//# sourceMappingURL=vacancies-ef749d64.mjs.map
