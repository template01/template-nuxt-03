<template>
<defaultpage class="beige-background" id="werk">


  <div class="beige-background uk-container uk-padding uk-padding-remove-horizontal uk-padding-remove-top  uk-hidden@m ">
    <h1 class="uk-text-center uk-padding "><span class="mobilePageHeader">{{$t("menu.topmenu.work")}}</span></h1>
  </div>


  <div id="" class="section section-last" :style="{'color':content.acf.section_a.background_color,'background-color':content.acf.section_a.background_color}" :uk-parallax="getsmallscreen ? 'y: 0,0; viewport: 0.4' : 'y: 0,0; viewport: 0.4'">
    <div class="slantTopLeft" :style="{'border-color': 'transparent '+content.acf.section_a.background_color+' '+content.acf.section_a.background_color+' transparent'}"></div>

    <div class="uk-container" :style="{'color':content.acf.section_a.font_color}">
        <sectioncontent :ignorePaddingBottom="true" :acfsection="content.acf.section_a.content"></sectioncontent>
        <div class="uk-padding uk-padding-remove-horizontal uk-padding-remove-top">
          <!-- <p class="uk-text-center uk-h2 uk-margin-remove uk-padding uk-padding-remove-top" style="padding-right:20px; user-select: none;"><span style="cursor:pointer;" @click="goToWorkItems" id="slideMeDownHover" >Recente projecten <span uk-icon="icon: arrow-down; ratio: 1.5" class="uk-icon"></span></span></p> -->
          <!-- <p class="uk-text-center uk-h2 uk-margin-remove uk-padding uk-padding-remove-top" style="padding-right:20px; user-select: none;"><span >Recente projecten <span uk-icon="icon: arrow-down; ratio: 1.5" class="uk-icon"></span></span></p> -->
        </div>
    </div>

  </div>

  <div  class="section section-last" :style="{'color':content.acf.section_a.background_color,'background-color':content.acf.section_a.background_color}">

    <div class="uk-container " :style="{'background':content.acf.section_a.background_color}"  >
      <div class="killPadding " id="workitems" :uk-parallax="getsmallscreen ? '' : 'y: 300,0; viewport: 0.2'" :style="getsmallscreen ? {} :{'margin-top':'-300px'}">

        <div class=" uk-grid-collapse uk-text-center" uk-grid uk-height-match>
          <werktileitem v-bind:key="tile.id" v-for="tile in tiles" :datainput="tile"></werktileitem>

        </div>
      </div>
    </div>

  </div>
</defaultpage>
</template>

<script>
import axios from 'axios'
import defaultpage from '~/components/defaultpage.vue'
import sectioncontent from '~/components/sections_component/sectioncontent.vue'
import werktileitem from '~/components/werktileitem.vue'



export default {

  components: {
    defaultpage,
    sectioncontent,
    werktileitem
  },
  data: function() {
    return {
      // actualContent: null,
      hideinitialcontent: false
    }
  },


  async asyncData({
    params,
    query,
    error
  }) {
    if (query.hasOwnProperty('lang')) {
        let [contentRes, tilesRes] = await Promise.all([
          axios.get('http://api.template-studio.nl/wp-json/wp/v2/pages?slug=werk_' + query.lang),
          axios.get('http://api.template-studio.nl/wp-json/wp/v2/werkitem_' + query.lang),
        ])
        return {
          content: contentRes.data[0],
          tiles: tilesRes.data,
        }
      // }
    } else {

      let [contentRes, tilesRes] = await Promise.all([
        axios.get('http://api.template-studio.nl/wp-json/wp/v2/pages?slug=werk_nl'),
        axios.get('http://api.template-studio.nl/wp-json/wp/v2/werkitem_nl'),
      ])
      return {
        content: contentRes.data[0],
        tiles: tilesRes.data,
      }


    }
  },

  methods:{
    goToWorkItems: function(){
      // window.scroll({ top: this.$el.querySelector("#workitems").getBoundingClientRect().top + this.$el.querySelector("#workitems").offsetTop, left: 0, behavior: 'smooth' });
      window.scroll({ top: this.$el.querySelector("#workitems").getBoundingClientRect().top, left: 0, behavior: 'smooth' });

    }
  },


  transition: 'bounce',





}
</script>

<style lang="scss" scoped>
#slideMeDownHover{
  display: inline-block;
  transition: all 0.25s ease-in-out;
  &:hover{
    transform:translateY(10px);
  }
}
</style>
