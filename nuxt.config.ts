// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    server: {
        host: '0.0.0.0',
        port: 3000,
    },
    routeRules: {
        '/**': { index: true },
        '/': { sitemap: { changefreq: 'daily', priority: 1.0 } },
        '/services': { sitemap: { changefreq: 'daily', priority: 0.7 } },
        '/containers': { sitemap: { changefreq: 'daily', priority: 0.5 } },
        '/services/project-logistics': {
            sitemap: { changefreq: 'daily', priority: 0.7 },
        },
        '/services/morskie-gruzoperevozki': {
            sitemap: { changefreq: 'daily', priority: 0.7 },
        },
        '/services/zheleznodorozhnye-perevozki': {
            sitemap: { changefreq: 'daily', priority: 0.7 },
        },
        '/services/avtomobilnye-perevozki': {
            sitemap: { changefreq: 'daily', priority: 0.7 },
        },
        '/services/aviaperevozki': {
            sitemap: { changefreq: 'daily', priority: 0.7 },
        },
        '/arenda-konteynerov': {
            sitemap: { changefreq: 'daily', priority: 0.7 },
        },
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
    modules: [
        '@nuxt/image-edge',
        'nuxt-swiper',
        '@nuxtjs/critters',
        'yandex-metrika-module-nuxt3',
    ],
    yandexMetrika: {
        id: '88896604',
        clickmap: true,
        trackLinks: true,
        accurateTrackBounce: true,
        webvisor: true,
    },
    app: {
        head: {
            script: [
                {
                    src: '//code-ya.jivosite.com/widget/e0QPdWruZj',
                    async: true,
                },
            ],
        },
    },
    extends: ['nuxt-seo-kit'],
    robots: {
        allow: '/',
    },
    runtimeConfig: {
        public: {
            siteName: 'Тис Лоджистик',
            language: 'ru',
            webmasterKey: '7dee1d568d1d1192',
            siteUrl:
                process.env.NUXT_PUBLIC_SITE_URL || 'https://tislogistic.ru/',
            apiBase:
                process.env.NUXT_PUBLIC_API_BASE ||
                'https://app.tislogistic.ru',
        },
    },
});
