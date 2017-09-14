<template>
<div id="splash" :style="{'background':slideContent[slideIndex].background_color}">

  <div class="uk-container uk-container-center ">

    <splashtopmenu class="uk-visible@m" :menucolor="slideContent[slideIndex].font_color"></splashtopmenu>
    <splashbottommenu :menucolor="slideContent[slideIndex].font_color"></splashbottommenu>

    <div class="uk-visible@m uk-child-width-expand@s uk-flex uk-flex-center uk-flex-middle uk-height-viewport">
      <div class="uk-width-5-6 uk-align-center  uk-child-width-expand@s  uk-flex uk-flex-center uk-flex-middle ">

        <div class="">
          <div class="animationdelay" :class="{'uk-animation-slide-bottom':begin, 'uk-animation-reverse':!begin, 'uk-animation-slide-top':!begin, 'uk-animation-reverse':begin}">
            <h1 class="hugeLetters" :style="{'color':slideContent[slideIndex].font_color}" >
              <span v-if="slideContent[slideIndex].slide[0].acf_fc_layout === 'string'" v-html="slideContent[slideIndex].slide[0].content"></span>
              <img v-if="slideContent[slideIndex].slide[0].acf_fc_layout === 'image'" :class="{'forcestretch':slideContent[slideIndex].slide[0].force_stretch}" :src="slideContent[slideIndex].slide[0].content.sizes.large"/>
            </h1>
          </div>
        </div>
        <div class="">
          <h1 class="hugeLetters uk-text-center" :style="{'color':slideContent[slideIndex].font_color}">Studio</h1>
        </div>
      </div>
    </div>

    <div id="splashMobile" class="uk-hidden@m">
      <div class="">
        <div class="" :class="{'uk-animation-slide-left-medium':begin, 'uk-animation-reverse':!begin, 'uk-animation-slide-right-medium':!begin, 'uk-animation-reverse':begin}">
          <h1 class="hugeLetters uk-padding-remove-horizontal uk-padding-remove-bottom uk-padding" :style="{'color':slideContent[slideIndex].font_color}" >
            <span v-if="slideContent[slideIndex].slide[0].acf_fc_layout === 'string'" v-html="slideContent[slideIndex].slide[0].content"></span>
            <img v-if="slideContent[slideIndex].slide[0].acf_fc_layout === 'image'" :class="{'forcestretch':slideContent[slideIndex].slide[0].force_stretch}" :src="slideContent[slideIndex].slide[0].content.sizes.large"/>
          </h1>
        </div>
      </div>
    </div>



    <div>
    </div>

  </div>
</div>
</template>
<script>
import splashtopmenu from '~/components/splashtopmenu.vue'
import splashbottommenu from '~/components/splashbottommenu.vue'


export default {
  components: {
    splashtopmenu,
    splashbottommenu,
  },
  props:['slideContent'],
  data: function() {
    return {
      begin: false,
      slideIndex: 0,
    }
  },
  mounted() {

    this.preloadImages(this.slideContent)
    window.onload = this.initSlide();


  },
  methods:{
    preloadImages: function(inputArray){
      // PRELOAD IMAGES
      for (var i = 0; i < inputArray.length; i++) {
        if(inputArray[i].type === 'image'){
          (new Image()).src = inputArray[i].content.sizes.large;
        }
      }

    },
    initSlide: function(){
      var vm = this
      setTimeout(function() {
        setInterval(function() {
          vm.begin = !vm.begin
        }, 1400)

        setInterval(function() {
          vm.slideIndex = vm.slideIndex + 1
          if (vm.slideIndex === vm.slideContent.length) {
            vm.slideIndex = 0
          }
        }, 2800)

      }, 1000)
    }
  }
}
</script>
<style lang="scss" scoped>

img{
  max-height: 50vh;
}
.forcestretch{
  width: auto;
  height: 40vh;

}

@media (max-width: 960px){

  img{
    max-height: 40vh;
  }
}

.animationdelay {
    -webkit-animation-delay: 300ms;
    animation-delay: 300ms;
}
#splash {
    position: relative;
    transition: background 1s;
    overflow: hidden;


    @media (max-width: 960px){

      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
    }

}
#splashMobile {

    overflow: hidden;

    .mobileStudio{
      position: absolute;
    }
}
</style>
