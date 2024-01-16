import { NuxtModule } from 'nuxt/schema'
declare module 'nuxt/schema' {
  interface NuxtConfig {
    ["image"]?: typeof import("@nuxt/image-edge").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["swiper"]?: typeof import("nuxt-swiper").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["critters"]?: typeof import("@nuxtjs/critters").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["yandexMetrika"]?: typeof import("yandex-metrika-module-nuxt3").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["site"]?: typeof import("/Users/nikitamakovei/repos/tislogistic-frontend/node_modules/nuxt-seo-kit/modules/nuxt-seo-kit/module").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["schemaOrg"]?: typeof import("nuxt-schema-org").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["unhead"]?: typeof import("nuxt-unhead").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["robots"]?: typeof import("nuxt-simple-robots").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["sitemap"]?: typeof import("nuxt-simple-sitemap").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["linkChecker"]?: typeof import("nuxt-link-checker").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["ogImage"]?: typeof import("nuxt-og-image").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["telemetry"]?: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    modules?: (undefined | null | false | NuxtModule | string | [NuxtModule | string, Record<string, any>] | ["@nuxt/image-edge", Exclude<NuxtConfig["image"], boolean>] | ["nuxt-swiper", Exclude<NuxtConfig["swiper"], boolean>] | ["@nuxtjs/critters", Exclude<NuxtConfig["critters"], boolean>] | ["yandex-metrika-module-nuxt3", Exclude<NuxtConfig["yandexMetrika"], boolean>] | ["/Users/nikitamakovei/repos/tislogistic-frontend/node_modules/nuxt-seo-kit/modules/nuxt-seo-kit/module", Exclude<NuxtConfig["site"], boolean>] | ["nuxt-schema-org", Exclude<NuxtConfig["schemaOrg"], boolean>] | ["nuxt-unhead", Exclude<NuxtConfig["unhead"], boolean>] | ["nuxt-simple-robots", Exclude<NuxtConfig["robots"], boolean>] | ["nuxt-simple-sitemap", Exclude<NuxtConfig["sitemap"], boolean>] | ["nuxt-link-checker", Exclude<NuxtConfig["linkChecker"], boolean>] | ["nuxt-og-image", Exclude<NuxtConfig["ogImage"], boolean>] | ["@nuxt/telemetry", Exclude<NuxtConfig["telemetry"], boolean>])[],
  }
  interface RuntimeConfig {
   app: {
      baseURL: string,

      buildAssetsDir: string,

      cdnURL: string,
   },

   indexable: boolean,
  }
  interface PublicRuntimeConfig {
   trailingSlash: boolean,

   titleSeparator: string,

   siteName: string,

   siteUrl: string,

   siteDescription: string,

   language: string,

   webmasterKey: string,

   mapsKey: string,

   appUrl: string,

   apiBase: string,

   newsApiBase: string,

   yandexMetrika: {
      id: string,

      metrikaUrl: string,

      accurateTrackBounce: boolean,

      childIframe: boolean,

      clickmap: boolean,

      defer: boolean,

      useRuntimeConfig: boolean,

      trackHash: boolean,

      trackLinks: boolean,

      type: number,

      webvisor: boolean,

      triggerEvent: boolean,

      consoleLog: boolean,

      partytown: boolean,

      isDev: boolean,
   },

   "nuxt-unhead": {
      seoOptimise: boolean,

      resolveAliases: boolean,
   },
  }
}