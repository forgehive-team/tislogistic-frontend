import { VueReCaptcha } from 'vue-recaptcha-v3';

export default defineNuxtPlugin((nuxtApp) => {
    const { recaptchaSiteKey } = useRuntimeConfig();
    nuxtApp.vueApp.use(VueReCaptcha, {
        siteKey: recaptchaSiteKey,
        loaderOptions: {
            autoHideBadge: true,
        },
    });
});
