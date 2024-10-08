import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'


// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  build: {
    transpile: ['vuetify'],
  },
  modules: [
    "@nuxt/image",
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
    //...
  ],
  app: {
    head: {
      title: 'NuxtLearn',
      meta: [
        {name: 'description', content: 'Nuxt Learning Platform'}
      ]
    }
  },
  css: ['vuetify/lib/styles/main.sass', '@mdi/font/css/materialdesignicons.min.css', '@/styles/styles.scss'],
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/styles/all.scss";'
        },
      },
    },
  },
  // @ts-ignore
  image: {
    dir: "assets/images"
  },
})
