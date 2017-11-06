<template>
<div :class="[!topcontent ? 'uk-padding-remove-horizontal' : '', issmallscreen ? 'uk-padding-small':'uk-padding']">

  <div v-if="section.acf_fc_layout === 'title'">
    <!-- <h1 :class="[setTextAlign(section.text_align)]" class="hugeLetters" v-html="section.content" uk-parallax="opacity: 0,2; y: 100,0; viewport: 0.5"></h1> -->
    <h1 :class="[setTextAlign(section.text_align)]" class="hugeLetters" v-html="section.content"></h1>
  </div>

  <div v-if="section.acf_fc_layout === 'text_column'">
    <h2 v-if="!topcontent" class="" :style="{'color':'inherit'}" v-html="section.content"></h2>
    <h1 v-else class="" :style="{'color':'inherit'}" v-html="section.content"></h1>
  </div>

  <!-- <div v-if="section.acf_fc_layout === 'slideshow'" :class="[setWidth(item.width)]" class="uk-align-center uk-margin-remove-bottom"> -->
  <div v-if="section.acf_fc_layout === 'slideshow'" class="uk-align-center uk-margin-remove-bottom">
    <slideshow :hidemobilenav="true" :slides="section.slides"></slideshow>
  </div>


  <div v-if="section.acf_fc_layout === 'image'">


    <img width="100%" :setwidth="section.content.sizes['large-width']" :setheight="section.content.sizes['large-height']" v-lazy="section.content.url" :class="{'forcestretch':section.force_stretch,'uk-padding uk-padding-remove-vertical':!columnlayout}" :data-srcset="section.content.sizes.small + ' 480w, ' + section.content.sizes.medium + ' 1024w, ' + section.content.sizes.large + ' 1600w, ' + section.content.sizes.xlarge + ' 1920w'" class="lazyload uk-align-center"/>

    <div v-if="section.caption" class="caption uk-width-1-2@l uk-align-center uk-text-center">
      <h5 v-html="section.caption"></h5>
    </div>

  </div>
</div>
</template>
<script>
// import VueLazyload from 'vue-lazyload'
import slideshow from '~/components/werk/_slug/slideshow.vue'

export default {


  props: ['section', 'topcontent','columnlayout'],


  components: {
    slideshow,
  },

  methods: {

    returnHeight: function() {
      return '60px';
    },

    setTextAlign: function(align) {
      if (align === "left") {
        return {
          '': true
        }
      }
      if (align === "right") {
        return {
          'uk-text-right': true
        }
      }
      if (align === "center") {
        return {
          'uk-text-center': true
        }
      }
    },



  },


}
</script>

<style lang="scss" scoped>
* {
    color: inherit !important;
}
.forcestretch {
    width: 100% !important;
}

@media (max-width: 640px) {
  img{
    padding: 0;
  }
}
</style>
