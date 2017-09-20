<template>
<div class="uk-container uk-container-center" id="splashtopmenu">
  <div class="uk-padding uk-padding-remove-horizontal">

    <div class="uk-width-1-1 uk-align-center ignoreWidthSmallScreen" >

      <menuitems :passedmenucolor="menucolor"></menuitems>
    </div>
  </div>
</div>



</template>
<script>
import menuitems from '~/components/menuitems.vue'


export default {
  components: {
    menuitems,
  },
  data: function() {
    return {}
  },
  props: ['menucolor'],
  mounted() {}
}
</script>
<style lang="scss">
#splashtopmenu {
    position: absolute;
    width: calc(100% - 80px);
    // left: 0;

    h1 {
        color: inherit;
    }
    a {
        color: inherit;
    }
}
</style>
