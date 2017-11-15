<template>
<div class="beige-background" @click="$router.push('/')">
  <confettiComp></confettiComp>
</div>
</template>

<script>
import confettiComp from '~/components/confetti.vue'

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



  components: {
    confettiComp,
  },
//
//   created() {
//     if (this.$route.hash === '#pop') {
//       this.confetti = true
//     } else {
//
//       this.confetti = false
//
//     }
//   },
//
//   mounted() {
//     this.smallscreen = this.issmallscreen
//     this.$store.commit('SET_INITIATED')
//     window.scrollTo(0, 0)
//     console.log(this.$route.hash)
//   },
//
//   async asyncData({
//     params,
//     query,
//     error,
//     route
//   }) {
//     let [contentRes] = await Promise.all([
//       axios.get('http://api.template-studio.nl/wp-json/wp/v2/pages?slug=splash'),
//     ])
//     console.log(route)
//     var pop = null
//     if (route.hash === '#pop') {
//       pop = true
//     }else{
//       pop = false
//     }
//
//     return {
//       confetti : pop,
//       content: contentRes.data[0],
//     }
//     // }
//   },
//
}
</script>
