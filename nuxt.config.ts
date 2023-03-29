// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additinalData: '@import "@/assets/scss/variables.scss"',
        },
      },
    },
  },
  css: ["~/assets/scss/styles.scss"],
  modules: [],
});
