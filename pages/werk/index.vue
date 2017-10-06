<template>
<defaultpage class="beige-background" id="werk">

  <div class="sendToFront">


    <div class="beige-background uk-container uk-padding uk-padding-remove-horizontal uk-padding-remove-top  uk-hidden@m ">
      <h1 class="uk-text-center uk-padding "><span class="mobilePageHeader">{{$t("menu.topmenu.work")}}</span></h1>
    </div>


    <div id="" class="section" :style="{'color':content.acf.section_a.background_color,'background-color':content.acf.section_a.background_color}" :uk-parallax="getsmallscreen ? 'y: 0,0; viewport: 0.4' : 'y: 0,0; viewport: 0.4'">
      <div class="slantTopLeft" :style="{'border-color': 'transparent '+content.acf.section_a.background_color+' '+content.acf.section_a.background_color+' transparent'}"></div>

      <div class="uk-container" :style="{'color':content.acf.section_a.font_color}">
        <sectioncontent :ignorePaddingBottom="true" :acfsection="content.acf.section_a.content"></sectioncontent>
        <div class="uk-padding uk-padding-remove-horizontal uk-padding-remove-top">
        </div>
      </div>

    </div>

    <div class="section" :style="{'color':content.acf.section_a.background_color,'background-color':content.acf.section_a.background_color}">

      <div class="uk-container " :style="{'background':content.acf.section_a.background_color}">
        <div class="killPadding " id="workitems" :uk-parallax="getsmallscreen ? '' : 'y: 300,0; viewport: 0.2'" :style="getsmallscreen ? {} :{'margin-top':'-300px'}">

          <div class=" uk-grid-collapse uk-text-center" uk-grid uk-height-match>
            <werktileitem v-bind:key="tile.id" v-for="tile in tiles" :datainput="tile"></werktileitem>

          </div>
        </div>
      </div>

    </div>
  </div>


  <div id="" class="section sendToBack" :style="{'color':content.acf.section_b.background_color,'background-color':content.acf.section_b.background_color}" :uk-parallax="getsmallscreen ? '' : 'y: -25,0%; viewport: 0.7'">

    <div class="uk-container" :style="{'color':content.acf.section_b.font_color}">
      <sectioncontent :ignorePaddingBottom="true" :acfsection="content.acf.section_b.content"></sectioncontent>

    </div>

    <div class="uk-container" :style="{'color':content.acf.section_b.font_color}">
      <div class="uk-align-center uk-width-2-3@m">
        <div class="uk-text-center" uk-grid uk-height-match>
          <werkarchiveitem class="uk-width-1-3@m" v-bind:key="archiveItem.id" v-for="(archiveItem, index) in archive" :index="index" :datainput="archiveItem" :fullArchive="archive"></werkarchiveitem>
        </div>
      </div>
      <div class="uk-padding uk-padding-remove-horizontal uk-padding-remove-top">
      </div>
      <!-- <sectioncontent :ignorePaddingBottom="true" :acfsection="content.acf.section_a.content"></sectioncontent> -->
      <!-- <div class="uk-padding uk-padding-remove-horizontal uk-padding-remove-top"> -->
      <!-- </div> -->
    </div>

    <div class="slantTopLeft uk-position-relative" :style="{'top':'0px','border-color': '#fffef5'+' '+'#fffef5'+' '+'#fffef5'+' '+content.acf.section_b.background_color}"></div>
  </div>
  <!--
  <div class="slantTopLeft" :style="{'border-color': 'transparent '+content.acf.section_a.background_color+' '+content.acf.section_a.background_color+' transparent'}"></div> -->

</defaultpage>
</template>

<script>
import axios from 'axios'
import defaultpage from '~/components/defaultpage.vue'
import sectioncontent from '~/components/sections_component/sectioncontent.vue'
import werktileitem from '~/components/werk/werktileitem.vue'
import werkarchiveitem from '~/components/werk/werkarchiveitem.vue'
// import werkarchiveitem from '~/components/werk/werkarchiveitem.vue'



export default {

  components: {
    defaultpage,
    sectioncontent,
    werktileitem,
    werkarchiveitem
    // werkarchiveitem
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
      let [contentRes, tilesRes, archiveRes] = await Promise.all([
        axios.get('http://api.template-studio.nl/wp-json/wp/v2/pages?slug=werk_' + query.lang),
        axios.get('http://api.template-studio.nl/wp-json/wp/v2/werkitem_' + query.lang +'?featured=1&isfeatured=1'),
        axios.get('http://api.template-studio.nl/wp-json/wp/v2/werkitem_' + query.lang +'?featured=1&isfeatured=0'),
      ])
      return {
        content: contentRes.data[0],
        tiles: tilesRes.data,
        archive: archiveRes.data,

      }
      // }
    } else {

      let [contentRes, tilesRes, archiveRes] = await Promise.all([
        axios.get('http://api.template-studio.nl/wp-json/wp/v2/pages?slug=werk_nl'),
        axios.get('http://api.template-studio.nl/wp-json/wp/v2/werkitem_nl?featured=1&isfeatured=1'),
        axios.get('http://api.template-studio.nl/wp-json/wp/v2/werkitem_nl?featured=1&isfeatured=0'),
      ])
      return {
        content: contentRes.data[0],
        tiles: tilesRes.data,
        archive: archiveRes.data,
      }


    }
  },

  methods: {
    goToWorkItems: function() {
      // window.scroll({ top: this.$el.querySelector("#workitems").getBoundingClientRect().top + this.$el.querySelector("#workitems").offsetTop, left: 0, behavior: 'smooth' });
      window.scroll({
        top: this.$el.querySelector("#workitems").getBoundingClientRect().top,
        left: 0,
        behavior: 'smooth'
      });

    }
  },


  transition: 'bounce',





}
</script>

<style lang="scss" scoped>

.sendToBack {
    z-index: 1;
}

.sendToFront{
  z-index: 2;
  position: relative;

}

#slideMeDownHover {
    display: inline-block;
    transition: all 0.25s ease-in-out;
    &:hover {
        transform: translateY(10px);
    }
}
</style>
