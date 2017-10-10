<template>
<div :uk-parallax="getsmallscreen ? '' : 'y: -50,0%; viewport: 0.5'">

  <div class="black-background uk-position-relative" :class="{'uk-padding ':getsmallscreen}">
    <div class="slantTopLeft"></div>
  </div>

  <div class="black-background beige-color-force">
    <div class="uk-container uk-padding">
      <nuxt-link class="" :to="$i18n.locale === 'en' ? {path:this.nextProject, query: { lang: $i18n.locale }}:{path:nextProject ? nextProject : firstProject }">
        <div class="slide-item-right">
          <h2 class="uk-text-center">Next Project -><br /><br /></h2>
        </div>
      </nuxt-link>
    </div>
  </div>

  <div class="beige-background uk-position-relative" :class="{'uk-padding ':getsmallscreen}">
    <div class="slantTopLeft"></div>
  </div>
</div>
</template>
<script>
export default {
  data: function() {
    return {}
  },

  props: ['nextProject', 'prevProject', 'firstProject'],
}
</script>
<style lang="scss">

</style>
