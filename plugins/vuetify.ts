// import this after install `@mdi/font` package
import '@mdi/font/css/materialdesignicons.css'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import colors from 'vuetify/util/colors'
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg'

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    // ... your configuration
    theme: {
        defaultTheme: 'light',
        themes: {
          light: {
            dark: false,
            colors: {
              primary: '#FFFFFF', // Navbar & Sections
              secondary: '#1c1d1f', // Footer and Purple buttons
              accent: '#a435f0',
              "faded-orange": '#FFD2A6',
              "faded-grey": '#B7B7B7',
              "grey": '#3e4143',
              "grey-600": "#101112"
            }
          },
        },
      },
      icons: {
        defaultSet: 'mdi',
        aliases,
        sets: {
          mdi
        }
      },
      ssr: true,
      components,
      directives,
  })
  app.vueApp.use(vuetify)
})

// --color-gray-600: #101112;
//     --color-gray-550: #1c1d1f;
//     --color-gray-500: #2d2f31;
//     --color-gray-400: #3e4143;
//     --color-gray-350: #54585b;
//     --color-gray-300: #6a6f73;
//     --color-gray-250: #9da3a7;
//     --color-gray-200: #d1d7dc;
//     --color-gray-150: #e4e8eb;
//     --color-gray-100: #f7f9fa;
//     --color-red-500: #612012;
//     --color-red-450: #8a2610;
//     --color-red-400: #b32d0f;
//     --color-red-350: #da3c18;
//     --color-red-300: #f4522d;
//     --color-red-250: #ef8e70;
//     --color-red-200: #fcbca0;
//     --color-red-150: #fbd5c4;
//     --color-red-100: #fbece9;
//     --color-blue-500: #180a3d;
//     --color-blue-450: #281160;
//     --color-blue-400: #371783;
//     --color-blue-350: #431ca3;
//     --color-blue-300: #5022c3;
//     --color-blue-250: #8072e6;
//     --color-blue-200: #c0c4fc;
//     --color-blue-150: #d8e0fb;
//     --color-blue-100: #eeeffc;
//     --color-indigo-500: var(--color-blue-500);
//     --color-indigo-400: var(--color-blue-400);
//     --color-indigo-300: var(--color-blue-300);
//     --color-indigo-200: var(--color-blue-200);
//     --color-indigo-100: var(--color-blue-100);
//     --color-orange-500: #4d3105;
//     --color-orange-450: #804d09;
//     --color-orange-400: #b4690e;
//     --color-orange-350: #df890c;
//     --color-orange-300: #f69c08;
//     --color-orange-250: #ebb152;
//     --color-orange-200: #f3ca8c;
//     --color-orange-150: #f7dfba;
//     --color-orange-100: #fcf5e8;
//     --color-yellow-500: #3d3c0a;
//     --color-yellow-450: #6b6913;
//     --color-yellow-400: #98961b;
//     --color-yellow-350: #d2cf1e;
//     --color-yellow-300: #e9e729;
//     --color-yellow-250: #eeec5d;
//     --color-yellow-200: #eceb98;
//     --color-yellow-150: #f3f2b8;
//     --color-yellow-100: #f9f9d7;
//     --color-green-500: #113731;
//     --color-green-450: #174b43;
//     --color-green-400: #1e6055;
//     --color-green-350: #1b8170;
//     --color-green-300: #19a38c;
//     --color-green-250: #6cb1a5;
//     --color-green-200: #acd2cc;
//     --color-green-150: #cfe4e1;
//     --color-green-100: #f2f7f6;
//     --color-purple-500: #350c50;
//     --color-purple-450: #541879;
//     --color-purple-400: #7325a3;
//     --color-purple-350: #8b2dc9;
//     --color-purple-300: #a435f0;
//     --color-purple-250: #c377f6;
//     --color-purple-200: #e1b8fc;
//     --color-purple-150: #ebd3fc;
//     --color-purple-100: #f6eefc;
//     --color-white: #fff;