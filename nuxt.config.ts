// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    server: {
        host: '0.0.0.0',
        port: 3000,
    },
    sitemap: {
        path: '/sitemap.xml',
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
        },
    },
});
