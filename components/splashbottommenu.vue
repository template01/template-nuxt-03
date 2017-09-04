<template>
<div class="uk-padding uk-container uk-container-center" id="splashbottommenu">
  <div class="uk-padding">
    <div class="uk-padding">
      <div :style="{'color':menucolor}" class="uk-grid uk-child-width-expand@s" uk-grid>
        <div>
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
</div>
</template>
<script>
import nowlistening from '~/components/nowlistening.vue'
import clock from '~/components/clock.vue'

export default {
  components: {
    nowlistening,
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

    h1 {
        color: inherit;
    }
    a {
        color: inherit;
        font-size: in;
    }
}
</style>
