// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    server: {
        host: '0.0.0.0',
        port: 3000,
    },
    routeRules: {
        '/': { sitemap: { changefreq: 'daily', priority: 1.0 } },
        '/services': { sitemap: { changefreq: 'daily', priority: 0.9 } },
        '/containers': { sitemap: { changefreq: 'daily', priority: 0.8 } },
    },
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@import "/assets/scss/variables.scss";',
                },
            },
        },
    },
    css: ['~/assets/scss/styles.scss'],
    modules: ['@nuxt/image-edge', 'nuxt-swiper'],
    extends: ['nuxt-seo-kit'],
    runtimeConfig: {
        public: {
            siteName: 'TIS',
            language: 'ru',
            siteUrl:
                process.env.NUXT_PUBLIC_SITE_URL ||
                'http://app.tislogistic.ru/',
        },
    },
});
