<template>
  <section class="">
    <splash :slideContent="content.acf.slides"></splash>
  </section>
</template>

<script>
import splash from '~/components/splash.vue'
import templatefooter from '~/components/templatefooter.vue'

import axios from 'axios'

export default {
  transition: 'bounce',

  components: {
    splash,
    templatefooter
  },

  mounted(){
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
