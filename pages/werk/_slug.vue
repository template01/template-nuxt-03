<template>
<defaultpage class="beige-background" id="">
  <div v-if="content.acf.single_background_image" class="werkSplash uk-visible@m" :style="{'height':setWerkSplashHeight}">
    <div class="werkSplashInner">
      <div class="werkSplashNavigation uk-padding" :style="{'top':setWerkSplashNavigation}">
        <div class="">
          <a class="" href="#werkContent" uk-scroll><img class="slide-item-down-small uk-align-center" width="40px" src="/arrowDownCircle.svg" /></a>
        </div>
      </div>
      <div class="werkSplashContent" uk-parallax="opacity: 1,0.3; viewport: 0.3;">
        <div class="werkSplashImage" :class="sidebaropen ? 'werkSplashImageFadeout':'werkSplashImageFadein'" :style="[{'background-image':'url('+content.acf.single_background_image.url+')'}]"></div>
      </div>
    </div>
  </div>
  <div class="sendToFront" id="werkContent" v-if="initWerkContent">

    <!-- <div class="beige-background uk-container uk-padding uk-padding-remove-horizontal uk-padding-remove-top"> -->
    <div class="uk-container uk-padding uk-padding-remove-horizontal uk-padding-remove-top" :uk-parallax="issmallscreen ? '' : 'y: 150,0; viewport: 0.3'">

      <div class="beige-background uk-container uk-padding uk-padding-remove-horizontal uk-padding-remove-top  uk-hidden@m ">
        <h1 class="uk-text-center uk-padding "><span class="mobilePageHeader">{{$t("menu.topmenu.case")}}</span></h1>
      </div>

      <div class="uk-padding">

        <!-- <div></div> -->
        <div class="uk-align-center" :class="{'uk-width-2-3':!issmallscreen}">

          <!-- <div :class="wide ? 'uk-width-3-4' : 'uk-width-1-1'"> -->
          <div>
            <h1 class="hugeLetters" :class="{'uk-text-center':issmallscreen}" v-html="content.title.rendered"></h1>
          </div>

        </div>

      </div>
    </div>

    <div id="" class="section section-last uk-padding uk-padding-remove-horizontal uk-padding-remove-top" :style="[issmallscreen ? {} :{'margin-top':'-300px'},{'background-color':content.acf['background-color'], 'color':content.acf['font_color']}]" :uk-parallax="issmallscreen ? '' : 'y: 300,0; viewport: 0.8'">


      <div class="slantTopLeft" :style="{'border-color': 'transparent '+content.acf['background-color']+' '+content.acf['background-color']+' transparent'}"></div>

      <div class="uk-container uk-padding uk-padding-remove-horizontal">

        <div class="uk-width-2-3@m uk-padding uk-padding-remove-bottom uk-align-center uk-text-center">
          <werkmeta :datainput="content" :singlepage="true"></werkmeta>
        </div>

        <div v-for="item in content.acf.single">

          <div class="uk-width-1-1@m uk-padding" :class="!item.addpaddingbottom ? 'uk-padding-remove-bottom' : '' ">

            <div class="text-section" v-if="item.acf_fc_layout === 'single_large_text_centered'">
              <div style="margin-bottom:0;" class="uk-align-center" :class="{'uk-width-2-3':!issmallscreen}">
                <div class="uk-padding uk-padding-remove-horizontal uk-h2" v-html="item.large_text_centered" style="color:inherit; margin-bottom:0;"></div>
              </div>
            </div>

            <div v-if="item.acf_fc_layout === 'slideshow'" :class="[setWidth(item.width)]" class="uk-align-center uk-margin-remove-bottom">
              <slideshow :slides="item.slides" :backgroundcolor="content.acf['background-color']"></slideshow>
            </div>



            <div v-if="item.acf_fc_layout === 'single_gallery'" :class="[setWidth(item.width)]" class="uk-align-center uk-margin-remove-bottom">

              <div class="uk-visible@m uk-child-width-expand uk-flex uk-flex-middle" :class="item.collapsed_gallery ? 'uk-grid-collapse':''" uk-grid>

                <div v-for="image in item.gallery">

                  <img width="100%" :setwidth="image.sizes['large-width']" :setheight="image.sizes['large-height']" class="lazyload uk-align-center" v-lazy="image.sizes.large" :data-srcset="image.sizes.medium + ' 480w, ' + image.sizes.large + ' 1024w, ' + image.sizes.xlarge + ' 1600w, ' + image.sizes.xlarge + ' 1920w'"
                  />
                  <p v-if="image.caption" style="color:inherit" class="uk-h5 uk-text-center uk-margin uk-margin-remove-horizontal uk-margin-remove-bottom" v-html="image.caption"></p>

                </div>
              </div>


              <div class="uk-hidden@m ">

                <div v-for="image in item.gallery" class="uk-align-center uk-width-1-1@s">

                  <img width="100%" :setwidth="image.sizes['large-width']" :setheight="image.sizes['large-height']" class="lazyload uk-align-center" v-lazy="image.sizes.large" :data-srcset="image.sizes.medium + ' 480w, ' + image.sizes.large + ' 1024w, ' + image.sizes.xlarge + ' 1600w, ' + image.sizes.xlarge + ' 1920w'"
                  />
                  <p v-if="image.caption" style="color:inherit" class="uk-h5 uk-text-center uk-margin uk-margin-remove-horizontal uk-margin-remove-bottom" v-html="image.caption"></p>


                </div>
              </div>


            </div>

          </div>
        </div>

      </div>

    </div>
    <div class="slantTopLeft uk-position-relative" :style="{'top':'0px','border-color': content.acf['background-color']+' '+'transparent'+' '+'transparent'+' '+content.acf['background-color']}"></div>
  </div>

  <nextproject :firstProject="content.first_post" :nextProject="content.next_post" :prevProject="content.previous_post" class="sendToBack"></nextproject>



