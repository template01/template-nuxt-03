<template>
<!-- <div id="splashMobile" class="uk-padding uk-inline "> -->
<div id="splashMobile" class="uk-padding uk-inline " :style="{'background':slideContent[slideIndex].background_color}">

  <!--
  <div v-if="slideContent[slideIndex].slide" class="" :class="{'uk-animation-slide-left-medium':begin, 'uk-animation-reverse':!begin, 'uk-animation-slide-right-medium':!begin, 'uk-animation-reverse':begin}"> -->
  <div v-if="slideContent[slideIndex].slide" class="slideinout">
    <h1 class="hugeLetters uk-padding-remove-horizontal uk-padding-remove-bottom uk-padding-remove-top uk-padding" :style="{'color':slideContent[slideIndex].font_color}">
            <span v-html="slideContent[slideIndex].slide"></span>
          </h1>
  </div>


  <div :style="{'color':slideContent[slideIndex].font_color}" class="uk-align-center uk-hidden@m">
    <h1 class="hugeLetters" :style="{'color':slideContent[slideIndex].font_color}">Studio</h1>
  </div>

  <div class="uk-padding  uk-position-bottom">
    <menuitems :passedmenucolor="slideContent[slideIndex].font_color" :indexMobile="true" :sidebar="true"></menuitems>
  </div>


</div>
</template>
<script>
import menuitems from '~/components/menuitems.vue'

export default {
  components: {
    menuitems
  },

  props: ['slideContent'],
  data: function() {
    return {
      wasInitiated: false,
      begin: false,
      slideIndex: 0,
      speed: 1800,
      slideshow: null
    }
  },

  mounted() {
    this.startSlideshow();
  },

  destroyed() {
    this.stopSlideshow()
  },

  methods: {
    stopSlideshow() {
      window.clearTimeout(this.slideshow);
    },


    startSlideshow: function() {


      // alert('init')
      var vm = this

      function inittimeout() {


        vm.slideshow = window.setTimeout(function() {
          if (vm.begin) {
            vm.slideIndex = vm.slideIndex + 1
            if (vm.slideIndex === vm.slideContent.length) {
              vm.slideIndex = 0
            }
          }
          vm.begin = !vm.begin
          inittimeout(vm.speed)
        }, vm.speed)



      };

      inittimeout()

    }
  }
}
</script>
<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
    transform: translateY(0vh);
    transition: all 0.5s ease-in-out, opacity 0.0s ease-in-out !important;
}
/* .fade-leave-active below version 2.1.8 */
.fade-enter,
.fade-leave-to {
    transform: translateY(100vh);
    transition: all 0.5s ease-in-out, opacity 0.0s ease-in-out !important;

}

img {
    max-height: 50vh;
}
.forcestretch {
    width: auto;
    height: 40vh;

}
@media (max-width: 960px) {

    img {
        max-height: 40vh;
    }
}

.slideinout {
    -webkit-animation-name: example;
    /* Safari 4.0 - 8.0 */
    -webkit-animation-duration: 3600ms;
    /* Safari 4.0 - 8.0 */
    animation-name: example;
    animation-duration: 3600ms;
    animation-iteration-count: infinite;
}
@keyframes example {
    0% {
        opacity: 0;
        transform: translateX(-10vw);
    }
    20% {
        opacity: 1;
        transform: translateX(0px);
    }
    50% {
        opacity: 1;
        transform: translateX(0px);
    }
    75% {
      opacity: 0;
    }
    100% {
      opacity: 0;
      transform: translateX(25vw);
    }

}

#splashMobile {
    height: 100%;
    width: 100%;
    transition: background 250ms;
    overflow: hidden;
    position: fixed;
}
</style>
