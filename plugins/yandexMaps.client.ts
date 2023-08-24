import plugin from 'vue-yandex-maps';

const settings = {
    apiKey: 'd4b2e171-fe8a-45ee-933e-7e8d9f1ee2d6',
    lang: 'ru_RU',
};

// const settings = {
//   apiKey: 'твой ключик', // Индивидуальный ключ API
//   // lang: 'ru_RU', // Используемый язык
//   // coordorder: 'latlong', // Порядок задания географических координат
//   // debug: false, // Режим отладки
//   // version: '2.1' // Версия Я.Карт
// }
export default defineNuxtPlugin((nuxtApp) => {
    console.log(plugin, settings);
    nuxtApp.vueApp.use(plugin, settings);
});
