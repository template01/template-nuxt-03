<template>
<div :uk-parallax="issmallscreen ? '' : 'y: -50,0%; viewport: 0.5'">

  <div class="black-background uk-position-relative" :class="{'uk-padding ':issmallscreen}">
    <div class="slantTopLeft"></div>
  </div>

  <div class="black-background beige-color-force">
    <div class="uk-container uk-padding">
      <nuxt-link class="" :to="$i18n.locale === 'en' ? {path:this.nextProject, query: { lang: $i18n.locale }}:{path:nextProject ? nextProject : firstProject }">
        <div class="slide-item-right">
          <h2 class="uk-text-center">Next Project <i class="icon-right-1" style=""></i></span><br /><br /></h2>
        </div>
      </nuxt-link>
    </div>
  </div>

  <div class="beige-background uk-position-relative" :class="{'uk-padding ':issmallscreen}">
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
