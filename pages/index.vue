<template>
  <div class="" style="background:white">

    <splash v-if="!smallscreen" :slideContent="content.acf.slides"></splash>
      <splashMobile v-else :slideContent="content.acf.slides_mobile"></splashMobile>
  </div>
</template>

<script>
import splash from '~/components/splash.vue'
import splashMobile from '~/components/splashMobile.vue'
import templatefooter from '~/components/templatefooter.vue'

import axios from 'axios'

export default {
  transition: 'bounce',

  head() {
    return {
      title: 'Template Studio - ' + this.$t('menu.topmenu.index'),
      meta: [
          {
           hid: 'description',
           name: 'description',
           content: this.$t('meta.index.content')
          }
        ]
    }
  },


  data: function() {
    return {
      smallscreen: null
    }
  },

  watch:{
    'issmallscreen':function(){
      this.smallscreen = this.issmallscreen
    }
  },


  components: {
    splash,
    splashMobile,
    templatefooter
  },

  mounted(){
    this.smallscreen = this.issmallscreen
    this.$store.commit('SET_INITIATED')
    window.scrollTo(0,0)
  },

  async asyncData({
    params,
    query,
    error
  }) {
      let [contentRes] = await Promise.all([
        axios.get('http://api.template-studio.nl/wp-json/wp/v2/pages?slug=splash'),
      ])
      return {
        content: contentRes.data[0],
      }
      // }
  },

}
</script>

<style>

</style>
