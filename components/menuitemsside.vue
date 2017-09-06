<template>
<div class="uk-padding-small">
  <div class="">
    <div>
      <nuxt-link v-if="$i18n.locale === 'en'" :to="{path:'/werk', query: { lang: 'en' }}">
        <h4>{{$t("menu.topmenu.work")}}</h4></nuxt-link>
      <nuxt-link v-else :to="{path:'/werk'}">
        <h4>{{$t("menu.topmenu.work")}}</h4></nuxt-link>
    </div>

    <div>
      <nuxt-link v-if="$i18n.locale === 'en'" :to="{path:'/over', query: { lang: 'en' }}">
        <h4>{{$t("menu.topmenu.about")}}</h4></nuxt-link>
      <nuxt-link v-else :to="{path:'/over'}">
        <h4>{{$t("menu.topmenu.about")}}</h4></nuxt-link>
    </div>


    <div>
      <nuxt-link v-if="$i18n.locale === 'en'" :to="{path:'/contact', query: { lang: 'en' }}">
        <h4>{{$t("menu.topmenu.contact")}}</h4></nuxt-link>
      <nuxt-link v-else :to="{path:'/contact'}">
        <h4>{{$t("menu.topmenu.contact")}}</h4></nuxt-link>
    </div>

    <div>
      <nuxt-link v-if="$i18n.locale === 'en'" :to="{path:'/', query: { lang: 'en' }}">
        <h4>{{$t("menu.topmenu.index")}}</h4></nuxt-link>
      <nuxt-link v-else :to="{path:'/'}">
        <h4>{{$t("menu.topmenu.index")}}</h4></nuxt-link>
    </div>




    <div>

      <h4><nuxt-link :to="{}" replace>NL</nuxt-link> / <nuxt-link :to="{query: { lang: 'en' }}">EN</nuxt-link></h4>

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
h4 {
    color: inherit;
}
a {
    color: inherit;
}
</style>
