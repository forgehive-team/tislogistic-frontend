import { defineAsyncComponent, defineComponent, createVNode } from "vue";
import { c as createError } from "../server.mjs";
import "ofetch";
import "#internal/nitro";
import "hookable";
import "unctx";
/* empty css                     */import "vue-router";
import "h3";
import "ufo";
import "destr";
import "defu";
import "vue/server-renderer";
const OgImageBasic = /* @__PURE__ */ defineAsyncComponent(() => import(
  "./OgImageBasic.island-5dd1597a.js"
  /* webpackChunkName: "components/og-image-basic" */
).then((c) => c.default || c));
const islandComponents = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  OgImageBasic
});
const islandRenderer = /* @__PURE__ */ defineComponent({
  props: {
    context: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const component = islandComponents[props.context.name];
    if (!component) {
      throw createError({
        statusCode: 404,
        statusMessage: `Island component not found: ${JSON.stringify(component)}`
      });
    }
    return () => createVNode(component || "span", props.context.props);
  }
});
export {
  islandRenderer as default
};
//# sourceMappingURL=island-renderer-2624e4e3.js.map
