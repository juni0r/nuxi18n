import numberFormats from "./locales/numberFormats";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ["@nuxt/content", "@nuxtjs/i18n"],
  content: {
    documentDriven: true,
  },
  i18n: {
    vueI18n: {
      fallbackLocale: "de",
      numberFormats,
    },
    locales: [{ code: "de", iso: "de-DE", file: "de.js" }],
    defaultLocale: "de",
    langDir: "~/locales/",
  },
});
