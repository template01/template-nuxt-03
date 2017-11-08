<template>
<div class="nextProject" :uk-parallax="issmallscreen ? '' : 'y: -50,0%; viewport: 0.5'" :style="{'background':backgroundcolor}">
  <div class="" >
    <div class="slantTopLeft"></div>
  </div>

  <div class="">
    <div class="uk-container uk-padding">
      <nuxt-link class="" :to="$i18n.locale === 'en' ? {path:nextProject ? nextProject : firstProject, query: { lang: $i18n.locale }}:{path:nextProject ? nextProject : firstProject }">
        <div class="slide-item-right">
          <h2 :style="[issmallscreen ? {'line-height ':'0','margin-bottom':'0'}:{'margin-bottom':'0'},{'color':fontcolor}]" class="uk-text-center">{{$t("nextproject")}} <i class="icon-right-1" style=""></i></span><br /><br /></h2>
        </div>
      </nuxt-link>

      <!-- solution with acf -->

      <!-- <nuxt-link class="" :to="{path:nextProject, query: { lang: $i18n.locale }}">
        <div class="slide-item-right">
          <h2 :style="[issmallscreen ? {'line-height ':'0','margin-bottom':'0'}:{'margin-bottom':'0'},{'color':fontcolor}]" class="uk-text-center">{{$t("nextproject")}} <i class="icon-right-1" style=""></i></span><br /><br /></h2>
        </div>
      </nuxt-link> -->

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

  props: ['nextProject', 'prevProject', 'firstProject','backgroundcolor','fontcolor'],
}
</script>
<style lang="scss" scoped>
  .nextProject{
    background: inherit;
    *{
      color: inherit;
    }
  }
</style>
