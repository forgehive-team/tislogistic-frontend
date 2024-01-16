import { Swiper, SwiperSlide } from 'swiper/vue';
import { mergeProps, withCtx, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';

const _sfc_main = {
  __name: "CitySlider",
  __ssrInlineRender: true,
  props: ["activeCityId", "cities"],
  emits: ["pickCity"],
  setup(__props, { emit }) {
    const props = __props;
    const pickCity = (id) => {
      emit("pickCity", id);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Swiper = Swiper;
      const _component_SwiperSlide = SwiperSlide;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "city-slider" }, _attrs))} data-v-cf09861b>`);
      _push(ssrRenderComponent(_component_Swiper, {
        class: "swiper",
        "slides-per-view": "auto",
        breakpoints: {
          320: {
            spaceBetween: 8
          },
          768: {
            spaceBetween: 8
          },
          1248: {
            spaceBetween: 16
          }
        }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(props.cities, (city) => {
              _push2(ssrRenderComponent(_component_SwiperSlide, {
                key: city.id,
                class: "slide"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="slide-content" data-v-cf09861b${_scopeId2}><button class="${ssrRenderClass({
                      "btn-active": city.id === props.activeCityId
                    })}" data-v-cf09861b${_scopeId2}>${ssrInterpolate(city.name)}</button></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "slide-content" }, [
                        createVNode("button", {
                          class: {
                            "btn-active": city.id === props.activeCityId
                          },
                          onClick: () => pickCity(city.id)
                        }, toDisplayString(city.name), 11, ["onClick"])
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
              (openBlock(true), createBlock(Fragment, null, renderList(props.cities, (city) => {
                return openBlock(), createBlock(_component_SwiperSlide, {
                  key: city.id,
                  class: "slide"
                }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "slide-content" }, [
                      createVNode("button", {
                        class: {
                          "btn-active": city.id === props.activeCityId
                        },
                        onClick: () => pickCity(city.id)
                      }, toDisplayString(city.name), 11, ["onClick"])
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
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Contacts/CitySlider.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-cf09861b"]]);

export { __nuxt_component_0 as _ };
//# sourceMappingURL=CitySlider-5181d92e.mjs.map
