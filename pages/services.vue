<template>
<defaultpage class="beige-background" id="over">

  <div id="" class="section" :style="{'color':content.acf.section_a.background_color,'background-color':content.acf.section_a.background_color}" :uk-parallax="getsmallscreen ? 'y: 0,0; viewport: 0.4' : 'y: 0,0; viewport: 0.4'">

    <div class="slantTopRight" :style="{'border-color': 'transparent '+content.acf.section_a.background_color+' '+content.acf.section_a.background_color+' transparent'}"></div>

    <div class="uk-container" :style="{'color':content.acf.section_a.font_color}">
      <sectioncontent :acfsection="content.acf.section_a.content"></sectioncontent>

    </div>

  </div>


  <div id="" class="section" :style="{'color':content.acf.section_b.background_color,'background-color':content.acf.section_b.background_color}" :uk-parallax="getsmallscreen ? 'y: 300,0; viewport: 0.4' : 'y: 100,0; viewport: 0.4'">
    <div class="slantTopLeft" :style="{'border-color': 'transparent '+content.acf.section_b.background_color+' '+content.acf.section_b.background_color+' transparent'}"></div>

    <div class="uk-container" :style="{'color':content.acf.section_b.font_color}">
      <sectioncontent :acfsection="content.acf.section_b.content"></sectioncontent>

    </div>

  </div>



  <div id="" class="section section-last" :style="{'color':content.acf.section_c.background_color,'background-color':content.acf.section_c.background_color}" :uk-parallax="getsmallscreen ? 'y: 300,0; viewport: 0.4' : 'y: 100,0; viewport: 0.4'">
    <div class="slantTopRight" :style="{'border-color': 'transparent '+content.acf.section_c.background_color+' '+content.acf.section_c.background_color+' transparent'}"></div>

    <div class="uk-container" :style="{'color':content.acf.section_c.font_color}">
      <sectioncontent :acfsection="content.acf.section_c.content"></sectioncontent>

    </div>

  </div>


  <div class="beige-background uk-container uk-padding uk-padding-remove-horizontal uk-padding-remove-top uk-position-relative">
    <div class="slantTopLeft"></div>
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
        axios.get('http://api.template-studio.nl/wp-json/wp/v2/pages?slug=services_' + query.lang),
      ])
      return {
        content: contentRes.data[0],
      }
      // }
    } else {

      let [contentRes] = await Promise.all([
        axios.get('http://api.template-studio.nl/wp-json/wp/v2/pages?slug=services_nl'),
      ])
      return {
        content: contentRes.data[0],
      }


    }
  },

}
</script>

<style lang="scss" scoped>
#over {

    .section {
        &:not(.section-last) {
            -webkit-box-shadow: 0 300px 0 0;
            -moz-box-shadow: 0 300px 0 0;
            box-shadow: 0 300px 0 0;

        }

        &.section-last {
            padding-bottom: 40px;
        }
    }

    #intro {
        overflow-y: hidden;
    }

}
</style>
