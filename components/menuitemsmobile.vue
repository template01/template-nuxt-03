<template>
<div :class="{floatitemsleft:floatleft}">
  <div >
    <div>
      <nuxt-link v-if="$i18n.locale === 'en'" :to="{path:'/werk', query: { lang: 'en' }}">
        <h4>{{$t("menu.topmenu.work")}}</h4></nuxt-link>
      <nuxt-link v-else :to="{path:'/werk'}">
        <h4>{{$t("menu.topmenu.work")}}</h4></nuxt-link>
    </div>

    <div>
      <nuxt-link v-if="$i18n.locale === 'en'" :to="{path:'/services', query: { lang: 'en' }}">
        <h4>{{$t("menu.topmenu.services")}}</h4></nuxt-link>
      <nuxt-link v-else :to="{path:'/services'}">
        <h4>{{$t("menu.topmenu.services")}}</h4></nuxt-link>
    </div>

    <div>
      <nuxt-link v-if="$i18n.locale === 'en'" :to="{path:'/contact', query: { lang: 'en' }}">
        <h4>{{$t("menu.topmenu.contact")}}</h4></nuxt-link>
      <nuxt-link v-else :to="{path:'/contact'}">
        <h4>{{$t("menu.topmenu.contact")}}</h4></nuxt-link>
    </div>
    <!--
    <div>
      <nuxt-link v-if="$i18n.locale === 'en'" :to="{path:'/contact', query: { lang: 'en' }}">
        <h4>{{$t("menu.topmenu.contact")}}</h4></nuxt-link>
      <nuxt-link v-else :to="{path:'/contact'}">
        <h4>{{$t("menu.topmenu.contact")}}</h4></nuxt-link>
    </div>
    -->
    <div class="">

      <span  v-if="$route.path != '/'">
        <nuxt-link v-if="$i18n.locale === 'en'" :to="{path:'/', query: { lang: 'en' }}">
          <h4>{{$t("menu.topmenu.index")}}</h4></nuxt-link>
        <nuxt-link v-else :to="{path:'/'}">
          <h4>{{$t("menu.topmenu.index")}}</h4></nuxt-link>
      </span>

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
  props: ['passedmenucolor','floatleft'],
  mounted() {}
}
</script>
<style lang="scss" scoped>

.floatitemsleft{
    h4{
      // float: left;
      margin-right: 20px;
      margin-top: 0;
      margin-bottom: 0px;
    }
    display: inline-block;
}

h1,h4 {
    color: inherit;
}
a {
    color: inherit;
}
</style>
