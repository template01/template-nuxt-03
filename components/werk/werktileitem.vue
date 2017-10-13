<template>
<nuxt-link :to="$i18n.locale === 'en' ? {path:'/werk/item', query: { lang: $i18n.locale }}:{path:'werk/'+datainput.slug}" class="werktile uk-width-1-2@m uk-padding uk-inline uk-transition-toggle" :style="!inheritcolor ? {'background-color':datainput.acf['background-color'], 'color':datainput.acf['font_color']} : {'color': inheritcolorfont}">
  <div v-if="inheritcolor" :style="{'background': index % 2 == 0 ? inheritcolorfont : ''}" style="position:absolute; right:0; top:30px; width: 3px; height: calc(100% - 60px); ">
  </div>
  <div v-if="inheritcolor"  :style="{'background': inheritcolorfont }"  style="position:absolute; bottom:0; right:30px; height: 3px; width: calc(100% - 60px); ">
  </div>
<!--
  <h4 style="color:inherit;">
    <span v-for="(type,index) in datainput.pure_taxonomies.tags">
      <span v-if="index<datainput.pure_taxonomies.tags.length - 1" v-html="type.name+ ' / ' "></span>
      <span v-else v-html="type.name"></span>
    </span>
    <span v-if="datainput.acf['meta_what']">
      <br />
      <span v-html="datainput.acf['meta_what']"></span>
      <br />
    </span>
  </h4> -->
  <werkmeta :datainput="datainput"></werkmeta>

  <div class="uk-padding uk-padding-remove-horizontal uk-padding-remove-bottom">


    <div v-for="(item,index) in datainput.acf.tile" class="tileContent" :class="[item.size === 'half' ? {'uk-width-1-2@m':true}:{'uk-width-1-1@m':true}, item.type === 'image' ? 'uk-flex uk-flex-center uk-flex-middle':'', index===0 ? {'uk-padding uk-padding-remove-horizontal uk-padding-remove-top':true}:{'':true}]">
      <h1 v-if="item.acf_fc_layout === 'header'" class="uk-text-left hugeLetters" v-html="datainput.title.rendered" style="color:inherit;"></h1>

      <img v-if="item.acf_fc_layout  === 'image' && item.image.sizes" width="100%" :setwidth="item.image.sizes['large-width']" :setheight="item.image.sizes['large-height']" v-lazy="item.image.sizes.large" :data-srcset="item.image.sizes.medium + ' 480w, ' + item.image.sizes.medium + ' 1024w, ' + item.image.sizes.large + ' 1600w, ' + item.image.sizes.xlarge + ' 1920w'"
      class="lazyload" :class="item.size === 'full' ? '' : ''" />

      <div v-if="item.acf_fc_layout === 'text'" class="uk-text-left uk-h4" v-html="item.text" style="color:inherit;"></div>
    </div>


  </div>
  <div class="uk-width-1-1@m uk-padding  uk-transition-slide-right-medium uk-position-bottom">
    <p class="uk-text-left uk-h2 uk-text-right uk-margin-remove-bottom" style="color:inherit;">{{$t("readmore")}} <i class="icon-right-1" style=""></i></span></p>
  </div>


</nuxt-link>
</template>
<script>
import axios from 'axios'
import werkmeta from '~/components/werk/werkmeta.vue'



export default {
  data: function() {
    return {}
  },
  components:{
    werkmeta
  },
  props: ['datainput','inheritcolor','inheritcolorfont','inheritcolorbackground','index']

}
</script>
<style lang="scss" scoped>
.werktile {
    overflow-x: hidden;
    text-decoration: none;
    color: #101010;
    &:hover{
      box-shadow: inset 0 -0px 0 0 !important;
    }
}

.tileContent{
  *{
    margin: 0;
  }
  *:last-child{

  }
}
.uk-grid > * {
    // padding-left: 0px !important;
}
</style>
