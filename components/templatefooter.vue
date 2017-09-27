<template>
<div class="uk-container" id="templatefooter">


  <div class="uk-padding uk-padding-remove-horizontal uk-align-center ignoreWidthSmallScreen" :class="{'uk-width-1-1 ':!getsmallscreen}" >
    <div class="uk-grid">
      <div class="uk-visible@m uk-width-1-3@m ">
        <clock :footer="true"></clock>
        <nowlistening :footer="true"></nowlistening>
      </div>
      <div class="uk-width-1-3@m">
        <h4 v-html="$t('contact.a')"></h4></div>
      <div class="uk-width-1-3@m">
        <h4 v-html="$t('contact.b')"></h4></div>
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
  a{
    color: inherit;
  }
}
</style>
