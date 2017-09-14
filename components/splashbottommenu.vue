<template>
<div class="uk-padding uk-container uk-container-center" id="splashbottommenu">
  <div class="">
    <div :style="{'color':menucolor}" class="uk-align-center uk-width-5-6 uk-visible@m">
      <div>
        <clock></clock>
        <nowlistening></nowlistening>
      </div>
    </div>

    <div :style="{'color':menucolor}" class="uk-align-center uk-hidden@m">

      <div>
        <h1 class="hugeLetters" :style="{'color':menucolor}">Studio</h1>
        <menuitemsmobile :floatleft="true" ></menuitemsmobile>
        <!-- <clock></clock> -->
        <!-- <nowlistening></nowlistening> -->
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
