<template>
<div class="uk-padding">
  <div :style="{'color':passedmenucolor}" class="uk-grid uk-child-width-expand@s" uk-grid>
    <div>
      <nuxt-link v-if="$i18n.locale === 'en'" :to="{path:'/werk', query: { lang: 'en' }}">
        <h1>{{$t("menu.topmenu.work")}}</h1></nuxt-link>
      <nuxt-link v-else :to="{path:'/werk'}">
        <h1>{{$t("menu.topmenu.work")}}</h1></nuxt-link>
    </div>

    <div>
      <nuxt-link v-if="$i18n.locale === 'en'" :to="{path:'/werkwijze', query: { lang: 'en' }}">
        <h1>{{$t("menu.topmenu.how")}}</h1></nuxt-link>
      <nuxt-link v-else :to="{path:'/werkwijze'}">
        <h1>{{$t("menu.topmenu.how")}}</h1></nuxt-link>
    </div>

    <div>
      <nuxt-link v-if="$i18n.locale === 'en'" :to="{path:'/contact', query: { lang: 'en' }}">
        <h1>{{$t("menu.topmenu.contact")}}</h1></nuxt-link>
      <nuxt-link v-else :to="{path:'/contact'}">
        <h1>{{$t("menu.topmenu.contact")}}</h1></nuxt-link>
    </div>
    <!--
    <div>
      <nuxt-link v-if="$i18n.locale === 'en'" :to="{path:'/contact', query: { lang: 'en' }}">
        <h1>{{$t("menu.topmenu.contact")}}</h1></nuxt-link>
      <nuxt-link v-else :to="{path:'/contact'}">
        <h1>{{$t("menu.topmenu.contact")}}</h1></nuxt-link>
    </div>
    -->
    <div  class="uk-padding-small uk-padding-remove-horizontal uk-padding-remove-bottom">

      <h3><nuxt-link :to="{}" replace>NL</nuxt-link> / <nuxt-link :to="{query: { lang: 'en' }}">EN</nuxt-link></h3>

      <div>
        <nuxt-link v-if="$i18n.locale === 'en'" :to="{path:'/over', query: { lang: 'en' }}">
          <h3>{{$t("menu.topmenu.about")}}</h3></nuxt-link>
        <nuxt-link v-else :to="{path:'/over'}">
          <h3>{{$t("menu.topmenu.about")}}</h3></nuxt-link>
      </div>
      <div  v-if="$route.path != '/'">
        <nuxt-link v-if="$i18n.locale === 'en'" :to="{path:'/', query: { lang: 'en' }}">
          <h3>{{$t("menu.topmenu.index")}}</h3></nuxt-link>
        <nuxt-link v-else :to="{path:'/'}">
          <h3>{{$t("menu.topmenu.index")}}</h3></nuxt-link>
      </div>

    </div>

  </div>
</div>
</template>
<script>
export default {
  data: function() {
    return {}
  },
  props: ['passedmenucolor'],
  mounted() {}
}
</script>
<style lang="scss" scoped>
h1,h3 {
    color: inherit;
}
a {
    color: inherit;
}
</style>
