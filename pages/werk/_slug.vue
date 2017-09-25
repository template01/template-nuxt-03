<template>
<defaultpage class="beige-background" id="">
  <div class="uk-container uk-padding uk-padding-remove-horizontal uk-padding-remove-top">
    <div class="uk-padding">

      <!-- <div></div> -->
      <div class="uk-align-center" :class="{'uk-width-2-3':!getsmallscreen}">

        <!-- <div :class="wide ? 'uk-width-3-4' : 'uk-width-1-1'"> -->
        <div>
          <h1 class="uk-hidden@m uk-text-center" style="text-decoration:underline">CASE</h1>
          <h1 class="hugeLetters">{{content.title.rendered}}</h1>
        </div>

      </div>

    </div>
  </div>
<!--

  <div class="uk-container">


    <div class=" uk-padding uk-padding-remove-horizontal">
      <div class="uk-align-center" :class="{'uk-width-5-6':!getsmallscreen}">


      </div>
    </div>


  </div>
  </div> -->
  <!-- You can find this swiper instance object in current component by the "mySwiper"  -->


  <div class="uk-container slantContainer" :style="{'background-color':content.acf['background-color']}">

    <div class="slantTopLeft" :style="{'border-color': 'transparent '+content.acf['background-color']+' '+content.acf['background-color']+' transparent'}"></div>
    <div v-for="item in content.acf.single">


      <div class="">
        <div class="uk-width-1-1@m">



          <div v-if="item.acf_fc_layout === 'single_large_text_centered'">
            <div class="uk-align-center" :class="{'uk-width-2-3':!getsmallscreen}">
              <h2 v-html="item.large_text_centered"></h2>
            </div>
          </div>

          <div v-if="item.acf_fc_layout === 'slideshow'" :class="{'uk-width-5-6':!getsmallscreen}" class="uk-align-center uk-padding">
            <slideshow :slides="item.slides" :backgroundcolor="content.acf['background-color']"></slideshow>
          </div>

          <div v-if="item.acf_fc_layout === 'single_gallery'" :class="{'uk-width-5-6':!getsmallscreen}" class="uk-align-center uk-padding">
            <div v-for="image in item.gallery">
              <img :setwidth="image.sizes['large-width']" :setheight="image.sizes['large-height']" v-lazy="image.sizes.large" class="lazyload uk-align-center" />
            </div>
          </div>

        </div>
      </div>
    </div>

  </div>


  </div>


</defaultpage>
</template>

<script>
import defaultpage from '~/components/defaultpage.vue'
import slideshow from '~/components/werk/_slug/slideshow.vue'
import axios from 'axios'

export default {

  components: {
    defaultpage,
    slideshow
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
        axios.get('http://api.template-studio.nl/wp-json/wp/v2/werkitem_' + query.lang + '?slug=' + params.slug),

      ])
      return {
        content: contentRes.data[0],
      }
    } else {

      let [contentRes] = await Promise.all([
        // axios.get('http://api.template-studio.nl/wp-json/wp/v2/pages?slug=werk_nl'),
        axios.get('http://api.template-studio.nl/wp-json/wp/v2/werkitem_nl?slug=' + params.slug),

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
