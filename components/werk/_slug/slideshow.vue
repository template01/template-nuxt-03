<template>
<div class="my-swiper" v-swiper:mySwiper="swiperOption">
  <div class="swiper-wrapper">
    <div class="navigation">

      <div class="mobileNavLeft uk-hidden-notouch uk-inline" @click="prevSlide()">
        <h1 class="uk-position-center-left">
          <i class="icon-left"></i>
        </h1>
      </div>
      <div class="mobileNavRight uk-hidden-notouch uk-inline" @click="nextSlide()">
        <h1 class="uk-position-center-right">
          <i class="icon-right-1"></i>
        </h1>
      </div>

      <div class="half left uk-hidden-touch" style="cursor:url(/arrowLeftCircle.svg) 20 20, auto" @click="prevSlide()"></div>
      <div class="half right uk-hidden-touch" style="cursor:url(/arrowRightCircle.svg) 20 20, auto" @click="nextSlide()"></div>
    </div>
    <div :style="{'background-color':backgroundcolor}" class="swiper-slide" v-for="slide in slides">
      <img :src="slide.url" :srcset="slide.sizes.small + ' 480w, ' + slide.sizes.medium + ' 1024w, ' + slide.sizes.large + ' 1600w, ' + slide.sizes.xlarge + ' 1920w'">

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
  props: ['slides', 'backgroundcolor'],
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
.my-swiper {


  .mobileNavLeft,.mobileNavRight{
    width: 50%;
    height: 40px;
    bottom: -40px;
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

    position: relative;
    max-height: 100vh;
    width: 100%;
    .swiper-slide {
        text-align: center;
        font-size: 38px;
        font-weight: 700;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
            max-height: 100vh;
        }
    }
    .swiper-pagination {
        > .swiper-pagination-bullet {
            background-color: red;
        }
    }
}
</style>
