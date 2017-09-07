<template>
<div class="">
  <div :style="{'color':passedmenucolor}" class="uk-grid uk-child-width-expand@s" uk-grid>
    <div>
      <nuxt-link v-if="$i18n.locale === 'en'" :to="{path:'/werk', query: { lang: 'en' }}">
        <h1>{{$t("menu.topmenu.work")}}</h1></nuxt-link>
      <nuxt-link v-else :to="{path:'/werk'}">
        <h1>{{$t("menu.topmenu.work")}}</h1></nuxt-link>
    </div>

    <div>
      <nuxt-link v-if="$i18n.locale === 'en'" :to="{path:'/over', query: { lang: 'en' }}">
        <h1>{{$t("menu.topmenu.about")}}</h1></nuxt-link>
      <nuxt-link v-else :to="{path:'/over'}">
        <h1>{{$t("menu.topmenu.about")}}</h1></nuxt-link>
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
    <div class="uk-padding-small uk-padding-remove-horizontal uk-padding-remove-bottom">
      <h4>
      <span><nuxt-link :to="{}" replace>NL</nuxt-link> / <nuxt-link :to="{query: { lang: 'en' }}">EN</nuxt-link></span>
<!--
      <div>
        <nuxt-link v-if="$i18n.locale === 'en'" :to="{path:'/over', query: { lang: 'en' }}">
          <span>{{$t("menu.topmenu.about")}}</span></nuxt-link>
        <nuxt-link v-else :to="{path:'/over'}">
          <span>{{$t("menu.topmenu.about")}}</span></nuxt-link>
      </div> -->
      <div  v-if="$route.path != '/'">
        <nuxt-link v-if="$i18n.locale === 'en'" :to="{path:'/', query: { lang: 'en' }}">
          <span>{{$t("menu.topmenu.index")}}</span>
          <span uk-icon="icon: arrow-up"></span>
        </nuxt-link>
        <nuxt-link v-else :to="{path:'/'}">
          <span>{{$t("menu.topmenu.index")}}</span>
          <span uk-icon="icon: arrow-up"></span>
        </nuxt-link>
      </div>
</h4>
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
h1,
h4 {
    color: inherit;
}
a {
    color: inherit;
}
</style>
