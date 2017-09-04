module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    title: 'uikit-nuxt',
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Nuxt.js project'
      }
    ],
    link: [{
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Poppins'
      }
    ]

  },
  // watchers: {
  //   webpack: {
  //     aggregateTimeout: 300,
  //     poll: 1000
  //   },
  //
  // },
  router: {
    middleware: 'i18n'
  },

  css: [
    // { src: '~assets/css/main1.scss', lang: 'scss' },
    // 'uikit/dist/css/uikit.css',
    '~assets/css/main.css',
    // uikit customized
    '~assets/css/site.css',
    '~assets/fonts/relative/stylesheet.css',
    //'bootstrap/dist/css/bootstrap.css',
    //'bootstrap-vue/dist/bootstrap-vue.css'

  ],
  plugins: [{
      src: '~/plugins/uikit.js',
      ssr: false
    },
    {
      src: '~/plugins/moment.js',
      ssr: false
    },
    {
      src: '~/plugins/slideout.js',
      ssr: false
    },
    {
      src: '~/plugins/translation.js',
      // ssr: false
    },
    '~/plugins/lodash-plugin.js'

  ],
  // generate: {
  //   routes: ['/', '/werk', '/fr', '/fr/werk']
  // },

  loading: '~/components/loading.vue',
  /*
   ** Build configuration
   */
  build: {
    vendor: ['axios', 'vue-i18n', 'slideout','lodash']
    /*
     ** Run ESLINT on save
     */
    // extend (config, ctx) {
    //   if (ctx.dev && ctx.isClient) {
    //     config.module.rules.push({
    //       enforce: 'pre',
    //       test: /\.(js|vue)$/,
    //       loader: 'eslint-loader',
    //       exclude: /(node_modules)/
    //     })
    //   }
    // }
  }
}
