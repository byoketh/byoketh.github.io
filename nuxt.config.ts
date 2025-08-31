// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/content'],

  content: {
  },

  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1'
    },
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' }
  },

  css: [
    '@fortawesome/fontawesome-svg-core/styles.css',
  ],
  devtools: { enabled: true },

  vite: {
    vue: { customElement: false },
    vueJsx: { mergeProps: true }
  },

  vue: {
    propsDestructure: true
  },

  compatibilityDate: '2025-04-12'
})