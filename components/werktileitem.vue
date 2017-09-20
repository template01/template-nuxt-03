<template>
<nuxt-link :to="$i18n.locale === 'en' ? {path:'/werk/item', query: { lang: $i18n.locale }}:{path:'werk/'+datainput.slug}" class="werktile uk-width-1-2@m pink-background uk-padding uk-inline uk-transition-toggle" :style="{'background-color':datainput.acf['background-color']}">



<!-- {{datainput.pure_taxonomies.tags[0].name}} -->
  <h4>
    <span v-for="(type,index) in datainput.pure_taxonomies.tags">
      <span v-if="index<datainput.pure_taxonomies.tags.length - 1" v-html="type.name+ ' / ' "></span>
      <span v-else v-html="type.name"></span>
    </span>
  </h4>

  <div class="uk-padding uk-padding-remove-horizontal uk-padding-remove-top">


    <div class="uk-padding" uk-grid>

      <div v-for="item in datainput.acf.tile" :class="[item.size === 'half' ? {'uk-width-1-2@m':true}:{'uk-width-1-1@m':true}, item.type === 'image' ? 'uk-flex uk-flex-center uk-flex-middle':'']">
        <h1 v-if="item.acf_fc_layout === 'header'" class="uk-text-left hugeLetters" v-html="datainput.title.rendered"></h1>
        <!-- <img v-if="item.acf_fc_layout  === 'image' && item.image.sizes" :class="item.size === 'full' ? 'uk-padding uk-padding-remove-vertical' : ''" :src="item.image.sizes.large" /> -->

        <img v-if="item.acf_fc_layout  === 'image' && item.image.sizes" width="100%" :setwidth="item.image.sizes['large-width']" :setheight="item.image.sizes['large-height']" v-lazy="item.image.sizes.large" :data-srcset="item.image.sizes.small + ' 480w, ' + item.image.sizes.medium + ' 1024w, ' + item.image.sizes.large + ' 1600w, ' + item.image.sizes.xlarge + ' 1920w'"  class="lazyload"  :class="item.size === 'full' ? 'uk-padding uk-padding-remove-vertical' : ''"/>




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
