<template>

<div class="black-background">
  <transition name="fade">
    <loadingsingle class="loadingsingle" v-if="!getinitiated"></loadingsingle>
  </transition>


  <confettiComp></confettiComp>
</div>
</template>

<script>
import confettiComp from '~/components/confetti.vue'
import loadingsingle from '~/components/loadingsingle.vue'


import {
  mapGetters
} from 'vuex'



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


    computed: {
      ...mapGetters({
        getinitiated: "getinitiated",
      }),
    },

  components: {
    confettiComp,
    loadingsingle
  },

  mounted(){
    this.$nextTick(() => {
      var vm = this
      vm.loaded = true
      setTimeout(function() {
        vm.$store.commit('SET_INITIATED')
      }, 1500)
    })


  }
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
//       axios.get('https://api.template-studio.nl/wp-json/wp/v2/pages?slug=splash'),
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
<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.25s;
}
/* .fade-leave-active below version 2.1.8 */
.fade-enter,
.fade-leave-to {
    opacity: 0;
}

</style>
