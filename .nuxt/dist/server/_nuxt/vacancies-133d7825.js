import { _ as __nuxt_component_0$5 } from "./BreadCrumbs-7a67b271.js";
import { _ as __nuxt_component_0$2 } from "./CardsItem-11652c8d.js";
import { unref, useSSRContext, mergeProps, ref, computed, toRaw, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, reactive, createTextVNode } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderComponent, ssrRenderAttr, ssrGetDirectiveProps, ssrGetDynamicModelProps, ssrRenderClass, ssrRenderStyle } from "vue/server-renderer";
import { _ as _export_sfc, u as useNuxtApp, a as useHead } from "../server.mjs";
import { _ as __nuxt_component_0$3 } from "./CitySlider-5181d92e.js";
import { Swiper, SwiperSlide } from "swiper/vue";
import "hookable";
import "destr";
import { _ as __nuxt_component_0$4 } from "./nuxt-link-0d39ff03.js";
import { a as useSuccessModal } from "./state-06d22502.js";
import { vMaska } from "maska";
import { u as useServerHead } from "./internalLinks-dc4e1b80.js";
import { u as useImage } from "./composables-5d51eb10.js";
import "ufo";
import "ofetch";
import "#internal/nitro";
import "unctx";
/* empty css                     */import "vue-router";
import "h3";
import "defu";
const cards = [
  {
    title: "Условия труда",
    text: "Мы не придерживаемся строгих правил: работаем в гибридном формате и не привязываемся ко времени, у нас есть 2 метрики, на которые мы обращаем внимание — это сроки и результат. \n\nЧто касается внешнего вида — мы ценим индивидуальность, у нас нет строгого дресс-кода, мы за удобство и комфорт, и только на деловых встречах мы рекомендуем придерживаться более сдержанного стиля.Офис — у нас удобные рабочие места с зоной отдыха, где можно провести свой обеденной перерыв и набраться сил для свершения великих дел."
  },
  {
    title: "Образование",
    text: "Наша компания не стоит на месте и постоянно совершенствует свои знания. Мы проходим как офлайн, так и онлайн-обучения, обмениваемся опытом с коллегами, посещаем различные образовательные мероприятия. Мы с радостью делимся своими знаниями и практическими навыками на различных конференциях и выставках, чтобы помочь другим людям развиваться и достигать своих целей."
  },
  {
    title: "Экология",
    text: "Мы вносим свой вклад в уменьшение экологического следа, чтобы стать частью большого дела. Так, например, собираем батарейки и отвозим на правильную утилизацию, а ещё участвуем в посадке деревьев. Мы поддерживаем любое начинание, если ты разделяешь наши взгляды, вступай в наши ряды!"
  },
  {
    title: "Здоровье",
    text: "Мы заботимся о здоровье наших сотрудников: у нас действует программы ДМС и Диспансеризация, которые с каждым годом мы совершенствуем и улучшаем – все для заботы о своих коллегах."
  },
  {
    title: "Досуг",
    text: "Мы любим не только работать с коллегами, но и проводить совместный досуг. Так, например, устраиваем тематические вечера, отправляемся в походы и на воскресные пикники."
  }
];
const WhyUs_scss_vue_type_style_index_0_src_2fc4b619_scoped_2fc4b619_lang = "";
const _sfc_main$8 = {
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
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Vacancies/WhyUs.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const __nuxt_component_1$1 = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__scopeId", "data-v-2fc4b619"]]);
const _sfc_main$7 = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path d="M7.0001 12.9998L14.5901 12.9998L11.2901 16.2898C11.1018 16.4781 10.996 16.7335 10.996 16.9998C10.996 17.2661 11.1018 17.5215 11.2901 17.7098C11.4784 17.8981 11.7338 18.0039 12.0001 18.0039C12.2664 18.0039 12.5218 17.8981 12.7101 17.7098L17.7101 12.7098C17.8011 12.6147 17.8725 12.5026 17.9201 12.3798C18.0201 12.1364 18.0201 11.8633 17.9201 11.6198C17.8725 11.4971 17.8011 11.3849 17.7101 11.2898L12.7101 6.28982C12.6171 6.19609 12.5065 6.12169 12.3847 6.07092C12.2628 6.02015 12.1321 5.99402 12.0001 5.99402C11.8681 5.99402 11.7374 6.02015 11.6155 6.07092C11.4937 6.12169 11.3831 6.19609 11.2901 6.28982C11.1964 6.38278 11.122 6.49338 11.0712 6.61524C11.0204 6.7371 10.9943 6.8678 10.9943 6.99981C10.9943 7.13183 11.0204 7.26253 11.0712 7.38439C11.122 7.50625 11.1964 7.61685 11.2901 7.70981L14.5901 10.9998L7.0001 10.9998C6.73489 10.9998 6.48053 11.1052 6.293 11.2927C6.10546 11.4802 6.0001 11.7346 6.0001 11.9998C6.0001 12.265 6.10546 12.5194 6.293 12.7069C6.48053 12.8945 6.73489 12.9998 7.0001 12.9998Z"></path></svg>`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Icons/LongArrowRight.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$3]]);
const VacancyCard_scss_vue_type_style_index_0_src_f09eefa3_scoped_f09eefa3_lang = "";
const _sfc_main$6 = {
  __name: "VacancyCard",
  __ssrInlineRender: true,
  props: ["title", "salary", "link"],
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_IconsLongArrowRight = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "vacancy" }, _attrs))} data-v-f09eefa3><h3 data-v-f09eefa3>${ssrInterpolate(props.title)}</h3><p data-v-f09eefa3>${ssrInterpolate(props.salary)}</p><a${ssrRenderAttr("href", props.link)} target="_blank" data-v-f09eefa3>${ssrInterpolate(_ctx.$texts.learnMore)} `);
      _push(ssrRenderComponent(_component_IconsLongArrowRight, null, null, _parent));
      _push(`</a></div>`);
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Vacancies/VacancyCard.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_3$1 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-f09eefa3"]]);
const OpenPositions_scss_vue_type_style_index_0_src_d19a1e1a_scoped_d19a1e1a_lang = "";
const _sfc_main$5 = {
  __name: "OpenPositions",
  __ssrInlineRender: true,
  setup(__props) {
    const activeCityId = ref(null);
    const changeCity = (id) => {
      activeCityId.value = id;
    };
    const activeCity = computed(() => {
      return data.value ? toRaw(data.value).find((obj) => obj.id === activeCityId.value) : null;
    });
    const data = ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ContactsCitySlider = __nuxt_component_0$3;
      const _component_Swiper = Swiper;
      const _component_SwiperSlide = SwiperSlide;
      const _component_VacanciesVacancyCard = __nuxt_component_3$1;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-d19a1e1a><h2 data-v-d19a1e1a>${ssrInterpolate(_ctx.$texts.openVacancies)}</h2>`);
      if (unref(data)) {
        _push(ssrRenderComponent(_component_ContactsCitySlider, {
          "active-city-id": unref(activeCityId),
          cities: unref(data),
          onPickCity: changeCity
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(data) && unref(activeCity)) {
        _push(ssrRenderComponent(_component_Swiper, {
          class: "swiper",
          "slides-per-view": "auto",
          breakpoints: {
            320: {
              spaceBetween: 16
            },
            768: {
              spaceBetween: 24
            },
            1248: {
              spaceBetween: 24
            }
          }
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<!--[-->`);
              ssrRenderList(unref(activeCity).vacancies, (item, i) => {
                _push2(ssrRenderComponent(_component_SwiperSlide, {
                  key: i,
                  class: "slide"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<div class="slide-content" data-v-d19a1e1a${_scopeId2}>`);
                      _push3(ssrRenderComponent(_component_VacanciesVacancyCard, {
                        title: item.title,
                        salary: item.salary,
                        link: item.link
                      }, null, _parent3, _scopeId2));
                      _push3(`</div>`);
                    } else {
                      return [
                        createVNode("div", { class: "slide-content" }, [
                          createVNode(_component_VacanciesVacancyCard, {
                            title: item.title,
                            salary: item.salary,
                            link: item.link
                          }, null, 8, ["title", "salary", "link"])
                        ])
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              });
              _push2(`<!--]-->`);
            } else {
              return [
                (openBlock(true), createBlock(Fragment, null, renderList(unref(activeCity).vacancies, (item, i) => {
                  return openBlock(), createBlock(_component_SwiperSlide, {
                    key: i,
                    class: "slide"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "slide-content" }, [
                        createVNode(_component_VacanciesVacancyCard, {
                          title: item.title,
                          salary: item.salary,
                          link: item.link
                        }, null, 8, ["title", "salary", "link"])
                      ])
                    ]),
                    _: 2
                  }, 1024);
                }), 128))
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Vacancies/OpenPositions.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_2$1 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-d19a1e1a"]]);
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
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender]]);
const CvForm_scss_vue_type_style_index_0_src_efa62990_scoped_efa62990_lang = "";
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
      const _component_IconsCross = __nuxt_component_2;
      const _component_NuxtLink = __nuxt_component_0$4;
      let _temp0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "form-container" }, _attrs))} data-v-efa62990><div class="fields" data-v-efa62990><div class="fields fields_top" data-v-efa62990><div class="input-container" data-v-efa62990><input${ssrRenderAttrs((_temp0 = mergeProps({
        value: unref(formData).phone,
        class: "input",
        placeholder: _ctx.$texts.phoneNumber,
        "data-maska": "+7 ### ###-##-##",
        "data-maska-eager": ""
      }, ssrGetDirectiveProps(_ctx, unref(vMaska))), mergeProps(_temp0, ssrGetDynamicModelProps(_temp0, unref(formData).phone))))} data-v-efa62990><p class="error" data-v-efa62990>${ssrInterpolate(unref(invalidInputMessages).phone)}</p></div><div class="input-container" data-v-efa62990><input${ssrRenderAttr("value", unref(formData).email)} class="input"${ssrRenderAttr("placeholder", _ctx.$texts.email)} data-v-efa62990><p class="error" data-v-efa62990>${ssrInterpolate(unref(invalidInputMessages).email)}</p></div></div><div class="input-container fio" data-v-efa62990><input${ssrRenderAttr("value", unref(formData).full_name)} class="input"${ssrRenderAttr("placeholder", _ctx.$texts.FIO)} data-v-efa62990><p class="error" data-v-efa62990>${ssrInterpolate(unref(invalidInputMessages).full_name)}</p></div></div><div class="bottom" data-v-efa62990><div class="btns" data-v-efa62990><a class="cv-btn" href="/anketa.docx" download="Анкета_Тис_Лоджистик" data-v-efa62990>`);
      _push(ssrRenderComponent(_component_IconsDownLoad, null, null, _parent));
      _push(`${ssrInterpolate(_ctx.$texts.downloadSurvey)}</a><div class="input-container" data-v-efa62990><input id="file-upload" class="input-hidden" type="file" hidden data-v-efa62990><label for="file-upload" class="${ssrRenderClass([{ disabled: unref(fileName) }, "cv-btn label"])}" data-v-efa62990>`);
      _push(ssrRenderComponent(_component_IconsUpLoad, null, null, _parent));
      _push(` ${ssrInterpolate(unref(fileName) || _ctx.$texts.uploadSurvey)}</label>`);
      if (unref(formData).file) {
        _push(`<span class="delete-file" data-v-efa62990>`);
        _push(ssrRenderComponent(_component_IconsCross, null, null, _parent));
        _push(`</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<p class="error survey_error" data-v-efa62990>${ssrInterpolate(unref(invalidInputMessages).file)}</p></div><button class="send-btn" data-v-efa62990>${ssrInterpolate(_ctx.$texts.send)}</button></div><p class="confidentiality" data-v-efa62990> Нажимая кнопку, Вы принимаете условия <br data-v-efa62990>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/eula",
        target: "_blank"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`пользовательского соглашения `);
          } else {
            return [
              createTextVNode("пользовательского соглашения ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(` и `);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/politika-konfidencialnosti",
        target: "_blank"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`политики конфиденциальности`);
          } else {
            return [
              createTextVNode("политики конфиденциальности")
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
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-efa62990"]]);
const Vacancies_scss_vue_type_style_index_0_src_51c5dd81_scoped_51c5dd81_lang = "";
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
      const _component_SharedBreadCrumbs = __nuxt_component_0$5;
      const _component_VacanciesWhyUs = __nuxt_component_1$1;
      const _component_VacanciesOpenPositions = __nuxt_component_2$1;
      const _component_VacanciesCvForm = __nuxt_component_3;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-51c5dd81><section data-v-51c5dd81><div style="${ssrRenderStyle(bgImg)}" class="bg vacancies-bg" data-v-51c5dd81></div><div data-v-51c5dd81>`);
      _push(ssrRenderComponent(_component_SharedBreadCrumbs, null, null, _parent));
      _push(`<h1 data-v-51c5dd81>${ssrInterpolate(unref($texts).vacancies)}</h1><p data-v-51c5dd81> Присоединяйся <span data-v-51c5dd81>к команде профессионалов </span><strong data-v-51c5dd81>ТИС ЛОДЖИСТИК</strong></p></div></section><section data-v-51c5dd81>`);
      _push(ssrRenderComponent(_component_VacanciesWhyUs, null, null, _parent));
      _push(`</section><section data-v-51c5dd81>`);
      _push(ssrRenderComponent(_component_VacanciesOpenPositions, null, null, _parent));
      _push(`</section><section data-v-51c5dd81><div class="banner" data-v-51c5dd81><strong data-v-51c5dd81>${ssrInterpolate(unref($texts).vacanciesBanner1)} <span data-v-51c5dd81>${ssrInterpolate(unref($texts).vacanciesBanner2)}</span></strong></div></section><section data-v-51c5dd81>`);
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
const vacancies = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-51c5dd81"]]);
export {
  vacancies as default
};
//# sourceMappingURL=vacancies-133d7825.js.map
