<template>
<div class="uk-padding uk-container uk-container-center" id="splashbottommenu">
  <div class="">
    <div :style="{'color':menucolor}" id="splashbottommenuDefault" class="uk-align-center uk-width-1-1 uk-visible@m ignoreWidthSmallScreen uk-margin-remove-bottom">
      <div>
        <clock></clock>
        <nowlistening></nowlistening>
      </div>
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
    clock,

  },
  data: function() {
    return {

    }
  },
  props: ['menucolor'],

}
</script>
<style lang="scss">
#splashbottommenu {

  // display: NONE;

  #splashbottommenuDefault{
    transition: color 0.10s;
    transition-delay: 0.25s;
  }


    #splashbottommenuMobile{
      transition: color 0.10s;
      transition-delay: 0.25s;
    }


    position: fixed;
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
