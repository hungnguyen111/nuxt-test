import path from 'path';
import fs from 'fs';

export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  server: {
    port: 80, // default: 3000
    host: '0.0.0.0', // default: localhost
    key: fs.readFileSync(path.resolve(__dirname, "private.key.pem")),
    cert: fs.readFileSync(path.resolve(__dirname, "intermediate.cert.pem"))
  },
  head: {
    title: 'nuxt-test',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      {
        src: 'js/jquery-3.3.1.min.js'
      }, 
      {
        src: 'js/bootstrap.min.js'
      },
      {
        src: 'js/jquery.nice-select.min.js'
      },
      {
        src: 'js/jquery-ui.min.js'
      },
      {
        src: 'js/jquery.slicknav.js'
      },
      {
        src: 'js/mixitup.min.js'
      },
      {
        src: 'js/owl.carousel.min.js'
      },
      {
        src: 'js/main.js'
      }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '@assets/css/bootstrap.min.css',
    "@assets/css/font-awesome.min.css",
    "@assets/css/elegant-icons.css",
    "@assets/css/nice-select.css",
    // "@assets/css/jquery-ui.min.css",
    // "@assets/css/owl.carousel.min.css",
    "@assets/css/slicknav.min.css",
    "@assets/css/style.css"
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
