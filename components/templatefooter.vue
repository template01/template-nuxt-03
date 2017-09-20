<template>
<div class="uk-container" id="templatefooter">


  <div class="uk-padding uk-padding-remove-horizontal uk-align-center ignoreWidthSmallScreen" :class="{'uk-width-1-1 ':!getsmallscreen}" >
    <div class="uk-child-width-expand@s" uk-grid>
      <div class="uk-visible@m">
        <clock :footer="true"></clock>
        <nowlistening :footer="true"></nowlistening>
      </div>
      <div>
        <h4>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h4></div>
      <div>
        <h4>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</h4></div>
    </div>
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
#templatefooter{
  background-color: inherit;
}
</style>
