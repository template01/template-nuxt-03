<template>
<div :class="!topcontent ? 'uk-padding uk-padding-remove-horizontal' : ''">

  <div v-if="section.acf_fc_layout === 'title'">
    <!-- <h1 :class="[setTextAlign(section.text_align)]" class="hugeLetters" v-html="section.content" uk-parallax="opacity: 0,2; y: 100,0; viewport: 0.5"></h1> -->
    <h1 :class="[setTextAlign(section.text_align)]" class="hugeLetters" v-html="section.content"></h1>
  </div>

  <div v-if="section.acf_fc_layout === 'text_column'">
    <h2 v-if="!topcontent" class="" :style="{'color':'inherit'}" v-html="section.content"></h2>
    <h1 v-else class="" :style="{'color':'inherit'}" v-html="section.content"></h1>
  </div>

  <div v-if="section.acf_fc_layout === 'image'">
    <!-- <img :class="{'forcestretch':section.force_stretch}" uk-scrollspy="cls: uk-animation-fade; repeat: true" class="uk-padding uk-padding-remove-vertical uk-align-center" :src="section.content.url" /> -->
    <!-- {{section.content.}} -->

    <!-- {{section.content.sizes.large}} -->
    <!-- {{section.content.sizes['large-width']}} -->
    <!-- {{section.content.sizes['large-height']}} -->


    <img width="100%" :setwidth="section.content.sizes['large-width']" :setheight="section.content.sizes['large-height']" v-lazy="section.content.url" :class="{'forcestretch':section.force_stretch}" :data-srcset="section.content.sizes.small + ' 480w, ' + section.content.sizes.medium + ' 1024w, ' + section.content.sizes.large + ' 1600w, ' + section.content.sizes.xlarge + ' 1920w'" class="lazyload uk-padding uk-padding-remove-vertical uk-align-center"/>




    <!-- <img  width="100%" height="20px" v-lazy="section.content.sizes.large" :class="{'forcestretch':section.force_stretch}" uk-scrollspy="cls: uk-animation-fade; repeat: true" class="uk-padding uk-padding-remove-vertical uk-align-center"/> -->
    <!-- <img :class="{'forcestretch':section.force_stretch}" uk-scrollspy="cls: uk-animation-fade; repeat: true" class="uk-padding uk-padding-remove-vertical uk-align-center" :src="section.content.url" /> -->
  </div>
</div>
</template>
<script>
// import VueLazyload from 'vue-lazyload'

export default {


  props: ['section', 'topcontent'],


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
    color: inherit;
}
.forcestretch {
    width: 100% !important;
}
</style>
