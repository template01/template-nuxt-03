<template>
<div id="" :style="{'color':passedmenucolor}" uk-grid>

  <div class="uk-width-1-3">

    <h1 v-if="$i18n.locale === 'en'">Template <nuxt-link :to="{path:'/studio', query: { lang: 'en' }}">Studio</nuxt-link></h1>
    <h1 v-else>Template <nuxt-link :to="{path:'/studio'}">Studio</nuxt-link></h1>
  </div>

  <div class="uk-width-1-5  ">
    <div class="uk-padding uk-padding-remove-vertical uk-padding-remove-right">


      <nuxt-link v-if="$i18n.locale === 'en'" :to="{path:'/werk', query: { lang: 'en' }}">
        <h1>{{$t("menu.topmenu.work")}}</h1></nuxt-link>
      <nuxt-link v-else :to="{path:'/werk'}">
        <h1>{{$t("menu.topmenu.work")}}</h1></nuxt-link>
    </div>

  </div>

  <div class="uk-width-1-5 ">
    <div class="uk-padding uk-padding-remove-vertical uk-padding-remove-right">


      <nuxt-link v-if="$i18n.locale ===
    'en'" :to="{path:'/over', query: { lang: 'en' }}">
        <h1>{{$t("menu.topmenu.about")}}</h1></nuxt-link>
      <nuxt-link v-else :to="{path:'/over'}">
        <h1>{{$t("menu.topmenu.about")}}</h1></nuxt-link>
    </div>

  </div>


  <div class="uk-width-expand uk-padding-small uk-padding-remove-horizontal uk-padding-remove-bottom ">
    <h4 class="uk-text-right">
      <span class=""><nuxt-link :to="{}" replace>NL</nuxt-link> / <nuxt-link :to="{query: { lang: 'en' }}">EN</nuxt-link></span>
        <span  class="uk-padding  uk-padding-remove-right  uk-padding-remove-vertical"><nuxt-link v-if="$i18n.locale === 'en'" :to="{path:'/contact', query: { lang: 'en' }}">{{$t("menu.topmenu.contact")}}</nuxt-link>
        <nuxt-link v-else :to="{path:'/contact'}">{{$t("menu.topmenu.contact")}}</nuxt-link>
      </span>
      <span class="uk-padding  uk-padding-remove-right  uk-padding-remove-vertical" v-if="$route.path != '/'">
        <nuxt-link v-if="$i18n.locale === 'en'" :to="{path:'/', query: { lang: 'en' }}">
          <span>{{$t("menu.topmenu.index")}}</span>
          <!-- <span uk-icon="icon: arrow-up; ratio: 1.1"></span> -->
        </nuxt-link>
        <nuxt-link v-else :to="{path:'/'}">
          <span>{{$t("menu.topmenu.index")}}</span>
          <!-- <span uk-icon="icon: arrow-up; ratio: 1.1"></span> -->
        </nuxt-link>
      </span>
      </h4>
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
