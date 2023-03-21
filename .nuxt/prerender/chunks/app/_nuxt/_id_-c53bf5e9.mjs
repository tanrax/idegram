import { ref, unref, useSSRContext } from 'file:///home/andros/workspace/pets/idegram/node_modules/vue/index.mjs';
import { b as useRoute } from '../server.mjs';
import { ssrRenderAttrs, ssrInterpolate } from 'file:///home/andros/workspace/pets/idegram/node_modules/vue/server-renderer/index.mjs';
import 'file:///home/andros/workspace/pets/idegram/node_modules/ofetch/dist/node.mjs';
import 'file:///home/andros/workspace/pets/idegram/node_modules/hookable/dist/index.mjs';
import 'file:///home/andros/workspace/pets/idegram/node_modules/unctx/dist/index.mjs';
import 'file:///home/andros/workspace/pets/idegram/node_modules/@unhead/ssr/dist/index.mjs';
import 'file:///home/andros/workspace/pets/idegram/node_modules/unhead/dist/index.mjs';
import 'file:///home/andros/workspace/pets/idegram/node_modules/@unhead/shared/dist/index.mjs';
import 'file:///home/andros/workspace/pets/idegram/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///home/andros/workspace/pets/idegram/node_modules/h3/dist/index.mjs';
import 'file:///home/andros/workspace/pets/idegram/node_modules/ufo/dist/index.mjs';
import 'file:///home/andros/workspace/pets/idegram/node_modules/defu/dist/defu.mjs';
import '../../nitro/nitro-prerenderer.mjs';
import 'file:///home/andros/workspace/pets/idegram/node_modules/node-fetch-native/dist/polyfill.mjs';
import 'file:///home/andros/workspace/pets/idegram/node_modules/destr/dist/index.mjs';
import 'file:///home/andros/workspace/pets/idegram/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///home/andros/workspace/pets/idegram/node_modules/scule/dist/index.mjs';
import 'file:///home/andros/workspace/pets/idegram/node_modules/ohash/dist/index.mjs';
import 'file:///home/andros/workspace/pets/idegram/node_modules/unstorage/dist/index.mjs';
import 'file:///home/andros/workspace/pets/idegram/node_modules/unstorage/drivers/fs.mjs';
import 'file:///home/andros/workspace/pets/idegram/node_modules/radix3/dist/index.mjs';

const _sfc_main = {
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const myId = ref(route.params.id);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><h1>Esto en el articulo numero: ${ssrInterpolate(unref(myId))}</h1></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/single/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_id_-c53bf5e9.mjs.map
