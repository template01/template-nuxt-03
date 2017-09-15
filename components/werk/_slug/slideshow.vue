<template>
  <div class="my-swiper" v-swiper:mySwiper="swiperOption">
    <div class="swiper-wrapper">
      <!-- <div class="swiper-pagination swiper-pagination-bullets"></div> -->
      <div :style="{'background-color':backgroundcolor}" class="swiper-slide" v-for="slide in slides">
        <img :src="slide.url">
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
        effect:'fade',
        pagination: '.swiper-pagination',
        paginationElement: 'li',
        onSlideChangeEnd: swiper => {
          console.log('onSlideChangeEnd', swiper.realIndex)
        },
        onTap: swiper => {
          console.log('onTap', swiper.realIndex)
        },
        onClick: swiper => {
          swiper.slideNext();
        },
      }
    }
  },

  props: ['slides','backgroundcolor'],
  mounted() {}
}
</script>

<style lang="scss" scoped>
  .my-swiper {
    position: relative;
    max-height: 80vh;
    width: 100%;
    .swiper-slide {
      text-align: center;
      font-size: 38px;
      font-weight: 700;
      display: flex;
      justify-content: center;
      align-items: center;
      img{
        max-height: 80vh;
      }
    }
    .swiper-pagination {
      > .swiper-pagination-bullet {
        background-color: red;
      }
    }
  }
</style>
