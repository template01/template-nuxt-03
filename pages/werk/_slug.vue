<template>
<defaultpage id="" >
  <div class="uk-container uk-padding uk-padding-remove-horizontal uk-padding-remove-top">
    <div class="uk-padding">

      <div class="uk-child-width-expand uk-flex-center uk-grid" uk-grid>
        <!-- <div></div> -->
        <div :class="{'uk-width-3-4':!getsmallscreen}">

          <!-- <div :class="wide ? 'uk-width-3-4' : 'uk-width-1-1'"> -->
          <div>
            <h1 class="hugeLetters">{{content.title.rendered}}</h1>
          </div>

        </div>

      </div>
    </div>
  </div>


  <div class="slantContainer" :style="{'background-color':content.acf['background-color']}">

    <div class="slantTopLeft" :style="{'border-color': 'transparent '+content.acf['background-color']+' '+content.acf['background-color']+' transparent'}"></div>
    <div v-for="item in content.acf.single">


      <div class="uk-padding">


        <div v-if="item.acf_fc_layout === 'single_large_text_centered'" class="uk-child-width-expand uk-flex uk-flex-center" uk-grid>
          <div :class="{'uk-width-3-4':!getsmallscreen}">
          <h1 v-html="item.large_text_centered"></h1>
          </div>
        </div>


        <div v-if="item.acf_fc_layout === 'single_gallery'" class="uk-child-width-expand@m uk-flex uk-flex-center uk-flex-middle " uk-grid>

          <div v-for="image in item.gallery">
            <img class="uk-align-center" :src="image.url" />
          </div>
        </div>
      </div>

    </div>


  </div>


</defaultpage>
</template>

<script>
import defaultpage from '~/components/defaultpage.vue'
import axios from 'axios'

export default {

  components: {
    defaultpage,
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

<style scoped>
#contact {
  background: white;
}

#map {
  background: orange;
}
</style>
