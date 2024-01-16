import { u as useNuxtApp } from "../server.mjs";
import "vue";
import "destr";
const useImage = () => {
  return useNuxtApp().$img;
};
export {
  useImage as u
};
//# sourceMappingURL=composables-5d51eb10.js.map
