<template>
<div class="uk-padding uk-container uk-container-center" id="splashbottommenu">
  <div class="">
      <div :style="{'color':menucolor}" class="uk-width-5-6 uk-align-center">
        <div>

          <!-- <div class="uk-container uk-visible@m" id="">
            <div class="uk-padding uk-padding-remove-horizontal" id="menudefault">
              <menuitems class="uk-width-5-6 uk-align-center"></menuitems>
            </div>
          </div> -->

          <menuitemsmobile :floatleft="true" class="uk-hidden@m"></menuitemsmobile>
          <clock></clock>
          <nowlistening></nowlistening>

        </div>

        <!-- <div class="uk-flex uk-flex-bottom">
          <nuxt-link v-if="$i18n.locale === 'en'" :to="{path:'/contact', query: { lang: 'en' }}">
            <h1 class="uk-margin-remove">{{$t("menu.topmenu.contact")}}</h1></nuxt-link>
          <nuxt-link v-else :to="{path:'/contact'}">
            <h1 class="uk-margin-remove">{{$t("menu.topmenu.contact")}}</h1></nuxt-link>
        </div> -->

      </div>
  </div>
</div>
</template>
<script>
import menuitemsmobile from '~/components/menuitemsmobile.vue'
import nowlistening from '~/components/nowlistening.vue'
import clock from '~/components/clock.vue'

export default {
  components: {
    nowlistening,
    menuitemsmobile,
    clock
  },
  data: function() {
    return {}
  },
  props: ['menucolor'],
  mounted() {}
}
</script>
<style lang="scss">
#splashbottommenu {
    position: absolute;
    bottom: 0;
    width: calc(100% - 80px);

    * {
        color: inherit;
    }
    a {
        color: inherit;
        font-size: in;
    }
}
</style>
