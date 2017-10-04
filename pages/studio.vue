<template>
<defaultpage class="beige-background" id="studio">


  <div class="beige-background uk-container uk-padding uk-padding-remove-horizontal uk-padding-remove-top  uk-hidden@m ">
    <h1 class="uk-text-center uk-padding "><span class="mobilePageHeader">{{$t("menu.topmenu.about")}}</span></h1>
  </div>



  <div id="" class="section section-last" :style="{'color':content.acf.section_a.background_color,'background-color':content.acf.section_a.background_color}">
    <div class="slantTopLeft" :style="{'border-color': 'transparent '+content.acf.section_a.background_color+' '+content.acf.section_a.background_color+' transparent'}"></div>

    <div class="uk-container uk-padding uk-padding-remove-vertical" :style="{'color':content.acf.section_a.font_color}">
        <sectioncontent :acfsection="content.acf.section_a.content"></sectioncontent>

    </div>

  </div>


  <div class="beige-background uk-padding-remove-horizontal uk-padding-remove-top uk-position-relative" :class="{'uk-padding ':getsmallscreen}">
    <div class="slantTopRight"></div>
  </div>

</defaultpage>
</template>

<script>
import defaultpage from '~/components/defaultpage.vue'
import sectioncontent from '~/components/sections_component/sectioncontent.vue'
import axios from 'axios'

export default {
  components: {
    defaultpage,
    sectioncontent
  },
  data: function() {
    return {
      paralaxy: '500,0',
    }
  },



  transition: 'bounce',

  async asyncData({
    params,
    query,
    error
  }) {
    if (query.hasOwnProperty('lang')) {
      let [contentRes] = await Promise.all([
        axios.get('http://api.template-studio.nl/wp-json/wp/v2/pages?slug=studio_' + query.lang),
      ])
      return {
        content: contentRes.data[0],
      }
      // }
    } else {

      let [contentRes] = await Promise.all([
        axios.get('http://api.template-studio.nl/wp-json/wp/v2/pages?slug=studio_nl'),
      ])
      return {
        content: contentRes.data[0],
      }


    }
  },

}
</script>

<style lang="scss" scoped>

#studio {

    .section{
      &:not(.section-last){
        -webkit-box-shadow: 0 300px 0 0;
        -moz-box-shadow: 0 300px 0 0;
        box-shadow: 0 300px 0 0;

      }

      &.section-last{
        padding-bottom: 40px;
      }
    }

    #intro {
        overflow-y: hidden;
    }

}
</style>
