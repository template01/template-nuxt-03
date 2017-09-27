<template>
<div class=" uk-padding uk-padding-remove-horizontal" :class="ignorePaddingBottom ? 'uk-padding-remove-bottom' : ''">
  <div class="uk-width-1-1@m"  v-for="section in acfsection">
    <div class="uk-align-center" :class="[setWidth(section.width)]">
      <sectioncontentinner :topcontent="topcontent" :section="section"></sectioncontentinner>
    </div>
  </div>


</div>
</template>
<script>
import sectioncontentinner from '~/components/sections_component/sectioncontentinner.vue'


export default {
  props: ['acfsection','topcontent','ignorePaddingBottom'],
  components: {
    sectioncontentinner
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
