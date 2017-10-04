<template>
<div id="splash" :style="{'background':slideContent[slideIndex].background_color}">


  <div class="uk-visible@m uk-padding" id="splashHugeLetters">
    <div class="uk-container uk-child-width-expand@s uk-flex uk-flex-center uk-flex-middle uk-height-1-1 ">

      <div class="uk-padding">
        <h1 class="hugeLetters " :style="{'color':slideContent[slideIndex].font_color}">
        <span v-html="!slideContent[slideIndex].background_image ? slideContent[slideIndex].slide : slideContent[slideIndex-1].slide"></span>
      </h1>

      </div>

      <div class="uk-padding">
        <h1 class="hugeLetters " style="padding-left:1vw" :style="{'color':slideContent[slideIndex].font_color}">
      <span >Studio</span>
    </h1>
      </div>

    </div>

  </div>

  <!-- {{preloadedImages}} -->
  <div id="splashBackgroundImage" :class="slideContent[slideIndex].background_image ? 'slidein':''" class="uk-visible@m" :style="slideContent[slideIndex].background_image ? {'background-image':'url('+slideContent[slideIndex].background_image.sizes.xlarge+')'} :{'background-image':'url('+function(){if(slideIndex>0){ return slideContent[slideIndex].background_image.sizes.xlarge}}+')'}"></div>

  <div id="splashMainFrame" class="uk-container uk-container-center ">


    <splashtopmenu class="uk-visible@m" :menucolor="slideContent[slideIndex].font_color"></splashtopmenu>
    <splashbottommenu :menucolor="slideContent[slideIndex].font_color"></splashbottommenu>

    <div class="uk-visible@m uk-child-width-expand@s uk-flex uk-flex-center uk-flex-middle">

    </div>


  </div>

</div>
</template>
<script>
import splashtopmenu from '~/components/splashtopmenu.vue'
import splashbottommenu from '~/components/splashbottommenu.vue'
import menuitems from '~/components/menuitems.vue'

import {
  mapGetters
} from 'vuex'


export default {
  components: {
    splashtopmenu,
    splashbottommenu,
    menuitems
  },

  computed: {
    ...mapGetters({
      getsplashimagesloaded: "getsplashimagesloaded",
    }),
  },

  props: ['slideContent'],
  data: function() {
    return {
      begin: false,
      slideIndex: 0,
      speed: 1200,
      slideshow: null,
      preloadedImages: []
    }
  },

  mounted() {
    console.log(this.getsmallscreen)
    if (!this.getsplashimagesloaded) {
      this.$store.commit('SET_SPLASHIMAGESLOADED')
      this.preloadImages(this.slideContent)
    } else {
      this.startSlideshow();
    }
  },

  destroyed() {
    this.stopSlideshow()
  },

  methods: {

    preloadImages: function(inputArray) {
      // // PRELOAD IMAGES
      var images = []

      for (var i = 0; i < inputArray.length; i++) {

        if (inputArray[i].background_image) {
          images.push(inputArray[i].background_image.sizes.xlarge)
          this.preloadedImages.push(inputArray[i].background_image.sizes.xlarge)
        }

        if (inputArray[i].slide) {
          if (inputArray[i].slide[0].acf_fc_layout === 'image') {
            images.push(inputArray[i].slide[0].content.sizes.xlarge)

          }
        }
      }

      var vm = this
      new preLoader(images, {
        onComplete: function(loaded, errors) {
          vm.startSlideshow();
        }
      });


      console.log(images)



    },

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
          inittimeout(vm.slideContent[vm.slideIndex].speed)
        }, vm.slideContent[vm.slideIndex].speed)



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
    transition: transform 0.5s ease-in-out;
    // transition: all 0.5s ease-in-out, opacity 0.0s ease-in-out !important;
}
/* .fade-leave-active below version 2.1.8 */
.fade-enter,
.fade-leave-to {
    transform: translateY(100vh);
    transition: transform 0.5s ease-in-out;
    // transition: all 0.5s ease-in-out, opacity 0.0s ease-in-out !important;

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
        // position: fixed;
        // top: 0;
        // left: 0;
        // width: 100%;
        // height: 100%;
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
        transition: transform 0.5s ease-in-out;
        transform: translateY(100vh);
        // &.slideout {
        //     transform: translateY(100vh);
        // }
        &.slidein {
            transform: translateY(0vh);
            // animation-name: example;
            // animation-duration: 1s;
        }
    }

    overflow: hidden;

    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
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
