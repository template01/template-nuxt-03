<template>
  <section class="">
    <splash></splash>
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
  }
}
</script>

<style>

</style>
