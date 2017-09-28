<template>
<div id="splash" :style="{'background':slideContent[slideIndex].background_color}">


  <div class="uk-visible@m uk-child-width-expand@s uk-flex uk-flex-center uk-flex-middle uk-height-viewport uk-padding" id="splashHugeLetters">
    <div class="">
      <h1 class="hugeLetters" :style="{'color':slideContent[slideIndex].font_color}">
        <span v-html="!slideContent[slideIndex].background_image ? slideContent[slideIndex].slide[0].content : slideContent[slideIndex-1].slide[0].content"></span>

      </h1>
      <!-- <h1 class="hugeLetters uk-text-center" :style="{'color':slideContent[slideIndex].font_color}">
        <span v-html="!slideContent[slideIndex].background_image ? slideContent[slideIndex].slide[0].content : slideContent[slideIndex-1].slide[0].content"></span>
        <span style="padding-left:4vw">Studio</span>
      </h1> -->
    </div>

    <div class="">
      <h1 class="hugeLetters" style="padding-left:1vw" :style="{'color':slideContent[slideIndex].font_color}">
      <span >Studio</span>
    </h1>
    </div>

  </div>

  <transition name="fade">
    <div id="splashBackgroundImage" v-if="slideContent[slideIndex].background_image" class="uk-visible@m" :style="{'background-image':'url('+slideContent[slideIndex].background_image.sizes.xlarge+')'}"></div>
  </transition>



  <div id="splashMainFrame" class="uk-container uk-container-center ">


    <splashtopmenu class="uk-visible@m" :menucolor="slideContent[slideIndex].font_color"></splashtopmenu>
    <splashbottommenu :menucolor="slideContent[slideIndex].font_color"></splashbottommenu>

    <div class="uk-visible@m uk-child-width-expand@s uk-flex uk-flex-center uk-flex-middle uk-height-viewport">

    </div>


  </div>


  <div id="splashMobile" class="uk-padding uk-inline uk-hidden@m ">

    <div id="">
      <div class="">
        <div v-if="slideContent[slideIndex].slide" class="" :class="{'uk-animation-slide-left-medium':begin, 'uk-animation-reverse':!begin, 'uk-animation-slide-right-medium':!begin, 'uk-animation-reverse':begin}">
          <h1 class="hugeLetters uk-padding-remove-horizontal uk-padding-remove-bottom uk-padding" :style="{'color':slideContent[slideIndex].font_color}">
            <span v-if="slideContent[slideIndex].slide[0].acf_fc_layout === 'string'" v-html="slideContent[slideIndex].slide[0].content"></span>
          </h1>
        </div>
      </div>


      <div :style="{'color':slideContent[slideIndex].font_color}" class="uk-align-center uk-hidden@m">
        <h1 class="hugeLetters" :style="{'color':slideContent[slideIndex].font_color}">Studio</h1>
      </div>
    </div>

    <div class="uk-padding  uk-position-bottom">
      <menuitems :passedmenucolor="slideContent[slideIndex].font_color" :sidebar=true></menuitems>
    </div>

  </div>





</div>
</template>
<script>
import splashtopmenu from '~/components/splashtopmenu.vue'
import splashbottommenu from '~/components/splashbottommenu.vue'
import menuitems from '~/components/menuitems.vue'


export default {
  components: {
    splashtopmenu,
    splashbottommenu,
    menuitems
  },
  props: ['slideContent'],
  data: function() {
    return {
      begin: false,
      slideIndex: 0,
      speed: 1200,
      slideshow: null
    }
  },

  mounted() {
    this.preloadImages(this.slideContent)
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
          images.push(inputArray[i].background_image.sizes.large)
        }

        if (inputArray[i].slide) {
          if (inputArray[i].slide[0].acf_fc_layout === 'image') {
            images.push(inputArray[i].slide[0].content.sizes.large)

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
