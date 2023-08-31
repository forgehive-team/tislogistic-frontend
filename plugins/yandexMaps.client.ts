import plugin from 'vue-yandex-maps';

export default defineNuxtPlugin((nuxtApp) => {
    const { mapsKey } = useRuntimeConfig();
    const settings = {
        apiKey: mapsKey,
        lang: 'ru_RU',
    };
    nuxtApp.vueApp.use(plugin, settings);
});
