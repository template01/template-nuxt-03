<template>
<div class=" uk-padding uk-padding-remove-horizontal" uk-grid>

  <div class="uk-width-1-1@m"  v-for="section in acfsection">
    <div class="uk-align-center" :class="[setWidth(section.width)]">
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
    }


  },


}
</script>
<style lang="scss" scoped>
.werktile {
    overflow-x: hidden;

}
</style>
