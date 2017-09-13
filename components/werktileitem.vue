<template>
<nuxt-link :to="$i18n.locale === 'en' ? {path:'/werk/item', query: { lang: $i18n.locale }}:{path:'werk/'+datainput.slug}" class="werktile uk-width-1-2@m pink-background uk-padding uk-inline uk-transition-toggle" :style="{'background-color':datainput.acf['background-color']}">


  <h5>
    <span v-for="(type,index) in datainput.acf.meta_type">
      <span v-if="index<datainput.acf.meta_type.length - 1" v-html="type+ ' / ' "></span>
      <span v-else v-html="type"></span>
    </span>
  </h5>

  <div class="uk-padding uk-padding-remove-horizontal uk-padding-remove-top">


    <div class="uk-padding" uk-grid>

      <div v-for="item in datainput.acf.tile" :class="[item.size === 'half' ? {'uk-width-1-2@m':true}:{'uk-width-1-1@m':true}, item.type === 'image' ? 'uk-flex uk-flex-center uk-flex-middle':'']">
        <h1 v-if="item.acf_fc_layout === 'header'" class="uk-text-left hugeLetters" v-html="datainput.title.rendered"></h1>
        <img v-if="item.acf_fc_layout  === 'image' && item.image.sizes" :class="item.size === 'full' ? 'uk-padding uk-padding-remove-vertical' : ''" :src="item.image.sizes.large" />
        <div v-if="item.acf_fc_layout === 'text'" class="uk-text-left uk-h4" v-html="item.text"></div>
      </div>

    </div>
    <div class="uk-width-1-1@m uk-padding  uk-transition-slide-right-medium uk-position-bottom">
      <p class="uk-text-left uk-h1 uk-text-right uk-margin-remove-bottom">{{$t("readmore")}}<span uk-icon="icon: arrow-down; ratio: 2"></span></p>
    </div>

  </div>

</nuxt-link>
</template>
<script>
import axios from 'axios'


export default {
  data: function() {
    return {}
  },
  props: ['datainput']

}
</script>
<style lang="scss" scoped>
.werktile {
    overflow-x: hidden;
    text-decoration: none;
}
</style>
