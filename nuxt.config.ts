// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    server: {
        host: '0.0.0.0',
        port: 3000,
    },
    routeRules: {
        '/**': { index: true },
        '/': { sitemap: { changefreq: 'daily', priority: 1.0 } },
        '/services': { sitemap: { changefreq: 'daily', priority: 0.9 } },
        '/services/project-logistics': {
            sitemap: { changefreq: 'daily', priority: 0.9 },
        },
        '/services/sea-freight': {
            sitemap: { changefreq: 'daily', priority: 0.9 },
        },
        '/services/railway-freight': {
            sitemap: { changefreq: 'daily', priority: 0.9 },
        },
        '/services/automobile-transportation': {
            sitemap: { changefreq: 'daily', priority: 0.9 },
        },
        '/services/air-freight': {
            sitemap: { changefreq: 'daily', priority: 0.9 },
        },
        '/services/rental-containers': {
            sitemap: { changefreq: 'daily', priority: 0.9 },
        },
        '/services/customs-clearance': {
            sitemap: { changefreq: 'daily', priority: 0.9 },
        },
        '/services/multimodal-transportation': {
            sitemap: { changefreq: 'daily', priority: 0.9 },
        },
        '/services/foreign-economic-activity': {
            sitemap: { changefreq: 'daily', priority: 0.9 },
        },
        '/about': {
            sitemap: { changefreq: 'daily', priority: 0.8 },
        },
        '/contacts': {
            sitemap: { changefreq: 'daily', priority: 0.7 },
        },
        '/news': {
            sitemap: { changefreq: 'daily', priority: 0.7 },
        },
        '/projects': {
            sitemap: { changefreq: 'daily', priority: 0.7 },
        },
        '/vacancies': {
            sitemap: { changefreq: 'daily', priority: 0.6 },
        },
        '/containers': {
            sitemap: { changefreq: 'daily', priority: 0.6 },
        },
        '/custom-clearance-tariffs': {
            sitemap: { changefreq: 'daily', priority: 0.5 },
        },
        '/traffic': {
            sitemap: { changefreq: 'daily', priority: 0.2 },
        },
        '/sitemap': {
            sitemap: { changefreq: 'daily', priority: 0.2 },
        },
        '/eula': {
            sitemap: { changefreq: 'daily', priority: 0.2 },
        },
        '/privacy-policy': {
            sitemap: { changefreq: 'daily', priority: 0.2 },
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
    modules: ['@nuxt/image-edge', 'nuxt-swiper', '@nuxtjs/critters'],
    swiper: {
        prefix: 'Swiper',
        styleLang: 'scss',
        modules: ['navigation', 'grid', 'effect-fade'],
    },

    app: {
        pageTransition: { name: 'page', mode: 'out-in' },
    },
    extends: ['nuxt-seo-kit'],
    robots: {
        disallow: '/inkoterms-2020',
    },
    nitro: {
        compressPublicAssets: true,
        externals: {
            inline: ['uuid'],
        },
    },
    runtimeConfig: {
        public: {
            siteName: 'TIS Logistic',
            language: 'en',
            mapsKey: 'd4b2e171-fe8a-45ee-933e-7e8d9f1ee2d6',
            siteUrl:
                process.env.NUXT_PUBLIC_SITE_URL || 'https://tislogistic.com/',
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
