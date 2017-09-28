<template>
<!-- <transition name="fade"> -->
<div id="contactslider" class=" beige-background" :class="!showContact?'slideout':''">


  <div class="slantTopLeft" :style="{'border-color': 'transparent #fffef5 #fffef5 transparent'}"></div>
  <div class="uk-container beige-background" >

    <!-- hello
  {{getlocale}} -->
    <!-- <nuxt-link :to="{hash:''}">CLOSE</nuxt-link> -->

    <templatefooter ignoreFirstColumn=true passHeader="Contact"></templatefooter>

  </div>
</div>

<!-- </transition> -->
</template>
<script>
import templatefooter from '~/components/templatefooter.vue'
import computedlocalemixin from '~/mixins/computedlocalemixin.js'

import {
  mapGetters
} from 'vuex'


export default {
  components: {
    templatefooter
  },
  computed: {
    ...mapGetters({
     showContact: "showContact",
   }),
  },

  mixins: [computedlocalemixin],
  data: function() {
    return {
      slideout: true
    }
  },
  mounted() {
    if(this.$route.hash==="#contact"){
      this.slideout = false

    }

  },
  methods:{
    // showContactMethod(){
    //   this.$store.commit('SET_SHOWCONTACT')
    // }
  },
  watch: {
    '$route': function(to, from) {
      if (to.hash === "#contact") {
        this.$store.commit('SET_SHOWCONTACT')
        console.log(this.getlocale)
        window.scroll({ top: 0, behavior: 'smooth' });
      } else {
        this.$store.commit('SET_HIDECONTACT')

      }

    }
  }
}
</script>
<style lang="scss">
#contactslider {
    position: fixed;
    // position: absolute;
    bottom: 0;
    width: 100%;
    height: calc(100% - 159px);

    @media (max-width: 1199px) {
      height: calc(100% - 119px);

    }
    @media (max-width: 960px) {
      height: calc(100%);
      position: absolute;

    }


    a {
        color: inherit;
    }
    // transform: translateY(0vh);

    transition: transform 0.5s ease-in-out;
}

.slideout {
    transform: translateY(100vh);
    // position: fixed !important;

}
</style>
