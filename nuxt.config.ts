// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
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
            siteDescription: 'TIS logistics',
            language: 'ru',
        },
    },
});
