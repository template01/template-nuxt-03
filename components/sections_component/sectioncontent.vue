<template>
<div class=" uk-padding uk-padding-remove-horizontal" :class="ignorePaddingBottom ? 'uk-padding-remove-bottom' : ''">
  <div class="uk-width-1-1@m"  v-for="section in acfsection">
    <div class="uk-align-center sectionPart" :class="[setWidth(section.width)]">

      <sectioncontentinner v-if="section.acf_fc_layout != 'column'" :topcontent="topcontent" :section="section"></sectioncontentinner>
      <sectioncontentinnerColumn v-else :topcontent="topcontent" :section="section"></sectioncontentinnerColumn>

    </div>
  </div>


</div>
</template>
<script>
import sectioncontentinner from '~/components/sections_component/sectioncontentinner.vue'
import sectioncontentinnerColumn from '~/components/sections_component/sectioncontentinnerColumn.vue'


export default {
  props: ['acfsection','topcontent','ignorePaddingBottom'],
  components: {
    sectioncontentinner,
    sectioncontentinnerColumn
  },
  methods: {
    setWidth: function(width) {
      if (width === "1/3") {
        return {
          'uk-width-1-3@m': true
        }
      }
      if (width === "1/2") {
        return {
          'uk-width-1-2@m': true
        }
      }

      if (width === "2/3") {
        return {
          'uk-width-2-3@m': true
        }
      }
      if (width === "5/6") {
        return {
          'uk-width-5-6@m': true
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
*{
  color: inherit;
}
em{
  color: blue;
}
</style>
