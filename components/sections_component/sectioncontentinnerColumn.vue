<template>
<div :class="{'uk-grid-collapse':section.collapse_column }"  uk-grid>
    <div v-for="sectionColumn in section.content" :class="'uk-width-1-'+section.content.length" >
      <sectioncontentinner :columnlayout=true :section="sectionColumn"></sectioncontentinner>
    </div>
</div>
</template>
<script>
// import VueLazyload from 'vue-lazyload'
import sectioncontentinner from '~/components/sections_component/sectioncontentinner.vue'


export default {


  props: ['section', 'topcontent'],

  components: {
    sectioncontentinner
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

@media (max-width: 640px) {
  img{
    padding: 0;
  }
}
</style>
