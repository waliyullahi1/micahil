// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  css: ["@/assets/tailwind.css"],

  modules: [
    "@nuxtjs/tailwindcss",
    [
      "nuxt-swiper",
      {
        // Swiper options
      },
    ],
  ],
});