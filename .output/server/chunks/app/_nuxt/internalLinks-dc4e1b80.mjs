import { s as serverUseHead } from '../server.mjs';
import { withoutTrailingSlash, withBase } from 'ufo';

function useServerHead(input, options = {}) {
  return serverUseHead(input, { ...options, mode: "server" });
}
const titleCase = (s) => {
  s = s.replaceAll("-", " ");
  return s.replace(/\w\S*/g, (w) => w.charAt(0).toUpperCase() + w.substr(1).toLowerCase());
};
const siteUrl = "https://tislogistic.ru/";
function resolveTrailingSlash(path) {
  return withoutTrailingSlash(path);
}
function resolveAbsoluteInternalLink(path) {
  return withBase(resolveTrailingSlash(path), siteUrl);
}
function createInternalLinkResolver() {
  return (path) => {
    return withBase(withoutTrailingSlash(path), siteUrl);
  };
}

export { resolveTrailingSlash as a, createInternalLinkResolver as c, resolveAbsoluteInternalLink as r, titleCase as t, useServerHead as u };
//# sourceMappingURL=internalLinks-dc4e1b80.mjs.map
