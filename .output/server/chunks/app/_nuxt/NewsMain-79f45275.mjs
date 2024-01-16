import { _ as __nuxt_component_0$1 } from './BreadCrumbs-7a67b271.mjs';
import { _ as __nuxt_component_0$2 } from './nuxt-link-0d39ff03.mjs';
import { t as transformDate } from './transformDate-3029d144.mjs';
import { useSSRContext, withCtx, createTextVNode, toDisplayString, mergeProps, createVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _export_sfc, f as useRoute, u as useNuxtApp } from '../server.mjs';
import { _ as __nuxt_component_1 } from './ExpandArrow-c1187625.mjs';
import { u as useImage } from './composables-5d51eb10.mjs';

const _sfc_main$1 = {
  props: {
    title: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    },
    date: {
      type: String,
      required: true
    },
    url: {
      type: String,
      required: true
    },
    img: {
      type: String,
      required: true
    }
  },
  computed: {
    processedDate() {
      return transformDate(this.date);
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __nuxt_component_0$2;
  _push(ssrRenderComponent(_component_NuxtLink, mergeProps({
    to: $props.url,
    class: "card"
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="img-container" data-v-223685f9${_scopeId}><img${ssrRenderAttr("src", $props.img)}${ssrRenderAttr("alt", $props.title + _ctx.$texts.companyNameSeo)} data-v-223685f9${_scopeId}></div><h2 data-v-223685f9${_scopeId}>${ssrInterpolate($props.title)}</h2><p data-v-223685f9${_scopeId}>${ssrInterpolate($props.text)}</p><p class="date" data-v-223685f9${_scopeId}>${ssrInterpolate($options.processedDate)}</p>`);
      } else {
        return [
          createVNode("div", { class: "img-container" }, [
            createVNode("img", {
              src: $props.img,
              alt: $props.title + _ctx.$texts.companyNameSeo
            }, null, 8, ["src", "alt"])
          ]),
          createVNode("h2", null, toDisplayString($props.title), 1),
          createVNode("p", null, toDisplayString($props.text), 1),
          createVNode("p", { class: "date" }, toDisplayString($options.processedDate), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/News/NewsMainCard.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-223685f9"]]);
const _sfc_main = {
  props: {
    data: {
      type: Array,
      required: true
    },
    pending: {
      type: Boolean,
      required: true
    }
  },
  setup() {
    const route = useRoute();
    const currentRoute = route.fullPath;
    return {
      currentRoute
    };
  },
  computed: {
    isNews() {
      return this.currentRoute === "/news";
    },
    title() {
      const { $texts } = useNuxtApp();
      return this.isNews ? $texts.news : $texts.projects;
    },
    background() {
      const $img = useImage();
      const imgUrl = $img("images/containers_background.png", {
        format: "webp",
        preload: true,
        quality: "90"
      });
      return {
        backgroundImage: `url('${imgUrl}')`
      };
    }
  },
  methods: {
    scrollToTop() {
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_SharedBreadCrumbs = __nuxt_component_0$1;
  const _component_NuxtLink = __nuxt_component_0$2;
  const _component_NewsMainCard = __nuxt_component_2;
  const _component_IconsExpandArrow = __nuxt_component_1;
  _push(`<section${ssrRenderAttrs(_attrs)} data-v-7077cc63><div style="${ssrRenderStyle($options.background)}" class="bg news-bg" data-v-7077cc63></div>`);
  _push(ssrRenderComponent(_component_SharedBreadCrumbs, { class: "breadcrumbs" }, null, _parent));
  _push(`<div class="links-container" data-v-7077cc63>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/news",
    class: ["link", { "link-current": $options.isNews }]
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate(_ctx.$texts.news)}`);
      } else {
        return [
          createTextVNode(toDisplayString(_ctx.$texts.news), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/projects",
    class: ["link", { "link-current": !$options.isNews }]
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate(_ctx.$texts.projects)}`);
      } else {
        return [
          createTextVNode(toDisplayString(_ctx.$texts.projects), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
  if ($props.pending) {
    _push(`<div data-v-7077cc63></div>`);
  } else {
    _push(`<!--[-->`);
    if ($props.data.length) {
      _push(`<div class="cards-container" data-v-7077cc63><!--[-->`);
      ssrRenderList($props.data, (item, i) => {
        _push(ssrRenderComponent(_component_NewsMainCard, {
          key: i,
          title: item.title,
          text: item.short_description,
          date: item.published_at,
          url: $setup.currentRoute + "/" + item.slug,
          img: item.preview_image
        }, null, _parent));
      });
      _push(`<!--]--></div>`);
    } else {
      _push(`<!---->`);
    }
    _push(`<div class="btn-container" data-v-7077cc63><button class="go-up-btn" data-v-7077cc63>${ssrInterpolate(_ctx.$texts.goUp)} `);
    _push(ssrRenderComponent(_component_IconsExpandArrow, null, null, _parent));
    _push(`</button></div><!--]-->`);
  }
  _push(`</section>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/News/NewsMain.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-7077cc63"]]);

export { __nuxt_component_0 as _ };
//# sourceMappingURL=NewsMain-79f45275.mjs.map
