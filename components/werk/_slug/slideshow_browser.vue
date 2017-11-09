<template>
<div class="my-swiper uk-padding uk-padding-remove-horizontal uk-padding-remove-top" v-swiper:mySwiper="swiperOption">
  <div class="swiper-wrapper">

    <div class="navigation uk-hidden-touch">

      <div class="half left " style="cursor:url(/arrowLeftCircle.svg) 20 20, auto" @click="prevSlide()"></div>
      <div class="half right " style="cursor:url(/arrowRightCircle.svg) 20 20, auto" @click="nextSlide()"></div>
    </div>

    <div v-if="hidemobilenav" class="navigationTouch uk-hidden-notouch">

      <div class="mobileNavLeft uk-inline" @click="prevSlide()">
        <h1 class="uk-position-center-left">
          <i class="icon-left"></i>
        </h1>
      </div>
      <div class="mobileNavRight uk-inline" @click="nextSlide()">
        <h1 class="uk-position-center-right">
          <i class="icon-right-1"></i>
        </h1>
      </div>

    </div>
    <!-- <div :style="{'background-color':backgroundcolor}">
      <img :src="slide.url" :srcset="slide.sizes.small + ' 480w, ' + slide.sizes.medium + ' 1024w, ' + slide.sizes.large + ' 1600w, ' + slide.sizes.xlarge + ' 1920w'">

    </div> -->
    <div class="swiper-slide uk-padding uk-padding-remove-horizontal uk-padding-remove-top" v-for="slide in slides">
    <div class="fake-browser-ui ">
        <div class="frame">
            <span></span>
            <span></span>
            <span></span>
        </div>
        <img :src="slide.url" :srcset="slide.sizes.small + ' 480w, ' + slide.sizes.medium + ' 1024w, ' + slide.sizes.large + ' 1600w, ' + slide.sizes.xlarge + ' 1920w'">
        <!-- <img src="/screenshot.jpg" width="691" height="500" alt="A nice description"> -->
      </div>
    </div>

  </div>
</div>
</template>
<script>
export default {
  data: function() {
    return {
      swiperOption: {
        autoplay: 2000,
        // initialSlide: 1,
        loop: true,
        preloadImages: false,
        lazyLoading: true,
        effect: 'fade',
        onSlideChangeEnd: swiper => {
          // console.log('onSlideChangeEnd', swiper.realIndex)
        },
        onTap: swiper => {
          // console.log('onTap', swiper.realIndex)
        },
        onClick: swiper => {
          // swiper.slideNext();
        },
      }
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper
    }
  },
  props: ['slides', 'backgroundcolor','hidemobilenav'],
  methods:{
    nextSlide:function(){
     this.mySwiper.slideNext()
     console.log('next')
    },
    prevSlide:function(){
     this.mySwiper.slidePrev()
     console.log('prev')
    },

  },

}
</script>

<style lang="scss" scoped>

.fake-browser-ui {
    padding: 24px 0 0;
    border-radius: 3px;
    border-bottom: 2px solid #ccc;
    background: #ddd;
    display: inline-block;
    position: relative;
    line-height: 0;
}

.fake-browser-ui .frame {
    display: block;
    height: 15px;
    position: absolute;
    top: 7px;
    left: 1px;
}

.fake-browser-ui span {
    height: 12px;
    width: 12px;
    border-radius: 12px;
    background-color: #eee;
    border: 1px solid #dadada;
    float: left;
    margin: 0 0 0 4px;
    &:nth-of-type(1){
      background-color:#fc625d;
    }
    &:nth-of-type(2){
      background-color:#fdbc40;
    }
    &:nth-of-type(3){
      background-color:#35cc4b;
    }
}


.my-swiper {


    .mobileNavLeft,.mobileNavRight{
      width: 50%;
      // height: 15px;
      bottom: -0px;
      position: absolute;
    }
  .mobileNavRight{
    right: 0;
  }
  .mobileNavLeft{
    left: 0;
  }

  .navigation{
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 1;
    .half{
      width: 50%;
      height: 100%;

      float: left;

      &.left{
        // cursor: url('/arrowRightCircle.ico'), auto;
      }
      &.right{
        // cursor: url('/arrowRightCircle.ico'), auto;
      }
    }
  }


    .navigationTouch{
      width: 100%;
      height: 100%;
      // position: absolute;
      z-index: 1;

    }


    position: relative;
    // max-height: 100vh;
    width: 100%;
    .swiper-slide {
        text-align: center;
        font-size: 38px;
        font-weight: 700;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          max-width: 100%;
            // max-height: 100vh;
        }
    }
    .swiper-pagination {
        > .swiper-pagination-bullet {
            background-color: red;
        }
    }
}
</style>
