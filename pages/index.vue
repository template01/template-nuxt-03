<template>
<div class="beige-background">
    <splash class="fadein" v-if="!smallscreen" :slideContent="content.acf.slides"></splash>
    <splashMobile class="fadein" v-if="smallscreen" :slideContent="content.acf.slides_mobile"></splashMobile>

</div>
</template>

<script>
import splash from '~/components/splash.vue'
// import confettiComp from '~/components/confetti.vue'
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
    // confettiComp,
    templatefooter
  },
  //
  // created() {
  //   if (this.$route.hash === '#pop') {
  //     this.confetti = true
  //   } else {
  //
  //     this.confetti = false
  //
  //   }
  // },

  mounted() {
    this.smallscreen = this.issmallscreen
    this.$store.commit('SET_INITIATED')
    window.scrollTo(0, 0)
    // console.log(this.$route.hash)
  },

  async asyncData({
    params,
    query,
    error,
    route
  }) {
    let [contentRes] = await Promise.all([
      axios.get('https://api.template-studio.nl/wp-json/wp/v2/pages?slug=splash'),
    ])
    // console.log(route)
    // var pop = null
    // if (route.hash === '#pop') {
    //   pop = true
    // }else{
    //   pop = false
    // }

    return {
      // confetti : pop,
      content: contentRes.data[0],
    }
    // }
  },

}
</script>
<style scoped>
.fadein{
  -webkit-animation: fadein 0.5s; /* Safari, Chrome and Opera > 12.1 */
    -moz-animation: fadein 0.5s; /* Firefox < 16 */
     -ms-animation: fadein 0.5s; /* Internet Explorer */
      -o-animation: fadein 0.5s; /* Opera < 12.1 */
         animation: fadein 0.5s;
}

@keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}

/* Firefox < 16 */
@-moz-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}

/* Safari, Chrome and Opera > 12.1 */
@-webkit-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}

/* Internet Explorer */
@-ms-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}

/* Opera < 12.1 */
@-o-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}

</style>
