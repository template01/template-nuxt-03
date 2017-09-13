<template>
<div uk-grid>

  <div v-if="section.align === 'float'" :class="[setWidth(section.width)]" v-for="section in acfsection">
    <oversectioncontentinner :section="section"></oversectioncontentinner>
  </div>

  <div v-else class="uk-width-1-1@m uk-inline">
    <div :class="[setWidth(section.width), setAlign(section.align)]">
      <oversectioncontentinner :section="section"></oversectioncontentinner>
    </div>
  </div>


</div>
</template>
<script>
import oversectioncontentinner from '~/components/over/oversectioncontentinner.vue'


export default {
  props: ['acfsection'],
  components: {
    oversectioncontentinner
  },
  methods: {
    setWidth: function(width) {
      if (width === "1/3") {
        return {
          'uk-width-1-3@m': true
        }
      }
      if (width === "2/3") {
        return {
          'uk-width-2-3@m': true
        }
      }
      if (width === "3/3") {
        return {
          'uk-width-1-1@m': true
        }
      }
    },

    setAlign: function(align) {
      if (align === "float") {
        return {
          '': true
        }
      }
      if (align === "left") {
        return {
          'uk-align-left': true
        }
      }
      if (align === "right") {
        return {
          'uk-align-right': true
        }
      }
      if (align === "center") {
        return {
          'uk-align-center': true
        }
      }
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
.werktile {
    overflow-x: hidden;

}
</style>