</defaultpage>
</template>

<script>
import defaultpage from '~/components/defaultpage.vue'
import slideshow from '~/components/werk/_slug/slideshow.vue'
import nextproject from '~/components/werk/_slug/nextproject.vue'
import werkmeta from '~/components/werk/werkmeta.vue'
import axios from 'axios'

import {
  mapGetters
} from 'vuex'


export default {

  head() {
    return {
      title: 'Template Studio - ' + this.$t('menu.topmenu.case') + ' - ' + this.content.title.rendered,
      meta: [
          {
           hid: 'description',
           name: 'description',
           content: this.$t('menu.topmenu.case') + ' - ' + this.content.title.rendered + ': ' +this.content.acf['meta_what']
          }
        ]
    }
  },

  components: {
    defaultpage,
    slideshow,
    nextproject,
    werkmeta
  },
  transition: 'bounce',
  computed: {
    ...mapGetters({
      sidebaropen: "sidebaropen",
    }),
  },

  data: function() {
    return {
      xlscreen: false,
      wide: null,
      setWerkSplashHeight: '1000px',
      setWerkSplashNavigation: '1000px',
      initWerkContent: false,
    }
  },

  methods: {

    resetSetWerkSplashHeight: function() {
      this.setWerkSplashHeight = window.innerHeight - this.$el.querySelector('.werkSplash').offsetTop + 'px'
      this.setWerkSplashNavigation = window.innerHeight - this.$el.querySelector('.werkSplashNavigation').clientHeight + 'px'
    },

    setWidth: function(width) {
      if (width === "1/3") {
        return {
          'uk-width-1-3@m': true
        }
      }
      if (width === "1/2") {
        return {
          'uk-width-1-2@m': true
        }
      }

      if (width === "2/3") {
        return {
          'uk-width-2-3@m': true
        }
      }
      if (width === "5/6") {
        return {
          'uk-width-5-6@m': true
        }
      }

      if (width === "3/3") {
        return {
          'uk-width-1-1@m': true
        }
      }
    }


  },

  mounted() {
    this.xlscreen = this.isxlscreen

    // initWerkContent HACK to fix grid layout
    this.resetSetWerkSplashHeight()
    this.initWerkContent = true

  },
  watch: {
    'isxlscreen': function() {
      this.xlscreen = this.isxlscreen
    },
    'getscreensize': function() {
      this.resetSetWerkSplashHeight()
    }
  },


  async asyncData({
    params,
    query,
    error
  }) {
    if (query.hasOwnProperty('lang')) {
      let [contentRes] = await Promise.all([
        // axios.get('http://api.template-studio.nl/wp-json/wp/v2/pages?slug=werk_' + query.lang),
        // axios.get('http://api.template-studio.nl/wp-json/wp/v2/pages?slug=werk_' + query.lang),
        axios.get('http://api.template-studio.nl/wp-json/wp/v2/werkitem_' + query.lang + '?slug=' + params.slug + '&featured=1&isfeatured=1'),

      ])
      return {
        content: contentRes.data[0],
      }
    } else {

      let [contentRes] = await Promise.all([
        // axios.get('http://api.template-studio.nl/wp-json/wp/v2/pages?slug=werk_nl'),
        axios.get('http://api.template-studio.nl/wp-json/wp/v2/werkitem_nl?slug=' + params.slug + '&featured=1&isfeatured=1'),

      ])
      return {
        content: contentRes.data[0],
        p: params
      }
    }

  }

  // transition(to, from) {
  //   if (!from) return 'slide-left'
  //   return +to.query.page < +from.query.page ? 'slide-right' : 'slide-left'
  // },
}
</script>

<style lang="scss" scoped>
.werkSplash {

    height: 100vh;

    z-index: 0;
    .werkSplashInner {
        // position: absolute;
        // top: 0;
        // height: 100vh;
        // width: 100%;
        .werkSplashContent {
            position: absolute;
            top: 0;
            height: 100%;
            width: 100vw;
            z-index: -1;
        }

        .werkSplashNavigation {
            position: absolute;
            width: 100vw;
            height: 120px;
            bottom: 0;
            cursor: pointer;
        }

        .werkSplashImage {

            &.werkSplashImageFadeout {
                opacity: 0;
                transition: opacity 0s !important;

            }
            &.werkSplashImageFadein {
                opacity: 1;
                transition-delay: 0.5s;
            }
            transition: opacity 0.25s;

            background-position: center;
            // background-attachment: fixed;
            background-repeat: no-repeat;
            background-size: cover;
            top: 0;
            left: 0;
            position: fixed;
            height: 100vh;
            width: 100vw;
            // z-index: 1;

            image-rendering: optimizeSpeed;
            /*                     */
            image-rendering: -moz-crisp-edges;
            /* Firefox             */
            image-rendering: -o-crisp-edges;
            /* Opera               */
            image-rendering: -webkit-optimize-contrast;
            /* Chrome (and Safari) */
            image-rendering: optimize-contrast;
            /* CSS3 Proposed       */
            -ms-interpolation-mode: nearest-neighbor;
            /* IE8+                */

        }

    }

}

.sendToBack {
    z-index: 1;
}

.sendToFront {
    z-index: 2;
    position: relative;

}
.text-section {
    p:last-of-type {
        margin: 0 !important;
    }
}
</style>
