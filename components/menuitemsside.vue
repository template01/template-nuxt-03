<template>
<div class="uk-padding">
  <div class="">
    <div>
      <nuxt-link v-if="$i18n.locale === 'en'" :to="{path:'/werk', query: { lang: 'en' }}">
        <h3>{{$t("menu.topmenu.work")}}</h3></nuxt-link>
      <nuxt-link v-else :to="{path:'/werk'}">
        <h3>{{$t("menu.topmenu.work")}}</h3></nuxt-link>
    </div>

    <div>
      <nuxt-link v-if="$i18n.locale === 'en'" :to="{path:'/werk`wijze', query: { lang: 'en' }}">
        <h3>{{$t("menu.topmenu.how")}}</h3></nuxt-link>
      <nuxt-link v-else :to="{path:'/werkwijze'}">
        <h3>{{$t("menu.topmenu.how")}}</h3></nuxt-link>
    </div>

    <div>
      <nuxt-link v-if="$i18n.locale === 'en'" :to="{path:'/over', query: { lang: 'en' }}">
        <h3>{{$t("menu.topmenu.about")}}</h3></nuxt-link>
      <nuxt-link v-else :to="{path:'/over'}">
        <h3>{{$t("menu.topmenu.about")}}</h3></nuxt-link>
    </div>
    <!--
    <div>
      <nuxt-link v-if="$i18n.locale === 'en'" :to="{path:'/contact', query: { lang: 'en' }}">
        <h3>{{$t("menu.topmenu.contact")}}</h3></nuxt-link>
      <nuxt-link v-else :to="{path:'/contact'}">
        <h3>{{$t("menu.topmenu.contact")}}</h3></nuxt-link>
    </div>
    -->
    <div>

      <h3><nuxt-link :to="{}" replace>NL</nuxt-link> / <nuxt-link :to="{query: { lang: 'en' }}">EN</nuxt-link></h3>

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
h3 {
    color: inherit;
}
a {
    color: inherit;
}
</style>
