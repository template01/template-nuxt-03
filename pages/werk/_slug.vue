<template>
<defaultpage class="beige-background" id="">
  <div class="beige-background uk-container uk-padding uk-padding-remove-horizontal uk-padding-remove-top">
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




  <div id="" class="section section-last" :style="[getsmallscreen ? {} :{'margin-top':'-300px'},{'background-color':content.acf['background-color']}]" :uk-parallax="getsmallscreen ? '' : 'y: 300,0; viewport: 0.2'">

    <div class="slantTopLeft" :style="{'border-color': 'transparent '+content.acf['background-color']+' '+content.acf['background-color']+' transparent'}"></div>

    <div class="uk-container uk-padding uk-padding-remove-horizontal uk-padding-remove-bottom">
      <div v-for="item in content.acf.single">

        <div class="uk-width-1-1@m uk-padding ">

          <div v-if="item.acf_fc_layout === 'single_large_text_centered'">
            <div class="uk-align-center" :class="{'uk-width-2-3':!getsmallscreen}">
              <h2 v-html="item.large_text_centered"></h2>
            </div>
          </div>

          <div v-if="item.acf_fc_layout === 'slideshow'" :class="{'uk-width-5-6':!getsmallscreen}" class="uk-align-center uk-padding">
            <slideshow :slides="item.slides" :backgroundcolor="content.acf['background-color']"></slideshow>
          </div>



          <div v-if="item.acf_fc_layout === 'single_gallery'" :class="{'uk-width-5-6':!getsmallscreen}" class="uk-align-center">

            <div class="uk-visible@m uk-child-width-expand uk-flex uk-flex-middle" :class="item.collapsed_gallery ? 'uk-grid-collapse':''" uk-grid>

              <div v-for="image in item.gallery">

                <img :setwidth="image.sizes['large-width']" :setheight="image.sizes['large-height']" class="lazyload uk-align-center" v-lazy="image.sizes.large" :data-srcset="image.sizes.medium + ' 480w, ' + image.sizes.large + ' 1024w, ' + image.sizes.xlarge + ' 1600w, ' + image.sizes.xlarge + ' 1920w'"
                />

              </div>
            </div>


            <div class="uk-hidden@m ">

              <div v-for="image in item.gallery" class="uk-align-center uk-width-1-1@s">

                <img :setwidth="image.sizes['large-width']" :setheight="image.sizes['large-height']" class="lazyload uk-align-center" v-lazy="image.sizes.large" :data-srcset="image.sizes.medium + ' 480w, ' + image.sizes.large + ' 1024w, ' + image.sizes.xlarge + ' 1600w, ' + image.sizes.xlarge + ' 1920w'"
                />

              </div>
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
