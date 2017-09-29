<template>
<!-- <div id="splashMobile" class="uk-padding uk-inline "> -->
<div id="splashMobile" class="uk-padding uk-inline " :style="{'background':slideContent[slideIndex].background_color}">


  <div v-if="slideContent[slideIndex].slide" class="" :class="{'uk-animation-slide-left-medium':begin, 'uk-animation-reverse':!begin, 'uk-animation-slide-right-medium':!begin, 'uk-animation-reverse':begin}">
    <h1 class="hugeLetters uk-padding-remove-horizontal uk-padding-remove-bottom uk-padding" :style="{'color':slideContent[slideIndex].font_color}">
            <span v-html="slideContent[slideIndex].slide"></span>
          </h1>
  </div>


  <div :style="{'color':slideContent[slideIndex].font_color}" class="uk-align-center uk-hidden@m">
    <h1 class="hugeLetters" :style="{'color':slideContent[slideIndex].font_color}">Studio</h1>
  </div>

  <div class="uk-padding  uk-position-bottom">
    <menuitems :passedmenucolor="slideContent[slideIndex].font_color" :sidebar="true"></menuitems>
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

#splash {
    #splashMainFrame {
        // position: absolute;
        // width: calc(100% - 80px);
        // top: 0;
        // left:0;
        position: relative;
    }

    #splashHugeLetters {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        h1 {
            transition: color 0.10s;
            transition-delay: 0.25s;
        }
    }

    #splashBackgroundImage {
        // transition: background-image 1s, background-position 0s, background-attachment 0s, background-repeat 0s, background-size 0s;
        background-position: center;
        background-attachment: fixed;
        background-repeat: no-repeat;
        background-size: cover;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }

    position: relative;

    // transition: background 1s, background-image 1s;
    overflow: hidden;
    @media (max-width: 960px) {

        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
    }

}
#splashMobile {
    height: 100%;
    width: 100%;

    overflow: hidden;
    position: fixed;
}
</style>
