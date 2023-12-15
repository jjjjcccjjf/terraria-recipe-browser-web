// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      htmlAttrs: {
        "data-theme": "forest",
      },
    },
  },
  css: ["~/assets/css/main.css"],
  // postcss: {
  //   plugins: {
  //     tailwindcss: {},
  //     autoprefixer: {},
  //   },
  // },
  modules: ["@nuxtjs/tailwindcss"],
});
