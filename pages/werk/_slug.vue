<template>
<defaultpage id="">

  <div id="beige-background" class="uk-container uk-padding uk-padding-remove-horizontal uk-padding-remove-top">
    <div class="uk-padding">

      <div class="uk-child-width-expand uk-flex-center" uk-grid>
        <!-- <div></div> -->
        <div :class="{'uk-width-3-4':!getsmallscreen}">
          <div>
            <h1 class="hugeLetters">{{content.title.rendered}}</h1>
          </div>
        </div>
<!--
        <div v-for="item in content.acf.tile" :class="[item.size === 'half' ? {'uk-width-1-2@m':true}:{'uk-width-1-1@m':true}, item.type === 'image' ? 'uk-flex uk-flex-center uk-flex-middle':'']">
          <h1 v-if="item.acf_fc_layout === 'header'" class="uk-text-left hugeLetters" v-html="datainput.title.rendered"></h1>
          <img v-if="item.acf_fc_layout  === 'image'" :class="item.size === 'full' ? 'uk-padding uk-padding-remove-vertical' : ''" :src="item.image.sizes.large" />
          <div v-if="item.acf_fc_layout === 'text'" class="uk-text-left uk-h4" v-html="item.text"></div>
        </div>
         -->
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


  async asyncData({
    params,
    query,
    error
  }) {
    if (query.hasOwnProperty('lang')) {
      let [contentRes] = await Promise.all([
        // axios.get('http://api.template-studio.nl/wp-json/wp/v2/pages?slug=werk_' + query.lang),
        // axios.get('http://api.template-studio.nl/wp-json/wp/v2/pages?slug=werk_' + query.lang),
        axios.get('http://api.template-studio.nl/wp-json/wp/v2/werkitem_'+query.lang+'?slug=' + params.slug),

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
