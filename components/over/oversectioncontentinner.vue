<template>
  <div  class="uk-padding uk-padding-remove-horizontal">

    <div v-if="section.acf_fc_layout === 'title'">
      <!-- <h1 :class="[setTextAlign(section.text_align)]" class="hugeLetters" v-html="section.content" uk-parallax="opacity: 0,2; y: 100,0; viewport: 0.5"></h1> -->
      <h1 :class="[setTextAlign(section.text_align)]" class="hugeLetters" v-html="section.content"></h1>
    </div>

    <div v-if="section.acf_fc_layout === 'text_column'">
      <h2 class="" v-html="section.content"></h2>
    </div>

    <div v-if="section.acf_fc_layout === 'image'">
      <!-- <img :class="{'forcestretch':section.force_stretch}" uk-scrollspy="cls: uk-animation-fade; repeat: true" class="uk-padding uk-padding-remove-vertical uk-align-center" :src="section.content.url" /> -->
      <img :class="{'forcestretch':section.force_stretch}" uk-scrollspy="cls: uk-animation-fade; repeat: true" class="uk-padding uk-padding-remove-vertical uk-align-center" :src="section.content.url" />
    </div>
  </div>

</template>
<script>
export default {
  props: ['section'],


  methods: {

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
.forcestretch{
  width: 100%;
}
</style>
