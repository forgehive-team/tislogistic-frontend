import { _ as __nuxt_component_0 } from "./BreadCrumbs-7a67b271.js";
import { _ as __nuxt_component_1 } from "./ServicesLinks-af51bc72.js";
import { _ as __nuxt_component_2 } from "./GoUp-9c5eead8.js";
import { _ as _export_sfc, u as useNuxtApp, a as useHead } from "../server.mjs";
import { u as useServerHead } from "./internalLinks-dc4e1b80.js";
import { useSSRContext } from "vue";
import "destr";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import "./nuxt-link-0d39ff03.js";
import "ufo";
import "hookable";
import "./servicesList-d8a4a1b3.js";
import "ofetch";
import "#internal/nitro";
import "unctx";
/* empty css                     */import "vue-router";
import "h3";
import "defu";
const TamozhennoeOformlenie_scss_vue_type_style_index_0_src_09780d33_scoped_09780d33_lang = "";
const _sfc_main = {
  __name: "tamozhennoe-oformlenie",
  __ssrInlineRender: true,
  setup(__props) {
    const { $texts } = useNuxtApp();
    useHead({
      title: "Таможенное оформление"
    });
    useServerHead({
      meta: [
        { name: "description", content: "Поможем разобраться в нюансах законодательства и специфике ведения внешней экономической деятельности. Мы можем стать Вашим отделом закупа и логистики на аутсорсинге, а также решать все вопросы по организации международных грузовых перевозок." },
        { name: "keywords", content: $texts.seoKeywordsBase + ' таможенное оформление грузов, таможенное оформление москва, стоимость таможенного оформления, расчет таможенной пошлины, услуги таможенного брокера"' }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SharedBreadCrumbs = __nuxt_component_0;
      const _component_SharedServicesLinks = __nuxt_component_1;
      const _component_SharedGoUp = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-09780d33><section data-v-09780d33><div class="bg white-theme-only gradient-bg" data-v-09780d33></div><div data-v-09780d33>`);
      _push(ssrRenderComponent(_component_SharedBreadCrumbs, { class: "breadcrumbs" }, null, _parent));
      _push(`<div class="top" data-v-09780d33><h1 data-v-09780d33>Таможенное оформление</h1><p data-v-09780d33> Разъясняем нюансы законодательства и ведения внешнеэкономической деятельности. При необходимости заменяем для бизнеса отдел логистики и закупок — берем эти функциональные обязанности на аутсорсинг. Решаем любые вопросы и проблемы, связанные с организацией и выполнением международных грузовых перевозок. </p></div><p class="text" data-v-09780d33> В лице нашей компании Вы получаете команду опытных специалистов. В арсенале сотрудников — годы работы с таможенными и транспортными, с сертификационными и иными разрешительными органами. Выступаем в качестве лицензионного представителя (брокера) во многих транспортных узлах. В частности, это порты Санкт-Петербург, Владивосток и Восточный, сухопутные пограничные переходы между РФ и КНР. </p><h2 data-v-09780d33>Какие услуги мы оказываем?</h2><ul data-v-09780d33><li data-v-09780d33> Консультации по применению профильного законодательства и расчету пошлин. </li><li data-v-09780d33> Помощь в проведении временного вывоза или ввоза грузов. </li><li data-v-09780d33>Составление внешнеторговых контрактов.</li><li data-v-09780d33>Декларирование товаров.</li><li data-v-09780d33>Регистрация паспортов сделок.</li><li data-v-09780d33>Подготовка и подача необходимого пакета документов.</li><li data-v-09780d33> Сопровождение или представительство для скорейшего и правильного проведения процедуры таможенного оформления. </li><li data-v-09780d33> Выполнение функций контрактодержателя. Берем на себя все мероприятия, которые требуются при заключении внешнеэкономической сделки. Подписание договора с иностранным контрагентом и импорт товаров осуществляется от нашего имени, но по поручению клиента. Мы самостоятельно покупаем продукцию за рубежом, а потом передаем ее Вам уже на российской территории. При этом собираем все требуемые документы, а также оплачиваем за свой счет таможенное оформление, НДС и импортную (ввозную) пошлину. Вы избавляетесь от необходимости даже минимально взаимодействовать с государственными органами. Вам не придется регистрироваться в качестве участника ВЭД, заключать валютную сделку и переводить деньги за товар иностранному продавцу. </li></ul><p data-v-09780d33> Вы всегда можете уточнить условия и порядок таможенного оформления в компании «Тис Лоджистик». Для этого свяжитесь с нашими менеджерами — используйте любой удобный способ: </p><ul data-v-09780d33><li data-v-09780d33>по телефону 8 800 234-80-70</li><li data-v-09780d33>или электронной почте info@tislogistic.ru</li></ul><div class="bottom" data-v-09780d33>`);
      _push(ssrRenderComponent(_component_SharedServicesLinks, null, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_SharedGoUp, null, null, _parent));
      _push(`</div></section></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/services/tamozhennoe-oformlenie.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const tamozhennoeOformlenie = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-09780d33"]]);
export {
  tamozhennoeOformlenie as default
};
//# sourceMappingURL=tamozhennoe-oformlenie-fc1be6fe.js.map
