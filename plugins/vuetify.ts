// import this after install `@mdi/font` package
import '@mdi/font/css/materialdesignicons.css'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
// import {aliases, mdi} from "vuetify/lib/iconsets/mdi"

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    // ... your configuration
    theme: {
        defaultTheme: 'light',
        themes: {
          light: {
            dark: false,
            colors: {
              primary: '#F5F0EB', // Navbar & Sections
              secondary: '#332269', // Footer and Purple buttons
              "faded-orange": '#FFD2A6',
              "faded-grey": '#B7B7B7',
              "grey": '#989AA1',
            }
          },
        },
      },
    //   icons: {
    //     defaultSet: 'mdi',
    //     aliases,
    //     sets: {
    //       mdi
    //     }
    //   },
      ssr: true,
      components,
      directives,
  })
  app.vueApp.use(vuetify)
})