module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    title: 'Template Studio',
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'theme-color',
        content: '#fffef5'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },

      {
        name: 'application-name',
        content: 'Template Studio'
      },

      {
        name: 'msapplication-TileColor',
        content: '#000000'
      },

      {
        name: 'msapplication-TileImage',
        content: '/mstile-144x144.png'
      },

      {
        name: 'msapplication-square70x70logo',
        content: '/mstile-70x70.png'
      },

      {
        name: 'msapplication-square150x150logo',
        content: '/"mstile-150x150.png'
      },


      {
        name: 'msapplicationn-wide310x150logo',
        content: '/mstile-310x150.png'
      },

      {
        name: 'msapplication-square310x310logo',
        content: '/mstile-310x310.png'
      }
    ],
    link: [{
        rel: 'apple-touch-icon-precomposed',
        sizes: '57x57',
        href: '/apple-touch-icon-57x57.png'
      }, {
        rel: 'apple-touch-icon-precomposed',
        sizes: '114x114',
        href: '/apple-touch-icon-114x114.png'
      }, {
        rel: 'apple-touch-icon-precomposed',
        sizes: '72x72',
        href: '/apple-touch-icon-72x72.png'
      },
      {
        rel: 'apple-touch-icon-precomposed',
        sizes: '144x144',
        href: '/apple-touch-icon-144x144.png'
      },
      {
        rel: 'apple-touch-icon-precomposed',
        sizes: '60x60',
        href: '/apple-touch-icon-60x60.png'
      }, {
        rel: 'apple-touch-icon-precomposed',
        sizes: '120x120',
        href: '/apple-touch-icon-120x120.png'
      }, {
        rel: 'apple-touch-icon-precomposed',
        sizes: '76x76',
        href: '/apple-touch-icon-76x76.png'
      },
      {
        rel: 'apple-touch-icon-precomposed',
        sizes: '152x152',
        href: '/apple-touch-icon-152x152.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '196x196',
        href: '/favicon-196x196.png'
      }, {
        rel: 'icon',
        type: 'image/png',
        sizes: '96x96',
        href: '/favicon-96x96.png'
      }, {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon-16x16.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '128x128',
        href: '/favicon-128.png'
      }
    ],
    script: [{
      src: 'https://cdnjs.cloudflare.com/ajax/libs/slideout/1.0.1/slideout.js'
    }]

  },

  // PWA  Progressive Web Apps support (https://www.davidroyer.me/blog/nuxtjs-tips/)

  modules: [
    //'@nuxtjs/pwa',
    '@nuxtjs/sitemap'
    // '@nuxtjs/axios'
  ],

  router: {
    middleware: ['i18n','nonExcistingLang']
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
