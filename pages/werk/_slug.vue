<template>
<defaultpage class="beige-background" id="">
  <div class="werkSplash uk-visible@m">
    <div class="werkSplashContent">

      <div class="werkSplashImage" :style="{'background-image':'url('+content.acf.single_background_image.sizes.xlarge+')'}"></div>

    </div>
  </div>
  <div class="sendToFront">

    <!-- <div class="beige-background uk-container uk-padding uk-padding-remove-horizontal uk-padding-remove-top"> -->
    <div class="uk-container uk-padding uk-padding-remove-horizontal uk-padding-remove-top">

      <div class="beige-background uk-container uk-padding uk-padding-remove-horizontal uk-padding-remove-top  uk-hidden@m ">
        <h1 class="uk-text-center uk-padding "><span class="mobilePageHeader">{{$t("menu.topmenu.case")}}</span></h1>
      </div>

      <div class="uk-padding">

        <!-- <div></div> -->
        <div class="uk-align-center" :class="{'uk-width-2-3':!getsmallscreen}">

          <!-- <div :class="wide ? 'uk-width-3-4' : 'uk-width-1-1'"> -->
          <div>
            <h1 class="hugeLetters" v-html="content.title.rendered"></h1>
          </div>

        </div>

      </div>
    </div>

    <div id="" class="section section-last uk-padding uk-padding-remove-horizontal uk-padding-remove-top" :style="[getsmallscreen ? {} :{'margin-top':'-300px'},{'background-color':content.acf['background-color'], 'color':content.acf['font_color']}]" :uk-parallax="getsmallscreen ? '' : 'y: 300,0; viewport: 0.2'">

      <div class="slantTopLeft" :style="{'border-color': 'transparent '+content.acf['background-color']+' '+content.acf['background-color']+' transparent'}"></div>

      <div class="uk-container uk-padding uk-padding-remove-horizontal">
        <div v-for="item in content.acf.single">

          <div class="uk-width-1-1@m uk-padding" :class="!item.addpaddingbottom ? 'uk-padding-remove-bottom' : '' ">

            <div class="text-section" v-if="item.acf_fc_layout === 'single_large_text_centered'">
              <div style="margin-bottom:0;" class="uk-align-center" :class="{'uk-width-2-3':!getsmallscreen}">
                <div class="uk-padding uk-padding-remove-horizontal uk-h2" v-html="item.large_text_centered" style="color:inherit; margin-bottom:0;"></div>
              </div>
            </div>

            <div v-if="item.acf_fc_layout === 'slideshow'" :class="{'uk-width-5-6':!getsmallscreen}" class="uk-align-center uk-margin-remove-bottom">
              <slideshow :slides="item.slides" :backgroundcolor="content.acf['background-color']"></slideshow>
            </div>



            <div v-if="item.acf_fc_layout === 'single_gallery'" :class="{'uk-width-5-6':!getsmallscreen}" class="uk-align-center uk-margin-remove-bottom">

              <div class="uk-visible@m uk-child-width-expand uk-flex uk-flex-middle" :class="item.collapsed_gallery ? 'uk-grid-collapse':''" uk-grid>

                <div v-for="image in item.gallery">

                  <img :setwidth="image.sizes['large-width']" :setheight="image.sizes['large-height']" class="lazyload uk-align-center" v-lazy="image.sizes.large" :data-srcset="image.sizes.medium + ' 480w, ' + image.sizes.large + ' 1024w, ' + image.sizes.xlarge + ' 1600w, ' + image.sizes.xlarge + ' 1920w'"
                  />
                  <p v-if="image.caption" style="color:inherit" class="uk-h5 uk-text-center uk-margin uk-margin-remove-horizontal uk-margin-remove-bottom" v-html="image.caption"></p>

                </div>
              </div>


              <div class="uk-hidden@m ">

                <div v-for="image in item.gallery" class="uk-align-center uk-width-1-1@s">

                  <img :setwidth="image.sizes['large-width']" :setheight="image.sizes['large-height']" class="lazyload uk-align-center" v-lazy="image.sizes.large" :data-srcset="image.sizes.medium + ' 480w, ' + image.sizes.large + ' 1024w, ' + image.sizes.xlarge + ' 1600w, ' + image.sizes.xlarge + ' 1920w'"
                  />
                  <p v-if="image.caption" style="color:inherit" class="uk-h5 uk-text-center uk-margin uk-margin-remove-horizontal uk-margin-remove-bottom" v-html="image.caption"></p>


                </div>
              </div>


            </div>

          </div>
        </div>

      </div>

    </div>
    <!-- <div class="slantTopLeft uk-position-relative" :style="{'border-color': 'transparent '+content.acf['background-color']+' '+content.acf['background-color']+' transparent'}"></div> -->
    <div class="slantTopLeft uk-position-relative" :style="{'top':'0px','border-color': content.acf['background-color']+' '+'transparent'+' '+'transparent'+' '+content.acf['background-color']}"></div>
  </div>


  <!-- <div class="blue-background uk-position-relative" :class="{'uk-padding ':getsmallscreen}">
  <div class="slantTopLeft"></div>
</div> -->



  <nextproject :firstProject="content.first_post" :nextProject="content.next_post" :prevProject="content.previous_post" class="sendToBack"></nextproject>



</defaultpage>
</template>

<script>
import defaultpage from '~/components/defaultpage.vue'
import slideshow from '~/components/werk/_slug/slideshow.vue'
import nextproject from '~/components/werk/_slug/nextproject.vue'
import axios from 'axios'

export default {

  components: {
    defaultpage,
    slideshow,
    nextproject
  },
  transition: 'bounce',
  data: function() {
    return {
      wide: null,
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
    height: 50vh;

    .werkSplashContent {
        position: absolute;
        top: 0;
        height: 100vh;
        z-index: -1;
        img {
            width: 100vw;
            position: fixed;
        }
    }
    .werkSplashImage {
        background-position: center;
        background-attachment: fixed;
        background-repeat: no-repeat;
        background-size: cover;
        position: fixed;
        height: 100vh;
        width: 100vw;
    }
    @media (max-width: 1200px) {
        height: 55vh;
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
