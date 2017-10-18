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
        name: 'theme-color',
        content : '#fffef5'
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
      //{
      //  rel: 'stylesheet',
      //  href: 'https://fonts.googleapis.com/css?family=Poppins:500'
      //}
    ],
    script: [{
      src: 'https://cdnjs.cloudflare.com/ajax/libs/slideout/1.0.1/slideout.js'
    }]

  },

  // PWA  Progressive Web Apps support (https://www.davidroyer.me/blog/nuxtjs-tips/)

  modules: [
    //'@nuxtjs/pwa'
  ],

  router: {
    middleware: 'i18n'
  },

  css: [
    '~assets/css/main.css',
    // uikit customized
    '~assets/css/site.css',
    '~assets/css/fonts/fontello-6d6d4103/css/fontello.css',
    'swiper/dist/css/swiper.css'


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
      src: '~/plugins/preloader.js',
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
      src: '~/plugins/lazyload.js'
    },
    {
      src: '~/plugins/translation.js',
      // ssr: false
    },
    {
      src: '~/plugins/scrollbarwidth.js',
      ssr: false
    },
    {
      src: '~/plugins/smoothscroll.js',
      ssr: false
    },
    '~/plugins/lodash-plugin.js',
    '~/plugins/maps.js',
    '~/plugins/resizer.js',
    //GLOBAL MIXINS
    '~/mixins/computedresizerglobalmixin.js',
    '~/mixins/setlazyloadimages.js',
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
    vendor: ['axios', 'vue-i18n', 'lodash', 'uikit', 'vue-lazyload']
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
