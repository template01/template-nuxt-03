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
    ],
    script:[
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/slideout/1.0.1/slideout.js'}
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
     'swiper/dist/css/swiper.css'
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
      src: '~/plugins/vueawesomeswiper-plugin.js',
      ssr: false
    },
    {
      src: '~/plugins/paper.js',
      ssr: false
    },

    {
      src: '~/plugins/translation.js',
      // ssr: false
    },
    {
      src: '~/plugins/scrollbarwidth.js',
      ssr: false
    },
    '~/plugins/lodash-plugin.js',
    '~/plugins/resizer.js',
    //GLOBAL MIXINS
    '~/mixins/computedresizerglobalmixin.js',
    {
      src: '~/mixins/computedscrollbarwidth.js',
      ssr: false
    },
  ],
  // generate: {
  //   routes: ['/', '/werk', '/fr', '/fr/werk']
  // },

  loading: '~/components/loading.vue',
  /*
   ** Build configuration
   */
  build: {
    vendor: ['axios', 'vue-i18n','lodash', 'uikit']
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
