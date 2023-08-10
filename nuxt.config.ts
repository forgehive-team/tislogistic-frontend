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
        '/news': { sitemap: { changefreq: 'daily', priority: 0.7 } },
        '/projects': { sitemap: { changefreq: 'daily', priority: 0.7 } },
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
        '/services/arenda-konteynerov': {
            sitemap: { changefreq: 'daily', priority: 0.7 },
        },
        '/services/tamozhennoe-oformlenie': {
            sitemap: { changefreq: 'daily', priority: 0.7 },
        },
        '/about': {
            sitemap: { changefreq: 'daily', priority: 0.8 },
        },
        '/eula': {
            sitemap: { changefreq: 'daily', priority: 0.2 },
        },
        '/politika-konfidencialnosti': {
            sitemap: { changefreq: 'daily', priority: 0.2 },
        },
        '/inkoterms-2020': {
            sitemap: { changefreq: 'daily', priority: 0.5 },
        },
        '/tarify-na-tamozhennoe-oformlenie-gruzov': {
            sitemap: { changefreq: 'daily', priority: 0.5 },
        },
        '/traffic': {
            sitemap: { changefreq: 'daily', priority: 0.3 },
        },
        '/sitemap': {
            sitemap: { changefreq: 'daily', priority: 0.5 },
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
    swiper: {
        prefix: 'Swiper',
        styleLang: 'scss',
        modules: ['navigation', 'grid', 'effect-fade'],
    },

    yandexMetrika: {
        id: '88896604',
        clickmap: true,
        trackLinks: true,
        accurateTrackBounce: true,
        webvisor: true,
    },
    app: {
        pageTransition: { name: 'page', mode: 'out-in' },
        head: {
            script: [
                {
                    src: '//code-ya.jivosite.com/widget/e0QPdWruZj',
                    async: true,
                    body: true,
                },
            ],
        },
    },
    extends: ['nuxt-seo-kit'],
    robots: {
        allow: '/',
    },
    nitro: {
        compressPublicAssets: true,
        externals: {
            inline: ['uuid'],
        },
    },
    runtimeConfig: {
        public: {
            siteName: 'Тис Лоджистик',
            language: 'ru',
            webmasterKey: '7dee1d568d1d1192',
            siteUrl:
                process.env.NUXT_PUBLIC_SITE_URL || 'https://tislogistic.ru/',
            appUrl: 'https://app.tislogistic.ru',
            apiBase:
                process.env.NUXT_PUBLIC_API_BASE ||
                'https://dashboard.tislogistic.ru',
            newsApiBase:
                process.env.NUXT_PUBLIC_NEWS_API_BASE ||
                'https://dashboard.tislogistic.ru/api/',
        },
    },
});
