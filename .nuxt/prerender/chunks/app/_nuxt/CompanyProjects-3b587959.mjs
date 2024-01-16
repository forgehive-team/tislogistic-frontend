import { _ as __nuxt_component_0 } from './LinkUnderline-05508d8a.mjs';
import { _ as __nuxt_component_0$1 } from './ProjectsItem-93537194.mjs';
import { ref, mergeProps, withCtx, createTextVNode, toDisplayString, unref, useSSRContext } from 'file:///Users/nikitamakovei/repos/tislogistic-frontend/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderClass, ssrRenderList } from 'file:///Users/nikitamakovei/repos/tislogistic-frontend/node_modules/vue/server-renderer/index.mjs';
import { t as transformDate } from './transformDate-3029d144.mjs';
import { _ as _export_sfc } from '../server.mjs';

const _sfc_main = {
  __name: "CompanyProjects",
  __ssrInlineRender: true,
  props: ["inServices"],
  setup(__props) {
    const props = __props;
    const data = ref([]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_HomeLinkUnderline = __nuxt_component_0;
      const _component_HomeProjectsItem = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "projects" }, _attrs))} data-v-088b4a75><h2 class="projects__title" data-v-088b4a75>${ssrInterpolate(_ctx.$texts.companyNews)}</h2>`);
      _push(ssrRenderComponent(_component_HomeLinkUnderline, {
        class: "projects__link",
        to: "/news"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$texts.allNews)}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$texts.allNews), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      if (unref(data).length) {
        _push(`<div class="${ssrRenderClass([{ projects__container_services: props.inServices }, "projects__container"])}" data-v-088b4a75><!--[-->`);
        ssrRenderList(unref(data), (item, i) => {
          _push(ssrRenderComponent(_component_HomeProjectsItem, {
            key: i,
            title: item.title,
            text: item.short_description,
            date: unref(transformDate)(item.published_at),
            link: item.slug,
            path: "/news/"
          }, null, _parent));
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Home/CompanyProjects.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-088b4a75"]]);

export { __nuxt_component_5 as _ };
//# sourceMappingURL=CompanyProjects-3b587959.mjs.map
