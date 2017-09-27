<template>
<!-- <transition name="fade"> -->
<div id="contactslider" class=" beige-background" :class="slideout?'slideout':''">

  <div class="slantTopLeft" :style="{'border-color': 'transparent #fffef5 #fffef5 transparent'}"></div>
  <div class="uk-container beige-background" >

    <!-- hello
  {{getlocale}} -->

    <div class="uk-padding uk-padding-remove-horizontal uk-align-center ignoreWidthSmallScreen" :class="{'uk-width-1-1 ':!getsmallscreen}">
      <div class="uk-grid">
        <div class="uk-visible@m uk-width-1-3@m ">
          <clock :footer="true"></clock>
          <nowlistening :footer="true"></nowlistening>
        </div>
        <div class="uk-width-1-3@m">
          <h4 v-html="$t('contact.a')"></h4></div>
        <div class="uk-width-1-3@m">
          <h4 v-html="$t('contact.b')"></h4></div>
      </div>
    </div>
  </div>
</div>

<!-- </transition> -->
</template>
<script>
import nowlistening from '~/components/nowlistening.vue'
import clock from '~/components/clock.vue'
import computedlocalemixin from '~/mixins/computedlocalemixin.js'

export default {
  components: {
    nowlistening,
    clock
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
  watch: {
    '$route': function(to, from) {
      if (to.hash === "#contact") {
        this.slideout = false
        console.log(this.getlocale)
      } else {
        this.slideout = true

      }

    }
  }
}
</script>
<style lang="scss">
#contactslider {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: calc(100% - 119px);
    a {
        color: inherit;
    }
    // transform: translateY(0vh);

    transition: transform 0.5s ease-in-out;
}

.slideout {
    transform: translateY(100vh);

}
</style>
