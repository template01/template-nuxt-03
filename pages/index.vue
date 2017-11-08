<template>
<div class="" style="background:white">

  <div v-if="confetti" @click="confetti=!confetti; $router.push('/')">
      <confettiComp  v-if="confetti"></confettiComp>
    </div>

  <div v-if="!confetti">
      <splash v-if="!smallscreen && !confetti" :slideContent="content.acf.slides"></splash>
      <splashMobile v-if=" smallscreen && !confetti" :slideContent="content.acf.slides_mobile"></splashMobile>
    </div>
</div>
</template>

<script>
import splash from '~/components/splash.vue'
import confettiComp from '~/components/confetti.vue'
import splashMobile from '~/components/splashMobile.vue'
import templatefooter from '~/components/templatefooter.vue'

import axios from 'axios'

export default {
  transition: 'bounce',

  head() {
    return {
      title: 'Template Studio - ' + this.$t('menu.topmenu.index'),
      meta: [{
        hid: 'description',
        name: 'description',
        content: this.$t('meta.index.content')
      }]
    }
  },


  data: function() {
    return {
      smallscreen: null,
      // confetti: true
    }
  },

  watch: {
    'issmallscreen': function() {
      this.smallscreen = this.issmallscreen
    },
    // '$route': function(to, from) {
    //   console.log(from)
    //   if (from.hash === '#wow') {
    //     this.confetti = false
    //   }
    // }
  },


  components: {
    splash,
    splashMobile,
    confettiComp,
    templatefooter
  },

  created() {
    if (this.$route.hash === '#pop') {
      this.confetti = true
    } else {

      this.confetti = false

    }
  },

  mounted() {
    this.smallscreen = this.issmallscreen
    this.$store.commit('SET_INITIATED')
    window.scrollTo(0, 0)
    console.log(this.$route.hash)
  },

  async asyncData({
    params,
    query,
    error,
    route
  }) {
    let [contentRes] = await Promise.all([
      axios.get('http://api.template-studio.nl/wp-json/wp/v2/pages?slug=splash'),
    ])
    console.log(route)
    var pop = null
    if (route.hash === '#pop') {
      pop = true
    }else{
      pop = false
    }

    return {
      confetti : pop,
      content: contentRes.data[0],
    }
    // }
  },

}
</script>
