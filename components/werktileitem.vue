<template>
<div :style="{'background-color':datainput.acf['background-color']}"class="werktile uk-width-1-2@m pink-background uk-padding uk-inline uk-transition-toggle">


  <h5>Webdesign / Strategy</h5>

  <div class="uk-padding uk-padding-remove-horizontal uk-padding-remove-top" >
    <nuxt-link  :to="$i18n.locale === 'en' ? {path:'/werk/item', query: { lang: $i18n.locale }}:{path:'/contact'}">

      <div class="uk-padding" uk-grid>

        <div v-for="item in datainput.acf.tile" :class="[item.size === 'half' ? {'uk-width-1-2@m':true}:{'uk-width-1-1@m':true}, item.type === 'image' ? 'uk-flex uk-flex-center uk-flex-middle':'']">
          <h1 v-if="item.acf_fc_layout === 'header'" class="uk-text-left hugeLetters" v-html="datainput.title.rendered"></h1>
          <img v-if="item.acf_fc_layout  === 'image'" :class="item.size === 'full' ? 'uk-padding uk-padding-remove-vertical' : ''" :src="item.image.sizes.large" />
          <p v-if="item.acf_fc_layout === 'text'" class="uk-text-left uk-h4"  v-html="item.text"></p>
        </div>

      </div>
      <div class="uk-width-1-1@m uk-padding  uk-transition-slide-right-medium uk-position-bottom">
        <p class="uk-text-left uk-h1 uk-text-right uk-margin-remove-bottom">{{$t("readmore")}}<span uk-icon="icon: arrow-down; ratio: 2"></span></p>
      </div>

    </nuxt-link>
  </div>

</div>

</template>
<script>

import axios from 'axios'

import {
  mapGetters
} from 'vuex'


export default {
  data: function() {
    return {
    }
  },
  props: ['datainput'],
  computed: {
    ...mapGetters({
     getlocale: "getlocale",
   }),
 },

}
</script>
<style lang="scss" scoped>
.werktile{
  overflow-x: hidden;

}
</style>
