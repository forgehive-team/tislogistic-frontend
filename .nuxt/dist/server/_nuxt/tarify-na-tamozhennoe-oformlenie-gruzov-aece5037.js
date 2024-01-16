import { _ as __nuxt_component_0 } from "./BreadCrumbs-7a67b271.js";
import { _ as __nuxt_component_2 } from "./GoUp-9c5eead8.js";
import { _ as _export_sfc, u as useNuxtApp, a as useHead } from "../server.mjs";
import { u as useServerHead } from "./internalLinks-dc4e1b80.js";
import { useSSRContext } from "vue";
import "destr";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import "./nuxt-link-0d39ff03.js";
import "ufo";
import "hookable";
import "ofetch";
import "#internal/nitro";
import "unctx";
/* empty css                     */import "vue-router";
import "h3";
import "defu";
const Tarify_scss_vue_type_style_index_0_src_ee7f966c_scoped_ee7f966c_lang = "";
const _sfc_main = {
  __name: "tarify-na-tamozhennoe-oformlenie-gruzov",
  __ssrInlineRender: true,
  setup(__props) {
    const { $texts } = useNuxtApp();
    useHead({
      title: "Тарифы на таможенное оформление грузов"
    });
    useServerHead({
      meta: [
        { name: "description", content: "Тарифы на таможенное оформление грузов. «Тис Лоджистик» — транспортно-экспедиторская компания. Мультимодальные контейнерные перевозки, авиа-, авто-, ЖД доставка грузов по России из Китая и стран Азии под ключ. Таможенное оформление, сертификационные и профессиональные складские услуги." },
        { name: "keywords", content: $texts.seoKeywordsBase }
      ]
    });
    const tables = [
      {
        title: "Оказание консультационных услуг",
        rows: [
          {
            name: "Консультация участникам ВЭД (определение кода ТНВЭД, предварительный расчет платежей, необходимость сертификации, лицензирования и т.п.) за каждый код",
            price: "Бесплатно"
          }
        ]
      },
      {
        title: "Оформление документов:",
        rows: [
          {
            name: "Оформление таможенной декларации (ДТ)(1 контейнер/1товар)",
            price: "от 15 000"
          },
          {
            name: "— за каждый последующий контейнер в партии",
            price: ""
          },
          {
            name: "— от 2 до 5 ктк в партии",
            price: "3 000"
          },
          {
            name: "— от 5 до 10 ктк в партии",
            price: "2 000"
          },
          {
            name: "— от 10 и выше",
            price: "1 000"
          },
          {
            name: "— за каждый дополнительный лист",
            price: "3 000"
          },
          {
            name: "Оформление необходимых сертификатов (без стоимости работ сертификационных органов)",
            price: "3 000"
          }
        ]
      },
      {
        title: "Организационные услуги:",
        rows: [
          {
            name: "Организация таможенного досмотра",
            price: "от 6 000"
          },
          {
            name: "Организация таможенного осмотра (в т.ч. предварительного)",
            price: "от 6 000"
          },
          {
            name: "Организация отбора проб и образцов",
            price: "от 6 000"
          },
          {
            name: "Организация прохождения КФК, ветеринарного контроля",
            price: "от 5 000"
          }
        ]
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SharedBreadCrumbs = __nuxt_component_0;
      const _component_SharedGoUp = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-ee7f966c><section data-v-ee7f966c><div class="bg white-theme-only gradient-bg" data-v-ee7f966c></div><div data-v-ee7f966c>`);
      _push(ssrRenderComponent(_component_SharedBreadCrumbs, { class: "breadcrumbs" }, null, _parent));
      _push(`<h1 data-v-ee7f966c>Тарифы на таможенное оформление грузов</h1><div class="content" data-v-ee7f966c><strong data-v-ee7f966c> Условные тарифы для расчета договорной цены услуги Тис Лоджистик по таможенному оформлению грузов </strong><!--[-->`);
      ssrRenderList(tables, (item) => {
        _push(`<!--[--><h2 data-v-ee7f966c>${ssrInterpolate(item.title)}</h2><table data-v-ee7f966c><thead data-v-ee7f966c><tr data-v-ee7f966c><th data-v-ee7f966c>Наименование</th><th data-v-ee7f966c>Стоимость, руб.</th></tr></thead><tbody data-v-ee7f966c><!--[-->`);
        ssrRenderList(item.rows, (row) => {
          _push(`<tr data-v-ee7f966c><td data-v-ee7f966c>${ssrInterpolate(row.name)}</td><td data-v-ee7f966c>${ssrInterpolate(row.price)}</td></tr>`);
        });
        _push(`<!--]--></tbody></table><!--]-->`);
      });
      _push(`<!--]--><br data-v-ee7f966c><h2 data-v-ee7f966c>Примечание:</h2><ul data-v-ee7f966c><li data-v-ee7f966c>Цены указаны с учетом НДС;</li><li data-v-ee7f966c> Сложные режимы оформляются по договорной стоимости; </li><li data-v-ee7f966c> Стоимость услуг не включает в себя сборы государственных органов и стоимость услуг сторонних организаций; </li><li data-v-ee7f966c> Сроки и стоимость услуг по сертификации зависят от специфики самого товара, наличия других сертификатов и особенностей проводимых испытаний по сертификации. Окончательная стоимость сертификационных услуг определяется в каждом случае отдельно, после изучения всех аспектов предстоящего процесса сертификации; </li><li data-v-ee7f966c> Постоянным клиентам предоставляются скидки, размер которых оговаривается отдельным дополнением к договору. </li></ul></div></div>`);
      _push(ssrRenderComponent(_component_SharedGoUp, null, null, _parent));
      _push(`</section></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tarify-na-tamozhennoe-oformlenie-gruzov.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const tarifyNaTamozhennoeOformlenieGruzov = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-ee7f966c"]]);
export {
  tarifyNaTamozhennoeOformlenieGruzov as default
};
//# sourceMappingURL=tarify-na-tamozhennoe-oformlenie-gruzov-aece5037.js.map
