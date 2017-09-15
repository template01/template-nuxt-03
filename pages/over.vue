<template>
<defaultpage id="over">
  <div id="intro beige-background" class="uk-container uk-padding uk-padding-remove-horizontal uk-padding-remove-top">
    <div class="uk-padding">

      <div>
        <!-- <div></div> -->
        <div class="uk-align-center" :class="{'uk-width-2-3':!getsmallscreen}">
          <div>
            <h1 class="uk-hidden@m uk-text-center" style="text-decoration:underline">OVER</h1>
            <h1 v-html="content.content.rendered" style="font-weight:800"></h1>
          </div>
        </div>
        <!-- <div></div> -->
      </div>


    </div>
  </div>



  <div id="" class="section" :style="{'color':content.acf.section_a.background_color,'background-color':content.acf.section_a.background_color}" :uk-parallax="getsmallscreen ? 'y: 0,0; viewport: 0.4' : 'y: 0,0; viewport: 0.4'">
    <div class="slantTopRight" :style="{'border-color': 'transparent '+content.acf.section_a.background_color+' '+content.acf.section_a.background_color+' transparent'}"></div>

    <div class="uk-container" :style="{'color':content.acf.section_a.font_color}">
        <oversectioncontent :acfsection="content.acf.section_a.content"></oversectioncontent>

    </div>

  </div>


  <div id="" class="section" :style="{'color':content.acf.section_b.background_color,'background-color':content.acf.section_b.background_color}" :uk-parallax="getsmallscreen ? 'y: 300,0; viewport: 0.4' : 'y: 100,0; viewport: 0.4'">
    <div class="slantTopLeft" :style="{'border-color': 'transparent '+content.acf.section_b.background_color+' '+content.acf.section_b.background_color+' transparent'}"></div>

    <div class="uk-container" :style="{'color':content.acf.section_b.font_color}">
        <oversectioncontent :acfsection="content.acf.section_b.content"></oversectioncontent>

    </div>

  </div>



  <div id="" class="section section-last" :style="{'color':content.acf.section_c.background_color,'background-color':content.acf.section_c.background_color}" :uk-parallax="getsmallscreen ? 'y: 300,0; viewport: 0.4' : 'y: 100,0; viewport: 0.4'">
    <div class="slantTopRight" :style="{'border-color': 'transparent '+content.acf.section_c.background_color+' '+content.acf.section_c.background_color+' transparent'}"></div>

    <div class="uk-container" :style="{'color':content.acf.section_c.font_color}">
        <oversectioncontent :acfsection="content.acf.section_c.content"></oversectioncontent>

    </div>

  </div>




  <div class="beige-background uk-container uk-padding uk-padding-remove-horizontal uk-padding-remove-top uk-position-relative">
    <div class="slantTopLeft"></div>

    <div class="uk-padding">

      <div>
        <!-- <div></div> -->
        <div class="uk-align-center" :class="{'uk-width-2-3':!getsmallscreen}">
          <div>
            <h1 class="uk-hidden@m uk-text-center" style="text-decoration:underline">OVER</h1>
            <h1 v-html="content.acf.content_bottom" style="font-weight:800"></h1>
          </div>
        </div>
        <!-- <div></div> -->
      </div>


    </div>
  </div>


</defaultpage>
</template>

<script>
import defaultpage from '~/components/defaultpage.vue'
import oversectioncontent from '~/components/over/oversectioncontent.vue'
import axios from 'axios'

export default {
  components: {
    defaultpage,
    oversectioncontent
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
        axios.get('http://api.template-studio.nl/wp-json/wp/v2/pages?slug=over_' + query.lang),
      ])
      return {
        content: contentRes.data[0],
      }
      // }
    } else {

      let [contentRes] = await Promise.all([
        axios.get('http://api.template-studio.nl/wp-json/wp/v2/pages?slug=over_nl'),
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
