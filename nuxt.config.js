import { sortRoutes } from '@nuxt/utils';

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'E.R. Eellsworth',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'E.R. Ellsworth' },
      { hid: 'og:description', name: 'og:description', content: 'E.R. Ellsworth' },
      { hid: 'og:site_name', name: 'og:site_name', content: 'E.R. Ellsworth' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'alternate', type: 'application/rss+xml', title: 'RSS feed for erellsworth.com', href: 'https://erellsworth.com/api/feed/rss' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/styles/main.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/localstore.client.ts'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/buefy
    ['nuxt-buefy', { css: false }],
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  /*
  ** Server Middleware
  */
  serverMiddleware: {
    '/api': '~/api'
  },

  router: {
    extendRoutes(routes, resolve) {
      routes.push({
        path: '/blog/:page(\\d+)?',
        component: resolve(__dirname, 'pages/index.vue')
      });

      routes.push({
        path: '/blog/:slug(\\D+)',
        redirect: to => {
          return { path: `/tag/${to.params.slug}` };
        }
      });

      routes.push({
        path: '/tag/:tag/:page?',
        component: resolve(__dirname, 'pages/tag/_tag.vue')
      });


      sortRoutes(routes);
    }
  }
}
