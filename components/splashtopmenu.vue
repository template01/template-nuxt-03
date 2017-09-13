<template>
<div class="uk-container uk-container-center" id="splashtopmenu">
  <div class="uk-padding uk-padding-remove-horizontal">


      <menuitems class="uk-width-5-6 uk-align-center" :passedmenucolor="menucolor"></menuitems>
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
