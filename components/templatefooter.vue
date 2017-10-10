<template>
<div class="uk-container beige-background" id="templatefooter">

  <div class="uk-padding uk-padding-remove-horizontal uk-align-center ignoreWidthSmallScreen" :class="{'uk-width-1-1 ':!getsmallscreen}">
    <div class="uk-grid-match" uk-grid>
      <h1 v-if="ignoreFirstColumn " class="uk-visible@m hugeLetters uk-width-1-2@m" v-html="passHeader"></h1>
      <div id="firstColContact" v-if="!ignoreFirstColumn" class="uk-visible@m uk-width-1-2@m ">
        <clock :footer="true"></clock>
        <nowlistening :footer="true"></nowlistening>
      </div>
      <div v-if="ignoreSecondColumn" class="uk-width-1-2@m">
        <div class="uk-inline">
          <h4 class="uk-position-bottom-right uk-width-1-2@m uk-text-right "><span v-html="$t('contact.thanks')"></span><span class="changeMonkey"></span></h4></div>

      </div>
      <div v-if="!ignoreSecondColumn" class="uk-width-1-4@m">
        <div class="uk-inline">
          <h4 :class="{'uk-position-bottom ':!getsmallscreen}" v-html="$t('contact.a')"></h4></div>
      </div>
      <div v-if="!ignoreSecondColumn" class="uk-width-1-4@m">
        <div class="uk-inline">
          <h4 :class="{'uk-position-bottom ':!getsmallscreen}" v-html="$t('contact.b')"></h4></div>
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
  props: ['ignoreFirstColumn', 'ignoreSecondColumn', 'passHeader'],
  mounted() {}
}
</script>
<style lang="scss">
#templatefooter {



    @media (min-width: 960px) {
      padding-top: 60px;

    }


    * {
        color: inherit;
    }


    &:not(#firstColContact a){

      a {
        color: inherit;
        margin-left: 20px;
        display: inline-block;
      }
    }
}
h4 {
    margin-bottom: 0;
}
@keyframes changeMonkeyAnimation {
    0% {
        content: " 🙈";
    }
    100% {
        content: " 🙉";
    }
}

.changeMonkey {
    &:after {
        animation: changeMonkeyAnimation 1s linear infinite alternate;
        content: " 🙈";
    }
}
</style>
