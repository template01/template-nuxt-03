<template>
<div class="uk-padding uk-container uk-container-center" id="splashtopmenu">
  <div class="uk-padding">

    <menuitems :passedmenucolor="menucolor"></menuitems>
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
