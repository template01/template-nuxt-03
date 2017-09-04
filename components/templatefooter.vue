<template>
<div class="uk-padding" id="templatefooter">
  <div class="uk-grid-divider uk-child-width-expand@s" uk-grid>
    <div>
      <clock></clock>
      <nowlistening></nowlistening>
    </div>
    <div>
      <h4>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h4></div>
    <div>
      <h4>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</h4></div>
  </div>
</div>
</template>
<script>
import nowlistening from '~/components/nowlistening.vue'
import clock from '~/components/clock.vue'

export default {
  components: {
    nowlistening,
    clock
  },
  data: function() {
    return {}
  },
  mounted() {}
}
</script>
<style lang="scss">
#templatefooter {
    // position: absolute;
    // bottom: 0;
    width: 100%;
}
</style>
